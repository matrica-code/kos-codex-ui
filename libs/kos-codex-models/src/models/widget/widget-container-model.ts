import {
  kosModel,
  kosChild,
  KosModelContainer,
  kosTopicHandler,
  createPropKey,
} from "@kosdev-code/kos-ui-sdk";
import type {
  KosContextLogger,
  KosCreationContext,
  IKosModelContainer,
  IKosDataModel,
  IKosModelHolder,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";

import type { WidgetContainerOptions, WidgetOptions } from "./types";
import type { WidgetModel } from "./widget-model";
import { Widget } from ".";
import { getWidgetContainer } from "./services";

export const MODEL_TYPE = "widget-container-model";

export interface WidgetResponse {
  containerId: string;
  holderPath: string;
  ingredientId: string;
  error?: string;
}

// extract-code prop-key
const WIDGET_PROP_KEY = createPropKey<WidgetModel>("id");

export type WidgetContainerModel =
  PublicModelInterface<WidgetContainerModelImpl>;

@kosModel(MODEL_TYPE)
export class WidgetContainerModelImpl
  implements IKosIdentifiable, IKosModelHolder<WidgetModel>, IKosDataModel
{
  id: string;
  private logger: KosContextLogger;
  @kosChild private _models: IKosModelContainer<WidgetModel>;
  constructor(
    modelId: string,
    options: WidgetContainerOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;
    this._models = new KosModelContainer<WidgetModel>({ parentId: modelId });
    if (options) {
      // Assign options properties here.
    }
  }

  // extract-code prop-key-handler
  @kosTopicHandler({
    topic: `/kos/widgets/${WIDGET_PROP_KEY}/update`,
    websocket: true,
  })
  handleWidgetUpdate(message: WidgetOptions) {
    this.updateModel(message);
  }

  // extract-code widget-container-handler
  @kosTopicHandler({
    topic: "/kos/assignments/add",
    websocket: true,
  })
  handleWidgetAdd(message: WidgetResponse) {
    console.log("add", message);

    this.addModel(
      Widget.instance(message.containerId).options(message).build(),
    );
  }

  // extract-code widget-container-wildcard
  @kosTopicHandler({
    topic: "/kos/assignments/*",
    websocket: true,
  })
  handleWidgetWildcard(
    message: WidgetResponse,
    payload: { [key: string]: any },
  ) {
    console.log("wildcard", message, payload);
  }

  // extract-code widget-container-condition
  @kosTopicHandler({
    topic: "/kos/assignments/add",
    websocket: true,
    condition: (message: WidgetResponse) => message.error !== undefined,
  })
  handleWidgetCondition(message: WidgetResponse) {
    console.log("condition", message);
  }

  getModel(id: string) {
    return this._models.getModel(id);
  }
  get models() {
    return this._models;
  }
  get data() {
    return this._models.data;
  }

  updateModel(options: WidgetContainerOptions): void {
    // Update model properties here.
  }

  updateWidgets(data: Partial<WidgetOptions>[]) {
    data.forEach((widget) => {
      this.addModel(
        Widget.instance(widget.containerId ?? `WIDGET_ID_${widget.containerId}`)
          .options({
            containerId: widget.containerId || "",
            ingredientId: widget.ingredientId || "",
            holderPath: widget.holderPath || "",
          })
          .build(),
      );
    });
  }

  addModel(model: WidgetModel) {
    this._models.addModel(model);
  }

  removeModel(id: string) {
    this._models.removeModel(id);
  }
  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing widget-container container ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading widget-container container ${this.id}`);
    const [err, data] = await getWidgetContainer();
    if (err) {
      this.logger.error(`Failed to load widget-container data: ${err}`);
      return;
    } else if (data) {
      this.updateWidgets(data);
    }
  }
}
