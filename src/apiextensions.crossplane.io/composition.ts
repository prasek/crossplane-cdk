// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * Composition defines the group of resources to be created when a compatible type is created with reference to the composition.
 *
 * @schema Composition
 */
export class Composition extends ApiObject {
  /**
   * Defines a "Composition" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: CompositionOptions = {}) {
    super(scope, name, {
      ...options,
      kind: 'Composition',
      apiVersion: 'apiextensions.crossplane.io/v1alpha1',
    });
  }
}

/**
 * Composition defines the group of resources to be created when a compatible type is created with reference to the composition.
 *
 * @schema Composition
 */
export interface CompositionOptions {
  /**
   * @schema Composition#metadata
   */
  readonly metadata?: any;

  /**
   * CompositionSpec specifies the desired state of the definition.
   *
   * @schema Composition#spec
   */
  readonly spec?: CompositionSpec;

}

/**
 * CompositionSpec specifies the desired state of the definition.
 *
 * @schema CompositionSpec
 */
export interface CompositionSpec {
  /**
   * CompositeTypeRef specifies the type of composite resource that this composition is compatible with.
   *
   * @schema CompositionSpec#compositeTypeRef
   */
  readonly compositeTypeRef: CompositionSpecCompositeTypeRef;

  /**
   * Resources is the list of resource templates that will be used when a composite resource referring to this composition is created.
   *
   * @schema CompositionSpec#resources
   */
  readonly resources: CompositionSpecResources[];

  /**
   * WriteConnectionSecretsToNamespace specifies the namespace in which the connection secrets of composite resource dynamically provisioned using this composition will be created.
   *
   * @schema CompositionSpec#writeConnectionSecretsToNamespace
   */
  readonly writeConnectionSecretsToNamespace?: string;

}

/**
 * CompositeTypeRef specifies the type of composite resource that this composition is compatible with.
 *
 * @schema CompositionSpecCompositeTypeRef
 */
export interface CompositionSpecCompositeTypeRef {
  /**
   * APIVersion of the type.
   *
   * @schema CompositionSpecCompositeTypeRef#apiVersion
   */
  readonly apiVersion: string;

  /**
   * Kind of the type.
   *
   * @schema CompositionSpecCompositeTypeRef#kind
   */
  readonly kind: string;

}

/**
 * ComposedTemplate is used to provide information about how the composed resource should be processed.
 *
 * @schema CompositionSpecResources
 */
export interface CompositionSpecResources {
  /**
   * Base is the target resource that the patches will be applied on.
   *
   * @schema CompositionSpecResources#base
   */
  readonly base: any;

  /**
   * ConnectionDetails lists the propagation secret keys from this target resource to the composition instance connection secret.
   *
   * @schema CompositionSpecResources#connectionDetails
   */
  readonly connectionDetails?: CompositionSpecResourcesConnectionDetails[];

  /**
   * Patches will be applied as overlay to the base resource.
   *
   * @schema CompositionSpecResources#patches
   */
  readonly patches?: CompositionSpecResourcesPatches[];

  /**
   * ReadinessChecks allows users to define custom readiness checks. All checks have to return true in order for resource to be considered ready. The default readiness check is to have the "Ready" condition to be "True".
   *
   * @schema CompositionSpecResources#readinessChecks
   */
  readonly readinessChecks?: CompositionSpecResourcesReadinessChecks[];

}

/**
 * ConnectionDetail includes the information about the propagation of the connection information from one secret to another.
 *
 * @schema CompositionSpecResourcesConnectionDetails
 */
export interface CompositionSpecResourcesConnectionDetails {
  /**
   * FromConnectionSecretKey is the key that will be used to fetch the value from the given target resource.
   *
   * @schema CompositionSpecResourcesConnectionDetails#fromConnectionSecretKey
   */
  readonly fromConnectionSecretKey?: string;

  /**
   * Name of the connection secret key that will be propagated to the connection secret of the composition instance. Leave empty if you'd like to use the same key name.
   *
   * @schema CompositionSpecResourcesConnectionDetails#name
   */
  readonly name?: string;

