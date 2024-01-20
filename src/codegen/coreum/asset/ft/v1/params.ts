import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
/** Params store gov manageable parameters. */
export interface Params {
  /** issue_fee is the fee burnt each time new token is issued. */
  issueFee: Coin;
  /** token_upgrade_decision_timeout defines the end of the decision period for upgrading the token. */
  tokenUpgradeDecisionTimeout: Date;
  /** token_upgrade_grace_period the period after which the token upgrade is executed effectively. */
  tokenUpgradeGracePeriod: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.Params";
  value: Uint8Array;
}
/** Params store gov manageable parameters. */
export interface ParamsAmino {
  /** issue_fee is the fee burnt each time new token is issued. */
  issue_fee?: CoinAmino;
  /** token_upgrade_decision_timeout defines the end of the decision period for upgrading the token. */
  token_upgrade_decision_timeout?: string;
  /** token_upgrade_grace_period the period after which the token upgrade is executed effectively. */
  token_upgrade_grace_period?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/coreum.asset.ft.v1.Params";
  value: ParamsAmino;
}
/** Params store gov manageable parameters. */
export interface ParamsSDKType {
  issue_fee: CoinSDKType;
  token_upgrade_decision_timeout: Date;
  token_upgrade_grace_period: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    issueFee: Coin.fromPartial({}),
    tokenUpgradeDecisionTimeout: new Date(),
    tokenUpgradeGracePeriod: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/coreum.asset.ft.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issueFee !== undefined) {
      Coin.encode(message.issueFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenUpgradeDecisionTimeout !== undefined) {
      Timestamp.encode(toTimestamp(message.tokenUpgradeDecisionTimeout), writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenUpgradeGracePeriod !== undefined) {
      Duration.encode(message.tokenUpgradeGracePeriod, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issueFee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenUpgradeDecisionTimeout = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenUpgradeGracePeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.issueFee = object.issueFee !== undefined && object.issueFee !== null ? Coin.fromPartial(object.issueFee) : undefined;
    message.tokenUpgradeDecisionTimeout = object.tokenUpgradeDecisionTimeout ?? undefined;
    message.tokenUpgradeGracePeriod = object.tokenUpgradeGracePeriod !== undefined && object.tokenUpgradeGracePeriod !== null ? Duration.fromPartial(object.tokenUpgradeGracePeriod) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.issue_fee !== undefined && object.issue_fee !== null) {
      message.issueFee = Coin.fromAmino(object.issue_fee);
    }
    if (object.token_upgrade_decision_timeout !== undefined && object.token_upgrade_decision_timeout !== null) {
      message.tokenUpgradeDecisionTimeout = fromTimestamp(Timestamp.fromAmino(object.token_upgrade_decision_timeout));
    }
    if (object.token_upgrade_grace_period !== undefined && object.token_upgrade_grace_period !== null) {
      message.tokenUpgradeGracePeriod = Duration.fromAmino(object.token_upgrade_grace_period);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.issue_fee = message.issueFee ? Coin.toAmino(message.issueFee) : undefined;
    obj.token_upgrade_decision_timeout = message.tokenUpgradeDecisionTimeout ? Timestamp.toAmino(toTimestamp(message.tokenUpgradeDecisionTimeout)) : undefined;
    obj.token_upgrade_grace_period = message.tokenUpgradeGracePeriod ? Duration.toAmino(message.tokenUpgradeGracePeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};