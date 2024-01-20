import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, EmptyResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams is a governance operation which allows fee models params to be modified.
   * NOTE: All parmas must be provided.
   */
  updateParams(request: MsgUpdateParams): Promise<EmptyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<EmptyResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("coreum.feemodel.v1.Msg", "UpdateParams", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
}