import type {
  KosContextLogger,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
  KosConfigProperty,
} from "@kosdev-code/kos-ui-sdk";
import { kosConfigProperty, kosModel } from "@kosdev-code/kos-ui-sdk";
import { OcclusionPolicyOptions } from "./types";

export const MODEL_TYPE = "device-model";

export type DeviceModel = PublicModelInterface<DeviceModelImpl>;

// extract-code DeviceModel
@kosModel(MODEL_TYPE)
export class DeviceModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  private logger: KosContextLogger;

  // extract-code device-model-string
  @kosConfigProperty({
    path: "kos:device",
    attribute: "name",
  })
  deviceName!: KosConfigProperty<string>;

  // extract-code device-model-enum
  @kosConfigProperty({
    path: "kos:service:pumpError",
    attribute: "occlusionPolicy",
  })
  occlusionPolicy!: KosConfigProperty<OcclusionPolicyOptions>;

  // extract-code device-model-boolean
  @kosConfigProperty({
    path: "kos:service:pumpError",
    attribute: "blockSoldOutWater",
  })
  blockSoldOutWater!: KosConfigProperty<boolean>;

  constructor(modelId: string) {
    this.id = modelId;
  }
}
