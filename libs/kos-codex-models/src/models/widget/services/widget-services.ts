import {
  KosLog,
  type ClientResponse,
  type DeepRequired,
  type ElementType,
  type ServiceResponse,
} from "@kosdev-code/kos-ui-sdk";

import API, { type KosApi, type ApiPath } from "../../../utils/service";

const log = KosLog.createLogger({
  name: "widget-container-service",
  group: "Services",
});

const SERVICE_PATH: ApiPath = "/api/ext/dispense/assignments";
export type WidgetContainerClientResponse = ClientResponse<
  KosApi,
  typeof SERVICE_PATH,
  "get"
>;
export type WidgetContainerResponse = DeepRequired<
  ElementType<WidgetContainerClientResponse>
>;

/**
 * @category Service
 * Retrieves the initial list of  widget-container data.
 */
export const getWidgetContainer = async (): Promise<
  ServiceResponse<WidgetContainerClientResponse>
> => {
  log.debug("sending GET for  widget-container");
  return await API.get(SERVICE_PATH);
};
