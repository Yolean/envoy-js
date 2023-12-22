/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Struct } from "../../../../google/protobuf/struct";
import { Status } from "../../../../google/rpc/status";
import { HeaderValueOption, QueryParameter } from "../../../config/core/v3/base";
import { HttpStatus } from "../../../type/v3/http_status";
import { AttributeContext } from "./attribute_context";

export const protobufPackage = "envoy.service.auth.v3";

export interface CheckRequest {
  /** The request attributes. */
  attributes: AttributeContext | undefined;
}

/** HTTP attributes for a denied response. */
export interface DeniedHttpResponse {
  /**
   * This field allows the authorization service to send an HTTP response status code to the
   * downstream client. If not set, Envoy sends ``403 Forbidden`` HTTP status code by default.
   */
  status:
    | HttpStatus
    | undefined;
  /**
   * This field allows the authorization service to send HTTP response headers
   * to the downstream client. Note that the :ref:`append field in HeaderValueOption <envoy_v3_api_field_config.core.v3.HeaderValueOption.append>` defaults to
   * false when used in this message.
   */
  headers: HeaderValueOption[];
  /**
   * This field allows the authorization service to send a response body data
   * to the downstream client.
   */
  body: string;
}

/**
 * HTTP attributes for an OK response.
 * [#next-free-field: 9]
 */
export interface OkHttpResponse {
  /**
   * HTTP entity headers in addition to the original request headers. This allows the authorization
   * service to append, to add or to override headers from the original request before
   * dispatching it to the upstream. Note that the :ref:`append field in HeaderValueOption <envoy_v3_api_field_config.core.v3.HeaderValueOption.append>` defaults to
   * false when used in this message. By setting the ``append`` field to ``true``,
   * the filter will append the correspondent header value to the matched request header.
   * By leaving ``append`` as false, the filter will either add a new header, or override an existing
   * one if there is a match.
   */
  headers: HeaderValueOption[];
  /**
   * HTTP entity headers to remove from the original request before dispatching
   * it to the upstream. This allows the authorization service to act on auth
   * related headers (like ``Authorization``), process them, and consume them.
   * Under this model, the upstream will either receive the request (if it's
   * authorized) or not receive it (if it's not), but will not see headers
   * containing authorization credentials.
   *
   * Pseudo headers (such as ``:authority``, ``:method``, ``:path`` etc), as well as
   * the header ``Host``, may not be removed as that would make the request
   * malformed. If mentioned in ``headers_to_remove`` these special headers will
   * be ignored.
   *
   * When using the HTTP service this must instead be set by the HTTP
   * authorization service as a comma separated list like so:
   * ``x-envoy-auth-headers-to-remove: one-auth-header, another-auth-header``.
   */
  headers_to_remove: string[];
  /**
   * This field has been deprecated in favor of :ref:`CheckResponse.dynamic_metadata
   * <envoy_v3_api_field_service.auth.v3.CheckResponse.dynamic_metadata>`. Until it is removed,
   * setting this field overrides :ref:`CheckResponse.dynamic_metadata
   * <envoy_v3_api_field_service.auth.v3.CheckResponse.dynamic_metadata>`.
   *
   * @deprecated
   */
  dynamic_metadata:
    | { [key: string]: any }
    | undefined;
  /**
   * This field allows the authorization service to send HTTP response headers
   * to the downstream client on success. Note that the :ref:`append field in HeaderValueOption <envoy_v3_api_field_config.core.v3.HeaderValueOption.append>`
   * defaults to false when used in this message.
   */
  response_headers_to_add: HeaderValueOption[];
  /**
   * This field allows the authorization service to set (and overwrite) query
   * string parameters on the original request before it is sent upstream.
   */
  query_parameters_to_set: QueryParameter[];
  /**
   * This field allows the authorization service to specify which query parameters
   * should be removed from the original request before it is sent upstream. Each
   * element in this list is a case-sensitive query parameter name to be removed.
   */
  query_parameters_to_remove: string[];
}

/** Intended for gRPC and Network Authorization servers ``only``. */
export interface CheckResponse {
  /**
   * Status ``OK`` allows the request. Any other status indicates the request should be denied, and
   * for HTTP filter, if not overridden by :ref:`denied HTTP response status <envoy_v3_api_field_service.auth.v3.DeniedHttpResponse.status>`
   * Envoy sends ``403 Forbidden`` HTTP status code by default.
   */
  status:
    | Status
    | undefined;
  /** Supplies http attributes for a denied response. */
  denied_response?:
    | DeniedHttpResponse
    | undefined;
  /** Supplies http attributes for an ok response. */
  ok_response?:
    | OkHttpResponse
    | undefined;
  /**
   * Optional response metadata that will be emitted as dynamic metadata to be consumed by the next
   * filter. This metadata lives in a namespace specified by the canonical name of extension filter
   * that requires it:
   *
   * - :ref:`envoy.filters.http.ext_authz <config_http_filters_ext_authz_dynamic_metadata>` for HTTP filter.
   * - :ref:`envoy.filters.network.ext_authz <config_network_filters_ext_authz_dynamic_metadata>` for network filter.
   */
  dynamic_metadata: { [key: string]: any } | undefined;
}

