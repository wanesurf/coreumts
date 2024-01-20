import { MsgUpdateStakingParams } from "./tx";
export const AminoConverter = {
  "/coreum.customparams.v1.MsgUpdateStakingParams": {
    aminoType: "cosmos-sdk/MsgUpdateStakingParams",
    toAmino: MsgUpdateStakingParams.toAmino,
    fromAmino: MsgUpdateStakingParams.fromAmino
  }
};