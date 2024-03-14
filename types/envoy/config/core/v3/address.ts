/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { BoolValue, UInt32Value } from "../../../../google/protobuf/wrappers";
import { TypedExtensionConfig } from "./extension";
import { SocketOption, SocketOptionsOverride } from "./socket_option";

export const protobufPackage = "envoy.config.core.v3";

export interface Pipe {
  /**
   * Unix Domain Socket path. On Linux, paths starting with '@' will use the
   * abstract namespace. The starting '@' is replaced by a null byte by Envoy.
   * Paths starting with '@' will result in an error in environments other than
   * Linux.
   */
  path: string;
  /** The mode for the Pipe. Not applicable for abstract sockets. */
  mode: number;
}

/**
 * The address represents an envoy internal listener.
 * [#comment: TODO(asraa): When address available, remove workaround from test/server/server_fuzz_test.cc:30.]
 */
export interface EnvoyInternalAddress {
  /**
   * Specifies the :ref:`name <envoy_v3_api_field_config.listener.v3.Listener.name>` of the
   * internal listener.
   */
  server_listener_name?:
    | string
    | undefined;
  /**
   * Specifies an endpoint identifier to distinguish between multiple endpoints for the same internal listener in a
   * single upstream pool. Only used in the upstream addresses for tracking changes to individual endpoints. This, for
   * example, may be set to the final destination IP for the target internal listener.
   */
  endpoint_id: string;
}

/** [#next-free-field: 7] */
export interface SocketAddress {
  protocol: SocketAddress_Protocol;
  /**
   * The address for this socket. :ref:`Listeners <config_listeners>` will bind
   * to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::``
   * to bind to any address. [#comment:TODO(zuercher) reinstate when implemented:
   * It is possible to distinguish a Listener address via the prefix/suffix matching
   * in :ref:`FilterChainMatch <envoy_v3_api_msg_config.listener.v3.FilterChainMatch>`.] When used
   * within an upstream :ref:`BindConfig <envoy_v3_api_msg_config.core.v3.BindConfig>`, the address
   * controls the source address of outbound connections. For :ref:`clusters
   * <envoy_v3_api_msg_config.cluster.v3.Cluster>`, the cluster type determines whether the
   * address must be an IP (``STATIC`` or ``EDS`` clusters) or a hostname resolved by DNS
   * (``STRICT_DNS`` or ``LOGICAL_DNS`` clusters). Address resolution can be customized
   * via :ref:`resolver_name <envoy_v3_api_field_config.core.v3.SocketAddress.resolver_name>`.
   */
  address: string;
  port_value?:
    | number
    | undefined;
  /**
   * This is only valid if :ref:`resolver_name
   * <envoy_v3_api_field_config.core.v3.SocketAddress.resolver_name>` is specified below and the
   * named resolver is capable of named port resolution.
   */
  named_port?:
    | string
    | undefined;
  /**
   * The name of the custom resolver. This must have been registered with Envoy. If
   * this is empty, a context dependent default applies. If the address is a concrete
   * IP address, no resolution will occur. If address is a hostname this
   * should be set for resolution other than DNS. Specifying a custom resolver with
   * ``STRICT_DNS`` or ``LOGICAL_DNS`` will generate an error at runtime.
   */
  resolver_name: string;
  /**
   * When binding to an IPv6 address above, this enables `IPv4 compatibility
   * <https://tools.ietf.org/html/rfc3493#page-11>`_. Binding to ``::`` will
   * allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into
   * IPv6 space as ``::FFFF:<IPv4-address>``.
   */
  ipv4_compat: boolean;
}

export enum SocketAddress_Protocol {
  TCP = 0,
  UDP = 1,
  UNRECOGNIZED = -1,
}

export function socketAddress_ProtocolFromJSON(object: any): SocketAddress_Protocol {
  switch (object) {
    case 0:
    case "TCP":
      return SocketAddress_Protocol.TCP;
    case 1:
    case "UDP":
      return SocketAddress_Protocol.UDP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SocketAddress_Protocol.UNRECOGNIZED;
  }
}

