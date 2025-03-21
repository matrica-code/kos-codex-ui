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
      // Handle insertion logic here.
    }
  }
}
