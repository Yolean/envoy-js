/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "envoy.type.v3";

/**
 * HTTP response codes supported in Envoy.
 * For more details: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
 */
export enum StatusCode {
  /**
   * Empty - Empty - This code not part of the HTTP status code specification, but it is needed for proto
   * `enum` type.
   */
  Empty = 0,
  Continue = 100,
  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  URITooLong = 414,
  UnsupportedMediaType = 415,
  RangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
  UNRECOGNIZED = -1,
}

export function statusCodeFromJSON(object: any): StatusCode {
  switch (object) {
    case 0:
    case "Empty":
      return StatusCode.Empty;
    case 100:
    case "Continue":
      return StatusCode.Continue;
    case 200:
    case "OK":
      return StatusCode.OK;
    case 201:
    case "Created":
      return StatusCode.Created;
    case 202:
    case "Accepted":
      return StatusCode.Accepted;
    case 203:
    case "NonAuthoritativeInformation":
      return StatusCode.NonAuthoritativeInformation;
    case 204:
    case "NoContent":
      return StatusCode.NoContent;
    case 205:
    case "ResetContent":
      return StatusCode.ResetContent;
    case 206:
    case "PartialContent":
      return StatusCode.PartialContent;
    case 207:
    case "MultiStatus":
      return StatusCode.MultiStatus;
    case 208:
    case "AlreadyReported":
      return StatusCode.AlreadyReported;
    case 226:
    case "IMUsed":
      return StatusCode.IMUsed;
    case 300:
    case "MultipleChoices":
      return StatusCode.MultipleChoices;
    case 301:
    case "MovedPermanently":
      return StatusCode.MovedPermanently;
    case 302:
    case "Found":
      return StatusCode.Found;
    case 303:
    case "SeeOther":
      return StatusCode.SeeOther;
    case 304:
    case "NotModified":
      return StatusCode.NotModified;
    case 305:
    case "UseProxy":
      return StatusCode.UseProxy;
    case 307:
    case "TemporaryRedirect":
      return StatusCode.TemporaryRedirect;
    case 308:
    case "PermanentRedirect":
      return StatusCode.PermanentRedirect;
    case 400:
    case "BadRequest":
      return StatusCode.BadRequest;
    case 401:
    case "Unauthorized":
      return StatusCode.Unauthorized;
    case 402:
    case "PaymentRequired":
      return StatusCode.PaymentRequired;
    case 403:
    case "Forbidden":
      return StatusCode.Forbidden;
    case 404:
    case "NotFound":
      return StatusCode.NotFound;
    case 405:
    case "MethodNotAllowed":
      return StatusCode.MethodNotAllowed;
    case 406:
    case "NotAcceptable":
      return StatusCode.NotAcceptable;
    case 407:
    case "ProxyAuthenticationRequired":
      return StatusCode.ProxyAuthenticationRequired;
    case 408:
    case "RequestTimeout":
      return StatusCode.RequestTimeout;
    case 409:
    case "Conflict":
      return StatusCode.Conflict;
    case 410:
    case "Gone":
      return StatusCode.Gone;
    case 411:
    case "LengthRequired":
      return StatusCode.LengthRequired;
    case 412:
    case "PreconditionFailed":
      return StatusCode.PreconditionFailed;
    case 413:
    case "PayloadTooLarge":
      return StatusCode.PayloadTooLarge;
    case 414:
    case "URITooLong":
      return StatusCode.URITooLong;
    case 415:
    case "UnsupportedMediaType":
      return StatusCode.UnsupportedMediaType;
    case 416:
    case "RangeNotSatisfiable":
      return StatusCode.RangeNotSatisfiable;
    case 417:
    case "ExpectationFailed":
      return StatusCode.ExpectationFailed;
    case 421:
    case "MisdirectedRequest":
      return StatusCode.MisdirectedRequest;
    case 422:
    case "UnprocessableEntity":
      return StatusCode.UnprocessableEntity;
    case 423:
    case "Locked":
      return StatusCode.Locked;
    case 424:
    case "FailedDependency":
      return StatusCode.FailedDependency;
    case 426:
    case "UpgradeRequired":
      return StatusCode.UpgradeRequired;
    case 428:
    case "PreconditionRequired":
      return StatusCode.PreconditionRequired;
    case 429:
    case "TooManyRequests":
      return StatusCode.TooManyRequests;
    case 431:
    case "RequestHeaderFieldsTooLarge":
      return StatusCode.RequestHeaderFieldsTooLarge;
    case 500:
    case "InternalServerError":
      return StatusCode.InternalServerError;
    case 501:
    case "NotImplemented":
      return StatusCode.NotImplemented;
    case 502:
    case "BadGateway":
      return StatusCode.BadGateway;
    case 503:
    case "ServiceUnavailable":
      return StatusCode.ServiceUnavailable;
    case 504:
    case "GatewayTimeout":
      return StatusCode.GatewayTimeout;
    case 505:
    case "HTTPVersionNotSupported":
      return StatusCode.HTTPVersionNotSupported;
    case 506:
    case "VariantAlsoNegotiates":
      return StatusCode.VariantAlsoNegotiates;
    case 507:
    case "InsufficientStorage":
      return StatusCode.InsufficientStorage;
    case 508:
    case "LoopDetected":
      return StatusCode.LoopDetected;
    case 510:
    case "NotExtended":
      return StatusCode.NotExtended;
    case 511:
    case "NetworkAuthenticationRequired":
      return StatusCode.NetworkAuthenticationRequired;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StatusCode.UNRECOGNIZED;
  }
}

