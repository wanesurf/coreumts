import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ClassDefinition, ClassDefinitionAmino, ClassDefinitionSDKType } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** GenesisState defines the nftasset module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  /** class_definitions keep the non-fungible token class definitions state */
  classDefinitions: ClassDefinition[];
  frozenNfts: FrozenNFT[];
  whitelistedNftAccounts: WhitelistedNFTAccounts[];
  burntNfts: BurntNFT[];
  classWhitelistedAccounts: ClassWhitelistedAccounts[];
  classFrozenAccounts: ClassFrozenAccounts[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the nftasset module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  /** class_definitions keep the non-fungible token class definitions state */
  class_definitions?: ClassDefinitionAmino[];
  frozen_nfts?: FrozenNFTAmino[];
  whitelisted_nft_accounts?: WhitelistedNFTAccountsAmino[];
  burnt_nfts?: BurntNFTAmino[];
  class_whitelisted_accounts?: ClassWhitelistedAccountsAmino[];
  class_frozen_accounts?: ClassFrozenAccountsAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/coreum.asset.nft.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the nftasset module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  class_definitions: ClassDefinitionSDKType[];
  frozen_nfts: FrozenNFTSDKType[];
  whitelisted_nft_accounts: WhitelistedNFTAccountsSDKType[];
  burnt_nfts: BurntNFTSDKType[];
  class_whitelisted_accounts: ClassWhitelistedAccountsSDKType[];
  class_frozen_accounts: ClassFrozenAccountsSDKType[];
}
export interface FrozenNFT {
  classID: string;
  nftIDs: string[];
}
export interface FrozenNFTProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.FrozenNFT";
  value: Uint8Array;
}
export interface FrozenNFTAmino {
  classID?: string;
  nftIDs?: string[];
}
export interface FrozenNFTAminoMsg {
  type: "/coreum.asset.nft.v1.FrozenNFT";
  value: FrozenNFTAmino;
}
export interface FrozenNFTSDKType {
  classID: string;
  nftIDs: string[];
}
export interface WhitelistedNFTAccounts {
  classID: string;
  nftID: string;
  accounts: string[];
}
export interface WhitelistedNFTAccountsProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.WhitelistedNFTAccounts";
  value: Uint8Array;
}
export interface WhitelistedNFTAccountsAmino {
  classID?: string;
  nftID?: string;
  accounts?: string[];
}
export interface WhitelistedNFTAccountsAminoMsg {
  type: "/coreum.asset.nft.v1.WhitelistedNFTAccounts";
  value: WhitelistedNFTAccountsAmino;
}
export interface WhitelistedNFTAccountsSDKType {
  classID: string;
  nftID: string;
  accounts: string[];
}
export interface ClassWhitelistedAccounts {
  classID: string;
  accounts: string[];
}
export interface ClassWhitelistedAccountsProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.ClassWhitelistedAccounts";
  value: Uint8Array;
}
export interface ClassWhitelistedAccountsAmino {
  classID?: string;
  accounts?: string[];
}
export interface ClassWhitelistedAccountsAminoMsg {
  type: "/coreum.asset.nft.v1.ClassWhitelistedAccounts";
  value: ClassWhitelistedAccountsAmino;
}
export interface ClassWhitelistedAccountsSDKType {
  classID: string;
  accounts: string[];
}
export interface ClassFrozenAccounts {
  classID: string;
  accounts: string[];
}
export interface ClassFrozenAccountsProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.ClassFrozenAccounts";
  value: Uint8Array;
}
export interface ClassFrozenAccountsAmino {
  classID?: string;
  accounts?: string[];
}
export interface ClassFrozenAccountsAminoMsg {
  type: "/coreum.asset.nft.v1.ClassFrozenAccounts";
  value: ClassFrozenAccountsAmino;
}
export interface ClassFrozenAccountsSDKType {
  classID: string;
  accounts: string[];
}
export interface BurntNFT {
  classID: string;
  nftIDs: string[];
}
export interface BurntNFTProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.BurntNFT";
  value: Uint8Array;
}
export interface BurntNFTAmino {
  classID?: string;
  nftIDs?: string[];
}
export interface BurntNFTAminoMsg {
  type: "/coreum.asset.nft.v1.BurntNFT";
  value: BurntNFTAmino;
}
export interface BurntNFTSDKType {
  classID: string;
  nftIDs: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    classDefinitions: [],
    frozenNfts: [],
    whitelistedNftAccounts: [],
    burntNfts: [],
    classWhitelistedAccounts: [],
    classFrozenAccounts: []
  };
}
export const GenesisState = {
  typeUrl: "/coreum.asset.nft.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.classDefinitions) {
      ClassDefinition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.frozenNfts) {
      FrozenNFT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.whitelistedNftAccounts) {
      WhitelistedNFTAccounts.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.burntNfts) {
      BurntNFT.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.classWhitelistedAccounts) {
      ClassWhitelistedAccounts.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.classFrozenAccounts) {
      ClassFrozenAccounts.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.classDefinitions.push(ClassDefinition.decode(reader, reader.uint32()));
          break;
        case 3:
          message.frozenNfts.push(FrozenNFT.decode(reader, reader.uint32()));
          break;
        case 4:
          message.whitelistedNftAccounts.push(WhitelistedNFTAccounts.decode(reader, reader.uint32()));
          break;
        case 5:
          message.burntNfts.push(BurntNFT.decode(reader, reader.uint32()));
          break;
        case 6:
          message.classWhitelistedAccounts.push(ClassWhitelistedAccounts.decode(reader, reader.uint32()));
          break;
        case 7:
          message.classFrozenAccounts.push(ClassFrozenAccounts.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.classDefinitions = object.classDefinitions?.map(e => ClassDefinition.fromPartial(e)) || [];
    message.frozenNfts = object.frozenNfts?.map(e => FrozenNFT.fromPartial(e)) || [];
    message.whitelistedNftAccounts = object.whitelistedNftAccounts?.map(e => WhitelistedNFTAccounts.fromPartial(e)) || [];
    message.burntNfts = object.burntNfts?.map(e => BurntNFT.fromPartial(e)) || [];
    message.classWhitelistedAccounts = object.classWhitelistedAccounts?.map(e => ClassWhitelistedAccounts.fromPartial(e)) || [];
    message.classFrozenAccounts = object.classFrozenAccounts?.map(e => ClassFrozenAccounts.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.classDefinitions = object.class_definitions?.map(e => ClassDefinition.fromAmino(e)) || [];
    message.frozenNfts = object.frozen_nfts?.map(e => FrozenNFT.fromAmino(e)) || [];
    message.whitelistedNftAccounts = object.whitelisted_nft_accounts?.map(e => WhitelistedNFTAccounts.fromAmino(e)) || [];
    message.burntNfts = object.burnt_nfts?.map(e => BurntNFT.fromAmino(e)) || [];
    message.classWhitelistedAccounts = object.class_whitelisted_accounts?.map(e => ClassWhitelistedAccounts.fromAmino(e)) || [];
    message.classFrozenAccounts = object.class_frozen_accounts?.map(e => ClassFrozenAccounts.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.classDefinitions) {
      obj.class_definitions = message.classDefinitions.map(e => e ? ClassDefinition.toAmino(e) : undefined);
    } else {
      obj.class_definitions = [];
    }
    if (message.frozenNfts) {
      obj.frozen_nfts = message.frozenNfts.map(e => e ? FrozenNFT.toAmino(e) : undefined);
    } else {
      obj.frozen_nfts = [];
    }
    if (message.whitelistedNftAccounts) {
      obj.whitelisted_nft_accounts = message.whitelistedNftAccounts.map(e => e ? WhitelistedNFTAccounts.toAmino(e) : undefined);
    } else {
      obj.whitelisted_nft_accounts = [];
    }
    if (message.burntNfts) {
      obj.burnt_nfts = message.burntNfts.map(e => e ? BurntNFT.toAmino(e) : undefined);
    } else {
      obj.burnt_nfts = [];
    }
    if (message.classWhitelistedAccounts) {
      obj.class_whitelisted_accounts = message.classWhitelistedAccounts.map(e => e ? ClassWhitelistedAccounts.toAmino(e) : undefined);
    } else {
      obj.class_whitelisted_accounts = [];
    }
    if (message.classFrozenAccounts) {
      obj.class_frozen_accounts = message.classFrozenAccounts.map(e => e ? ClassFrozenAccounts.toAmino(e) : undefined);
    } else {
      obj.class_frozen_accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseFrozenNFT(): FrozenNFT {
  return {
    classID: "",
    nftIDs: []
  };
}
export const FrozenNFT = {
  typeUrl: "/coreum.asset.nft.v1.FrozenNFT",
  encode(message: FrozenNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classID !== "") {
      writer.uint32(10).string(message.classID);
    }
    for (const v of message.nftIDs) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FrozenNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrozenNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classID = reader.string();
          break;
        case 2:
          message.nftIDs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FrozenNFT>): FrozenNFT {
    const message = createBaseFrozenNFT();
    message.classID = object.classID ?? "";
    message.nftIDs = object.nftIDs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: FrozenNFTAmino): FrozenNFT {
    const message = createBaseFrozenNFT();
    if (object.classID !== undefined && object.classID !== null) {
      message.classID = object.classID;
    }
    message.nftIDs = object.nftIDs?.map(e => e) || [];
    return message;
  },
  toAmino(message: FrozenNFT): FrozenNFTAmino {
    const obj: any = {};
    obj.classID = message.classID;
    if (message.nftIDs) {
      obj.nftIDs = message.nftIDs.map(e => e);
    } else {
      obj.nftIDs = [];
    }
    return obj;
  },
  fromAminoMsg(object: FrozenNFTAminoMsg): FrozenNFT {
    return FrozenNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: FrozenNFTProtoMsg): FrozenNFT {
    return FrozenNFT.decode(message.value);
  },
  toProto(message: FrozenNFT): Uint8Array {
    return FrozenNFT.encode(message).finish();
  },
  toProtoMsg(message: FrozenNFT): FrozenNFTProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.FrozenNFT",
      value: FrozenNFT.encode(message).finish()
    };
  }
};
function createBaseWhitelistedNFTAccounts(): WhitelistedNFTAccounts {
  return {
    classID: "",
    nftID: "",
    accounts: []
  };
}
export const WhitelistedNFTAccounts = {
  typeUrl: "/coreum.asset.nft.v1.WhitelistedNFTAccounts",
  encode(message: WhitelistedNFTAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classID !== "") {
      writer.uint32(10).string(message.classID);
    }
    if (message.nftID !== "") {
      writer.uint32(18).string(message.nftID);
    }
    for (const v of message.accounts) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistedNFTAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedNFTAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classID = reader.string();
          break;
        case 2:
          message.nftID = reader.string();
          break;
        case 4:
          message.accounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WhitelistedNFTAccounts>): WhitelistedNFTAccounts {
    const message = createBaseWhitelistedNFTAccounts();
    message.classID = object.classID ?? "";
    message.nftID = object.nftID ?? "";
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: WhitelistedNFTAccountsAmino): WhitelistedNFTAccounts {
    const message = createBaseWhitelistedNFTAccounts();
    if (object.classID !== undefined && object.classID !== null) {
      message.classID = object.classID;
    }
    if (object.nftID !== undefined && object.nftID !== null) {
      message.nftID = object.nftID;
    }
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: WhitelistedNFTAccounts): WhitelistedNFTAccountsAmino {
    const obj: any = {};
    obj.classID = message.classID;
    obj.nftID = message.nftID;
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: WhitelistedNFTAccountsAminoMsg): WhitelistedNFTAccounts {
    return WhitelistedNFTAccounts.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistedNFTAccountsProtoMsg): WhitelistedNFTAccounts {
    return WhitelistedNFTAccounts.decode(message.value);
  },
  toProto(message: WhitelistedNFTAccounts): Uint8Array {
    return WhitelistedNFTAccounts.encode(message).finish();
  },
  toProtoMsg(message: WhitelistedNFTAccounts): WhitelistedNFTAccountsProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.WhitelistedNFTAccounts",
      value: WhitelistedNFTAccounts.encode(message).finish()
    };
  }
};
function createBaseClassWhitelistedAccounts(): ClassWhitelistedAccounts {
  return {
    classID: "",
    accounts: []
  };
}
export const ClassWhitelistedAccounts = {
  typeUrl: "/coreum.asset.nft.v1.ClassWhitelistedAccounts",
  encode(message: ClassWhitelistedAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classID !== "") {
      writer.uint32(10).string(message.classID);
    }
    for (const v of message.accounts) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClassWhitelistedAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassWhitelistedAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classID = reader.string();
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
  fromPartial(object: Partial<ClassWhitelistedAccounts>): ClassWhitelistedAccounts {
    const message = createBaseClassWhitelistedAccounts();
    message.classID = object.classID ?? "";
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClassWhitelistedAccountsAmino): ClassWhitelistedAccounts {
    const message = createBaseClassWhitelistedAccounts();
    if (object.classID !== undefined && object.classID !== null) {
      message.classID = object.classID;
    }
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: ClassWhitelistedAccounts): ClassWhitelistedAccountsAmino {
    const obj: any = {};
    obj.classID = message.classID;
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClassWhitelistedAccountsAminoMsg): ClassWhitelistedAccounts {
    return ClassWhitelistedAccounts.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassWhitelistedAccountsProtoMsg): ClassWhitelistedAccounts {
    return ClassWhitelistedAccounts.decode(message.value);
  },
  toProto(message: ClassWhitelistedAccounts): Uint8Array {
    return ClassWhitelistedAccounts.encode(message).finish();
  },
  toProtoMsg(message: ClassWhitelistedAccounts): ClassWhitelistedAccountsProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.ClassWhitelistedAccounts",
      value: ClassWhitelistedAccounts.encode(message).finish()
    };
  }
};
function createBaseClassFrozenAccounts(): ClassFrozenAccounts {
  return {
    classID: "",
    accounts: []
  };
}
export const ClassFrozenAccounts = {
  typeUrl: "/coreum.asset.nft.v1.ClassFrozenAccounts",
  encode(message: ClassFrozenAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classID !== "") {
      writer.uint32(10).string(message.classID);
    }
    for (const v of message.accounts) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClassFrozenAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassFrozenAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classID = reader.string();
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
  fromPartial(object: Partial<ClassFrozenAccounts>): ClassFrozenAccounts {
    const message = createBaseClassFrozenAccounts();
    message.classID = object.classID ?? "";
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClassFrozenAccountsAmino): ClassFrozenAccounts {
    const message = createBaseClassFrozenAccounts();
    if (object.classID !== undefined && object.classID !== null) {
      message.classID = object.classID;
    }
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: ClassFrozenAccounts): ClassFrozenAccountsAmino {
    const obj: any = {};
    obj.classID = message.classID;
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClassFrozenAccountsAminoMsg): ClassFrozenAccounts {
    return ClassFrozenAccounts.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassFrozenAccountsProtoMsg): ClassFrozenAccounts {
    return ClassFrozenAccounts.decode(message.value);
  },
  toProto(message: ClassFrozenAccounts): Uint8Array {
    return ClassFrozenAccounts.encode(message).finish();
  },
  toProtoMsg(message: ClassFrozenAccounts): ClassFrozenAccountsProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.ClassFrozenAccounts",
      value: ClassFrozenAccounts.encode(message).finish()
    };
  }
};
function createBaseBurntNFT(): BurntNFT {
  return {
    classID: "",
    nftIDs: []
  };
}
export const BurntNFT = {
  typeUrl: "/coreum.asset.nft.v1.BurntNFT",
  encode(message: BurntNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classID !== "") {
      writer.uint32(10).string(message.classID);
    }
    for (const v of message.nftIDs) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BurntNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurntNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classID = reader.string();
          break;
        case 2:
          message.nftIDs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BurntNFT>): BurntNFT {
    const message = createBaseBurntNFT();
    message.classID = object.classID ?? "";
    message.nftIDs = object.nftIDs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BurntNFTAmino): BurntNFT {
    const message = createBaseBurntNFT();
    if (object.classID !== undefined && object.classID !== null) {
      message.classID = object.classID;
    }
    message.nftIDs = object.nftIDs?.map(e => e) || [];
    return message;
  },
  toAmino(message: BurntNFT): BurntNFTAmino {
    const obj: any = {};
    obj.classID = message.classID;
    if (message.nftIDs) {
      obj.nftIDs = message.nftIDs.map(e => e);
    } else {
      obj.nftIDs = [];
    }
    return obj;
  },
  fromAminoMsg(object: BurntNFTAminoMsg): BurntNFT {
    return BurntNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: BurntNFTProtoMsg): BurntNFT {
    return BurntNFT.decode(message.value);
  },
  toProto(message: BurntNFT): Uint8Array {
    return BurntNFT.encode(message).finish();
  },
  toProtoMsg(message: BurntNFT): BurntNFTProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.BurntNFT",
      value: BurntNFT.encode(message).finish()
    };
  }
};