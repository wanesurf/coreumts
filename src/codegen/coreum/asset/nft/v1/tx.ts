import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { ClassFeature, classFeatureFromJSON, classFeatureToJSON } from "./nft";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { Decimal } from "@cosmjs/math";
/** MsgIssueClass defines message for the IssueClass method. */
export interface MsgIssueClass {
  issuer: string;
  symbol: string;
  name: string;
  description: string;
  uri: string;
  uriHash: string;
  data?: Any;
  features: ClassFeature[];
  royaltyRate: string;
}
export interface MsgIssueClassProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgIssueClass";
  value: Uint8Array;
}
/** MsgIssueClass defines message for the IssueClass method. */
export interface MsgIssueClassAmino {
  issuer?: string;
  symbol?: string;
  name?: string;
  description?: string;
  uri?: string;
  uri_hash?: string;
  data?: AnyAmino;
  features?: ClassFeature[];
  royalty_rate?: string;
}
export interface MsgIssueClassAminoMsg {
  type: "/coreum.asset.nft.v1.MsgIssueClass";
  value: MsgIssueClassAmino;
}
/** MsgIssueClass defines message for the IssueClass method. */
export interface MsgIssueClassSDKType {
  issuer: string;
  symbol: string;
  name: string;
  description: string;
  uri: string;
  uri_hash: string;
  data?: AnySDKType;
  features: ClassFeature[];
  royalty_rate: string;
}
/** MsgMint defines message for the Mint method. */
export interface MsgMint {
  sender: string;
  classId: string;
  id: string;
  uri: string;
  uriHash: string;
  data?: Any;
  recipient: string;
}
export interface MsgMintProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgMint";
  value: Uint8Array;
}
/** MsgMint defines message for the Mint method. */
export interface MsgMintAmino {
  sender?: string;
  class_id?: string;
  id?: string;
  uri?: string;
  uri_hash?: string;
  data?: AnyAmino;
  recipient?: string;
}
export interface MsgMintAminoMsg {
  type: "/coreum.asset.nft.v1.MsgMint";
  value: MsgMintAmino;
}
/** MsgMint defines message for the Mint method. */
export interface MsgMintSDKType {
  sender: string;
  class_id: string;
  id: string;
  uri: string;
  uri_hash: string;
  data?: AnySDKType;
  recipient: string;
}
/** MsgBurn defines message for the Burn method. */
export interface MsgBurn {
  sender: string;
  classId: string;
  id: string;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgBurn";
  value: Uint8Array;
}
/** MsgBurn defines message for the Burn method. */
export interface MsgBurnAmino {
  sender?: string;
  class_id?: string;
  id?: string;
}
export interface MsgBurnAminoMsg {
  type: "/coreum.asset.nft.v1.MsgBurn";
  value: MsgBurnAmino;
}
/** MsgBurn defines message for the Burn method. */
export interface MsgBurnSDKType {
  sender: string;
  class_id: string;
  id: string;
}
export interface MsgFreeze {
  sender: string;
  classId: string;
  id: string;
}
export interface MsgFreezeProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgFreeze";
  value: Uint8Array;
}
export interface MsgFreezeAmino {
  sender?: string;
  class_id?: string;
  id?: string;
}
export interface MsgFreezeAminoMsg {
  type: "/coreum.asset.nft.v1.MsgFreeze";
  value: MsgFreezeAmino;
}
export interface MsgFreezeSDKType {
  sender: string;
  class_id: string;
  id: string;
}
export interface MsgUnfreeze {
  sender: string;
  classId: string;
  id: string;
}
export interface MsgUnfreezeProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze";
  value: Uint8Array;
}
export interface MsgUnfreezeAmino {
  sender?: string;
  class_id?: string;
  id?: string;
}
export interface MsgUnfreezeAminoMsg {
  type: "/coreum.asset.nft.v1.MsgUnfreeze";
  value: MsgUnfreezeAmino;
}
export interface MsgUnfreezeSDKType {
  sender: string;
  class_id: string;
  id: string;
}
export interface MsgClassFreeze {
  sender: string;
  classId: string;
  account: string;
}
export interface MsgClassFreezeProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgClassFreeze";
  value: Uint8Array;
}
export interface MsgClassFreezeAmino {
  sender?: string;
  class_id?: string;
  account?: string;
}
export interface MsgClassFreezeAminoMsg {
  type: "/coreum.asset.nft.v1.MsgClassFreeze";
  value: MsgClassFreezeAmino;
}
export interface MsgClassFreezeSDKType {
  sender: string;
  class_id: string;
  account: string;
}
export interface MsgClassUnfreeze {
  sender: string;
  classId: string;
  account: string;
}
export interface MsgClassUnfreezeProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgClassUnfreeze";
  value: Uint8Array;
}
export interface MsgClassUnfreezeAmino {
  sender?: string;
  class_id?: string;
  account?: string;
}
export interface MsgClassUnfreezeAminoMsg {
  type: "/coreum.asset.nft.v1.MsgClassUnfreeze";
  value: MsgClassUnfreezeAmino;
}
export interface MsgClassUnfreezeSDKType {
  sender: string;
  class_id: string;
  account: string;
}
export interface MsgAddToWhitelist {
  sender: string;
  classId: string;
  id: string;
  account: string;
}
export interface MsgAddToWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist";
  value: Uint8Array;
}
export interface MsgAddToWhitelistAmino {
  sender?: string;
  class_id?: string;
  id?: string;
  account?: string;
}
export interface MsgAddToWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.MsgAddToWhitelist";
  value: MsgAddToWhitelistAmino;
}
export interface MsgAddToWhitelistSDKType {
  sender: string;
  class_id: string;
  id: string;
  account: string;
}
export interface MsgRemoveFromWhitelist {
  sender: string;
  classId: string;
  id: string;
  account: string;
}
export interface MsgRemoveFromWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist";
  value: Uint8Array;
}
export interface MsgRemoveFromWhitelistAmino {
  sender?: string;
  class_id?: string;
  id?: string;
  account?: string;
}
export interface MsgRemoveFromWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist";
  value: MsgRemoveFromWhitelistAmino;
}
export interface MsgRemoveFromWhitelistSDKType {
  sender: string;
  class_id: string;
  id: string;
  account: string;
}
export interface MsgAddToClassWhitelist {
  sender: string;
  classId: string;
  account: string;
}
export interface MsgAddToClassWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgAddToClassWhitelist";
  value: Uint8Array;
}
export interface MsgAddToClassWhitelistAmino {
  sender?: string;
  class_id?: string;
  account?: string;
}
export interface MsgAddToClassWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.MsgAddToClassWhitelist";
  value: MsgAddToClassWhitelistAmino;
}
export interface MsgAddToClassWhitelistSDKType {
  sender: string;
  class_id: string;
  account: string;
}
export interface MsgRemoveFromClassWhitelist {
  sender: string;
  classId: string;
  account: string;
}
export interface MsgRemoveFromClassWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromClassWhitelist";
  value: Uint8Array;
}
export interface MsgRemoveFromClassWhitelistAmino {
  sender?: string;
  class_id?: string;
  account?: string;
}
export interface MsgRemoveFromClassWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.MsgRemoveFromClassWhitelist";
  value: MsgRemoveFromClassWhitelistAmino;
}
export interface MsgRemoveFromClassWhitelistSDKType {
  sender: string;
  class_id: string;
  account: string;
}
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface EmptyResponse {}
export interface EmptyResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EmptyResponse";
  value: Uint8Array;
}
export interface EmptyResponseAmino {}
export interface EmptyResponseAminoMsg {
  type: "/coreum.asset.nft.v1.EmptyResponse";
  value: EmptyResponseAmino;
}
export interface EmptyResponseSDKType {}
function createBaseMsgIssueClass(): MsgIssueClass {
  return {
    issuer: "",
    symbol: "",
    name: "",
    description: "",
    uri: "",
    uriHash: "",
    data: undefined,
    features: [],
    royaltyRate: ""
  };
}
export const MsgIssueClass = {
  typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
  encode(message: MsgIssueClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.royaltyRate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.royaltyRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIssueClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push((reader.int32() as any));
            }
          } else {
            message.features.push((reader.int32() as any));
          }
          break;
        case 9:
          message.royaltyRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgIssueClass>): MsgIssueClass {
    const message = createBaseMsgIssueClass();
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    message.features = object.features?.map(e => e) || [];
    message.royaltyRate = object.royaltyRate ?? "";
    return message;
  },
  fromAmino(object: MsgIssueClassAmino): MsgIssueClass {
    const message = createBaseMsgIssueClass();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromAmino(object.data);
    }
    message.features = object.features?.map(e => classFeatureFromJSON(e)) || [];
    if (object.royalty_rate !== undefined && object.royalty_rate !== null) {
      message.royaltyRate = object.royalty_rate;
    }
    return message;
  },
  toAmino(message: MsgIssueClass): MsgIssueClassAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.symbol = message.symbol;
    obj.name = message.name;
    obj.description = message.description;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
    if (message.features) {
      obj.features = message.features.map(e => classFeatureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.royalty_rate = message.royaltyRate;
    return obj;
  },
  fromAminoMsg(object: MsgIssueClassAminoMsg): MsgIssueClass {
    return MsgIssueClass.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueClassProtoMsg): MsgIssueClass {
    return MsgIssueClass.decode(message.value);
  },
  toProto(message: MsgIssueClass): Uint8Array {
    return MsgIssueClass.encode(message).finish();
  },
  toProtoMsg(message: MsgIssueClass): MsgIssueClassProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
      value: MsgIssueClass.encode(message).finish()
    };
  }
};
function createBaseMsgMint(): MsgMint {
  return {
    sender: "",
    classId: "",
    id: "",
    uri: "",
    uriHash: "",
    data: undefined,
    recipient: ""
  };
}
export const MsgMint = {
  typeUrl: "/coreum.asset.nft.v1.MsgMint",
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(42).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(50).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.uriHash = reader.string();
          break;
        case 6:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    const message = createBaseMsgMint();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromAmino(object.data);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
    return MsgMint.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    sender: "",
    classId: "",
    id: ""
  };
}
export const MsgBurn = {
  typeUrl: "/coreum.asset.nft.v1.MsgBurn",
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgFreeze(): MsgFreeze {
  return {
    sender: "",
    classId: "",
    id: ""
  };
}
export const MsgFreeze = {
  typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
  encode(message: MsgFreeze, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreeze {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgFreeze>): MsgFreeze {
    const message = createBaseMsgFreeze();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgFreezeAmino): MsgFreeze {
    const message = createBaseMsgFreeze();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgFreeze): MsgFreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MsgFreezeAminoMsg): MsgFreeze {
    return MsgFreeze.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFreezeProtoMsg): MsgFreeze {
    return MsgFreeze.decode(message.value);
  },
  toProto(message: MsgFreeze): Uint8Array {
    return MsgFreeze.encode(message).finish();
  },
  toProtoMsg(message: MsgFreeze): MsgFreezeProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
      value: MsgFreeze.encode(message).finish()
    };
  }
};
function createBaseMsgUnfreeze(): MsgUnfreeze {
  return {
    sender: "",
    classId: "",
    id: ""
  };
}
export const MsgUnfreeze = {
  typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
  encode(message: MsgUnfreeze, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnfreeze {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnfreeze>): MsgUnfreeze {
    const message = createBaseMsgUnfreeze();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgUnfreezeAmino): MsgUnfreeze {
    const message = createBaseMsgUnfreeze();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgUnfreeze): MsgUnfreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MsgUnfreezeAminoMsg): MsgUnfreeze {
    return MsgUnfreeze.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnfreezeProtoMsg): MsgUnfreeze {
    return MsgUnfreeze.decode(message.value);
  },
  toProto(message: MsgUnfreeze): Uint8Array {
    return MsgUnfreeze.encode(message).finish();
  },
  toProtoMsg(message: MsgUnfreeze): MsgUnfreezeProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
      value: MsgUnfreeze.encode(message).finish()
    };
  }
};
function createBaseMsgClassFreeze(): MsgClassFreeze {
  return {
    sender: "",
    classId: "",
    account: ""
  };
}
export const MsgClassFreeze = {
  typeUrl: "/coreum.asset.nft.v1.MsgClassFreeze",
  encode(message: MsgClassFreeze, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClassFreeze {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClassFreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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
  fromPartial(object: Partial<MsgClassFreeze>): MsgClassFreeze {
    const message = createBaseMsgClassFreeze();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: MsgClassFreezeAmino): MsgClassFreeze {
    const message = createBaseMsgClassFreeze();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: MsgClassFreeze): MsgClassFreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: MsgClassFreezeAminoMsg): MsgClassFreeze {
    return MsgClassFreeze.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClassFreezeProtoMsg): MsgClassFreeze {
    return MsgClassFreeze.decode(message.value);
  },
  toProto(message: MsgClassFreeze): Uint8Array {
    return MsgClassFreeze.encode(message).finish();
  },
  toProtoMsg(message: MsgClassFreeze): MsgClassFreezeProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgClassFreeze",
      value: MsgClassFreeze.encode(message).finish()
    };
  }
};
function createBaseMsgClassUnfreeze(): MsgClassUnfreeze {
  return {
    sender: "",
    classId: "",
    account: ""
  };
}
export const MsgClassUnfreeze = {
  typeUrl: "/coreum.asset.nft.v1.MsgClassUnfreeze",
  encode(message: MsgClassUnfreeze, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClassUnfreeze {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClassUnfreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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
  fromPartial(object: Partial<MsgClassUnfreeze>): MsgClassUnfreeze {
    const message = createBaseMsgClassUnfreeze();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: MsgClassUnfreezeAmino): MsgClassUnfreeze {
    const message = createBaseMsgClassUnfreeze();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: MsgClassUnfreeze): MsgClassUnfreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: MsgClassUnfreezeAminoMsg): MsgClassUnfreeze {
    return MsgClassUnfreeze.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClassUnfreezeProtoMsg): MsgClassUnfreeze {
    return MsgClassUnfreeze.decode(message.value);
  },
  toProto(message: MsgClassUnfreeze): Uint8Array {
    return MsgClassUnfreeze.encode(message).finish();
  },
  toProtoMsg(message: MsgClassUnfreeze): MsgClassUnfreezeProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgClassUnfreeze",
      value: MsgClassUnfreeze.encode(message).finish()
    };
  }
};
function createBaseMsgAddToWhitelist(): MsgAddToWhitelist {
  return {
    sender: "",
    classId: "",
    id: "",
    account: ""
  };
}
export const MsgAddToWhitelist = {
  typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
  encode(message: MsgAddToWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.account !== "") {
      writer.uint32(34).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddToWhitelist>): MsgAddToWhitelist {
    const message = createBaseMsgAddToWhitelist();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: MsgAddToWhitelistAmino): MsgAddToWhitelist {
    const message = createBaseMsgAddToWhitelist();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: MsgAddToWhitelist): MsgAddToWhitelistAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: MsgAddToWhitelistAminoMsg): MsgAddToWhitelist {
    return MsgAddToWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddToWhitelistProtoMsg): MsgAddToWhitelist {
    return MsgAddToWhitelist.decode(message.value);
  },
  toProto(message: MsgAddToWhitelist): Uint8Array {
    return MsgAddToWhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToWhitelist): MsgAddToWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
      value: MsgAddToWhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveFromWhitelist(): MsgRemoveFromWhitelist {
  return {
    sender: "",
    classId: "",
    id: "",
    account: ""
  };
}
export const MsgRemoveFromWhitelist = {
  typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
  encode(message: MsgRemoveFromWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.account !== "") {
      writer.uint32(34).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveFromWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveFromWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveFromWhitelist>): MsgRemoveFromWhitelist {
    const message = createBaseMsgRemoveFromWhitelist();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveFromWhitelistAmino): MsgRemoveFromWhitelist {
    const message = createBaseMsgRemoveFromWhitelist();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: MsgRemoveFromWhitelist): MsgRemoveFromWhitelistAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveFromWhitelistAminoMsg): MsgRemoveFromWhitelist {
    return MsgRemoveFromWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveFromWhitelistProtoMsg): MsgRemoveFromWhitelist {
    return MsgRemoveFromWhitelist.decode(message.value);
  },
  toProto(message: MsgRemoveFromWhitelist): Uint8Array {
    return MsgRemoveFromWhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveFromWhitelist): MsgRemoveFromWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
      value: MsgRemoveFromWhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgAddToClassWhitelist(): MsgAddToClassWhitelist {
  return {
    sender: "",
    classId: "",
    account: ""
  };
}
export const MsgAddToClassWhitelist = {
  typeUrl: "/coreum.asset.nft.v1.MsgAddToClassWhitelist",
  encode(message: MsgAddToClassWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToClassWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToClassWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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
  fromPartial(object: Partial<MsgAddToClassWhitelist>): MsgAddToClassWhitelist {
    const message = createBaseMsgAddToClassWhitelist();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: MsgAddToClassWhitelistAmino): MsgAddToClassWhitelist {
    const message = createBaseMsgAddToClassWhitelist();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: MsgAddToClassWhitelist): MsgAddToClassWhitelistAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: MsgAddToClassWhitelistAminoMsg): MsgAddToClassWhitelist {
    return MsgAddToClassWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddToClassWhitelistProtoMsg): MsgAddToClassWhitelist {
    return MsgAddToClassWhitelist.decode(message.value);
  },
  toProto(message: MsgAddToClassWhitelist): Uint8Array {
    return MsgAddToClassWhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToClassWhitelist): MsgAddToClassWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgAddToClassWhitelist",
      value: MsgAddToClassWhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveFromClassWhitelist(): MsgRemoveFromClassWhitelist {
  return {
    sender: "",
    classId: "",
    account: ""
  };
}
export const MsgRemoveFromClassWhitelist = {
  typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromClassWhitelist",
  encode(message: MsgRemoveFromClassWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveFromClassWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveFromClassWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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
  fromPartial(object: Partial<MsgRemoveFromClassWhitelist>): MsgRemoveFromClassWhitelist {
    const message = createBaseMsgRemoveFromClassWhitelist();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveFromClassWhitelistAmino): MsgRemoveFromClassWhitelist {
    const message = createBaseMsgRemoveFromClassWhitelist();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: MsgRemoveFromClassWhitelist): MsgRemoveFromClassWhitelistAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveFromClassWhitelistAminoMsg): MsgRemoveFromClassWhitelist {
    return MsgRemoveFromClassWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveFromClassWhitelistProtoMsg): MsgRemoveFromClassWhitelist {
    return MsgRemoveFromClassWhitelist.decode(message.value);
  },
  toProto(message: MsgRemoveFromClassWhitelist): Uint8Array {
    return MsgRemoveFromClassWhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveFromClassWhitelist): MsgRemoveFromClassWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromClassWhitelist",
      value: MsgRemoveFromClassWhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/coreum.asset.nft.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseEmptyResponse(): EmptyResponse {
  return {};
}
export const EmptyResponse = {
  typeUrl: "/coreum.asset.nft.v1.EmptyResponse",
  encode(_: EmptyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EmptyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyResponse();
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
  fromPartial(_: Partial<EmptyResponse>): EmptyResponse {
    const message = createBaseEmptyResponse();
    return message;
  },
  fromAmino(_: EmptyResponseAmino): EmptyResponse {
    const message = createBaseEmptyResponse();
    return message;
  },
  toAmino(_: EmptyResponse): EmptyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: EmptyResponseAminoMsg): EmptyResponse {
    return EmptyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EmptyResponseProtoMsg): EmptyResponse {
    return EmptyResponse.decode(message.value);
  },
  toProto(message: EmptyResponse): Uint8Array {
    return EmptyResponse.encode(message).finish();
  },
  toProtoMsg(message: EmptyResponse): EmptyResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EmptyResponse",
      value: EmptyResponse.encode(message).finish()
    };
  }
};