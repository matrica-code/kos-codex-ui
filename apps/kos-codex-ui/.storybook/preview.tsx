import "reflect-metadata";
import { Global } from "@emotion/react";
import { Preview } from "@storybook/react";
import { getStyles } from "@kosdev-code/kos-ddk-styles";
import snippets from "./snippets.json";
import {
  ErrorBoundaryWithFallback,
  KosTranslationProvider,
  LoadingMessage,
} from "@kosdev-code/kos-ui-sdk";
import { ElementType, Suspense } from "react";
import { MemoryRouter } from "react-router";
import { KosCoreContextProvider } from "./registration";
import {
  ApplicationComponentConfigurationProvider,
  ApplicationProvider,
} from "@kosdev-code/kos-ddk-model-components";
import type { ComponentMode } from "@kosdev-code/kos-ddk-components";

export const globalTypes = {
  mode: {
    description: "DDK Render Mode",
    defaultValue: "compact",
    toolbar: {
      title: "Render Mode",
      icon: "circlehollow",
      items: ["standard", "compact"],
      dynamicTitle: true,
    },
  },
  snippets: {
    description: "Snippets",
    defaultValue: snippets,
    toolbar: {
      title: "Snippets",
      icon: "code",
      items: snippets,
    },
  },
};

export const decorators = [
  (
    Story: ElementType,
    context: { globals: { mode: ComponentMode; snippets: typeof snippets } },
  ) => (
    <MemoryRouter initialEntries={["/"]}>
      <Global
        styles={getStyles(
          context.globals.mode === "compact" ? "compact" : "flex-eu",
        )}
      />
      <ErrorBoundaryWithFallback>
        <Suspense fallback={<LoadingMessage />}>
          <KosCoreContextProvider>
            <KosTranslationProvider appContext={["app/system"]} locale="en">
              <ApplicationProvider>
                <ApplicationComponentConfigurationProvider
                  modalModeOverride={
                    context.globals.mode === "compact"
                      ? "fullscreen"
                      : undefined
                  }
                  componentModeOverride={context.globals.mode}
                >
                  <Suspense>
                    <Story />
                  </Suspense>
                </ApplicationComponentConfigurationProvider>
              </ApplicationProvider>
            </KosTranslationProvider>
          </KosCoreContextProvider>
        </Suspense>
      </ErrorBoundaryWithFallback>
    </MemoryRouter>
  ),
];

const preview: Preview = {
  parameters: {
    options: {},
    backgrounds: {
      values: [
        {
          name: "dark",
          value: "var(--ncui-generic-color-grey-70)",
        },
      ],
    },
  },
};

export default preview;
