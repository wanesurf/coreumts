import { Feature, featureFromJSON, featureToJSON } from "./token";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { Decimal } from "@cosmjs/math";
/** MsgIssue defines message to issue new fungible token. */
export interface MsgIssue {
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  initialAmount: string;
  description: string;
  features: Feature[];
  /**
   * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * burn_amount. This value will be burnt on top of the send amount.
   */
  burnRate: string;
  /**
   * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * amount sent to the token issuer account.
   */
  sendCommissionRate: string;
  uri: string;
  uriHash: string;
}
export interface MsgIssueProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgIssue";
  value: Uint8Array;
}
/** MsgIssue defines message to issue new fungible token. */
export interface MsgIssueAmino {
  issuer?: string;
  symbol?: string;
  subunit?: string;
  precision?: number;
  initial_amount?: string;
  description?: string;
  features?: Feature[];
  /**
   * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * burn_amount. This value will be burnt on top of the send amount.
   */
  burn_rate?: string;
  /**
   * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * amount sent to the token issuer account.
   */
  send_commission_rate?: string;
  uri?: string;
  uri_hash?: string;
}
export interface MsgIssueAminoMsg {
  type: "/coreum.asset.ft.v1.MsgIssue";
  value: MsgIssueAmino;
}
/** MsgIssue defines message to issue new fungible token. */
export interface MsgIssueSDKType {
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  initial_amount: string;
  description: string;
  features: Feature[];
  burn_rate: string;
  send_commission_rate: string;
  uri: string;
  uri_hash: string;
}
export interface MsgMint {
  sender: string;
  coin: Coin;
  recipient: string;
}
export interface MsgMintProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgMint";
  value: Uint8Array;
}
export interface MsgMintAmino {
  sender?: string;
  coin?: CoinAmino;
  recipient?: string;
}
export interface MsgMintAminoMsg {
  type: "/coreum.asset.ft.v1.MsgMint";
  value: MsgMintAmino;
}
export interface MsgMintSDKType {
  sender: string;
  coin: CoinSDKType;
  recipient: string;
}
export interface MsgBurn {
  sender: string;
  coin: Coin;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgBurn";
  value: Uint8Array;
}
export interface MsgBurnAmino {
  sender?: string;
  coin?: CoinAmino;
}
export interface MsgBurnAminoMsg {
  type: "/coreum.asset.ft.v1.MsgBurn";
  value: MsgBurnAmino;
}
export interface MsgBurnSDKType {
  sender: string;
  coin: CoinSDKType;
}
export interface MsgFreeze {
  sender: string;
  account: string;
  coin: Coin;
}
export interface MsgFreezeProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgFreeze";
  value: Uint8Array;
}
export interface MsgFreezeAmino {
  sender?: string;
  account?: string;
  coin?: CoinAmino;
}
export interface MsgFreezeAminoMsg {
  type: "/coreum.asset.ft.v1.MsgFreeze";
  value: MsgFreezeAmino;
}
export interface MsgFreezeSDKType {
  sender: string;
  account: string;
  coin: CoinSDKType;
}
export interface MsgUnfreeze {
  sender: string;
  account: string;
  coin: Coin;
}
export interface MsgUnfreezeProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze";
  value: Uint8Array;
}
export interface MsgUnfreezeAmino {
  sender?: string;
  account?: string;
  coin?: CoinAmino;
}
export interface MsgUnfreezeAminoMsg {
  type: "/coreum.asset.ft.v1.MsgUnfreeze";
  value: MsgUnfreezeAmino;
}
export interface MsgUnfreezeSDKType {
  sender: string;
  account: string;
  coin: CoinSDKType;
}
export interface MsgSetFrozen {
  sender: string;
  account: string;
  coin: Coin;
}
export interface MsgSetFrozenProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgSetFrozen";
  value: Uint8Array;
}
export interface MsgSetFrozenAmino {
  sender?: string;
  account?: string;
  coin?: CoinAmino;
}
export interface MsgSetFrozenAminoMsg {
  type: "/coreum.asset.ft.v1.MsgSetFrozen";
  value: MsgSetFrozenAmino;
}
export interface MsgSetFrozenSDKType {
  sender: string;
  account: string;
  coin: CoinSDKType;
}
export interface MsgGloballyFreeze {
  sender: string;
  denom: string;
}
export interface MsgGloballyFreezeProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze";
  value: Uint8Array;
}
export interface MsgGloballyFreezeAmino {
  sender?: string;
  denom?: string;
}
export interface MsgGloballyFreezeAminoMsg {
  type: "/coreum.asset.ft.v1.MsgGloballyFreeze";
  value: MsgGloballyFreezeAmino;
}
export interface MsgGloballyFreezeSDKType {
  sender: string;
  denom: string;
}
export interface MsgGloballyUnfreeze {
  sender: string;
  denom: string;
}
export interface MsgGloballyUnfreezeProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze";
  value: Uint8Array;
}
export interface MsgGloballyUnfreezeAmino {
  sender?: string;
  denom?: string;
}
export interface MsgGloballyUnfreezeAminoMsg {
  type: "/coreum.asset.ft.v1.MsgGloballyUnfreeze";
  value: MsgGloballyUnfreezeAmino;
}
export interface MsgGloballyUnfreezeSDKType {
  sender: string;
  denom: string;
}
export interface MsgSetWhitelistedLimit {
  sender: string;
  account: string;
  coin: Coin;
}
export interface MsgSetWhitelistedLimitProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit";
  value: Uint8Array;
}
export interface MsgSetWhitelistedLimitAmino {
  sender?: string;
  account?: string;
  coin?: CoinAmino;
}
export interface MsgSetWhitelistedLimitAminoMsg {
  type: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit";
  value: MsgSetWhitelistedLimitAmino;
}
export interface MsgSetWhitelistedLimitSDKType {
  sender: string;
  account: string;
  coin: CoinSDKType;
}
/** MsgUpgradeTokenV1 is the message upgrading token to V1. */
export interface MsgUpgradeTokenV1 {
  sender: string;
  denom: string;
  ibcEnabled: boolean;
}
export interface MsgUpgradeTokenV1ProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgUpgradeTokenV1";
  value: Uint8Array;
}
/** MsgUpgradeTokenV1 is the message upgrading token to V1. */
export interface MsgUpgradeTokenV1Amino {
  sender?: string;
  denom?: string;
  ibc_enabled?: boolean;
}
export interface MsgUpgradeTokenV1AminoMsg {
  type: "/coreum.asset.ft.v1.MsgUpgradeTokenV1";
  value: MsgUpgradeTokenV1Amino;
}
/** MsgUpgradeTokenV1 is the message upgrading token to V1. */
export interface MsgUpgradeTokenV1SDKType {
  sender: string;
  denom: string;
  ibc_enabled: boolean;
}
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
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
  typeUrl: "/coreum.asset.ft.v1.EmptyResponse";
  value: Uint8Array;
}
export interface EmptyResponseAmino {}
export interface EmptyResponseAminoMsg {
  type: "/coreum.asset.ft.v1.EmptyResponse";
  value: EmptyResponseAmino;
}
export interface EmptyResponseSDKType {}
function createBaseMsgIssue(): MsgIssue {
  return {
    issuer: "",
    symbol: "",
    subunit: "",
    precision: 0,
    initialAmount: "",
    description: "",
    features: [],
    burnRate: "",
    sendCommissionRate: "",
    uri: "",
    uriHash: ""
  };
}
export const MsgIssue = {
  typeUrl: "/coreum.asset.ft.v1.MsgIssue",
  encode(message: MsgIssue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.subunit !== "") {
      writer.uint32(26).string(message.subunit);
    }
    if (message.precision !== 0) {
      writer.uint32(32).uint32(message.precision);
    }
    if (message.initialAmount !== "") {
      writer.uint32(42).string(message.initialAmount);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    writer.uint32(58).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.burnRate !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.burnRate, 18).atomics);
    }
    if (message.sendCommissionRate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.sendCommissionRate, 18).atomics);
    }
    if (message.uri !== "") {
      writer.uint32(82).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(90).string(message.uriHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIssue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssue();
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
          message.subunit = reader.string();
          break;
        case 4:
          message.precision = reader.uint32();
          break;
        case 5:
          message.initialAmount = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push((reader.int32() as any));
            }
          } else {
            message.features.push((reader.int32() as any));
          }
          break;
        case 8:
          message.burnRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.sendCommissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.uri = reader.string();
          break;
        case 11:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgIssue>): MsgIssue {
    const message = createBaseMsgIssue();
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.subunit = object.subunit ?? "";
    message.precision = object.precision ?? 0;
    message.initialAmount = object.initialAmount ?? "";
    message.description = object.description ?? "";
    message.features = object.features?.map(e => e) || [];
    message.burnRate = object.burnRate ?? "";
    message.sendCommissionRate = object.sendCommissionRate ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
  fromAmino(object: MsgIssueAmino): MsgIssue {
    const message = createBaseMsgIssue();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.subunit !== undefined && object.subunit !== null) {
      message.subunit = object.subunit;
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = object.precision;
    }
    if (object.initial_amount !== undefined && object.initial_amount !== null) {
      message.initialAmount = object.initial_amount;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.features = object.features?.map(e => featureFromJSON(e)) || [];
    if (object.burn_rate !== undefined && object.burn_rate !== null) {
      message.burnRate = object.burn_rate;
    }
    if (object.send_commission_rate !== undefined && object.send_commission_rate !== null) {
      message.sendCommissionRate = object.send_commission_rate;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    return message;
  },
  toAmino(message: MsgIssue): MsgIssueAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.symbol = message.symbol;
    obj.subunit = message.subunit;
    obj.precision = message.precision;
    obj.initial_amount = message.initialAmount;
    obj.description = message.description;
    if (message.features) {
      obj.features = message.features.map(e => featureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.burn_rate = message.burnRate;
    obj.send_commission_rate = message.sendCommissionRate;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    return obj;
  },
  fromAminoMsg(object: MsgIssueAminoMsg): MsgIssue {
    return MsgIssue.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueProtoMsg): MsgIssue {
    return MsgIssue.decode(message.value);
  },
  toProto(message: MsgIssue): Uint8Array {
    return MsgIssue.encode(message).finish();
  },
  toProtoMsg(message: MsgIssue): MsgIssueProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgIssue",
      value: MsgIssue.encode(message).finish()
    };
  }
};
function createBaseMsgMint(): MsgMint {
  return {
    sender: "",
    coin: Coin.fromPartial({}),
    recipient: ""
  };
}
export const MsgMint = {
  typeUrl: "/coreum.asset.ft.v1.MsgMint",
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
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
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 3:
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
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    const message = createBaseMsgMint();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
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
      typeUrl: "/coreum.asset.ft.v1.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    sender: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgBurn = {
  typeUrl: "/coreum.asset.ft.v1.MsgBurn",
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
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
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
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
      typeUrl: "/coreum.asset.ft.v1.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgFreeze(): MsgFreeze {
  return {
    sender: "",
    account: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgFreeze = {
  typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
  encode(message: MsgFreeze, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
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
          message.account = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
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
    message.account = object.account ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgFreezeAmino): MsgFreeze {
    const message = createBaseMsgFreeze();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgFreeze): MsgFreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.account = message.account;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
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
      typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
      value: MsgFreeze.encode(message).finish()
    };
  }
};
function createBaseMsgUnfreeze(): MsgUnfreeze {
  return {
    sender: "",
    account: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgUnfreeze = {
  typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
  encode(message: MsgUnfreeze, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
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
          message.account = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
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
    message.account = object.account ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgUnfreezeAmino): MsgUnfreeze {
    const message = createBaseMsgUnfreeze();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgUnfreeze): MsgUnfreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.account = message.account;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
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
      typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
      value: MsgUnfreeze.encode(message).finish()
    };
  }
};
function createBaseMsgSetFrozen(): MsgSetFrozen {
  return {
    sender: "",
    account: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgSetFrozen = {
  typeUrl: "/coreum.asset.ft.v1.MsgSetFrozen",
  encode(message: MsgSetFrozen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetFrozen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFrozen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetFrozen>): MsgSetFrozen {
    const message = createBaseMsgSetFrozen();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgSetFrozenAmino): MsgSetFrozen {
    const message = createBaseMsgSetFrozen();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgSetFrozen): MsgSetFrozenAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.account = message.account;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetFrozenAminoMsg): MsgSetFrozen {
    return MsgSetFrozen.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetFrozenProtoMsg): MsgSetFrozen {
    return MsgSetFrozen.decode(message.value);
  },
  toProto(message: MsgSetFrozen): Uint8Array {
    return MsgSetFrozen.encode(message).finish();
  },
  toProtoMsg(message: MsgSetFrozen): MsgSetFrozenProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgSetFrozen",
      value: MsgSetFrozen.encode(message).finish()
    };
  }
};
function createBaseMsgGloballyFreeze(): MsgGloballyFreeze {
  return {
    sender: "",
    denom: ""
  };
}
export const MsgGloballyFreeze = {
  typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
  encode(message: MsgGloballyFreeze, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGloballyFreeze {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGloballyFreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGloballyFreeze>): MsgGloballyFreeze {
    const message = createBaseMsgGloballyFreeze();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgGloballyFreezeAmino): MsgGloballyFreeze {
    const message = createBaseMsgGloballyFreeze();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgGloballyFreeze): MsgGloballyFreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgGloballyFreezeAminoMsg): MsgGloballyFreeze {
    return MsgGloballyFreeze.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGloballyFreezeProtoMsg): MsgGloballyFreeze {
    return MsgGloballyFreeze.decode(message.value);
  },
  toProto(message: MsgGloballyFreeze): Uint8Array {
    return MsgGloballyFreeze.encode(message).finish();
  },
  toProtoMsg(message: MsgGloballyFreeze): MsgGloballyFreezeProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
      value: MsgGloballyFreeze.encode(message).finish()
    };
  }
};
function createBaseMsgGloballyUnfreeze(): MsgGloballyUnfreeze {
  return {
    sender: "",
    denom: ""
  };
}
export const MsgGloballyUnfreeze = {
  typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
  encode(message: MsgGloballyUnfreeze, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGloballyUnfreeze {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGloballyUnfreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGloballyUnfreeze>): MsgGloballyUnfreeze {
    const message = createBaseMsgGloballyUnfreeze();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgGloballyUnfreezeAmino): MsgGloballyUnfreeze {
    const message = createBaseMsgGloballyUnfreeze();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgGloballyUnfreeze): MsgGloballyUnfreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgGloballyUnfreezeAminoMsg): MsgGloballyUnfreeze {
    return MsgGloballyUnfreeze.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGloballyUnfreezeProtoMsg): MsgGloballyUnfreeze {
    return MsgGloballyUnfreeze.decode(message.value);
  },
  toProto(message: MsgGloballyUnfreeze): Uint8Array {
    return MsgGloballyUnfreeze.encode(message).finish();
  },
  toProtoMsg(message: MsgGloballyUnfreeze): MsgGloballyUnfreezeProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
      value: MsgGloballyUnfreeze.encode(message).finish()
    };
  }
};
function createBaseMsgSetWhitelistedLimit(): MsgSetWhitelistedLimit {
  return {
    sender: "",
    account: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgSetWhitelistedLimit = {
  typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
  encode(message: MsgSetWhitelistedLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWhitelistedLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWhitelistedLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetWhitelistedLimit>): MsgSetWhitelistedLimit {
    const message = createBaseMsgSetWhitelistedLimit();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgSetWhitelistedLimitAmino): MsgSetWhitelistedLimit {
    const message = createBaseMsgSetWhitelistedLimit();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgSetWhitelistedLimit): MsgSetWhitelistedLimitAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.account = message.account;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetWhitelistedLimitAminoMsg): MsgSetWhitelistedLimit {
    return MsgSetWhitelistedLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetWhitelistedLimitProtoMsg): MsgSetWhitelistedLimit {
    return MsgSetWhitelistedLimit.decode(message.value);
  },
  toProto(message: MsgSetWhitelistedLimit): Uint8Array {
    return MsgSetWhitelistedLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWhitelistedLimit): MsgSetWhitelistedLimitProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
      value: MsgSetWhitelistedLimit.encode(message).finish()
    };
  }
};
function createBaseMsgUpgradeTokenV1(): MsgUpgradeTokenV1 {
  return {
    sender: "",
    denom: "",
    ibcEnabled: false
  };
}
export const MsgUpgradeTokenV1 = {
  typeUrl: "/coreum.asset.ft.v1.MsgUpgradeTokenV1",
  encode(message: MsgUpgradeTokenV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.ibcEnabled === true) {
      writer.uint32(24).bool(message.ibcEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeTokenV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeTokenV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.ibcEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpgradeTokenV1>): MsgUpgradeTokenV1 {
    const message = createBaseMsgUpgradeTokenV1();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.ibcEnabled = object.ibcEnabled ?? false;
    return message;
  },
  fromAmino(object: MsgUpgradeTokenV1Amino): MsgUpgradeTokenV1 {
    const message = createBaseMsgUpgradeTokenV1();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.ibc_enabled !== undefined && object.ibc_enabled !== null) {
      message.ibcEnabled = object.ibc_enabled;
    }
    return message;
  },
  toAmino(message: MsgUpgradeTokenV1): MsgUpgradeTokenV1Amino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    obj.ibc_enabled = message.ibcEnabled;
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeTokenV1AminoMsg): MsgUpgradeTokenV1 {
    return MsgUpgradeTokenV1.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpgradeTokenV1ProtoMsg): MsgUpgradeTokenV1 {
    return MsgUpgradeTokenV1.decode(message.value);
  },
  toProto(message: MsgUpgradeTokenV1): Uint8Array {
    return MsgUpgradeTokenV1.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeTokenV1): MsgUpgradeTokenV1ProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgUpgradeTokenV1",
      value: MsgUpgradeTokenV1.encode(message).finish()
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
  typeUrl: "/coreum.asset.ft.v1.MsgUpdateParams",
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
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
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
      typeUrl: "/coreum.asset.ft.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseEmptyResponse(): EmptyResponse {
  return {};
}
export const EmptyResponse = {
  typeUrl: "/coreum.asset.ft.v1.EmptyResponse",
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
      typeUrl: "/coreum.asset.ft.v1.EmptyResponse",
      value: EmptyResponse.encode(message).finish()
    };
  }
};