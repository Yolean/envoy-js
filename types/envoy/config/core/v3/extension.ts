/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";

export const protobufPackage = "envoy.config.core.v3";

/**
 * Message type for extension configuration.
 * [#next-major-version: revisit all existing typed_config that doesn't use this wrapper.].
 */
export interface TypedExtensionConfig {
  /**
   * The name of an extension. This is not used to select the extension, instead
   * it serves the role of an opaque identifier.
   */
  name: string;
  /**
   * The typed config for the extension. The type URL will be used to identify
   * the extension. In the case that the type URL is ``xds.type.v3.TypedStruct``
   * (or, for historical reasons, ``udpa.type.v1.TypedStruct``), the inner type
   * URL of ``TypedStruct`` will be utilized. See the
   * :ref:`extension configuration overview
   * <config_overview_extension_configuration>` for further details.
   */
  typed_config: Any | undefined;
}

function createBaseTypedExtensionConfig(): TypedExtensionConfig {
  return { name: "", typed_config: undefined };
}

export const TypedExtensionConfig = {
  encode(message: TypedExtensionConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.typed_config !== undefined) {
      Any.encode(message.typed_config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypedExtensionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypedExtensionConfig();
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

  fromJSON(object: any): TypedExtensionConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      typed_config: isSet(object.typed_config) ? Any.fromJSON(object.typed_config) : undefined,
    };
  },

  toJSON(message: TypedExtensionConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.typed_config !== undefined) {
      obj.typed_config = Any.toJSON(message.typed_config);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TypedExtensionConfig>, I>>(base?: I): TypedExtensionConfig {
    return TypedExtensionConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TypedExtensionConfig>, I>>(object: I): TypedExtensionConfig {
    const message = createBaseTypedExtensionConfig();
    message.name = object.name ?? "";
    message.typed_config = (object.typed_config !== undefined && object.typed_config !== null)
      ? Any.fromPartial(object.typed_config)
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
