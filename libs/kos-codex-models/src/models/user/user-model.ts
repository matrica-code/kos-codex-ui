import { kosModel } from "@kosdev-code/kos-ui-sdk";
import type {
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import type { UserOptions } from "./types";

export const MODEL_TYPE = "user-model";

export type UserModel = PublicModelInterface<UserModelImpl>;
// extract-code UserModel
@kosModel(MODEL_TYPE)
export class UserModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  name!: string;
  role!: string;

  teamId!: string;

  constructor(modelId: string, options: UserOptions) {
    this.id = modelId;

    this.name = options.name;
    this.role = options.role;
    this.teamId = options.teamId;
  }

  updateModel(options: UserOptions): void {
    // Update model properties here.
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    console.log(`initializing user ${this.id}`);
  }

  async load(): Promise<void> {
    console.log(`loading user ${this.id}`);
  }
}
