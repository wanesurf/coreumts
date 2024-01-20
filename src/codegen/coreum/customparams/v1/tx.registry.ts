import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateStakingParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/coreum.customparams.v1.MsgUpdateStakingParams", MsgUpdateStakingParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateStakingParams(value: MsgUpdateStakingParams) {
      return {
        typeUrl: "/coreum.customparams.v1.MsgUpdateStakingParams",
        value: MsgUpdateStakingParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateStakingParams(value: MsgUpdateStakingParams) {
      return {
        typeUrl: "/coreum.customparams.v1.MsgUpdateStakingParams",
        value
      };
    }
  },
  fromPartial: {
    updateStakingParams(value: MsgUpdateStakingParams) {
      return {
        typeUrl: "/coreum.customparams.v1.MsgUpdateStakingParams",
        value: MsgUpdateStakingParams.fromPartial(value)
      };
    }
  }
};