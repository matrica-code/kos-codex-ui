import { kosModel } from "@kosdev-code/kos-ui-sdk";
import type {
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";

export const MODEL_TYPE = "counter-model";

export type CounterModel = PublicModelInterface<CounterModelImpl>;

// extract-code counter-model
@kosModel(MODEL_TYPE)
export class CounterModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  count = 0;
  interval: NodeJS.Timeout | null = null;

  constructor(modelId: string) {
    this.id = modelId;
  }

  increment(): void {
    this.count += 1;
  }

  stopCounter(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  startCounter(): void {
    this.interval = setInterval(() => {
      this.increment();
    }, 1000);
  }

  toggleCounter = (): void =>
    this.interval ? this.stopCounter() : this.startCounter();

  get isCounting() {
    return !!this.interval;
  }

  // -------------------LIFECYCLE----------------------------

  async load(): Promise<void> {
    this.startCounter();
  }

  async destroy(): Promise<void> {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

// extract-code counter-model-simple
@kosModel(MODEL_TYPE)
export class CounterModelSimple implements IKosDataModel, IKosIdentifiable {
  id: string;
  count = 0;
  interval: NodeJS.Timeout | null = null;

  constructor(modelId: string) {
    this.id = modelId;
  }

  increment(): void {
    this.count += 1;
  }

  async load(): Promise<void> {
    this.interval = setInterval(() => {
      this.increment();
    }, 1000);
  }

  async destroy(): Promise<void> {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
