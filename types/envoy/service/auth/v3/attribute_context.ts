/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Address } from "../../../config/core/v3/address";
import { Metadata } from "../../../config/core/v3/base";
import Long = require("long");

export const protobufPackage = "envoy.service.auth.v3";

/**
 * An attribute is a piece of metadata that describes an activity on a network.
 * For example, the size of an HTTP request, or the status code of an HTTP response.
 *
 * Each attribute has a type and a name, which is logically defined as a proto message field
 * of the ``AttributeContext``. The ``AttributeContext`` is a collection of individual attributes
 * supported by Envoy authorization system.
 * [#comment: The following items are left out of this proto
 * Request.Auth field for jwt tokens
 * Request.Api for api management
 * Origin peer that originated the request
 * Caching Protocol
 * request_context return values to inject back into the filter chain
 * peer.claims -- from X.509 extensions
 * Configuration
 * - field mask to send
 * - which return values from request_context are copied back
 * - which return values are copied into request_headers]
 * [#next-free-field: 14]
 */
export interface AttributeContext {
  /**
   * The source of a network activity, such as starting a TCP connection.
   * In a multi hop network activity, the source represents the sender of the
   * last hop.
   */
  source:
    | AttributeContext_Peer
    | undefined;
  /**
   * The destination of a network activity, such as accepting a TCP connection.
   * In a multi hop network activity, the destination represents the receiver of
   * the last hop.
   */
  destination:
    | AttributeContext_Peer
    | undefined;
  /** Represents a network request, such as an HTTP request. */
  request:
    | AttributeContext_Request
    | undefined;
  /**
   * This is analogous to http_request.headers, however these contents will not be sent to the
   * upstream server. Context_extensions provide an extension mechanism for sending additional
   * information to the auth server without modifying the proto definition. It maps to the
   * internal opaque context in the filter chain.
   */
  context_extensions: { [key: string]: string };
  /** Dynamic metadata associated with the request. */
  metadata_context:
    | Metadata
    | undefined;
  /** Metadata associated with the selected route. */
  route_metadata_context:
    | Metadata
    | undefined;
  /**
   * TLS session details of the underlying connection.
   * This is not populated by default and will be populated if ext_authz filter's
   * :ref:`include_tls_session <config_http_filters_ext_authz>` is set to true.
   */
  tls_session: AttributeContext_TLSSession | undefined;
}

/**
 * This message defines attributes for a node that handles a network request.
 * The node can be either a service or an application that sends, forwards,
 * or receives the request. Service peers should fill in the ``service``,
 * ``principal``, and ``labels`` as appropriate.
 * [#next-free-field: 6]
 */
export interface AttributeContext_Peer {
  /**
   * The address of the peer, this is typically the IP address.
   * It can also be UDS path, or others.
   */
  address:
    | Address
    | undefined;
  /**
   * The canonical service name of the peer.
   * It should be set to :ref:`the HTTP x-envoy-downstream-service-cluster
   * <config_http_conn_man_headers_downstream-service-cluster>`
   * If a more trusted source of the service name is available through mTLS/secure naming, it
   * should be used.
   */
  service: string;
  /**
   * The labels associated with the peer.
   * These could be pod labels for Kubernetes or tags for VMs.
   * The source of the labels could be an X.509 certificate or other configuration.
   */
  labels: { [key: string]: string };
  /**
   * The authenticated identity of this peer.
   * For example, the identity associated with the workload such as a service account.
   * If an X.509 certificate is used to assert the identity this field should be sourced from
   * ``URI Subject Alternative Names``, ``DNS Subject Alternate Names`` or ``Subject`` in that order.
   * The primary identity should be the principal. The principal format is issuer specific.
   *
   * Examples:
   *
   * - SPIFFE format is ``spiffe://trust-domain/path``.
   * - Google account format is ``https://accounts.google.com/{userid}``.
   */
  principal: string;
  /**
   * The X.509 certificate used to authenticate the identify of this peer.
   * When present, the certificate contents are encoded in URL and PEM format.
   */
  certificate: string;
}

export interface AttributeContext_Peer_LabelsEntry {
  key: string;
  value: string;
}

