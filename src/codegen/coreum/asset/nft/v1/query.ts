import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Class, ClassAmino, ClassSDKType } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** QueryParamsRequest defines the request type for querying x/asset/nft parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/asset/nft parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/asset/nft parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/asset/nft parameters. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/asset/nft parameters. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/asset/nft parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryTokenRequest is request type for the Query/Class RPC method. */
export interface QueryClassRequest {
  /** we don't use the gogoproto.customname here since the google.api.http ignores it and generates invalid code. */
  id: string;
}
export interface QueryClassRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryClassRequest";
  value: Uint8Array;
}
/** QueryTokenRequest is request type for the Query/Class RPC method. */
export interface QueryClassRequestAmino {
  /** we don't use the gogoproto.customname here since the google.api.http ignores it and generates invalid code. */
  id?: string;
}
export interface QueryClassRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryClassRequest";
  value: QueryClassRequestAmino;
}
/** QueryTokenRequest is request type for the Query/Class RPC method. */
export interface QueryClassRequestSDKType {
  id: string;
}
/** QueryClassResponse is response type for the Query/Class RPC method. */
export interface QueryClassResponse {
  class: Class;
}
export interface QueryClassResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryClassResponse";
  value: Uint8Array;
}
/** QueryClassResponse is response type for the Query/Class RPC method. */
export interface QueryClassResponseAmino {
  class?: ClassAmino;
}
export interface QueryClassResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryClassResponse";
  value: QueryClassResponseAmino;
}
/** QueryClassResponse is response type for the Query/Class RPC method. */
export interface QueryClassResponseSDKType {
  class: ClassSDKType;
}
/** QueryTokenRequest is request type for the Query/Classes RPC method. */
export interface QueryClassesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  issuer: string;
}
export interface QueryClassesRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryClassesRequest";
  value: Uint8Array;
}
/** QueryTokenRequest is request type for the Query/Classes RPC method. */
export interface QueryClassesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  issuer?: string;
}
export interface QueryClassesRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryClassesRequest";
  value: QueryClassesRequestAmino;
}
/** QueryTokenRequest is request type for the Query/Classes RPC method. */
export interface QueryClassesRequestSDKType {
  pagination?: PageRequestSDKType;
  issuer: string;
}
/** QueryClassResponse is response type for the Query/Classes RPC method. */
export interface QueryClassesResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
  classes: Class[];
}
export interface QueryClassesResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryClassesResponse";
  value: Uint8Array;
}
/** QueryClassResponse is response type for the Query/Classes RPC method. */
export interface QueryClassesResponseAmino {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  classes?: ClassAmino[];
}
export interface QueryClassesResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryClassesResponse";
  value: QueryClassesResponseAmino;
}
/** QueryClassResponse is response type for the Query/Classes RPC method. */
export interface QueryClassesResponseSDKType {
  pagination?: PageResponseSDKType;
  classes: ClassSDKType[];
}
export interface QueryFrozenRequest {
  id: string;
  classId: string;
}
export interface QueryFrozenRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryFrozenRequest";
  value: Uint8Array;
}
export interface QueryFrozenRequestAmino {
  id?: string;
  class_id?: string;
}
export interface QueryFrozenRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryFrozenRequest";
  value: QueryFrozenRequestAmino;
}
export interface QueryFrozenRequestSDKType {
  id: string;
  class_id: string;
}
export interface QueryFrozenResponse {
  frozen: boolean;
}
export interface QueryFrozenResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryFrozenResponse";
  value: Uint8Array;
}
export interface QueryFrozenResponseAmino {
  frozen?: boolean;
}
export interface QueryFrozenResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryFrozenResponse";
  value: QueryFrozenResponseAmino;
}
export interface QueryFrozenResponseSDKType {
  frozen: boolean;
}
export interface QueryClassFrozenRequest {
  classId: string;
  account: string;
}
export interface QueryClassFrozenRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenRequest";
  value: Uint8Array;
}
export interface QueryClassFrozenRequestAmino {
  class_id?: string;
  account?: string;
}
export interface QueryClassFrozenRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryClassFrozenRequest";
  value: QueryClassFrozenRequestAmino;
}
export interface QueryClassFrozenRequestSDKType {
  class_id: string;
  account: string;
}
export interface QueryClassFrozenResponse {
  frozen: boolean;
}
export interface QueryClassFrozenResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenResponse";
  value: Uint8Array;
}
export interface QueryClassFrozenResponseAmino {
  frozen?: boolean;
}
export interface QueryClassFrozenResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryClassFrozenResponse";
  value: QueryClassFrozenResponseAmino;
}
export interface QueryClassFrozenResponseSDKType {
  frozen: boolean;
}
export interface QueryWhitelistedRequest {
  id: string;
  classId: string;
  account: string;
}
export interface QueryWhitelistedRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedRequest";
  value: Uint8Array;
}
export interface QueryWhitelistedRequestAmino {
  id?: string;
  class_id?: string;
  account?: string;
}
export interface QueryWhitelistedRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryWhitelistedRequest";
  value: QueryWhitelistedRequestAmino;
}
export interface QueryWhitelistedRequestSDKType {
  id: string;
  class_id: string;
  account: string;
}
export interface QueryWhitelistedResponse {
  whitelisted: boolean;
}
export interface QueryWhitelistedResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedResponse";
  value: Uint8Array;
}
export interface QueryWhitelistedResponseAmino {
  whitelisted?: boolean;
}
export interface QueryWhitelistedResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryWhitelistedResponse";
  value: QueryWhitelistedResponseAmino;
}
export interface QueryWhitelistedResponseSDKType {
  whitelisted: boolean;
}
export interface QueryWhitelistedAccountsForNFTRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  id: string;
  classId: string;
}
export interface QueryWhitelistedAccountsForNFTRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedAccountsForNFTRequest";
  value: Uint8Array;
}
export interface QueryWhitelistedAccountsForNFTRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  id?: string;
  class_id?: string;
}
export interface QueryWhitelistedAccountsForNFTRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryWhitelistedAccountsForNFTRequest";
  value: QueryWhitelistedAccountsForNFTRequestAmino;
}
export interface QueryWhitelistedAccountsForNFTRequestSDKType {
  pagination?: PageRequestSDKType;
  id: string;
  class_id: string;
}
export interface QueryWhitelistedAccountsForNFTResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
  accounts: string[];
}
export interface QueryWhitelistedAccountsForNFTResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedAccountsForNFTResponse";
  value: Uint8Array;
}
export interface QueryWhitelistedAccountsForNFTResponseAmino {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  accounts?: string[];
}
export interface QueryWhitelistedAccountsForNFTResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryWhitelistedAccountsForNFTResponse";
  value: QueryWhitelistedAccountsForNFTResponseAmino;
}
export interface QueryWhitelistedAccountsForNFTResponseSDKType {
  pagination?: PageResponseSDKType;
  accounts: string[];
}
export interface QueryClassWhitelistedAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  classId: string;
}
export interface QueryClassWhitelistedAccountsRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryClassWhitelistedAccountsRequest";
  value: Uint8Array;
}
export interface QueryClassWhitelistedAccountsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  class_id?: string;
}
export interface QueryClassWhitelistedAccountsRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryClassWhitelistedAccountsRequest";
  value: QueryClassWhitelistedAccountsRequestAmino;
}
export interface QueryClassWhitelistedAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
  class_id: string;
}
export interface QueryClassWhitelistedAccountsResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
  accounts: string[];
}
export interface QueryClassWhitelistedAccountsResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryClassWhitelistedAccountsResponse";
  value: Uint8Array;
}
export interface QueryClassWhitelistedAccountsResponseAmino {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  accounts?: string[];
}
export interface QueryClassWhitelistedAccountsResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryClassWhitelistedAccountsResponse";
  value: QueryClassWhitelistedAccountsResponseAmino;
}
export interface QueryClassWhitelistedAccountsResponseSDKType {
  pagination?: PageResponseSDKType;
  accounts: string[];
}
export interface QueryClassFrozenAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  classId: string;
}
export interface QueryClassFrozenAccountsRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenAccountsRequest";
  value: Uint8Array;
}
export interface QueryClassFrozenAccountsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  class_id?: string;
}
export interface QueryClassFrozenAccountsRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryClassFrozenAccountsRequest";
  value: QueryClassFrozenAccountsRequestAmino;
}
export interface QueryClassFrozenAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
  class_id: string;
}
export interface QueryClassFrozenAccountsResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
  accounts: string[];
}
export interface QueryClassFrozenAccountsResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenAccountsResponse";
  value: Uint8Array;
}
export interface QueryClassFrozenAccountsResponseAmino {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  accounts?: string[];
}
export interface QueryClassFrozenAccountsResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryClassFrozenAccountsResponse";
  value: QueryClassFrozenAccountsResponseAmino;
}
export interface QueryClassFrozenAccountsResponseSDKType {
  pagination?: PageResponseSDKType;
  accounts: string[];
}
export interface QueryBurntNFTRequest {
  classId: string;
  nftId: string;
}
export interface QueryBurntNFTRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTRequest";
  value: Uint8Array;
}
export interface QueryBurntNFTRequestAmino {
  class_id?: string;
  nft_id?: string;
}
export interface QueryBurntNFTRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryBurntNFTRequest";
  value: QueryBurntNFTRequestAmino;
}
export interface QueryBurntNFTRequestSDKType {
  class_id: string;
  nft_id: string;
}
export interface QueryBurntNFTResponse {
  burnt: boolean;
}
export interface QueryBurntNFTResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTResponse";
  value: Uint8Array;
}
export interface QueryBurntNFTResponseAmino {
  burnt?: boolean;
}
export interface QueryBurntNFTResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryBurntNFTResponse";
  value: QueryBurntNFTResponseAmino;
}
export interface QueryBurntNFTResponseSDKType {
  burnt: boolean;
}
export interface QueryBurntNFTsInClassRequest {
  pagination?: PageRequest;
  classId: string;
}
export interface QueryBurntNFTsInClassRequestProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTsInClassRequest";
  value: Uint8Array;
}
export interface QueryBurntNFTsInClassRequestAmino {
  pagination?: PageRequestAmino;
  class_id?: string;
}
export interface QueryBurntNFTsInClassRequestAminoMsg {
  type: "/coreum.asset.nft.v1.QueryBurntNFTsInClassRequest";
  value: QueryBurntNFTsInClassRequestAmino;
}
export interface QueryBurntNFTsInClassRequestSDKType {
  pagination?: PageRequestSDKType;
  class_id: string;
}
export interface QueryBurntNFTsInClassResponse {
  pagination?: PageResponse;
  nftIds: string[];
}
export interface QueryBurntNFTsInClassResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTsInClassResponse";
  value: Uint8Array;
}
export interface QueryBurntNFTsInClassResponseAmino {
  pagination?: PageResponseAmino;
  nft_ids?: string[];
}
export interface QueryBurntNFTsInClassResponseAminoMsg {
  type: "/coreum.asset.nft.v1.QueryBurntNFTsInClassResponse";
  value: QueryBurntNFTsInClassResponseAmino;
}
export interface QueryBurntNFTsInClassResponseSDKType {
  pagination?: PageResponseSDKType;
  nft_ids: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    id: ""
  };
}
export const QueryClassRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryClassRequest",
  encode(message: QueryClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryClassRequestAmino): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryClassRequest): QueryClassRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest {
    return QueryClassRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest {
    return QueryClassRequest.decode(message.value);
  },
  toProto(message: QueryClassRequest): Uint8Array {
    return QueryClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryClassRequest",
      value: QueryClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: Class.fromPartial({})
  };
}
export const QueryClassResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryClassResponse",
  encode(message: QueryClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
    return message;
  },
  fromAmino(object: QueryClassResponseAmino): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromAmino(object.class);
    }
    return message;
  },
  toAmino(message: QueryClassResponse): QueryClassResponseAmino {
    const obj: any = {};
    obj.class = message.class ? Class.toAmino(message.class) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse {
    return QueryClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse {
    return QueryClassResponse.decode(message.value);
  },
  toProto(message: QueryClassResponse): Uint8Array {
    return QueryClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryClassResponse",
      value: QueryClassResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: undefined,
    issuer: ""
  };
}
export const QueryClassesRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryClassesRequest",
  encode(message: QueryClassesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.issuer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.issuer = object.issuer ?? "";
    return message;
  },
  fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    return message;
  },
  toAmino(message: QueryClassesRequest): QueryClassesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.issuer = message.issuer;
    return obj;
  },
  fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest {
    return QueryClassesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest {
    return QueryClassesRequest.decode(message.value);
  },
  toProto(message: QueryClassesRequest): Uint8Array {
    return QueryClassesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    pagination: undefined,
    classes: []
  };
}
export const QueryClassesResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryClassesResponse",
  encode(message: QueryClassesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.classes = object.classes?.map(e => Class.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryClassesResponse): QueryClassesResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
    } else {
      obj.classes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse {
    return QueryClassesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse {
    return QueryClassesResponse.decode(message.value);
  },
  toProto(message: QueryClassesResponse): Uint8Array {
    return QueryClassesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFrozenRequest(): QueryFrozenRequest {
  return {
    id: "",
    classId: ""
  };
}
export const QueryFrozenRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryFrozenRequest",
  encode(message: QueryFrozenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFrozenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFrozenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFrozenRequest>): QueryFrozenRequest {
    const message = createBaseQueryFrozenRequest();
    message.id = object.id ?? "";
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryFrozenRequestAmino): QueryFrozenRequest {
    const message = createBaseQueryFrozenRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryFrozenRequest): QueryFrozenRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryFrozenRequestAminoMsg): QueryFrozenRequest {
    return QueryFrozenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFrozenRequestProtoMsg): QueryFrozenRequest {
    return QueryFrozenRequest.decode(message.value);
  },
  toProto(message: QueryFrozenRequest): Uint8Array {
    return QueryFrozenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFrozenRequest): QueryFrozenRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryFrozenRequest",
      value: QueryFrozenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFrozenResponse(): QueryFrozenResponse {
  return {
    frozen: false
  };
}
export const QueryFrozenResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryFrozenResponse",
  encode(message: QueryFrozenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.frozen === true) {
      writer.uint32(8).bool(message.frozen);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFrozenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFrozenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.frozen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFrozenResponse>): QueryFrozenResponse {
    const message = createBaseQueryFrozenResponse();
    message.frozen = object.frozen ?? false;
    return message;
  },
  fromAmino(object: QueryFrozenResponseAmino): QueryFrozenResponse {
    const message = createBaseQueryFrozenResponse();
    if (object.frozen !== undefined && object.frozen !== null) {
      message.frozen = object.frozen;
    }
    return message;
  },
  toAmino(message: QueryFrozenResponse): QueryFrozenResponseAmino {
    const obj: any = {};
    obj.frozen = message.frozen;
    return obj;
  },
  fromAminoMsg(object: QueryFrozenResponseAminoMsg): QueryFrozenResponse {
    return QueryFrozenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFrozenResponseProtoMsg): QueryFrozenResponse {
    return QueryFrozenResponse.decode(message.value);
  },
  toProto(message: QueryFrozenResponse): Uint8Array {
    return QueryFrozenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFrozenResponse): QueryFrozenResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryFrozenResponse",
      value: QueryFrozenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassFrozenRequest(): QueryClassFrozenRequest {
  return {
    classId: "",
    account: ""
  };
}
export const QueryClassFrozenRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenRequest",
  encode(message: QueryClassFrozenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassFrozenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassFrozenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClassFrozenRequest>): QueryClassFrozenRequest {
    const message = createBaseQueryClassFrozenRequest();
    message.classId = object.classId ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: QueryClassFrozenRequestAmino): QueryClassFrozenRequest {
    const message = createBaseQueryClassFrozenRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryClassFrozenRequest): QueryClassFrozenRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryClassFrozenRequestAminoMsg): QueryClassFrozenRequest {
    return QueryClassFrozenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassFrozenRequestProtoMsg): QueryClassFrozenRequest {
    return QueryClassFrozenRequest.decode(message.value);
  },
  toProto(message: QueryClassFrozenRequest): Uint8Array {
    return QueryClassFrozenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassFrozenRequest): QueryClassFrozenRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenRequest",
      value: QueryClassFrozenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassFrozenResponse(): QueryClassFrozenResponse {
  return {
    frozen: false
  };
}
export const QueryClassFrozenResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenResponse",
  encode(message: QueryClassFrozenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.frozen === true) {
      writer.uint32(8).bool(message.frozen);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassFrozenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassFrozenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.frozen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClassFrozenResponse>): QueryClassFrozenResponse {
    const message = createBaseQueryClassFrozenResponse();
    message.frozen = object.frozen ?? false;
    return message;
  },
  fromAmino(object: QueryClassFrozenResponseAmino): QueryClassFrozenResponse {
    const message = createBaseQueryClassFrozenResponse();
    if (object.frozen !== undefined && object.frozen !== null) {
      message.frozen = object.frozen;
    }
    return message;
  },
  toAmino(message: QueryClassFrozenResponse): QueryClassFrozenResponseAmino {
    const obj: any = {};
    obj.frozen = message.frozen;
    return obj;
  },
  fromAminoMsg(object: QueryClassFrozenResponseAminoMsg): QueryClassFrozenResponse {
    return QueryClassFrozenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassFrozenResponseProtoMsg): QueryClassFrozenResponse {
    return QueryClassFrozenResponse.decode(message.value);
  },
  toProto(message: QueryClassFrozenResponse): Uint8Array {
    return QueryClassFrozenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassFrozenResponse): QueryClassFrozenResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenResponse",
      value: QueryClassFrozenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWhitelistedRequest(): QueryWhitelistedRequest {
  return {
    id: "",
    classId: "",
    account: ""
  };
}
export const QueryWhitelistedRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedRequest",
  encode(message: QueryWhitelistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWhitelistedRequest>): QueryWhitelistedRequest {
    const message = createBaseQueryWhitelistedRequest();
    message.id = object.id ?? "";
    message.classId = object.classId ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: QueryWhitelistedRequestAmino): QueryWhitelistedRequest {
    const message = createBaseQueryWhitelistedRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryWhitelistedRequest): QueryWhitelistedRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.class_id = message.classId;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistedRequestAminoMsg): QueryWhitelistedRequest {
    return QueryWhitelistedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistedRequestProtoMsg): QueryWhitelistedRequest {
    return QueryWhitelistedRequest.decode(message.value);
  },
  toProto(message: QueryWhitelistedRequest): Uint8Array {
    return QueryWhitelistedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistedRequest): QueryWhitelistedRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedRequest",
      value: QueryWhitelistedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWhitelistedResponse(): QueryWhitelistedResponse {
  return {
    whitelisted: false
  };
}
export const QueryWhitelistedResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedResponse",
  encode(message: QueryWhitelistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.whitelisted === true) {
      writer.uint32(8).bool(message.whitelisted);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelisted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWhitelistedResponse>): QueryWhitelistedResponse {
    const message = createBaseQueryWhitelistedResponse();
    message.whitelisted = object.whitelisted ?? false;
    return message;
  },
  fromAmino(object: QueryWhitelistedResponseAmino): QueryWhitelistedResponse {
    const message = createBaseQueryWhitelistedResponse();
    if (object.whitelisted !== undefined && object.whitelisted !== null) {
      message.whitelisted = object.whitelisted;
    }
    return message;
  },
  toAmino(message: QueryWhitelistedResponse): QueryWhitelistedResponseAmino {
    const obj: any = {};
    obj.whitelisted = message.whitelisted;
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistedResponseAminoMsg): QueryWhitelistedResponse {
    return QueryWhitelistedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistedResponseProtoMsg): QueryWhitelistedResponse {
    return QueryWhitelistedResponse.decode(message.value);
  },
  toProto(message: QueryWhitelistedResponse): Uint8Array {
    return QueryWhitelistedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistedResponse): QueryWhitelistedResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedResponse",
      value: QueryWhitelistedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWhitelistedAccountsForNFTRequest(): QueryWhitelistedAccountsForNFTRequest {
  return {
    pagination: undefined,
    id: "",
    classId: ""
  };
}
export const QueryWhitelistedAccountsForNFTRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedAccountsForNFTRequest",
  encode(message: QueryWhitelistedAccountsForNFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.classId !== "") {
      writer.uint32(26).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistedAccountsForNFTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedAccountsForNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWhitelistedAccountsForNFTRequest>): QueryWhitelistedAccountsForNFTRequest {
    const message = createBaseQueryWhitelistedAccountsForNFTRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.id = object.id ?? "";
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryWhitelistedAccountsForNFTRequestAmino): QueryWhitelistedAccountsForNFTRequest {
    const message = createBaseQueryWhitelistedAccountsForNFTRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryWhitelistedAccountsForNFTRequest): QueryWhitelistedAccountsForNFTRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.id = message.id;
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistedAccountsForNFTRequestAminoMsg): QueryWhitelistedAccountsForNFTRequest {
    return QueryWhitelistedAccountsForNFTRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistedAccountsForNFTRequestProtoMsg): QueryWhitelistedAccountsForNFTRequest {
    return QueryWhitelistedAccountsForNFTRequest.decode(message.value);
  },
  toProto(message: QueryWhitelistedAccountsForNFTRequest): Uint8Array {
    return QueryWhitelistedAccountsForNFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistedAccountsForNFTRequest): QueryWhitelistedAccountsForNFTRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedAccountsForNFTRequest",
      value: QueryWhitelistedAccountsForNFTRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWhitelistedAccountsForNFTResponse(): QueryWhitelistedAccountsForNFTResponse {
  return {
    pagination: undefined,
    accounts: []
  };
}
export const QueryWhitelistedAccountsForNFTResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedAccountsForNFTResponse",
  encode(message: QueryWhitelistedAccountsForNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accounts) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistedAccountsForNFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedAccountsForNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.accounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWhitelistedAccountsForNFTResponse>): QueryWhitelistedAccountsForNFTResponse {
    const message = createBaseQueryWhitelistedAccountsForNFTResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryWhitelistedAccountsForNFTResponseAmino): QueryWhitelistedAccountsForNFTResponse {
    const message = createBaseQueryWhitelistedAccountsForNFTResponse();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryWhitelistedAccountsForNFTResponse): QueryWhitelistedAccountsForNFTResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistedAccountsForNFTResponseAminoMsg): QueryWhitelistedAccountsForNFTResponse {
    return QueryWhitelistedAccountsForNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistedAccountsForNFTResponseProtoMsg): QueryWhitelistedAccountsForNFTResponse {
    return QueryWhitelistedAccountsForNFTResponse.decode(message.value);
  },
  toProto(message: QueryWhitelistedAccountsForNFTResponse): Uint8Array {
    return QueryWhitelistedAccountsForNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistedAccountsForNFTResponse): QueryWhitelistedAccountsForNFTResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryWhitelistedAccountsForNFTResponse",
      value: QueryWhitelistedAccountsForNFTResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassWhitelistedAccountsRequest(): QueryClassWhitelistedAccountsRequest {
  return {
    pagination: undefined,
    classId: ""
  };
}
export const QueryClassWhitelistedAccountsRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryClassWhitelistedAccountsRequest",
  encode(message: QueryClassWhitelistedAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassWhitelistedAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassWhitelistedAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClassWhitelistedAccountsRequest>): QueryClassWhitelistedAccountsRequest {
    const message = createBaseQueryClassWhitelistedAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryClassWhitelistedAccountsRequestAmino): QueryClassWhitelistedAccountsRequest {
    const message = createBaseQueryClassWhitelistedAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryClassWhitelistedAccountsRequest): QueryClassWhitelistedAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryClassWhitelistedAccountsRequestAminoMsg): QueryClassWhitelistedAccountsRequest {
    return QueryClassWhitelistedAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassWhitelistedAccountsRequestProtoMsg): QueryClassWhitelistedAccountsRequest {
    return QueryClassWhitelistedAccountsRequest.decode(message.value);
  },
  toProto(message: QueryClassWhitelistedAccountsRequest): Uint8Array {
    return QueryClassWhitelistedAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassWhitelistedAccountsRequest): QueryClassWhitelistedAccountsRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryClassWhitelistedAccountsRequest",
      value: QueryClassWhitelistedAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassWhitelistedAccountsResponse(): QueryClassWhitelistedAccountsResponse {
  return {
    pagination: undefined,
    accounts: []
  };
}
export const QueryClassWhitelistedAccountsResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryClassWhitelistedAccountsResponse",
  encode(message: QueryClassWhitelistedAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accounts) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassWhitelistedAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassWhitelistedAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.accounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClassWhitelistedAccountsResponse>): QueryClassWhitelistedAccountsResponse {
    const message = createBaseQueryClassWhitelistedAccountsResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryClassWhitelistedAccountsResponseAmino): QueryClassWhitelistedAccountsResponse {
    const message = createBaseQueryClassWhitelistedAccountsResponse();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryClassWhitelistedAccountsResponse): QueryClassWhitelistedAccountsResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryClassWhitelistedAccountsResponseAminoMsg): QueryClassWhitelistedAccountsResponse {
    return QueryClassWhitelistedAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassWhitelistedAccountsResponseProtoMsg): QueryClassWhitelistedAccountsResponse {
    return QueryClassWhitelistedAccountsResponse.decode(message.value);
  },
  toProto(message: QueryClassWhitelistedAccountsResponse): Uint8Array {
    return QueryClassWhitelistedAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassWhitelistedAccountsResponse): QueryClassWhitelistedAccountsResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryClassWhitelistedAccountsResponse",
      value: QueryClassWhitelistedAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassFrozenAccountsRequest(): QueryClassFrozenAccountsRequest {
  return {
    pagination: undefined,
    classId: ""
  };
}
export const QueryClassFrozenAccountsRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenAccountsRequest",
  encode(message: QueryClassFrozenAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassFrozenAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassFrozenAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClassFrozenAccountsRequest>): QueryClassFrozenAccountsRequest {
    const message = createBaseQueryClassFrozenAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryClassFrozenAccountsRequestAmino): QueryClassFrozenAccountsRequest {
    const message = createBaseQueryClassFrozenAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryClassFrozenAccountsRequest): QueryClassFrozenAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryClassFrozenAccountsRequestAminoMsg): QueryClassFrozenAccountsRequest {
    return QueryClassFrozenAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassFrozenAccountsRequestProtoMsg): QueryClassFrozenAccountsRequest {
    return QueryClassFrozenAccountsRequest.decode(message.value);
  },
  toProto(message: QueryClassFrozenAccountsRequest): Uint8Array {
    return QueryClassFrozenAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassFrozenAccountsRequest): QueryClassFrozenAccountsRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenAccountsRequest",
      value: QueryClassFrozenAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassFrozenAccountsResponse(): QueryClassFrozenAccountsResponse {
  return {
    pagination: undefined,
    accounts: []
  };
}
export const QueryClassFrozenAccountsResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenAccountsResponse",
  encode(message: QueryClassFrozenAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accounts) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassFrozenAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassFrozenAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.accounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClassFrozenAccountsResponse>): QueryClassFrozenAccountsResponse {
    const message = createBaseQueryClassFrozenAccountsResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryClassFrozenAccountsResponseAmino): QueryClassFrozenAccountsResponse {
    const message = createBaseQueryClassFrozenAccountsResponse();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryClassFrozenAccountsResponse): QueryClassFrozenAccountsResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryClassFrozenAccountsResponseAminoMsg): QueryClassFrozenAccountsResponse {
    return QueryClassFrozenAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassFrozenAccountsResponseProtoMsg): QueryClassFrozenAccountsResponse {
    return QueryClassFrozenAccountsResponse.decode(message.value);
  },
  toProto(message: QueryClassFrozenAccountsResponse): Uint8Array {
    return QueryClassFrozenAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassFrozenAccountsResponse): QueryClassFrozenAccountsResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryClassFrozenAccountsResponse",
      value: QueryClassFrozenAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBurntNFTRequest(): QueryBurntNFTRequest {
  return {
    classId: "",
    nftId: ""
  };
}
export const QueryBurntNFTRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTRequest",
  encode(message: QueryBurntNFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBurntNFTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurntNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBurntNFTRequest>): QueryBurntNFTRequest {
    const message = createBaseQueryBurntNFTRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  },
  fromAmino(object: QueryBurntNFTRequestAmino): QueryBurntNFTRequest {
    const message = createBaseQueryBurntNFTRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: QueryBurntNFTRequest): QueryBurntNFTRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: QueryBurntNFTRequestAminoMsg): QueryBurntNFTRequest {
    return QueryBurntNFTRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBurntNFTRequestProtoMsg): QueryBurntNFTRequest {
    return QueryBurntNFTRequest.decode(message.value);
  },
  toProto(message: QueryBurntNFTRequest): Uint8Array {
    return QueryBurntNFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBurntNFTRequest): QueryBurntNFTRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTRequest",
      value: QueryBurntNFTRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBurntNFTResponse(): QueryBurntNFTResponse {
  return {
    burnt: false
  };
}
export const QueryBurntNFTResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTResponse",
  encode(message: QueryBurntNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burnt === true) {
      writer.uint32(8).bool(message.burnt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBurntNFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurntNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnt = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBurntNFTResponse>): QueryBurntNFTResponse {
    const message = createBaseQueryBurntNFTResponse();
    message.burnt = object.burnt ?? false;
    return message;
  },
  fromAmino(object: QueryBurntNFTResponseAmino): QueryBurntNFTResponse {
    const message = createBaseQueryBurntNFTResponse();
    if (object.burnt !== undefined && object.burnt !== null) {
      message.burnt = object.burnt;
    }
    return message;
  },
  toAmino(message: QueryBurntNFTResponse): QueryBurntNFTResponseAmino {
    const obj: any = {};
    obj.burnt = message.burnt;
    return obj;
  },
  fromAminoMsg(object: QueryBurntNFTResponseAminoMsg): QueryBurntNFTResponse {
    return QueryBurntNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBurntNFTResponseProtoMsg): QueryBurntNFTResponse {
    return QueryBurntNFTResponse.decode(message.value);
  },
  toProto(message: QueryBurntNFTResponse): Uint8Array {
    return QueryBurntNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBurntNFTResponse): QueryBurntNFTResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTResponse",
      value: QueryBurntNFTResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBurntNFTsInClassRequest(): QueryBurntNFTsInClassRequest {
  return {
    pagination: undefined,
    classId: ""
  };
}
export const QueryBurntNFTsInClassRequest = {
  typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTsInClassRequest",
  encode(message: QueryBurntNFTsInClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBurntNFTsInClassRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurntNFTsInClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBurntNFTsInClassRequest>): QueryBurntNFTsInClassRequest {
    const message = createBaseQueryBurntNFTsInClassRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryBurntNFTsInClassRequestAmino): QueryBurntNFTsInClassRequest {
    const message = createBaseQueryBurntNFTsInClassRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryBurntNFTsInClassRequest): QueryBurntNFTsInClassRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryBurntNFTsInClassRequestAminoMsg): QueryBurntNFTsInClassRequest {
    return QueryBurntNFTsInClassRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBurntNFTsInClassRequestProtoMsg): QueryBurntNFTsInClassRequest {
    return QueryBurntNFTsInClassRequest.decode(message.value);
  },
  toProto(message: QueryBurntNFTsInClassRequest): Uint8Array {
    return QueryBurntNFTsInClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBurntNFTsInClassRequest): QueryBurntNFTsInClassRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTsInClassRequest",
      value: QueryBurntNFTsInClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBurntNFTsInClassResponse(): QueryBurntNFTsInClassResponse {
  return {
    pagination: undefined,
    nftIds: []
  };
}
export const QueryBurntNFTsInClassResponse = {
  typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTsInClassResponse",
  encode(message: QueryBurntNFTsInClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nftIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBurntNFTsInClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurntNFTsInClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.nftIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBurntNFTsInClassResponse>): QueryBurntNFTsInClassResponse {
    const message = createBaseQueryBurntNFTsInClassResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.nftIds = object.nftIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryBurntNFTsInClassResponseAmino): QueryBurntNFTsInClassResponse {
    const message = createBaseQueryBurntNFTsInClassResponse();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.nftIds = object.nft_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryBurntNFTsInClassResponse): QueryBurntNFTsInClassResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.nftIds) {
      obj.nft_ids = message.nftIds.map(e => e);
    } else {
      obj.nft_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBurntNFTsInClassResponseAminoMsg): QueryBurntNFTsInClassResponse {
    return QueryBurntNFTsInClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBurntNFTsInClassResponseProtoMsg): QueryBurntNFTsInClassResponse {
    return QueryBurntNFTsInClassResponse.decode(message.value);
  },
  toProto(message: QueryBurntNFTsInClassResponse): Uint8Array {
    return QueryBurntNFTsInClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBurntNFTsInClassResponse): QueryBurntNFTsInClassResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.QueryBurntNFTsInClassResponse",
      value: QueryBurntNFTsInClassResponse.encode(message).finish()
    };
  }
};