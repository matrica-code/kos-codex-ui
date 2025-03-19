import { SingletonKosModelRegistrationFactory } from "@kosdev-code/kos-ui-sdk";
import type { FuturesOptions } from "./types";
import { FuturesModelImpl, MODEL_TYPE } from "./futures-model";
import type { FuturesModel } from "./futures-model";

/**
 * # Futures
 *
 * The registration bean includes convenience methods for creating and working with FuturesModel instances.
 *
 * ## type
 * The type property is a string that identifies the model type.
 * The type is used to identify the model type in the model registry and to narrow down the model type in type predicates.  It's most frequently
 * used when declaring dependencies on models.
 *
 * @example
 * ```typescript
 *
 * @kosDependency({modelType: Futures.type, id: "futuresId"})
 * private futuresModel: FuturesModel;
 * ```
 *
 *
 * ## factory
 *
 * The factory method creates a factory function that can be used to create new FuturesModel instances.
 *
 
 * The factory function is a curried function that takes the model id as the first argument and the options as the second argument.
 *
 * If a model with the specified id already exists, the factory function will return the existing model.  The options will be ignored
 * in this case and the existing model will be returned in its current state.
 *
 * @example
 * ```typescript
 * const model = Futures.factory("futuresId")({
 *   // Add option data
 * });
 * ```
 

 *
 * ## predicate
 *
 * [Typescript type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) function that will identify and narrow down a model to a FuturesModel.
 *
 * @example
 * ```typescript
 *
 * const model: IKosDataModel = ...; // some model
 *
 * if (Futures.predicate(model)) {
 *    // if the function evaluates to true, the model is narrowed down to FuturesModel
 *    // and the compiler will know that the model has the FuturesModel interface
 *    model.updateAvailability(false);
 * }
 * ```
 *
 * ## registration
 *
 * The registration property is an object that can be used to simplify registration of the model with the model registry.  The registration object
 * can be spread into the model registration and provides all of the required information to register the model implementation class against the model type.
 *
 *
 * @example
 *
 * In an application registration file you can declare the model registration as follows:
 *
 * **registration.ts**
 * ```typescript
 * import { Futures } from "@kos-ui/project-models";
 * import { KosModelRegistry } from "@kosdev-code/kos-dispense-sdk";
 *
 * import { initKosProvider } from "@kosdev-code/kos-ui-sdk";
 *
 * KosModelRegistry.dispense
 * .models()
 * .model(Futures);
 * ```
 *
 * ## registration.singleton
 
 * The futures model is NOT a singleton model.  This means that each time the factory function is called with a unique ID, a new model instance will be created.
 * If the factory function is called with an ID that already exists, the existing model will be returned.
 
 * */
export const Futures = new SingletonKosModelRegistrationFactory<
  FuturesModel,
  FuturesOptions
>({
  class: FuturesModelImpl,
  type: MODEL_TYPE,
});
