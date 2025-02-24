import {
  kosModel,
  kosChild,
  KosModelContainer,
  kosReference,
} from "@kosdev-code/kos-ui-sdk";
import type {
  IKosModelContainer,
  IKosDataModel,
  IKosModelHolder,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import type { UserContainerOptions, UserOptions } from "./types";
import type { UserModel } from "./user-model";
import { User } from "./user-registration";

export const MODEL_TYPE = "user-container-model";

export const INDEX_BY_TEAM_ID = "byTeamId";
export const INDEX_BY_ROLE_TYPE = "byRoleType";

export type UserContainerModel = PublicModelInterface<UserContainerModelImpl>;

@kosModel(MODEL_TYPE)
export class UserContainerModelImpl
  implements IKosIdentifiable, IKosModelHolder<UserModel>, IKosDataModel
{
  id: string;
  @kosChild private _models: IKosModelContainer<UserModel>;

  constructor(modelId: string) {
    this.id = modelId;

    // extract-code model-index
    this._models = new KosModelContainer<UserModel>({
      parentId: modelId,
      indexMap: {
        [INDEX_BY_TEAM_ID]: "teamId",
        [INDEX_BY_ROLE_TYPE]: (model) =>
          ["admin", "superadmin"].includes(model.role) ? "admin" : "non-admin",
      },
    });
  }

  getModel(id: string) {
    return this._models.getModel(id);
  }
  get models() {
    return this._models;
  }
  get data() {
    return this._models.data;
  }

  // extract-code model-index-get
  getUsersByTeamId(id: string) {
    return this.models.getIndexByKey("byTeamId", id);
  }

  updateModel(options: UserContainerOptions): void {
    // Update model properties here.
  }

  createUser(options: UserOptions) {
    const model = User.instance(`user_${this._models.data.length}`)
      .options(options)
      .build();

    this.addModel(model);
  }

  addModel(model: UserModel) {
    this._models.addModel(model);
  }

  removeModel(id: string) {
    this._models.removeModel(id);
  }
}
