// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.0
//   protoc               v4.25.2
// source: envoy/config/core/v3/http_uri.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Duration } from "../../../../google/protobuf/duration";

export const protobufPackage = "envoy.config.core.v3";

/** Envoy external URI descriptor */
export interface HttpUri {
  /**
   * The HTTP server URI. It should be a full FQDN with protocol, host and path.
   *
   * Example:
   *
   * .. code-block:: yaml
   *
   *    uri: https://www.googleapis.com/oauth2/v1/certs
   */
  uri: string;
  /**
   * A cluster is created in the Envoy "cluster_manager" config
   * section. This field specifies the cluster name.
   *
   * Example:
   *
   * .. code-block:: yaml
   *
   *    cluster: jwks_cluster
   */
  cluster?:
    | string
    | undefined;
  /** Sets the maximum duration in milliseconds that a response can take to arrive upon request. */
  timeout: Duration | undefined;
}

function createBaseHttpUri(): HttpUri {
  return { uri: "", cluster: undefined, timeout: undefined };
}

export const HttpUri: MessageFns<HttpUri> = {
  encode(message: HttpUri, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.cluster !== undefined) {
      writer.uint32(18).string(message.cluster);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HttpUri {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpUri();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.uri = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.cluster = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.timeout = Duration.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpUri {
    return {
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      cluster: isSet(object.cluster) ? globalThis.String(object.cluster) : undefined,
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
    };
  },

  toJSON(message: HttpUri): unknown {
    const obj: any = {};
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.cluster !== undefined) {
      obj.cluster = message.cluster;
    }
    if (message.timeout !== undefined) {
      obj.timeout = Duration.toJSON(message.timeout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpUri>, I>>(base?: I): HttpUri {
    return HttpUri.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpUri>, I>>(object: I): HttpUri {
    const message = createBaseHttpUri();
    message.uri = object.uri ?? "";
    message.cluster = object.cluster ?? undefined;
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
