import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import { kosModel, kosModelEffect } from "@kosdev-code/kos-ui-sdk";

import type { CountdownOptions } from "./types";

import type { CounterModel } from "../counter";

export const MODEL_TYPE = "countdown-model";

export type CountdownModel = PublicModelInterface<CountdownModelImpl>;

// extract-code countdown
@kosModel(MODEL_TYPE)
export class CountdownModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  private logger: KosContextLogger;
  private counter: CounterModel;
  constructor(
    modelId: string,
    options: CountdownOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;
    this.counter = options.companionParent;

    console.log("initializing");
    if (options) {
      // Assign options properties here.
    }
  }

  get timeRemaining() {
    return Math.max(30 - this.counter.count, 0);
  }

  reset = () => {
    this.counter.stopCounter();
    this.counter.count = 0;
    this.counter.startCounter();
  };

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing countdown ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading countdown ${this.id}`);
  }
}
