// generated by cdk8s
import { Chart, ApiObject } from 'cdk8s';
import * as group from '../imports/apiextensions.crossplane.io';

export function compositeclustersAwsPlatformrefCrossplaneIo(chart: Chart, name: string = 'compositeclusters.aws.platformref.crossplane.io/compositeresourcedefinition/apiextensions.crossplane.io') : ApiObject {
  return new group.CompositeResourceDefinition(chart, name,
    {
      metadata: {
        name: 'compositeclusters.aws.platformref.crossplane.io',
        annotations: {
          'upbound.io/ui-schema': '---\nconfigSections:\n- title: Cluster Info\n  description: Information about this cluster\n  items:\n  - name: id\n    controlType: singleInput\n    type: string\n    path: ".spec.id"\n    title: Cluster ID\n    description: Cluster ID that other objects will use to refer to this cluster\n    default: platform-ref-aws-cluster\n    validation:\n    - required: true\n      customError: Cluster ID is required.\n  - name: writeSecretRef\n    controlType: singleInput\n    type: string\n    path: ".spec.writeConnectionSecretToRef.name"\n    title: Connection Secret Ref\n    description: name of the secret to write to this namespace\n    default: cluster-conn\n    validation:\n    - required: true\n- title: Cluster Nodes\n  description: Enter information to size your cluster\n  items:\n  - name: clusterNodeCount\n    controlType: singleInput\n    type: integer\n    path: ".spec.parameters.nodes.count"\n    title: Node Count\n    description: Number of nodes in the cluster\n    default: 1\n    validation:\n    - minimum: 1\n    - maximum: 100\n    - required: true\n      customError: Node count is required.\n  - name: clusterNodeSize\n    controlType: singleSelect\n    path: ".spec.parameters.nodes.size"\n    title: Node Size\n    description: Desired node count, from 1 to 100.\n    default: small\n    enum:\n    - small\n    - medium\n    - large\n    validation:\n    - required: true\n      customError: Node size is required.\n- title: Cluster Networking\n  description: Select a network fabric for your cluster\n  items:\n  - name: networkRef\n    controlType: singleInput\n    type: string\n    path: ".spec.parameters.networkRef.id"\n    title: Network Ref\n    description: Network fabric to connect the database to\n    default: platform-ref-aws-network\n    validation:\n    - required: true\n      customError: Network ref is required.\n- title: Cluster Services\n  description: Configure cluster services and operators\n  items:\n  - name: promVersion\n    controlType: singleInput\n    type: string\n    path: ".spec.parameters.services.operators.prometheus.version"\n    title: Prometheus Chart Version\n    description: The version of kube-prometheus-stack chart to install\n    default: 10.1.0\n    validation:\n    - required: false',
        },
      },
      spec: {
        claimNames: {
          kind: 'Cluster',
          plural: 'clusters',
        },
        connectionSecretKeys: [
          'kubeconfig',
        ],
        group: 'aws.platformref.crossplane.io',
        names: {
          kind: 'CompositeCluster',
          plural: 'compositeclusters',
        },
        versions: [
          {
            name: 'v1alpha1',
            served: true,
            referenceable: true,
            schema: {
              openAPIV3Schema: {
                type: 'object',
                properties: {
                  spec: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'ID of this Cluster that other objects will use to refer to it.',
                      },
                      parameters: {
                        type: 'object',
                        description: 'Cluster configuration parameters.',
                        properties: {
                          nodes: {
                            type: 'object',
                            description: 'Cluster node configuration parameters.',
                            properties: {
                              count: {
                                type: 'integer',
                                description: 'Desired node count, from 1 to 100.',
                              },
                              size: {
                                type: 'string',
                                description: 'Size of node.',
                                enum: [
                                  'small',
                                  'medium',
                                  'large',
                                ],
                              },
                            },
                            required: [
                              'count',
                              'size',
                            ],
                          },
                          services: {
                            type: 'object',
                            description: 'Services configuration parameters.',
                            properties: {
                              operators: {
                                type: 'object',
                                description: 'Configuration for operators.',
                                properties: {
                                  prometheus: {
                                    type: 'object',
                                    description: 'Configuration for the Prometheus operator.',
                                    properties: {
                                      version: {
                                        type: 'string',
                                        description: 'Prometheus operator version to run.',
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          networkRef: {
                            type: 'object',
                            description: 'A reference to the Network object that this cluster should be connected to.',
                            properties: {
                              id: {
                                type: 'string',
                                description: 'ID of the Network object this ref points to.',
                              },
                            },
                            required: [
                              'id',
                            ],
                          },
                        },
                        required: [
                          'nodes',
                          'networkRef',
                        ],
                      },
                    },
                    required: [
                      'id',
                      'parameters',
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    }
  );
}

export function eksAwsPlatformrefCrossplaneIo(chart: Chart, name: string = 'eks.aws.platformref.crossplane.io/compositeresourcedefinition/apiextensions.crossplane.io') : ApiObject {
  return new group.CompositeResourceDefinition(chart, name,
    {
      metadata: {
        name: 'eks.aws.platformref.crossplane.io',
      },
      spec: {
        connectionSecretKeys: [
          'kubeconfig',
        ],
        group: 'aws.platformref.crossplane.io',
        names: {
          kind: 'EKS',
          plural: 'eks',
        },
        versions: [
          {
            name: 'v1alpha1',
            served: true,
            referenceable: true,
            schema: {
              openAPIV3Schema: {
                type: 'object',
                properties: {
                  spec: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'ID of this Cluster that other objects will use to refer to it.',
                      },
                      parameters: {
                        type: 'object',
                        description: 'EKS configuration parameters.',
                        properties: {
                          nodes: {
                            type: 'object',
                            description: 'EKS node configuration parameters.',
                            properties: {
                              count: {
                                type: 'integer',
                                description: 'Desired node count, from 1 to 100.',
                              },
                              size: {
                                type: 'string',
                                description: 'Size of node.',
                                enum: [
                                  'small',
                                  'medium',
                                  'large',
                                ],
                              },
                            },
                            required: [
                              'count',
                              'size',
                            ],
                          },
                          networkRef: {
                            type: 'object',
                            description: 'A reference to the Network object that this postgres should be connected to.',
                            properties: {
                              id: {
                                type: 'string',
                                description: 'ID of the Network object this ref points to.',
                              },
                            },
                            required: [
                              'id',
                            ],
                          },
                        },
                        required: [
                          'nodes',
                          'networkRef',
                        ],
                      },
                    },
                    required: [
                      'parameters',
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    }
  );
}

export function servicesAwsPlatformrefCrossplaneIo(chart: Chart, name: string = 'services.aws.platformref.crossplane.io/compositeresourcedefinition/apiextensions.crossplane.io') : ApiObject {
  return new group.CompositeResourceDefinition(chart, name,
    {
      metadata: {
        name: 'services.aws.platformref.crossplane.io',
      },
      spec: {
        group: 'aws.platformref.crossplane.io',
        names: {
          kind: 'Services',
          plural: 'services',
        },
        versions: [
          {
            name: 'v1alpha1',
            served: true,
            referenceable: true,
            schema: {
              openAPIV3Schema: {
                type: 'object',
                properties: {
                  spec: {
                    type: 'object',
                    properties: {
                      operators: {
                        type: 'object',
                        description: 'Configuration for operators.',
                        properties: {
                          prometheus: {
                            type: 'object',
                            description: 'Configuration for the Prometheus operator.',
                            properties: {
                              version: {
                                type: 'string',
                                description: 'Prometheus operator version to run.',
                              },
                            },
                          },
                        },
                      },
                      providerConfigRef: {
                        type: 'object',
                        description: 'A reference to the ProviderConfig of the cluster that services should be deployed to.',
                        properties: {
                          name: {
                            type: 'string',
                            description: 'Name of the Kubernetes provider configuration. This will typically be the name of the cluster with a five character suffix appended.',
                          },
                        },
                        required: [
                          'name',
                        ],
                      },
                    },
                    required: [
                      'providerConfigRef',
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    }
  );
}

export function compositepostgresqlinstancesAwsPlatformrefCrossplaneIo(chart: Chart, name: string = 'compositepostgresqlinstances.aws.platformref.crossplane.io/compositeresourcedefinition/apiextensions.crossplane.io') : ApiObject {
  return new group.CompositeResourceDefinition(chart, name,
    {
      metadata: {
        name: 'compositepostgresqlinstances.aws.platformref.crossplane.io',
        annotations: {
          'upbound.io/ui-schema': '---\nconfigSections:\n- title: Database Size\n  description: Enter information to size your database\n  items:\n  - name: storageGB\n    controlType: singleInput\n    type: integer\n    path: ".spec.parameters.storageGB"\n    title: Storage (GB)\n    description: The size in GB for database storage\n    default: 5\n    validation:\n    - minimum: 1\n    - maximum: 500\n    - required: true\n  - name: networkRef\n    controlType: singleInput\n    type: string\n    path: ".spec.parameters.networkRef.id"\n    title: Network Ref\n    description: Network fabric to connect the database to\n    default: platform-ref-aws-network\n    validation:\n    - required: true\n      customError: Network ref is required and should match the network ref of the app cluster.\n  - name: writeSecretRef\n    controlType: singleInput\n    type: string\n    path: ".spec.writeConnectionSecretToRef.name"\n    title: Connection Secret Ref\n    description: name of the secret to write to this namespace\n    default: db-conn\n    validation:\n    - required: true',
        },
      },
      spec: {
        claimNames: {
          kind: 'PostgreSQLInstance',
          plural: 'postgresqlinstances',
        },
        connectionSecretKeys: [
          'username',
          'password',
          'endpoint',
          'port',
        ],
        group: 'aws.platformref.crossplane.io',
        names: {
          kind: 'CompositePostgreSQLInstance',
          plural: 'compositepostgresqlinstances',
        },
        versions: [
          {
            name: 'v1alpha1',
            served: true,
            referenceable: true,
            schema: {
              openAPIV3Schema: {
                type: 'object',
                properties: {
                  spec: {
                    type: 'object',
                    properties: {
                      parameters: {
                        type: 'object',
                        properties: {
                          storageGB: {
                            type: 'integer',
                          },
                          networkRef: {
                            type: 'object',
                            description: 'A reference to the Network object that this postgres should be connected to.',
                            properties: {
                              id: {
                                type: 'string',
                                description: 'ID of the Network object this ref points to.',
                              },
                            },
                            required: [
                              'id',
                            ],
                          },
                        },
                        required: [
                          'storageGB',
                          'networkRef',
                        ],
                      },
                    },
                    required: [
                      'parameters',
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    }
  );
}

export function compositenetworksAwsPlatformrefCrossplaneIo(chart: Chart, name: string = 'compositenetworks.aws.platformref.crossplane.io/compositeresourcedefinition/apiextensions.crossplane.io') : ApiObject {
  return new group.CompositeResourceDefinition(chart, name,
    {
      metadata: {
        name: 'compositenetworks.aws.platformref.crossplane.io',
        annotations: {
          'upbound.io/ui-schema': '---\nconfigSections:\n- title: Network Info\n  description: Information about this network fabric\n  items:\n  - name: id\n    controlType: singleInput\n    type: string\n    path: ".spec.id"\n    title: Network ID\n    description: Network ID that other objects will use to refer (and connect) to this network fabric\n    default: platform-ref-aws-network\n    validation:\n    - required: true\n      customError: Network ID is required.\n- title: Cluster Info\n  description: The cluster used with this network fabric\n  items:\n  - name: clusterRef\n    controlType: singleInput\n    type: string\n    path: ".spec.clusterRef.id"\n    title: Cluster Ref\n    description: ID of the Cluster object that will use this network fabric\n    default: platform-ref-aws-cluster\n    validation:\n    - required: true\n      customError: Cluster ref is required.',
        },
      },
      spec: {
        claimNames: {
          kind: 'Network',
          plural: 'networks',
        },
        group: 'aws.platformref.crossplane.io',
        names: {
          kind: 'CompositeNetwork',
          plural: 'compositenetworks',
        },
        versions: [
          {
            name: 'v1alpha1',
            served: true,
            referenceable: true,
            schema: {
              openAPIV3Schema: {
                type: 'object',
                properties: {
                  spec: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'ID of this Network that other objects will use to refer to it.',
                      },
                      clusterRef: {
                        type: 'object',
                        description: 'A reference to the Cluster object that this network will be used for.',
                        properties: {
                          id: {
                            type: 'string',
                            description: 'ID of the Cluster object this ref points to.',
                          },
                        },
                        required: [
                          'id',
                        ],
                      },
                    },
                    required: [
                      'id',
                      'clusterRef',
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    }
  );
}