  /**
   * Value that will be propagated to the connection secret of the composition instance. Typically you should use FromConnectionSecretKey instead, but an explicit value may be set to inject a fixed, non-sensitive connection secret values, for example a well-known port. Supercedes FromConnectionSecretKey when set.
   *
   * @schema CompositionSpecResourcesConnectionDetails#value
   */
  readonly value?: string;

}

/**
 * Patch is used to patch the field on the base resource at ToFieldPath after piping the value that is at FromFieldPath of the target resource through transformers.
 *
 * @schema CompositionSpecResourcesPatches
 */
export interface CompositionSpecResourcesPatches {
  /**
   * FromFieldPath is the path of the field on the upstream resource whose value to be used as input.
   *
   * @schema CompositionSpecResourcesPatches#fromFieldPath
   */
  readonly fromFieldPath: string;

  /**
   * ToFieldPath is the path of the field on the base resource whose value will be changed with the result of transforms. Leave empty if you'd like to propagate to the same path on the target resource.
   *
   * @schema CompositionSpecResourcesPatches#toFieldPath
   */
  readonly toFieldPath?: string;

  /**
   * Transforms are the list of functions that are used as a FIFO pipe for the input to be transformed.
   *
   * @schema CompositionSpecResourcesPatches#transforms
   */
  readonly transforms?: CompositionSpecResourcesPatchesTransforms[];

}

/**
 * ReadinessCheck is used to indicate how to tell whether a resource is ready for consumption
 *
 * @schema CompositionSpecResourcesReadinessChecks
 */
export interface CompositionSpecResourcesReadinessChecks {
  /**
   * FieldPath shows the path of the field whose value will be used.
   *
   * @schema CompositionSpecResourcesReadinessChecks#fieldPath
   */
  readonly fieldPath?: string;

  /**
   * MatchInt is the value you'd like to match if you're using "MatchInt" type.
   *
   * @schema CompositionSpecResourcesReadinessChecks#matchInteger
   */
  readonly matchInteger?: number;

  /**
   * MatchString is the value you'd like to match if you're using "MatchString" type.
   *
   * @schema CompositionSpecResourcesReadinessChecks#matchString
   */
  readonly matchString?: string;

  /**
   * Type indicates the type of probe you'd like to use.
   *
   * @schema CompositionSpecResourcesReadinessChecks#type
   */
  readonly type: CompositionSpecResourcesReadinessChecksType;

}

/**
 * Transform is a unit of process whose input is transformed into an output with the supplied configuration.
 *
 * @schema CompositionSpecResourcesPatchesTransforms
 */
export interface CompositionSpecResourcesPatchesTransforms {
  /**
   * Map uses the input as a key in the given map and returns the value.
   *
   * @schema CompositionSpecResourcesPatchesTransforms#map
   */
  readonly map?: { [key: string]: string };

  /**
   * Math is used to transform the input via mathematical operations such as multiplication.
   *
   * @schema CompositionSpecResourcesPatchesTransforms#math
   */
  readonly math?: CompositionSpecResourcesPatchesTransformsMath;

  /**
   * String is used to transform the input into a string or a different kind of string. Note that the input does not necessarily need to be a string.
   *
   * @schema CompositionSpecResourcesPatchesTransforms#string
   */
  readonly string?: CompositionSpecResourcesPatchesTransformsString;

  /**
   * Type of the transform to be run.
   *
   * @schema CompositionSpecResourcesPatchesTransforms#type
   */
  readonly type: string;

}

/**
 * Type indicates the type of probe you'd like to use.
 *
 * @schema CompositionSpecResourcesReadinessChecksType
 */
export enum CompositionSpecResourcesReadinessChecksType {
  /** MatchString */
  MATCH_STRING = "MatchString",
  /** MatchInteger */
  MATCH_INTEGER = "MatchInteger",
  /** NonEmpty */
  NON_EMPTY = "NonEmpty",
  /** None */
  NONE = "None",
}

/**
 * Math is used to transform the input via mathematical operations such as multiplication.
 *
 * @schema CompositionSpecResourcesPatchesTransformsMath
 */
export interface CompositionSpecResourcesPatchesTransformsMath {
  /**
   * Multiply the value.
   *
   * @schema CompositionSpecResourcesPatchesTransformsMath#multiply
   */
  readonly multiply?: number;

}

/**
 * String is used to transform the input into a string or a different kind of string. Note that the input does not necessarily need to be a string.
 *
 * @schema CompositionSpecResourcesPatchesTransformsString
 */
export interface CompositionSpecResourcesPatchesTransformsString {
  /**
   * Format the input using a Go format string. See https://golang.org/pkg/fmt/ for details.
   *
   * @schema CompositionSpecResourcesPatchesTransformsString#fmt
   */
  readonly fmt: string;

}

