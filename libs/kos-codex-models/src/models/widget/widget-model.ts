import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import { kosModel, kosModelEffect } from "@kosdev-code/kos-ui-sdk";

import type { WidgetOptions } from "./types";

export const MODEL_TYPE = "widget-model";

export type WidgetModel = PublicModelInterface<WidgetModelImpl>;

@kosModel(MODEL_TYPE)
export class WidgetModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  private logger: KosContextLogger;
  containerId!: string;
  ingredientId!: string;

  constructor(modelId: string, options: WidgetOptions) {
    this.id = modelId;

    if (options) {
      this.containerId = options.containerId;
      this.ingredientId = options.ingredientId;
    }
  }

  updateModel(options: WidgetOptions): void {
    // Update model properties here.
  }

  // extract-code kosModelEffect
  @kosModelEffect({
    dependencies: (model) => [model.containerId],
  })
  protected handleInsertion() {
    if (this.containerId) {
      this.logger.debug(
        `Widget ${this.id} inserted into container ${this.containerId}`,
      );
    }
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing widget ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading widget ${this.id}`);
  }
}
