import { kosDependency, kosModel } from "@kosdev-code/kos-ui-sdk";
import type {
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import { Counter, CounterModel } from "../counter";

export const MODEL_TYPE = "color-model";

export type ColorModel = PublicModelInterface<ColorModelImpl>;

// extract-code color-model
@kosModel(MODEL_TYPE)
export class ColorModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;

  @kosDependency<CounterModel>({ modelType: Counter.type })
  counterModel!: CounterModel;

  private colorArray: string[] = ["#048FEC", "#9747FF", "#01528A", "#B4DEFA"];

  constructor(modelId: string) {
    this.id = modelId;
  }

  get color(): string {
    return this.colorArray[this.counterModel.count % this.colorArray.length];
  }
}
