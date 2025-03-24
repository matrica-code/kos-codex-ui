import type {
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
  FutureContainer,
  FutureAwareContainer,
} from "@kosdev-code/kos-ui-sdk";
import { FutureHandler, kosFuture, kosModel } from "@kosdev-code/kos-ui-sdk";

import { startFuture } from "./services";

export const MODEL_TYPE = "futures-model";

export type FuturesModel = PublicModelInterface<FuturesModelImpl>;

// extract-code future-model
@kosModel(MODEL_TYPE)
export class FuturesModelImpl
  implements IKosDataModel, IKosIdentifiable, FutureContainer
{
  id: string;
  futureHandler: FutureAwareContainer;

  constructor(modelId: string) {
    this.id = modelId;
    this.futureHandler = new FutureHandler(this);
  }

  @kosFuture()
  async start(trackerId?: string) {
    const [err, data] = await startFuture(trackerId || "");
    if (err) {
      return;
    } else if (data) {
      return data;
    }
    return null;
  }

  get progress(): number | undefined {
    return this.futureHandler.future?.progress;
  }

  get timeLeft(): number | undefined {
    if (!this.futureHandler.future?.remainingTimeMs) {
      return 0;
    }
    return this.futureHandler.future?.remainingTimeMs / 1000;
  }

  get isComplete(): boolean {
    return this.futureHandler.future?.endState === "SUCCESS";
  }

  get isInProgress(): boolean {
    return !!this.futureHandler.future && !this.futureHandler.future.endState;
  }
}
