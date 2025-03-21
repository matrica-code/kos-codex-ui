import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import { kosModel, kosModelEffect } from "@kosdev-code/kos-ui-sdk";

import type { TimerOptions } from "./types";

import type { CounterModel } from "../counter";

export const MODEL_TYPE = "timer-model";

export type TimerModel = PublicModelInterface<TimerModelImpl>;

@kosModel(MODEL_TYPE)
export class TimerModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  private logger: KosContextLogger;
  private counter: CounterModel;
  constructor(
    modelId: string,
    options: TimerOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;

    this.counter = options.companionParent;

    if (options) {
      // Assign options properties here.
    }
  }

  get timeRemaining() {
    return Math.max(30 - this.counter.count);
  }

  reset() {
    this.counter.count = 0;
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing timer ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading timer ${this.id}`);
  }
}