/** Represents a network request, such as an HTTP request. */
export interface AttributeContext_Request {
  /** The timestamp when the proxy receives the first byte of the request. */
  time:
    | Date
    | undefined;
  /** Represents an HTTP request or an HTTP-like request. */
  http: AttributeContext_HttpRequest | undefined;
}

/**
 * This message defines attributes for an HTTP request.
 * HTTP/1.x, HTTP/2, gRPC are all considered as HTTP requests.
 * [#next-free-field: 13]
 */
export interface AttributeContext_HttpRequest {
  /**
   * The unique ID for a request, which can be propagated to downstream
   * systems. The ID should have low probability of collision
   * within a single day for a specific service.
   * For HTTP requests, it should be X-Request-ID or equivalent.
   */
  id: string;
  /** The HTTP request method, such as ``GET``, ``POST``. */
  method: string;
  /**
   * The HTTP request headers. If multiple headers share the same key, they
   * must be merged according to the HTTP spec. All header keys must be
   * lower-cased, because HTTP header keys are case-insensitive.
   */
  headers: { [key: string]: string };
  /**
   * The request target, as it appears in the first line of the HTTP request. This includes
   * the URL path and query-string. No decoding is performed.
   */
  path: string;
  /** The HTTP request ``Host`` or ``:authority`` header value. */
  host: string;
  /** The HTTP URL scheme, such as ``http`` and ``https``. */
  scheme: string;
  /**
   * This field is always empty, and exists for compatibility reasons. The HTTP URL query is
   * included in ``path`` field.
   */
  query: string;
  /**
   * This field is always empty, and exists for compatibility reasons. The URL fragment is
   * not submitted as part of HTTP requests; it is unknowable.
   */
  fragment: string;
  /** The HTTP request size in bytes. If unknown, it must be -1. */
  size: number;
  /**
   * The network protocol used with the request, such as "HTTP/1.0", "HTTP/1.1", or "HTTP/2".
   *
   * See :repo:`headers.h:ProtocolStrings <source/common/http/headers.h>` for a list of all
   * possible values.
   */
  protocol: string;
  /** The HTTP request body. */
  body: string;
  /**
   * The HTTP request body in bytes. This is used instead of
   * :ref:`body <envoy_v3_api_field_service.auth.v3.AttributeContext.HttpRequest.body>` when
   * :ref:`pack_as_bytes <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.BufferSettings.pack_as_bytes>`
   * is set to true.
   */
  raw_body: Uint8Array;
}

export interface AttributeContext_HttpRequest_HeadersEntry {
  key: string;
  value: string;
}

/** This message defines attributes for the underlying TLS session. */
export interface AttributeContext_TLSSession {
  /** SNI used for TLS session. */
  sni: string;
}

export interface AttributeContext_ContextExtensionsEntry {
  key: string;
  value: string;
}

function createBaseAttributeContext(): AttributeContext {
  return {
    source: undefined,
    destination: undefined,
    request: undefined,
    context_extensions: {},
    metadata_context: undefined,
    route_metadata_context: undefined,
    tls_session: undefined,
  };
}

