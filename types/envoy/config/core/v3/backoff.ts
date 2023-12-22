/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";

export const protobufPackage = "envoy.config.core.v3";

/** Configuration defining a jittered exponential back off strategy. */
export interface BackoffStrategy {
  /**
   * The base interval to be used for the next back off computation. It should
   * be greater than zero and less than or equal to :ref:`max_interval
   * <envoy_v3_api_field_config.core.v3.BackoffStrategy.max_interval>`.
   */
  base_interval:
    | Duration
    | undefined;
  /**
   * Specifies the maximum interval between retries. This parameter is optional,
   * but must be greater than or equal to the :ref:`base_interval
   * <envoy_v3_api_field_config.core.v3.BackoffStrategy.base_interval>` if set. The default
   * is 10 times the :ref:`base_interval
   * <envoy_v3_api_field_config.core.v3.BackoffStrategy.base_interval>`.
   */
  max_interval: Duration | undefined;
}

function createBaseBackoffStrategy(): BackoffStrategy {
  return { base_interval: undefined, max_interval: undefined };
}

export const BackoffStrategy = {
  encode(message: BackoffStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base_interval !== undefined) {
      Duration.encode(message.base_interval, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_interval !== undefined) {
      Duration.encode(message.max_interval, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackoffStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackoffStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.base_interval = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.max_interval = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackoffStrategy {
    return {
      base_interval: isSet(object.base_interval) ? Duration.fromJSON(object.base_interval) : undefined,
      max_interval: isSet(object.max_interval) ? Duration.fromJSON(object.max_interval) : undefined,
    };
  },

  toJSON(message: BackoffStrategy): unknown {
    const obj: any = {};
    if (message.base_interval !== undefined) {
      obj.base_interval = Duration.toJSON(message.base_interval);
    }
    if (message.max_interval !== undefined) {
      obj.max_interval = Duration.toJSON(message.max_interval);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BackoffStrategy>, I>>(base?: I): BackoffStrategy {
    return BackoffStrategy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BackoffStrategy>, I>>(object: I): BackoffStrategy {
    const message = createBaseBackoffStrategy();
    message.base_interval = (object.base_interval !== undefined && object.base_interval !== null)
      ? Duration.fromPartial(object.base_interval)
      : undefined;
    message.max_interval = (object.max_interval !== undefined && object.max_interval !== null)
      ? Duration.fromPartial(object.max_interval)
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
