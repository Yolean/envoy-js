/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "envoy.type.v3";

/**
 * Envoy uses SemVer (https://semver.org/). Major/minor versions indicate
 * expected behaviors and APIs, the patch version field is used only
 * for security fixes and can be generally ignored.
 */
export interface SemanticVersion {
  major_number: number;
  minor_number: number;
  patch: number;
}

function createBaseSemanticVersion(): SemanticVersion {
  return { major_number: 0, minor_number: 0, patch: 0 };
}

export const SemanticVersion = {
  encode(message: SemanticVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.major_number !== 0) {
      writer.uint32(8).uint32(message.major_number);
    }
    if (message.minor_number !== 0) {
      writer.uint32(16).uint32(message.minor_number);
    }
    if (message.patch !== 0) {
      writer.uint32(24).uint32(message.patch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SemanticVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSemanticVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.major_number = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minor_number = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.patch = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SemanticVersion {
    return {
      major_number: isSet(object.major_number) ? globalThis.Number(object.major_number) : 0,
      minor_number: isSet(object.minor_number) ? globalThis.Number(object.minor_number) : 0,
      patch: isSet(object.patch) ? globalThis.Number(object.patch) : 0,
    };
  },

  toJSON(message: SemanticVersion): unknown {
    const obj: any = {};
    if (message.major_number !== 0) {
      obj.major_number = Math.round(message.major_number);
    }
    if (message.minor_number !== 0) {
      obj.minor_number = Math.round(message.minor_number);
    }
    if (message.patch !== 0) {
      obj.patch = Math.round(message.patch);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SemanticVersion>, I>>(base?: I): SemanticVersion {
    return SemanticVersion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SemanticVersion>, I>>(object: I): SemanticVersion {
    const message = createBaseSemanticVersion();
    message.major_number = object.major_number ?? 0;
    message.minor_number = object.minor_number ?? 0;
    message.patch = object.patch ?? 0;
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
