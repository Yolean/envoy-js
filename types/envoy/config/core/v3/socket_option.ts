/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "envoy.config.core.v3";

/**
 * Generic socket option message. This would be used to set socket options that
 * might not exist in upstream kernels or precompiled Envoy binaries.
 *
 * For example:
 *
 * .. code-block:: json
 *
 *  {
 *    "description": "support tcp keep alive",
 *    "state": 0,
 *    "level": 1,
 *    "name": 9,
 *    "int_value": 1,
 *  }
 *
 * 1 means SOL_SOCKET and 9 means SO_KEEPALIVE on Linux.
 * With the above configuration, `TCP Keep-Alives <https://www.freesoft.org/CIE/RFC/1122/114.htm>`_
 * can be enabled in socket with Linux, which can be used in
 * :ref:`listener's<envoy_v3_api_field_config.listener.v3.Listener.socket_options>` or
 * :ref:`admin's <envoy_v3_api_field_config.bootstrap.v3.Admin.socket_options>` socket_options etc.
 *
 * It should be noted that the name or level may have different values on different platforms.
 * [#next-free-field: 7]
 */
export interface SocketOption {
  /**
   * An optional name to give this socket option for debugging, etc.
   * Uniqueness is not required and no special meaning is assumed.
   */
  description: string;
  /** Corresponding to the level value passed to setsockopt, such as IPPROTO_TCP */
  level: number;
  /** The numeric name as passed to setsockopt */
  name: number;
  /** Because many sockopts take an int value. */
  int_value?:
    | number
    | undefined;
  /** Otherwise it's a byte buffer. */
  buf_value?:
    | Uint8Array
    | undefined;
  /**
   * The state in which the option will be applied. When used in BindConfig
   * STATE_PREBIND is currently the only valid value.
   */
  state: SocketOption_SocketState;
}

export enum SocketOption_SocketState {
  /** STATE_PREBIND - Socket options are applied after socket creation but before binding the socket to a port */
  STATE_PREBIND = 0,
  /** STATE_BOUND - Socket options are applied after binding the socket to a port but before calling listen() */
  STATE_BOUND = 1,
  /** STATE_LISTENING - Socket options are applied after calling listen() */
  STATE_LISTENING = 2,
  UNRECOGNIZED = -1,
}

export function socketOption_SocketStateFromJSON(object: any): SocketOption_SocketState {
  switch (object) {
    case 0:
    case "STATE_PREBIND":
      return SocketOption_SocketState.STATE_PREBIND;
    case 1:
    case "STATE_BOUND":
      return SocketOption_SocketState.STATE_BOUND;
    case 2:
    case "STATE_LISTENING":
      return SocketOption_SocketState.STATE_LISTENING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SocketOption_SocketState.UNRECOGNIZED;
  }
}

export function socketOption_SocketStateToJSON(object: SocketOption_SocketState): string {
  switch (object) {
    case SocketOption_SocketState.STATE_PREBIND:
      return "STATE_PREBIND";
    case SocketOption_SocketState.STATE_BOUND:
      return "STATE_BOUND";
    case SocketOption_SocketState.STATE_LISTENING:
      return "STATE_LISTENING";
    case SocketOption_SocketState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SocketOptionsOverride {
  socket_options: SocketOption[];
}

function createBaseSocketOption(): SocketOption {
  return { description: "", level: 0, name: 0, int_value: undefined, buf_value: undefined, state: 0 };
}

export const SocketOption = {
  encode(message: SocketOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.level !== 0) {
      writer.uint32(16).int64(message.level);
    }
    if (message.name !== 0) {
      writer.uint32(24).int64(message.name);
    }
    if (message.int_value !== undefined) {
      writer.uint32(32).int64(message.int_value);
    }
    if (message.buf_value !== undefined) {
      writer.uint32(42).bytes(message.buf_value);
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SocketOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocketOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.level = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.name = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.int_value = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.buf_value = reader.bytes();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SocketOption {
    return {
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      name: isSet(object.name) ? globalThis.Number(object.name) : 0,
      int_value: isSet(object.int_value) ? globalThis.Number(object.int_value) : undefined,
      buf_value: isSet(object.buf_value) ? bytesFromBase64(object.buf_value) : undefined,
      state: isSet(object.state) ? socketOption_SocketStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SocketOption): unknown {
    const obj: any = {};
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.name !== 0) {
      obj.name = Math.round(message.name);
    }
    if (message.int_value !== undefined) {
      obj.int_value = Math.round(message.int_value);
    }
    if (message.buf_value !== undefined) {
      obj.buf_value = base64FromBytes(message.buf_value);
    }
    if (message.state !== 0) {
      obj.state = socketOption_SocketStateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SocketOption>, I>>(base?: I): SocketOption {
    return SocketOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SocketOption>, I>>(object: I): SocketOption {
    const message = createBaseSocketOption();
    message.description = object.description ?? "";
    message.level = object.level ?? 0;
    message.name = object.name ?? 0;
    message.int_value = object.int_value ?? undefined;
    message.buf_value = object.buf_value ?? undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSocketOptionsOverride(): SocketOptionsOverride {
  return { socket_options: [] };
}

export const SocketOptionsOverride = {
  encode(message: SocketOptionsOverride, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.socket_options) {
      SocketOption.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SocketOptionsOverride {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocketOptionsOverride();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.socket_options.push(SocketOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SocketOptionsOverride {
    return {
      socket_options: globalThis.Array.isArray(object?.socket_options)
        ? object.socket_options.map((e: any) => SocketOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SocketOptionsOverride): unknown {
    const obj: any = {};
    if (message.socket_options?.length) {
      obj.socket_options = message.socket_options.map((e) => SocketOption.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SocketOptionsOverride>, I>>(base?: I): SocketOptionsOverride {
    return SocketOptionsOverride.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SocketOptionsOverride>, I>>(object: I): SocketOptionsOverride {
    const message = createBaseSocketOptionsOverride();
    message.socket_options = object.socket_options?.map((e) => SocketOption.fromPartial(e)) || [];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
