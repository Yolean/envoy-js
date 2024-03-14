/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "google.protobuf";

/** The full set of known editions. */
export enum Edition {
  /** EDITION_UNKNOWN - A placeholder for an unknown edition value. */
  EDITION_UNKNOWN = 0,
  /**
   * EDITION_PROTO2 - Legacy syntax "editions".  These pre-date editions, but behave much like
   * distinct editions.  These can't be used to specify the edition of proto
   * files, but feature definitions must supply proto2/proto3 defaults for
   * backwards compatibility.
   */
  EDITION_PROTO2 = 998,
  EDITION_PROTO3 = 999,
  /**
   * EDITION_2023 - Editions that have been released.  The specific values are arbitrary and
   * should not be depended on, but they will always be time-ordered for easy
   * comparison.
   */
  EDITION_2023 = 1000,
  EDITION_2024 = 1001,
  /**
   * EDITION_1_TEST_ONLY - Placeholder editions for testing feature resolution.  These should not be
   * used or relyed on outside of tests.
   */
  EDITION_1_TEST_ONLY = 1,
  EDITION_2_TEST_ONLY = 2,
  EDITION_99997_TEST_ONLY = 99997,
  EDITION_99998_TEST_ONLY = 99998,
  EDITION_99999_TEST_ONLY = 99999,
  /**
   * EDITION_MAX - Placeholder for specifying unbounded edition support.  This should only
   * ever be used by plugins that can expect to never require any changes to
   * support a new edition.
   */
  EDITION_MAX = 2147483647,
  UNRECOGNIZED = -1,
}

export function editionFromJSON(object: any): Edition {
  switch (object) {
    case 0:
    case "EDITION_UNKNOWN":
      return Edition.EDITION_UNKNOWN;
    case 998:
    case "EDITION_PROTO2":
      return Edition.EDITION_PROTO2;
    case 999:
    case "EDITION_PROTO3":
      return Edition.EDITION_PROTO3;
    case 1000:
    case "EDITION_2023":
      return Edition.EDITION_2023;
    case 1001:
    case "EDITION_2024":
      return Edition.EDITION_2024;
    case 1:
    case "EDITION_1_TEST_ONLY":
      return Edition.EDITION_1_TEST_ONLY;
    case 2:
    case "EDITION_2_TEST_ONLY":
      return Edition.EDITION_2_TEST_ONLY;
    case 99997:
    case "EDITION_99997_TEST_ONLY":
      return Edition.EDITION_99997_TEST_ONLY;
    case 99998:
    case "EDITION_99998_TEST_ONLY":
      return Edition.EDITION_99998_TEST_ONLY;
    case 99999:
    case "EDITION_99999_TEST_ONLY":
      return Edition.EDITION_99999_TEST_ONLY;
    case 2147483647:
    case "EDITION_MAX":
      return Edition.EDITION_MAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Edition.UNRECOGNIZED;
  }
}

