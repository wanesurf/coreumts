// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/autocli/v1/query.proto (package cosmos.autocli.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ModuleOptions } from "./options_pb.js";

/**
 * AppOptionsRequest is the RemoteInfoService/AppOptions request type.
 *
 * @generated from message cosmos.autocli.v1.AppOptionsRequest
 */
export class AppOptionsRequest extends Message<AppOptionsRequest> {
  constructor(data?: PartialMessage<AppOptionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.autocli.v1.AppOptionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppOptionsRequest {
    return new AppOptionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppOptionsRequest {
    return new AppOptionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppOptionsRequest {
    return new AppOptionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AppOptionsRequest | PlainMessage<AppOptionsRequest> | undefined, b: AppOptionsRequest | PlainMessage<AppOptionsRequest> | undefined): boolean {
    return proto3.util.equals(AppOptionsRequest, a, b);
  }
}

/**
 * AppOptionsResponse is the RemoteInfoService/AppOptions response type.
 *
 * @generated from message cosmos.autocli.v1.AppOptionsResponse
 */
export class AppOptionsResponse extends Message<AppOptionsResponse> {
  /**
   * module_options is a map of module name to autocli module options.
   *
   * @generated from field: map<string, cosmos.autocli.v1.ModuleOptions> module_options = 1;
   */
  moduleOptions: { [key: string]: ModuleOptions } = {};

  constructor(data?: PartialMessage<AppOptionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.autocli.v1.AppOptionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "module_options", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: ModuleOptions} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppOptionsResponse {
    return new AppOptionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppOptionsResponse {
    return new AppOptionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppOptionsResponse {
    return new AppOptionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AppOptionsResponse | PlainMessage<AppOptionsResponse> | undefined, b: AppOptionsResponse | PlainMessage<AppOptionsResponse> | undefined): boolean {
    return proto3.util.equals(AppOptionsResponse, a, b);
  }
}

