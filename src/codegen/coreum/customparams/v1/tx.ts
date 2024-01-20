import { StakingParams, StakingParamsAmino, StakingParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface MsgUpdateStakingParams {
  authority: string;
  /** staking_params holds the parameters related to the staking module. */
  stakingParams: StakingParams;
}
export interface MsgUpdateStakingParamsProtoMsg {
  typeUrl: "/coreum.customparams.v1.MsgUpdateStakingParams";
  value: Uint8Array;
}
export interface MsgUpdateStakingParamsAmino {
  authority?: string;
  /** staking_params holds the parameters related to the staking module. */
  staking_params?: StakingParamsAmino;
}
export interface MsgUpdateStakingParamsAminoMsg {
  type: "cosmos-sdk/MsgUpdateStakingParams";
  value: MsgUpdateStakingParamsAmino;
}
export interface MsgUpdateStakingParamsSDKType {
  authority: string;
  staking_params: StakingParamsSDKType;
}
export interface EmptyResponse {}
export interface EmptyResponseProtoMsg {
  typeUrl: "/coreum.customparams.v1.EmptyResponse";
  value: Uint8Array;
}
export interface EmptyResponseAmino {}
export interface EmptyResponseAminoMsg {
  type: "/coreum.customparams.v1.EmptyResponse";
  value: EmptyResponseAmino;
}
export interface EmptyResponseSDKType {}
function createBaseMsgUpdateStakingParams(): MsgUpdateStakingParams {
  return {
    authority: "",
    stakingParams: StakingParams.fromPartial({})
  };
}
export const MsgUpdateStakingParams = {
  typeUrl: "/coreum.customparams.v1.MsgUpdateStakingParams",
  encode(message: MsgUpdateStakingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.stakingParams !== undefined) {
      StakingParams.encode(message.stakingParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateStakingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStakingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.stakingParams = StakingParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateStakingParams>): MsgUpdateStakingParams {
    const message = createBaseMsgUpdateStakingParams();
    message.authority = object.authority ?? "";
    message.stakingParams = object.stakingParams !== undefined && object.stakingParams !== null ? StakingParams.fromPartial(object.stakingParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateStakingParamsAmino): MsgUpdateStakingParams {
    const message = createBaseMsgUpdateStakingParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.staking_params !== undefined && object.staking_params !== null) {
      message.stakingParams = StakingParams.fromAmino(object.staking_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateStakingParams): MsgUpdateStakingParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.staking_params = message.stakingParams ? StakingParams.toAmino(message.stakingParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStakingParamsAminoMsg): MsgUpdateStakingParams {
    return MsgUpdateStakingParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateStakingParams): MsgUpdateStakingParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateStakingParams",
      value: MsgUpdateStakingParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateStakingParamsProtoMsg): MsgUpdateStakingParams {
    return MsgUpdateStakingParams.decode(message.value);
  },
  toProto(message: MsgUpdateStakingParams): Uint8Array {
    return MsgUpdateStakingParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStakingParams): MsgUpdateStakingParamsProtoMsg {
    return {
      typeUrl: "/coreum.customparams.v1.MsgUpdateStakingParams",
      value: MsgUpdateStakingParams.encode(message).finish()
    };
  }
};
function createBaseEmptyResponse(): EmptyResponse {
  return {};
}
export const EmptyResponse = {
  typeUrl: "/coreum.customparams.v1.EmptyResponse",
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
      typeUrl: "/coreum.customparams.v1.EmptyResponse",
      value: EmptyResponse.encode(message).finish()
    };
  }
};