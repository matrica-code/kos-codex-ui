import {
  KosLog,
  type ClientResponse,
  type DeepRequired,
  type ElementType,
  type ServiceResponse,
} from "@kosdev-code/kos-ui-sdk";

import API, { type KosApi, type ApiPath } from "../../../utils/service";

const log = KosLog.createLogger({
  name: "troubles-container-service",
  group: "Services",
});

const SERVICE_PATH: ApiPath = "/api/kos/troubles";
export type TroublesContainerClientResponse = ClientResponse<
  KosApi,
  typeof SERVICE_PATH,
  "get"
>;
export type TroublesContainerResponse = DeepRequired<
  ElementType<TroublesContainerClientResponse>
>;

/**
 * @category Service
 * Retrieves the initial list of  troubles-container data.
 */
export const getTroublesContainer = async (): Promise<
  ServiceResponse<TroublesContainerClientResponse>
> => {
  log.debug("sending GET for  troubles-container");
  return await API.get(SERVICE_PATH);
};

const HANDLE_SERVICE_PATH: ApiPath = "/api/kos/troubles/{troubleId}";
export type TroublesClientResponse = ClientResponse<
  KosApi,
  typeof HANDLE_SERVICE_PATH,
  "get"
>;
export type TroublesResponse = DeepRequired<
  ElementType<TroublesClientResponse>
>;

/**
 * @category Service
 * Retrieves the initial list of  troubles-container data.
 */
export const getTroubles = async (
  troubleId: number,
): Promise<ServiceResponse<TroublesClientResponse>> => {
  log.debug("sending GET for  troubles-container");
  return await API.get(HANDLE_SERVICE_PATH, { path: { troubleId } });
};
