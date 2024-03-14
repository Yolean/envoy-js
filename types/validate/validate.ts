/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";
import Long = require("long");

export const protobufPackage = "validate";

/** WellKnownRegex contain some well-known patterns. */
export enum KnownRegex {
  UNKNOWN = 0,
  /** HTTP_HEADER_NAME - HTTP header name as defined by RFC 7230. */
  HTTP_HEADER_NAME = 1,
  /** HTTP_HEADER_VALUE - HTTP header value as defined by RFC 7230. */
  HTTP_HEADER_VALUE = 2,
  UNRECOGNIZED = -1,
}

export function knownRegexFromJSON(object: any): KnownRegex {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return KnownRegex.UNKNOWN;
    case 1:
    case "HTTP_HEADER_NAME":
      return KnownRegex.HTTP_HEADER_NAME;
    case 2:
    case "HTTP_HEADER_VALUE":
      return KnownRegex.HTTP_HEADER_VALUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KnownRegex.UNRECOGNIZED;
  }
}

export function knownRegexToJSON(object: KnownRegex): string {
  switch (object) {
    case KnownRegex.UNKNOWN:
      return "UNKNOWN";
    case KnownRegex.HTTP_HEADER_NAME:
      return "HTTP_HEADER_NAME";
    case KnownRegex.HTTP_HEADER_VALUE:
      return "HTTP_HEADER_VALUE";
    case KnownRegex.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * FieldRules encapsulates the rules for each type of field. Depending on the
 * field, the correct set should be used to ensure proper validations.
 */
export interface FieldRules {
  message?:
    | MessageRules
    | undefined;
  /** Scalar Field Types */
  float?: FloatRules | undefined;
  double?: DoubleRules | undefined;
  int32?: Int32Rules | undefined;
  int64?: Int64Rules | undefined;
  uint32?: UInt32Rules | undefined;
  uint64?: UInt64Rules | undefined;
  sint32?: SInt32Rules | undefined;
  sint64?: SInt64Rules | undefined;
  fixed32?: Fixed32Rules | undefined;
  fixed64?: Fixed64Rules | undefined;
  sfixed32?: SFixed32Rules | undefined;
  sfixed64?: SFixed64Rules | undefined;
  bool?: BoolRules | undefined;
  string?: StringRules | undefined;
  bytes?:
    | BytesRules
    | undefined;
  /** Complex Field Types */
  enum?: EnumRules | undefined;
  repeated?: RepeatedRules | undefined;
  map?:
    | MapRules
    | undefined;
  /** Well-Known Field Types */
  any?: AnyRules | undefined;
  duration?: DurationRules | undefined;
  timestamp?: TimestampRules | undefined;
}

/** FloatRules describes the constraints applied to `float` values */
export interface FloatRules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** DoubleRules describes the constraints applied to `double` values */
export interface DoubleRules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** Int32Rules describes the constraints applied to `int32` values */
export interface Int32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** Int64Rules describes the constraints applied to `int64` values */
export interface Int64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** UInt32Rules describes the constraints applied to `uint32` values */
export interface UInt32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** UInt64Rules describes the constraints applied to `uint64` values */
export interface UInt64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** SInt32Rules describes the constraints applied to `sint32` values */
export interface SInt32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** SInt64Rules describes the constraints applied to `sint64` values */
export interface SInt64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** Fixed32Rules describes the constraints applied to `fixed32` values */
export interface Fixed32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** Fixed64Rules describes the constraints applied to `fixed64` values */
export interface Fixed64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** SFixed32Rules describes the constraints applied to `sfixed32` values */
export interface SFixed32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** SFixed64Rules describes the constraints applied to `sfixed64` values */
export interface SFixed64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | number
    | undefined;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte?:
    | number
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt?:
    | number
    | undefined;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte?:
    | number
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** BoolRules describes the constraints applied to `bool` values */
export interface BoolRules {
  /** Const specifies that this field must be exactly the specified value */
  const?: boolean | undefined;
}

/** StringRules describe the constraints applied to `string` values */
export interface StringRules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | string
    | undefined;
  /**
   * Len specifies that this field must be the specified number of
   * characters (Unicode code points). Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  len?:
    | number
    | undefined;
  /**
   * MinLen specifies that this field must be the specified number of
   * characters (Unicode code points) at a minimum. Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  min_len?:
    | number
    | undefined;
  /**
   * MaxLen specifies that this field must be the specified number of
   * characters (Unicode code points) at a maximum. Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  max_len?:
    | number
    | undefined;
  /** LenBytes specifies that this field must be the specified number of bytes */
  len_bytes?:
    | number
    | undefined;
  /**
   * MinBytes specifies that this field must be the specified number of bytes
   * at a minimum
   */
  min_bytes?:
    | number
    | undefined;
  /**
   * MaxBytes specifies that this field must be the specified number of bytes
   * at a maximum
   */
  max_bytes?:
    | number
    | undefined;
  /**
   * Pattern specifies that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   */
  pattern?:
    | string
    | undefined;
  /**
   * Prefix specifies that this field must have the specified substring at
   * the beginning of the string.
   */
  prefix?:
    | string
    | undefined;
  /**
   * Suffix specifies that this field must have the specified substring at
   * the end of the string.
   */
  suffix?:
    | string
    | undefined;
  /**
   * Contains specifies that this field must have the specified substring
   * anywhere in the string.
   */
  contains?:
    | string
    | undefined;
  /**
   * NotContains specifies that this field cannot have the specified substring
   * anywhere in the string.
   */
  not_contains?:
    | string
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: string[];
  /**
   * Email specifies that the field must be a valid email address as
   * defined by RFC 5322
   */
  email?:
    | boolean
    | undefined;
  /**
   * Hostname specifies that the field must be a valid hostname as
   * defined by RFC 1034. This constraint does not support
   * internationalized domain names (IDNs).
   */
  hostname?:
    | boolean
    | undefined;
  /**
   * Ip specifies that the field must be a valid IP (v4 or v6) address.
   * Valid IPv6 addresses should not include surrounding square brackets.
   */
  ip?:
    | boolean
    | undefined;
  /** Ipv4 specifies that the field must be a valid IPv4 address. */
  ipv4?:
    | boolean
    | undefined;
  /**
   * Ipv6 specifies that the field must be a valid IPv6 address. Valid
   * IPv6 addresses should not include surrounding square brackets.
   */
  ipv6?:
    | boolean
    | undefined;
  /**
   * Uri specifies that the field must be a valid, absolute URI as defined
   * by RFC 3986
   */
  uri?:
    | boolean
    | undefined;
  /**
   * UriRef specifies that the field must be a valid URI as defined by RFC
   * 3986 and may be relative or absolute.
   */
  uri_ref?:
    | boolean
    | undefined;
  /**
   * Address specifies that the field must be either a valid hostname as
   * defined by RFC 1034 (which does not support internationalized domain
   * names or IDNs), or it can be a valid IP (v4 or v6).
   */
  address?:
    | boolean
    | undefined;
  /**
   * Uuid specifies that the field must be a valid UUID as defined by
   * RFC 4122
   */
  uuid?:
    | boolean
    | undefined;
  /** WellKnownRegex specifies a common well known pattern defined as a regex. */
  well_known_regex?:
    | KnownRegex
    | undefined;
  /**
   * This applies to regexes HTTP_HEADER_NAME and HTTP_HEADER_VALUE to enable
   * strict header validation.
   * By default, this is true, and HTTP header validations are RFC-compliant.
   * Setting to false will enable a looser validations that only disallows
   * \r\n\0 characters, which can be used to bypass header matching rules.
   */
  strict?:
    | boolean
    | undefined;
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** BytesRules describe the constraints applied to `bytes` values */
export interface BytesRules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | Uint8Array
    | undefined;
  /** Len specifies that this field must be the specified number of bytes */
  len?:
    | number
    | undefined;
  /**
   * MinLen specifies that this field must be the specified number of bytes
   * at a minimum
   */
  min_len?:
    | number
    | undefined;
  /**
   * MaxLen specifies that this field must be the specified number of bytes
   * at a maximum
   */
  max_len?:
    | number
    | undefined;
  /**
   * Pattern specifies that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   */
  pattern?:
    | string
    | undefined;
  /**
   * Prefix specifies that this field must have the specified bytes at the
   * beginning of the string.
   */
  prefix?:
    | Uint8Array
    | undefined;
  /**
   * Suffix specifies that this field must have the specified bytes at the
   * end of the string.
   */
  suffix?:
    | Uint8Array
    | undefined;
  /**
   * Contains specifies that this field must have the specified bytes
   * anywhere in the string.
   */
  contains?:
    | Uint8Array
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Uint8Array[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: Uint8Array[];
  /**
   * Ip specifies that the field must be a valid IP (v4 or v6) address in
   * byte format
   */
  ip?:
    | boolean
    | undefined;
  /**
   * Ipv4 specifies that the field must be a valid IPv4 address in byte
   * format
   */
  ipv4?:
    | boolean
    | undefined;
  /**
   * Ipv6 specifies that the field must be a valid IPv6 address in byte
   * format
   */
  ipv6?:
    | boolean
    | undefined;
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** EnumRules describe the constraints applied to enum values */
export interface EnumRules {
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | number
    | undefined;
  /**
   * DefinedOnly specifies that this field must be only one of the defined
   * values for this enum, failing on any undefined value.
   */
  defined_only?:
    | boolean
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
}

/**
 * MessageRules describe the constraints applied to embedded message values.
 * For message-type fields, validation is performed recursively.
 */
export interface MessageRules {
  /**
   * Skip specifies that the validation rules of this field should not be
   * evaluated
   */
  skip?:
    | boolean
    | undefined;
  /** Required specifies that this field must be set */
  required?: boolean | undefined;
}

/** RepeatedRules describe the constraints applied to `repeated` values */
export interface RepeatedRules {
  /**
   * MinItems specifies that this field must have the specified number of
   * items at a minimum
   */
  min_items?:
    | number
    | undefined;
  /**
   * MaxItems specifies that this field must have the specified number of
   * items at a maximum
   */
  max_items?:
    | number
    | undefined;
  /**
   * Unique specifies that all elements in this field must be unique. This
   * constraint is only applicable to scalar and enum types (messages are not
   * supported).
   */
  unique?:
    | boolean
    | undefined;
  /**
   * Items specifies the constraints to be applied to each item in the field.
   * Repeated message fields will still execute validation against each item
   * unless skip is specified here.
   */
  items?:
    | FieldRules
    | undefined;
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/** MapRules describe the constraints applied to `map` values */
export interface MapRules {
  /**
   * MinPairs specifies that this field must have the specified number of
   * KVs at a minimum
   */
  min_pairs?:
    | number
    | undefined;
  /**
   * MaxPairs specifies that this field must have the specified number of
   * KVs at a maximum
   */
  max_pairs?:
    | number
    | undefined;
  /**
   * NoSparse specifies values in this field cannot be unset. This only
   * applies to map's with message value types.
   */
  no_sparse?:
    | boolean
    | undefined;
  /** Keys specifies the constraints to be applied to each key in the field. */
  keys?:
    | FieldRules
    | undefined;
  /**
   * Values specifies the constraints to be applied to the value of each key
   * in the field. Message values will still have their validations evaluated
   * unless skip is specified here.
   */
  values?:
    | FieldRules
    | undefined;
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignore_empty?: boolean | undefined;
}

/**
 * AnyRules describe constraints applied exclusively to the
 * `google.protobuf.Any` well-known type
 */
export interface AnyRules {
  /** Required specifies that this field must be set */
  required?:
    | boolean
    | undefined;
  /**
   * In specifies that this field's `type_url` must be equal to one of the
   * specified values.
   */
  in: string[];
  /**
   * NotIn specifies that this field's `type_url` must not be equal to any of
   * the specified values.
   */
  not_in: string[];
}

/**
 * DurationRules describe the constraints applied exclusively to the
 * `google.protobuf.Duration` well-known type
 */
export interface DurationRules {
  /** Required specifies that this field must be set */
  required?:
    | boolean
    | undefined;
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | Duration
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | Duration
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * inclusive
   */
  lte?:
    | Duration
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt?:
    | Duration
    | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte?:
    | Duration
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Duration[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: Duration[];
}

/**
 * TimestampRules describe the constraints applied exclusively to the
 * `google.protobuf.Timestamp` well-known type
 */
export interface TimestampRules {
  /** Required specifies that this field must be set */
  required?:
    | boolean
    | undefined;
  /** Const specifies that this field must be exactly the specified value */
  const?:
    | Date
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt?:
    | Date
    | undefined;
  /**
   * Lte specifies that this field must be less than the specified value,
   * inclusive
   */
  lte?:
    | Date
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt?:
    | Date
    | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte?:
    | Date
    | undefined;
  /**
   * LtNow specifies that this must be less than the current time. LtNow
   * can only be used with the Within rule.
   */
  lt_now?:
    | boolean
    | undefined;
  /**
   * GtNow specifies that this must be greater than the current time. GtNow
   * can only be used with the Within rule.
   */
  gt_now?:
    | boolean
    | undefined;
  /**
   * Within specifies that this field must be within this duration of the
   * current time. This constraint can be used alone or with the LtNow and
   * GtNow rules.
   */
  within?: Duration | undefined;
}

function createBaseFieldRules(): FieldRules {
  return {
    message: undefined,
    float: undefined,
    double: undefined,
    int32: undefined,
    int64: undefined,
    uint32: undefined,
    uint64: undefined,
    sint32: undefined,
    sint64: undefined,
    fixed32: undefined,
    fixed64: undefined,
    sfixed32: undefined,
    sfixed64: undefined,
    bool: undefined,
    string: undefined,
    bytes: undefined,
    enum: undefined,
    repeated: undefined,
    map: undefined,
    any: undefined,
    duration: undefined,
    timestamp: undefined,
  };
}

export const FieldRules = {
  encode(message: FieldRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      MessageRules.encode(message.message, writer.uint32(138).fork()).ldelim();
    }
    if (message.float !== undefined) {
      FloatRules.encode(message.float, writer.uint32(10).fork()).ldelim();
    }
    if (message.double !== undefined) {
      DoubleRules.encode(message.double, writer.uint32(18).fork()).ldelim();
    }
    if (message.int32 !== undefined) {
      Int32Rules.encode(message.int32, writer.uint32(26).fork()).ldelim();
    }
    if (message.int64 !== undefined) {
      Int64Rules.encode(message.int64, writer.uint32(34).fork()).ldelim();
    }
    if (message.uint32 !== undefined) {
      UInt32Rules.encode(message.uint32, writer.uint32(42).fork()).ldelim();
    }
    if (message.uint64 !== undefined) {
      UInt64Rules.encode(message.uint64, writer.uint32(50).fork()).ldelim();
    }
    if (message.sint32 !== undefined) {
      SInt32Rules.encode(message.sint32, writer.uint32(58).fork()).ldelim();
    }
    if (message.sint64 !== undefined) {
      SInt64Rules.encode(message.sint64, writer.uint32(66).fork()).ldelim();
    }
    if (message.fixed32 !== undefined) {
      Fixed32Rules.encode(message.fixed32, writer.uint32(74).fork()).ldelim();
    }
    if (message.fixed64 !== undefined) {
      Fixed64Rules.encode(message.fixed64, writer.uint32(82).fork()).ldelim();
    }
    if (message.sfixed32 !== undefined) {
      SFixed32Rules.encode(message.sfixed32, writer.uint32(90).fork()).ldelim();
    }
    if (message.sfixed64 !== undefined) {
      SFixed64Rules.encode(message.sfixed64, writer.uint32(98).fork()).ldelim();
    }
    if (message.bool !== undefined) {
      BoolRules.encode(message.bool, writer.uint32(106).fork()).ldelim();
    }
    if (message.string !== undefined) {
      StringRules.encode(message.string, writer.uint32(114).fork()).ldelim();
    }
    if (message.bytes !== undefined) {
      BytesRules.encode(message.bytes, writer.uint32(122).fork()).ldelim();
    }
    if (message.enum !== undefined) {
      EnumRules.encode(message.enum, writer.uint32(130).fork()).ldelim();
    }
    if (message.repeated !== undefined) {
      RepeatedRules.encode(message.repeated, writer.uint32(146).fork()).ldelim();
    }
    if (message.map !== undefined) {
      MapRules.encode(message.map, writer.uint32(154).fork()).ldelim();
    }
    if (message.any !== undefined) {
      AnyRules.encode(message.any, writer.uint32(162).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      DurationRules.encode(message.duration, writer.uint32(170).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      TimestampRules.encode(message.timestamp, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 17:
          if (tag !== 138) {
            break;
          }

          message.message = MessageRules.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.float = FloatRules.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.double = DoubleRules.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.int32 = Int32Rules.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.int64 = Int64Rules.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.uint32 = UInt32Rules.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.uint64 = UInt64Rules.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sint32 = SInt32Rules.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sint64 = SInt64Rules.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.fixed32 = Fixed32Rules.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.fixed64 = Fixed64Rules.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.sfixed32 = SFixed32Rules.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.sfixed64 = SFixed64Rules.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.bool = BoolRules.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.string = StringRules.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.bytes = BytesRules.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.enum = EnumRules.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.repeated = RepeatedRules.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.map = MapRules.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.any = AnyRules.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.duration = DurationRules.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.timestamp = TimestampRules.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldRules {
    return {
      message: isSet(object.message) ? MessageRules.fromJSON(object.message) : undefined,
      float: isSet(object.float) ? FloatRules.fromJSON(object.float) : undefined,
      double: isSet(object.double) ? DoubleRules.fromJSON(object.double) : undefined,
      int32: isSet(object.int32) ? Int32Rules.fromJSON(object.int32) : undefined,
      int64: isSet(object.int64) ? Int64Rules.fromJSON(object.int64) : undefined,
      uint32: isSet(object.uint32) ? UInt32Rules.fromJSON(object.uint32) : undefined,
      uint64: isSet(object.uint64) ? UInt64Rules.fromJSON(object.uint64) : undefined,
      sint32: isSet(object.sint32) ? SInt32Rules.fromJSON(object.sint32) : undefined,
      sint64: isSet(object.sint64) ? SInt64Rules.fromJSON(object.sint64) : undefined,
      fixed32: isSet(object.fixed32) ? Fixed32Rules.fromJSON(object.fixed32) : undefined,
      fixed64: isSet(object.fixed64) ? Fixed64Rules.fromJSON(object.fixed64) : undefined,
      sfixed32: isSet(object.sfixed32) ? SFixed32Rules.fromJSON(object.sfixed32) : undefined,
      sfixed64: isSet(object.sfixed64) ? SFixed64Rules.fromJSON(object.sfixed64) : undefined,
      bool: isSet(object.bool) ? BoolRules.fromJSON(object.bool) : undefined,
      string: isSet(object.string) ? StringRules.fromJSON(object.string) : undefined,
      bytes: isSet(object.bytes) ? BytesRules.fromJSON(object.bytes) : undefined,
      enum: isSet(object.enum) ? EnumRules.fromJSON(object.enum) : undefined,
      repeated: isSet(object.repeated) ? RepeatedRules.fromJSON(object.repeated) : undefined,
      map: isSet(object.map) ? MapRules.fromJSON(object.map) : undefined,
      any: isSet(object.any) ? AnyRules.fromJSON(object.any) : undefined,
      duration: isSet(object.duration) ? DurationRules.fromJSON(object.duration) : undefined,
      timestamp: isSet(object.timestamp) ? TimestampRules.fromJSON(object.timestamp) : undefined,
    };
  },

  toJSON(message: FieldRules): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = MessageRules.toJSON(message.message);
    }
    if (message.float !== undefined) {
      obj.float = FloatRules.toJSON(message.float);
    }
    if (message.double !== undefined) {
      obj.double = DoubleRules.toJSON(message.double);
    }
    if (message.int32 !== undefined) {
      obj.int32 = Int32Rules.toJSON(message.int32);
    }
    if (message.int64 !== undefined) {
      obj.int64 = Int64Rules.toJSON(message.int64);
    }
    if (message.uint32 !== undefined) {
      obj.uint32 = UInt32Rules.toJSON(message.uint32);
    }
    if (message.uint64 !== undefined) {
      obj.uint64 = UInt64Rules.toJSON(message.uint64);
    }
    if (message.sint32 !== undefined) {
      obj.sint32 = SInt32Rules.toJSON(message.sint32);
    }
    if (message.sint64 !== undefined) {
      obj.sint64 = SInt64Rules.toJSON(message.sint64);
    }
    if (message.fixed32 !== undefined) {
      obj.fixed32 = Fixed32Rules.toJSON(message.fixed32);
    }
    if (message.fixed64 !== undefined) {
      obj.fixed64 = Fixed64Rules.toJSON(message.fixed64);
    }
    if (message.sfixed32 !== undefined) {
      obj.sfixed32 = SFixed32Rules.toJSON(message.sfixed32);
    }
    if (message.sfixed64 !== undefined) {
      obj.sfixed64 = SFixed64Rules.toJSON(message.sfixed64);
    }
    if (message.bool !== undefined) {
      obj.bool = BoolRules.toJSON(message.bool);
    }
    if (message.string !== undefined) {
      obj.string = StringRules.toJSON(message.string);
    }
    if (message.bytes !== undefined) {
      obj.bytes = BytesRules.toJSON(message.bytes);
    }
    if (message.enum !== undefined) {
      obj.enum = EnumRules.toJSON(message.enum);
    }
    if (message.repeated !== undefined) {
      obj.repeated = RepeatedRules.toJSON(message.repeated);
    }
    if (message.map !== undefined) {
      obj.map = MapRules.toJSON(message.map);
    }
    if (message.any !== undefined) {
      obj.any = AnyRules.toJSON(message.any);
    }
    if (message.duration !== undefined) {
      obj.duration = DurationRules.toJSON(message.duration);
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = TimestampRules.toJSON(message.timestamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FieldRules>, I>>(base?: I): FieldRules {
    return FieldRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FieldRules>, I>>(object: I): FieldRules {
    const message = createBaseFieldRules();
    message.message = (object.message !== undefined && object.message !== null)
      ? MessageRules.fromPartial(object.message)
      : undefined;
    message.float = (object.float !== undefined && object.float !== null)
      ? FloatRules.fromPartial(object.float)
      : undefined;
    message.double = (object.double !== undefined && object.double !== null)
      ? DoubleRules.fromPartial(object.double)
      : undefined;
    message.int32 = (object.int32 !== undefined && object.int32 !== null)
      ? Int32Rules.fromPartial(object.int32)
      : undefined;
    message.int64 = (object.int64 !== undefined && object.int64 !== null)
      ? Int64Rules.fromPartial(object.int64)
      : undefined;
    message.uint32 = (object.uint32 !== undefined && object.uint32 !== null)
      ? UInt32Rules.fromPartial(object.uint32)
      : undefined;
    message.uint64 = (object.uint64 !== undefined && object.uint64 !== null)
      ? UInt64Rules.fromPartial(object.uint64)
      : undefined;
    message.sint32 = (object.sint32 !== undefined && object.sint32 !== null)
      ? SInt32Rules.fromPartial(object.sint32)
      : undefined;
    message.sint64 = (object.sint64 !== undefined && object.sint64 !== null)
      ? SInt64Rules.fromPartial(object.sint64)
      : undefined;
    message.fixed32 = (object.fixed32 !== undefined && object.fixed32 !== null)
      ? Fixed32Rules.fromPartial(object.fixed32)
      : undefined;
    message.fixed64 = (object.fixed64 !== undefined && object.fixed64 !== null)
      ? Fixed64Rules.fromPartial(object.fixed64)
      : undefined;
    message.sfixed32 = (object.sfixed32 !== undefined && object.sfixed32 !== null)
      ? SFixed32Rules.fromPartial(object.sfixed32)
      : undefined;
    message.sfixed64 = (object.sfixed64 !== undefined && object.sfixed64 !== null)
      ? SFixed64Rules.fromPartial(object.sfixed64)
      : undefined;
    message.bool = (object.bool !== undefined && object.bool !== null) ? BoolRules.fromPartial(object.bool) : undefined;
    message.string = (object.string !== undefined && object.string !== null)
      ? StringRules.fromPartial(object.string)
      : undefined;
    message.bytes = (object.bytes !== undefined && object.bytes !== null)
      ? BytesRules.fromPartial(object.bytes)
      : undefined;
    message.enum = (object.enum !== undefined && object.enum !== null) ? EnumRules.fromPartial(object.enum) : undefined;
    message.repeated = (object.repeated !== undefined && object.repeated !== null)
      ? RepeatedRules.fromPartial(object.repeated)
      : undefined;
    message.map = (object.map !== undefined && object.map !== null) ? MapRules.fromPartial(object.map) : undefined;
    message.any = (object.any !== undefined && object.any !== null) ? AnyRules.fromPartial(object.any) : undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? DurationRules.fromPartial(object.duration)
      : undefined;
    message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
      ? TimestampRules.fromPartial(object.timestamp)
      : undefined;
    return message;
  },
};

function createBaseFloatRules(): FloatRules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const FloatRules = {
  encode(message: FloatRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(13).float(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(21).float(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(29).float(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(37).float(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(45).float(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FloatRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.const = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.lt = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.lte = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.gt = reader.float();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.gte = reader.float();
          continue;
        case 6:
          if (tag === 53) {
            message.in.push(reader.float());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.float());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 61) {
            message.not_in.push(reader.float());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(reader.float());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FloatRules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: FloatRules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = message.const;
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = message.lt;
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = message.lte;
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = message.gt;
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = message.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in;
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FloatRules>, I>>(base?: I): FloatRules {
    return FloatRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FloatRules>, I>>(object: I): FloatRules {
    const message = createBaseFloatRules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseDoubleRules(): DoubleRules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const DoubleRules = {
  encode(message: DoubleRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(9).double(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(17).double(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(25).double(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(33).double(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(41).double(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.double(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.const = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.lt = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.lte = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.gt = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.gte = reader.double();
          continue;
        case 6:
          if (tag === 49) {
            message.in.push(reader.double());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.double());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 57) {
            message.not_in.push(reader.double());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(reader.double());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DoubleRules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: DoubleRules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = message.const;
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = message.lt;
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = message.lte;
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = message.gt;
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = message.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in;
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DoubleRules>, I>>(base?: I): DoubleRules {
    return DoubleRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DoubleRules>, I>>(object: I): DoubleRules {
    const message = createBaseDoubleRules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseInt32Rules(): Int32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const Int32Rules = {
  encode(message: Int32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(8).int32(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(16).int32(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(24).int32(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(32).int32(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(40).int32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int32Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lt = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lte = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gt = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gte = reader.int32();
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(reader.int32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int32());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.not_in.push(reader.int32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(reader.int32());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Int32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: Int32Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Int32Rules>, I>>(base?: I): Int32Rules {
    return Int32Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Int32Rules>, I>>(object: I): Int32Rules {
    const message = createBaseInt32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseInt64Rules(): Int64Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const Int64Rules = {
  encode(message: Int64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(8).int64(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(16).int64(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(24).int64(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(32).int64(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(40).int64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int64Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lt = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lte = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gt = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gte = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.not_in.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Int64Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: Int64Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Int64Rules>, I>>(base?: I): Int64Rules {
    return Int64Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Int64Rules>, I>>(object: I): Int64Rules {
    const message = createBaseInt64Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseUInt32Rules(): UInt32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const UInt32Rules = {
  encode(message: UInt32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(8).uint32(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(16).uint32(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(24).uint32(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(32).uint32(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(40).uint32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lt = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lte = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gt = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gte = reader.uint32();
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(reader.uint32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.uint32());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.not_in.push(reader.uint32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(reader.uint32());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UInt32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: UInt32Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UInt32Rules>, I>>(base?: I): UInt32Rules {
    return UInt32Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UInt32Rules>, I>>(object: I): UInt32Rules {
    const message = createBaseUInt32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseUInt64Rules(): UInt64Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const UInt64Rules = {
  encode(message: UInt64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(8).uint64(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(16).uint64(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(24).uint64(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(32).uint64(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(40).uint64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lte = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gt = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gte = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.not_in.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UInt64Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: UInt64Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UInt64Rules>, I>>(base?: I): UInt64Rules {
    return UInt64Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UInt64Rules>, I>>(object: I): UInt64Rules {
    const message = createBaseUInt64Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseSInt32Rules(): SInt32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const SInt32Rules = {
  encode(message: SInt32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(8).sint32(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(16).sint32(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(24).sint32(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(32).sint32(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(40).sint32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.sint32(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SInt32Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = reader.sint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lt = reader.sint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lte = reader.sint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gt = reader.sint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gte = reader.sint32();
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(reader.sint32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sint32());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.not_in.push(reader.sint32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(reader.sint32());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SInt32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: SInt32Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SInt32Rules>, I>>(base?: I): SInt32Rules {
    return SInt32Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SInt32Rules>, I>>(object: I): SInt32Rules {
    const message = createBaseSInt32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseSInt64Rules(): SInt64Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const SInt64Rules = {
  encode(message: SInt64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(8).sint64(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(16).sint64(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(24).sint64(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(32).sint64(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(40).sint64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.sint64(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SInt64Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = longToNumber(reader.sint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lt = longToNumber(reader.sint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lte = longToNumber(reader.sint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gt = longToNumber(reader.sint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gte = longToNumber(reader.sint64() as Long);
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(longToNumber(reader.sint64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToNumber(reader.sint64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.not_in.push(longToNumber(reader.sint64() as Long));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(longToNumber(reader.sint64() as Long));
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SInt64Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: SInt64Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SInt64Rules>, I>>(base?: I): SInt64Rules {
    return SInt64Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SInt64Rules>, I>>(object: I): SInt64Rules {
    const message = createBaseSInt64Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseFixed32Rules(): Fixed32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const Fixed32Rules = {
  encode(message: Fixed32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(13).fixed32(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(21).fixed32(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(29).fixed32(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(37).fixed32(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(45).fixed32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fixed32Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixed32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.const = reader.fixed32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.lt = reader.fixed32();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.lte = reader.fixed32();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.gt = reader.fixed32();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.gte = reader.fixed32();
          continue;
        case 6:
          if (tag === 53) {
            message.in.push(reader.fixed32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 61) {
            message.not_in.push(reader.fixed32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Fixed32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: Fixed32Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Fixed32Rules>, I>>(base?: I): Fixed32Rules {
    return Fixed32Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Fixed32Rules>, I>>(object: I): Fixed32Rules {
    const message = createBaseFixed32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseFixed64Rules(): Fixed64Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const Fixed64Rules = {
  encode(message: Fixed64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(9).fixed64(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(17).fixed64(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(25).fixed64(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(33).fixed64(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(41).fixed64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fixed64Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixed64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.const = longToNumber(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.lt = longToNumber(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.lte = longToNumber(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.gt = longToNumber(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.gte = longToNumber(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag === 49) {
            message.in.push(longToNumber(reader.fixed64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToNumber(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 57) {
            message.not_in.push(longToNumber(reader.fixed64() as Long));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(longToNumber(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Fixed64Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: Fixed64Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Fixed64Rules>, I>>(base?: I): Fixed64Rules {
    return Fixed64Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Fixed64Rules>, I>>(object: I): Fixed64Rules {
    const message = createBaseFixed64Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseSFixed32Rules(): SFixed32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const SFixed32Rules = {
  encode(message: SFixed32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(13).sfixed32(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(21).sfixed32(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(29).sfixed32(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(37).sfixed32(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(45).sfixed32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SFixed32Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSFixed32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.const = reader.sfixed32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.lt = reader.sfixed32();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.lte = reader.sfixed32();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.gt = reader.sfixed32();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.gte = reader.sfixed32();
          continue;
        case 6:
          if (tag === 53) {
            message.in.push(reader.sfixed32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sfixed32());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 61) {
            message.not_in.push(reader.sfixed32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(reader.sfixed32());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SFixed32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: SFixed32Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SFixed32Rules>, I>>(base?: I): SFixed32Rules {
    return SFixed32Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SFixed32Rules>, I>>(object: I): SFixed32Rules {
    const message = createBaseSFixed32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseSFixed64Rules(): SFixed64Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [], ignore_empty: false };
}

export const SFixed64Rules = {
  encode(message: SFixed64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(9).sfixed64(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      writer.uint32(17).sfixed64(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      writer.uint32(25).sfixed64(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      writer.uint32(33).sfixed64(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      writer.uint32(41).sfixed64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.not_in) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(64).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SFixed64Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSFixed64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.const = longToNumber(reader.sfixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.lt = longToNumber(reader.sfixed64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.lte = longToNumber(reader.sfixed64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.gt = longToNumber(reader.sfixed64() as Long);
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.gte = longToNumber(reader.sfixed64() as Long);
          continue;
        case 6:
          if (tag === 49) {
            message.in.push(longToNumber(reader.sfixed64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToNumber(reader.sfixed64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 57) {
            message.not_in.push(longToNumber(reader.sfixed64() as Long));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(longToNumber(reader.sfixed64() as Long));
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SFixed64Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: SFixed64Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== undefined && message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== undefined && message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== undefined && message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== undefined && message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SFixed64Rules>, I>>(base?: I): SFixed64Rules {
    return SFixed64Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SFixed64Rules>, I>>(object: I): SFixed64Rules {
    const message = createBaseSFixed64Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseBoolRules(): BoolRules {
  return { const: false };
}

export const BoolRules = {
  encode(message: BoolRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== false) {
      writer.uint32(8).bool(message.const);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoolRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BoolRules {
    return { const: isSet(object.const) ? globalThis.Boolean(object.const) : false };
  },

  toJSON(message: BoolRules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== false) {
      obj.const = message.const;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BoolRules>, I>>(base?: I): BoolRules {
    return BoolRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BoolRules>, I>>(object: I): BoolRules {
    const message = createBaseBoolRules();
    message.const = object.const ?? false;
    return message;
  },
};

function createBaseStringRules(): StringRules {
  return {
    const: "",
    len: 0,
    min_len: 0,
    max_len: 0,
    len_bytes: 0,
    min_bytes: 0,
    max_bytes: 0,
    pattern: "",
    prefix: "",
    suffix: "",
    contains: "",
    not_contains: "",
    in: [],
    not_in: [],
    email: undefined,
    hostname: undefined,
    ip: undefined,
    ipv4: undefined,
    ipv6: undefined,
    uri: undefined,
    uri_ref: undefined,
    address: undefined,
    uuid: undefined,
    well_known_regex: undefined,
    strict: true,
    ignore_empty: false,
  };
}

export const StringRules = {
  encode(message: StringRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== "") {
      writer.uint32(10).string(message.const);
    }
    if (message.len !== undefined && message.len !== 0) {
      writer.uint32(152).uint64(message.len);
    }
    if (message.min_len !== undefined && message.min_len !== 0) {
      writer.uint32(16).uint64(message.min_len);
    }
    if (message.max_len !== undefined && message.max_len !== 0) {
      writer.uint32(24).uint64(message.max_len);
    }
    if (message.len_bytes !== undefined && message.len_bytes !== 0) {
      writer.uint32(160).uint64(message.len_bytes);
    }
    if (message.min_bytes !== undefined && message.min_bytes !== 0) {
      writer.uint32(32).uint64(message.min_bytes);
    }
    if (message.max_bytes !== undefined && message.max_bytes !== 0) {
      writer.uint32(40).uint64(message.max_bytes);
    }
    if (message.pattern !== undefined && message.pattern !== "") {
      writer.uint32(50).string(message.pattern);
    }
    if (message.prefix !== undefined && message.prefix !== "") {
      writer.uint32(58).string(message.prefix);
    }
    if (message.suffix !== undefined && message.suffix !== "") {
      writer.uint32(66).string(message.suffix);
    }
    if (message.contains !== undefined && message.contains !== "") {
      writer.uint32(74).string(message.contains);
    }
    if (message.not_contains !== undefined && message.not_contains !== "") {
      writer.uint32(186).string(message.not_contains);
    }
    for (const v of message.in) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.not_in) {
      writer.uint32(90).string(v!);
    }
    if (message.email !== undefined) {
      writer.uint32(96).bool(message.email);
    }
    if (message.hostname !== undefined) {
      writer.uint32(104).bool(message.hostname);
    }
    if (message.ip !== undefined) {
      writer.uint32(112).bool(message.ip);
    }
    if (message.ipv4 !== undefined) {
      writer.uint32(120).bool(message.ipv4);
    }
    if (message.ipv6 !== undefined) {
      writer.uint32(128).bool(message.ipv6);
    }
    if (message.uri !== undefined) {
      writer.uint32(136).bool(message.uri);
    }
    if (message.uri_ref !== undefined) {
      writer.uint32(144).bool(message.uri_ref);
    }
    if (message.address !== undefined) {
      writer.uint32(168).bool(message.address);
    }
    if (message.uuid !== undefined) {
      writer.uint32(176).bool(message.uuid);
    }
    if (message.well_known_regex !== undefined) {
      writer.uint32(192).int32(message.well_known_regex);
    }
    if (message.strict !== undefined && message.strict !== true) {
      writer.uint32(200).bool(message.strict);
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(208).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.const = reader.string();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.len = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.min_len = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.max_len = longToNumber(reader.uint64() as Long);
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.len_bytes = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.min_bytes = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.max_bytes = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.pattern = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.prefix = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.suffix = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.contains = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.not_contains = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.in.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.not_in.push(reader.string());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.email = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.hostname = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.ip = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.ipv4 = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.ipv6 = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.uri = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.uri_ref = reader.bool();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.address = reader.bool();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.uuid = reader.bool();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.well_known_regex = reader.int32() as any;
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.strict = reader.bool();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringRules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : "",
      len: isSet(object.len) ? globalThis.Number(object.len) : 0,
      min_len: isSet(object.min_len) ? globalThis.Number(object.min_len) : 0,
      max_len: isSet(object.max_len) ? globalThis.Number(object.max_len) : 0,
      len_bytes: isSet(object.len_bytes) ? globalThis.Number(object.len_bytes) : 0,
      min_bytes: isSet(object.min_bytes) ? globalThis.Number(object.min_bytes) : 0,
      max_bytes: isSet(object.max_bytes) ? globalThis.Number(object.max_bytes) : 0,
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : "",
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : "",
      suffix: isSet(object.suffix) ? globalThis.String(object.suffix) : "",
      contains: isSet(object.contains) ? globalThis.String(object.contains) : "",
      not_contains: isSet(object.not_contains) ? globalThis.String(object.not_contains) : "",
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.String(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.String(e)) : [],
      email: isSet(object.email) ? globalThis.Boolean(object.email) : undefined,
      hostname: isSet(object.hostname) ? globalThis.Boolean(object.hostname) : undefined,
      ip: isSet(object.ip) ? globalThis.Boolean(object.ip) : undefined,
      ipv4: isSet(object.ipv4) ? globalThis.Boolean(object.ipv4) : undefined,
      ipv6: isSet(object.ipv6) ? globalThis.Boolean(object.ipv6) : undefined,
      uri: isSet(object.uri) ? globalThis.Boolean(object.uri) : undefined,
      uri_ref: isSet(object.uri_ref) ? globalThis.Boolean(object.uri_ref) : undefined,
      address: isSet(object.address) ? globalThis.Boolean(object.address) : undefined,
      uuid: isSet(object.uuid) ? globalThis.Boolean(object.uuid) : undefined,
      well_known_regex: isSet(object.well_known_regex) ? knownRegexFromJSON(object.well_known_regex) : undefined,
      strict: isSet(object.strict) ? globalThis.Boolean(object.strict) : true,
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: StringRules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== "") {
      obj.const = message.const;
    }
    if (message.len !== undefined && message.len !== 0) {
      obj.len = Math.round(message.len);
    }
    if (message.min_len !== undefined && message.min_len !== 0) {
      obj.min_len = Math.round(message.min_len);
    }
    if (message.max_len !== undefined && message.max_len !== 0) {
      obj.max_len = Math.round(message.max_len);
    }
    if (message.len_bytes !== undefined && message.len_bytes !== 0) {
      obj.len_bytes = Math.round(message.len_bytes);
    }
    if (message.min_bytes !== undefined && message.min_bytes !== 0) {
      obj.min_bytes = Math.round(message.min_bytes);
    }
    if (message.max_bytes !== undefined && message.max_bytes !== 0) {
      obj.max_bytes = Math.round(message.max_bytes);
    }
    if (message.pattern !== undefined && message.pattern !== "") {
      obj.pattern = message.pattern;
    }
    if (message.prefix !== undefined && message.prefix !== "") {
      obj.prefix = message.prefix;
    }
    if (message.suffix !== undefined && message.suffix !== "") {
      obj.suffix = message.suffix;
    }
    if (message.contains !== undefined && message.contains !== "") {
      obj.contains = message.contains;
    }
    if (message.not_contains !== undefined && message.not_contains !== "") {
      obj.not_contains = message.not_contains;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in;
    }
    if (message.email !== undefined) {
      obj.email = message.email;
    }
    if (message.hostname !== undefined) {
      obj.hostname = message.hostname;
    }
    if (message.ip !== undefined) {
      obj.ip = message.ip;
    }
    if (message.ipv4 !== undefined) {
      obj.ipv4 = message.ipv4;
    }
    if (message.ipv6 !== undefined) {
      obj.ipv6 = message.ipv6;
    }
    if (message.uri !== undefined) {
      obj.uri = message.uri;
    }
    if (message.uri_ref !== undefined) {
      obj.uri_ref = message.uri_ref;
    }
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    if (message.uuid !== undefined) {
      obj.uuid = message.uuid;
    }
    if (message.well_known_regex !== undefined) {
      obj.well_known_regex = knownRegexToJSON(message.well_known_regex);
    }
    if (message.strict !== undefined && message.strict !== true) {
      obj.strict = message.strict;
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StringRules>, I>>(base?: I): StringRules {
    return StringRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StringRules>, I>>(object: I): StringRules {
    const message = createBaseStringRules();
    message.const = object.const ?? "";
    message.len = object.len ?? 0;
    message.min_len = object.min_len ?? 0;
    message.max_len = object.max_len ?? 0;
    message.len_bytes = object.len_bytes ?? 0;
    message.min_bytes = object.min_bytes ?? 0;
    message.max_bytes = object.max_bytes ?? 0;
    message.pattern = object.pattern ?? "";
    message.prefix = object.prefix ?? "";
    message.suffix = object.suffix ?? "";
    message.contains = object.contains ?? "";
    message.not_contains = object.not_contains ?? "";
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.email = object.email ?? undefined;
    message.hostname = object.hostname ?? undefined;
    message.ip = object.ip ?? undefined;
    message.ipv4 = object.ipv4 ?? undefined;
    message.ipv6 = object.ipv6 ?? undefined;
    message.uri = object.uri ?? undefined;
    message.uri_ref = object.uri_ref ?? undefined;
    message.address = object.address ?? undefined;
    message.uuid = object.uuid ?? undefined;
    message.well_known_regex = object.well_known_regex ?? undefined;
    message.strict = object.strict ?? true;
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseBytesRules(): BytesRules {
  return {
    const: new Uint8Array(0),
    len: 0,
    min_len: 0,
    max_len: 0,
    pattern: "",
    prefix: new Uint8Array(0),
    suffix: new Uint8Array(0),
    contains: new Uint8Array(0),
    in: [],
    not_in: [],
    ip: undefined,
    ipv4: undefined,
    ipv6: undefined,
    ignore_empty: false,
  };
}

export const BytesRules = {
  encode(message: BytesRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const.length !== 0) {
      writer.uint32(10).bytes(message.const);
    }
    if (message.len !== undefined && message.len !== 0) {
      writer.uint32(104).uint64(message.len);
    }
    if (message.min_len !== undefined && message.min_len !== 0) {
      writer.uint32(16).uint64(message.min_len);
    }
    if (message.max_len !== undefined && message.max_len !== 0) {
      writer.uint32(24).uint64(message.max_len);
    }
    if (message.pattern !== undefined && message.pattern !== "") {
      writer.uint32(34).string(message.pattern);
    }
    if (message.prefix !== undefined && message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }
    if (message.suffix !== undefined && message.suffix.length !== 0) {
      writer.uint32(50).bytes(message.suffix);
    }
    if (message.contains !== undefined && message.contains.length !== 0) {
      writer.uint32(58).bytes(message.contains);
    }
    for (const v of message.in) {
      writer.uint32(66).bytes(v!);
    }
    for (const v of message.not_in) {
      writer.uint32(74).bytes(v!);
    }
    if (message.ip !== undefined) {
      writer.uint32(80).bool(message.ip);
    }
    if (message.ipv4 !== undefined) {
      writer.uint32(88).bool(message.ipv4);
    }
    if (message.ipv6 !== undefined) {
      writer.uint32(96).bool(message.ipv6);
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(112).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BytesRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.const = reader.bytes();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.len = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.min_len = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.max_len = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pattern = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.prefix = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.suffix = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.contains = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.in.push(reader.bytes());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.not_in.push(reader.bytes());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.ip = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.ipv4 = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.ipv6 = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesRules {
    return {
      const: isSet(object.const) ? bytesFromBase64(object.const) : new Uint8Array(0),
      len: isSet(object.len) ? globalThis.Number(object.len) : 0,
      min_len: isSet(object.min_len) ? globalThis.Number(object.min_len) : 0,
      max_len: isSet(object.max_len) ? globalThis.Number(object.max_len) : 0,
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : "",
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(0),
      suffix: isSet(object.suffix) ? bytesFromBase64(object.suffix) : new Uint8Array(0),
      contains: isSet(object.contains) ? bytesFromBase64(object.contains) : new Uint8Array(0),
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => bytesFromBase64(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => bytesFromBase64(e)) : [],
      ip: isSet(object.ip) ? globalThis.Boolean(object.ip) : undefined,
      ipv4: isSet(object.ipv4) ? globalThis.Boolean(object.ipv4) : undefined,
      ipv6: isSet(object.ipv6) ? globalThis.Boolean(object.ipv6) : undefined,
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: BytesRules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const.length !== 0) {
      obj.const = base64FromBytes(message.const);
    }
    if (message.len !== undefined && message.len !== 0) {
      obj.len = Math.round(message.len);
    }
    if (message.min_len !== undefined && message.min_len !== 0) {
      obj.min_len = Math.round(message.min_len);
    }
    if (message.max_len !== undefined && message.max_len !== 0) {
      obj.max_len = Math.round(message.max_len);
    }
    if (message.pattern !== undefined && message.pattern !== "") {
      obj.pattern = message.pattern;
    }
    if (message.prefix !== undefined && message.prefix.length !== 0) {
      obj.prefix = base64FromBytes(message.prefix);
    }
    if (message.suffix !== undefined && message.suffix.length !== 0) {
      obj.suffix = base64FromBytes(message.suffix);
    }
    if (message.contains !== undefined && message.contains.length !== 0) {
      obj.contains = base64FromBytes(message.contains);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => base64FromBytes(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => base64FromBytes(e));
    }
    if (message.ip !== undefined) {
      obj.ip = message.ip;
    }
    if (message.ipv4 !== undefined) {
      obj.ipv4 = message.ipv4;
    }
    if (message.ipv6 !== undefined) {
      obj.ipv6 = message.ipv6;
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BytesRules>, I>>(base?: I): BytesRules {
    return BytesRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BytesRules>, I>>(object: I): BytesRules {
    const message = createBaseBytesRules();
    message.const = object.const ?? new Uint8Array(0);
    message.len = object.len ?? 0;
    message.min_len = object.min_len ?? 0;
    message.max_len = object.max_len ?? 0;
    message.pattern = object.pattern ?? "";
    message.prefix = object.prefix ?? new Uint8Array(0);
    message.suffix = object.suffix ?? new Uint8Array(0);
    message.contains = object.contains ?? new Uint8Array(0);
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ip = object.ip ?? undefined;
    message.ipv4 = object.ipv4 ?? undefined;
    message.ipv6 = object.ipv6 ?? undefined;
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseEnumRules(): EnumRules {
  return { const: 0, defined_only: false, in: [], not_in: [] };
}

export const EnumRules = {
  encode(message: EnumRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== undefined && message.const !== 0) {
      writer.uint32(8).int32(message.const);
    }
    if (message.defined_only !== undefined && message.defined_only !== false) {
      writer.uint32(16).bool(message.defined_only);
    }
    writer.uint32(26).fork();
    for (const v of message.in) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.not_in) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.defined_only = reader.bool();
          continue;
        case 3:
          if (tag === 24) {
            message.in.push(reader.int32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag === 32) {
            message.not_in.push(reader.int32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.not_in.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumRules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      defined_only: isSet(object.defined_only) ? globalThis.Boolean(object.defined_only) : false,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.Number(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: EnumRules): unknown {
    const obj: any = {};
    if (message.const !== undefined && message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.defined_only !== undefined && message.defined_only !== false) {
      obj.defined_only = message.defined_only;
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnumRules>, I>>(base?: I): EnumRules {
    return EnumRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnumRules>, I>>(object: I): EnumRules {
    const message = createBaseEnumRules();
    message.const = object.const ?? 0;
    message.defined_only = object.defined_only ?? false;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseMessageRules(): MessageRules {
  return { skip: false, required: false };
}

export const MessageRules = {
  encode(message: MessageRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.skip !== undefined && message.skip !== false) {
      writer.uint32(8).bool(message.skip);
    }
    if (message.required !== undefined && message.required !== false) {
      writer.uint32(16).bool(message.required);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.skip = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.required = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageRules {
    return {
      skip: isSet(object.skip) ? globalThis.Boolean(object.skip) : false,
      required: isSet(object.required) ? globalThis.Boolean(object.required) : false,
    };
  },

  toJSON(message: MessageRules): unknown {
    const obj: any = {};
    if (message.skip !== undefined && message.skip !== false) {
      obj.skip = message.skip;
    }
    if (message.required !== undefined && message.required !== false) {
      obj.required = message.required;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageRules>, I>>(base?: I): MessageRules {
    return MessageRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MessageRules>, I>>(object: I): MessageRules {
    const message = createBaseMessageRules();
    message.skip = object.skip ?? false;
    message.required = object.required ?? false;
    return message;
  },
};

function createBaseRepeatedRules(): RepeatedRules {
  return { min_items: 0, max_items: 0, unique: false, items: undefined, ignore_empty: false };
}

export const RepeatedRules = {
  encode(message: RepeatedRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min_items !== undefined && message.min_items !== 0) {
      writer.uint32(8).uint64(message.min_items);
    }
    if (message.max_items !== undefined && message.max_items !== 0) {
      writer.uint32(16).uint64(message.max_items);
    }
    if (message.unique !== undefined && message.unique !== false) {
      writer.uint32(24).bool(message.unique);
    }
    if (message.items !== undefined) {
      FieldRules.encode(message.items, writer.uint32(34).fork()).ldelim();
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(40).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepeatedRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepeatedRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.min_items = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max_items = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.unique = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.items = FieldRules.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RepeatedRules {
    return {
      min_items: isSet(object.min_items) ? globalThis.Number(object.min_items) : 0,
      max_items: isSet(object.max_items) ? globalThis.Number(object.max_items) : 0,
      unique: isSet(object.unique) ? globalThis.Boolean(object.unique) : false,
      items: isSet(object.items) ? FieldRules.fromJSON(object.items) : undefined,
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: RepeatedRules): unknown {
    const obj: any = {};
    if (message.min_items !== undefined && message.min_items !== 0) {
      obj.min_items = Math.round(message.min_items);
    }
    if (message.max_items !== undefined && message.max_items !== 0) {
      obj.max_items = Math.round(message.max_items);
    }
    if (message.unique !== undefined && message.unique !== false) {
      obj.unique = message.unique;
    }
    if (message.items !== undefined) {
      obj.items = FieldRules.toJSON(message.items);
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RepeatedRules>, I>>(base?: I): RepeatedRules {
    return RepeatedRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RepeatedRules>, I>>(object: I): RepeatedRules {
    const message = createBaseRepeatedRules();
    message.min_items = object.min_items ?? 0;
    message.max_items = object.max_items ?? 0;
    message.unique = object.unique ?? false;
    message.items = (object.items !== undefined && object.items !== null)
      ? FieldRules.fromPartial(object.items)
      : undefined;
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseMapRules(): MapRules {
  return { min_pairs: 0, max_pairs: 0, no_sparse: false, keys: undefined, values: undefined, ignore_empty: false };
}

export const MapRules = {
  encode(message: MapRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min_pairs !== undefined && message.min_pairs !== 0) {
      writer.uint32(8).uint64(message.min_pairs);
    }
    if (message.max_pairs !== undefined && message.max_pairs !== 0) {
      writer.uint32(16).uint64(message.max_pairs);
    }
    if (message.no_sparse !== undefined && message.no_sparse !== false) {
      writer.uint32(24).bool(message.no_sparse);
    }
    if (message.keys !== undefined) {
      FieldRules.encode(message.keys, writer.uint32(34).fork()).ldelim();
    }
    if (message.values !== undefined) {
      FieldRules.encode(message.values, writer.uint32(42).fork()).ldelim();
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      writer.uint32(48).bool(message.ignore_empty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.min_pairs = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max_pairs = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.no_sparse = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.keys = FieldRules.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.values = FieldRules.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.ignore_empty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapRules {
    return {
      min_pairs: isSet(object.min_pairs) ? globalThis.Number(object.min_pairs) : 0,
      max_pairs: isSet(object.max_pairs) ? globalThis.Number(object.max_pairs) : 0,
      no_sparse: isSet(object.no_sparse) ? globalThis.Boolean(object.no_sparse) : false,
      keys: isSet(object.keys) ? FieldRules.fromJSON(object.keys) : undefined,
      values: isSet(object.values) ? FieldRules.fromJSON(object.values) : undefined,
      ignore_empty: isSet(object.ignore_empty) ? globalThis.Boolean(object.ignore_empty) : false,
    };
  },

  toJSON(message: MapRules): unknown {
    const obj: any = {};
    if (message.min_pairs !== undefined && message.min_pairs !== 0) {
      obj.min_pairs = Math.round(message.min_pairs);
    }
    if (message.max_pairs !== undefined && message.max_pairs !== 0) {
      obj.max_pairs = Math.round(message.max_pairs);
    }
    if (message.no_sparse !== undefined && message.no_sparse !== false) {
      obj.no_sparse = message.no_sparse;
    }
    if (message.keys !== undefined) {
      obj.keys = FieldRules.toJSON(message.keys);
    }
    if (message.values !== undefined) {
      obj.values = FieldRules.toJSON(message.values);
    }
    if (message.ignore_empty !== undefined && message.ignore_empty !== false) {
      obj.ignore_empty = message.ignore_empty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapRules>, I>>(base?: I): MapRules {
    return MapRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapRules>, I>>(object: I): MapRules {
    const message = createBaseMapRules();
    message.min_pairs = object.min_pairs ?? 0;
    message.max_pairs = object.max_pairs ?? 0;
    message.no_sparse = object.no_sparse ?? false;
    message.keys = (object.keys !== undefined && object.keys !== null)
      ? FieldRules.fromPartial(object.keys)
      : undefined;
    message.values = (object.values !== undefined && object.values !== null)
      ? FieldRules.fromPartial(object.values)
      : undefined;
    message.ignore_empty = object.ignore_empty ?? false;
    return message;
  },
};

function createBaseAnyRules(): AnyRules {
  return { required: false, in: [], not_in: [] };
}

export const AnyRules = {
  encode(message: AnyRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.required !== undefined && message.required !== false) {
      writer.uint32(8).bool(message.required);
    }
    for (const v of message.in) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.not_in) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnyRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.required = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.in.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.not_in.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnyRules {
    return {
      required: isSet(object.required) ? globalThis.Boolean(object.required) : false,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => globalThis.String(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: AnyRules): unknown {
    const obj: any = {};
    if (message.required !== undefined && message.required !== false) {
      obj.required = message.required;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnyRules>, I>>(base?: I): AnyRules {
    return AnyRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnyRules>, I>>(object: I): AnyRules {
    const message = createBaseAnyRules();
    message.required = object.required ?? false;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseDurationRules(): DurationRules {
  return {
    required: false,
    const: undefined,
    lt: undefined,
    lte: undefined,
    gt: undefined,
    gte: undefined,
    in: [],
    not_in: [],
  };
}

export const DurationRules = {
  encode(message: DurationRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.required !== undefined && message.required !== false) {
      writer.uint32(8).bool(message.required);
    }
    if (message.const !== undefined) {
      Duration.encode(message.const, writer.uint32(18).fork()).ldelim();
    }
    if (message.lt !== undefined) {
      Duration.encode(message.lt, writer.uint32(26).fork()).ldelim();
    }
    if (message.lte !== undefined) {
      Duration.encode(message.lte, writer.uint32(34).fork()).ldelim();
    }
    if (message.gt !== undefined) {
      Duration.encode(message.gt, writer.uint32(42).fork()).ldelim();
    }
    if (message.gte !== undefined) {
      Duration.encode(message.gte, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.in) {
      Duration.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.not_in) {
      Duration.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DurationRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDurationRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.required = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.const = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lt = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lte = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gt = Duration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.gte = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.in.push(Duration.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.not_in.push(Duration.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DurationRules {
    return {
      required: isSet(object.required) ? globalThis.Boolean(object.required) : false,
      const: isSet(object.const) ? Duration.fromJSON(object.const) : undefined,
      lt: isSet(object.lt) ? Duration.fromJSON(object.lt) : undefined,
      lte: isSet(object.lte) ? Duration.fromJSON(object.lte) : undefined,
      gt: isSet(object.gt) ? Duration.fromJSON(object.gt) : undefined,
      gte: isSet(object.gte) ? Duration.fromJSON(object.gte) : undefined,
      in: globalThis.Array.isArray(object?.in) ? object.in.map((e: any) => Duration.fromJSON(e)) : [],
      not_in: globalThis.Array.isArray(object?.not_in) ? object.not_in.map((e: any) => Duration.fromJSON(e)) : [],
    };
  },

  toJSON(message: DurationRules): unknown {
    const obj: any = {};
    if (message.required !== undefined && message.required !== false) {
      obj.required = message.required;
    }
    if (message.const !== undefined) {
      obj.const = Duration.toJSON(message.const);
    }
    if (message.lt !== undefined) {
      obj.lt = Duration.toJSON(message.lt);
    }
    if (message.lte !== undefined) {
      obj.lte = Duration.toJSON(message.lte);
    }
    if (message.gt !== undefined) {
      obj.gt = Duration.toJSON(message.gt);
    }
    if (message.gte !== undefined) {
      obj.gte = Duration.toJSON(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Duration.toJSON(e));
    }
    if (message.not_in?.length) {
      obj.not_in = message.not_in.map((e) => Duration.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DurationRules>, I>>(base?: I): DurationRules {
    return DurationRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DurationRules>, I>>(object: I): DurationRules {
    const message = createBaseDurationRules();
    message.required = object.required ?? false;
    message.const = (object.const !== undefined && object.const !== null)
      ? Duration.fromPartial(object.const)
      : undefined;
    message.lt = (object.lt !== undefined && object.lt !== null) ? Duration.fromPartial(object.lt) : undefined;
    message.lte = (object.lte !== undefined && object.lte !== null) ? Duration.fromPartial(object.lte) : undefined;
    message.gt = (object.gt !== undefined && object.gt !== null) ? Duration.fromPartial(object.gt) : undefined;
    message.gte = (object.gte !== undefined && object.gte !== null) ? Duration.fromPartial(object.gte) : undefined;
    message.in = object.in?.map((e) => Duration.fromPartial(e)) || [];
    message.not_in = object.not_in?.map((e) => Duration.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTimestampRules(): TimestampRules {
  return {
    required: false,
    const: undefined,
    lt: undefined,
    lte: undefined,
    gt: undefined,
    gte: undefined,
    lt_now: false,
    gt_now: false,
    within: undefined,
  };
}

export const TimestampRules = {
  encode(message: TimestampRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.required !== undefined && message.required !== false) {
      writer.uint32(8).bool(message.required);
    }
    if (message.const !== undefined) {
      Timestamp.encode(toTimestamp(message.const), writer.uint32(18).fork()).ldelim();
    }
    if (message.lt !== undefined) {
      Timestamp.encode(toTimestamp(message.lt), writer.uint32(26).fork()).ldelim();
    }
    if (message.lte !== undefined) {
      Timestamp.encode(toTimestamp(message.lte), writer.uint32(34).fork()).ldelim();
    }
    if (message.gt !== undefined) {
      Timestamp.encode(toTimestamp(message.gt), writer.uint32(42).fork()).ldelim();
    }
    if (message.gte !== undefined) {
      Timestamp.encode(toTimestamp(message.gte), writer.uint32(50).fork()).ldelim();
    }
    if (message.lt_now !== undefined && message.lt_now !== false) {
      writer.uint32(56).bool(message.lt_now);
    }
    if (message.gt_now !== undefined && message.gt_now !== false) {
      writer.uint32(64).bool(message.gt_now);
    }
    if (message.within !== undefined) {
      Duration.encode(message.within, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimestampRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.required = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.const = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lte = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.gte = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.lt_now = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.gt_now = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.within = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampRules {
    return {
      required: isSet(object.required) ? globalThis.Boolean(object.required) : false,
      const: isSet(object.const) ? fromJsonTimestamp(object.const) : undefined,
      lt: isSet(object.lt) ? fromJsonTimestamp(object.lt) : undefined,
      lte: isSet(object.lte) ? fromJsonTimestamp(object.lte) : undefined,
      gt: isSet(object.gt) ? fromJsonTimestamp(object.gt) : undefined,
      gte: isSet(object.gte) ? fromJsonTimestamp(object.gte) : undefined,
      lt_now: isSet(object.lt_now) ? globalThis.Boolean(object.lt_now) : false,
      gt_now: isSet(object.gt_now) ? globalThis.Boolean(object.gt_now) : false,
      within: isSet(object.within) ? Duration.fromJSON(object.within) : undefined,
    };
  },

  toJSON(message: TimestampRules): unknown {
    const obj: any = {};
    if (message.required !== undefined && message.required !== false) {
      obj.required = message.required;
    }
    if (message.const !== undefined) {
      obj.const = message.const.toISOString();
    }
    if (message.lt !== undefined) {
      obj.lt = message.lt.toISOString();
    }
    if (message.lte !== undefined) {
      obj.lte = message.lte.toISOString();
    }
    if (message.gt !== undefined) {
      obj.gt = message.gt.toISOString();
    }
    if (message.gte !== undefined) {
      obj.gte = message.gte.toISOString();
    }
    if (message.lt_now !== undefined && message.lt_now !== false) {
      obj.lt_now = message.lt_now;
    }
    if (message.gt_now !== undefined && message.gt_now !== false) {
      obj.gt_now = message.gt_now;
    }
    if (message.within !== undefined) {
      obj.within = Duration.toJSON(message.within);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimestampRules>, I>>(base?: I): TimestampRules {
    return TimestampRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimestampRules>, I>>(object: I): TimestampRules {
    const message = createBaseTimestampRules();
    message.required = object.required ?? false;
    message.const = object.const ?? undefined;
    message.lt = object.lt ?? undefined;
    message.lte = object.lte ?? undefined;
    message.gt = object.gt ?? undefined;
    message.gte = object.gte ?? undefined;
    message.lt_now = object.lt_now ?? false;
    message.gt_now = object.gt_now ?? false;
    message.within = (object.within !== undefined && object.within !== null)
      ? Duration.fromPartial(object.within)
      : undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
