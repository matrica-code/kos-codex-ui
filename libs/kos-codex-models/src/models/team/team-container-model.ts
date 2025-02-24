import { kosModel, kosChild, KosModelContainer } from "@kosdev-code/kos-ui-sdk";
import type {
  IKosModelContainer,
  IKosDataModel,
  IKosModelHolder,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import type { TeamModel } from "./team-model";
import { Team } from "./team-registration";

export const MODEL_TYPE = "team-container-model";

export type TeamContainerModel = PublicModelInterface<TeamContainerModelImpl>;

@kosModel(MODEL_TYPE)
export class TeamContainerModelImpl
  implements IKosIdentifiable, IKosModelHolder<TeamModel>, IKosDataModel
{
  id: string;
  // extract-code property
  @kosChild private _models: IKosModelContainer<TeamModel>;
  constructor(modelId: string) {
    this.id = modelId;
    this._models = new KosModelContainer<TeamModel>({ parentId: modelId });
    this.createTeam = this.createTeam.bind(this);
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

  // extract-code method
  createTeam(name: string) {
    const model = Team.factory(`${this._models.data.length + 1}`)({
      name,
    });

    this.addModel(model);
  }

  addModel(model: TeamModel) {
    this._models.addModel(model);
  }

  removeModel = (id: string) => {
    this._models.removeModel(id);
  };

  // extract-code ignore
  async init(): Promise<void> {
    console.log(`initializing team container`);
  }

  // extract-code ignore
  async load(): Promise<void> {
    console.log(`loading team container`);
  }

  // extract-code ignore
  async ready(): Promise<void> {
    console.log(`read team container`);
  }

  // extract-code ignore
  async deactivate(): Promise<void> {
    console.log(`deactivate team container`);
  }
}
