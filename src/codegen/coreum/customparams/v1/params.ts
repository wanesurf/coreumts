import { BinaryReader, BinaryWriter } from "../../../binary";
/** StakingParams defines the set of additional staking params for the staking module wrapper. */
export interface StakingParams {
  /** min_self_delegation is the validators global self declared minimum for delegation. */
  minSelfDelegation: string;
}
export interface StakingParamsProtoMsg {
  typeUrl: "/coreum.customparams.v1.StakingParams";
  value: Uint8Array;
}
/** StakingParams defines the set of additional staking params for the staking module wrapper. */
export interface StakingParamsAmino {
  /** min_self_delegation is the validators global self declared minimum for delegation. */
  min_self_delegation?: string;
}
export interface StakingParamsAminoMsg {
  type: "/coreum.customparams.v1.StakingParams";
  value: StakingParamsAmino;
}
/** StakingParams defines the set of additional staking params for the staking module wrapper. */
export interface StakingParamsSDKType {
  min_self_delegation: string;
}
function createBaseStakingParams(): StakingParams {
  return {
    minSelfDelegation: ""
  };
}
export const StakingParams = {
  typeUrl: "/coreum.customparams.v1.StakingParams",
  encode(message: StakingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minSelfDelegation !== "") {
      writer.uint32(10).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingParams>): StakingParams {
    const message = createBaseStakingParams();
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
  fromAmino(object: StakingParamsAmino): StakingParams {
    const message = createBaseStakingParams();
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    return message;
  },
  toAmino(message: StakingParams): StakingParamsAmino {
    const obj: any = {};
    obj.min_self_delegation = message.minSelfDelegation;
    return obj;
  },
  fromAminoMsg(object: StakingParamsAminoMsg): StakingParams {
    return StakingParams.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingParamsProtoMsg): StakingParams {
    return StakingParams.decode(message.value);
  },
  toProto(message: StakingParams): Uint8Array {
    return StakingParams.encode(message).finish();
  },
  toProtoMsg(message: StakingParams): StakingParamsProtoMsg {
    return {
      typeUrl: "/coreum.customparams.v1.StakingParams",
      value: StakingParams.encode(message).finish()
    };
  }
};