export function editionToJSON(object: Edition): string {
  switch (object) {
    case Edition.EDITION_UNKNOWN:
      return "EDITION_UNKNOWN";
    case Edition.EDITION_PROTO2:
      return "EDITION_PROTO2";
    case Edition.EDITION_PROTO3:
      return "EDITION_PROTO3";
    case Edition.EDITION_2023:
      return "EDITION_2023";
    case Edition.EDITION_2024:
      return "EDITION_2024";
    case Edition.EDITION_1_TEST_ONLY:
      return "EDITION_1_TEST_ONLY";
    case Edition.EDITION_2_TEST_ONLY:
      return "EDITION_2_TEST_ONLY";
    case Edition.EDITION_99997_TEST_ONLY:
      return "EDITION_99997_TEST_ONLY";
    case Edition.EDITION_99998_TEST_ONLY:
      return "EDITION_99998_TEST_ONLY";
    case Edition.EDITION_99999_TEST_ONLY:
      return "EDITION_99999_TEST_ONLY";
    case Edition.EDITION_MAX:
      return "EDITION_MAX";
    case Edition.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file: FileDescriptorProto[];
}

/** Describes a complete .proto file. */
export interface FileDescriptorProto {
  /** file name, relative to root of source tree */
  name?:
    | string
    | undefined;
  /** e.g. "foo", "foo.bar", etc. */
  package?:
    | string
    | undefined;
  /** Names of files imported by this file. */
  dependency: string[];
  /** Indexes of the public imported files in the dependency list above. */
  public_dependency: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weak_dependency: number[];
  /** All top-level definitions in this file. */
  message_type: DescriptorProto[];
  enum_type: EnumDescriptorProto[];
  service: ServiceDescriptorProto[];
  extension: FieldDescriptorProto[];
  options?:
    | FileOptions
    | undefined;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  source_code_info?:
    | SourceCodeInfo
    | undefined;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2", "proto3", and "editions".
   *
   * If `edition` is present, this value must be "editions".
   */
  syntax?:
    | string
    | undefined;
  /** The edition of the proto file. */
  edition?: Edition | undefined;
}

/** Describes a message type. */
export interface DescriptorProto {
  name?: string | undefined;
  field: FieldDescriptorProto[];
  extension: FieldDescriptorProto[];
  nested_type: DescriptorProto[];
  enum_type: EnumDescriptorProto[];
  extension_range: DescriptorProto_ExtensionRange[];
  oneof_decl: OneofDescriptorProto[];
  options?: MessageOptions | undefined;
  reserved_range: DescriptorProto_ReservedRange[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reserved_name: string[];
}

export interface DescriptorProto_ExtensionRange {
  /** Inclusive. */
  start?:
    | number
    | undefined;
  /** Exclusive. */
  end?: number | undefined;
  options?: ExtensionRangeOptions | undefined;
}

/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRange {
  /** Inclusive. */
  start?:
    | number
    | undefined;
  /** Exclusive. */
  end?: number | undefined;
}

export interface ExtensionRangeOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
  /**
   * For external users: DO NOT USE. We are in the process of open sourcing
   * extension declaration and executing internal cleanups before it can be
   * used externally.
   */
  declaration: ExtensionRangeOptions_Declaration[];
  /** Any features defined in the specific edition. */
  features?:
    | FeatureSet
    | undefined;
  /**
   * The verification state of the range.
   * TODO: flip the default to DECLARATION once all empty ranges
   * are marked as UNVERIFIED.
   */
  verification?: ExtensionRangeOptions_VerificationState | undefined;
}

/** The verification state of the extension range. */
export enum ExtensionRangeOptions_VerificationState {
  /** DECLARATION - All the extensions of the range must be declared. */
  DECLARATION = 0,
  UNVERIFIED = 1,
  UNRECOGNIZED = -1,
}

export function extensionRangeOptions_VerificationStateFromJSON(object: any): ExtensionRangeOptions_VerificationState {
  switch (object) {
    case 0:
    case "DECLARATION":
      return ExtensionRangeOptions_VerificationState.DECLARATION;
    case 1:
    case "UNVERIFIED":
      return ExtensionRangeOptions_VerificationState.UNVERIFIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExtensionRangeOptions_VerificationState.UNRECOGNIZED;
  }
}

export function extensionRangeOptions_VerificationStateToJSON(object: ExtensionRangeOptions_VerificationState): string {
  switch (object) {
    case ExtensionRangeOptions_VerificationState.DECLARATION:
      return "DECLARATION";
    case ExtensionRangeOptions_VerificationState.UNVERIFIED:
      return "UNVERIFIED";
    case ExtensionRangeOptions_VerificationState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ExtensionRangeOptions_Declaration {
  /** The extension number declared within the extension range. */
  number?:
    | number
    | undefined;
  /**
   * The fully-qualified name of the extension field. There must be a leading
   * dot in front of the full name.
   */
  full_name?:
    | string
    | undefined;
  /**
   * The fully-qualified type name of the extension field. Unlike
   * Metadata.type, Declaration.type must have a leading dot for messages
   * and enums.
   */
  type?:
    | string
    | undefined;
  /**
   * If true, indicates that the number is reserved in the extension range,
   * and any extension field with the number will fail to compile. Set this
   * when a declared extension field is deleted.
   */
  reserved?:
    | boolean
    | undefined;
  /**
   * If true, indicates that the extension must be defined as repeated.
   * Otherwise the extension must be defined as optional.
   */
  repeated?: boolean | undefined;
}

/** Describes a field within a message. */
export interface FieldDescriptorProto {
  name?: string | undefined;
  number?: number | undefined;
  label?:
    | FieldDescriptorProto_Label
    | undefined;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type?:
    | FieldDescriptorProto_Type
    | undefined;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  type_name?:
    | string
    | undefined;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee?:
    | string
    | undefined;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   */
  default_value?:
    | string
    | undefined;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneof_index?:
    | number
    | undefined;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  json_name?: string | undefined;
  options?:
    | FieldOptions
    | undefined;
  /**
   * If true, this is a proto3 "optional". When a proto3 field is optional, it
   * tracks presence regardless of field type.
   *
   * When proto3_optional is true, this field must belong to a oneof to signal
   * to old proto3 clients that presence is tracked for this field. This oneof
   * is known as a "synthetic" oneof, and this field must be its sole member
   * (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs
   * exist in the descriptor only, and do not generate any API. Synthetic oneofs
   * must be ordered after all "real" oneofs.
   *
   * For message fields, proto3_optional doesn't create any semantic change,
   * since non-repeated message fields always track presence. However it still
   * indicates the semantic detail of whether the user wrote "optional" or not.
   * This can be useful for round-tripping the .proto file. For consistency we
   * give message fields a synthetic oneof also, even though it is not required
   * to track presence. This is especially important because the parser can't
   * tell if a field is a message or an enum, so it must always create a
   * synthetic oneof.
   *
   * Proto2 optional fields do not set this flag, because they already indicate
   * optional with `LABEL_OPTIONAL`.
   */
  proto3_optional?: boolean | undefined;
}

export enum FieldDescriptorProto_Type {
  /**
   * TYPE_DOUBLE - 0 is reserved for errors.
   * Order is weird for historical reasons.
   */
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  /**
   * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * negative values are likely.
   */
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  /**
   * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * negative values are likely.
   */
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  /**
   * TYPE_GROUP - Tag-delimited aggregate.
   * Group type is deprecated and not supported after google.protobuf. However, Proto3
   * implementations should still be able to parse the group wire format and
   * treat group fields as unknown fields.  In Editions, the group wire format
   * can be enabled via the `message_encoding` feature.
   */
  TYPE_GROUP = 10,
  /** TYPE_MESSAGE - Length-delimited aggregate. */
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - New in version 2. */
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Uses ZigZag encoding. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Uses ZigZag encoding. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}

export function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}

export function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FieldDescriptorProto_Label {
  /** LABEL_OPTIONAL - 0 is reserved for errors */
  LABEL_OPTIONAL = 1,
  LABEL_REPEATED = 3,
  /**
   * LABEL_REQUIRED - The required label is only allowed in google.protobuf.  In proto3 and Editions
   * it's explicitly prohibited.  In Editions, the `field_presence` feature
   * can be used to get this behavior.
   */
  LABEL_REQUIRED = 2,
  UNRECOGNIZED = -1,
}

export function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}

export function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Describes a oneof. */
export interface OneofDescriptorProto {
  name?: string | undefined;
  options?: OneofOptions | undefined;
}

/** Describes an enum type. */
export interface EnumDescriptorProto {
  name?: string | undefined;
  value: EnumValueDescriptorProto[];
  options?:
    | EnumOptions
    | undefined;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reserved_range: EnumDescriptorProto_EnumReservedRange[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reserved_name: string[];
}

/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 *
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRange {
  /** Inclusive. */
  start?:
    | number
    | undefined;
  /** Inclusive. */
  end?: number | undefined;
}

/** Describes a value within an enum. */
export interface EnumValueDescriptorProto {
  name?: string | undefined;
  number?: number | undefined;
  options?: EnumValueOptions | undefined;
}

/** Describes a service. */
export interface ServiceDescriptorProto {
  name?: string | undefined;
  method: MethodDescriptorProto[];
  options?: ServiceOptions | undefined;
}

/** Describes a method of a service. */
export interface MethodDescriptorProto {
  name?:
    | string
    | undefined;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  input_type?: string | undefined;
  output_type?: string | undefined;
  options?:
    | MethodOptions
    | undefined;
  /** Identifies if client streams multiple client messages */
  client_streaming?:
    | boolean
    | undefined;
  /** Identifies if server streams multiple server messages */
  server_streaming?: boolean | undefined;
}

export interface FileOptions {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  java_package?:
    | string
    | undefined;
  /**
   * Controls the name of the wrapper Java class generated for the .proto file.
   * That class will always contain the .proto file's getDescriptor() method as
   * well as any top-level extensions defined in the .proto file.
   * If java_multiple_files is disabled, then all the other classes from the
   * .proto file will be nested inside the single wrapper outer class.
   */
  java_outer_classname?:
    | string
    | undefined;
  /**
   * If enabled, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the wrapper class
   * named by java_outer_classname.  However, the wrapper class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  java_multiple_files?:
    | boolean
    | undefined;
  /**
   * This option does nothing.
   *
   * @deprecated
   */
  java_generate_equals_and_hash?:
    | boolean
    | undefined;
  /**
   * If set true, then the Java2 code generator will generate code that
   * throws an exception whenever an attempt is made to assign a non-UTF-8
   * byte sequence to a string field.
   * Message reflection will do the same.
   * However, an extension field still accepts non-UTF-8 byte sequences.
   * This option has no effect on when used with the lite runtime.
   */
  java_string_check_utf8?: boolean | undefined;
  optimize_for?:
    | FileOptions_OptimizeMode
    | undefined;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  go_package?:
    | string
    | undefined;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   *
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  cc_generic_services?: boolean | undefined;
  java_generic_services?: boolean | undefined;
  py_generic_services?:
    | boolean
    | undefined;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated?:
    | boolean
    | undefined;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  cc_enable_arenas?:
    | boolean
    | undefined;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objc_class_prefix?:
    | string
    | undefined;
  /** Namespace for generated classes; defaults to the package. */
  csharp_namespace?:
    | string
    | undefined;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swift_prefix?:
    | string
    | undefined;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  php_class_prefix?:
    | string
    | undefined;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  php_namespace?:
    | string
    | undefined;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  php_metadata_namespace?:
    | string
    | undefined;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  ruby_package?:
    | string
    | undefined;
  /** Any features defined in the specific edition. */
  features?:
    | FeatureSet
    | undefined;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpreted_option: UninterpretedOption[];
}

/** Generated classes can be optimized for speed or code size. */
export enum FileOptions_OptimizeMode {
  /** SPEED - Generate complete code for parsing, serialization, */
  SPEED = 1,
  /** CODE_SIZE - etc. */
  CODE_SIZE = 2,
  /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
  LITE_RUNTIME = 3,
  UNRECOGNIZED = -1,
}

export function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}

export function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MessageOptions {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   *
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   *
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   *
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  message_set_wire_format?:
    | boolean
    | undefined;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  no_standard_descriptor_accessor?:
    | boolean
    | undefined;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated?:
    | boolean
    | undefined;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   *
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   *
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   *
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  map_entry?:
    | boolean
    | undefined;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   *
   * This should only be used as a temporary measure against broken builds due
   * to the change in behavior for JSON field name conflicts.
   *
   * TODO This is legacy behavior we plan to remove once downstream
   * teams have had time to migrate.
   *
   * @deprecated
   */
  deprecated_legacy_json_field_conflicts?:
    | boolean
    | undefined;
  /** Any features defined in the specific edition. */
  features?:
    | FeatureSet
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export interface FieldOptions {
  /**
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is only implemented to support use of
   * [ctype=CORD] and [ctype=STRING] (the default) on non-repeated fields of
   * type "bytes" in the open source release -- sorry, we'll try to include
   * other types in a future version!
   */
  ctype?:
    | FieldOptions_CType
    | undefined;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.  This option is prohibited in
   * Editions, but the `repeated_field_encoding` feature can be used to control
   * the behavior.
   */
  packed?:
    | boolean
    | undefined;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   *
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype?:
    | FieldOptions_JSType
    | undefined;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   *
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   *
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   *
   * Note that lazy message fields are still eagerly verified to check
   * ill-formed wireformat or missing required fields. Calling IsInitialized()
   * on the outer message would fail if the inner message has missing required
   * fields. Failed verification would result in parsing failure (except when
   * uninitialized messages are acceptable).
   */
  lazy?:
    | boolean
    | undefined;
  /**
   * unverified_lazy does no correctness checks on the byte stream. This should
   * only be used where lazy with verification is prohibitive for performance
   * reasons.
   */
  unverified_lazy?:
    | boolean
    | undefined;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated?:
    | boolean
    | undefined;
  /** For Google-internal migration only. Do not use. */
  weak?:
    | boolean
    | undefined;
  /**
   * Indicate that the field value should not be printed out when using debug
   * formats, e.g. when the field contains sensitive credentials.
   */
  debug_redact?: boolean | undefined;
  retention?: FieldOptions_OptionRetention | undefined;
  targets: FieldOptions_OptionTargetType[];
  edition_defaults: FieldOptions_EditionDefault[];
  /** Any features defined in the specific edition. */
  features?:
    | FeatureSet
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export enum FieldOptions_CType {
  /** STRING - Default mode. */
  STRING = 0,
  /**
   * CORD - The option [ctype=CORD] may be applied to a non-repeated field of type
   * "bytes". It indicates that in C++, the data should be stored in a Cord
   * instead of a string.  For very large strings, this may reduce memory
   * fragmentation. It may also allow better performance when parsing from a
   * Cord, or when parsing with aliasing enabled, as the parsed Cord may then
   * alias the original buffer.
   */
  CORD = 1,
  STRING_PIECE = 2,
  UNRECOGNIZED = -1,
}

export function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}

export function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FieldOptions_JSType {
  /** JS_NORMAL - Use the default type. */
  JS_NORMAL = 0,
  /** JS_STRING - Use JavaScript strings. */
  JS_STRING = 1,
  /** JS_NUMBER - Use JavaScript numbers. */
  JS_NUMBER = 2,
  UNRECOGNIZED = -1,
}

export function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}

export function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 */
export enum FieldOptions_OptionRetention {
  RETENTION_UNKNOWN = 0,
  RETENTION_RUNTIME = 1,
  RETENTION_SOURCE = 2,
  UNRECOGNIZED = -1,
}

export function fieldOptions_OptionRetentionFromJSON(object: any): FieldOptions_OptionRetention {
  switch (object) {
    case 0:
    case "RETENTION_UNKNOWN":
      return FieldOptions_OptionRetention.RETENTION_UNKNOWN;
    case 1:
    case "RETENTION_RUNTIME":
      return FieldOptions_OptionRetention.RETENTION_RUNTIME;
    case 2:
    case "RETENTION_SOURCE":
      return FieldOptions_OptionRetention.RETENTION_SOURCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_OptionRetention.UNRECOGNIZED;
  }
}

export function fieldOptions_OptionRetentionToJSON(object: FieldOptions_OptionRetention): string {
  switch (object) {
    case FieldOptions_OptionRetention.RETENTION_UNKNOWN:
      return "RETENTION_UNKNOWN";
    case FieldOptions_OptionRetention.RETENTION_RUNTIME:
      return "RETENTION_RUNTIME";
    case FieldOptions_OptionRetention.RETENTION_SOURCE:
      return "RETENTION_SOURCE";
    case FieldOptions_OptionRetention.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 */
export enum FieldOptions_OptionTargetType {
  TARGET_TYPE_UNKNOWN = 0,
  TARGET_TYPE_FILE = 1,
  TARGET_TYPE_EXTENSION_RANGE = 2,
  TARGET_TYPE_MESSAGE = 3,
  TARGET_TYPE_FIELD = 4,
  TARGET_TYPE_ONEOF = 5,
  TARGET_TYPE_ENUM = 6,
  TARGET_TYPE_ENUM_ENTRY = 7,
  TARGET_TYPE_SERVICE = 8,
  TARGET_TYPE_METHOD = 9,
  UNRECOGNIZED = -1,
}

export function fieldOptions_OptionTargetTypeFromJSON(object: any): FieldOptions_OptionTargetType {
  switch (object) {
    case 0:
    case "TARGET_TYPE_UNKNOWN":
      return FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN;
    case 1:
    case "TARGET_TYPE_FILE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FILE;
    case 2:
    case "TARGET_TYPE_EXTENSION_RANGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE;
    case 3:
    case "TARGET_TYPE_MESSAGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE;
    case 4:
    case "TARGET_TYPE_FIELD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FIELD;
    case 5:
    case "TARGET_TYPE_ONEOF":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF;
    case 6:
    case "TARGET_TYPE_ENUM":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM;
    case 7:
    case "TARGET_TYPE_ENUM_ENTRY":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY;
    case 8:
    case "TARGET_TYPE_SERVICE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE;
    case 9:
    case "TARGET_TYPE_METHOD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_METHOD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_OptionTargetType.UNRECOGNIZED;
  }
}

export function fieldOptions_OptionTargetTypeToJSON(object: FieldOptions_OptionTargetType): string {
  switch (object) {
    case FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN:
      return "TARGET_TYPE_UNKNOWN";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FILE:
      return "TARGET_TYPE_FILE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE:
      return "TARGET_TYPE_EXTENSION_RANGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE:
      return "TARGET_TYPE_MESSAGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FIELD:
      return "TARGET_TYPE_FIELD";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF:
      return "TARGET_TYPE_ONEOF";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM:
      return "TARGET_TYPE_ENUM";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY:
      return "TARGET_TYPE_ENUM_ENTRY";
    case FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE:
      return "TARGET_TYPE_SERVICE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_METHOD:
      return "TARGET_TYPE_METHOD";
    case FieldOptions_OptionTargetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface FieldOptions_EditionDefault {
  edition?:
    | Edition
    | undefined;
  /** Textproto value. */
  value?: string | undefined;
}

export interface OneofOptions {
  /** Any features defined in the specific edition. */
  features?:
    | FeatureSet
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export interface EnumOptions {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allow_alias?:
    | boolean
    | undefined;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated?:
    | boolean
    | undefined;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   * TODO Remove this legacy behavior once downstream teams have
   * had time to migrate.
   *
   * @deprecated
   */
  deprecated_legacy_json_field_conflicts?:
    | boolean
    | undefined;
  /** Any features defined in the specific edition. */
  features?:
    | FeatureSet
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export interface EnumValueOptions {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated?:
    | boolean
    | undefined;
  /** Any features defined in the specific edition. */
  features?:
    | FeatureSet
    | undefined;
  /**
   * Indicate that fields annotated with this enum value should not be printed
   * out when using debug formats, e.g. when the field contains sensitive
   * credentials.
   */
  debug_redact?:
    | boolean
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export interface ServiceOptions {
  /** Any features defined in the specific edition. */
  features?:
    | FeatureSet
    | undefined;
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated?:
    | boolean
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export interface MethodOptions {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated?: boolean | undefined;
  idempotency_level?:
    | MethodOptions_IdempotencyLevel
    | undefined;
  /** Any features defined in the specific edition. */
  features?:
    | FeatureSet
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  /** NO_SIDE_EFFECTS - implies idempotent */
  NO_SIDE_EFFECTS = 1,
  /** IDEMPOTENT - idempotent, but may have side effects */
  IDEMPOTENT = 2,
  UNRECOGNIZED = -1,
}

export function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}

export function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifier_value?: string | undefined;
  positive_int_value?: number | undefined;
  negative_int_value?: number | undefined;
  double_value?: number | undefined;
  string_value?: Uint8Array | undefined;
  aggregate_value?: string | undefined;
}

/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 */
export interface UninterpretedOption_NamePart {
  name_part: string;
  is_extension: boolean;
}

/**
 * TODO Enums in C++ gencode (and potentially other languages) are
 * not well scoped.  This means that each of the feature enums below can clash
 * with each other.  The short names we've chosen maximize call-site
 * readability, but leave us very open to this scenario.  A future feature will
 * be designed and implemented to handle this, hopefully before we ever hit a
 * conflict here.
 */
export interface FeatureSet {
  field_presence?: FeatureSet_FieldPresence | undefined;
  enum_type?: FeatureSet_EnumType | undefined;
  repeated_field_encoding?: FeatureSet_RepeatedFieldEncoding | undefined;
  utf8_validation?: FeatureSet_Utf8Validation | undefined;
  message_encoding?: FeatureSet_MessageEncoding | undefined;
  json_format?: FeatureSet_JsonFormat | undefined;
}

export enum FeatureSet_FieldPresence {
  FIELD_PRESENCE_UNKNOWN = 0,
  EXPLICIT = 1,
  IMPLICIT = 2,
  LEGACY_REQUIRED = 3,
  UNRECOGNIZED = -1,
}

export function featureSet_FieldPresenceFromJSON(object: any): FeatureSet_FieldPresence {
  switch (object) {
    case 0:
    case "FIELD_PRESENCE_UNKNOWN":
      return FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN;
    case 1:
    case "EXPLICIT":
      return FeatureSet_FieldPresence.EXPLICIT;
    case 2:
    case "IMPLICIT":
      return FeatureSet_FieldPresence.IMPLICIT;
    case 3:
    case "LEGACY_REQUIRED":
      return FeatureSet_FieldPresence.LEGACY_REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_FieldPresence.UNRECOGNIZED;
  }
}

export function featureSet_FieldPresenceToJSON(object: FeatureSet_FieldPresence): string {
  switch (object) {
    case FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN:
      return "FIELD_PRESENCE_UNKNOWN";
    case FeatureSet_FieldPresence.EXPLICIT:
      return "EXPLICIT";
    case FeatureSet_FieldPresence.IMPLICIT:
      return "IMPLICIT";
    case FeatureSet_FieldPresence.LEGACY_REQUIRED:
      return "LEGACY_REQUIRED";
    case FeatureSet_FieldPresence.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FeatureSet_EnumType {
  ENUM_TYPE_UNKNOWN = 0,
  OPEN = 1,
  CLOSED = 2,
  UNRECOGNIZED = -1,
}

export function featureSet_EnumTypeFromJSON(object: any): FeatureSet_EnumType {
  switch (object) {
    case 0:
    case "ENUM_TYPE_UNKNOWN":
      return FeatureSet_EnumType.ENUM_TYPE_UNKNOWN;
    case 1:
    case "OPEN":
      return FeatureSet_EnumType.OPEN;
    case 2:
    case "CLOSED":
      return FeatureSet_EnumType.CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_EnumType.UNRECOGNIZED;
  }
}

export function featureSet_EnumTypeToJSON(object: FeatureSet_EnumType): string {
  switch (object) {
    case FeatureSet_EnumType.ENUM_TYPE_UNKNOWN:
      return "ENUM_TYPE_UNKNOWN";
    case FeatureSet_EnumType.OPEN:
      return "OPEN";
    case FeatureSet_EnumType.CLOSED:
      return "CLOSED";
    case FeatureSet_EnumType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FeatureSet_RepeatedFieldEncoding {
  REPEATED_FIELD_ENCODING_UNKNOWN = 0,
  PACKED = 1,
  EXPANDED = 2,
  UNRECOGNIZED = -1,
}

export function featureSet_RepeatedFieldEncodingFromJSON(object: any): FeatureSet_RepeatedFieldEncoding {
  switch (object) {
    case 0:
    case "REPEATED_FIELD_ENCODING_UNKNOWN":
      return FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN;
    case 1:
    case "PACKED":
      return FeatureSet_RepeatedFieldEncoding.PACKED;
    case 2:
    case "EXPANDED":
      return FeatureSet_RepeatedFieldEncoding.EXPANDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED;
  }
}

export function featureSet_RepeatedFieldEncodingToJSON(object: FeatureSet_RepeatedFieldEncoding): string {
  switch (object) {
    case FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN:
      return "REPEATED_FIELD_ENCODING_UNKNOWN";
    case FeatureSet_RepeatedFieldEncoding.PACKED:
      return "PACKED";
    case FeatureSet_RepeatedFieldEncoding.EXPANDED:
      return "EXPANDED";
    case FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FeatureSet_Utf8Validation {
  UTF8_VALIDATION_UNKNOWN = 0,
  VERIFY = 2,
  NONE = 3,
  UNRECOGNIZED = -1,
}

export function featureSet_Utf8ValidationFromJSON(object: any): FeatureSet_Utf8Validation {
  switch (object) {
    case 0:
    case "UTF8_VALIDATION_UNKNOWN":
      return FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN;
    case 2:
    case "VERIFY":
      return FeatureSet_Utf8Validation.VERIFY;
    case 3:
    case "NONE":
      return FeatureSet_Utf8Validation.NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_Utf8Validation.UNRECOGNIZED;
  }
}

export function featureSet_Utf8ValidationToJSON(object: FeatureSet_Utf8Validation): string {
  switch (object) {
    case FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN:
      return "UTF8_VALIDATION_UNKNOWN";
    case FeatureSet_Utf8Validation.VERIFY:
      return "VERIFY";
    case FeatureSet_Utf8Validation.NONE:
      return "NONE";
    case FeatureSet_Utf8Validation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FeatureSet_MessageEncoding {
  MESSAGE_ENCODING_UNKNOWN = 0,
  LENGTH_PREFIXED = 1,
  DELIMITED = 2,
  UNRECOGNIZED = -1,
}

export function featureSet_MessageEncodingFromJSON(object: any): FeatureSet_MessageEncoding {
  switch (object) {
    case 0:
    case "MESSAGE_ENCODING_UNKNOWN":
      return FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN;
    case 1:
    case "LENGTH_PREFIXED":
      return FeatureSet_MessageEncoding.LENGTH_PREFIXED;
    case 2:
    case "DELIMITED":
      return FeatureSet_MessageEncoding.DELIMITED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_MessageEncoding.UNRECOGNIZED;
  }
}

export function featureSet_MessageEncodingToJSON(object: FeatureSet_MessageEncoding): string {
  switch (object) {
    case FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN:
      return "MESSAGE_ENCODING_UNKNOWN";
    case FeatureSet_MessageEncoding.LENGTH_PREFIXED:
      return "LENGTH_PREFIXED";
    case FeatureSet_MessageEncoding.DELIMITED:
      return "DELIMITED";
    case FeatureSet_MessageEncoding.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FeatureSet_JsonFormat {
  JSON_FORMAT_UNKNOWN = 0,
  ALLOW = 1,
  LEGACY_BEST_EFFORT = 2,
  UNRECOGNIZED = -1,
}

export function featureSet_JsonFormatFromJSON(object: any): FeatureSet_JsonFormat {
  switch (object) {
    case 0:
    case "JSON_FORMAT_UNKNOWN":
      return FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN;
    case 1:
    case "ALLOW":
      return FeatureSet_JsonFormat.ALLOW;
    case 2:
    case "LEGACY_BEST_EFFORT":
      return FeatureSet_JsonFormat.LEGACY_BEST_EFFORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_JsonFormat.UNRECOGNIZED;
  }
}

export function featureSet_JsonFormatToJSON(object: FeatureSet_JsonFormat): string {
  switch (object) {
    case FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN:
      return "JSON_FORMAT_UNKNOWN";
    case FeatureSet_JsonFormat.ALLOW:
      return "ALLOW";
    case FeatureSet_JsonFormat.LEGACY_BEST_EFFORT:
      return "LEGACY_BEST_EFFORT";
    case FeatureSet_JsonFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A compiled specification for the defaults of a set of features.  These
 * messages are generated from FeatureSet extensions and can be used to seed
 * feature resolution. The resolution with this object becomes a simple search
 * for the closest matching edition, followed by proto merges.
 */
export interface FeatureSetDefaults {
  defaults: FeatureSetDefaults_FeatureSetEditionDefault[];
  /**
   * The minimum supported edition (inclusive) when this was constructed.
   * Editions before this will not have defaults.
   */
  minimum_edition?:
    | Edition
    | undefined;
  /**
   * The maximum known edition (inclusive) when this was constructed. Editions
   * after this will not have reliable defaults.
   */
  maximum_edition?: Edition | undefined;
}

/**
 * A map from every known edition with a unique set of defaults to its
 * defaults. Not all editions may be contained here.  For a given edition,
 * the defaults at the closest matching edition ordered at or before it should
 * be used.  This field must be in strict ascending order by edition.
 */
export interface FeatureSetDefaults_FeatureSetEditionDefault {
  edition?: Edition | undefined;
  features?: FeatureSet | undefined;
}

/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   *
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   *
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location: SourceCodeInfo_Location[];
}

export interface SourceCodeInfo_Location {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   *
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition appears.
   * For example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   *
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   *
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   *
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   *
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   *
   * Examples:
   *
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   *
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   *
   *   // Comment attached to moo.
   *   //
   *   // Another line attached to moo.
   *   optional double moo = 4;
   *
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to moo or corge because there are blank lines separating it from
   *   // both.
   *
   *   // Detached comment for corge paragraph 2.
   *
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. * /
   *   /* Block comment attached to
   *    * grault. * /
   *   optional int32 grault = 6;
   *
   *   // ignored detached comments.
   */
  leading_comments?: string | undefined;
  trailing_comments?: string | undefined;
  leading_detached_comments: string[];
}

/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_Annotation[];
}

export interface GeneratedCodeInfo_Annotation {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** Identifies the filesystem path to the original source .proto. */
  source_file?:
    | string
    | undefined;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin?:
    | number
    | undefined;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified object. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end?: number | undefined;
  semantic?: GeneratedCodeInfo_Annotation_Semantic | undefined;
}

/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 */
export enum GeneratedCodeInfo_Annotation_Semantic {
  /** NONE - There is no effect or the effect is indescribable. */
  NONE = 0,
  /** SET - The element is set or otherwise mutated. */
  SET = 1,
  /** ALIAS - An alias to the element is returned. */
  ALIAS = 2,
  UNRECOGNIZED = -1,
}

export function generatedCodeInfo_Annotation_SemanticFromJSON(object: any): GeneratedCodeInfo_Annotation_Semantic {
  switch (object) {
    case 0:
    case "NONE":
      return GeneratedCodeInfo_Annotation_Semantic.NONE;
    case 1:
    case "SET":
      return GeneratedCodeInfo_Annotation_Semantic.SET;
    case 2:
    case "ALIAS":
      return GeneratedCodeInfo_Annotation_Semantic.ALIAS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED;
  }
}

export function generatedCodeInfo_Annotation_SemanticToJSON(object: GeneratedCodeInfo_Annotation_Semantic): string {
  switch (object) {
    case GeneratedCodeInfo_Annotation_Semantic.NONE:
      return "NONE";
    case GeneratedCodeInfo_Annotation_Semantic.SET:
      return "SET";
    case GeneratedCodeInfo_Annotation_Semantic.ALIAS:
      return "ALIAS";
    case GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFileDescriptorSet(): FileDescriptorSet {
  return { file: [] };
}

export const FileDescriptorSet = {
  encode(message: FileDescriptorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.file) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileDescriptorSet {
    return {
      file: globalThis.Array.isArray(object?.file) ? object.file.map((e: any) => FileDescriptorProto.fromJSON(e)) : [],
    };
  },

  toJSON(message: FileDescriptorSet): unknown {
    const obj: any = {};
    if (message.file?.length) {
      obj.file = message.file.map((e) => FileDescriptorProto.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileDescriptorSet>, I>>(base?: I): FileDescriptorSet {
    return FileDescriptorSet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileDescriptorSet>, I>>(object: I): FileDescriptorSet {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map((e) => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFileDescriptorProto(): FileDescriptorProto {
  return {
    name: "",
    package: "",
    dependency: [],
    public_dependency: [],
    weak_dependency: [],
    message_type: [],
    enum_type: [],
    service: [],
    extension: [],
    options: undefined,
    source_code_info: undefined,
    syntax: "",
    edition: 0,
  };
}

export const FileDescriptorProto = {
  encode(message: FileDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== undefined && message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.public_dependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weak_dependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.message_type) {
      DescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enum_type) {
      EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.source_code_info !== undefined) {
      SourceCodeInfo.encode(message.source_code_info, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== undefined && message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    if (message.edition !== undefined && message.edition !== 0) {
      writer.uint32(112).int32(message.edition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
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

          message.package = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dependency.push(reader.string());
          continue;
        case 10:
          if (tag === 80) {
            message.public_dependency.push(reader.int32());

            continue;
          }

          if (tag === 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.public_dependency.push(reader.int32());
            }

            continue;
          }

          break;
        case 11:
          if (tag === 88) {
            message.weak_dependency.push(reader.int32());

            continue;
          }

          if (tag === 90) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weak_dependency.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.message_type.push(DescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.options = FileOptions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.source_code_info = SourceCodeInfo.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.syntax = reader.string();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.edition = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileDescriptorProto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      package: isSet(object.package) ? globalThis.String(object.package) : "",
      dependency: globalThis.Array.isArray(object?.dependency)
        ? object.dependency.map((e: any) => globalThis.String(e))
        : [],
      public_dependency: globalThis.Array.isArray(object?.public_dependency)
        ? object.public_dependency.map((e: any) => globalThis.Number(e))
        : [],
      weak_dependency: globalThis.Array.isArray(object?.weak_dependency)
        ? object.weak_dependency.map((e: any) => globalThis.Number(e))
        : [],
      message_type: globalThis.Array.isArray(object?.message_type)
        ? object.message_type.map((e: any) => DescriptorProto.fromJSON(e))
        : [],
      enum_type: globalThis.Array.isArray(object?.enum_type)
        ? object.enum_type.map((e: any) => EnumDescriptorProto.fromJSON(e))
        : [],
      service: globalThis.Array.isArray(object?.service)
        ? object.service.map((e: any) => ServiceDescriptorProto.fromJSON(e))
        : [],
      extension: globalThis.Array.isArray(object?.extension)
        ? object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e))
        : [],
      options: isSet(object.options) ? FileOptions.fromJSON(object.options) : undefined,
      source_code_info: isSet(object.source_code_info) ? SourceCodeInfo.fromJSON(object.source_code_info) : undefined,
      syntax: isSet(object.syntax) ? globalThis.String(object.syntax) : "",
      edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0,
    };
  },

  toJSON(message: FileDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.package !== undefined && message.package !== "") {
      obj.package = message.package;
    }
    if (message.dependency?.length) {
      obj.dependency = message.dependency;
    }
    if (message.public_dependency?.length) {
      obj.public_dependency = message.public_dependency.map((e) => Math.round(e));
    }
    if (message.weak_dependency?.length) {
      obj.weak_dependency = message.weak_dependency.map((e) => Math.round(e));
    }
    if (message.message_type?.length) {
      obj.message_type = message.message_type.map((e) => DescriptorProto.toJSON(e));
    }
    if (message.enum_type?.length) {
      obj.enum_type = message.enum_type.map((e) => EnumDescriptorProto.toJSON(e));
    }
    if (message.service?.length) {
      obj.service = message.service.map((e) => ServiceDescriptorProto.toJSON(e));
    }
    if (message.extension?.length) {
      obj.extension = message.extension.map((e) => FieldDescriptorProto.toJSON(e));
    }
    if (message.options !== undefined) {
      obj.options = FileOptions.toJSON(message.options);
    }
    if (message.source_code_info !== undefined) {
      obj.source_code_info = SourceCodeInfo.toJSON(message.source_code_info);
    }
    if (message.syntax !== undefined && message.syntax !== "") {
      obj.syntax = message.syntax;
    }
    if (message.edition !== undefined && message.edition !== 0) {
      obj.edition = editionToJSON(message.edition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileDescriptorProto>, I>>(base?: I): FileDescriptorProto {
    return FileDescriptorProto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileDescriptorProto>, I>>(object: I): FileDescriptorProto {
    const message = createBaseFileDescriptorProto();
    message.name = object.name ?? "";
    message.package = object.package ?? "";
    message.dependency = object.dependency?.map((e) => e) || [];
    message.public_dependency = object.public_dependency?.map((e) => e) || [];
    message.weak_dependency = object.weak_dependency?.map((e) => e) || [];
    message.message_type = object.message_type?.map((e) => DescriptorProto.fromPartial(e)) || [];
    message.enum_type = object.enum_type?.map((e) => EnumDescriptorProto.fromPartial(e)) || [];
    message.service = object.service?.map((e) => ServiceDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? FileOptions.fromPartial(object.options)
      : undefined;
    message.source_code_info = (object.source_code_info !== undefined && object.source_code_info !== null)
      ? SourceCodeInfo.fromPartial(object.source_code_info)
      : undefined;
    message.syntax = object.syntax ?? "";
    message.edition = object.edition ?? 0;
    return message;
  },
};

function createBaseDescriptorProto(): DescriptorProto {
  return {
    name: "",
    field: [],
    extension: [],
    nested_type: [],
    enum_type: [],
    extension_range: [],
    oneof_decl: [],
    options: undefined,
    reserved_range: [],
    reserved_name: [],
  };
}

export const DescriptorProto = {
  encode(message: DescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nested_type) {
      DescriptorProto.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enum_type) {
      EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extension_range) {
      DescriptorProto_ExtensionRange.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.oneof_decl) {
      OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reserved_range) {
      DescriptorProto_ReservedRange.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.reserved_name) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
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

          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nested_type.push(DescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.extension_range.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.oneof_decl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.options = MessageOptions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.reserved_range.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.reserved_name.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DescriptorProto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      field: globalThis.Array.isArray(object?.field)
        ? object.field.map((e: any) => FieldDescriptorProto.fromJSON(e))
        : [],
      extension: globalThis.Array.isArray(object?.extension)
        ? object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e))
        : [],
      nested_type: globalThis.Array.isArray(object?.nested_type)
        ? object.nested_type.map((e: any) => DescriptorProto.fromJSON(e))
        : [],
      enum_type: globalThis.Array.isArray(object?.enum_type)
        ? object.enum_type.map((e: any) => EnumDescriptorProto.fromJSON(e))
        : [],
      extension_range: globalThis.Array.isArray(object?.extension_range)
        ? object.extension_range.map((e: any) => DescriptorProto_ExtensionRange.fromJSON(e))
        : [],
      oneof_decl: globalThis.Array.isArray(object?.oneof_decl)
        ? object.oneof_decl.map((e: any) => OneofDescriptorProto.fromJSON(e))
        : [],
      options: isSet(object.options) ? MessageOptions.fromJSON(object.options) : undefined,
      reserved_range: globalThis.Array.isArray(object?.reserved_range)
        ? object.reserved_range.map((e: any) => DescriptorProto_ReservedRange.fromJSON(e))
        : [],
      reserved_name: globalThis.Array.isArray(object?.reserved_name)
        ? object.reserved_name.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: DescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.field?.length) {
      obj.field = message.field.map((e) => FieldDescriptorProto.toJSON(e));
    }
    if (message.extension?.length) {
      obj.extension = message.extension.map((e) => FieldDescriptorProto.toJSON(e));
    }
    if (message.nested_type?.length) {
      obj.nested_type = message.nested_type.map((e) => DescriptorProto.toJSON(e));
    }
    if (message.enum_type?.length) {
      obj.enum_type = message.enum_type.map((e) => EnumDescriptorProto.toJSON(e));
    }
    if (message.extension_range?.length) {
      obj.extension_range = message.extension_range.map((e) => DescriptorProto_ExtensionRange.toJSON(e));
    }
    if (message.oneof_decl?.length) {
      obj.oneof_decl = message.oneof_decl.map((e) => OneofDescriptorProto.toJSON(e));
    }
    if (message.options !== undefined) {
      obj.options = MessageOptions.toJSON(message.options);
    }
    if (message.reserved_range?.length) {
      obj.reserved_range = message.reserved_range.map((e) => DescriptorProto_ReservedRange.toJSON(e));
    }
    if (message.reserved_name?.length) {
      obj.reserved_name = message.reserved_name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DescriptorProto>, I>>(base?: I): DescriptorProto {
    return DescriptorProto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DescriptorProto>, I>>(object: I): DescriptorProto {
    const message = createBaseDescriptorProto();
    message.name = object.name ?? "";
    message.field = object.field?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.nested_type = object.nested_type?.map((e) => DescriptorProto.fromPartial(e)) || [];
    message.enum_type = object.enum_type?.map((e) => EnumDescriptorProto.fromPartial(e)) || [];
    message.extension_range = object.extension_range?.map((e) => DescriptorProto_ExtensionRange.fromPartial(e)) || [];
    message.oneof_decl = object.oneof_decl?.map((e) => OneofDescriptorProto.fromPartial(e)) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? MessageOptions.fromPartial(object.options)
      : undefined;
    message.reserved_range = object.reserved_range?.map((e) => DescriptorProto_ReservedRange.fromPartial(e)) || [];
    message.reserved_name = object.reserved_name?.map((e) => e) || [];
    return message;
  },
};

function createBaseDescriptorProto_ExtensionRange(): DescriptorProto_ExtensionRange {
  return { start: 0, end: 0, options: undefined };
}

export const DescriptorProto_ExtensionRange = {
  encode(message: DescriptorProto_ExtensionRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined && message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ExtensionRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DescriptorProto_ExtensionRange {
    return {
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
      end: isSet(object.end) ? globalThis.Number(object.end) : 0,
      options: isSet(object.options) ? ExtensionRangeOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: DescriptorProto_ExtensionRange): unknown {
    const obj: any = {};
    if (message.start !== undefined && message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    if (message.options !== undefined) {
      obj.options = ExtensionRangeOptions.toJSON(message.options);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DescriptorProto_ExtensionRange>, I>>(base?: I): DescriptorProto_ExtensionRange {
    return DescriptorProto_ExtensionRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DescriptorProto_ExtensionRange>, I>>(
    object: I,
  ): DescriptorProto_ExtensionRange {
    const message = createBaseDescriptorProto_ExtensionRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    message.options = (object.options !== undefined && object.options !== null)
      ? ExtensionRangeOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseDescriptorProto_ReservedRange(): DescriptorProto_ReservedRange {
  return { start: 0, end: 0 };
}

export const DescriptorProto_ReservedRange = {
  encode(message: DescriptorProto_ReservedRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined && message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ReservedRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DescriptorProto_ReservedRange {
    return {
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
      end: isSet(object.end) ? globalThis.Number(object.end) : 0,
    };
  },

  toJSON(message: DescriptorProto_ReservedRange): unknown {
    const obj: any = {};
    if (message.start !== undefined && message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DescriptorProto_ReservedRange>, I>>(base?: I): DescriptorProto_ReservedRange {
    return DescriptorProto_ReservedRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DescriptorProto_ReservedRange>, I>>(
    object: I,
  ): DescriptorProto_ReservedRange {
    const message = createBaseDescriptorProto_ReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};

function createBaseExtensionRangeOptions(): ExtensionRangeOptions {
  return { uninterpreted_option: [], declaration: [], features: undefined, verification: 1 };
}

export const ExtensionRangeOptions = {
  encode(message: ExtensionRangeOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    for (const v of message.declaration) {
      ExtensionRangeOptions_Declaration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
    }
    if (message.verification !== undefined && message.verification !== 1) {
      writer.uint32(24).int32(message.verification);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionRangeOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.declaration.push(ExtensionRangeOptions_Declaration.decode(reader, reader.uint32()));
          continue;
        case 50:
          if (tag !== 402) {
            break;
          }

          message.features = FeatureSet.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.verification = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtensionRangeOptions {
    return {
      uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
      declaration: globalThis.Array.isArray(object?.declaration)
        ? object.declaration.map((e: any) => ExtensionRangeOptions_Declaration.fromJSON(e))
        : [],
      features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
      verification: isSet(object.verification)
        ? extensionRangeOptions_VerificationStateFromJSON(object.verification)
        : 1,
    };
  },

  toJSON(message: ExtensionRangeOptions): unknown {
    const obj: any = {};
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    if (message.declaration?.length) {
      obj.declaration = message.declaration.map((e) => ExtensionRangeOptions_Declaration.toJSON(e));
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.verification !== undefined && message.verification !== 1) {
      obj.verification = extensionRangeOptions_VerificationStateToJSON(message.verification);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExtensionRangeOptions>, I>>(base?: I): ExtensionRangeOptions {
    return ExtensionRangeOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExtensionRangeOptions>, I>>(object: I): ExtensionRangeOptions {
    const message = createBaseExtensionRangeOptions();
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    message.declaration = object.declaration?.map((e) => ExtensionRangeOptions_Declaration.fromPartial(e)) || [];
    message.features = (object.features !== undefined && object.features !== null)
      ? FeatureSet.fromPartial(object.features)
      : undefined;
    message.verification = object.verification ?? 1;
    return message;
  },
};

function createBaseExtensionRangeOptions_Declaration(): ExtensionRangeOptions_Declaration {
  return { number: 0, full_name: "", type: "", reserved: false, repeated: false };
}

export const ExtensionRangeOptions_Declaration = {
  encode(message: ExtensionRangeOptions_Declaration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== undefined && message.number !== 0) {
      writer.uint32(8).int32(message.number);
    }
    if (message.full_name !== undefined && message.full_name !== "") {
      writer.uint32(18).string(message.full_name);
    }
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.reserved !== undefined && message.reserved !== false) {
      writer.uint32(40).bool(message.reserved);
    }
    if (message.repeated !== undefined && message.repeated !== false) {
      writer.uint32(48).bool(message.repeated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionRangeOptions_Declaration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions_Declaration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.full_name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.reserved = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.repeated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtensionRangeOptions_Declaration {
    return {
      number: isSet(object.number) ? globalThis.Number(object.number) : 0,
      full_name: isSet(object.full_name) ? globalThis.String(object.full_name) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      reserved: isSet(object.reserved) ? globalThis.Boolean(object.reserved) : false,
      repeated: isSet(object.repeated) ? globalThis.Boolean(object.repeated) : false,
    };
  },

  toJSON(message: ExtensionRangeOptions_Declaration): unknown {
    const obj: any = {};
    if (message.number !== undefined && message.number !== 0) {
      obj.number = Math.round(message.number);
    }
    if (message.full_name !== undefined && message.full_name !== "") {
      obj.full_name = message.full_name;
    }
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.reserved !== undefined && message.reserved !== false) {
      obj.reserved = message.reserved;
    }
    if (message.repeated !== undefined && message.repeated !== false) {
      obj.repeated = message.repeated;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExtensionRangeOptions_Declaration>, I>>(
    base?: I,
  ): ExtensionRangeOptions_Declaration {
    return ExtensionRangeOptions_Declaration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExtensionRangeOptions_Declaration>, I>>(
    object: I,
  ): ExtensionRangeOptions_Declaration {
    const message = createBaseExtensionRangeOptions_Declaration();
    message.number = object.number ?? 0;
    message.full_name = object.full_name ?? "";
    message.type = object.type ?? "";
    message.reserved = object.reserved ?? false;
    message.repeated = object.repeated ?? false;
    return message;
  },
};

function createBaseFieldDescriptorProto(): FieldDescriptorProto {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    type_name: "",
    extendee: "",
    default_value: "",
    oneof_index: 0,
    json_name: "",
    options: undefined,
    proto3_optional: false,
  };
}

export const FieldDescriptorProto = {
  encode(message: FieldDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== undefined && message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== undefined && message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== undefined && message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.type_name !== undefined && message.type_name !== "") {
      writer.uint32(50).string(message.type_name);
    }
    if (message.extendee !== undefined && message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.default_value !== undefined && message.default_value !== "") {
      writer.uint32(58).string(message.default_value);
    }
    if (message.oneof_index !== undefined && message.oneof_index !== 0) {
      writer.uint32(72).int32(message.oneof_index);
    }
    if (message.json_name !== undefined && message.json_name !== "") {
      writer.uint32(82).string(message.json_name);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.proto3_optional !== undefined && message.proto3_optional !== false) {
      writer.uint32(136).bool(message.proto3_optional);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.label = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type_name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extendee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.default_value = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.oneof_index = reader.int32();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.json_name = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.options = FieldOptions.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.proto3_optional = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldDescriptorProto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      number: isSet(object.number) ? globalThis.Number(object.number) : 0,
      label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : 1,
      type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : 1,
      type_name: isSet(object.type_name) ? globalThis.String(object.type_name) : "",
      extendee: isSet(object.extendee) ? globalThis.String(object.extendee) : "",
      default_value: isSet(object.default_value) ? globalThis.String(object.default_value) : "",
      oneof_index: isSet(object.oneof_index) ? globalThis.Number(object.oneof_index) : 0,
      json_name: isSet(object.json_name) ? globalThis.String(object.json_name) : "",
      options: isSet(object.options) ? FieldOptions.fromJSON(object.options) : undefined,
      proto3_optional: isSet(object.proto3_optional) ? globalThis.Boolean(object.proto3_optional) : false,
    };
  },

  toJSON(message: FieldDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.number !== undefined && message.number !== 0) {
      obj.number = Math.round(message.number);
    }
    if (message.label !== undefined && message.label !== 1) {
      obj.label = fieldDescriptorProto_LabelToJSON(message.label);
    }
    if (message.type !== undefined && message.type !== 1) {
      obj.type = fieldDescriptorProto_TypeToJSON(message.type);
    }
    if (message.type_name !== undefined && message.type_name !== "") {
      obj.type_name = message.type_name;
    }
    if (message.extendee !== undefined && message.extendee !== "") {
      obj.extendee = message.extendee;
    }
    if (message.default_value !== undefined && message.default_value !== "") {
      obj.default_value = message.default_value;
    }
    if (message.oneof_index !== undefined && message.oneof_index !== 0) {
      obj.oneof_index = Math.round(message.oneof_index);
    }
    if (message.json_name !== undefined && message.json_name !== "") {
      obj.json_name = message.json_name;
    }
    if (message.options !== undefined) {
      obj.options = FieldOptions.toJSON(message.options);
    }
    if (message.proto3_optional !== undefined && message.proto3_optional !== false) {
      obj.proto3_optional = message.proto3_optional;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FieldDescriptorProto>, I>>(base?: I): FieldDescriptorProto {
    return FieldDescriptorProto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FieldDescriptorProto>, I>>(object: I): FieldDescriptorProto {
    const message = createBaseFieldDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.label = object.label ?? 1;
    message.type = object.type ?? 1;
    message.type_name = object.type_name ?? "";
    message.extendee = object.extendee ?? "";
    message.default_value = object.default_value ?? "";
    message.oneof_index = object.oneof_index ?? 0;
    message.json_name = object.json_name ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? FieldOptions.fromPartial(object.options)
      : undefined;
    message.proto3_optional = object.proto3_optional ?? false;
    return message;
  },
};

function createBaseOneofDescriptorProto(): OneofDescriptorProto {
  return { name: "", options: undefined };
}

export const OneofDescriptorProto = {
  encode(message: OneofDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneofDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
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

          message.options = OneofOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OneofDescriptorProto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      options: isSet(object.options) ? OneofOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: OneofDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.options !== undefined) {
      obj.options = OneofOptions.toJSON(message.options);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OneofDescriptorProto>, I>>(base?: I): OneofDescriptorProto {
    return OneofDescriptorProto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OneofDescriptorProto>, I>>(object: I): OneofDescriptorProto {
    const message = createBaseOneofDescriptorProto();
    message.name = object.name ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? OneofOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseEnumDescriptorProto(): EnumDescriptorProto {
  return { name: "", value: [], options: undefined, reserved_range: [], reserved_name: [] };
}

export const EnumDescriptorProto = {
  encode(message: EnumDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reserved_range) {
      EnumDescriptorProto_EnumReservedRange.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reserved_name) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
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

          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = EnumOptions.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.reserved_range.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.reserved_name.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumDescriptorProto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: globalThis.Array.isArray(object?.value)
        ? object.value.map((e: any) => EnumValueDescriptorProto.fromJSON(e))
        : [],
      options: isSet(object.options) ? EnumOptions.fromJSON(object.options) : undefined,
      reserved_range: globalThis.Array.isArray(object?.reserved_range)
        ? object.reserved_range.map((e: any) => EnumDescriptorProto_EnumReservedRange.fromJSON(e))
        : [],
      reserved_name: globalThis.Array.isArray(object?.reserved_name)
        ? object.reserved_name.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: EnumDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.value?.length) {
      obj.value = message.value.map((e) => EnumValueDescriptorProto.toJSON(e));
    }
    if (message.options !== undefined) {
      obj.options = EnumOptions.toJSON(message.options);
    }
    if (message.reserved_range?.length) {
      obj.reserved_range = message.reserved_range.map((e) => EnumDescriptorProto_EnumReservedRange.toJSON(e));
    }
    if (message.reserved_name?.length) {
      obj.reserved_name = message.reserved_name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnumDescriptorProto>, I>>(base?: I): EnumDescriptorProto {
    return EnumDescriptorProto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnumDescriptorProto>, I>>(object: I): EnumDescriptorProto {
    const message = createBaseEnumDescriptorProto();
    message.name = object.name ?? "";
    message.value = object.value?.map((e) => EnumValueDescriptorProto.fromPartial(e)) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? EnumOptions.fromPartial(object.options)
      : undefined;
    message.reserved_range = object.reserved_range?.map((e) => EnumDescriptorProto_EnumReservedRange.fromPartial(e)) ||
      [];
    message.reserved_name = object.reserved_name?.map((e) => e) || [];
    return message;
  },
};

function createBaseEnumDescriptorProto_EnumReservedRange(): EnumDescriptorProto_EnumReservedRange {
  return { start: 0, end: 0 };
}

export const EnumDescriptorProto_EnumReservedRange = {
  encode(message: EnumDescriptorProto_EnumReservedRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined && message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumDescriptorProto_EnumReservedRange {
    return {
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
      end: isSet(object.end) ? globalThis.Number(object.end) : 0,
    };
  },

  toJSON(message: EnumDescriptorProto_EnumReservedRange): unknown {
    const obj: any = {};
    if (message.start !== undefined && message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnumDescriptorProto_EnumReservedRange>, I>>(
    base?: I,
  ): EnumDescriptorProto_EnumReservedRange {
    return EnumDescriptorProto_EnumReservedRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnumDescriptorProto_EnumReservedRange>, I>>(
    object: I,
  ): EnumDescriptorProto_EnumReservedRange {
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};

function createBaseEnumValueDescriptorProto(): EnumValueDescriptorProto {
  return { name: "", number: 0, options: undefined };
}

export const EnumValueDescriptorProto = {
  encode(message: EnumValueDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== undefined && message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
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
          if (tag !== 16) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = EnumValueOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumValueDescriptorProto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      number: isSet(object.number) ? globalThis.Number(object.number) : 0,
      options: isSet(object.options) ? EnumValueOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: EnumValueDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.number !== undefined && message.number !== 0) {
      obj.number = Math.round(message.number);
    }
    if (message.options !== undefined) {
      obj.options = EnumValueOptions.toJSON(message.options);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnumValueDescriptorProto>, I>>(base?: I): EnumValueDescriptorProto {
    return EnumValueDescriptorProto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnumValueDescriptorProto>, I>>(object: I): EnumValueDescriptorProto {
    const message = createBaseEnumValueDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.options = (object.options !== undefined && object.options !== null)
      ? EnumValueOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseServiceDescriptorProto(): ServiceDescriptorProto {
  return { name: "", method: [], options: undefined };
}

export const ServiceDescriptorProto = {
  encode(message: ServiceDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
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

          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = ServiceOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceDescriptorProto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      method: globalThis.Array.isArray(object?.method)
        ? object.method.map((e: any) => MethodDescriptorProto.fromJSON(e))
        : [],
      options: isSet(object.options) ? ServiceOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: ServiceDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.method?.length) {
      obj.method = message.method.map((e) => MethodDescriptorProto.toJSON(e));
    }
    if (message.options !== undefined) {
      obj.options = ServiceOptions.toJSON(message.options);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceDescriptorProto>, I>>(base?: I): ServiceDescriptorProto {
    return ServiceDescriptorProto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceDescriptorProto>, I>>(object: I): ServiceDescriptorProto {
    const message = createBaseServiceDescriptorProto();
    message.name = object.name ?? "";
    message.method = object.method?.map((e) => MethodDescriptorProto.fromPartial(e)) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? ServiceOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseMethodDescriptorProto(): MethodDescriptorProto {
  return {
    name: "",
    input_type: "",
    output_type: "",
    options: undefined,
    client_streaming: false,
    server_streaming: false,
  };
}

export const MethodDescriptorProto = {
  encode(message: MethodDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.input_type !== undefined && message.input_type !== "") {
      writer.uint32(18).string(message.input_type);
    }
    if (message.output_type !== undefined && message.output_type !== "") {
      writer.uint32(26).string(message.output_type);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.client_streaming !== undefined && message.client_streaming !== false) {
      writer.uint32(40).bool(message.client_streaming);
    }
    if (message.server_streaming !== undefined && message.server_streaming !== false) {
      writer.uint32(48).bool(message.server_streaming);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
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

          message.input_type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.output_type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.options = MethodOptions.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.client_streaming = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.server_streaming = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MethodDescriptorProto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      input_type: isSet(object.input_type) ? globalThis.String(object.input_type) : "",
      output_type: isSet(object.output_type) ? globalThis.String(object.output_type) : "",
      options: isSet(object.options) ? MethodOptions.fromJSON(object.options) : undefined,
      client_streaming: isSet(object.client_streaming) ? globalThis.Boolean(object.client_streaming) : false,
      server_streaming: isSet(object.server_streaming) ? globalThis.Boolean(object.server_streaming) : false,
    };
  },

  toJSON(message: MethodDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.input_type !== undefined && message.input_type !== "") {
      obj.input_type = message.input_type;
    }
    if (message.output_type !== undefined && message.output_type !== "") {
      obj.output_type = message.output_type;
    }
    if (message.options !== undefined) {
      obj.options = MethodOptions.toJSON(message.options);
    }
    if (message.client_streaming !== undefined && message.client_streaming !== false) {
      obj.client_streaming = message.client_streaming;
    }
    if (message.server_streaming !== undefined && message.server_streaming !== false) {
      obj.server_streaming = message.server_streaming;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MethodDescriptorProto>, I>>(base?: I): MethodDescriptorProto {
    return MethodDescriptorProto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MethodDescriptorProto>, I>>(object: I): MethodDescriptorProto {
    const message = createBaseMethodDescriptorProto();
    message.name = object.name ?? "";
    message.input_type = object.input_type ?? "";
    message.output_type = object.output_type ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? MethodOptions.fromPartial(object.options)
      : undefined;
    message.client_streaming = object.client_streaming ?? false;
    message.server_streaming = object.server_streaming ?? false;
    return message;
  },
};

function createBaseFileOptions(): FileOptions {
  return {
    java_package: "",
    java_outer_classname: "",
    java_multiple_files: false,
    java_generate_equals_and_hash: false,
    java_string_check_utf8: false,
    optimize_for: 1,
    go_package: "",
    cc_generic_services: false,
    java_generic_services: false,
    py_generic_services: false,
    deprecated: false,
    cc_enable_arenas: true,
    objc_class_prefix: "",
    csharp_namespace: "",
    swift_prefix: "",
    php_class_prefix: "",
    php_namespace: "",
    php_metadata_namespace: "",
    ruby_package: "",
    features: undefined,
    uninterpreted_option: [],
  };
}

export const FileOptions = {
  encode(message: FileOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.java_package !== undefined && message.java_package !== "") {
      writer.uint32(10).string(message.java_package);
    }
    if (message.java_outer_classname !== undefined && message.java_outer_classname !== "") {
      writer.uint32(66).string(message.java_outer_classname);
    }
    if (message.java_multiple_files !== undefined && message.java_multiple_files !== false) {
      writer.uint32(80).bool(message.java_multiple_files);
    }
    if (message.java_generate_equals_and_hash !== undefined && message.java_generate_equals_and_hash !== false) {
      writer.uint32(160).bool(message.java_generate_equals_and_hash);
    }
    if (message.java_string_check_utf8 !== undefined && message.java_string_check_utf8 !== false) {
      writer.uint32(216).bool(message.java_string_check_utf8);
    }
    if (message.optimize_for !== undefined && message.optimize_for !== 1) {
      writer.uint32(72).int32(message.optimize_for);
    }
    if (message.go_package !== undefined && message.go_package !== "") {
      writer.uint32(90).string(message.go_package);
    }
    if (message.cc_generic_services !== undefined && message.cc_generic_services !== false) {
      writer.uint32(128).bool(message.cc_generic_services);
    }
    if (message.java_generic_services !== undefined && message.java_generic_services !== false) {
      writer.uint32(136).bool(message.java_generic_services);
    }
    if (message.py_generic_services !== undefined && message.py_generic_services !== false) {
      writer.uint32(144).bool(message.py_generic_services);
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.cc_enable_arenas !== undefined && message.cc_enable_arenas !== true) {
      writer.uint32(248).bool(message.cc_enable_arenas);
    }
    if (message.objc_class_prefix !== undefined && message.objc_class_prefix !== "") {
      writer.uint32(290).string(message.objc_class_prefix);
    }
    if (message.csharp_namespace !== undefined && message.csharp_namespace !== "") {
      writer.uint32(298).string(message.csharp_namespace);
    }
    if (message.swift_prefix !== undefined && message.swift_prefix !== "") {
      writer.uint32(314).string(message.swift_prefix);
    }
    if (message.php_class_prefix !== undefined && message.php_class_prefix !== "") {
      writer.uint32(322).string(message.php_class_prefix);
    }
    if (message.php_namespace !== undefined && message.php_namespace !== "") {
      writer.uint32(330).string(message.php_namespace);
    }
    if (message.php_metadata_namespace !== undefined && message.php_metadata_namespace !== "") {
      writer.uint32(354).string(message.php_metadata_namespace);
    }
    if (message.ruby_package !== undefined && message.ruby_package !== "") {
      writer.uint32(362).string(message.ruby_package);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.java_package = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.java_outer_classname = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.java_multiple_files = reader.bool();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.java_generate_equals_and_hash = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.java_string_check_utf8 = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.optimize_for = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.go_package = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.cc_generic_services = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.java_generic_services = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.py_generic_services = reader.bool();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.cc_enable_arenas = reader.bool();
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.objc_class_prefix = reader.string();
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.csharp_namespace = reader.string();
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.swift_prefix = reader.string();
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.php_class_prefix = reader.string();
          continue;
        case 41:
          if (tag !== 330) {
            break;
          }

          message.php_namespace = reader.string();
          continue;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.php_metadata_namespace = reader.string();
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.ruby_package = reader.string();
          continue;
        case 50:
          if (tag !== 402) {
            break;
          }

          message.features = FeatureSet.decode(reader, reader.uint32());
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileOptions {
    return {
      java_package: isSet(object.java_package) ? globalThis.String(object.java_package) : "",
      java_outer_classname: isSet(object.java_outer_classname) ? globalThis.String(object.java_outer_classname) : "",
      java_multiple_files: isSet(object.java_multiple_files) ? globalThis.Boolean(object.java_multiple_files) : false,
      java_generate_equals_and_hash: isSet(object.java_generate_equals_and_hash)
        ? globalThis.Boolean(object.java_generate_equals_and_hash)
        : false,
      java_string_check_utf8: isSet(object.java_string_check_utf8)
        ? globalThis.Boolean(object.java_string_check_utf8)
        : false,
      optimize_for: isSet(object.optimize_for) ? fileOptions_OptimizeModeFromJSON(object.optimize_for) : 1,
      go_package: isSet(object.go_package) ? globalThis.String(object.go_package) : "",
      cc_generic_services: isSet(object.cc_generic_services) ? globalThis.Boolean(object.cc_generic_services) : false,
      java_generic_services: isSet(object.java_generic_services)
        ? globalThis.Boolean(object.java_generic_services)
        : false,
      py_generic_services: isSet(object.py_generic_services) ? globalThis.Boolean(object.py_generic_services) : false,
      deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
      cc_enable_arenas: isSet(object.cc_enable_arenas) ? globalThis.Boolean(object.cc_enable_arenas) : true,
      objc_class_prefix: isSet(object.objc_class_prefix) ? globalThis.String(object.objc_class_prefix) : "",
      csharp_namespace: isSet(object.csharp_namespace) ? globalThis.String(object.csharp_namespace) : "",
      swift_prefix: isSet(object.swift_prefix) ? globalThis.String(object.swift_prefix) : "",
      php_class_prefix: isSet(object.php_class_prefix) ? globalThis.String(object.php_class_prefix) : "",
      php_namespace: isSet(object.php_namespace) ? globalThis.String(object.php_namespace) : "",
      php_metadata_namespace: isSet(object.php_metadata_namespace)
        ? globalThis.String(object.php_metadata_namespace)
        : "",
      ruby_package: isSet(object.ruby_package) ? globalThis.String(object.ruby_package) : "",
      features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
      uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FileOptions): unknown {
    const obj: any = {};
    if (message.java_package !== undefined && message.java_package !== "") {
      obj.java_package = message.java_package;
    }
    if (message.java_outer_classname !== undefined && message.java_outer_classname !== "") {
      obj.java_outer_classname = message.java_outer_classname;
    }
    if (message.java_multiple_files !== undefined && message.java_multiple_files !== false) {
      obj.java_multiple_files = message.java_multiple_files;
    }
    if (message.java_generate_equals_and_hash !== undefined && message.java_generate_equals_and_hash !== false) {
      obj.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
    }
    if (message.java_string_check_utf8 !== undefined && message.java_string_check_utf8 !== false) {
      obj.java_string_check_utf8 = message.java_string_check_utf8;
    }
    if (message.optimize_for !== undefined && message.optimize_for !== 1) {
      obj.optimize_for = fileOptions_OptimizeModeToJSON(message.optimize_for);
    }
    if (message.go_package !== undefined && message.go_package !== "") {
      obj.go_package = message.go_package;
    }
    if (message.cc_generic_services !== undefined && message.cc_generic_services !== false) {
      obj.cc_generic_services = message.cc_generic_services;
    }
    if (message.java_generic_services !== undefined && message.java_generic_services !== false) {
      obj.java_generic_services = message.java_generic_services;
    }
    if (message.py_generic_services !== undefined && message.py_generic_services !== false) {
      obj.py_generic_services = message.py_generic_services;
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (message.cc_enable_arenas !== undefined && message.cc_enable_arenas !== true) {
      obj.cc_enable_arenas = message.cc_enable_arenas;
    }
    if (message.objc_class_prefix !== undefined && message.objc_class_prefix !== "") {
      obj.objc_class_prefix = message.objc_class_prefix;
    }
    if (message.csharp_namespace !== undefined && message.csharp_namespace !== "") {
      obj.csharp_namespace = message.csharp_namespace;
    }
    if (message.swift_prefix !== undefined && message.swift_prefix !== "") {
      obj.swift_prefix = message.swift_prefix;
    }
    if (message.php_class_prefix !== undefined && message.php_class_prefix !== "") {
      obj.php_class_prefix = message.php_class_prefix;
    }
    if (message.php_namespace !== undefined && message.php_namespace !== "") {
      obj.php_namespace = message.php_namespace;
    }
    if (message.php_metadata_namespace !== undefined && message.php_metadata_namespace !== "") {
      obj.php_metadata_namespace = message.php_metadata_namespace;
    }
    if (message.ruby_package !== undefined && message.ruby_package !== "") {
      obj.ruby_package = message.ruby_package;
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileOptions>, I>>(base?: I): FileOptions {
    return FileOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileOptions>, I>>(object: I): FileOptions {
    const message = createBaseFileOptions();
    message.java_package = object.java_package ?? "";
    message.java_outer_classname = object.java_outer_classname ?? "";
    message.java_multiple_files = object.java_multiple_files ?? false;
    message.java_generate_equals_and_hash = object.java_generate_equals_and_hash ?? false;
    message.java_string_check_utf8 = object.java_string_check_utf8 ?? false;
    message.optimize_for = object.optimize_for ?? 1;
    message.go_package = object.go_package ?? "";
    message.cc_generic_services = object.cc_generic_services ?? false;
    message.java_generic_services = object.java_generic_services ?? false;
    message.py_generic_services = object.py_generic_services ?? false;
    message.deprecated = object.deprecated ?? false;
    message.cc_enable_arenas = object.cc_enable_arenas ?? true;
    message.objc_class_prefix = object.objc_class_prefix ?? "";
    message.csharp_namespace = object.csharp_namespace ?? "";
    message.swift_prefix = object.swift_prefix ?? "";
    message.php_class_prefix = object.php_class_prefix ?? "";
    message.php_namespace = object.php_namespace ?? "";
    message.php_metadata_namespace = object.php_metadata_namespace ?? "";
    message.ruby_package = object.ruby_package ?? "";
    message.features = (object.features !== undefined && object.features !== null)
      ? FeatureSet.fromPartial(object.features)
      : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessageOptions(): MessageOptions {
  return {
    message_set_wire_format: false,
    no_standard_descriptor_accessor: false,
    deprecated: false,
    map_entry: false,
    deprecated_legacy_json_field_conflicts: false,
    features: undefined,
    uninterpreted_option: [],
  };
}

export const MessageOptions = {
  encode(message: MessageOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message_set_wire_format !== undefined && message.message_set_wire_format !== false) {
      writer.uint32(8).bool(message.message_set_wire_format);
    }
    if (message.no_standard_descriptor_accessor !== undefined && message.no_standard_descriptor_accessor !== false) {
      writer.uint32(16).bool(message.no_standard_descriptor_accessor);
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.map_entry !== undefined && message.map_entry !== false) {
      writer.uint32(56).bool(message.map_entry);
    }
    if (
      message.deprecated_legacy_json_field_conflicts !== undefined &&
      message.deprecated_legacy_json_field_conflicts !== false
    ) {
      writer.uint32(88).bool(message.deprecated_legacy_json_field_conflicts);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.message_set_wire_format = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.no_standard_descriptor_accessor = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.map_entry = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.deprecated_legacy_json_field_conflicts = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.features = FeatureSet.decode(reader, reader.uint32());
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageOptions {
    return {
      message_set_wire_format: isSet(object.message_set_wire_format)
        ? globalThis.Boolean(object.message_set_wire_format)
        : false,
      no_standard_descriptor_accessor: isSet(object.no_standard_descriptor_accessor)
        ? globalThis.Boolean(object.no_standard_descriptor_accessor)
        : false,
      deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
      map_entry: isSet(object.map_entry) ? globalThis.Boolean(object.map_entry) : false,
      deprecated_legacy_json_field_conflicts: isSet(object.deprecated_legacy_json_field_conflicts)
        ? globalThis.Boolean(object.deprecated_legacy_json_field_conflicts)
        : false,
      features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
      uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MessageOptions): unknown {
    const obj: any = {};
    if (message.message_set_wire_format !== undefined && message.message_set_wire_format !== false) {
      obj.message_set_wire_format = message.message_set_wire_format;
    }
    if (message.no_standard_descriptor_accessor !== undefined && message.no_standard_descriptor_accessor !== false) {
      obj.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (message.map_entry !== undefined && message.map_entry !== false) {
      obj.map_entry = message.map_entry;
    }
    if (
      message.deprecated_legacy_json_field_conflicts !== undefined &&
      message.deprecated_legacy_json_field_conflicts !== false
    ) {
      obj.deprecated_legacy_json_field_conflicts = message.deprecated_legacy_json_field_conflicts;
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageOptions>, I>>(base?: I): MessageOptions {
    return MessageOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MessageOptions>, I>>(object: I): MessageOptions {
    const message = createBaseMessageOptions();
    message.message_set_wire_format = object.message_set_wire_format ?? false;
    message.no_standard_descriptor_accessor = object.no_standard_descriptor_accessor ?? false;
    message.deprecated = object.deprecated ?? false;
    message.map_entry = object.map_entry ?? false;
    message.deprecated_legacy_json_field_conflicts = object.deprecated_legacy_json_field_conflicts ?? false;
    message.features = (object.features !== undefined && object.features !== null)
      ? FeatureSet.fromPartial(object.features)
      : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFieldOptions(): FieldOptions {
  return {
    ctype: 0,
    packed: false,
    jstype: 0,
    lazy: false,
    unverified_lazy: false,
    deprecated: false,
    weak: false,
    debug_redact: false,
    retention: 0,
    targets: [],
    edition_defaults: [],
    features: undefined,
    uninterpreted_option: [],
  };
}

export const FieldOptions = {
  encode(message: FieldOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctype !== undefined && message.ctype !== 0) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed !== undefined && message.packed !== false) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== undefined && message.jstype !== 0) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy !== undefined && message.lazy !== false) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.unverified_lazy !== undefined && message.unverified_lazy !== false) {
      writer.uint32(120).bool(message.unverified_lazy);
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak !== undefined && message.weak !== false) {
      writer.uint32(80).bool(message.weak);
    }
    if (message.debug_redact !== undefined && message.debug_redact !== false) {
      writer.uint32(128).bool(message.debug_redact);
    }
    if (message.retention !== undefined && message.retention !== 0) {
      writer.uint32(136).int32(message.retention);
    }
    writer.uint32(154).fork();
    for (const v of message.targets) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.edition_defaults) {
      FieldOptions_EditionDefault.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ctype = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.packed = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.jstype = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lazy = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.unverified_lazy = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.weak = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.debug_redact = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.retention = reader.int32() as any;
          continue;
        case 19:
          if (tag === 152) {
            message.targets.push(reader.int32() as any);

            continue;
          }

          if (tag === 154) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.targets.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.edition_defaults.push(FieldOptions_EditionDefault.decode(reader, reader.uint32()));
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.features = FeatureSet.decode(reader, reader.uint32());
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldOptions {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : 0,
      packed: isSet(object.packed) ? globalThis.Boolean(object.packed) : false,
      jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : 0,
      lazy: isSet(object.lazy) ? globalThis.Boolean(object.lazy) : false,
      unverified_lazy: isSet(object.unverified_lazy) ? globalThis.Boolean(object.unverified_lazy) : false,
      deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
      weak: isSet(object.weak) ? globalThis.Boolean(object.weak) : false,
      debug_redact: isSet(object.debug_redact) ? globalThis.Boolean(object.debug_redact) : false,
      retention: isSet(object.retention) ? fieldOptions_OptionRetentionFromJSON(object.retention) : 0,
      targets: globalThis.Array.isArray(object?.targets)
        ? object.targets.map((e: any) => fieldOptions_OptionTargetTypeFromJSON(e))
        : [],
      edition_defaults: globalThis.Array.isArray(object?.edition_defaults)
        ? object.edition_defaults.map((e: any) => FieldOptions_EditionDefault.fromJSON(e))
        : [],
      features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
      uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FieldOptions): unknown {
    const obj: any = {};
    if (message.ctype !== undefined && message.ctype !== 0) {
      obj.ctype = fieldOptions_CTypeToJSON(message.ctype);
    }
    if (message.packed !== undefined && message.packed !== false) {
      obj.packed = message.packed;
    }
    if (message.jstype !== undefined && message.jstype !== 0) {
      obj.jstype = fieldOptions_JSTypeToJSON(message.jstype);
    }
    if (message.lazy !== undefined && message.lazy !== false) {
      obj.lazy = message.lazy;
    }
    if (message.unverified_lazy !== undefined && message.unverified_lazy !== false) {
      obj.unverified_lazy = message.unverified_lazy;
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (message.weak !== undefined && message.weak !== false) {
      obj.weak = message.weak;
    }
    if (message.debug_redact !== undefined && message.debug_redact !== false) {
      obj.debug_redact = message.debug_redact;
    }
    if (message.retention !== undefined && message.retention !== 0) {
      obj.retention = fieldOptions_OptionRetentionToJSON(message.retention);
    }
    if (message.targets?.length) {
      obj.targets = message.targets.map((e) => fieldOptions_OptionTargetTypeToJSON(e));
    }
    if (message.edition_defaults?.length) {
      obj.edition_defaults = message.edition_defaults.map((e) => FieldOptions_EditionDefault.toJSON(e));
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FieldOptions>, I>>(base?: I): FieldOptions {
    return FieldOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FieldOptions>, I>>(object: I): FieldOptions {
    const message = createBaseFieldOptions();
    message.ctype = object.ctype ?? 0;
    message.packed = object.packed ?? false;
    message.jstype = object.jstype ?? 0;
    message.lazy = object.lazy ?? false;
    message.unverified_lazy = object.unverified_lazy ?? false;
    message.deprecated = object.deprecated ?? false;
    message.weak = object.weak ?? false;
    message.debug_redact = object.debug_redact ?? false;
    message.retention = object.retention ?? 0;
    message.targets = object.targets?.map((e) => e) || [];
    message.edition_defaults = object.edition_defaults?.map((e) => FieldOptions_EditionDefault.fromPartial(e)) || [];
    message.features = (object.features !== undefined && object.features !== null)
      ? FeatureSet.fromPartial(object.features)
      : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFieldOptions_EditionDefault(): FieldOptions_EditionDefault {
  return { edition: 0, value: "" };
}

export const FieldOptions_EditionDefault = {
  encode(message: FieldOptions_EditionDefault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.edition !== undefined && message.edition !== 0) {
      writer.uint32(24).int32(message.edition);
    }
    if (message.value !== undefined && message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions_EditionDefault {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions_EditionDefault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 24) {
            break;
          }

          message.edition = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldOptions_EditionDefault {
    return {
      edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: FieldOptions_EditionDefault): unknown {
    const obj: any = {};
    if (message.edition !== undefined && message.edition !== 0) {
      obj.edition = editionToJSON(message.edition);
    }
    if (message.value !== undefined && message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FieldOptions_EditionDefault>, I>>(base?: I): FieldOptions_EditionDefault {
    return FieldOptions_EditionDefault.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FieldOptions_EditionDefault>, I>>(object: I): FieldOptions_EditionDefault {
    const message = createBaseFieldOptions_EditionDefault();
    message.edition = object.edition ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseOneofOptions(): OneofOptions {
  return { features: undefined, uninterpreted_option: [] };
}

export const OneofOptions = {
  encode(message: OneofOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneofOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.features = FeatureSet.decode(reader, reader.uint32());
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OneofOptions {
    return {
      features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
      uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OneofOptions): unknown {
    const obj: any = {};
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OneofOptions>, I>>(base?: I): OneofOptions {
    return OneofOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OneofOptions>, I>>(object: I): OneofOptions {
    const message = createBaseOneofOptions();
    message.features = (object.features !== undefined && object.features !== null)
      ? FeatureSet.fromPartial(object.features)
      : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEnumOptions(): EnumOptions {
  return {
    allow_alias: false,
    deprecated: false,
    deprecated_legacy_json_field_conflicts: false,
    features: undefined,
    uninterpreted_option: [],
  };
}

export const EnumOptions = {
  encode(message: EnumOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allow_alias !== undefined && message.allow_alias !== false) {
      writer.uint32(16).bool(message.allow_alias);
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (
      message.deprecated_legacy_json_field_conflicts !== undefined &&
      message.deprecated_legacy_json_field_conflicts !== false
    ) {
      writer.uint32(48).bool(message.deprecated_legacy_json_field_conflicts);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allow_alias = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.deprecated_legacy_json_field_conflicts = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.features = FeatureSet.decode(reader, reader.uint32());
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumOptions {
    return {
      allow_alias: isSet(object.allow_alias) ? globalThis.Boolean(object.allow_alias) : false,
      deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
      deprecated_legacy_json_field_conflicts: isSet(object.deprecated_legacy_json_field_conflicts)
        ? globalThis.Boolean(object.deprecated_legacy_json_field_conflicts)
        : false,
      features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
      uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EnumOptions): unknown {
    const obj: any = {};
    if (message.allow_alias !== undefined && message.allow_alias !== false) {
      obj.allow_alias = message.allow_alias;
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (
      message.deprecated_legacy_json_field_conflicts !== undefined &&
      message.deprecated_legacy_json_field_conflicts !== false
    ) {
      obj.deprecated_legacy_json_field_conflicts = message.deprecated_legacy_json_field_conflicts;
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnumOptions>, I>>(base?: I): EnumOptions {
    return EnumOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnumOptions>, I>>(object: I): EnumOptions {
    const message = createBaseEnumOptions();
    message.allow_alias = object.allow_alias ?? false;
    message.deprecated = object.deprecated ?? false;
    message.deprecated_legacy_json_field_conflicts = object.deprecated_legacy_json_field_conflicts ?? false;
    message.features = (object.features !== undefined && object.features !== null)
      ? FeatureSet.fromPartial(object.features)
      : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEnumValueOptions(): EnumValueOptions {
  return { deprecated: false, features: undefined, debug_redact: false, uninterpreted_option: [] };
}

export const EnumValueOptions = {
  encode(message: EnumValueOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated !== undefined && message.deprecated !== false) {
      writer.uint32(8).bool(message.deprecated);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(18).fork()).ldelim();
    }
    if (message.debug_redact !== undefined && message.debug_redact !== false) {
      writer.uint32(24).bool(message.debug_redact);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.features = FeatureSet.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.debug_redact = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumValueOptions {
    return {
      deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
      features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
      debug_redact: isSet(object.debug_redact) ? globalThis.Boolean(object.debug_redact) : false,
      uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EnumValueOptions): unknown {
    const obj: any = {};
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.debug_redact !== undefined && message.debug_redact !== false) {
      obj.debug_redact = message.debug_redact;
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnumValueOptions>, I>>(base?: I): EnumValueOptions {
    return EnumValueOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnumValueOptions>, I>>(object: I): EnumValueOptions {
    const message = createBaseEnumValueOptions();
    message.deprecated = object.deprecated ?? false;
    message.features = (object.features !== undefined && object.features !== null)
      ? FeatureSet.fromPartial(object.features)
      : undefined;
    message.debug_redact = object.debug_redact ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseServiceOptions(): ServiceOptions {
  return { features: undefined, deprecated: false, uninterpreted_option: [] };
}

export const ServiceOptions = {
  encode(message: ServiceOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(274).fork()).ldelim();
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 34:
          if (tag !== 274) {
            break;
          }

          message.features = FeatureSet.decode(reader, reader.uint32());
          continue;
        case 33:
          if (tag !== 264) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceOptions {
    return {
      features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
      deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
      uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ServiceOptions): unknown {
    const obj: any = {};
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceOptions>, I>>(base?: I): ServiceOptions {
    return ServiceOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceOptions>, I>>(object: I): ServiceOptions {
    const message = createBaseServiceOptions();
    message.features = (object.features !== undefined && object.features !== null)
      ? FeatureSet.fromPartial(object.features)
      : undefined;
    message.deprecated = object.deprecated ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMethodOptions(): MethodOptions {
  return { deprecated: false, idempotency_level: 0, features: undefined, uninterpreted_option: [] };
}

export const MethodOptions = {
  encode(message: MethodOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated !== undefined && message.deprecated !== false) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotency_level !== undefined && message.idempotency_level !== 0) {
      writer.uint32(272).int32(message.idempotency_level);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(282).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          if (tag !== 264) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.idempotency_level = reader.int32() as any;
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.features = FeatureSet.decode(reader, reader.uint32());
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MethodOptions {
    return {
      deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
      idempotency_level: isSet(object.idempotency_level)
        ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level)
        : 0,
      features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
      uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MethodOptions): unknown {
    const obj: any = {};
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (message.idempotency_level !== undefined && message.idempotency_level !== 0) {
      obj.idempotency_level = methodOptions_IdempotencyLevelToJSON(message.idempotency_level);
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MethodOptions>, I>>(base?: I): MethodOptions {
    return MethodOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MethodOptions>, I>>(object: I): MethodOptions {
    const message = createBaseMethodOptions();
    message.deprecated = object.deprecated ?? false;
    message.idempotency_level = object.idempotency_level ?? 0;
    message.features = (object.features !== undefined && object.features !== null)
      ? FeatureSet.fromPartial(object.features)
      : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUninterpretedOption(): UninterpretedOption {
  return {
    name: [],
    identifier_value: "",
    positive_int_value: 0,
    negative_int_value: 0,
    double_value: 0,
    string_value: new Uint8Array(0),
    aggregate_value: "",
  };
}

export const UninterpretedOption = {
  encode(message: UninterpretedOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifier_value !== undefined && message.identifier_value !== "") {
      writer.uint32(26).string(message.identifier_value);
    }
    if (message.positive_int_value !== undefined && message.positive_int_value !== 0) {
      writer.uint32(32).uint64(message.positive_int_value);
    }
    if (message.negative_int_value !== undefined && message.negative_int_value !== 0) {
      writer.uint32(40).int64(message.negative_int_value);
    }
    if (message.double_value !== undefined && message.double_value !== 0) {
      writer.uint32(49).double(message.double_value);
    }
    if (message.string_value !== undefined && message.string_value.length !== 0) {
      writer.uint32(58).bytes(message.string_value);
    }
    if (message.aggregate_value !== undefined && message.aggregate_value !== "") {
      writer.uint32(66).string(message.aggregate_value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identifier_value = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.positive_int_value = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.negative_int_value = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.double_value = reader.double();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.string_value = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.aggregate_value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UninterpretedOption {
    return {
      name: globalThis.Array.isArray(object?.name)
        ? object.name.map((e: any) => UninterpretedOption_NamePart.fromJSON(e))
        : [],
      identifier_value: isSet(object.identifier_value) ? globalThis.String(object.identifier_value) : "",
      positive_int_value: isSet(object.positive_int_value) ? globalThis.Number(object.positive_int_value) : 0,
      negative_int_value: isSet(object.negative_int_value) ? globalThis.Number(object.negative_int_value) : 0,
      double_value: isSet(object.double_value) ? globalThis.Number(object.double_value) : 0,
      string_value: isSet(object.string_value) ? bytesFromBase64(object.string_value) : new Uint8Array(0),
      aggregate_value: isSet(object.aggregate_value) ? globalThis.String(object.aggregate_value) : "",
    };
  },

  toJSON(message: UninterpretedOption): unknown {
    const obj: any = {};
    if (message.name?.length) {
      obj.name = message.name.map((e) => UninterpretedOption_NamePart.toJSON(e));
    }
    if (message.identifier_value !== undefined && message.identifier_value !== "") {
      obj.identifier_value = message.identifier_value;
    }
    if (message.positive_int_value !== undefined && message.positive_int_value !== 0) {
      obj.positive_int_value = Math.round(message.positive_int_value);
    }
    if (message.negative_int_value !== undefined && message.negative_int_value !== 0) {
      obj.negative_int_value = Math.round(message.negative_int_value);
    }
    if (message.double_value !== undefined && message.double_value !== 0) {
      obj.double_value = message.double_value;
    }
    if (message.string_value !== undefined && message.string_value.length !== 0) {
      obj.string_value = base64FromBytes(message.string_value);
    }
    if (message.aggregate_value !== undefined && message.aggregate_value !== "") {
      obj.aggregate_value = message.aggregate_value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UninterpretedOption>, I>>(base?: I): UninterpretedOption {
    return UninterpretedOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UninterpretedOption>, I>>(object: I): UninterpretedOption {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map((e) => UninterpretedOption_NamePart.fromPartial(e)) || [];
    message.identifier_value = object.identifier_value ?? "";
    message.positive_int_value = object.positive_int_value ?? 0;
    message.negative_int_value = object.negative_int_value ?? 0;
    message.double_value = object.double_value ?? 0;
    message.string_value = object.string_value ?? new Uint8Array(0);
    message.aggregate_value = object.aggregate_value ?? "";
    return message;
  },
};

function createBaseUninterpretedOption_NamePart(): UninterpretedOption_NamePart {
  return { name_part: "", is_extension: false };
}

export const UninterpretedOption_NamePart = {
  encode(message: UninterpretedOption_NamePart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name_part !== "") {
      writer.uint32(10).string(message.name_part);
    }
    if (message.is_extension !== false) {
      writer.uint32(16).bool(message.is_extension);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption_NamePart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name_part = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.is_extension = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UninterpretedOption_NamePart {
    return {
      name_part: isSet(object.name_part) ? globalThis.String(object.name_part) : "",
      is_extension: isSet(object.is_extension) ? globalThis.Boolean(object.is_extension) : false,
    };
  },

  toJSON(message: UninterpretedOption_NamePart): unknown {
    const obj: any = {};
    if (message.name_part !== "") {
      obj.name_part = message.name_part;
    }
    if (message.is_extension !== false) {
      obj.is_extension = message.is_extension;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UninterpretedOption_NamePart>, I>>(base?: I): UninterpretedOption_NamePart {
    return UninterpretedOption_NamePart.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UninterpretedOption_NamePart>, I>>(object: I): UninterpretedOption_NamePart {
    const message = createBaseUninterpretedOption_NamePart();
    message.name_part = object.name_part ?? "";
    message.is_extension = object.is_extension ?? false;
    return message;
  },
};

function createBaseFeatureSet(): FeatureSet {
  return {
    field_presence: 0,
    enum_type: 0,
    repeated_field_encoding: 0,
    utf8_validation: 0,
    message_encoding: 0,
    json_format: 0,
  };
}

export const FeatureSet = {
  encode(message: FeatureSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field_presence !== undefined && message.field_presence !== 0) {
      writer.uint32(8).int32(message.field_presence);
    }
    if (message.enum_type !== undefined && message.enum_type !== 0) {
      writer.uint32(16).int32(message.enum_type);
    }
    if (message.repeated_field_encoding !== undefined && message.repeated_field_encoding !== 0) {
      writer.uint32(24).int32(message.repeated_field_encoding);
    }
    if (message.utf8_validation !== undefined && message.utf8_validation !== 0) {
      writer.uint32(32).int32(message.utf8_validation);
    }
    if (message.message_encoding !== undefined && message.message_encoding !== 0) {
      writer.uint32(40).int32(message.message_encoding);
    }
    if (message.json_format !== undefined && message.json_format !== 0) {
      writer.uint32(48).int32(message.json_format);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.field_presence = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enum_type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.repeated_field_encoding = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.utf8_validation = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.message_encoding = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.json_format = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeatureSet {
    return {
      field_presence: isSet(object.field_presence) ? featureSet_FieldPresenceFromJSON(object.field_presence) : 0,
      enum_type: isSet(object.enum_type) ? featureSet_EnumTypeFromJSON(object.enum_type) : 0,
      repeated_field_encoding: isSet(object.repeated_field_encoding)
        ? featureSet_RepeatedFieldEncodingFromJSON(object.repeated_field_encoding)
        : 0,
      utf8_validation: isSet(object.utf8_validation) ? featureSet_Utf8ValidationFromJSON(object.utf8_validation) : 0,
      message_encoding: isSet(object.message_encoding)
        ? featureSet_MessageEncodingFromJSON(object.message_encoding)
        : 0,
      json_format: isSet(object.json_format) ? featureSet_JsonFormatFromJSON(object.json_format) : 0,
    };
  },

  toJSON(message: FeatureSet): unknown {
    const obj: any = {};
    if (message.field_presence !== undefined && message.field_presence !== 0) {
      obj.field_presence = featureSet_FieldPresenceToJSON(message.field_presence);
    }
    if (message.enum_type !== undefined && message.enum_type !== 0) {
      obj.enum_type = featureSet_EnumTypeToJSON(message.enum_type);
    }
    if (message.repeated_field_encoding !== undefined && message.repeated_field_encoding !== 0) {
      obj.repeated_field_encoding = featureSet_RepeatedFieldEncodingToJSON(message.repeated_field_encoding);
    }
    if (message.utf8_validation !== undefined && message.utf8_validation !== 0) {
      obj.utf8_validation = featureSet_Utf8ValidationToJSON(message.utf8_validation);
    }
    if (message.message_encoding !== undefined && message.message_encoding !== 0) {
      obj.message_encoding = featureSet_MessageEncodingToJSON(message.message_encoding);
    }
    if (message.json_format !== undefined && message.json_format !== 0) {
      obj.json_format = featureSet_JsonFormatToJSON(message.json_format);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeatureSet>, I>>(base?: I): FeatureSet {
    return FeatureSet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeatureSet>, I>>(object: I): FeatureSet {
    const message = createBaseFeatureSet();
    message.field_presence = object.field_presence ?? 0;
    message.enum_type = object.enum_type ?? 0;
    message.repeated_field_encoding = object.repeated_field_encoding ?? 0;
    message.utf8_validation = object.utf8_validation ?? 0;
    message.message_encoding = object.message_encoding ?? 0;
    message.json_format = object.json_format ?? 0;
    return message;
  },
};

function createBaseFeatureSetDefaults(): FeatureSetDefaults {
  return { defaults: [], minimum_edition: 0, maximum_edition: 0 };
}

export const FeatureSetDefaults = {
  encode(message: FeatureSetDefaults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.defaults) {
      FeatureSetDefaults_FeatureSetEditionDefault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.minimum_edition !== undefined && message.minimum_edition !== 0) {
      writer.uint32(32).int32(message.minimum_edition);
    }
    if (message.maximum_edition !== undefined && message.maximum_edition !== 0) {
      writer.uint32(40).int32(message.maximum_edition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureSetDefaults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureSetDefaults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaults.push(FeatureSetDefaults_FeatureSetEditionDefault.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.minimum_edition = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maximum_edition = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeatureSetDefaults {
    return {
      defaults: globalThis.Array.isArray(object?.defaults)
        ? object.defaults.map((e: any) => FeatureSetDefaults_FeatureSetEditionDefault.fromJSON(e))
        : [],
      minimum_edition: isSet(object.minimum_edition) ? editionFromJSON(object.minimum_edition) : 0,
      maximum_edition: isSet(object.maximum_edition) ? editionFromJSON(object.maximum_edition) : 0,
    };
  },

  toJSON(message: FeatureSetDefaults): unknown {
    const obj: any = {};
    if (message.defaults?.length) {
      obj.defaults = message.defaults.map((e) => FeatureSetDefaults_FeatureSetEditionDefault.toJSON(e));
    }
    if (message.minimum_edition !== undefined && message.minimum_edition !== 0) {
      obj.minimum_edition = editionToJSON(message.minimum_edition);
    }
    if (message.maximum_edition !== undefined && message.maximum_edition !== 0) {
      obj.maximum_edition = editionToJSON(message.maximum_edition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeatureSetDefaults>, I>>(base?: I): FeatureSetDefaults {
    return FeatureSetDefaults.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeatureSetDefaults>, I>>(object: I): FeatureSetDefaults {
    const message = createBaseFeatureSetDefaults();
    message.defaults = object.defaults?.map((e) => FeatureSetDefaults_FeatureSetEditionDefault.fromPartial(e)) || [];
    message.minimum_edition = object.minimum_edition ?? 0;
    message.maximum_edition = object.maximum_edition ?? 0;
    return message;
  },
};

function createBaseFeatureSetDefaults_FeatureSetEditionDefault(): FeatureSetDefaults_FeatureSetEditionDefault {
  return { edition: 0, features: undefined };
}

export const FeatureSetDefaults_FeatureSetEditionDefault = {
  encode(message: FeatureSetDefaults_FeatureSetEditionDefault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.edition !== undefined && message.edition !== 0) {
      writer.uint32(24).int32(message.edition);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureSetDefaults_FeatureSetEditionDefault {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 24) {
            break;
          }

          message.edition = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.features = FeatureSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeatureSetDefaults_FeatureSetEditionDefault {
    return {
      edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0,
      features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
    };
  },

  toJSON(message: FeatureSetDefaults_FeatureSetEditionDefault): unknown {
    const obj: any = {};
    if (message.edition !== undefined && message.edition !== 0) {
      obj.edition = editionToJSON(message.edition);
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeatureSetDefaults_FeatureSetEditionDefault>, I>>(
    base?: I,
  ): FeatureSetDefaults_FeatureSetEditionDefault {
    return FeatureSetDefaults_FeatureSetEditionDefault.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeatureSetDefaults_FeatureSetEditionDefault>, I>>(
    object: I,
  ): FeatureSetDefaults_FeatureSetEditionDefault {
    const message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
    message.edition = object.edition ?? 0;
    message.features = (object.features !== undefined && object.features !== null)
      ? FeatureSet.fromPartial(object.features)
      : undefined;
    return message;
  },
};

function createBaseSourceCodeInfo(): SourceCodeInfo {
  return { location: [] };
}

export const SourceCodeInfo = {
  encode(message: SourceCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceCodeInfo {
    return {
      location: globalThis.Array.isArray(object?.location)
        ? object.location.map((e: any) => SourceCodeInfo_Location.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SourceCodeInfo): unknown {
    const obj: any = {};
    if (message.location?.length) {
      obj.location = message.location.map((e) => SourceCodeInfo_Location.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SourceCodeInfo>, I>>(base?: I): SourceCodeInfo {
    return SourceCodeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SourceCodeInfo>, I>>(object: I): SourceCodeInfo {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map((e) => SourceCodeInfo_Location.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSourceCodeInfo_Location(): SourceCodeInfo_Location {
  return { path: [], span: [], leading_comments: "", trailing_comments: "", leading_detached_comments: [] };
}

export const SourceCodeInfo_Location = {
  encode(message: SourceCodeInfo_Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leading_comments !== undefined && message.leading_comments !== "") {
      writer.uint32(26).string(message.leading_comments);
    }
    if (message.trailing_comments !== undefined && message.trailing_comments !== "") {
      writer.uint32(34).string(message.trailing_comments);
    }
    for (const v of message.leading_detached_comments) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo_Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.path.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag === 16) {
            message.span.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.leading_comments = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.trailing_comments = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.leading_detached_comments.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceCodeInfo_Location {
    return {
      path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.Number(e)) : [],
      span: globalThis.Array.isArray(object?.span) ? object.span.map((e: any) => globalThis.Number(e)) : [],
      leading_comments: isSet(object.leading_comments) ? globalThis.String(object.leading_comments) : "",
      trailing_comments: isSet(object.trailing_comments) ? globalThis.String(object.trailing_comments) : "",
      leading_detached_comments: globalThis.Array.isArray(object?.leading_detached_comments)
        ? object.leading_detached_comments.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: SourceCodeInfo_Location): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path.map((e) => Math.round(e));
    }
    if (message.span?.length) {
      obj.span = message.span.map((e) => Math.round(e));
    }
    if (message.leading_comments !== undefined && message.leading_comments !== "") {
      obj.leading_comments = message.leading_comments;
    }
    if (message.trailing_comments !== undefined && message.trailing_comments !== "") {
      obj.trailing_comments = message.trailing_comments;
    }
    if (message.leading_detached_comments?.length) {
      obj.leading_detached_comments = message.leading_detached_comments;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SourceCodeInfo_Location>, I>>(base?: I): SourceCodeInfo_Location {
    return SourceCodeInfo_Location.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SourceCodeInfo_Location>, I>>(object: I): SourceCodeInfo_Location {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map((e) => e) || [];
    message.span = object.span?.map((e) => e) || [];
    message.leading_comments = object.leading_comments ?? "";
    message.trailing_comments = object.trailing_comments ?? "";
    message.leading_detached_comments = object.leading_detached_comments?.map((e) => e) || [];
    return message;
  },
};

function createBaseGeneratedCodeInfo(): GeneratedCodeInfo {
  return { annotation: [] };
}

export const GeneratedCodeInfo = {
  encode(message: GeneratedCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GeneratedCodeInfo {
    return {
      annotation: globalThis.Array.isArray(object?.annotation)
        ? object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GeneratedCodeInfo): unknown {
    const obj: any = {};
    if (message.annotation?.length) {
      obj.annotation = message.annotation.map((e) => GeneratedCodeInfo_Annotation.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratedCodeInfo>, I>>(base?: I): GeneratedCodeInfo {
    return GeneratedCodeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratedCodeInfo>, I>>(object: I): GeneratedCodeInfo {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map((e) => GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGeneratedCodeInfo_Annotation(): GeneratedCodeInfo_Annotation {
  return { path: [], source_file: "", begin: 0, end: 0, semantic: 0 };
}

export const GeneratedCodeInfo_Annotation = {
  encode(message: GeneratedCodeInfo_Annotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.source_file !== undefined && message.source_file !== "") {
      writer.uint32(18).string(message.source_file);
    }
    if (message.begin !== undefined && message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== undefined && message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    if (message.semantic !== undefined && message.semantic !== 0) {
      writer.uint32(40).int32(message.semantic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.path.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.source_file = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.begin = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.end = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.semantic = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GeneratedCodeInfo_Annotation {
    return {
      path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.Number(e)) : [],
      source_file: isSet(object.source_file) ? globalThis.String(object.source_file) : "",
      begin: isSet(object.begin) ? globalThis.Number(object.begin) : 0,
      end: isSet(object.end) ? globalThis.Number(object.end) : 0,
      semantic: isSet(object.semantic) ? generatedCodeInfo_Annotation_SemanticFromJSON(object.semantic) : 0,
    };
  },

  toJSON(message: GeneratedCodeInfo_Annotation): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path.map((e) => Math.round(e));
    }
    if (message.source_file !== undefined && message.source_file !== "") {
      obj.source_file = message.source_file;
    }
    if (message.begin !== undefined && message.begin !== 0) {
      obj.begin = Math.round(message.begin);
    }
    if (message.end !== undefined && message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    if (message.semantic !== undefined && message.semantic !== 0) {
      obj.semantic = generatedCodeInfo_Annotation_SemanticToJSON(message.semantic);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratedCodeInfo_Annotation>, I>>(base?: I): GeneratedCodeInfo_Annotation {
    return GeneratedCodeInfo_Annotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratedCodeInfo_Annotation>, I>>(object: I): GeneratedCodeInfo_Annotation {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map((e) => e) || [];
    message.source_file = object.source_file ?? "";
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.semantic = object.semantic ?? 0;
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