export function socketAddress_ProtocolToJSON(object: SocketAddress_Protocol): string {
  switch (object) {
    case SocketAddress_Protocol.TCP:
      return "TCP";
    case SocketAddress_Protocol.UDP:
      return "UDP";
    case SocketAddress_Protocol.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TcpKeepalive {
  /**
   * Maximum number of keepalive probes to send without response before deciding
   * the connection is dead. Default is to use the OS level configuration (unless
   * overridden, Linux defaults to 9.)
   */
  keepalive_probes:
    | number
    | undefined;
  /**
   * The number of seconds a connection needs to be idle before keep-alive probes
   * start being sent. Default is to use the OS level configuration (unless
   * overridden, Linux defaults to 7200s (i.e., 2 hours.)
   */
  keepalive_time:
    | number
    | undefined;
  /**
   * The number of seconds between keep-alive probes. Default is to use the OS
   * level configuration (unless overridden, Linux defaults to 75s.)
   */
  keepalive_interval: number | undefined;
}

export interface ExtraSourceAddress {
  /** The additional address to bind. */
  address:
    | SocketAddress
    | undefined;
  /**
   * Additional socket options that may not be present in Envoy source code or
   * precompiled binaries. If specified, this will override the
   * :ref:`socket_options <envoy_v3_api_field_config.core.v3.BindConfig.socket_options>`
   * in the BindConfig. If specified with no
   * :ref:`socket_options <envoy_v3_api_field_config.core.v3.SocketOptionsOverride.socket_options>`
   * or an empty list of :ref:`socket_options <envoy_v3_api_field_config.core.v3.SocketOptionsOverride.socket_options>`,
   * it means no socket option will apply.
   */
  socket_options: SocketOptionsOverride | undefined;
}

/** [#next-free-field: 7] */
export interface BindConfig {
  /** The address to bind to when creating a socket. */
  source_address:
    | SocketAddress
    | undefined;
  /**
   * Whether to set the ``IP_FREEBIND`` option when creating the socket. When this
   * flag is set to true, allows the :ref:`source_address
   * <envoy_v3_api_field_config.core.v3.BindConfig.source_address>` to be an IP address
   * that is not configured on the system running Envoy. When this flag is set
   * to false, the option ``IP_FREEBIND`` is disabled on the socket. When this
   * flag is not set (default), the socket is not modified, i.e. the option is
   * neither enabled nor disabled.
   */
  freebind:
    | boolean
    | undefined;
  /**
   * Additional socket options that may not be present in Envoy source code or
   * precompiled binaries.
   */
  socket_options: SocketOption[];
  /**
   * Extra source addresses appended to the address specified in the ``source_address``
   * field. This enables to specify multiple source addresses.
   * The source address selection is determined by :ref:`local_address_selector
   * <envoy_v3_api_field_config.core.v3.BindConfig.local_address_selector>`.
   */
  extra_source_addresses: ExtraSourceAddress[];
  /**
   * Deprecated by
   * :ref:`extra_source_addresses <envoy_v3_api_field_config.core.v3.BindConfig.extra_source_addresses>`
   *
   * @deprecated
   */
  additional_source_addresses: SocketAddress[];
  /**
   * Custom local address selector to override the default (i.e.
   * :ref:`DefaultLocalAddressSelector
   * <envoy_v3_api_msg_config.upstream.local_address_selector.v3.DefaultLocalAddressSelector>`).
   * [#extension-category: envoy.upstream.local_address_selector]
   */
  local_address_selector: TypedExtensionConfig | undefined;
}

/**
 * Addresses specify either a logical or physical address and port, which are
 * used to tell Envoy where to bind/listen, connect to upstream and find
 * management servers.
 */
export interface Address {
  socket_address?: SocketAddress | undefined;
  pipe?:
    | Pipe
    | undefined;
  /**
   * Specifies a user-space address handled by :ref:`internal listeners
   * <envoy_v3_api_field_config.listener.v3.Listener.internal_listener>`.
   */
  envoy_internal_address?: EnvoyInternalAddress | undefined;
}

/**
 * CidrRange specifies an IP Address and a prefix length to construct
 * the subnet mask for a `CIDR <https://tools.ietf.org/html/rfc4632>`_ range.
 */
export interface CidrRange {
  /** IPv4 or IPv6 address, e.g. ``192.0.0.0`` or ``2001:db8::``. */
  address_prefix: string;
  /** Length of prefix, e.g. 0, 32. Defaults to 0 when unset. */
  prefix_len: number | undefined;
}

function createBasePipe(): Pipe {
  return { path: "", mode: 0 };
}

export const Pipe = {
  encode(message: Pipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.mode !== 0) {
      writer.uint32(16).uint32(message.mode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pipe {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.mode = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pipe {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      mode: isSet(object.mode) ? globalThis.Number(object.mode) : 0,
    };
  },

  toJSON(message: Pipe): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.mode !== 0) {
      obj.mode = Math.round(message.mode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Pipe>, I>>(base?: I): Pipe {
    return Pipe.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Pipe>, I>>(object: I): Pipe {
    const message = createBasePipe();
    message.path = object.path ?? "";
    message.mode = object.mode ?? 0;
    return message;
  },
};

function createBaseEnvoyInternalAddress(): EnvoyInternalAddress {
  return { server_listener_name: undefined, endpoint_id: "" };
}

export const EnvoyInternalAddress = {
  encode(message: EnvoyInternalAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.server_listener_name !== undefined) {
      writer.uint32(10).string(message.server_listener_name);
    }
    if (message.endpoint_id !== "") {
      writer.uint32(18).string(message.endpoint_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnvoyInternalAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvoyInternalAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.server_listener_name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endpoint_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnvoyInternalAddress {
    return {
      server_listener_name: isSet(object.server_listener_name)
        ? globalThis.String(object.server_listener_name)
        : undefined,
      endpoint_id: isSet(object.endpoint_id) ? globalThis.String(object.endpoint_id) : "",
    };
  },

  toJSON(message: EnvoyInternalAddress): unknown {
    const obj: any = {};
    if (message.server_listener_name !== undefined) {
      obj.server_listener_name = message.server_listener_name;
    }
    if (message.endpoint_id !== "") {
      obj.endpoint_id = message.endpoint_id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnvoyInternalAddress>, I>>(base?: I): EnvoyInternalAddress {
    return EnvoyInternalAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnvoyInternalAddress>, I>>(object: I): EnvoyInternalAddress {
    const message = createBaseEnvoyInternalAddress();
    message.server_listener_name = object.server_listener_name ?? undefined;
    message.endpoint_id = object.endpoint_id ?? "";
    return message;
  },
};

function createBaseSocketAddress(): SocketAddress {
  return {
    protocol: 0,
    address: "",
    port_value: undefined,
    named_port: undefined,
    resolver_name: "",
    ipv4_compat: false,
  };
}

export const SocketAddress = {
  encode(message: SocketAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol !== 0) {
      writer.uint32(8).int32(message.protocol);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.port_value !== undefined) {
      writer.uint32(24).uint32(message.port_value);
    }
    if (message.named_port !== undefined) {
      writer.uint32(34).string(message.named_port);
    }
    if (message.resolver_name !== "") {
      writer.uint32(42).string(message.resolver_name);
    }
    if (message.ipv4_compat !== false) {
      writer.uint32(48).bool(message.ipv4_compat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SocketAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocketAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.protocol = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.port_value = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.named_port = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resolver_name = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.ipv4_compat = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SocketAddress {
    return {
      protocol: isSet(object.protocol) ? socketAddress_ProtocolFromJSON(object.protocol) : 0,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      port_value: isSet(object.port_value) ? globalThis.Number(object.port_value) : undefined,
      named_port: isSet(object.named_port) ? globalThis.String(object.named_port) : undefined,
      resolver_name: isSet(object.resolver_name) ? globalThis.String(object.resolver_name) : "",
      ipv4_compat: isSet(object.ipv4_compat) ? globalThis.Boolean(object.ipv4_compat) : false,
    };
  },

  toJSON(message: SocketAddress): unknown {
    const obj: any = {};
    if (message.protocol !== 0) {
      obj.protocol = socketAddress_ProtocolToJSON(message.protocol);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.port_value !== undefined) {
      obj.port_value = Math.round(message.port_value);
    }
    if (message.named_port !== undefined) {
      obj.named_port = message.named_port;
    }
    if (message.resolver_name !== "") {
      obj.resolver_name = message.resolver_name;
    }
    if (message.ipv4_compat !== false) {
      obj.ipv4_compat = message.ipv4_compat;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SocketAddress>, I>>(base?: I): SocketAddress {
    return SocketAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SocketAddress>, I>>(object: I): SocketAddress {
    const message = createBaseSocketAddress();
    message.protocol = object.protocol ?? 0;
    message.address = object.address ?? "";
    message.port_value = object.port_value ?? undefined;
    message.named_port = object.named_port ?? undefined;
    message.resolver_name = object.resolver_name ?? "";
    message.ipv4_compat = object.ipv4_compat ?? false;
    return message;
  },
};

function createBaseTcpKeepalive(): TcpKeepalive {
  return { keepalive_probes: undefined, keepalive_time: undefined, keepalive_interval: undefined };
}

export const TcpKeepalive = {
  encode(message: TcpKeepalive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keepalive_probes !== undefined) {
      UInt32Value.encode({ value: message.keepalive_probes! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.keepalive_time !== undefined) {
      UInt32Value.encode({ value: message.keepalive_time! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.keepalive_interval !== undefined) {
      UInt32Value.encode({ value: message.keepalive_interval! }, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TcpKeepalive {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTcpKeepalive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keepalive_probes = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keepalive_time = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.keepalive_interval = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TcpKeepalive {
    return {
      keepalive_probes: isSet(object.keepalive_probes) ? Number(object.keepalive_probes) : undefined,
      keepalive_time: isSet(object.keepalive_time) ? Number(object.keepalive_time) : undefined,
      keepalive_interval: isSet(object.keepalive_interval) ? Number(object.keepalive_interval) : undefined,
    };
  },

  toJSON(message: TcpKeepalive): unknown {
    const obj: any = {};
    if (message.keepalive_probes !== undefined) {
      obj.keepalive_probes = message.keepalive_probes;
    }
    if (message.keepalive_time !== undefined) {
      obj.keepalive_time = message.keepalive_time;
    }
    if (message.keepalive_interval !== undefined) {
      obj.keepalive_interval = message.keepalive_interval;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TcpKeepalive>, I>>(base?: I): TcpKeepalive {
    return TcpKeepalive.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TcpKeepalive>, I>>(object: I): TcpKeepalive {
    const message = createBaseTcpKeepalive();
    message.keepalive_probes = object.keepalive_probes ?? undefined;
    message.keepalive_time = object.keepalive_time ?? undefined;
    message.keepalive_interval = object.keepalive_interval ?? undefined;
    return message;
  },
};

function createBaseExtraSourceAddress(): ExtraSourceAddress {
  return { address: undefined, socket_options: undefined };
}

export const ExtraSourceAddress = {
  encode(message: ExtraSourceAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      SocketAddress.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.socket_options !== undefined) {
      SocketOptionsOverride.encode(message.socket_options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtraSourceAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtraSourceAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = SocketAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.socket_options = SocketOptionsOverride.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtraSourceAddress {
    return {
      address: isSet(object.address) ? SocketAddress.fromJSON(object.address) : undefined,
      socket_options: isSet(object.socket_options) ? SocketOptionsOverride.fromJSON(object.socket_options) : undefined,
    };
  },

  toJSON(message: ExtraSourceAddress): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = SocketAddress.toJSON(message.address);
    }
    if (message.socket_options !== undefined) {
      obj.socket_options = SocketOptionsOverride.toJSON(message.socket_options);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExtraSourceAddress>, I>>(base?: I): ExtraSourceAddress {
    return ExtraSourceAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExtraSourceAddress>, I>>(object: I): ExtraSourceAddress {
    const message = createBaseExtraSourceAddress();
    message.address = (object.address !== undefined && object.address !== null)
      ? SocketAddress.fromPartial(object.address)
      : undefined;
    message.socket_options = (object.socket_options !== undefined && object.socket_options !== null)
      ? SocketOptionsOverride.fromPartial(object.socket_options)
      : undefined;
    return message;
  },
};

function createBaseBindConfig(): BindConfig {
  return {
    source_address: undefined,
    freebind: undefined,
    socket_options: [],
    extra_source_addresses: [],
    additional_source_addresses: [],
    local_address_selector: undefined,
  };
}

export const BindConfig = {
  encode(message: BindConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source_address !== undefined) {
      SocketAddress.encode(message.source_address, writer.uint32(10).fork()).ldelim();
    }
    if (message.freebind !== undefined) {
      BoolValue.encode({ value: message.freebind! }, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.socket_options) {
      SocketOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.extra_source_addresses) {
      ExtraSourceAddress.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.additional_source_addresses) {
      SocketAddress.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.local_address_selector !== undefined) {
      TypedExtensionConfig.encode(message.local_address_selector, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BindConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source_address = SocketAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.freebind = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.socket_options.push(SocketOption.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.extra_source_addresses.push(ExtraSourceAddress.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.additional_source_addresses.push(SocketAddress.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.local_address_selector = TypedExtensionConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BindConfig {
    return {
      source_address: isSet(object.source_address) ? SocketAddress.fromJSON(object.source_address) : undefined,
      freebind: isSet(object.freebind) ? Boolean(object.freebind) : undefined,
      socket_options: globalThis.Array.isArray(object?.socket_options)
        ? object.socket_options.map((e: any) => SocketOption.fromJSON(e))
        : [],
      extra_source_addresses: globalThis.Array.isArray(object?.extra_source_addresses)
        ? object.extra_source_addresses.map((e: any) => ExtraSourceAddress.fromJSON(e))
        : [],
      additional_source_addresses: globalThis.Array.isArray(object?.additional_source_addresses)
        ? object.additional_source_addresses.map((e: any) => SocketAddress.fromJSON(e))
        : [],
      local_address_selector: isSet(object.local_address_selector)
        ? TypedExtensionConfig.fromJSON(object.local_address_selector)
        : undefined,
    };
  },

  toJSON(message: BindConfig): unknown {
    const obj: any = {};
    if (message.source_address !== undefined) {
      obj.source_address = SocketAddress.toJSON(message.source_address);
    }
    if (message.freebind !== undefined) {
      obj.freebind = message.freebind;
    }
    if (message.socket_options?.length) {
      obj.socket_options = message.socket_options.map((e) => SocketOption.toJSON(e));
    }
    if (message.extra_source_addresses?.length) {
      obj.extra_source_addresses = message.extra_source_addresses.map((e) => ExtraSourceAddress.toJSON(e));
    }
    if (message.additional_source_addresses?.length) {
      obj.additional_source_addresses = message.additional_source_addresses.map((e) => SocketAddress.toJSON(e));
    }
    if (message.local_address_selector !== undefined) {
      obj.local_address_selector = TypedExtensionConfig.toJSON(message.local_address_selector);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BindConfig>, I>>(base?: I): BindConfig {
    return BindConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BindConfig>, I>>(object: I): BindConfig {
    const message = createBaseBindConfig();
    message.source_address = (object.source_address !== undefined && object.source_address !== null)
      ? SocketAddress.fromPartial(object.source_address)
      : undefined;
    message.freebind = object.freebind ?? undefined;
    message.socket_options = object.socket_options?.map((e) => SocketOption.fromPartial(e)) || [];
    message.extra_source_addresses = object.extra_source_addresses?.map((e) => ExtraSourceAddress.fromPartial(e)) || [];
    message.additional_source_addresses =
      object.additional_source_addresses?.map((e) => SocketAddress.fromPartial(e)) || [];
    message.local_address_selector =
      (object.local_address_selector !== undefined && object.local_address_selector !== null)
        ? TypedExtensionConfig.fromPartial(object.local_address_selector)
        : undefined;
    return message;
  },
};

function createBaseAddress(): Address {
  return { socket_address: undefined, pipe: undefined, envoy_internal_address: undefined };
}

export const Address = {
  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.socket_address !== undefined) {
      SocketAddress.encode(message.socket_address, writer.uint32(10).fork()).ldelim();
    }
    if (message.pipe !== undefined) {
      Pipe.encode(message.pipe, writer.uint32(18).fork()).ldelim();
    }
    if (message.envoy_internal_address !== undefined) {
      EnvoyInternalAddress.encode(message.envoy_internal_address, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.socket_address = SocketAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pipe = Pipe.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.envoy_internal_address = EnvoyInternalAddress.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      socket_address: isSet(object.socket_address) ? SocketAddress.fromJSON(object.socket_address) : undefined,
      pipe: isSet(object.pipe) ? Pipe.fromJSON(object.pipe) : undefined,
      envoy_internal_address: isSet(object.envoy_internal_address)
        ? EnvoyInternalAddress.fromJSON(object.envoy_internal_address)
        : undefined,
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    if (message.socket_address !== undefined) {
      obj.socket_address = SocketAddress.toJSON(message.socket_address);
    }
    if (message.pipe !== undefined) {
      obj.pipe = Pipe.toJSON(message.pipe);
    }
    if (message.envoy_internal_address !== undefined) {
      obj.envoy_internal_address = EnvoyInternalAddress.toJSON(message.envoy_internal_address);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.socket_address = (object.socket_address !== undefined && object.socket_address !== null)
      ? SocketAddress.fromPartial(object.socket_address)
      : undefined;
    message.pipe = (object.pipe !== undefined && object.pipe !== null) ? Pipe.fromPartial(object.pipe) : undefined;
    message.envoy_internal_address =
      (object.envoy_internal_address !== undefined && object.envoy_internal_address !== null)
        ? EnvoyInternalAddress.fromPartial(object.envoy_internal_address)
        : undefined;
    return message;
  },
};

function createBaseCidrRange(): CidrRange {
  return { address_prefix: "", prefix_len: undefined };
}

export const CidrRange = {
  encode(message: CidrRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address_prefix !== "") {
      writer.uint32(10).string(message.address_prefix);
    }
    if (message.prefix_len !== undefined) {
      UInt32Value.encode({ value: message.prefix_len! }, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CidrRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCidrRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address_prefix = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prefix_len = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CidrRange {
    return {
      address_prefix: isSet(object.address_prefix) ? globalThis.String(object.address_prefix) : "",
      prefix_len: isSet(object.prefix_len) ? Number(object.prefix_len) : undefined,
    };
  },

  toJSON(message: CidrRange): unknown {
    const obj: any = {};
    if (message.address_prefix !== "") {
      obj.address_prefix = message.address_prefix;
    }
    if (message.prefix_len !== undefined) {
      obj.prefix_len = message.prefix_len;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CidrRange>, I>>(base?: I): CidrRange {
    return CidrRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CidrRange>, I>>(object: I): CidrRange {
    const message = createBaseCidrRange();
    message.address_prefix = object.address_prefix ?? "";
    message.prefix_len = object.prefix_len ?? undefined;
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
