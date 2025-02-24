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

import type { HandleContainerOptions } from "./types";
import type { HandleModel } from "./handle-model";

export const MODEL_TYPE = "handle-container-model";

export type HandleContainerModel =
  PublicModelInterface<HandleContainerModelImpl>;

@kosModel(MODEL_TYPE)
export class HandleContainerModelImpl
  implements IKosIdentifiable, IKosModelHolder<HandleModel>, IKosDataModel
{
  id: string;
  private logger: KosContextLogger;
  @kosChild private _models: IKosModelContainer<HandleModel>;
  constructor(
    modelId: string,
    options: HandleContainerOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;
    this._models = new KosModelContainer<HandleModel>({ parentId: modelId });
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

  updateModel(options: HandleContainerOptions): void {
    // Update model properties here.
  }

  addModel(model: HandleModel) {
    this._models.addModel(model);
  }

  removeModel(id: string) {
    this._models.removeModel(id);
  }
  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing handle-container container ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading handle-container container ${this.id}`);
  }
}
