/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "envoy.type.v3";

/** Identifies a percentage, in the range [0.0, 100.0]. */
export interface Percent {
  value: number;
}

/**
 * A fractional percentage is used in cases in which for performance reasons performing floating
 * point to integer conversions during randomness calculations is undesirable. The message includes
 * both a numerator and denominator that together determine the final fractional value.
 *
 * * **Example**: 1/100 = 1%.
 * * **Example**: 3/10000 = 0.03%.
 */
export interface FractionalPercent {
  /** Specifies the numerator. Defaults to 0. */
  numerator: number;
  /**
   * Specifies the denominator. If the denominator specified is less than the numerator, the final
   * fractional percentage is capped at 1 (100%).
   */
  denominator: FractionalPercent_DenominatorType;
}

/** Fraction percentages support several fixed denominator values. */
export enum FractionalPercent_DenominatorType {
  /**
   * HUNDRED - 100.
   *
   * **Example**: 1/100 = 1%.
   */
  HUNDRED = 0,
  /**
   * TEN_THOUSAND - 10,000.
   *
   * **Example**: 1/10000 = 0.01%.
   */
  TEN_THOUSAND = 1,
  /**
   * MILLION - 1,000,000.
   *
   * **Example**: 1/1000000 = 0.0001%.
   */
  MILLION = 2,
  UNRECOGNIZED = -1,
}

export function fractionalPercent_DenominatorTypeFromJSON(object: any): FractionalPercent_DenominatorType {
  switch (object) {
    case 0:
    case "HUNDRED":
      return FractionalPercent_DenominatorType.HUNDRED;
    case 1:
    case "TEN_THOUSAND":
      return FractionalPercent_DenominatorType.TEN_THOUSAND;
    case 2:
    case "MILLION":
      return FractionalPercent_DenominatorType.MILLION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FractionalPercent_DenominatorType.UNRECOGNIZED;
  }
}

export function fractionalPercent_DenominatorTypeToJSON(object: FractionalPercent_DenominatorType): string {
  switch (object) {
    case FractionalPercent_DenominatorType.HUNDRED:
      return "HUNDRED";
    case FractionalPercent_DenominatorType.TEN_THOUSAND:
      return "TEN_THOUSAND";
    case FractionalPercent_DenominatorType.MILLION:
      return "MILLION";
    case FractionalPercent_DenominatorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePercent(): Percent {
  return { value: 0 };
}

export const Percent = {
  encode(message: Percent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Percent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePercent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Percent {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: Percent): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Percent>, I>>(base?: I): Percent {
    return Percent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Percent>, I>>(object: I): Percent {
    const message = createBasePercent();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseFractionalPercent(): FractionalPercent {
  return { numerator: 0, denominator: 0 };
}

export const FractionalPercent = {
  encode(message: FractionalPercent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numerator !== 0) {
      writer.uint32(8).uint32(message.numerator);
    }
    if (message.denominator !== 0) {
      writer.uint32(16).int32(message.denominator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FractionalPercent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFractionalPercent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.numerator = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.denominator = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FractionalPercent {
    return {
      numerator: isSet(object.numerator) ? globalThis.Number(object.numerator) : 0,
      denominator: isSet(object.denominator) ? fractionalPercent_DenominatorTypeFromJSON(object.denominator) : 0,
    };
  },

  toJSON(message: FractionalPercent): unknown {
    const obj: any = {};
    if (message.numerator !== 0) {
      obj.numerator = Math.round(message.numerator);
    }
    if (message.denominator !== 0) {
      obj.denominator = fractionalPercent_DenominatorTypeToJSON(message.denominator);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FractionalPercent>, I>>(base?: I): FractionalPercent {
    return FractionalPercent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FractionalPercent>, I>>(object: I): FractionalPercent {
    const message = createBaseFractionalPercent();
    message.numerator = object.numerator ?? 0;
    message.denominator = object.denominator ?? 0;
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
