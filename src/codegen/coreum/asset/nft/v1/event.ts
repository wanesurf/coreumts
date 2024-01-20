import { ClassFeature, classFeatureFromJSON, classFeatureToJSON } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { Decimal } from "@cosmjs/math";
/** EventClassIssued is emitted on MsgIssueClass. */
export interface EventClassIssued {
  id: string;
  issuer: string;
  symbol: string;
  name: string;
  description: string;
  uri: string;
  uriHash: string;
  features: ClassFeature[];
  royaltyRate: string;
}
export interface EventClassIssuedProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventClassIssued";
  value: Uint8Array;
}
/** EventClassIssued is emitted on MsgIssueClass. */
export interface EventClassIssuedAmino {
  id?: string;
  issuer?: string;
  symbol?: string;
  name?: string;
  description?: string;
  uri?: string;
  uri_hash?: string;
  features?: ClassFeature[];
  royalty_rate?: string;
}
export interface EventClassIssuedAminoMsg {
  type: "/coreum.asset.nft.v1.EventClassIssued";
  value: EventClassIssuedAmino;
}
/** EventClassIssued is emitted on MsgIssueClass. */
export interface EventClassIssuedSDKType {
  id: string;
  issuer: string;
  symbol: string;
  name: string;
  description: string;
  uri: string;
  uri_hash: string;
  features: ClassFeature[];
  royalty_rate: string;
}
export interface EventFrozen {
  classId: string;
  id: string;
  owner: string;
}
export interface EventFrozenProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventFrozen";
  value: Uint8Array;
}
export interface EventFrozenAmino {
  class_id?: string;
  id?: string;
  owner?: string;
}
export interface EventFrozenAminoMsg {
  type: "/coreum.asset.nft.v1.EventFrozen";
  value: EventFrozenAmino;
}
export interface EventFrozenSDKType {
  class_id: string;
  id: string;
  owner: string;
}
export interface EventUnfrozen {
  classId: string;
  id: string;
  owner: string;
}
export interface EventUnfrozenProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventUnfrozen";
  value: Uint8Array;
}
export interface EventUnfrozenAmino {
  class_id?: string;
  id?: string;
  owner?: string;
}
export interface EventUnfrozenAminoMsg {
  type: "/coreum.asset.nft.v1.EventUnfrozen";
  value: EventUnfrozenAmino;
}
export interface EventUnfrozenSDKType {
  class_id: string;
  id: string;
  owner: string;
}
export interface EventClassFrozen {
  classId: string;
  account: string;
}
export interface EventClassFrozenProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventClassFrozen";
  value: Uint8Array;
}
export interface EventClassFrozenAmino {
  class_id?: string;
  account?: string;
}
export interface EventClassFrozenAminoMsg {
  type: "/coreum.asset.nft.v1.EventClassFrozen";
  value: EventClassFrozenAmino;
}
export interface EventClassFrozenSDKType {
  class_id: string;
  account: string;
}
export interface EventClassUnfrozen {
  classId: string;
  account: string;
}
export interface EventClassUnfrozenProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventClassUnfrozen";
  value: Uint8Array;
}
export interface EventClassUnfrozenAmino {
  class_id?: string;
  account?: string;
}
export interface EventClassUnfrozenAminoMsg {
  type: "/coreum.asset.nft.v1.EventClassUnfrozen";
  value: EventClassUnfrozenAmino;
}
export interface EventClassUnfrozenSDKType {
  class_id: string;
  account: string;
}
export interface EventAddedToWhitelist {
  classId: string;
  id: string;
  account: string;
}
export interface EventAddedToWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventAddedToWhitelist";
  value: Uint8Array;
}
export interface EventAddedToWhitelistAmino {
  class_id?: string;
  id?: string;
  account?: string;
}
export interface EventAddedToWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.EventAddedToWhitelist";
  value: EventAddedToWhitelistAmino;
}
export interface EventAddedToWhitelistSDKType {
  class_id: string;
  id: string;
  account: string;
}
export interface EventRemovedFromWhitelist {
  classId: string;
  id: string;
  account: string;
}
export interface EventRemovedFromWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventRemovedFromWhitelist";
  value: Uint8Array;
}
export interface EventRemovedFromWhitelistAmino {
  class_id?: string;
  id?: string;
  account?: string;
}
export interface EventRemovedFromWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.EventRemovedFromWhitelist";
  value: EventRemovedFromWhitelistAmino;
}
export interface EventRemovedFromWhitelistSDKType {
  class_id: string;
  id: string;
  account: string;
}
export interface EventAddedToClassWhitelist {
  classId: string;
  account: string;
}
export interface EventAddedToClassWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventAddedToClassWhitelist";
  value: Uint8Array;
}
export interface EventAddedToClassWhitelistAmino {
  class_id?: string;
  account?: string;
}
export interface EventAddedToClassWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.EventAddedToClassWhitelist";
  value: EventAddedToClassWhitelistAmino;
}
export interface EventAddedToClassWhitelistSDKType {
  class_id: string;
  account: string;
}
export interface EventRemovedFromClassWhitelist {
  classId: string;
  account: string;
}
export interface EventRemovedFromClassWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventRemovedFromClassWhitelist";
  value: Uint8Array;
}
export interface EventRemovedFromClassWhitelistAmino {
  class_id?: string;
  account?: string;
}
export interface EventRemovedFromClassWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.EventRemovedFromClassWhitelist";
  value: EventRemovedFromClassWhitelistAmino;
}
export interface EventRemovedFromClassWhitelistSDKType {
  class_id: string;
  account: string;
}
function createBaseEventClassIssued(): EventClassIssued {
  return {
    id: "",
    issuer: "",
    symbol: "",
    name: "",
    description: "",
    uri: "",
    uriHash: "",
    features: [],
    royaltyRate: ""
  };
}
export const EventClassIssued = {
  typeUrl: "/coreum.asset.nft.v1.EventClassIssued",
  encode(message: EventClassIssued, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(58).string(message.uriHash);
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventClassIssued {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClassIssued();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.uri = reader.string();
          break;
        case 7:
          message.uriHash = reader.string();
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
  fromPartial(object: Partial<EventClassIssued>): EventClassIssued {
    const message = createBaseEventClassIssued();
    message.id = object.id ?? "";
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.features = object.features?.map(e => e) || [];
    message.royaltyRate = object.royaltyRate ?? "";
    return message;
  },
  fromAmino(object: EventClassIssuedAmino): EventClassIssued {
    const message = createBaseEventClassIssued();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
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
    message.features = object.features?.map(e => classFeatureFromJSON(e)) || [];
    if (object.royalty_rate !== undefined && object.royalty_rate !== null) {
      message.royaltyRate = object.royalty_rate;
    }
    return message;
  },
  toAmino(message: EventClassIssued): EventClassIssuedAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.issuer = message.issuer;
    obj.symbol = message.symbol;
    obj.name = message.name;
    obj.description = message.description;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    if (message.features) {
      obj.features = message.features.map(e => classFeatureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.royalty_rate = message.royaltyRate;
    return obj;
  },
  fromAminoMsg(object: EventClassIssuedAminoMsg): EventClassIssued {
    return EventClassIssued.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClassIssuedProtoMsg): EventClassIssued {
    return EventClassIssued.decode(message.value);
  },
  toProto(message: EventClassIssued): Uint8Array {
    return EventClassIssued.encode(message).finish();
  },
  toProtoMsg(message: EventClassIssued): EventClassIssuedProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventClassIssued",
      value: EventClassIssued.encode(message).finish()
    };
  }
};
function createBaseEventFrozen(): EventFrozen {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
export const EventFrozen = {
  typeUrl: "/coreum.asset.nft.v1.EventFrozen",
  encode(message: EventFrozen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventFrozen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFrozen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventFrozen>): EventFrozen {
    const message = createBaseEventFrozen();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventFrozenAmino): EventFrozen {
    const message = createBaseEventFrozen();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventFrozen): EventFrozenAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: EventFrozenAminoMsg): EventFrozen {
    return EventFrozen.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFrozenProtoMsg): EventFrozen {
    return EventFrozen.decode(message.value);
  },
  toProto(message: EventFrozen): Uint8Array {
    return EventFrozen.encode(message).finish();
  },
  toProtoMsg(message: EventFrozen): EventFrozenProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventFrozen",
      value: EventFrozen.encode(message).finish()
    };
  }
};
function createBaseEventUnfrozen(): EventUnfrozen {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
export const EventUnfrozen = {
  typeUrl: "/coreum.asset.nft.v1.EventUnfrozen",
  encode(message: EventUnfrozen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUnfrozen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnfrozen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventUnfrozen>): EventUnfrozen {
    const message = createBaseEventUnfrozen();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventUnfrozenAmino): EventUnfrozen {
    const message = createBaseEventUnfrozen();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventUnfrozen): EventUnfrozenAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: EventUnfrozenAminoMsg): EventUnfrozen {
    return EventUnfrozen.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUnfrozenProtoMsg): EventUnfrozen {
    return EventUnfrozen.decode(message.value);
  },
  toProto(message: EventUnfrozen): Uint8Array {
    return EventUnfrozen.encode(message).finish();
  },
  toProtoMsg(message: EventUnfrozen): EventUnfrozenProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventUnfrozen",
      value: EventUnfrozen.encode(message).finish()
    };
  }
};
function createBaseEventClassFrozen(): EventClassFrozen {
  return {
    classId: "",
    account: ""
  };
}
export const EventClassFrozen = {
  typeUrl: "/coreum.asset.nft.v1.EventClassFrozen",
  encode(message: EventClassFrozen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventClassFrozen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClassFrozen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
  fromPartial(object: Partial<EventClassFrozen>): EventClassFrozen {
    const message = createBaseEventClassFrozen();
    message.classId = object.classId ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: EventClassFrozenAmino): EventClassFrozen {
    const message = createBaseEventClassFrozen();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: EventClassFrozen): EventClassFrozenAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: EventClassFrozenAminoMsg): EventClassFrozen {
    return EventClassFrozen.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClassFrozenProtoMsg): EventClassFrozen {
    return EventClassFrozen.decode(message.value);
  },
  toProto(message: EventClassFrozen): Uint8Array {
    return EventClassFrozen.encode(message).finish();
  },
  toProtoMsg(message: EventClassFrozen): EventClassFrozenProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventClassFrozen",
      value: EventClassFrozen.encode(message).finish()
    };
  }
};
function createBaseEventClassUnfrozen(): EventClassUnfrozen {
  return {
    classId: "",
    account: ""
  };
}
export const EventClassUnfrozen = {
  typeUrl: "/coreum.asset.nft.v1.EventClassUnfrozen",
  encode(message: EventClassUnfrozen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventClassUnfrozen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClassUnfrozen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
  fromPartial(object: Partial<EventClassUnfrozen>): EventClassUnfrozen {
    const message = createBaseEventClassUnfrozen();
    message.classId = object.classId ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: EventClassUnfrozenAmino): EventClassUnfrozen {
    const message = createBaseEventClassUnfrozen();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: EventClassUnfrozen): EventClassUnfrozenAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: EventClassUnfrozenAminoMsg): EventClassUnfrozen {
    return EventClassUnfrozen.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClassUnfrozenProtoMsg): EventClassUnfrozen {
    return EventClassUnfrozen.decode(message.value);
  },
  toProto(message: EventClassUnfrozen): Uint8Array {
    return EventClassUnfrozen.encode(message).finish();
  },
  toProtoMsg(message: EventClassUnfrozen): EventClassUnfrozenProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventClassUnfrozen",
      value: EventClassUnfrozen.encode(message).finish()
    };
  }
};
function createBaseEventAddedToWhitelist(): EventAddedToWhitelist {
  return {
    classId: "",
    id: "",
    account: ""
  };
}
export const EventAddedToWhitelist = {
  typeUrl: "/coreum.asset.nft.v1.EventAddedToWhitelist",
  encode(message: EventAddedToWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAddedToWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddedToWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
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
  fromPartial(object: Partial<EventAddedToWhitelist>): EventAddedToWhitelist {
    const message = createBaseEventAddedToWhitelist();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: EventAddedToWhitelistAmino): EventAddedToWhitelist {
    const message = createBaseEventAddedToWhitelist();
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
  toAmino(message: EventAddedToWhitelist): EventAddedToWhitelistAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: EventAddedToWhitelistAminoMsg): EventAddedToWhitelist {
    return EventAddedToWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAddedToWhitelistProtoMsg): EventAddedToWhitelist {
    return EventAddedToWhitelist.decode(message.value);
  },
  toProto(message: EventAddedToWhitelist): Uint8Array {
    return EventAddedToWhitelist.encode(message).finish();
  },
  toProtoMsg(message: EventAddedToWhitelist): EventAddedToWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventAddedToWhitelist",
      value: EventAddedToWhitelist.encode(message).finish()
    };
  }
};
function createBaseEventRemovedFromWhitelist(): EventRemovedFromWhitelist {
  return {
    classId: "",
    id: "",
    account: ""
  };
}
export const EventRemovedFromWhitelist = {
  typeUrl: "/coreum.asset.nft.v1.EventRemovedFromWhitelist",
  encode(message: EventRemovedFromWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemovedFromWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemovedFromWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
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
  fromPartial(object: Partial<EventRemovedFromWhitelist>): EventRemovedFromWhitelist {
    const message = createBaseEventRemovedFromWhitelist();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: EventRemovedFromWhitelistAmino): EventRemovedFromWhitelist {
    const message = createBaseEventRemovedFromWhitelist();
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
  toAmino(message: EventRemovedFromWhitelist): EventRemovedFromWhitelistAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: EventRemovedFromWhitelistAminoMsg): EventRemovedFromWhitelist {
    return EventRemovedFromWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemovedFromWhitelistProtoMsg): EventRemovedFromWhitelist {
    return EventRemovedFromWhitelist.decode(message.value);
  },
  toProto(message: EventRemovedFromWhitelist): Uint8Array {
    return EventRemovedFromWhitelist.encode(message).finish();
  },
  toProtoMsg(message: EventRemovedFromWhitelist): EventRemovedFromWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventRemovedFromWhitelist",
      value: EventRemovedFromWhitelist.encode(message).finish()
    };
  }
};
function createBaseEventAddedToClassWhitelist(): EventAddedToClassWhitelist {
  return {
    classId: "",
    account: ""
  };
}
export const EventAddedToClassWhitelist = {
  typeUrl: "/coreum.asset.nft.v1.EventAddedToClassWhitelist",
  encode(message: EventAddedToClassWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAddedToClassWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddedToClassWhitelist();
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
  fromPartial(object: Partial<EventAddedToClassWhitelist>): EventAddedToClassWhitelist {
    const message = createBaseEventAddedToClassWhitelist();
    message.classId = object.classId ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: EventAddedToClassWhitelistAmino): EventAddedToClassWhitelist {
    const message = createBaseEventAddedToClassWhitelist();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: EventAddedToClassWhitelist): EventAddedToClassWhitelistAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: EventAddedToClassWhitelistAminoMsg): EventAddedToClassWhitelist {
    return EventAddedToClassWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAddedToClassWhitelistProtoMsg): EventAddedToClassWhitelist {
    return EventAddedToClassWhitelist.decode(message.value);
  },
  toProto(message: EventAddedToClassWhitelist): Uint8Array {
    return EventAddedToClassWhitelist.encode(message).finish();
  },
  toProtoMsg(message: EventAddedToClassWhitelist): EventAddedToClassWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventAddedToClassWhitelist",
      value: EventAddedToClassWhitelist.encode(message).finish()
    };
  }
};
function createBaseEventRemovedFromClassWhitelist(): EventRemovedFromClassWhitelist {
  return {
    classId: "",
    account: ""
  };
}
export const EventRemovedFromClassWhitelist = {
  typeUrl: "/coreum.asset.nft.v1.EventRemovedFromClassWhitelist",
  encode(message: EventRemovedFromClassWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemovedFromClassWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemovedFromClassWhitelist();
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
  fromPartial(object: Partial<EventRemovedFromClassWhitelist>): EventRemovedFromClassWhitelist {
    const message = createBaseEventRemovedFromClassWhitelist();
    message.classId = object.classId ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: EventRemovedFromClassWhitelistAmino): EventRemovedFromClassWhitelist {
    const message = createBaseEventRemovedFromClassWhitelist();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: EventRemovedFromClassWhitelist): EventRemovedFromClassWhitelistAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: EventRemovedFromClassWhitelistAminoMsg): EventRemovedFromClassWhitelist {
    return EventRemovedFromClassWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemovedFromClassWhitelistProtoMsg): EventRemovedFromClassWhitelist {
    return EventRemovedFromClassWhitelist.decode(message.value);
  },
  toProto(message: EventRemovedFromClassWhitelist): Uint8Array {
    return EventRemovedFromClassWhitelist.encode(message).finish();
  },
  toProtoMsg(message: EventRemovedFromClassWhitelist): EventRemovedFromClassWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventRemovedFromClassWhitelist",
      value: EventRemovedFromClassWhitelist.encode(message).finish()
    };
  }
};