/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "xds.core.v3";

/**
 * Additional parameters that can be used to select resource variants. These include any
 * global context parameters, per-resource type client feature capabilities and per-resource
 * type functional attributes. All per-resource type attributes will be `xds.resource.`
 * prefixed and some of these are documented below:
 *
 * `xds.resource.listening_address`: The value is "IP:port" (e.g. "10.1.1.3:8080") which is
 *   the listening address of a Listener. Used in a Listener resource query.
 */
export interface ContextParams {
  params: { [key: string]: string };
}

export interface ContextParams_ParamsEntry {
  key: string;
  value: string;
}

function createBaseContextParams(): ContextParams {
  return { params: {} };
}

export const ContextParams = {
  encode(message: ContextParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.params).forEach(([key, value]) => {
      ContextParams_ParamsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContextParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = ContextParams_ParamsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.params[entry1.key] = entry1.value;
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

  fromJSON(object: any): ContextParams {
    return {
      params: isObject(object.params)
        ? Object.entries(object.params).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ContextParams): unknown {
    const obj: any = {};
    if (message.params) {
      const entries = Object.entries(message.params);
      if (entries.length > 0) {
        obj.params = {};
        entries.forEach(([k, v]) => {
          obj.params[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContextParams>, I>>(base?: I): ContextParams {
    return ContextParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContextParams>, I>>(object: I): ContextParams {
    const message = createBaseContextParams();
    message.params = Object.entries(object.params ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseContextParams_ParamsEntry(): ContextParams_ParamsEntry {
  return { key: "", value: "" };
}

export const ContextParams_ParamsEntry = {
  encode(message: ContextParams_ParamsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContextParams_ParamsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextParams_ParamsEntry();
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

  fromJSON(object: any): ContextParams_ParamsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ContextParams_ParamsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContextParams_ParamsEntry>, I>>(base?: I): ContextParams_ParamsEntry {
    return ContextParams_ParamsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContextParams_ParamsEntry>, I>>(object: I): ContextParams_ParamsEntry {
    const message = createBaseContextParams_ParamsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
