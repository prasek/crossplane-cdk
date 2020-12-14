// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * An ELB is a managed resource that represents an AWS Classic Load Balancer.
 *
 * @schema ELB
 */
export class Elb extends ApiObject {
  /**
   * Defines a "ELB" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialiation props
   */
  public constructor(scope: Construct, id: string, props: ElbProps) {
    super(scope, id, {
      ...props,
      kind: 'ELB',
      apiVersion: 'elasticloadbalancing.aws.crossplane.io/v1alpha1',
    });
  }
}

/**
 * An ELB is a managed resource that represents an AWS Classic Load Balancer.
 *
 * @schema ELB
 */
export interface ElbProps {
  /**
   * @schema ELB#metadata
   */
  readonly metadata?: any;

  /**
   * An ELBSpec defines the desired state of an ELB.
   *
   * @schema ELB#spec
   */
  readonly spec: ElbSpec;

}

/**
 * An ELBSpec defines the desired state of an ELB.
 *
 * @schema ElbSpec
 */
export interface ElbSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema ElbSpec#deletionPolicy
   */
  readonly deletionPolicy?: ElbSpecDeletionPolicy;

  /**
   * ELBParameters define the desired state of an AWS ELB.
   *
   * @schema ElbSpec#forProvider
   */
  readonly forProvider: ElbSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema ElbSpec#providerConfigRef
   */
  readonly providerConfigRef?: ElbSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema ElbSpec#providerRef
   */
  readonly providerRef?: ElbSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema ElbSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: ElbSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema ElbSpecDeletionPolicy
 */
export enum ElbSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = "Orphan",
  /** Delete */
  DELETE = "Delete",
}

/**
 * ELBParameters define the desired state of an AWS ELB.
 *
 * @schema ElbSpecForProvider
 */
export interface ElbSpecForProvider {
  /**
   * One or more Availability Zones from the same region as the load balancer.
   *
   * @schema ElbSpecForProvider#availabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * Information about the health checks conducted on the load balancer.
   *
   * @schema ElbSpecForProvider#healthCheck
   */
  readonly healthCheck?: ElbSpecForProviderHealthCheck;

  /**
   * The listeners for this ELB.
   *
   * @schema ElbSpecForProvider#listeners
   */
  readonly listeners: ElbSpecForProviderListeners[];

  /**
   * Region is the region you'd like your ELB to be created in.
   *
   * @schema ElbSpecForProvider#region
   */
  readonly region: string;

  /**
   * The type of a load balancer. Valid only for load balancers in a VPC.
   *
   * @schema ElbSpecForProvider#scheme
   */
  readonly scheme?: string;

  /**
   * SecurityGroupIDRefs references to a SecurityGroup and retrieves its SecurityGroupID
   *
   * @schema ElbSpecForProvider#securityGroupIdRefs
   */
  readonly securityGroupIdRefs?: ElbSpecForProviderSecurityGroupIdRefs[];

  /**
   * SecurityGroupIDSelector selects a set of references that each retrieve the SecurityGroupID from the referenced SecurityGroup
   *
   * @schema ElbSpecForProvider#securityGroupIdSelector
   */
  readonly securityGroupIdSelector?: ElbSpecForProviderSecurityGroupIdSelector;

  /**
   * The IDs of the security groups to assign to the load balancer.
   *
   * @schema ElbSpecForProvider#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * SubnetRefs references to a Subnet to and retrieves its SubnetID
   *
   * @schema ElbSpecForProvider#subnetIdRefs
   */
  readonly subnetIdRefs?: ElbSpecForProviderSubnetIdRefs[];

  /**
   * SubnetSelector selects a set of references that each retrieve the subnetID from the referenced Subnet
   *
   * @schema ElbSpecForProvider#subnetIdSelector
   */
  readonly subnetIdSelector?: ElbSpecForProviderSubnetIdSelector;

  /**
   * The IDs of the subnets in your VPC to attach to the load balancer. Specify one subnet per Availability Zone specified in AvailabilityZones.
   *
   * @schema ElbSpecForProvider#subnetIds
   */
  readonly subnetIds?: string[];

