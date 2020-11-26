// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * A ProviderConfig configures a Helm 'provider', i.e. a connection to a particular
 *
 * @schema ProviderConfig
 */
export class ProviderConfig extends ApiObject {
  /**
   * Defines a "ProviderConfig" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialiation props
   */
  public constructor(scope: Construct, id: string, props: ProviderConfigProps) {
    super(scope, id, {
      ...props,
      kind: 'ProviderConfig',
      apiVersion: 'helm.crossplane.io/v1alpha1',
    });
  }
}

/**
 * A ProviderConfigUsage indicates that a resource is using a ProviderConfig.
 *
 * @schema ProviderConfigUsage
 */
export class ProviderConfigUsage extends ApiObject {
  /**
   * Defines a "ProviderConfigUsage" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialiation props
   */
  public constructor(scope: Construct, id: string, props: ProviderConfigUsageProps) {
    super(scope, id, {
      ...props,
      kind: 'ProviderConfigUsage',
      apiVersion: 'helm.crossplane.io/v1alpha1',
    });
  }
}

/**
 * A Release is an example API type
 *
 * @schema Release
 */
export class Release extends ApiObject {
  /**
   * Defines a "Release" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialiation props
   */
  public constructor(scope: Construct, id: string, props: ReleaseProps) {
    super(scope, id, {
      ...props,
      kind: 'Release',
      apiVersion: 'helm.crossplane.io/v1alpha1',
    });
  }
}

/**
 * A ProviderConfig configures a Helm 'provider', i.e. a connection to a particular
 *
 * @schema ProviderConfig
 */
export interface ProviderConfigProps {
  /**
   * @schema ProviderConfig#metadata
   */
  readonly metadata?: any;

  /**
   * A ProviderConfigSpec defines the desired state of a Provider.
   *
   * @schema ProviderConfig#spec
   */
  readonly spec: ProviderConfigSpec;

}

/**
 * A ProviderConfigUsage indicates that a resource is using a ProviderConfig.
 *
 * @schema ProviderConfigUsage
 */
export interface ProviderConfigUsageProps {
  /**
   * @schema ProviderConfigUsage#metadata
   */
  readonly metadata?: any;

  /**
   * ProviderConfigReference to the provider config being used.
   *
   * @schema ProviderConfigUsage#providerConfigRef
   */
  readonly providerConfigRef: ProviderConfigUsageProviderConfigRef;

  /**
   * ResourceReference to the managed resource using the provider config.
   *
   * @schema ProviderConfigUsage#resourceRef
   */
  readonly resourceRef: ProviderConfigUsageResourceRef;

}

/**
 * A Release is an example API type
 *
 * @schema Release
 */
export interface ReleaseProps {
  /**
   * @schema Release#metadata
   */
  readonly metadata?: any;

  /**
   * A ReleaseSpec defines the desired state of a Release.
   *
   * @schema Release#spec
   */
  readonly spec: ReleaseSpec;

}

/**
 * A ProviderConfigSpec defines the desired state of a Provider.
 *
 * @schema ProviderConfigSpec
 */
export interface ProviderConfigSpec {
  /**
   * Credentials required to authenticate to this provider.
   *
   * @schema ProviderConfigSpec#credentials
   */
  readonly credentials: ProviderConfigSpecCredentials;

}

/**
 * ProviderConfigReference to the provider config being used.
 *
 * @schema ProviderConfigUsageProviderConfigRef
 */
export interface ProviderConfigUsageProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema ProviderConfigUsageProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ResourceReference to the managed resource using the provider config.
 *
 * @schema ProviderConfigUsageResourceRef
 */
export interface ProviderConfigUsageResourceRef {
  /**
   * APIVersion of the referenced object.
   *
   * @schema ProviderConfigUsageResourceRef#apiVersion
   */
  readonly apiVersion: string;

  /**
   * Kind of the referenced object.
   *
   * @schema ProviderConfigUsageResourceRef#kind
   */
  readonly kind: string;

  /**
   * Name of the referenced object.
   *
   * @schema ProviderConfigUsageResourceRef#name
   */
  readonly name: string;

  /**
   * UID of the referenced object.
   *
   * @schema ProviderConfigUsageResourceRef#uid
   */
  readonly uid?: string;

}

