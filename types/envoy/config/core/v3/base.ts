/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Struct } from "../../../../google/protobuf/struct";
import { BoolValue, UInt32Value } from "../../../../google/protobuf/wrappers";
import { ContextParams } from "../../../../xds/core/v3/context_params";
import { FractionalPercent, Percent } from "../../../type/v3/percent";
import { SemanticVersion } from "../../../type/v3/semantic_version";
import { Address } from "./address";
import { BackoffStrategy } from "./backoff";
import { HttpUri } from "./http_uri";

export const protobufPackage = "envoy.config.core.v3";

/**
 * Envoy supports :ref:`upstream priority routing
 * <arch_overview_http_routing_priority>` both at the route and the virtual
 * cluster level. The current priority implementation uses different connection
 * pool and circuit breaking settings for each priority level. This means that
 * even for HTTP/2 requests, two physical connections will be used to an
 * upstream host. In the future Envoy will likely support true HTTP/2 priority
 * over a single upstream connection.
 */
export enum RoutingPriority {
  DEFAULT = 0,
  HIGH = 1,
  UNRECOGNIZED = -1,
}

export function routingPriorityFromJSON(object: any): RoutingPriority {
  switch (object) {
    case 0:
    case "DEFAULT":
      return RoutingPriority.DEFAULT;
    case 1:
    case "HIGH":
      return RoutingPriority.HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RoutingPriority.UNRECOGNIZED;
  }
}

