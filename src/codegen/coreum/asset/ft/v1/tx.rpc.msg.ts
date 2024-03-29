import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { MsgIssue, EmptyResponse, MsgMint, MsgBurn, MsgFreeze, MsgUnfreeze, MsgSetFrozen, MsgGloballyFreeze, MsgGloballyUnfreeze, MsgSetWhitelistedLimit, MsgUpgradeTokenV1, MsgUpdateParams } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** Issue defines a method to issue a new fungible token. */
  issue(request: MsgIssue): Promise<EmptyResponse>;
  /** Mint mints new fungible tokens. */
  mint(request: MsgMint): Promise<EmptyResponse>;
  /** Burn burns the specified fungible tokens from senders balance if the sender has enough balance. */
  burn(request: MsgBurn): Promise<EmptyResponse>;
  /**
   * Freeze freezes a part of the fungible tokens in an
   * account, only if the freezable feature is enabled on that token.
   */
  freeze(request: MsgFreeze): Promise<EmptyResponse>;
  /**
   * Unfreeze unfreezes a part of the frozen fungible tokens in an
   * account, only if there are such frozen tokens on that account.
   */
  unfreeze(request: MsgUnfreeze): Promise<EmptyResponse>;
  /** SetFrozen sets the absolute value of frozen amount. */
  setFrozen(request: MsgSetFrozen): Promise<EmptyResponse>;
  /**
   * GloballyFreeze freezes fungible token so no operations are allowed with it before unfrozen.
   * This operation is idempotent so global freeze of already frozen token does nothing.
   */
  globallyFreeze(request: MsgGloballyFreeze): Promise<EmptyResponse>;
  /**
   * GloballyUnfreeze unfreezes fungible token and unblocks basic operations on it.
   * This operation is idempotent so global unfreezing of non-frozen token does nothing.
   */
  globallyUnfreeze(request: MsgGloballyUnfreeze): Promise<EmptyResponse>;
  /** SetWhitelistedLimit sets the limit of how many tokens a specific account may hold. */
  setWhitelistedLimit(request: MsgSetWhitelistedLimit): Promise<EmptyResponse>;
  /** TokenUpgradeV1 upgrades token to version V1. */
  upgradeTokenV1(request: MsgUpgradeTokenV1): Promise<EmptyResponse>;
  /**
   * UpdateParams is a governance operation to modify the parameters of the module.
   * NOTE: all parameters must be provided.
   */
  updateParams(request: MsgUpdateParams): Promise<EmptyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.issue = this.issue.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.freeze = this.freeze.bind(this);
    this.unfreeze = this.unfreeze.bind(this);
    this.setFrozen = this.setFrozen.bind(this);
    this.globallyFreeze = this.globallyFreeze.bind(this);
    this.globallyUnfreeze = this.globallyUnfreeze.bind(this);
    this.setWhitelistedLimit = this.setWhitelistedLimit.bind(this);
    this.upgradeTokenV1 = this.upgradeTokenV1.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  issue(request: MsgIssue): Promise<EmptyResponse> {
    const data = MsgIssue.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "Issue", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  mint(request: MsgMint): Promise<EmptyResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "Mint", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  burn(request: MsgBurn): Promise<EmptyResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "Burn", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  freeze(request: MsgFreeze): Promise<EmptyResponse> {
    const data = MsgFreeze.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "Freeze", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  unfreeze(request: MsgUnfreeze): Promise<EmptyResponse> {
    const data = MsgUnfreeze.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "Unfreeze", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  setFrozen(request: MsgSetFrozen): Promise<EmptyResponse> {
    const data = MsgSetFrozen.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "SetFrozen", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  globallyFreeze(request: MsgGloballyFreeze): Promise<EmptyResponse> {
    const data = MsgGloballyFreeze.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "GloballyFreeze", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  globallyUnfreeze(request: MsgGloballyUnfreeze): Promise<EmptyResponse> {
    const data = MsgGloballyUnfreeze.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "GloballyUnfreeze", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  setWhitelistedLimit(request: MsgSetWhitelistedLimit): Promise<EmptyResponse> {
    const data = MsgSetWhitelistedLimit.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "SetWhitelistedLimit", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  upgradeTokenV1(request: MsgUpgradeTokenV1): Promise<EmptyResponse> {
    const data = MsgUpgradeTokenV1.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "UpgradeTokenV1", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<EmptyResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Msg", "UpdateParams", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
}