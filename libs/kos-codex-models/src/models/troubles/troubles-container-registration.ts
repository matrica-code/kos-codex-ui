import { SingletonKosModelRegistrationFactory } from "@kosdev-code/kos-ui-sdk";
import type { TroublesContainerOptions } from "./types";
import { Troubles } from "./troubles-registration";
import { TroublesContainerModelImpl, MODEL_TYPE } from "./troubles-container-model";
import type { TroublesContainerModel } from "./troubles-container-model";

/**
 * # TroublesContainer
 *
 * The registration bean includes convenience methods for creating and working with TroublesContainerModel instances.
 *
 * ## type
 * The type property is a string that identifies the model type.
 * The type is used to identify the model type in the model registry and to narrow down the model type in type predicates.  It's most frequently
 * used when declaring dependencies on models.
 *
 * @example
 * ```typescript
 *
 * @kosDependency({modelType: TroublesContainer.type, id: "troublesContainerId"})
 * private troublesContainerModel: TroublesContainerModel;
 * ```
 *
 *
 * ## factory
 *
 * The factory method creates a factory function that can be used to create new TroublesContainerModel instances.
 *
 
 * As this is a singleton model, the factory function accepts the model options as its argument.
 *
 * If a model with the same model type already exists, the factory function will return the existing model.  The options will be ignored
 * in this case and the existing model will be returned in its current state.
 *
 * @example
 * ```typescript
 * const model = TroublesContainer.factory({
 *   // Add option data
 * });
 * ```
 

 *
 * ## predicate
 *
 * [Typescript type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) function that will identify and narrow down a model to a TroublesContainerModel.
 *
 * @example
 * ```typescript
 *
 * const model: IKosDataModel = ...; // some model
 *
 * if (TroublesContainer.predicate(model)) {
 *    // if the function evaluates to true, the model is narrowed down to TroublesContainerModel
 *    // and the compiler will know that the model has the TroublesContainerModel interface
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
 * import { TroublesContainer } from "@kos-codex/kos-codex-models";
 * ...
 * import { ExtensionManager, IKosRegistry } from "@kosdev-code/kos-ui-sdk";
 * export const kosModels: IKosRegistry["models"] = {
 *  ...TroublesContainer.registration,
 * };
 * ```
 *
 * ## registration.singleton
 
 * The troublesContainer model is a singleton model.  This means that each time the factory function is called , the same instance will be returned.
 * If the model does not yet exist, it will be created passing in the provided options to initialize it.
 *
 * Singleton models don't require an ID as they will use the model type as their ID to guarantee uniqueness throughout the system.
 
 * */
export const TroublesContainer = new SingletonKosModelRegistrationFactory<
  TroublesContainerModel,
  TroublesContainerOptions
>({
  class: TroublesContainerModelImpl,
  type: MODEL_TYPE,
});

TroublesContainer.addRelatedModel(Troubles);
