import { kosModel, kosChild, KosModelContainer } from "@kosdev-code/kos-ui-sdk";
import type {
  KosContextLogger,
  KosCreationContext,
  IKosModelContainer,
  IKosDataModel,
  IKosModelHolder,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";

import type { TroublesContainerOptions, TroublesOptions } from "./types";
import type { TroublesModel } from "./troubles-model";
import { getTroublesContainer } from "./services";
import { Troubles } from "./troubles-registration";

export const MODEL_TYPE = "troubles-container-model";

export type TroublesContainerModel =
  PublicModelInterface<TroublesContainerModelImpl>;

@kosModel(MODEL_TYPE)
export class TroublesContainerModelImpl
  implements IKosIdentifiable, IKosModelHolder<TroublesModel>, IKosDataModel
{
  id: string;
  private logger: KosContextLogger;
  @kosChild private _models: IKosModelContainer<TroublesModel>;
  constructor(
    modelId: string,
    options: TroublesContainerOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;
    this._models = new KosModelContainer<TroublesModel>({ parentId: modelId });
    if (options) {
      // Assign options properties here.
    }
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

  // extract-code update
  updateTroubles(data: TroublesOptions[]) {
    data.forEach((trouble) => {
      this.addModel(
        Troubles.instance(`TROUBLE_ID_${trouble.id}`)
          .options({ ...trouble })
          .build(),
      );
    });
  }

  updateModel(options: TroublesContainerOptions): void {
    // Update model properties phere.
  }

  addModel(model: TroublesModel) {
    this._models.addModel(model);
  }

  removeModel(id: string) {
    this._models.removeModel(id);
  }

  // extract-code initialize
  async init(): Promise<void> {
    this.logger.debug(`initializing troubles-container container ${this.id}`);
    const [err, data] = await getTroublesContainer();
    if (err) {
      this.logger.error("Unable to access troubles endpoint");
      return;
    } else if (data) {
      this.updateTroubles(data);
    }
  }

  async load(): Promise<void> {
    this.logger.debug(`loading troubles-container container ${this.id}`);
  }
}
