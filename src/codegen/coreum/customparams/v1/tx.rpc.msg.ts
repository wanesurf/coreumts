import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgUpdateStakingParams, EmptyResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateStakingParams is a governance operation that sets the staking parameter.
   * NOTE: all parameters must be provided.
   */
  updateStakingParams(request: MsgUpdateStakingParams): Promise<EmptyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateStakingParams = this.updateStakingParams.bind(this);
  }
  updateStakingParams(request: MsgUpdateStakingParams): Promise<EmptyResponse> {
    const data = MsgUpdateStakingParams.encode(request).finish();
    const promise = this.rpc.request("coreum.customparams.v1.Msg", "UpdateStakingParams", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
}