import { kosModel } from "@kosdev-code/kos-ui-sdk";
import type {
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import type { TeamOptions } from "./types";

export const MODEL_TYPE = "team-model";

export type TeamModel = PublicModelInterface<TeamModelImpl>;

// extract-code TeamModel
@kosModel(MODEL_TYPE)
export class TeamModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  name!: string;

  constructor(modelId: string, options: TeamOptions) {
    this.id = modelId;

    if (options) {
      this.name = options.name;
      // Assign options properties here.
    }
  }

  remove() {
    this.remove();
  }

  // extract-code ignore
  async init(): Promise<void> {
    console.log(`initializing team ${this.id}`);
  }

  // extract-code ignore
  async load(): Promise<void> {
    console.log(`loading team ${this.id}`);
  }

  // extract-code ignore
  async ready(): Promise<void> {
    console.log(`read team ${this.id}`);
  }

  // extract-code ignore
  async deactivate(): Promise<void> {
    console.log(`deactivate team ${this.id}`);
  }
}