  /**
   * A list of tags to assign to the load balancer.
   *
   * @schema ElbSpecForProvider#tags
   */
  readonly tags?: ElbSpecForProviderTags[];

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema ElbSpecProviderConfigRef
 */
export interface ElbSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema ElbSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema ElbSpecProviderRef
 */
export interface ElbSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema ElbSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema ElbSpecWriteConnectionSecretToRef
 */
export interface ElbSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema ElbSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema ElbSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * Information about the health checks conducted on the load balancer.
 *
 * @schema ElbSpecForProviderHealthCheck
 */
export interface ElbSpecForProviderHealthCheck {
  /**
   * The number of consecutive health checks successes required before moving the instance to the Healthy state.
   *
   * @schema ElbSpecForProviderHealthCheck#healthyThreshold
   */
  readonly healthyThreshold: number;

  /**
   * The approximate interval, in seconds, between health checks of an individual instance.
   *
   * @schema ElbSpecForProviderHealthCheck#interval
   */
  readonly interval: number;

  /**
   * The instance being checked.
   *
   * @schema ElbSpecForProviderHealthCheck#target
   */
  readonly target: string;

  /**
   * The amount of time, in seconds, during which no response means a failed health check.
   *
   * @schema ElbSpecForProviderHealthCheck#timeout
   */
  readonly timeout: number;

  /**
   * The number of consecutive health check failures required before moving the instance to the Unhealthy state.
   *
   * @schema ElbSpecForProviderHealthCheck#unhealthyThreshold
   */
  readonly unhealthyThreshold: number;

}

/**
 * Listener represents the port binding(s) between the ELB and EC2 instances.
 *
 * @schema ElbSpecForProviderListeners
 */
export interface ElbSpecForProviderListeners {
  /**
   * The port on which the instance is listening.
   *
   * @schema ElbSpecForProviderListeners#instancePort
   */
  readonly instancePort: number;

  /**
   * The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL. If not specified, the value is same as for Protocol.
   *
   * @schema ElbSpecForProviderListeners#instanceProtocol
   */
  readonly instanceProtocol?: string;

  /**
   * The port on which the load balancer is listening.
   *
   * @schema ElbSpecForProviderListeners#loadBalancerPort
   */
  readonly loadBalancerPort: number;

  /**
   * The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.
   *
   * @schema ElbSpecForProviderListeners#protocol
   */
  readonly protocol: string;

  /**
   * The Amazon Resource Name (ARN) of the server certificate.
   *
   * @schema ElbSpecForProviderListeners#sslCertificateId
   */
  readonly sslCertificateId?: string;

}

/**
 * A Reference to a named object.
 *
 * @schema ElbSpecForProviderSecurityGroupIdRefs
 */
export interface ElbSpecForProviderSecurityGroupIdRefs {
  /**
   * Name of the referenced object.
   *
   * @schema ElbSpecForProviderSecurityGroupIdRefs#name
   */
  readonly name: string;

}

/**
 * SecurityGroupIDSelector selects a set of references that each retrieve the SecurityGroupID from the referenced SecurityGroup
 *
 * @schema ElbSpecForProviderSecurityGroupIdSelector
 */
export interface ElbSpecForProviderSecurityGroupIdSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema ElbSpecForProviderSecurityGroupIdSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema ElbSpecForProviderSecurityGroupIdSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * A Reference to a named object.
 *
 * @schema ElbSpecForProviderSubnetIdRefs
 */
export interface ElbSpecForProviderSubnetIdRefs {
  /**
   * Name of the referenced object.
   *
   * @schema ElbSpecForProviderSubnetIdRefs#name
   */
  readonly name: string;

}

/**
 * SubnetSelector selects a set of references that each retrieve the subnetID from the referenced Subnet
 *
 * @schema ElbSpecForProviderSubnetIdSelector
 */
export interface ElbSpecForProviderSubnetIdSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema ElbSpecForProviderSubnetIdSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema ElbSpecForProviderSubnetIdSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * Tag defines a key value pair that can be attached to an ELB
 *
 * @schema ElbSpecForProviderTags
 */
export interface ElbSpecForProviderTags {
  /**
   * The key of the tag.
   *
   * @schema ElbSpecForProviderTags#key
   */
  readonly key: string;