export function statusCodeToJSON(object: StatusCode): string {
  switch (object) {
    case StatusCode.Empty:
      return "Empty";
    case StatusCode.Continue:
      return "Continue";
    case StatusCode.OK:
      return "OK";
    case StatusCode.Created:
      return "Created";
    case StatusCode.Accepted:
      return "Accepted";
    case StatusCode.NonAuthoritativeInformation:
      return "NonAuthoritativeInformation";
    case StatusCode.NoContent:
      return "NoContent";
    case StatusCode.ResetContent:
      return "ResetContent";
    case StatusCode.PartialContent:
      return "PartialContent";
    case StatusCode.MultiStatus:
      return "MultiStatus";
    case StatusCode.AlreadyReported:
      return "AlreadyReported";
    case StatusCode.IMUsed:
      return "IMUsed";
    case StatusCode.MultipleChoices:
      return "MultipleChoices";
    case StatusCode.MovedPermanently:
      return "MovedPermanently";
    case StatusCode.Found:
      return "Found";
    case StatusCode.SeeOther:
      return "SeeOther";
    case StatusCode.NotModified:
      return "NotModified";
    case StatusCode.UseProxy:
      return "UseProxy";
    case StatusCode.TemporaryRedirect:
      return "TemporaryRedirect";
    case StatusCode.PermanentRedirect:
      return "PermanentRedirect";
    case StatusCode.BadRequest:
      return "BadRequest";
    case StatusCode.Unauthorized:
      return "Unauthorized";
    case StatusCode.PaymentRequired:
      return "PaymentRequired";
    case StatusCode.Forbidden:
      return "Forbidden";
    case StatusCode.NotFound:
      return "NotFound";
    case StatusCode.MethodNotAllowed:
      return "MethodNotAllowed";
    case StatusCode.NotAcceptable:
      return "NotAcceptable";
    case StatusCode.ProxyAuthenticationRequired:
      return "ProxyAuthenticationRequired";
    case StatusCode.RequestTimeout:
      return "RequestTimeout";
    case StatusCode.Conflict:
      return "Conflict";
    case StatusCode.Gone:
      return "Gone";
    case StatusCode.LengthRequired:
      return "LengthRequired";
    case StatusCode.PreconditionFailed:
      return "PreconditionFailed";
    case StatusCode.PayloadTooLarge:
      return "PayloadTooLarge";
    case StatusCode.URITooLong:
      return "URITooLong";
    case StatusCode.UnsupportedMediaType:
      return "UnsupportedMediaType";
    case StatusCode.RangeNotSatisfiable:
      return "RangeNotSatisfiable";
    case StatusCode.ExpectationFailed:
      return "ExpectationFailed";
    case StatusCode.MisdirectedRequest:
      return "MisdirectedRequest";
    case StatusCode.UnprocessableEntity:
      return "UnprocessableEntity";
    case StatusCode.Locked:
      return "Locked";
    case StatusCode.FailedDependency:
      return "FailedDependency";
    case StatusCode.UpgradeRequired:
      return "UpgradeRequired";
    case StatusCode.PreconditionRequired:
      return "PreconditionRequired";
    case StatusCode.TooManyRequests:
      return "TooManyRequests";
    case StatusCode.RequestHeaderFieldsTooLarge:
      return "RequestHeaderFieldsTooLarge";
    case StatusCode.InternalServerError:
      return "InternalServerError";
    case StatusCode.NotImplemented:
      return "NotImplemented";
    case StatusCode.BadGateway:
      return "BadGateway";
    case StatusCode.ServiceUnavailable:
      return "ServiceUnavailable";
    case StatusCode.GatewayTimeout:
      return "GatewayTimeout";
    case StatusCode.HTTPVersionNotSupported:
      return "HTTPVersionNotSupported";
    case StatusCode.VariantAlsoNegotiates:
      return "VariantAlsoNegotiates";
    case StatusCode.InsufficientStorage:
      return "InsufficientStorage";
    case StatusCode.LoopDetected:
      return "LoopDetected";
    case StatusCode.NotExtended:
      return "NotExtended";
    case StatusCode.NetworkAuthenticationRequired:
      return "NetworkAuthenticationRequired";
    case StatusCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** HTTP status. */
export interface HttpStatus {
  /** Supplies HTTP response code. */
  code: StatusCode;
}

function createBaseHttpStatus(): HttpStatus {
  return { code: 0 };
}

export const HttpStatus = {
  encode(message: HttpStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpStatus {
    return { code: isSet(object.code) ? statusCodeFromJSON(object.code) : 0 };
  },

  toJSON(message: HttpStatus): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = statusCodeToJSON(message.code);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpStatus>, I>>(base?: I): HttpStatus {
    return HttpStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpStatus>, I>>(object: I): HttpStatus {
    const message = createBaseHttpStatus();
    message.code = object.code ?? 0;
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
