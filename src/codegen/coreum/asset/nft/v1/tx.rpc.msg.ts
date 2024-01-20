import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { MsgIssueClass, EmptyResponse, MsgMint, MsgBurn, MsgFreeze, MsgUnfreeze, MsgAddToWhitelist, MsgRemoveFromWhitelist, MsgAddToClassWhitelist, MsgRemoveFromClassWhitelist, MsgClassFreeze, MsgClassUnfreeze, MsgUpdateParams } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** IssueClass creates new non-fungible token class. */
  issueClass(request: MsgIssueClass): Promise<EmptyResponse>;
  /** Mint mints new non-fungible token in the class. */
  mint(request: MsgMint): Promise<EmptyResponse>;
  /** Burn burns the existing non-fungible token in the class. */
  burn(request: MsgBurn): Promise<EmptyResponse>;
  /** Freeze freezes an NFT */
  freeze(request: MsgFreeze): Promise<EmptyResponse>;
  /** Unfreeze removes the freeze effect already put on an NFT */
  unfreeze(request: MsgUnfreeze): Promise<EmptyResponse>;
  /** AddToWhitelist sets the account as whitelisted to hold the NFT */
  addToWhitelist(request: MsgAddToWhitelist): Promise<EmptyResponse>;
  /** RemoveFromWhitelist removes an account from whitelisted list of the NFT */
  removeFromWhitelist(request: MsgRemoveFromWhitelist): Promise<EmptyResponse>;
  /**
   * AddToClassWhitelist adds account as whitelist for all the NFTs in the class
   * NOTE: class whitelist does not affect the individual nft whitelisting.
   */
  addToClassWhitelist(request: MsgAddToClassWhitelist): Promise<EmptyResponse>;
  /**
   * RemoveFromClassWhitelist removes account as whitelist for the entire class
   * NOTE:
   * class whitelist does not affect the individual nft whitelisting.
   * ie. if specific whitelist is granted for an NFT, that whitelist will
   * still be valid, ater we add and remove it from the class whitelist.
   */
  removeFromClassWhitelist(request: MsgRemoveFromClassWhitelist): Promise<EmptyResponse>;
  /** ClassFreeze freezes all NFTs of a class held by an account. */
  classFreeze(request: MsgClassFreeze): Promise<EmptyResponse>;
  /**
   * ClassUnfreeze removes class-freeze on an account for an NFT class.
   * NOTE:
   * class unfreeze does not affect the individual nft freeze.
   */
  classUnfreeze(request: MsgClassUnfreeze): Promise<EmptyResponse>;
  /**
   * UpdateParams is a governance operation that sets the parameters of the module.
   * NOTE: all parameters must be provided.
   */
  updateParams(request: MsgUpdateParams): Promise<EmptyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.issueClass = this.issueClass.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.freeze = this.freeze.bind(this);
    this.unfreeze = this.unfreeze.bind(this);
    this.addToWhitelist = this.addToWhitelist.bind(this);
    this.removeFromWhitelist = this.removeFromWhitelist.bind(this);
    this.addToClassWhitelist = this.addToClassWhitelist.bind(this);
    this.removeFromClassWhitelist = this.removeFromClassWhitelist.bind(this);
    this.classFreeze = this.classFreeze.bind(this);
    this.classUnfreeze = this.classUnfreeze.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  issueClass(request: MsgIssueClass): Promise<EmptyResponse> {
    const data = MsgIssueClass.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "IssueClass", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  mint(request: MsgMint): Promise<EmptyResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "Mint", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  burn(request: MsgBurn): Promise<EmptyResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "Burn", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  freeze(request: MsgFreeze): Promise<EmptyResponse> {
    const data = MsgFreeze.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "Freeze", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  unfreeze(request: MsgUnfreeze): Promise<EmptyResponse> {
    const data = MsgUnfreeze.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "Unfreeze", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  addToWhitelist(request: MsgAddToWhitelist): Promise<EmptyResponse> {
    const data = MsgAddToWhitelist.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "AddToWhitelist", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  removeFromWhitelist(request: MsgRemoveFromWhitelist): Promise<EmptyResponse> {
    const data = MsgRemoveFromWhitelist.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "RemoveFromWhitelist", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  addToClassWhitelist(request: MsgAddToClassWhitelist): Promise<EmptyResponse> {
    const data = MsgAddToClassWhitelist.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "AddToClassWhitelist", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  removeFromClassWhitelist(request: MsgRemoveFromClassWhitelist): Promise<EmptyResponse> {
    const data = MsgRemoveFromClassWhitelist.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "RemoveFromClassWhitelist", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  classFreeze(request: MsgClassFreeze): Promise<EmptyResponse> {
    const data = MsgClassFreeze.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "ClassFreeze", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  classUnfreeze(request: MsgClassUnfreeze): Promise<EmptyResponse> {
    const data = MsgClassUnfreeze.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "ClassUnfreeze", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<EmptyResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "UpdateParams", data);
    return promise.then(data => EmptyResponse.decode(new BinaryReader(data)));
  }
}