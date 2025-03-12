import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
  KosConfigProperty,
} from "@kosdev-code/kos-ui-sdk";
import { kosConfigProperty, kosModel } from "@kosdev-code/kos-ui-sdk";

import type { UnitExampleOptions } from "./types";

export const MODEL_TYPE = "unit-example-model";

export type UnitExampleModel = PublicModelInterface<UnitExampleModelImpl>;

@kosModel(MODEL_TYPE)
export class UnitExampleModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  private logger: KosContextLogger;

  @kosConfigProperty({
    path: "app:kosdev.ddk:app",
    attribute: "maxPourVolume",
  })
  maxPourVolume!: KosConfigProperty<number>;

  constructor(
    modelId: string,
    options: UnitExampleOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;

    if (options) {
      // Assign options properties here.
    }
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing unit-example ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading unit-example ${this.id}`);
  }
}