  /**
   * The value of the tag.
   *
   * @schema ElbSpecForProviderTags#value
   */
  readonly value?: string;

}

/**
 * An ELBAttachment is a managed resource that represents attachment of an AWS Classic Load Balancer and an AWS EC2 instance.
 *
 * @schema ELBAttachment
 */
export class ElbAttachment extends ApiObject {
  /**
   * Defines a "ELBAttachment" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialiation props
   */
  public constructor(scope: Construct, id: string, props: ElbAttachmentProps) {
    super(scope, id, {
      ...props,
      kind: 'ELBAttachment',
      apiVersion: 'elasticloadbalancing.aws.crossplane.io/v1alpha1',
    });
  }
}

/**
 * An ELBAttachment is a managed resource that represents attachment of an AWS Classic Load Balancer and an AWS EC2 instance.
 *
 * @schema ELBAttachment
 */
export interface ElbAttachmentProps {
  /**
   * @schema ELBAttachment#metadata
   */
  readonly metadata?: any;

  /**
   * An ELBAttachmentSpec defines the desired state of an ELBAttachment.
   *
   * @schema ELBAttachment#spec
   */
  readonly spec: ElbAttachmentSpec;

}

/**
 * An ELBAttachmentSpec defines the desired state of an ELBAttachment.
 *
 * @schema ElbAttachmentSpec
 */
export interface ElbAttachmentSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema ElbAttachmentSpec#deletionPolicy
   */
  readonly deletionPolicy?: ElbAttachmentSpecDeletionPolicy;

  /**
   * ELBAttachmentParameters define the desired state of an AWS ELBAttachment.
   *
   * @schema ElbAttachmentSpec#forProvider
   */
  readonly forProvider: ElbAttachmentSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema ElbAttachmentSpec#providerConfigRef
   */
  readonly providerConfigRef?: ElbAttachmentSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema ElbAttachmentSpec#providerRef
   */
  readonly providerRef?: ElbAttachmentSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema ElbAttachmentSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: ElbAttachmentSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema ElbAttachmentSpecDeletionPolicy
 */
export enum ElbAttachmentSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = "Orphan",
  /** Delete */
  DELETE = "Delete",
}

/**
 * ELBAttachmentParameters define the desired state of an AWS ELBAttachment.
 *
 * @schema ElbAttachmentSpecForProvider
 */
export interface ElbAttachmentSpecForProvider {
  /**
   * Name of the Elastic Load Balancer to which the instances will attach.
   *
   * @schema ElbAttachmentSpecForProvider#elbName
   */
  readonly elbName?: string;

  /**
   * ELBNameRef references an ELB to and retrieves its external-name.
   *
   * @schema ElbAttachmentSpecForProvider#elbNameRef
   */
  readonly elbNameRef?: ElbAttachmentSpecForProviderElbNameRef;

  /**
   * ELBNameSelector selects a reference to a ELB to and retrieves its external-name.
   *
   * @schema ElbAttachmentSpecForProvider#elbNameSelector
   */
  readonly elbNameSelector?: ElbAttachmentSpecForProviderElbNameSelector;

  /**
   * List of identities of the instances to be attached.
   *
   * @schema ElbAttachmentSpecForProvider#instanceId
   */
  readonly instanceId: string;

  /**
   * Region is the region you'd like your ELBAttachment to be in.
   *
   * @schema ElbAttachmentSpecForProvider#region
   */
  readonly region: string;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema ElbAttachmentSpecProviderConfigRef
 */
export interface ElbAttachmentSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema ElbAttachmentSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema ElbAttachmentSpecProviderRef
 */
export interface ElbAttachmentSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema ElbAttachmentSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema ElbAttachmentSpecWriteConnectionSecretToRef
 */
export interface ElbAttachmentSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema ElbAttachmentSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema ElbAttachmentSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * ELBNameRef references an ELB to and retrieves its external-name.
 *
 * @schema ElbAttachmentSpecForProviderElbNameRef
 */
export interface ElbAttachmentSpecForProviderElbNameRef {
  /**
   * Name of the referenced object.
   *
   * @schema ElbAttachmentSpecForProviderElbNameRef#name
   */
  readonly name: string;

}

/**
 * ELBNameSelector selects a reference to a ELB to and retrieves its external-name.
 *
 * @schema ElbAttachmentSpecForProviderElbNameSelector
 */
export interface ElbAttachmentSpecForProviderElbNameSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema ElbAttachmentSpecForProviderElbNameSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema ElbAttachmentSpecForProviderElbNameSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

