import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Params store gov manageable parameters. */
export interface Params {
  /** mint_fee is the fee burnt each time new NFT is minted */
  mintFee: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.Params";
  value: Uint8Array;
}
/** Params store gov manageable parameters. */
export interface ParamsAmino {
  /** mint_fee is the fee burnt each time new NFT is minted */
  mint_fee?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/coreum.asset.nft.v1.Params";
  value: ParamsAmino;
}
/** Params store gov manageable parameters. */
export interface ParamsSDKType {
  mint_fee: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    mintFee: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/coreum.asset.nft.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(10).fork()).ldelim();
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
          message.mintFee = Coin.decode(reader, reader.uint32());
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
    message.mintFee = object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mintFee = Coin.fromAmino(object.mint_fee);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_fee = message.mintFee ? Coin.toAmino(message.mintFee) : undefined;
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
      typeUrl: "/coreum.asset.nft.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};