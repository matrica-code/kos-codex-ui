import fs from "fs";

const transform = (fileInfo, { jscodeshift: j }, options) => {
  let snippets = {};
  const root = j(fileInfo.source);
  const nodesToRemove: any[] = [];
  const nodesToExport = new Map();
  try {
    const extractRaw = fs.readFileSync(options.snippetFile, "utf8");
    snippets = JSON.parse(extractRaw);
  } catch (e) {
    console.error("Error reading snippet file", e);
  }

  root.find(j.Node).forEach((node) => {
    if (!node.value.leadingComments) return;

    if (
      node.value.leadingComments.some((c) =>
        c.value.includes("extract-code ignore")
      )
    ) {
      nodesToRemove.push(node);
      return;
    }

    const codeExtractComment = node.value.leadingComments.find((c) =>
      c.value.includes("extract-code")
    );
    if (!codeExtractComment) return;

    const snippetName = codeExtractComment.value.split("extract-code ")[1];

    const name = getName(snippetName, fileInfo.path);

    const isAtStartOfFile = node.value.type === j.ImportDeclaration.name; 
    if (isAtStartOfFile) {
      nodesToExport.set(name, fileInfo.source);
      return;
    }

    nodesToExport.set(name, node);
  });

  nodesToRemove.forEach((node) => {
    j(node).remove();
  });

  nodesToExport.forEach((node, name) => {
    const source = typeof node === "string" ? node : j(node).toSource();
    snippets[name] = source.replace(/^\/\/ extract-code.*\n/, "");
  });

  fs.writeFileSync(options.snippetFile, JSON.stringify(snippets, null, 2));

  return fileInfo.source;
};

function getName(name, path) {
  // Add filepath
  return `${name}@${path.split('/').pop()}`
}

export default transform;
