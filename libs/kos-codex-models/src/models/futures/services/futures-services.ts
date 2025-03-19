import {
  FutureResponse,
  KosLog,
  resolveServiceUrl,
  ServiceFactory,
} from "@kosdev-code/kos-ui-sdk";

const { URL } = resolveServiceUrl("CARB-WATER_SERVICE");

const { postModel } = ServiceFactory.build({
  basePath:
    "/api/ext/dispense/nozzle/nozzle/pipeline/ingredient/pour/{path}/{intent}",
});
/**
 * @category Service
 * Retrieves the initial  futures data.
 */
export const startFuture = async (tracker: string) => {
  const response = await postModel<FutureResponse>({
    urlOverride: `${URL}/api/ext/dispense/nozzle/nozzle/pipeline/ingredient/pour/assembly:core:board:macro:pump:carb/PURGE`,
    tracker,
    model: {
      id: tracker,
    },
  });
  if (!response) {
    return ["No response", null];
  }

  if (response.status !== 200) {
    return ["Unknown error", null];
  }

  return [null, response.data];
};
