// extract-code handle-service

import {
  KosLog,
  type ClientResponse,
  type DeepRequired,
  type ElementType,
  type ServiceResponse,
} from "@kosdev-code/kos-ui-sdk";

import API, { type KosApi, type ApiPath } from "../../../utils/service";

const log = KosLog.createLogger({
  name: "handle-container-service",
  group: "Services",
});

const SERVICE_PATH: ApiPath = "/api/kos/handles";
export type HandleContainerClientResponse = ClientResponse<
  KosApi,
  typeof SERVICE_PATH,
  "get"
>;
export type HandleContainerResponse = DeepRequired<
  ElementType<HandleContainerClientResponse>
>;

const HANDLE_SERVICE_PATH: ApiPath = "/api/kos/handles/{path}";

export type HandleClientResponse = ClientResponse<
  KosApi,
  typeof HANDLE_SERVICE_PATH,
  "get"
>;

/**
 * @category Service
 * Retrieves the initial list of  handle-container data.
 */
export const getHandleContainer = async (): Promise<
  ServiceResponse<HandleContainerClientResponse>
> => {
  log.debug("sending GET for  handle-container");
  return await API.get(SERVICE_PATH);
};

export const getHandle = async (
  id: string,
): Promise<ServiceResponse<HandleClientResponse>> => {
  return await API.get(HANDLE_SERVICE_PATH, { path: { path: id } });
};