/**
 * A ReleaseSpec defines the desired state of a Release.
 *
 * @schema ReleaseSpec
 */
export interface ReleaseSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema ReleaseSpec#deletionPolicy
   */
  readonly deletionPolicy?: ReleaseSpecDeletionPolicy;

  /**
   * ReleaseParameters are the configurable fields of a Release.
   *
   * @schema ReleaseSpec#forProvider
   */
  readonly forProvider: ReleaseSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema ReleaseSpec#providerConfigRef
   */
  readonly providerConfigRef?: ReleaseSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema ReleaseSpec#providerRef
   */
  readonly providerRef?: ReleaseSpecProviderRef;

  /**
   * RollbackRetriesLimit is max number of attempts to retry Helm deployment by rolling back the release.
   *
   * @schema ReleaseSpec#rollbackLimit
   */
  readonly rollbackLimit?: number;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema ReleaseSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: ReleaseSpecWriteConnectionSecretToRef;

}

/**
 * Credentials required to authenticate to this provider.
 *
 * @schema ProviderConfigSpecCredentials
 */
export interface ProviderConfigSpecCredentials {
  /**
   * A CredentialsSecretRef is a reference to a secret key that contains the credentials that must be used to connect to the provider.
   *
   * @schema ProviderConfigSpecCredentials#secretRef
   */
  readonly secretRef?: ProviderConfigSpecCredentialsSecretRef;

  /**
   * Source of the provider credentials.
   *
   * @schema ProviderConfigSpecCredentials#source
   */
  readonly source: ProviderConfigSpecCredentialsSource;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema ReleaseSpecDeletionPolicy
 */
export enum ReleaseSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * ReleaseParameters are the configurable fields of a Release.
 *
 * @schema ReleaseSpecForProvider
 */
export interface ReleaseSpecForProvider {
  /**
   * A ChartSpec defines the chart spec for a Release
   *
   * @schema ReleaseSpecForProvider#chart
   */
  readonly chart: ReleaseSpecForProviderChart;

  /**
   * @schema ReleaseSpecForProvider#namespace
   */
  readonly namespace: string;

  /**
   * @schema ReleaseSpecForProvider#patchesFrom
   */
  readonly patchesFrom?: ReleaseSpecForProviderPatchesFrom[];

  /**
   * @schema ReleaseSpecForProvider#set
   */
  readonly set?: ReleaseSpecForProviderSet[];

  /**
   * @schema ReleaseSpecForProvider#values
   */
  readonly values?: any;

  /**
   * @schema ReleaseSpecForProvider#valuesFrom
   */
  readonly valuesFrom?: ReleaseSpecForProviderValuesFrom[];

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema ReleaseSpecProviderConfigRef
 */
export interface ReleaseSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema ReleaseSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema ReleaseSpecProviderRef
 */
export interface ReleaseSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema ReleaseSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema ReleaseSpecWriteConnectionSecretToRef
 */
export interface ReleaseSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema ReleaseSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema ReleaseSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * A CredentialsSecretRef is a reference to a secret key that contains the credentials that must be used to connect to the provider.
 *
 * @schema ProviderConfigSpecCredentialsSecretRef
 */
export interface ProviderConfigSpecCredentialsSecretRef {
  /**
   * The key to select.
   *
   * @schema ProviderConfigSpecCredentialsSecretRef#key
   */
  readonly key: string;

  /**
   * Name of the secret.
   *
   * @schema ProviderConfigSpecCredentialsSecretRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema ProviderConfigSpecCredentialsSecretRef#namespace
   */
  readonly namespace: string;

}

/**
 * Source of the provider credentials.
 *
 * @schema ProviderConfigSpecCredentialsSource
 */
export enum ProviderConfigSpecCredentialsSource {
  /** None */
  NONE = 'None',
  /** Secret */
  SECRET = 'Secret',
  /** InjectedIdentity */
  INJECTED_IDENTITY = 'InjectedIdentity',
}

/**
 * A ChartSpec defines the chart spec for a Release
 *
 * @schema ReleaseSpecForProviderChart
 */
export interface ReleaseSpecForProviderChart {
  /**
   * @schema ReleaseSpecForProviderChart#name
   */
  readonly name: string;

