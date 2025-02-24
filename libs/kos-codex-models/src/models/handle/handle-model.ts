import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import { kosModel } from "@kosdev-code/kos-ui-sdk";

import type { HandleOptions } from "./types";

export const MODEL_TYPE = "handle-model";

export type HandleModel = PublicModelInterface<HandleModelImpl>;

@kosModel(MODEL_TYPE)
export class HandleModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  private logger: KosContextLogger;

  constructor(
    modelId: string,
    options: HandleOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;

    if (options) {
      // Assign options properties here.
    }
  }

  updateModel(options: HandleOptions): void {
    // Update model properties here.
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing handle ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading handle ${this.id}`);
  }
}
