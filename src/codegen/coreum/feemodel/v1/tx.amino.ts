import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/coreum.feemodel.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};