function createBaseCheckRequest(): CheckRequest {
  return { attributes: undefined };
}

export const CheckRequest = {
  encode(message: CheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attributes !== undefined) {
      AttributeContext.encode(message.attributes, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attributes = AttributeContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckRequest {
    return { attributes: isSet(object.attributes) ? AttributeContext.fromJSON(object.attributes) : undefined };
  },

  toJSON(message: CheckRequest): unknown {
    const obj: any = {};
    if (message.attributes !== undefined) {
      obj.attributes = AttributeContext.toJSON(message.attributes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckRequest>, I>>(base?: I): CheckRequest {
    return CheckRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheckRequest>, I>>(object: I): CheckRequest {
    const message = createBaseCheckRequest();
    message.attributes = (object.attributes !== undefined && object.attributes !== null)
      ? AttributeContext.fromPartial(object.attributes)
      : undefined;
    return message;
  },
};

function createBaseDeniedHttpResponse(): DeniedHttpResponse {
  return { status: undefined, headers: [], body: "" };
}

export const DeniedHttpResponse = {
  encode(message: DeniedHttpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      HttpStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.headers) {
      HeaderValueOption.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeniedHttpResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeniedHttpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = HttpStatus.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.headers.push(HeaderValueOption.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.body = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeniedHttpResponse {
    return {
      status: isSet(object.status) ? HttpStatus.fromJSON(object.status) : undefined,
      headers: globalThis.Array.isArray(object?.headers)
        ? object.headers.map((e: any) => HeaderValueOption.fromJSON(e))
        : [],
      body: isSet(object.body) ? globalThis.String(object.body) : "",
    };
  },

  toJSON(message: DeniedHttpResponse): unknown {
    const obj: any = {};
    if (message.status !== undefined) {
      obj.status = HttpStatus.toJSON(message.status);
    }
    if (message.headers?.length) {
      obj.headers = message.headers.map((e) => HeaderValueOption.toJSON(e));
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeniedHttpResponse>, I>>(base?: I): DeniedHttpResponse {
    return DeniedHttpResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeniedHttpResponse>, I>>(object: I): DeniedHttpResponse {
    const message = createBaseDeniedHttpResponse();
    message.status = (object.status !== undefined && object.status !== null)
      ? HttpStatus.fromPartial(object.status)
      : undefined;
    message.headers = object.headers?.map((e) => HeaderValueOption.fromPartial(e)) || [];
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseOkHttpResponse(): OkHttpResponse {
  return {
    headers: [],
    headers_to_remove: [],
    dynamic_metadata: undefined,
    response_headers_to_add: [],
    query_parameters_to_set: [],
    query_parameters_to_remove: [],
  };
}

export const OkHttpResponse = {
  encode(message: OkHttpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.headers) {
      HeaderValueOption.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.headers_to_remove) {
      writer.uint32(42).string(v!);
    }
    if (message.dynamic_metadata !== undefined) {
      Struct.encode(Struct.wrap(message.dynamic_metadata), writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.response_headers_to_add) {
      HeaderValueOption.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.query_parameters_to_set) {
      QueryParameter.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.query_parameters_to_remove) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OkHttpResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOkHttpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.headers.push(HeaderValueOption.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.headers_to_remove.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dynamic_metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.response_headers_to_add.push(HeaderValueOption.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.query_parameters_to_set.push(QueryParameter.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.query_parameters_to_remove.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OkHttpResponse {
    return {
      headers: globalThis.Array.isArray(object?.headers)
        ? object.headers.map((e: any) => HeaderValueOption.fromJSON(e))
        : [],
      headers_to_remove: globalThis.Array.isArray(object?.headers_to_remove)
        ? object.headers_to_remove.map((e: any) => globalThis.String(e))
        : [],
      dynamic_metadata: isObject(object.dynamic_metadata) ? object.dynamic_metadata : undefined,
      response_headers_to_add: globalThis.Array.isArray(object?.response_headers_to_add)
        ? object.response_headers_to_add.map((e: any) => HeaderValueOption.fromJSON(e))
        : [],
      query_parameters_to_set: globalThis.Array.isArray(object?.query_parameters_to_set)
        ? object.query_parameters_to_set.map((e: any) => QueryParameter.fromJSON(e))
        : [],
      query_parameters_to_remove: globalThis.Array.isArray(object?.query_parameters_to_remove)
        ? object.query_parameters_to_remove.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: OkHttpResponse): unknown {
    const obj: any = {};
    if (message.headers?.length) {
      obj.headers = message.headers.map((e) => HeaderValueOption.toJSON(e));
    }
    if (message.headers_to_remove?.length) {
      obj.headers_to_remove = message.headers_to_remove;
    }
    if (message.dynamic_metadata !== undefined) {
      obj.dynamic_metadata = message.dynamic_metadata;
    }
    if (message.response_headers_to_add?.length) {
      obj.response_headers_to_add = message.response_headers_to_add.map((e) => HeaderValueOption.toJSON(e));
    }
    if (message.query_parameters_to_set?.length) {
      obj.query_parameters_to_set = message.query_parameters_to_set.map((e) => QueryParameter.toJSON(e));
    }
    if (message.query_parameters_to_remove?.length) {
      obj.query_parameters_to_remove = message.query_parameters_to_remove;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OkHttpResponse>, I>>(base?: I): OkHttpResponse {
    return OkHttpResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OkHttpResponse>, I>>(object: I): OkHttpResponse {
    const message = createBaseOkHttpResponse();
    message.headers = object.headers?.map((e) => HeaderValueOption.fromPartial(e)) || [];
    message.headers_to_remove = object.headers_to_remove?.map((e) => e) || [];
    message.dynamic_metadata = object.dynamic_metadata ?? undefined;
    message.response_headers_to_add = object.response_headers_to_add?.map((e) => HeaderValueOption.fromPartial(e)) ||
      [];
    message.query_parameters_to_set = object.query_parameters_to_set?.map((e) => QueryParameter.fromPartial(e)) || [];
    message.query_parameters_to_remove = object.query_parameters_to_remove?.map((e) => e) || [];
    return message;
  },
};

function createBaseCheckResponse(): CheckResponse {
  return { status: undefined, denied_response: undefined, ok_response: undefined, dynamic_metadata: undefined };
}

export const CheckResponse = {
  encode(message: CheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    if (message.denied_response !== undefined) {
      DeniedHttpResponse.encode(message.denied_response, writer.uint32(18).fork()).ldelim();
    }
    if (message.ok_response !== undefined) {
      OkHttpResponse.encode(message.ok_response, writer.uint32(26).fork()).ldelim();
    }
    if (message.dynamic_metadata !== undefined) {
      Struct.encode(Struct.wrap(message.dynamic_metadata), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denied_response = DeniedHttpResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ok_response = OkHttpResponse.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dynamic_metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResponse {
    return {
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      denied_response: isSet(object.denied_response) ? DeniedHttpResponse.fromJSON(object.denied_response) : undefined,
      ok_response: isSet(object.ok_response) ? OkHttpResponse.fromJSON(object.ok_response) : undefined,
      dynamic_metadata: isObject(object.dynamic_metadata) ? object.dynamic_metadata : undefined,
    };
  },

  toJSON(message: CheckResponse): unknown {
    const obj: any = {};
    if (message.status !== undefined) {
      obj.status = Status.toJSON(message.status);
    }
    if (message.denied_response !== undefined) {
      obj.denied_response = DeniedHttpResponse.toJSON(message.denied_response);
    }
    if (message.ok_response !== undefined) {
      obj.ok_response = OkHttpResponse.toJSON(message.ok_response);
    }
    if (message.dynamic_metadata !== undefined) {
      obj.dynamic_metadata = message.dynamic_metadata;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckResponse>, I>>(base?: I): CheckResponse {
    return CheckResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheckResponse>, I>>(object: I): CheckResponse {
    const message = createBaseCheckResponse();
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    message.denied_response = (object.denied_response !== undefined && object.denied_response !== null)
      ? DeniedHttpResponse.fromPartial(object.denied_response)
      : undefined;
    message.ok_response = (object.ok_response !== undefined && object.ok_response !== null)
      ? OkHttpResponse.fromPartial(object.ok_response)
      : undefined;
    message.dynamic_metadata = object.dynamic_metadata ?? undefined;
    return message;
  },
};

/**
 * A generic interface for performing authorization check on incoming
 * requests to a networked service.
 */
export interface Authorization {
  /**
   * Performs authorization check based on the attributes associated with the
   * incoming request, and returns status `OK` or not `OK`.
   */
  Check(request: CheckRequest): Promise<CheckResponse>;
}

export const AuthorizationServiceName = "envoy.service.auth.v3.Authorization";
export class AuthorizationClientImpl implements Authorization {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || AuthorizationServiceName;
    this.rpc = rpc;
    this.Check = this.Check.bind(this);
  }
  Check(request: CheckRequest): Promise<CheckResponse> {
    const data = CheckRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Check", data);
    return promise.then((data) => CheckResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
