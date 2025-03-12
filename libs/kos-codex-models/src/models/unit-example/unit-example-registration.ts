import { SingletonKosModelRegistrationFactory } from "@kosdev-code/kos-ui-sdk";
import type { UnitExampleOptions } from "./types";
import { UnitExampleModelImpl, MODEL_TYPE } from "./unit-example-model";
import type { UnitExampleModel } from "./unit-example-model";

/**
 * # UnitExample
 *
 * The registration bean includes convenience methods for creating and working with UnitExampleModel instances.
 *
 * ## type
 * The type property is a string that identifies the model type.
 * The type is used to identify the model type in the model registry and to narrow down the model type in type predicates.  It's most frequently
 * used when declaring dependencies on models.
 *
 * @example
 * ```typescript
 *
 * @kosDependency({modelType: UnitExample.type, id: "unitExampleId"})
 * private unitExampleModel: UnitExampleModel;
 * ```
 *
 *
 * ## factory
 *
 * The factory method creates a factory function that can be used to create new UnitExampleModel instances.
 *
 
 * As this is a singleton model, the factory function accepts the model options as its argument.
 *
 * If a model with the same model type already exists, the factory function will return the existing model.  The options will be ignored
 * in this case and the existing model will be returned in its current state.
 *
 * @example
 * ```typescript
 * const model = UnitExample.factory({
 *   // Add option data
 * });
 * ```
 

 *
 * ## predicate
 *
 * [Typescript type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) function that will identify and narrow down a model to a UnitExampleModel.
 *
 * @example
 * ```typescript
 *
 * const model: IKosDataModel = ...; // some model
 *
 * if (UnitExample.predicate(model)) {
 *    // if the function evaluates to true, the model is narrowed down to UnitExampleModel
 *    // and the compiler will know that the model has the UnitExampleModel interface
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
 * import { UnitExample } from "@kos-ui/project-models";
 * import { KosModelRegistry } from "@kosdev-code/kos-dispense-sdk";
 *
 * import { initKosProvider } from "@kosdev-code/kos-ui-sdk";
 *
 * KosModelRegistry.dispense
 * .models()
 * .model(UnitExample);
 * ```
 *
 * ## registration.singleton
 
 * The unitExample model is a singleton model.  This means that each time the factory function is called , the same instance will be returned.
 * If the model does not yet exist, it will be created passing in the provided options to initialize it.
 *
 * Singleton models don't require an ID as they will use the model type as their ID to guarantee uniqueness throughout the system.
 
 * */
export const UnitExample = new SingletonKosModelRegistrationFactory<
  UnitExampleModel,
  UnitExampleOptions
>({
  class: UnitExampleModelImpl,
  type: MODEL_TYPE,
});
