import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
  KosConfigProperty,
} from "@kosdev-code/kos-ui-sdk";
import { kosConfigProperty, kosModel } from "@kosdev-code/kos-ui-sdk";

import type { ConfigurationOptions } from "./types";

export const MODEL_TYPE = "configuration-model";

export type ConfigurationModel = PublicModelInterface<ConfigurationModelImpl>;

@kosModel(MODEL_TYPE)
export class ConfigurationModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  private logger: KosContextLogger;

  // extract-code ConfigDecorator
  @kosConfigProperty({
    path: "kos:device",
    attribute: "name",
  })
  deviceName!: KosConfigProperty<string>;

  constructor(
    modelId: string,
    options: ConfigurationOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;

    if (options) {
      // Assign options properties here.
    }
  }

  get name() {
    return this.deviceName.value;
  }

  handleUpdate(name: string) {
    this.deviceName.updateProperty(name);
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing configuration ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading configuration ${this.id}`);
  }
}
