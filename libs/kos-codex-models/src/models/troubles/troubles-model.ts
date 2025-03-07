import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import { kosModel } from "@kosdev-code/kos-ui-sdk";

import type { TroublesOptions } from "./types";
import { getTroubles } from "./services";

export const MODEL_TYPE = "troubles-model";

export type TroublesModel = PublicModelInterface<TroublesModelImpl>;

@kosModel(MODEL_TYPE)
export class TroublesModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  numId?: number;
  boardPath?: string;
  isResolvable?: boolean;
  type?: string;
  private logger: KosContextLogger;

  // extract-code TroublesConstructor
  constructor(
    modelId: string,
    options: TroublesOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;
    if (options) {
      this.numId = options.id;
      this.boardPath = options.boardPath;
      this.isResolvable = options.resolvable;
      this.type = options.type;
    }
  }

  updateModel(options: Record<string, never>): void {
    // Update model properties here.
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing troubles ${this.id}`);
  }

  async ready(): Promise<void> {
    this.logger.debug(`loading troubles ${this.id}`);
  }
}
