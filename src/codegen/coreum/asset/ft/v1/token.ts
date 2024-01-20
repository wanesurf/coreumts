import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
/** Feature defines possible features of fungible token. */
export enum Feature {
  minting = 0,
  burning = 1,
  freezing = 2,
  whitelisting = 3,
  ibc = 4,
  block_smart_contracts = 5,
  UNRECOGNIZED = -1,
}
export const FeatureSDKType = Feature;
export const FeatureAmino = Feature;
export function featureFromJSON(object: any): Feature {
  switch (object) {
    case 0:
    case "minting":
      return Feature.minting;
    case 1:
    case "burning":
      return Feature.burning;
    case 2:
    case "freezing":
      return Feature.freezing;
    case 3:
    case "whitelisting":
      return Feature.whitelisting;
    case 4:
    case "ibc":
      return Feature.ibc;
    case 5:
    case "block_smart_contracts":
      return Feature.block_smart_contracts;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Feature.UNRECOGNIZED;
  }
}
export function featureToJSON(object: Feature): string {
  switch (object) {
    case Feature.minting:
      return "minting";
    case Feature.burning:
      return "burning";
    case Feature.freezing:
      return "freezing";
    case Feature.whitelisting:
      return "whitelisting";
    case Feature.ibc:
      return "ibc";
    case Feature.block_smart_contracts:
      return "block_smart_contracts";
    case Feature.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Definition defines the fungible token settings to store. */
export interface Definition {
  denom: string;
  issuer: string;
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
  version: number;
  uri: string;
  uriHash: string;
}
export interface DefinitionProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.Definition";
  value: Uint8Array;
}
/** Definition defines the fungible token settings to store. */
export interface DefinitionAmino {
  denom?: string;
  issuer?: string;
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
  version?: number;
  uri?: string;
  uri_hash?: string;
}
export interface DefinitionAminoMsg {
  type: "/coreum.asset.ft.v1.Definition";
  value: DefinitionAmino;
}
/** Definition defines the fungible token settings to store. */
export interface DefinitionSDKType {
  denom: string;
  issuer: string;
  features: Feature[];
  burn_rate: string;
  send_commission_rate: string;
  version: number;
  uri: string;
  uri_hash: string;
}
/** Token is a full representation of the fungible token. */
export interface Token {
  denom: string;
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  description: string;
  globallyFrozen: boolean;
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
  version: number;
  uri: string;
  uriHash: string;
}
export interface TokenProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.Token";
  value: Uint8Array;
}
/** Token is a full representation of the fungible token. */
export interface TokenAmino {
  denom?: string;
  issuer?: string;
  symbol?: string;
  subunit?: string;
  precision?: number;
  description?: string;
  globally_frozen?: boolean;
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
  version?: number;
  uri?: string;
  uri_hash?: string;
}
export interface TokenAminoMsg {
  type: "/coreum.asset.ft.v1.Token";
  value: TokenAmino;
}
/** Token is a full representation of the fungible token. */
export interface TokenSDKType {
  denom: string;
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  description: string;
  globally_frozen: boolean;
  features: Feature[];
  burn_rate: string;
  send_commission_rate: string;
  version: number;
  uri: string;
  uri_hash: string;
}
/** DelayedTokenUpgradeV1 is executed by the delay module when it's time to enable IBC. */
export interface DelayedTokenUpgradeV1 {
  denom: string;
}
export interface DelayedTokenUpgradeV1ProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.DelayedTokenUpgradeV1";
  value: Uint8Array;
}
/** DelayedTokenUpgradeV1 is executed by the delay module when it's time to enable IBC. */
export interface DelayedTokenUpgradeV1Amino {
  denom?: string;
}
export interface DelayedTokenUpgradeV1AminoMsg {
  type: "/coreum.asset.ft.v1.DelayedTokenUpgradeV1";
  value: DelayedTokenUpgradeV1Amino;
}
/** DelayedTokenUpgradeV1 is executed by the delay module when it's time to enable IBC. */
export interface DelayedTokenUpgradeV1SDKType {
  denom: string;
}
/** TokenUpgradeV1Status defines the current status of the v1 token migration. */
export interface TokenUpgradeV1Status {
  ibcEnabled: boolean;
  startTime: Date;
  endTime: Date;
}
export interface TokenUpgradeV1StatusProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.TokenUpgradeV1Status";
  value: Uint8Array;
}
/** TokenUpgradeV1Status defines the current status of the v1 token migration. */
export interface TokenUpgradeV1StatusAmino {
  ibc_enabled?: boolean;
  start_time?: string;
  end_time?: string;
}
export interface TokenUpgradeV1StatusAminoMsg {
  type: "/coreum.asset.ft.v1.TokenUpgradeV1Status";
  value: TokenUpgradeV1StatusAmino;
}
/** TokenUpgradeV1Status defines the current status of the v1 token migration. */
export interface TokenUpgradeV1StatusSDKType {
  ibc_enabled: boolean;
  start_time: Date;
  end_time: Date;
}
/** TokenUpgradeStatuses defines all statuses of the token migrations. */
export interface TokenUpgradeStatuses {
  v1?: TokenUpgradeV1Status;
}
export interface TokenUpgradeStatusesProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.TokenUpgradeStatuses";
  value: Uint8Array;
}
/** TokenUpgradeStatuses defines all statuses of the token migrations. */
export interface TokenUpgradeStatusesAmino {
  v1?: TokenUpgradeV1StatusAmino;
}
export interface TokenUpgradeStatusesAminoMsg {
  type: "/coreum.asset.ft.v1.TokenUpgradeStatuses";
  value: TokenUpgradeStatusesAmino;
}
/** TokenUpgradeStatuses defines all statuses of the token migrations. */
export interface TokenUpgradeStatusesSDKType {
  v1?: TokenUpgradeV1StatusSDKType;
}
function createBaseDefinition(): Definition {
  return {
    denom: "",
    issuer: "",
    features: [],
    burnRate: "",
    sendCommissionRate: "",
    version: 0,
    uri: "",
    uriHash: ""
  };
}
export const Definition = {
  typeUrl: "/coreum.asset.ft.v1.Definition",
  encode(message: Definition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    writer.uint32(26).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.burnRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.burnRate, 18).atomics);
    }
    if (message.sendCommissionRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.sendCommissionRate, 18).atomics);
    }
    if (message.version !== 0) {
      writer.uint32(48).uint32(message.version);
    }
    if (message.uri !== "") {
      writer.uint32(58).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Definition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push((reader.int32() as any));
            }
          } else {
            message.features.push((reader.int32() as any));
          }
          break;
        case 4:
          message.burnRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.sendCommissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.version = reader.uint32();
          break;
        case 7:
          message.uri = reader.string();
          break;
        case 8:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Definition>): Definition {
    const message = createBaseDefinition();
    message.denom = object.denom ?? "";
    message.issuer = object.issuer ?? "";
    message.features = object.features?.map(e => e) || [];
    message.burnRate = object.burnRate ?? "";
    message.sendCommissionRate = object.sendCommissionRate ?? "";
    message.version = object.version ?? 0;
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
  fromAmino(object: DefinitionAmino): Definition {
    const message = createBaseDefinition();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    message.features = object.features?.map(e => featureFromJSON(e)) || [];
    if (object.burn_rate !== undefined && object.burn_rate !== null) {
      message.burnRate = object.burn_rate;
    }
    if (object.send_commission_rate !== undefined && object.send_commission_rate !== null) {
      message.sendCommissionRate = object.send_commission_rate;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    return message;
  },
  toAmino(message: Definition): DefinitionAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.issuer = message.issuer;
    if (message.features) {
      obj.features = message.features.map(e => featureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.burn_rate = message.burnRate;
    obj.send_commission_rate = message.sendCommissionRate;
    obj.version = message.version;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    return obj;
  },
  fromAminoMsg(object: DefinitionAminoMsg): Definition {
    return Definition.fromAmino(object.value);
  },
  fromProtoMsg(message: DefinitionProtoMsg): Definition {
    return Definition.decode(message.value);
  },
  toProto(message: Definition): Uint8Array {
    return Definition.encode(message).finish();
  },
  toProtoMsg(message: Definition): DefinitionProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.Definition",
      value: Definition.encode(message).finish()
    };
  }
};
function createBaseToken(): Token {
  return {
    denom: "",
    issuer: "",
    symbol: "",
    subunit: "",
    precision: 0,
    description: "",
    globallyFrozen: false,
    features: [],
    burnRate: "",
    sendCommissionRate: "",
    version: 0,
    uri: "",
    uriHash: ""
  };
}
export const Token = {
  typeUrl: "/coreum.asset.ft.v1.Token",
  encode(message: Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.subunit !== "") {
      writer.uint32(34).string(message.subunit);
    }
    if (message.precision !== 0) {
      writer.uint32(40).uint32(message.precision);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.globallyFrozen === true) {
      writer.uint32(56).bool(message.globallyFrozen);
    }
    writer.uint32(66).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.burnRate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.burnRate, 18).atomics);
    }
    if (message.sendCommissionRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.sendCommissionRate, 18).atomics);
    }
    if (message.version !== 0) {
      writer.uint32(88).uint32(message.version);
    }
    if (message.uri !== "") {
      writer.uint32(98).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(106).string(message.uriHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Token {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.subunit = reader.string();
          break;
        case 5:
          message.precision = reader.uint32();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.globallyFrozen = reader.bool();
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
          message.burnRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.sendCommissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.version = reader.uint32();
          break;
        case 12:
          message.uri = reader.string();
          break;
        case 13:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.denom = object.denom ?? "";
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.subunit = object.subunit ?? "";
    message.precision = object.precision ?? 0;
    message.description = object.description ?? "";
    message.globallyFrozen = object.globallyFrozen ?? false;
    message.features = object.features?.map(e => e) || [];
    message.burnRate = object.burnRate ?? "";
    message.sendCommissionRate = object.sendCommissionRate ?? "";
    message.version = object.version ?? 0;
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
  fromAmino(object: TokenAmino): Token {
    const message = createBaseToken();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
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
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.globally_frozen !== undefined && object.globally_frozen !== null) {
      message.globallyFrozen = object.globally_frozen;
    }
    message.features = object.features?.map(e => featureFromJSON(e)) || [];
    if (object.burn_rate !== undefined && object.burn_rate !== null) {
      message.burnRate = object.burn_rate;
    }
    if (object.send_commission_rate !== undefined && object.send_commission_rate !== null) {
      message.sendCommissionRate = object.send_commission_rate;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    return message;
  },
  toAmino(message: Token): TokenAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.issuer = message.issuer;
    obj.symbol = message.symbol;
    obj.subunit = message.subunit;
    obj.precision = message.precision;
    obj.description = message.description;
    obj.globally_frozen = message.globallyFrozen;
    if (message.features) {
      obj.features = message.features.map(e => featureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.burn_rate = message.burnRate;
    obj.send_commission_rate = message.sendCommissionRate;
    obj.version = message.version;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    return obj;
  },
  fromAminoMsg(object: TokenAminoMsg): Token {
    return Token.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenProtoMsg): Token {
    return Token.decode(message.value);
  },
  toProto(message: Token): Uint8Array {
    return Token.encode(message).finish();
  },
  toProtoMsg(message: Token): TokenProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.Token",
      value: Token.encode(message).finish()
    };
  }
};
function createBaseDelayedTokenUpgradeV1(): DelayedTokenUpgradeV1 {
  return {
    denom: ""
  };
}
export const DelayedTokenUpgradeV1 = {
  typeUrl: "/coreum.asset.ft.v1.DelayedTokenUpgradeV1",
  encode(message: DelayedTokenUpgradeV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelayedTokenUpgradeV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedTokenUpgradeV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelayedTokenUpgradeV1>): DelayedTokenUpgradeV1 {
    const message = createBaseDelayedTokenUpgradeV1();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DelayedTokenUpgradeV1Amino): DelayedTokenUpgradeV1 {
    const message = createBaseDelayedTokenUpgradeV1();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: DelayedTokenUpgradeV1): DelayedTokenUpgradeV1Amino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: DelayedTokenUpgradeV1AminoMsg): DelayedTokenUpgradeV1 {
    return DelayedTokenUpgradeV1.fromAmino(object.value);
  },
  fromProtoMsg(message: DelayedTokenUpgradeV1ProtoMsg): DelayedTokenUpgradeV1 {
    return DelayedTokenUpgradeV1.decode(message.value);
  },
  toProto(message: DelayedTokenUpgradeV1): Uint8Array {
    return DelayedTokenUpgradeV1.encode(message).finish();
  },
  toProtoMsg(message: DelayedTokenUpgradeV1): DelayedTokenUpgradeV1ProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.DelayedTokenUpgradeV1",
      value: DelayedTokenUpgradeV1.encode(message).finish()
    };
  }
};
function createBaseTokenUpgradeV1Status(): TokenUpgradeV1Status {
  return {
    ibcEnabled: false,
    startTime: new Date(),
    endTime: new Date()
  };
}
export const TokenUpgradeV1Status = {
  typeUrl: "/coreum.asset.ft.v1.TokenUpgradeV1Status",
  encode(message: TokenUpgradeV1Status, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ibcEnabled === true) {
      writer.uint32(8).bool(message.ibcEnabled);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenUpgradeV1Status {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenUpgradeV1Status();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ibcEnabled = reader.bool();
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenUpgradeV1Status>): TokenUpgradeV1Status {
    const message = createBaseTokenUpgradeV1Status();
    message.ibcEnabled = object.ibcEnabled ?? false;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
  fromAmino(object: TokenUpgradeV1StatusAmino): TokenUpgradeV1Status {
    const message = createBaseTokenUpgradeV1Status();
    if (object.ibc_enabled !== undefined && object.ibc_enabled !== null) {
      message.ibcEnabled = object.ibc_enabled;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    return message;
  },
  toAmino(message: TokenUpgradeV1Status): TokenUpgradeV1StatusAmino {
    const obj: any = {};
    obj.ibc_enabled = message.ibcEnabled;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenUpgradeV1StatusAminoMsg): TokenUpgradeV1Status {
    return TokenUpgradeV1Status.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenUpgradeV1StatusProtoMsg): TokenUpgradeV1Status {
    return TokenUpgradeV1Status.decode(message.value);
  },
  toProto(message: TokenUpgradeV1Status): Uint8Array {
    return TokenUpgradeV1Status.encode(message).finish();
  },
  toProtoMsg(message: TokenUpgradeV1Status): TokenUpgradeV1StatusProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.TokenUpgradeV1Status",
      value: TokenUpgradeV1Status.encode(message).finish()
    };
  }
};
function createBaseTokenUpgradeStatuses(): TokenUpgradeStatuses {
  return {
    v1: undefined
  };
}
export const TokenUpgradeStatuses = {
  typeUrl: "/coreum.asset.ft.v1.TokenUpgradeStatuses",
  encode(message: TokenUpgradeStatuses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.v1 !== undefined) {
      TokenUpgradeV1Status.encode(message.v1, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenUpgradeStatuses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenUpgradeStatuses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v1 = TokenUpgradeV1Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenUpgradeStatuses>): TokenUpgradeStatuses {
    const message = createBaseTokenUpgradeStatuses();
    message.v1 = object.v1 !== undefined && object.v1 !== null ? TokenUpgradeV1Status.fromPartial(object.v1) : undefined;
    return message;
  },
  fromAmino(object: TokenUpgradeStatusesAmino): TokenUpgradeStatuses {
    const message = createBaseTokenUpgradeStatuses();
    if (object.v1 !== undefined && object.v1 !== null) {
      message.v1 = TokenUpgradeV1Status.fromAmino(object.v1);
    }
    return message;
  },
  toAmino(message: TokenUpgradeStatuses): TokenUpgradeStatusesAmino {
    const obj: any = {};
    obj.v1 = message.v1 ? TokenUpgradeV1Status.toAmino(message.v1) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenUpgradeStatusesAminoMsg): TokenUpgradeStatuses {
    return TokenUpgradeStatuses.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenUpgradeStatusesProtoMsg): TokenUpgradeStatuses {
    return TokenUpgradeStatuses.decode(message.value);
  },
  toProto(message: TokenUpgradeStatuses): Uint8Array {
    return TokenUpgradeStatuses.encode(message).finish();
  },
  toProtoMsg(message: TokenUpgradeStatuses): TokenUpgradeStatusesProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.TokenUpgradeStatuses",
      value: TokenUpgradeStatuses.encode(message).finish()
    };
  }
};