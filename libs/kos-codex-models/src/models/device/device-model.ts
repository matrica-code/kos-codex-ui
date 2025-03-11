import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
  KosConfigProperty,
} from "@kosdev-code/kos-ui-sdk";
import { kosConfigProperty, kosModel } from "@kosdev-code/kos-ui-sdk";

export const MODEL_TYPE = "device-model";

export type DeviceModel = PublicModelInterface<DeviceModelImpl>;

// extract-code DeviceModel
@kosModel(MODEL_TYPE)
export class DeviceModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  private logger: KosContextLogger;

  @kosConfigProperty({
    path: "kos:device",
    attribute: "name",
  })
  deviceName!: KosConfigProperty<string>;

  constructor(modelId: string) {
    this.id = modelId;
  }
}