export const AttributeContext = {
  encode(message: AttributeContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== undefined) {
      AttributeContext_Peer.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    if (message.destination !== undefined) {
      AttributeContext_Peer.encode(message.destination, writer.uint32(18).fork()).ldelim();
    }
    if (message.request !== undefined) {
      AttributeContext_Request.encode(message.request, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.context_extensions).forEach(([key, value]) => {
      AttributeContext_ContextExtensionsEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).ldelim();
    });
    if (message.metadata_context !== undefined) {
      Metadata.encode(message.metadata_context, writer.uint32(90).fork()).ldelim();
    }
    if (message.route_metadata_context !== undefined) {
      Metadata.encode(message.route_metadata_context, writer.uint32(106).fork()).ldelim();
    }
    if (message.tls_session !== undefined) {
      AttributeContext_TLSSession.encode(message.tls_session, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source = AttributeContext_Peer.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.destination = AttributeContext_Peer.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.request = AttributeContext_Request.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          const entry10 = AttributeContext_ContextExtensionsEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.context_extensions[entry10.key] = entry10.value;
          }
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.metadata_context = Metadata.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.route_metadata_context = Metadata.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.tls_session = AttributeContext_TLSSession.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeContext {
    return {
      source: isSet(object.source) ? AttributeContext_Peer.fromJSON(object.source) : undefined,
      destination: isSet(object.destination) ? AttributeContext_Peer.fromJSON(object.destination) : undefined,
      request: isSet(object.request) ? AttributeContext_Request.fromJSON(object.request) : undefined,
      context_extensions: isObject(object.context_extensions)
        ? Object.entries(object.context_extensions).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      metadata_context: isSet(object.metadata_context) ? Metadata.fromJSON(object.metadata_context) : undefined,
      route_metadata_context: isSet(object.route_metadata_context)
        ? Metadata.fromJSON(object.route_metadata_context)
        : undefined,
      tls_session: isSet(object.tls_session) ? AttributeContext_TLSSession.fromJSON(object.tls_session) : undefined,
    };
  },

  toJSON(message: AttributeContext): unknown {
    const obj: any = {};
    if (message.source !== undefined) {
      obj.source = AttributeContext_Peer.toJSON(message.source);
    }
    if (message.destination !== undefined) {
      obj.destination = AttributeContext_Peer.toJSON(message.destination);
    }
    if (message.request !== undefined) {
      obj.request = AttributeContext_Request.toJSON(message.request);
    }
    if (message.context_extensions) {
      const entries = Object.entries(message.context_extensions);
      if (entries.length > 0) {
        obj.context_extensions = {};
        entries.forEach(([k, v]) => {
          obj.context_extensions[k] = v;
        });
      }
    }
    if (message.metadata_context !== undefined) {
      obj.metadata_context = Metadata.toJSON(message.metadata_context);
    }
    if (message.route_metadata_context !== undefined) {
      obj.route_metadata_context = Metadata.toJSON(message.route_metadata_context);
    }
    if (message.tls_session !== undefined) {
      obj.tls_session = AttributeContext_TLSSession.toJSON(message.tls_session);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeContext>, I>>(base?: I): AttributeContext {
    return AttributeContext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttributeContext>, I>>(object: I): AttributeContext {
    const message = createBaseAttributeContext();
    message.source = (object.source !== undefined && object.source !== null)
      ? AttributeContext_Peer.fromPartial(object.source)
      : undefined;
    message.destination = (object.destination !== undefined && object.destination !== null)
      ? AttributeContext_Peer.fromPartial(object.destination)
      : undefined;
    message.request = (object.request !== undefined && object.request !== null)
      ? AttributeContext_Request.fromPartial(object.request)
      : undefined;
    message.context_extensions = Object.entries(object.context_extensions ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.metadata_context = (object.metadata_context !== undefined && object.metadata_context !== null)
      ? Metadata.fromPartial(object.metadata_context)
      : undefined;
    message.route_metadata_context =
      (object.route_metadata_context !== undefined && object.route_metadata_context !== null)
        ? Metadata.fromPartial(object.route_metadata_context)
        : undefined;
    message.tls_session = (object.tls_session !== undefined && object.tls_session !== null)
      ? AttributeContext_TLSSession.fromPartial(object.tls_session)
      : undefined;
    return message;
  },
};

function createBaseAttributeContext_Peer(): AttributeContext_Peer {
  return { address: undefined, service: "", labels: {}, principal: "", certificate: "" };
}

export const AttributeContext_Peer = {
  encode(message: AttributeContext_Peer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.service !== "") {
      writer.uint32(18).string(message.service);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      AttributeContext_Peer_LabelsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.principal !== "") {
      writer.uint32(34).string(message.principal);
    }
    if (message.certificate !== "") {
      writer.uint32(42).string(message.certificate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Peer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Peer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.service = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = AttributeContext_Peer_LabelsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.principal = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.certificate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeContext_Peer {
    return {
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      service: isSet(object.service) ? globalThis.String(object.service) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      principal: isSet(object.principal) ? globalThis.String(object.principal) : "",
      certificate: isSet(object.certificate) ? globalThis.String(object.certificate) : "",
    };
  },

  toJSON(message: AttributeContext_Peer): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = Address.toJSON(message.address);
    }
    if (message.service !== "") {
      obj.service = message.service;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.principal !== "") {
      obj.principal = message.principal;
    }
    if (message.certificate !== "") {
      obj.certificate = message.certificate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeContext_Peer>, I>>(base?: I): AttributeContext_Peer {
    return AttributeContext_Peer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttributeContext_Peer>, I>>(object: I): AttributeContext_Peer {
    const message = createBaseAttributeContext_Peer();
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.service = object.service ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.principal = object.principal ?? "";
    message.certificate = object.certificate ?? "";
    return message;
  },
};

function createBaseAttributeContext_Peer_LabelsEntry(): AttributeContext_Peer_LabelsEntry {
  return { key: "", value: "" };
}

export const AttributeContext_Peer_LabelsEntry = {
  encode(message: AttributeContext_Peer_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Peer_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Peer_LabelsEntry();
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

  fromJSON(object: any): AttributeContext_Peer_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: AttributeContext_Peer_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeContext_Peer_LabelsEntry>, I>>(
    base?: I,
  ): AttributeContext_Peer_LabelsEntry {
    return AttributeContext_Peer_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttributeContext_Peer_LabelsEntry>, I>>(
    object: I,
  ): AttributeContext_Peer_LabelsEntry {
    const message = createBaseAttributeContext_Peer_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAttributeContext_Request(): AttributeContext_Request {
  return { time: undefined, http: undefined };
}

export const AttributeContext_Request = {
  encode(message: AttributeContext_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.http !== undefined) {
      AttributeContext_HttpRequest.encode(message.http, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.http = AttributeContext_HttpRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeContext_Request {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      http: isSet(object.http) ? AttributeContext_HttpRequest.fromJSON(object.http) : undefined,
    };
  },

  toJSON(message: AttributeContext_Request): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.http !== undefined) {
      obj.http = AttributeContext_HttpRequest.toJSON(message.http);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeContext_Request>, I>>(base?: I): AttributeContext_Request {
    return AttributeContext_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttributeContext_Request>, I>>(object: I): AttributeContext_Request {
    const message = createBaseAttributeContext_Request();
    message.time = object.time ?? undefined;
    message.http = (object.http !== undefined && object.http !== null)
      ? AttributeContext_HttpRequest.fromPartial(object.http)
      : undefined;
    return message;
  },
};

function createBaseAttributeContext_HttpRequest(): AttributeContext_HttpRequest {
  return {
    id: "",
    method: "",
    headers: {},
    path: "",
    host: "",
    scheme: "",
    query: "",
    fragment: "",
    size: 0,
    protocol: "",
    body: "",
    raw_body: new Uint8Array(0),
  };
}

export const AttributeContext_HttpRequest = {
  encode(message: AttributeContext_HttpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.method !== "") {
      writer.uint32(18).string(message.method);
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      AttributeContext_HttpRequest_HeadersEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }
    if (message.host !== "") {
      writer.uint32(42).string(message.host);
    }
    if (message.scheme !== "") {
      writer.uint32(50).string(message.scheme);
    }
    if (message.query !== "") {
      writer.uint32(58).string(message.query);
    }
    if (message.fragment !== "") {
      writer.uint32(66).string(message.fragment);
    }
    if (message.size !== 0) {
      writer.uint32(72).int64(message.size);
    }
    if (message.protocol !== "") {
      writer.uint32(82).string(message.protocol);
    }
    if (message.body !== "") {
      writer.uint32(90).string(message.body);
    }
    if (message.raw_body.length !== 0) {
      writer.uint32(98).bytes(message.raw_body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_HttpRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_HttpRequest();
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

          message.method = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = AttributeContext_HttpRequest_HeadersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.headers[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.path = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.host = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.scheme = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.query = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.fragment = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.body = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.raw_body = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeContext_HttpRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : "",
      headers: isObject(object.headers)
        ? Object.entries(object.headers).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      scheme: isSet(object.scheme) ? globalThis.String(object.scheme) : "",
      query: isSet(object.query) ? globalThis.String(object.query) : "",
      fragment: isSet(object.fragment) ? globalThis.String(object.fragment) : "",
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      protocol: isSet(object.protocol) ? globalThis.String(object.protocol) : "",
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      raw_body: isSet(object.raw_body) ? bytesFromBase64(object.raw_body) : new Uint8Array(0),
    };
  },

  toJSON(message: AttributeContext_HttpRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    if (message.headers) {
      const entries = Object.entries(message.headers);
      if (entries.length > 0) {
        obj.headers = {};
        entries.forEach(([k, v]) => {
          obj.headers[k] = v;
        });
      }
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.scheme !== "") {
      obj.scheme = message.scheme;
    }
    if (message.query !== "") {
      obj.query = message.query;
    }
    if (message.fragment !== "") {
      obj.fragment = message.fragment;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.protocol !== "") {
      obj.protocol = message.protocol;
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.raw_body.length !== 0) {
      obj.raw_body = base64FromBytes(message.raw_body);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeContext_HttpRequest>, I>>(base?: I): AttributeContext_HttpRequest {
    return AttributeContext_HttpRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttributeContext_HttpRequest>, I>>(object: I): AttributeContext_HttpRequest {
    const message = createBaseAttributeContext_HttpRequest();
    message.id = object.id ?? "";
    message.method = object.method ?? "";
    message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.path = object.path ?? "";
    message.host = object.host ?? "";
    message.scheme = object.scheme ?? "";
    message.query = object.query ?? "";
    message.fragment = object.fragment ?? "";
    message.size = object.size ?? 0;
    message.protocol = object.protocol ?? "";
    message.body = object.body ?? "";
    message.raw_body = object.raw_body ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAttributeContext_HttpRequest_HeadersEntry(): AttributeContext_HttpRequest_HeadersEntry {
  return { key: "", value: "" };
}

export const AttributeContext_HttpRequest_HeadersEntry = {
  encode(message: AttributeContext_HttpRequest_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_HttpRequest_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_HttpRequest_HeadersEntry();
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

  fromJSON(object: any): AttributeContext_HttpRequest_HeadersEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: AttributeContext_HttpRequest_HeadersEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeContext_HttpRequest_HeadersEntry>, I>>(
    base?: I,
  ): AttributeContext_HttpRequest_HeadersEntry {
    return AttributeContext_HttpRequest_HeadersEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttributeContext_HttpRequest_HeadersEntry>, I>>(
    object: I,
  ): AttributeContext_HttpRequest_HeadersEntry {
    const message = createBaseAttributeContext_HttpRequest_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAttributeContext_TLSSession(): AttributeContext_TLSSession {
  return { sni: "" };
}

export const AttributeContext_TLSSession = {
  encode(message: AttributeContext_TLSSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sni !== "") {
      writer.uint32(10).string(message.sni);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_TLSSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_TLSSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sni = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeContext_TLSSession {
    return { sni: isSet(object.sni) ? globalThis.String(object.sni) : "" };
  },

  toJSON(message: AttributeContext_TLSSession): unknown {
    const obj: any = {};
    if (message.sni !== "") {
      obj.sni = message.sni;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeContext_TLSSession>, I>>(base?: I): AttributeContext_TLSSession {
    return AttributeContext_TLSSession.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttributeContext_TLSSession>, I>>(object: I): AttributeContext_TLSSession {
    const message = createBaseAttributeContext_TLSSession();
    message.sni = object.sni ?? "";
    return message;
  },
};

function createBaseAttributeContext_ContextExtensionsEntry(): AttributeContext_ContextExtensionsEntry {
  return { key: "", value: "" };
}

export const AttributeContext_ContextExtensionsEntry = {
  encode(message: AttributeContext_ContextExtensionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_ContextExtensionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_ContextExtensionsEntry();
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

  fromJSON(object: any): AttributeContext_ContextExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: AttributeContext_ContextExtensionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeContext_ContextExtensionsEntry>, I>>(
    base?: I,
  ): AttributeContext_ContextExtensionsEntry {
    return AttributeContext_ContextExtensionsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttributeContext_ContextExtensionsEntry>, I>>(
    object: I,
  ): AttributeContext_ContextExtensionsEntry {
    const message = createBaseAttributeContext_ContextExtensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
