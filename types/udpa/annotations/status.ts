/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "udpa.annotations";

export enum PackageVersionStatus {
  /** UNKNOWN - Unknown package version status. */
  UNKNOWN = 0,
  /** FROZEN - This version of the package is frozen. */
  FROZEN = 1,
  /** ACTIVE - This version of the package is the active development version. */
  ACTIVE = 2,
  /**
   * NEXT_MAJOR_VERSION_CANDIDATE - This version of the package is the candidate for the next major version. It
   * is typically machine generated from the active development version.
   */
  NEXT_MAJOR_VERSION_CANDIDATE = 3,
  UNRECOGNIZED = -1,
}

export function packageVersionStatusFromJSON(object: any): PackageVersionStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return PackageVersionStatus.UNKNOWN;
    case 1:
    case "FROZEN":
      return PackageVersionStatus.FROZEN;
    case 2:
    case "ACTIVE":
      return PackageVersionStatus.ACTIVE;
    case 3:
    case "NEXT_MAJOR_VERSION_CANDIDATE":
      return PackageVersionStatus.NEXT_MAJOR_VERSION_CANDIDATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PackageVersionStatus.UNRECOGNIZED;
  }
}

export function packageVersionStatusToJSON(object: PackageVersionStatus): string {
  switch (object) {
    case PackageVersionStatus.UNKNOWN:
      return "UNKNOWN";
    case PackageVersionStatus.FROZEN:
      return "FROZEN";
    case PackageVersionStatus.ACTIVE:
      return "ACTIVE";
    case PackageVersionStatus.NEXT_MAJOR_VERSION_CANDIDATE:
      return "NEXT_MAJOR_VERSION_CANDIDATE";
    case PackageVersionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface StatusAnnotation {
  /** The entity is work-in-progress and subject to breaking changes. */
  work_in_progress: boolean;
  /** The entity belongs to a package with the given version status. */
  package_version_status: PackageVersionStatus;
}

function createBaseStatusAnnotation(): StatusAnnotation {
  return { work_in_progress: false, package_version_status: 0 };
}

export const StatusAnnotation = {
  encode(message: StatusAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.work_in_progress === true) {
      writer.uint32(8).bool(message.work_in_progress);
    }
    if (message.package_version_status !== 0) {
      writer.uint32(16).int32(message.package_version_status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusAnnotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.work_in_progress = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.package_version_status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatusAnnotation {
    return {
      work_in_progress: isSet(object.work_in_progress) ? globalThis.Boolean(object.work_in_progress) : false,
      package_version_status: isSet(object.package_version_status)
        ? packageVersionStatusFromJSON(object.package_version_status)
        : 0,
    };
  },

  toJSON(message: StatusAnnotation): unknown {
    const obj: any = {};
    if (message.work_in_progress === true) {
      obj.work_in_progress = message.work_in_progress;
    }
    if (message.package_version_status !== 0) {
      obj.package_version_status = packageVersionStatusToJSON(message.package_version_status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatusAnnotation>, I>>(base?: I): StatusAnnotation {
    return StatusAnnotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatusAnnotation>, I>>(object: I): StatusAnnotation {
    const message = createBaseStatusAnnotation();
    message.work_in_progress = object.work_in_progress ?? false;
    message.package_version_status = object.package_version_status ?? 0;
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