  /**
   * A SecretReference is a reference to a secret in an arbitrary namespace.
   *
   * @schema ReleaseSpecForProviderChart#pullSecretRef
   */
  readonly pullSecretRef?: ReleaseSpecForProviderChartPullSecretRef;

  /**
   * @schema ReleaseSpecForProviderChart#repository
   */
  readonly repository: string;

  /**
   * @schema ReleaseSpecForProviderChart#version
   */
  readonly version: string;

}

/**
 * ValueFromSource represents source of a value
 *
 * @schema ReleaseSpecForProviderPatchesFrom
 */
export interface ReleaseSpecForProviderPatchesFrom {
  /**
   * DataKeySelector defines required spec to access a key of a configmap or secret
   *
   * @schema ReleaseSpecForProviderPatchesFrom#configMapKeyRef
   */
  readonly configMapKeyRef?: ReleaseSpecForProviderPatchesFromConfigMapKeyRef;

  /**
   * DataKeySelector defines required spec to access a key of a configmap or secret
   *
   * @schema ReleaseSpecForProviderPatchesFrom#secretKeyRef
   */
  readonly secretKeyRef?: ReleaseSpecForProviderPatchesFromSecretKeyRef;

}

/**
 * SetVal represents a "set" value override in a Release
 *
 * @schema ReleaseSpecForProviderSet
 */
export interface ReleaseSpecForProviderSet {
  /**
   * @schema ReleaseSpecForProviderSet#name
   */
  readonly name: string;

  /**
   * @schema ReleaseSpecForProviderSet#value
   */
  readonly value?: string;

  /**
   * ValueFromSource represents source of a value
   *
   * @schema ReleaseSpecForProviderSet#valueFrom
   */
  readonly valueFrom?: ReleaseSpecForProviderSetValueFrom;

}

/**
 * ValueFromSource represents source of a value
 *
 * @schema ReleaseSpecForProviderValuesFrom
 */
export interface ReleaseSpecForProviderValuesFrom {
  /**
   * DataKeySelector defines required spec to access a key of a configmap or secret
   *
   * @schema ReleaseSpecForProviderValuesFrom#configMapKeyRef
   */
  readonly configMapKeyRef?: ReleaseSpecForProviderValuesFromConfigMapKeyRef;

  /**
   * DataKeySelector defines required spec to access a key of a configmap or secret
   *
   * @schema ReleaseSpecForProviderValuesFrom#secretKeyRef
   */
  readonly secretKeyRef?: ReleaseSpecForProviderValuesFromSecretKeyRef;

}

/**
 * A SecretReference is a reference to a secret in an arbitrary namespace.
 *
 * @schema ReleaseSpecForProviderChartPullSecretRef
 */
export interface ReleaseSpecForProviderChartPullSecretRef {
  /**
   * Name of the secret.
   *
   * @schema ReleaseSpecForProviderChartPullSecretRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema ReleaseSpecForProviderChartPullSecretRef#namespace
   */
  readonly namespace: string;

}

/**
 * DataKeySelector defines required spec to access a key of a configmap or secret
 *
 * @schema ReleaseSpecForProviderPatchesFromConfigMapKeyRef
 */
export interface ReleaseSpecForProviderPatchesFromConfigMapKeyRef {
  /**
   * @schema ReleaseSpecForProviderPatchesFromConfigMapKeyRef#key
   */
  readonly key?: string;

  /**
   * @schema ReleaseSpecForProviderPatchesFromConfigMapKeyRef#name
   */
  readonly name: string;

  /**
   * @schema ReleaseSpecForProviderPatchesFromConfigMapKeyRef#namespace
   */
  readonly namespace: string;

  /**
   * @schema ReleaseSpecForProviderPatchesFromConfigMapKeyRef#optional
   */
  readonly optional?: boolean;

}

/**
 * DataKeySelector defines required spec to access a key of a configmap or secret
 *
 * @schema ReleaseSpecForProviderPatchesFromSecretKeyRef
 */
export interface ReleaseSpecForProviderPatchesFromSecretKeyRef {
  /**
   * @schema ReleaseSpecForProviderPatchesFromSecretKeyRef#key
   */
  readonly key?: string;

  /**
   * @schema ReleaseSpecForProviderPatchesFromSecretKeyRef#name
   */
  readonly name: string;

