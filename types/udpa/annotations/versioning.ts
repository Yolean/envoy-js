/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "udpa.annotations";

export interface VersioningAnnotation {
  /**
   * Track the previous message type. E.g. this message might be
   * udpa.foo.v3alpha.Foo and it was previously udpa.bar.v2.Bar. This
   * information is consumed by UDPA via proto descriptors.
   */
  previous_message_type: string;
}

function createBaseVersioningAnnotation(): VersioningAnnotation {
  return { previous_message_type: "" };
}

export const VersioningAnnotation = {
  encode(message: VersioningAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.previous_message_type !== "") {
      writer.uint32(10).string(message.previous_message_type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersioningAnnotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersioningAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.previous_message_type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VersioningAnnotation {
    return {
      previous_message_type: isSet(object.previous_message_type) ? globalThis.String(object.previous_message_type) : "",
    };
  },

  toJSON(message: VersioningAnnotation): unknown {
    const obj: any = {};
    if (message.previous_message_type !== "") {
      obj.previous_message_type = message.previous_message_type;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VersioningAnnotation>, I>>(base?: I): VersioningAnnotation {
    return VersioningAnnotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VersioningAnnotation>, I>>(object: I): VersioningAnnotation {
    const message = createBaseVersioningAnnotation();
    message.previous_message_type = object.previous_message_type ?? "";
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
