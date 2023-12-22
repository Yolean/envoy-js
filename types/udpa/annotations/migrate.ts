/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "udpa.annotations";

export interface MigrateAnnotation {
  /** Rename the message/enum/enum value in next version. */
  rename: string;
}

export interface FieldMigrateAnnotation {
  /** Rename the field in next version. */
  rename: string;
  /**
   * Add the field to a named oneof in next version. If this already exists, the
   * field will join its siblings under the oneof, otherwise a new oneof will be
   * created with the given name.
   */
  oneof_promotion: string;
}

export interface FileMigrateAnnotation {
  /**
   * Move all types in the file to another package, this implies changing proto
   * file path.
   */
  move_to_package: string;
}

function createBaseMigrateAnnotation(): MigrateAnnotation {
  return { rename: "" };
}

export const MigrateAnnotation = {
  encode(message: MigrateAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rename !== "") {
      writer.uint32(10).string(message.rename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateAnnotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rename = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MigrateAnnotation {
    return { rename: isSet(object.rename) ? globalThis.String(object.rename) : "" };
  },

  toJSON(message: MigrateAnnotation): unknown {
    const obj: any = {};
    if (message.rename !== "") {
      obj.rename = message.rename;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MigrateAnnotation>, I>>(base?: I): MigrateAnnotation {
    return MigrateAnnotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MigrateAnnotation>, I>>(object: I): MigrateAnnotation {
    const message = createBaseMigrateAnnotation();
    message.rename = object.rename ?? "";
    return message;
  },
};

function createBaseFieldMigrateAnnotation(): FieldMigrateAnnotation {
  return { rename: "", oneof_promotion: "" };
}

export const FieldMigrateAnnotation = {
  encode(message: FieldMigrateAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rename !== "") {
      writer.uint32(10).string(message.rename);
    }
    if (message.oneof_promotion !== "") {
      writer.uint32(18).string(message.oneof_promotion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldMigrateAnnotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldMigrateAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rename = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.oneof_promotion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldMigrateAnnotation {
    return {
      rename: isSet(object.rename) ? globalThis.String(object.rename) : "",
      oneof_promotion: isSet(object.oneof_promotion) ? globalThis.String(object.oneof_promotion) : "",
    };
  },

  toJSON(message: FieldMigrateAnnotation): unknown {
    const obj: any = {};
    if (message.rename !== "") {
      obj.rename = message.rename;
    }
    if (message.oneof_promotion !== "") {
      obj.oneof_promotion = message.oneof_promotion;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FieldMigrateAnnotation>, I>>(base?: I): FieldMigrateAnnotation {
    return FieldMigrateAnnotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FieldMigrateAnnotation>, I>>(object: I): FieldMigrateAnnotation {
    const message = createBaseFieldMigrateAnnotation();
    message.rename = object.rename ?? "";
    message.oneof_promotion = object.oneof_promotion ?? "";
    return message;
  },
};

function createBaseFileMigrateAnnotation(): FileMigrateAnnotation {
  return { move_to_package: "" };
}

export const FileMigrateAnnotation = {
  encode(message: FileMigrateAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.move_to_package !== "") {
      writer.uint32(18).string(message.move_to_package);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileMigrateAnnotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileMigrateAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.move_to_package = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileMigrateAnnotation {
    return { move_to_package: isSet(object.move_to_package) ? globalThis.String(object.move_to_package) : "" };
  },

  toJSON(message: FileMigrateAnnotation): unknown {
    const obj: any = {};
    if (message.move_to_package !== "") {
      obj.move_to_package = message.move_to_package;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileMigrateAnnotation>, I>>(base?: I): FileMigrateAnnotation {
    return FileMigrateAnnotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileMigrateAnnotation>, I>>(object: I): FileMigrateAnnotation {
    const message = createBaseFileMigrateAnnotation();
    message.move_to_package = object.move_to_package ?? "";
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