  /**
   * @schema ReleaseSpecForProviderPatchesFromSecretKeyRef#namespace
   */
  readonly namespace: string;

  /**
   * @schema ReleaseSpecForProviderPatchesFromSecretKeyRef#optional
   */
  readonly optional?: boolean;

}

/**
 * ValueFromSource represents source of a value
 *
 * @schema ReleaseSpecForProviderSetValueFrom
 */
export interface ReleaseSpecForProviderSetValueFrom {
  /**
   * DataKeySelector defines required spec to access a key of a configmap or secret
   *
   * @schema ReleaseSpecForProviderSetValueFrom#configMapKeyRef
   */
  readonly configMapKeyRef?: ReleaseSpecForProviderSetValueFromConfigMapKeyRef;

  /**
   * DataKeySelector defines required spec to access a key of a configmap or secret
   *
   * @schema ReleaseSpecForProviderSetValueFrom#secretKeyRef
   */
  readonly secretKeyRef?: ReleaseSpecForProviderSetValueFromSecretKeyRef;

}

/**
 * DataKeySelector defines required spec to access a key of a configmap or secret
 *
 * @schema ReleaseSpecForProviderValuesFromConfigMapKeyRef
 */
export interface ReleaseSpecForProviderValuesFromConfigMapKeyRef {
  /**
   * @schema ReleaseSpecForProviderValuesFromConfigMapKeyRef#key
   */
  readonly key?: string;

  /**
   * @schema ReleaseSpecForProviderValuesFromConfigMapKeyRef#name
   */
  readonly name: string;

  /**
   * @schema ReleaseSpecForProviderValuesFromConfigMapKeyRef#namespace
   */
  readonly namespace: string;

  /**
   * @schema ReleaseSpecForProviderValuesFromConfigMapKeyRef#optional
   */
  readonly optional?: boolean;

}

/**
 * DataKeySelector defines required spec to access a key of a configmap or secret
 *
 * @schema ReleaseSpecForProviderValuesFromSecretKeyRef
 */
export interface ReleaseSpecForProviderValuesFromSecretKeyRef {
  /**
   * @schema ReleaseSpecForProviderValuesFromSecretKeyRef#key
   */
  readonly key?: string;

  /**
   * @schema ReleaseSpecForProviderValuesFromSecretKeyRef#name
   */
  readonly name: string;

  /**
   * @schema ReleaseSpecForProviderValuesFromSecretKeyRef#namespace
   */
  readonly namespace: string;

  /**
   * @schema ReleaseSpecForProviderValuesFromSecretKeyRef#optional
   */
  readonly optional?: boolean;

}

/**
 * DataKeySelector defines required spec to access a key of a configmap or secret
 *
 * @schema ReleaseSpecForProviderSetValueFromConfigMapKeyRef
 */
export interface ReleaseSpecForProviderSetValueFromConfigMapKeyRef {
  /**
   * @schema ReleaseSpecForProviderSetValueFromConfigMapKeyRef#key
   */
  readonly key?: string;

  /**
   * @schema ReleaseSpecForProviderSetValueFromConfigMapKeyRef#name
   */
  readonly name: string;

  /**
   * @schema ReleaseSpecForProviderSetValueFromConfigMapKeyRef#namespace
   */
  readonly namespace: string;

  /**
   * @schema ReleaseSpecForProviderSetValueFromConfigMapKeyRef#optional
   */
  readonly optional?: boolean;

}

/**
 * DataKeySelector defines required spec to access a key of a configmap or secret
 *
 * @schema ReleaseSpecForProviderSetValueFromSecretKeyRef
 */
export interface ReleaseSpecForProviderSetValueFromSecretKeyRef {
  /**
   * @schema ReleaseSpecForProviderSetValueFromSecretKeyRef#key
   */
  readonly key?: string;

  /**
   * @schema ReleaseSpecForProviderSetValueFromSecretKeyRef#name
   */
  readonly name: string;

  /**
   * @schema ReleaseSpecForProviderSetValueFromSecretKeyRef#namespace
   */
  readonly namespace: string;

  /**
   * @schema ReleaseSpecForProviderSetValueFromSecretKeyRef#optional
   */
  readonly optional?: boolean;

}