export function routingPriorityToJSON(object: RoutingPriority): string {
  switch (object) {
    case RoutingPriority.DEFAULT:
      return "DEFAULT";
    case RoutingPriority.HIGH:
      return "HIGH";
    case RoutingPriority.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** HTTP request method. */
export enum RequestMethod {
  METHOD_UNSPECIFIED = 0,
  GET = 1,
  HEAD = 2,
  POST = 3,
  PUT = 4,
  DELETE = 5,
  CONNECT = 6,
  OPTIONS = 7,
  TRACE = 8,
  PATCH = 9,
  UNRECOGNIZED = -1,
}

export function requestMethodFromJSON(object: any): RequestMethod {
  switch (object) {
    case 0:
    case "METHOD_UNSPECIFIED":
      return RequestMethod.METHOD_UNSPECIFIED;
    case 1:
    case "GET":
      return RequestMethod.GET;
    case 2:
    case "HEAD":
      return RequestMethod.HEAD;
    case 3:
    case "POST":
      return RequestMethod.POST;
    case 4:
    case "PUT":
      return RequestMethod.PUT;
    case 5:
    case "DELETE":
      return RequestMethod.DELETE;
    case 6:
    case "CONNECT":
      return RequestMethod.CONNECT;
    case 7:
    case "OPTIONS":
      return RequestMethod.OPTIONS;
    case 8:
    case "TRACE":
      return RequestMethod.TRACE;
    case 9:
    case "PATCH":
      return RequestMethod.PATCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestMethod.UNRECOGNIZED;
  }
}

export function requestMethodToJSON(object: RequestMethod): string {
  switch (object) {
    case RequestMethod.METHOD_UNSPECIFIED:
      return "METHOD_UNSPECIFIED";
    case RequestMethod.GET:
      return "GET";
    case RequestMethod.HEAD:
      return "HEAD";
    case RequestMethod.POST:
      return "POST";
    case RequestMethod.PUT:
      return "PUT";
    case RequestMethod.DELETE:
      return "DELETE";
    case RequestMethod.CONNECT:
      return "CONNECT";
    case RequestMethod.OPTIONS:
      return "OPTIONS";
    case RequestMethod.TRACE:
      return "TRACE";
    case RequestMethod.PATCH:
      return "PATCH";
    case RequestMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Identifies the direction of the traffic relative to the local Envoy. */
export enum TrafficDirection {
  /** UNSPECIFIED - Default option is unspecified. */
  UNSPECIFIED = 0,
  /** INBOUND - The transport is used for incoming traffic. */
  INBOUND = 1,
  /** OUTBOUND - The transport is used for outgoing traffic. */
  OUTBOUND = 2,
  UNRECOGNIZED = -1,
}

export function trafficDirectionFromJSON(object: any): TrafficDirection {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return TrafficDirection.UNSPECIFIED;
    case 1:
    case "INBOUND":
      return TrafficDirection.INBOUND;
    case 2:
    case "OUTBOUND":
      return TrafficDirection.OUTBOUND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TrafficDirection.UNRECOGNIZED;
  }
}

export function trafficDirectionToJSON(object: TrafficDirection): string {
  switch (object) {
    case TrafficDirection.UNSPECIFIED:
      return "UNSPECIFIED";
    case TrafficDirection.INBOUND:
      return "INBOUND";
    case TrafficDirection.OUTBOUND:
      return "OUTBOUND";
    case TrafficDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Identifies location of where either Envoy runs or where upstream hosts run. */
export interface Locality {
  /** Region this :ref:`zone <envoy_v3_api_field_config.core.v3.Locality.zone>` belongs to. */
  region: string;
  /**
   * Defines the local service zone where Envoy is running. Though optional, it
   * should be set if discovery service routing is used and the discovery
   * service exposes :ref:`zone data <envoy_v3_api_field_config.endpoint.v3.LocalityLbEndpoints.locality>`,
   * either in this message or via :option:`--service-zone`. The meaning of zone
   * is context dependent, e.g. `Availability Zone (AZ)
   * <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html>`_
   * on AWS, `Zone <https://cloud.google.com/compute/docs/regions-zones/>`_ on
   * GCP, etc.
   */
  zone: string;
  /**
   * When used for locality of upstream hosts, this field further splits zone
   * into smaller chunks of sub-zones so they can be load balanced
   * independently.
   */
  sub_zone: string;
}

/**
 * BuildVersion combines SemVer version of extension with free-form build information
 * (i.e. 'alpha', 'private-build') as a set of strings.
 */
export interface BuildVersion {
  /** SemVer version of extension. */
  version:
    | SemanticVersion
    | undefined;
  /**
   * Free-form build information.
   * Envoy defines several well known keys in the source/common/version/version.h file
   */
  metadata: { [key: string]: any } | undefined;
}

/**
 * Version and identification for an Envoy extension.
 * [#next-free-field: 7]
 */
export interface Extension {
  /**
   * This is the name of the Envoy filter as specified in the Envoy
   * configuration, e.g. envoy.filters.http.router, com.acme.widget.
   */
  name: string;
  /**
   * Category of the extension.
   * Extension category names use reverse DNS notation. For instance "envoy.filters.listener"
   * for Envoy's built-in listener filters or "com.acme.filters.http" for HTTP filters from
   * acme.com vendor.
   * [#comment:TODO(yanavlasov): Link to the doc with existing envoy category names.]
   */
  category: string;
  /**
   * [#not-implemented-hide:] Type descriptor of extension configuration proto.
   * [#comment:TODO(yanavlasov): Link to the doc with existing configuration protos.]
   * [#comment:TODO(yanavlasov): Add tests when PR #9391 lands.]
   *
   * @deprecated
   */
  type_descriptor: string;
  /**
   * The version is a property of the extension and maintained independently
   * of other extensions and the Envoy API.
   * This field is not set when extension did not provide version information.
   */
  version:
    | BuildVersion
    | undefined;
  /** Indicates that the extension is present but was disabled via dynamic configuration. */
  disabled: boolean;
  /** Type URLs of extension configuration protos. */
  type_urls: string[];
}

/**
 * Identifies a specific Envoy instance. The node identifier is presented to the
 * management server, which may use this identifier to distinguish per Envoy
 * configuration for serving.
 * [#next-free-field: 13]
 */
export interface Node {
  /**
   * An opaque node identifier for the Envoy node. This also provides the local
   * service node name. It should be set if any of the following features are
   * used: :ref:`statsd <arch_overview_statistics>`, :ref:`CDS
   * <config_cluster_manager_cds>`, and :ref:`HTTP tracing
   * <arch_overview_tracing>`, either in this message or via
   * :option:`--service-node`.
   */
  id: string;
  /**
   * Defines the local service cluster name where Envoy is running. Though
   * optional, it should be set if any of the following features are used:
   * :ref:`statsd <arch_overview_statistics>`, :ref:`health check cluster
   * verification
   * <envoy_v3_api_field_config.core.v3.HealthCheck.HttpHealthCheck.service_name_matcher>`,
   * :ref:`runtime override directory <envoy_v3_api_msg_config.bootstrap.v3.Runtime>`,
   * :ref:`user agent addition
   * <envoy_v3_api_field_extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.add_user_agent>`,
   * :ref:`HTTP global rate limiting <config_http_filters_rate_limit>`,
   * :ref:`CDS <config_cluster_manager_cds>`, and :ref:`HTTP tracing
   * <arch_overview_tracing>`, either in this message or via
   * :option:`--service-cluster`.
   */
  cluster: string;
  /**
   * Opaque metadata extending the node identifier. Envoy will pass this
   * directly to the management server.
   */
  metadata:
    | { [key: string]: any }
    | undefined;
  /**
   * Map from xDS resource type URL to dynamic context parameters. These may vary at runtime (unlike
   * other fields in this message). For example, the xDS client may have a shard identifier that
   * changes during the lifetime of the xDS client. In Envoy, this would be achieved by updating the
   * dynamic context on the Server::Instance's LocalInfo context provider. The shard ID dynamic
   * parameter then appears in this field during future discovery requests.
   */
  dynamic_parameters: { [key: string]: ContextParams };
  /** Locality specifying where the Envoy instance is running. */
  locality:
    | Locality
    | undefined;
  /**
   * Free-form string that identifies the entity requesting config.
   * E.g. "envoy" or "grpc"
   */
  user_agent_name: string;
  /**
   * Free-form string that identifies the version of the entity requesting config.
   * E.g. "1.12.2" or "abcd1234", or "SpecialEnvoyBuild"
   */
  user_agent_version?:
    | string
    | undefined;
  /** Structured version of the entity requesting config. */
  user_agent_build_version?:
    | BuildVersion
    | undefined;
  /** List of extensions and their versions supported by the node. */
  extensions: Extension[];
  /**
   * Client feature support list. These are well known features described
   * in the Envoy API repository for a given major version of an API. Client features
   * use reverse DNS naming scheme, for example ``com.acme.feature``.
   * See :ref:`the list of features <client_features>` that xDS client may
   * support.
   */
  client_features: string[];
  /**
   * Known listening ports on the node as a generic hint to the management server
   * for filtering :ref:`listeners <config_listeners>` to be returned. For example,
   * if there is a listener bound to port 80, the list can optionally contain the
   * SocketAddress ``(0.0.0.0,80)``. The field is optional and just a hint.
   *
   * @deprecated
   */
  listening_addresses: Address[];
}

export interface Node_DynamicParametersEntry {
  key: string;
  value: ContextParams | undefined;
}

/**
 * Metadata provides additional inputs to filters based on matched listeners,
 * filter chains, routes and endpoints. It is structured as a map, usually from
 * filter name (in reverse DNS format) to metadata specific to the filter. Metadata
 * key-values for a filter are merged as connection and request handling occurs,
 * with later values for the same key overriding earlier values.
 *
 * An example use of metadata is providing additional values to
 * http_connection_manager in the envoy.http_connection_manager.access_log
 * namespace.
 *
 * Another example use of metadata is to per service config info in cluster metadata, which may get
 * consumed by multiple filters.
 *
 * For load balancing, Metadata provides a means to subset cluster endpoints.
 * Endpoints have a Metadata object associated and routes contain a Metadata
 * object to match against. There are some well defined metadata used today for
 * this purpose:
 *
 * * ``{"envoy.lb": {"canary": <bool> }}`` This indicates the canary status of an
 *   endpoint and is also used during header processing
 *   (x-envoy-upstream-canary) and for stats purposes.
 * [#next-major-version: move to type/metadata/v2]
 */
export interface Metadata {
  /**
   * Key is the reverse DNS filter name, e.g. com.acme.widget. The ``envoy.*``
   * namespace is reserved for Envoy's built-in filters.
   * If both ``filter_metadata`` and
   * :ref:`typed_filter_metadata <envoy_v3_api_field_config.core.v3.Metadata.typed_filter_metadata>`
   * fields are present in the metadata with same keys,
   * only ``typed_filter_metadata`` field will be parsed.
   */
  filter_metadata: { [key: string]: { [key: string]: any } | undefined };
  /**
   * Key is the reverse DNS filter name, e.g. com.acme.widget. The ``envoy.*``
   * namespace is reserved for Envoy's built-in filters.
   * The value is encoded as google.protobuf.Any.
   * If both :ref:`filter_metadata <envoy_v3_api_field_config.core.v3.Metadata.filter_metadata>`
   * and ``typed_filter_metadata`` fields are present in the metadata with same keys,
   * only ``typed_filter_metadata`` field will be parsed.
   */
  typed_filter_metadata: { [key: string]: Any };
}

export interface Metadata_FilterMetadataEntry {
  key: string;
  value: { [key: string]: any } | undefined;
}

export interface Metadata_TypedFilterMetadataEntry {
  key: string;
  value: Any | undefined;
}

/** Runtime derived uint32 with a default when not specified. */
export interface RuntimeUInt32 {
  /** Default value if runtime value is not available. */
  default_value: number;
  /** Runtime key to get value for comparison. This value is used if defined. */
  runtime_key: string;
}

/** Runtime derived percentage with a default when not specified. */
export interface RuntimePercent {
  /** Default value if runtime value is not available. */
  default_value:
    | Percent
    | undefined;
  /** Runtime key to get value for comparison. This value is used if defined. */
  runtime_key: string;
}

/** Runtime derived double with a default when not specified. */
export interface RuntimeDouble {
  /** Default value if runtime value is not available. */
  default_value: number;
  /** Runtime key to get value for comparison. This value is used if defined. */
  runtime_key: string;
}

/** Runtime derived bool with a default when not specified. */
export interface RuntimeFeatureFlag {
  /** Default value if runtime value is not available. */
  default_value:
    | boolean
    | undefined;
  /**
   * Runtime key to get value for comparison. This value is used if defined. The boolean value must
   * be represented via its
   * `canonical JSON encoding <https://developers.google.com/protocol-buffers/docs/proto3#json>`_.
   */
  runtime_key: string;
}

/** Query parameter name/value pair. */
export interface QueryParameter {
  /** The key of the query parameter. Case sensitive. */
  key: string;
  /** The value of the query parameter. */
  value: string;
}

/** Header name/value pair. */
export interface HeaderValue {
  /** Header name. */
  key: string;
  /**
   * Header value.
   *
   * The same :ref:`format specifier <config_access_log_format>` as used for
   * :ref:`HTTP access logging <config_access_log>` applies here, however
   * unknown header values are replaced with the empty string instead of ``-``.
   * Header value is encoded as string. This does not work for non-utf8 characters.
   * Only one of ``value`` or ``raw_value`` can be set.
   */
  value: string;
  /**
   * Header value is encoded as bytes which can support non-utf8 characters.
   * Only one of ``value`` or ``raw_value`` can be set.
   */
  raw_value: Uint8Array;
}

/** Header name/value pair plus option to control append behavior. */
export interface HeaderValueOption {
  /** Header name/value pair that this option applies to. */
  header:
    | HeaderValue
    | undefined;
  /**
   * Should the value be appended? If true (default), the value is appended to
   * existing values. Otherwise it replaces any existing values.
   * This field is deprecated and please use
   * :ref:`append_action <envoy_v3_api_field_config.core.v3.HeaderValueOption.append_action>` as replacement.
   *
   * .. note::
   *   The :ref:`external authorization service <envoy_v3_api_msg_service.auth.v3.CheckResponse>` and
   *   :ref:`external processor service <envoy_v3_api_msg_service.ext_proc.v3.ProcessingResponse>` have
   *   default value (``false``) for this field.
   *
   * @deprecated
   */
  append:
    | boolean
    | undefined;
  /**
   * Describes the action taken to append/overwrite the given value for an existing header
   * or to only add this header if it's absent.
   * Value defaults to :ref:`APPEND_IF_EXISTS_OR_ADD
   * <envoy_v3_api_enum_value_config.core.v3.HeaderValueOption.HeaderAppendAction.APPEND_IF_EXISTS_OR_ADD>`.
   */
  append_action: HeaderValueOption_HeaderAppendAction;
  /**
   * Is the header value allowed to be empty? If false (default), custom headers with empty values are dropped,
   * otherwise they are added.
   */
  keep_empty_value: boolean;
}

/** Describes the supported actions types for header append action. */
export enum HeaderValueOption_HeaderAppendAction {
  /**
   * APPEND_IF_EXISTS_OR_ADD - If the header already exists, this action will result in:
   *
   * - Comma-concatenated for predefined inline headers.
   * - Duplicate header added in the ``HeaderMap`` for other headers.
   *
   * If the header doesn't exist then this will add new header with specified key and value.
   */
  APPEND_IF_EXISTS_OR_ADD = 0,
  /**
   * ADD_IF_ABSENT - This action will add the header if it doesn't already exist. If the header
   * already exists then this will be a no-op.
   */
  ADD_IF_ABSENT = 1,
  /**
   * OVERWRITE_IF_EXISTS_OR_ADD - This action will overwrite the specified value by discarding any existing values if
   * the header already exists. If the header doesn't exist then this will add the header
   * with specified key and value.
   */
  OVERWRITE_IF_EXISTS_OR_ADD = 2,
  /**
   * OVERWRITE_IF_EXISTS - This action will overwrite the specified value by discarding any existing values if
   * the header already exists. If the header doesn't exist then this will be no-op.
   */
  OVERWRITE_IF_EXISTS = 3,
  UNRECOGNIZED = -1,
}

export function headerValueOption_HeaderAppendActionFromJSON(object: any): HeaderValueOption_HeaderAppendAction {
  switch (object) {
    case 0:
    case "APPEND_IF_EXISTS_OR_ADD":
      return HeaderValueOption_HeaderAppendAction.APPEND_IF_EXISTS_OR_ADD;
    case 1:
    case "ADD_IF_ABSENT":
      return HeaderValueOption_HeaderAppendAction.ADD_IF_ABSENT;
    case 2:
    case "OVERWRITE_IF_EXISTS_OR_ADD":
      return HeaderValueOption_HeaderAppendAction.OVERWRITE_IF_EXISTS_OR_ADD;
    case 3:
    case "OVERWRITE_IF_EXISTS":
      return HeaderValueOption_HeaderAppendAction.OVERWRITE_IF_EXISTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HeaderValueOption_HeaderAppendAction.UNRECOGNIZED;
  }
}

export function headerValueOption_HeaderAppendActionToJSON(object: HeaderValueOption_HeaderAppendAction): string {
  switch (object) {
    case HeaderValueOption_HeaderAppendAction.APPEND_IF_EXISTS_OR_ADD:
      return "APPEND_IF_EXISTS_OR_ADD";
    case HeaderValueOption_HeaderAppendAction.ADD_IF_ABSENT:
      return "ADD_IF_ABSENT";
    case HeaderValueOption_HeaderAppendAction.OVERWRITE_IF_EXISTS_OR_ADD:
      return "OVERWRITE_IF_EXISTS_OR_ADD";
    case HeaderValueOption_HeaderAppendAction.OVERWRITE_IF_EXISTS:
      return "OVERWRITE_IF_EXISTS";
    case HeaderValueOption_HeaderAppendAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Wrapper for a set of headers. */
export interface HeaderMap {
  headers: HeaderValue[];
}

/**
 * A directory that is watched for changes, e.g. by inotify on Linux. Move/rename
 * events inside this directory trigger the watch.
 */
export interface WatchedDirectory {
  /** Directory path to watch. */
  path: string;
}

/** Data source consisting of a file, an inline value, or an environment variable. */
export interface DataSource {
  /** Local filesystem data source. */
  filename?:
    | string
    | undefined;
  /** Bytes inlined in the configuration. */
  inline_bytes?:
    | Uint8Array
    | undefined;
  /** String inlined in the configuration. */
  inline_string?:
    | string
    | undefined;
  /** Environment variable data source. */
  environment_variable?: string | undefined;
}

/** The message specifies the retry policy of remote data source when fetching fails. */
export interface RetryPolicy {
  /**
   * Specifies parameters that control :ref:`retry backoff strategy <envoy_v3_api_msg_config.core.v3.BackoffStrategy>`.
   * This parameter is optional, in which case the default base interval is 1000 milliseconds. The
   * default maximum interval is 10 times the base interval.
   */
  retry_back_off:
    | BackoffStrategy
    | undefined;
  /**
   * Specifies the allowed number of retries. This parameter is optional and
   * defaults to 1.
   */
  num_retries: number | undefined;
}

/** The message specifies how to fetch data from remote and how to verify it. */
export interface RemoteDataSource {
  /** The HTTP URI to fetch the remote data. */
  http_uri:
    | HttpUri
    | undefined;
  /** SHA256 string for verifying data. */
  sha256: string;
  /** Retry policy for fetching remote data. */
  retry_policy: RetryPolicy | undefined;
}

/** Async data source which support async data fetch. */
export interface AsyncDataSource {
  /** Local async data source. */
  local?:
    | DataSource
    | undefined;
  /** Remote async data source. */
  remote?: RemoteDataSource | undefined;
}

/**
 * Configuration for transport socket in :ref:`listeners <config_listeners>` and
 * :ref:`clusters <envoy_v3_api_msg_config.cluster.v3.Cluster>`. If the configuration is
 * empty, a default transport socket implementation and configuration will be
 * chosen based on the platform and existence of tls_context.
 */
export interface TransportSocket {
  /**
   * The name of the transport socket to instantiate. The name must match a supported transport
   * socket implementation.
   */
  name: string;
  typed_config?: Any | undefined;
}

/**
 * Runtime derived FractionalPercent with defaults for when the numerator or denominator is not
 * specified via a runtime key.
 *
 * .. note::
 *
 *   Parsing of the runtime key's data is implemented such that it may be represented as a
 *   :ref:`FractionalPercent <envoy_v3_api_msg_type.v3.FractionalPercent>` proto represented as JSON/YAML
 *   and may also be represented as an integer with the assumption that the value is an integral
 *   percentage out of 100. For instance, a runtime key lookup returning the value "42" would parse
 *   as a ``FractionalPercent`` whose numerator is 42 and denominator is HUNDRED.
 */
export interface RuntimeFractionalPercent {
  /** Default value if the runtime value's for the numerator/denominator keys are not available. */
  default_value:
    | FractionalPercent
    | undefined;
  /** Runtime key for a YAML representation of a FractionalPercent. */
  runtime_key: string;
}

/** Identifies a specific ControlPlane instance that Envoy is connected to. */
export interface ControlPlane {
  /**
   * An opaque control plane identifier that uniquely identifies an instance
   * of control plane. This can be used to identify which control plane instance,
   * the Envoy is connected to.
   */
  identifier: string;
}

function createBaseLocality(): Locality {
  return { region: "", zone: "", sub_zone: "" };
}

export const Locality = {
  encode(message: Locality, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.region !== "") {
      writer.uint32(10).string(message.region);
    }
    if (message.zone !== "") {
      writer.uint32(18).string(message.zone);
    }
    if (message.sub_zone !== "") {
      writer.uint32(26).string(message.sub_zone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Locality {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocality();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.region = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.zone = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sub_zone = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Locality {
    return {
      region: isSet(object.region) ? globalThis.String(object.region) : "",
      zone: isSet(object.zone) ? globalThis.String(object.zone) : "",
      sub_zone: isSet(object.sub_zone) ? globalThis.String(object.sub_zone) : "",
    };
  },

  toJSON(message: Locality): unknown {
    const obj: any = {};
    if (message.region !== "") {
      obj.region = message.region;
    }
    if (message.zone !== "") {
      obj.zone = message.zone;
    }
    if (message.sub_zone !== "") {
      obj.sub_zone = message.sub_zone;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Locality>, I>>(base?: I): Locality {
    return Locality.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Locality>, I>>(object: I): Locality {
    const message = createBaseLocality();
    message.region = object.region ?? "";
    message.zone = object.zone ?? "";
    message.sub_zone = object.sub_zone ?? "";
    return message;
  },
};

function createBaseBuildVersion(): BuildVersion {
  return { version: undefined, metadata: undefined };
}

export const BuildVersion = {
  encode(message: BuildVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      SemanticVersion.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Struct.encode(Struct.wrap(message.metadata), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = SemanticVersion.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuildVersion {
    return {
      version: isSet(object.version) ? SemanticVersion.fromJSON(object.version) : undefined,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: BuildVersion): unknown {
    const obj: any = {};
    if (message.version !== undefined) {
      obj.version = SemanticVersion.toJSON(message.version);
    }
    if (message.metadata !== undefined) {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildVersion>, I>>(base?: I): BuildVersion {
    return BuildVersion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuildVersion>, I>>(object: I): BuildVersion {
    const message = createBaseBuildVersion();
    message.version = (object.version !== undefined && object.version !== null)
      ? SemanticVersion.fromPartial(object.version)
      : undefined;
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseExtension(): Extension {
  return { name: "", category: "", type_descriptor: "", version: undefined, disabled: false, type_urls: [] };
}

export const Extension = {
  encode(message: Extension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.category !== "") {
      writer.uint32(18).string(message.category);
    }
    if (message.type_descriptor !== "") {
      writer.uint32(26).string(message.type_descriptor);
    }
    if (message.version !== undefined) {
      BuildVersion.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    if (message.disabled !== false) {
      writer.uint32(40).bool(message.disabled);
    }
    for (const v of message.type_urls) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Extension {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.category = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type_descriptor = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.version = BuildVersion.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.disabled = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type_urls.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Extension {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      category: isSet(object.category) ? globalThis.String(object.category) : "",
      type_descriptor: isSet(object.type_descriptor) ? globalThis.String(object.type_descriptor) : "",
      version: isSet(object.version) ? BuildVersion.fromJSON(object.version) : undefined,
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
      type_urls: globalThis.Array.isArray(object?.type_urls)
        ? object.type_urls.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Extension): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    if (message.type_descriptor !== "") {
      obj.type_descriptor = message.type_descriptor;
    }
    if (message.version !== undefined) {
      obj.version = BuildVersion.toJSON(message.version);
    }
    if (message.disabled !== false) {
      obj.disabled = message.disabled;
    }
    if (message.type_urls?.length) {
      obj.type_urls = message.type_urls;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Extension>, I>>(base?: I): Extension {
    return Extension.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Extension>, I>>(object: I): Extension {
    const message = createBaseExtension();
    message.name = object.name ?? "";
    message.category = object.category ?? "";
    message.type_descriptor = object.type_descriptor ?? "";
    message.version = (object.version !== undefined && object.version !== null)
      ? BuildVersion.fromPartial(object.version)
      : undefined;
    message.disabled = object.disabled ?? false;
    message.type_urls = object.type_urls?.map((e) => e) || [];
    return message;
  },
};

function createBaseNode(): Node {
  return {
    id: "",
    cluster: "",
    metadata: undefined,
    dynamic_parameters: {},
    locality: undefined,
    user_agent_name: "",
    user_agent_version: undefined,
    user_agent_build_version: undefined,
    extensions: [],
    client_features: [],
    listening_addresses: [],
  };
}

export const Node = {
  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.cluster !== "") {
      writer.uint32(18).string(message.cluster);
    }
    if (message.metadata !== undefined) {
      Struct.encode(Struct.wrap(message.metadata), writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.dynamic_parameters).forEach(([key, value]) => {
      Node_DynamicParametersEntry.encode({ key: key as any, value }, writer.uint32(98).fork()).ldelim();
    });
    if (message.locality !== undefined) {
      Locality.encode(message.locality, writer.uint32(34).fork()).ldelim();
    }
    if (message.user_agent_name !== "") {
      writer.uint32(50).string(message.user_agent_name);
    }
    if (message.user_agent_version !== undefined) {
      writer.uint32(58).string(message.user_agent_version);
    }
    if (message.user_agent_build_version !== undefined) {
      BuildVersion.encode(message.user_agent_build_version, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.extensions) {
      Extension.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.client_features) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.listening_addresses) {
      Address.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cluster = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          const entry12 = Node_DynamicParametersEntry.decode(reader, reader.uint32());
          if (entry12.value !== undefined) {
            message.dynamic_parameters[entry12.key] = entry12.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.locality = Locality.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.user_agent_name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.user_agent_version = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.user_agent_build_version = BuildVersion.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.extensions.push(Extension.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.client_features.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.listening_addresses.push(Address.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Node {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      cluster: isSet(object.cluster) ? globalThis.String(object.cluster) : "",
      metadata: isObject(object.metadata) ? object.metadata : undefined,
      dynamic_parameters: isObject(object.dynamic_parameters)
        ? Object.entries(object.dynamic_parameters).reduce<{ [key: string]: ContextParams }>((acc, [key, value]) => {
          acc[key] = ContextParams.fromJSON(value);
          return acc;
        }, {})
        : {},
      locality: isSet(object.locality) ? Locality.fromJSON(object.locality) : undefined,
      user_agent_name: isSet(object.user_agent_name) ? globalThis.String(object.user_agent_name) : "",
      user_agent_version: isSet(object.user_agent_version) ? globalThis.String(object.user_agent_version) : undefined,
      user_agent_build_version: isSet(object.user_agent_build_version)
        ? BuildVersion.fromJSON(object.user_agent_build_version)
        : undefined,
      extensions: globalThis.Array.isArray(object?.extensions)
        ? object.extensions.map((e: any) => Extension.fromJSON(e))
        : [],
      client_features: globalThis.Array.isArray(object?.client_features)
        ? object.client_features.map((e: any) => globalThis.String(e))
        : [],
      listening_addresses: globalThis.Array.isArray(object?.listening_addresses)
        ? object.listening_addresses.map((e: any) => Address.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Node): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.cluster !== "") {
      obj.cluster = message.cluster;
    }
    if (message.metadata !== undefined) {
      obj.metadata = message.metadata;
    }
    if (message.dynamic_parameters) {
      const entries = Object.entries(message.dynamic_parameters);
      if (entries.length > 0) {
        obj.dynamic_parameters = {};
        entries.forEach(([k, v]) => {
          obj.dynamic_parameters[k] = ContextParams.toJSON(v);
        });
      }
    }
    if (message.locality !== undefined) {
      obj.locality = Locality.toJSON(message.locality);
    }
    if (message.user_agent_name !== "") {
      obj.user_agent_name = message.user_agent_name;
    }
    if (message.user_agent_version !== undefined) {
      obj.user_agent_version = message.user_agent_version;
    }
    if (message.user_agent_build_version !== undefined) {
      obj.user_agent_build_version = BuildVersion.toJSON(message.user_agent_build_version);
    }
    if (message.extensions?.length) {
      obj.extensions = message.extensions.map((e) => Extension.toJSON(e));
    }
    if (message.client_features?.length) {
      obj.client_features = message.client_features;
    }
    if (message.listening_addresses?.length) {
      obj.listening_addresses = message.listening_addresses.map((e) => Address.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Node>, I>>(base?: I): Node {
    return Node.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Node>, I>>(object: I): Node {
    const message = createBaseNode();
    message.id = object.id ?? "";
    message.cluster = object.cluster ?? "";
    message.metadata = object.metadata ?? undefined;
    message.dynamic_parameters = Object.entries(object.dynamic_parameters ?? {}).reduce<
      { [key: string]: ContextParams }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ContextParams.fromPartial(value);
      }
      return acc;
    }, {});
    message.locality = (object.locality !== undefined && object.locality !== null)
      ? Locality.fromPartial(object.locality)
      : undefined;
    message.user_agent_name = object.user_agent_name ?? "";
    message.user_agent_version = object.user_agent_version ?? undefined;
    message.user_agent_build_version =
      (object.user_agent_build_version !== undefined && object.user_agent_build_version !== null)
        ? BuildVersion.fromPartial(object.user_agent_build_version)
        : undefined;
    message.extensions = object.extensions?.map((e) => Extension.fromPartial(e)) || [];
    message.client_features = object.client_features?.map((e) => e) || [];
    message.listening_addresses = object.listening_addresses?.map((e) => Address.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNode_DynamicParametersEntry(): Node_DynamicParametersEntry {
  return { key: "", value: undefined };
}

export const Node_DynamicParametersEntry = {
  encode(message: Node_DynamicParametersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ContextParams.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node_DynamicParametersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode_DynamicParametersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = ContextParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Node_DynamicParametersEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? ContextParams.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Node_DynamicParametersEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ContextParams.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Node_DynamicParametersEntry>, I>>(base?: I): Node_DynamicParametersEntry {
    return Node_DynamicParametersEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Node_DynamicParametersEntry>, I>>(object: I): Node_DynamicParametersEntry {
    const message = createBaseNode_DynamicParametersEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ContextParams.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseMetadata(): Metadata {
  return { filter_metadata: {}, typed_filter_metadata: {} };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.filter_metadata).forEach(([key, value]) => {
      if (value !== undefined) {
        Metadata_FilterMetadataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
      }
    });
    Object.entries(message.typed_filter_metadata).forEach(([key, value]) => {
      Metadata_TypedFilterMetadataEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Metadata_FilterMetadataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.filter_metadata[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = Metadata_TypedFilterMetadataEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.typed_filter_metadata[entry2.key] = entry2.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      filter_metadata: isObject(object.filter_metadata)
        ? Object.entries(object.filter_metadata).reduce<{ [key: string]: { [key: string]: any } | undefined }>(
          (acc, [key, value]) => {
            acc[key] = value as { [key: string]: any } | undefined;
            return acc;
          },
          {},
        )
        : {},
      typed_filter_metadata: isObject(object.typed_filter_metadata)
        ? Object.entries(object.typed_filter_metadata).reduce<{ [key: string]: Any }>((acc, [key, value]) => {
          acc[key] = Any.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    if (message.filter_metadata) {
      const entries = Object.entries(message.filter_metadata);
      if (entries.length > 0) {
        obj.filter_metadata = {};
        entries.forEach(([k, v]) => {
          obj.filter_metadata[k] = v;
        });
      }
    }
    if (message.typed_filter_metadata) {
      const entries = Object.entries(message.typed_filter_metadata);
      if (entries.length > 0) {
        obj.typed_filter_metadata = {};
        entries.forEach(([k, v]) => {
          obj.typed_filter_metadata[k] = Any.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Metadata>, I>>(base?: I): Metadata {
    return Metadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.filter_metadata = Object.entries(object.filter_metadata ?? {}).reduce<
      { [key: string]: { [key: string]: any } | undefined }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.typed_filter_metadata = Object.entries(object.typed_filter_metadata ?? {}).reduce<{ [key: string]: Any }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Any.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseMetadata_FilterMetadataEntry(): Metadata_FilterMetadataEntry {
  return { key: "", value: undefined };
}

export const Metadata_FilterMetadataEntry = {
  encode(message: Metadata_FilterMetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Struct.encode(Struct.wrap(message.value), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata_FilterMetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata_FilterMetadataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Metadata_FilterMetadataEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isObject(object.value) ? object.value : undefined,
    };
  },

  toJSON(message: Metadata_FilterMetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Metadata_FilterMetadataEntry>, I>>(base?: I): Metadata_FilterMetadataEntry {
    return Metadata_FilterMetadataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Metadata_FilterMetadataEntry>, I>>(object: I): Metadata_FilterMetadataEntry {
    const message = createBaseMetadata_FilterMetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseMetadata_TypedFilterMetadataEntry(): Metadata_TypedFilterMetadataEntry {
  return { key: "", value: undefined };
}

export const Metadata_TypedFilterMetadataEntry = {
  encode(message: Metadata_TypedFilterMetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata_TypedFilterMetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata_TypedFilterMetadataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Metadata_TypedFilterMetadataEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Any.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Metadata_TypedFilterMetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Any.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Metadata_TypedFilterMetadataEntry>, I>>(
    base?: I,
  ): Metadata_TypedFilterMetadataEntry {
    return Metadata_TypedFilterMetadataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Metadata_TypedFilterMetadataEntry>, I>>(
    object: I,
  ): Metadata_TypedFilterMetadataEntry {
    const message = createBaseMetadata_TypedFilterMetadataEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Any.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseRuntimeUInt32(): RuntimeUInt32 {
  return { default_value: 0, runtime_key: "" };
}

export const RuntimeUInt32 = {
  encode(message: RuntimeUInt32, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.default_value !== 0) {
      writer.uint32(16).uint32(message.default_value);
    }
    if (message.runtime_key !== "") {
      writer.uint32(26).string(message.runtime_key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuntimeUInt32 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuntimeUInt32();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.default_value = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.runtime_key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RuntimeUInt32 {
    return {
      default_value: isSet(object.default_value) ? globalThis.Number(object.default_value) : 0,
      runtime_key: isSet(object.runtime_key) ? globalThis.String(object.runtime_key) : "",
    };
  },

  toJSON(message: RuntimeUInt32): unknown {
    const obj: any = {};
    if (message.default_value !== 0) {
      obj.default_value = Math.round(message.default_value);
    }
    if (message.runtime_key !== "") {
      obj.runtime_key = message.runtime_key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RuntimeUInt32>, I>>(base?: I): RuntimeUInt32 {
    return RuntimeUInt32.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RuntimeUInt32>, I>>(object: I): RuntimeUInt32 {
    const message = createBaseRuntimeUInt32();
    message.default_value = object.default_value ?? 0;
    message.runtime_key = object.runtime_key ?? "";
    return message;
  },
};

function createBaseRuntimePercent(): RuntimePercent {
  return { default_value: undefined, runtime_key: "" };
}

export const RuntimePercent = {
  encode(message: RuntimePercent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.default_value !== undefined) {
      Percent.encode(message.default_value, writer.uint32(10).fork()).ldelim();
    }
    if (message.runtime_key !== "") {
      writer.uint32(18).string(message.runtime_key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuntimePercent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuntimePercent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.default_value = Percent.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runtime_key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RuntimePercent {
    return {
      default_value: isSet(object.default_value) ? Percent.fromJSON(object.default_value) : undefined,
      runtime_key: isSet(object.runtime_key) ? globalThis.String(object.runtime_key) : "",
    };
  },

  toJSON(message: RuntimePercent): unknown {
    const obj: any = {};
    if (message.default_value !== undefined) {
      obj.default_value = Percent.toJSON(message.default_value);
    }
    if (message.runtime_key !== "") {
      obj.runtime_key = message.runtime_key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RuntimePercent>, I>>(base?: I): RuntimePercent {
    return RuntimePercent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RuntimePercent>, I>>(object: I): RuntimePercent {
    const message = createBaseRuntimePercent();
    message.default_value = (object.default_value !== undefined && object.default_value !== null)
      ? Percent.fromPartial(object.default_value)
      : undefined;
    message.runtime_key = object.runtime_key ?? "";
    return message;
  },
};

function createBaseRuntimeDouble(): RuntimeDouble {
  return { default_value: 0, runtime_key: "" };
}

export const RuntimeDouble = {
  encode(message: RuntimeDouble, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.default_value !== 0) {
      writer.uint32(9).double(message.default_value);
    }
    if (message.runtime_key !== "") {
      writer.uint32(18).string(message.runtime_key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuntimeDouble {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuntimeDouble();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.default_value = reader.double();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runtime_key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RuntimeDouble {
    return {
      default_value: isSet(object.default_value) ? globalThis.Number(object.default_value) : 0,
      runtime_key: isSet(object.runtime_key) ? globalThis.String(object.runtime_key) : "",
    };
  },

  toJSON(message: RuntimeDouble): unknown {
    const obj: any = {};
    if (message.default_value !== 0) {
      obj.default_value = message.default_value;
    }
    if (message.runtime_key !== "") {
      obj.runtime_key = message.runtime_key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RuntimeDouble>, I>>(base?: I): RuntimeDouble {
    return RuntimeDouble.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RuntimeDouble>, I>>(object: I): RuntimeDouble {
    const message = createBaseRuntimeDouble();
    message.default_value = object.default_value ?? 0;
    message.runtime_key = object.runtime_key ?? "";
    return message;
  },
};

function createBaseRuntimeFeatureFlag(): RuntimeFeatureFlag {
  return { default_value: undefined, runtime_key: "" };
}

export const RuntimeFeatureFlag = {
  encode(message: RuntimeFeatureFlag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.default_value !== undefined) {
      BoolValue.encode({ value: message.default_value! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.runtime_key !== "") {
      writer.uint32(18).string(message.runtime_key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuntimeFeatureFlag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuntimeFeatureFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.default_value = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runtime_key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RuntimeFeatureFlag {
    return {
      default_value: isSet(object.default_value) ? Boolean(object.default_value) : undefined,
      runtime_key: isSet(object.runtime_key) ? globalThis.String(object.runtime_key) : "",
    };
  },

  toJSON(message: RuntimeFeatureFlag): unknown {
    const obj: any = {};
    if (message.default_value !== undefined) {
      obj.default_value = message.default_value;
    }
    if (message.runtime_key !== "") {
      obj.runtime_key = message.runtime_key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RuntimeFeatureFlag>, I>>(base?: I): RuntimeFeatureFlag {
    return RuntimeFeatureFlag.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RuntimeFeatureFlag>, I>>(object: I): RuntimeFeatureFlag {
    const message = createBaseRuntimeFeatureFlag();
    message.default_value = object.default_value ?? undefined;
    message.runtime_key = object.runtime_key ?? "";
    return message;
  },
};

function createBaseQueryParameter(): QueryParameter {
  return { key: "", value: "" };
}

export const QueryParameter = {
  encode(message: QueryParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParameter {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: QueryParameter): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParameter>, I>>(base?: I): QueryParameter {
    return QueryParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParameter>, I>>(object: I): QueryParameter {
    const message = createBaseQueryParameter();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseHeaderValue(): HeaderValue {
  return { key: "", value: "", raw_value: new Uint8Array(0) };
}

export const HeaderValue = {
  encode(message: HeaderValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.raw_value.length !== 0) {
      writer.uint32(26).bytes(message.raw_value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.raw_value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HeaderValue {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      raw_value: isSet(object.raw_value) ? bytesFromBase64(object.raw_value) : new Uint8Array(0),
    };
  },

  toJSON(message: HeaderValue): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.raw_value.length !== 0) {
      obj.raw_value = base64FromBytes(message.raw_value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HeaderValue>, I>>(base?: I): HeaderValue {
    return HeaderValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HeaderValue>, I>>(object: I): HeaderValue {
    const message = createBaseHeaderValue();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.raw_value = object.raw_value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseHeaderValueOption(): HeaderValueOption {
  return { header: undefined, append: undefined, append_action: 0, keep_empty_value: false };
}

export const HeaderValueOption = {
  encode(message: HeaderValueOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      HeaderValue.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.append !== undefined) {
      BoolValue.encode({ value: message.append! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.append_action !== 0) {
      writer.uint32(24).int32(message.append_action);
    }
    if (message.keep_empty_value !== false) {
      writer.uint32(32).bool(message.keep_empty_value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderValueOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderValueOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = HeaderValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.append = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.append_action = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.keep_empty_value = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HeaderValueOption {
    return {
      header: isSet(object.header) ? HeaderValue.fromJSON(object.header) : undefined,
      append: isSet(object.append) ? Boolean(object.append) : undefined,
      append_action: isSet(object.append_action)
        ? headerValueOption_HeaderAppendActionFromJSON(object.append_action)
        : 0,
      keep_empty_value: isSet(object.keep_empty_value) ? globalThis.Boolean(object.keep_empty_value) : false,
    };
  },

  toJSON(message: HeaderValueOption): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = HeaderValue.toJSON(message.header);
    }
    if (message.append !== undefined) {
      obj.append = message.append;
    }
    if (message.append_action !== 0) {
      obj.append_action = headerValueOption_HeaderAppendActionToJSON(message.append_action);
    }
    if (message.keep_empty_value !== false) {
      obj.keep_empty_value = message.keep_empty_value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HeaderValueOption>, I>>(base?: I): HeaderValueOption {
    return HeaderValueOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HeaderValueOption>, I>>(object: I): HeaderValueOption {
    const message = createBaseHeaderValueOption();
    message.header = (object.header !== undefined && object.header !== null)
      ? HeaderValue.fromPartial(object.header)
      : undefined;
    message.append = object.append ?? undefined;
    message.append_action = object.append_action ?? 0;
    message.keep_empty_value = object.keep_empty_value ?? false;
    return message;
  },
};

function createBaseHeaderMap(): HeaderMap {
  return { headers: [] };
}

export const HeaderMap = {
  encode(message: HeaderMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.headers) {
      HeaderValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.headers.push(HeaderValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HeaderMap {
    return {
      headers: globalThis.Array.isArray(object?.headers) ? object.headers.map((e: any) => HeaderValue.fromJSON(e)) : [],
    };
  },

  toJSON(message: HeaderMap): unknown {
    const obj: any = {};
    if (message.headers?.length) {
      obj.headers = message.headers.map((e) => HeaderValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HeaderMap>, I>>(base?: I): HeaderMap {
    return HeaderMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HeaderMap>, I>>(object: I): HeaderMap {
    const message = createBaseHeaderMap();
    message.headers = object.headers?.map((e) => HeaderValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWatchedDirectory(): WatchedDirectory {
  return { path: "" };
}

export const WatchedDirectory = {
  encode(message: WatchedDirectory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WatchedDirectory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchedDirectory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WatchedDirectory {
    return { path: isSet(object.path) ? globalThis.String(object.path) : "" };
  },

  toJSON(message: WatchedDirectory): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WatchedDirectory>, I>>(base?: I): WatchedDirectory {
    return WatchedDirectory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WatchedDirectory>, I>>(object: I): WatchedDirectory {
    const message = createBaseWatchedDirectory();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseDataSource(): DataSource {
  return { filename: undefined, inline_bytes: undefined, inline_string: undefined, environment_variable: undefined };
}

export const DataSource = {
  encode(message: DataSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== undefined) {
      writer.uint32(10).string(message.filename);
    }
    if (message.inline_bytes !== undefined) {
      writer.uint32(18).bytes(message.inline_bytes);
    }
    if (message.inline_string !== undefined) {
      writer.uint32(26).string(message.inline_string);
    }
    if (message.environment_variable !== undefined) {
      writer.uint32(34).string(message.environment_variable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inline_bytes = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.inline_string = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.environment_variable = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSource {
    return {
      filename: isSet(object.filename) ? globalThis.String(object.filename) : undefined,
      inline_bytes: isSet(object.inline_bytes) ? bytesFromBase64(object.inline_bytes) : undefined,
      inline_string: isSet(object.inline_string) ? globalThis.String(object.inline_string) : undefined,
      environment_variable: isSet(object.environment_variable)
        ? globalThis.String(object.environment_variable)
        : undefined,
    };
  },

  toJSON(message: DataSource): unknown {
    const obj: any = {};
    if (message.filename !== undefined) {
      obj.filename = message.filename;
    }
    if (message.inline_bytes !== undefined) {
      obj.inline_bytes = base64FromBytes(message.inline_bytes);
    }
    if (message.inline_string !== undefined) {
      obj.inline_string = message.inline_string;
    }
    if (message.environment_variable !== undefined) {
      obj.environment_variable = message.environment_variable;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataSource>, I>>(base?: I): DataSource {
    return DataSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataSource>, I>>(object: I): DataSource {
    const message = createBaseDataSource();
    message.filename = object.filename ?? undefined;
    message.inline_bytes = object.inline_bytes ?? undefined;
    message.inline_string = object.inline_string ?? undefined;
    message.environment_variable = object.environment_variable ?? undefined;
    return message;
  },
};

function createBaseRetryPolicy(): RetryPolicy {
  return { retry_back_off: undefined, num_retries: undefined };
}

export const RetryPolicy = {
  encode(message: RetryPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retry_back_off !== undefined) {
      BackoffStrategy.encode(message.retry_back_off, writer.uint32(10).fork()).ldelim();
    }
    if (message.num_retries !== undefined) {
      UInt32Value.encode({ value: message.num_retries! }, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetryPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetryPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.retry_back_off = BackoffStrategy.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.num_retries = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RetryPolicy {
    return {
      retry_back_off: isSet(object.retry_back_off) ? BackoffStrategy.fromJSON(object.retry_back_off) : undefined,
      num_retries: isSet(object.num_retries) ? Number(object.num_retries) : undefined,
    };
  },

  toJSON(message: RetryPolicy): unknown {
    const obj: any = {};
    if (message.retry_back_off !== undefined) {
      obj.retry_back_off = BackoffStrategy.toJSON(message.retry_back_off);
    }
    if (message.num_retries !== undefined) {
      obj.num_retries = message.num_retries;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RetryPolicy>, I>>(base?: I): RetryPolicy {
    return RetryPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RetryPolicy>, I>>(object: I): RetryPolicy {
    const message = createBaseRetryPolicy();
    message.retry_back_off = (object.retry_back_off !== undefined && object.retry_back_off !== null)
      ? BackoffStrategy.fromPartial(object.retry_back_off)
      : undefined;
    message.num_retries = object.num_retries ?? undefined;
    return message;
  },
};

function createBaseRemoteDataSource(): RemoteDataSource {
  return { http_uri: undefined, sha256: "", retry_policy: undefined };
}

export const RemoteDataSource = {
  encode(message: RemoteDataSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.http_uri !== undefined) {
      HttpUri.encode(message.http_uri, writer.uint32(10).fork()).ldelim();
    }
    if (message.sha256 !== "") {
      writer.uint32(18).string(message.sha256);
    }
    if (message.retry_policy !== undefined) {
      RetryPolicy.encode(message.retry_policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteDataSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoteDataSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.http_uri = HttpUri.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sha256 = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.retry_policy = RetryPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoteDataSource {
    return {
      http_uri: isSet(object.http_uri) ? HttpUri.fromJSON(object.http_uri) : undefined,
      sha256: isSet(object.sha256) ? globalThis.String(object.sha256) : "",
      retry_policy: isSet(object.retry_policy) ? RetryPolicy.fromJSON(object.retry_policy) : undefined,
    };
  },

  toJSON(message: RemoteDataSource): unknown {
    const obj: any = {};
    if (message.http_uri !== undefined) {
      obj.http_uri = HttpUri.toJSON(message.http_uri);
    }
    if (message.sha256 !== "") {
      obj.sha256 = message.sha256;
    }
    if (message.retry_policy !== undefined) {
      obj.retry_policy = RetryPolicy.toJSON(message.retry_policy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoteDataSource>, I>>(base?: I): RemoteDataSource {
    return RemoteDataSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoteDataSource>, I>>(object: I): RemoteDataSource {
    const message = createBaseRemoteDataSource();
    message.http_uri = (object.http_uri !== undefined && object.http_uri !== null)
      ? HttpUri.fromPartial(object.http_uri)
      : undefined;
    message.sha256 = object.sha256 ?? "";
    message.retry_policy = (object.retry_policy !== undefined && object.retry_policy !== null)
      ? RetryPolicy.fromPartial(object.retry_policy)
      : undefined;
    return message;
  },
};

function createBaseAsyncDataSource(): AsyncDataSource {
  return { local: undefined, remote: undefined };
}

export const AsyncDataSource = {
  encode(message: AsyncDataSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.local !== undefined) {
      DataSource.encode(message.local, writer.uint32(10).fork()).ldelim();
    }
    if (message.remote !== undefined) {
      RemoteDataSource.encode(message.remote, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsyncDataSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsyncDataSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.local = DataSource.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remote = RemoteDataSource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsyncDataSource {
    return {
      local: isSet(object.local) ? DataSource.fromJSON(object.local) : undefined,
      remote: isSet(object.remote) ? RemoteDataSource.fromJSON(object.remote) : undefined,
    };
  },

  toJSON(message: AsyncDataSource): unknown {
    const obj: any = {};
    if (message.local !== undefined) {
      obj.local = DataSource.toJSON(message.local);
    }
    if (message.remote !== undefined) {
      obj.remote = RemoteDataSource.toJSON(message.remote);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsyncDataSource>, I>>(base?: I): AsyncDataSource {
    return AsyncDataSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsyncDataSource>, I>>(object: I): AsyncDataSource {
    const message = createBaseAsyncDataSource();
    message.local = (object.local !== undefined && object.local !== null)
      ? DataSource.fromPartial(object.local)
      : undefined;
    message.remote = (object.remote !== undefined && object.remote !== null)
      ? RemoteDataSource.fromPartial(object.remote)
      : undefined;
    return message;
  },
};

function createBaseTransportSocket(): TransportSocket {
  return { name: "", typed_config: undefined };
}

export const TransportSocket = {
  encode(message: TransportSocket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.typed_config !== undefined) {
      Any.encode(message.typed_config, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransportSocket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransportSocket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.typed_config = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransportSocket {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      typed_config: isSet(object.typed_config) ? Any.fromJSON(object.typed_config) : undefined,
    };
  },

  toJSON(message: TransportSocket): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.typed_config !== undefined) {
      obj.typed_config = Any.toJSON(message.typed_config);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransportSocket>, I>>(base?: I): TransportSocket {
    return TransportSocket.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransportSocket>, I>>(object: I): TransportSocket {
    const message = createBaseTransportSocket();
    message.name = object.name ?? "";
    message.typed_config = (object.typed_config !== undefined && object.typed_config !== null)
      ? Any.fromPartial(object.typed_config)
      : undefined;
    return message;
  },
};

function createBaseRuntimeFractionalPercent(): RuntimeFractionalPercent {
  return { default_value: undefined, runtime_key: "" };
}

export const RuntimeFractionalPercent = {
  encode(message: RuntimeFractionalPercent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.default_value !== undefined) {
      FractionalPercent.encode(message.default_value, writer.uint32(10).fork()).ldelim();
    }
    if (message.runtime_key !== "") {
      writer.uint32(18).string(message.runtime_key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuntimeFractionalPercent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuntimeFractionalPercent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.default_value = FractionalPercent.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runtime_key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RuntimeFractionalPercent {
    return {
      default_value: isSet(object.default_value) ? FractionalPercent.fromJSON(object.default_value) : undefined,
      runtime_key: isSet(object.runtime_key) ? globalThis.String(object.runtime_key) : "",
    };
  },

  toJSON(message: RuntimeFractionalPercent): unknown {
    const obj: any = {};
    if (message.default_value !== undefined) {
      obj.default_value = FractionalPercent.toJSON(message.default_value);
    }
    if (message.runtime_key !== "") {
      obj.runtime_key = message.runtime_key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RuntimeFractionalPercent>, I>>(base?: I): RuntimeFractionalPercent {
    return RuntimeFractionalPercent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RuntimeFractionalPercent>, I>>(object: I): RuntimeFractionalPercent {
    const message = createBaseRuntimeFractionalPercent();
    message.default_value = (object.default_value !== undefined && object.default_value !== null)
      ? FractionalPercent.fromPartial(object.default_value)
      : undefined;
    message.runtime_key = object.runtime_key ?? "";
    return message;
  },
};

function createBaseControlPlane(): ControlPlane {
  return { identifier: "" };
}

export const ControlPlane = {
  encode(message: ControlPlane, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlPlane {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlPlane();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlPlane {
    return { identifier: isSet(object.identifier) ? globalThis.String(object.identifier) : "" };
  },

  toJSON(message: ControlPlane): unknown {
    const obj: any = {};
    if (message.identifier !== "") {
      obj.identifier = message.identifier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControlPlane>, I>>(base?: I): ControlPlane {
    return ControlPlane.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ControlPlane>, I>>(object: I): ControlPlane {
    const message = createBaseControlPlane();
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
