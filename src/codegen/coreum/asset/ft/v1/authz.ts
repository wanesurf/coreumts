import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * MintAuthorization allows the grantee to mint up to mint_limit coin from
 * the granter's account.
 */
export interface MintAuthorization {
  mintLimit: Coin[];
}
export interface MintAuthorizationProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MintAuthorization";
  value: Uint8Array;
}
/**
 * MintAuthorization allows the grantee to mint up to mint_limit coin from
 * the granter's account.
 */
export interface MintAuthorizationAmino {
  mint_limit?: CoinAmino[];
}
export interface MintAuthorizationAminoMsg {
  type: "cosmos-sdk/MintAuthorization";
  value: MintAuthorizationAmino;
}
/**
 * MintAuthorization allows the grantee to mint up to mint_limit coin from
 * the granter's account.
 */
export interface MintAuthorizationSDKType {
  mint_limit: CoinSDKType[];
}
/**
 * BurnAuthorization allows the grantee to burn up to burn_limit coin from
 * the granter's account.
 */
export interface BurnAuthorization {
  burnLimit: Coin[];
}
export interface BurnAuthorizationProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.BurnAuthorization";
  value: Uint8Array;
}
/**
 * BurnAuthorization allows the grantee to burn up to burn_limit coin from
 * the granter's account.
 */
export interface BurnAuthorizationAmino {
  burn_limit?: CoinAmino[];
}
export interface BurnAuthorizationAminoMsg {
  type: "cosmos-sdk/BurnAuthorization";
  value: BurnAuthorizationAmino;
}
/**
 * BurnAuthorization allows the grantee to burn up to burn_limit coin from
 * the granter's account.
 */
export interface BurnAuthorizationSDKType {
  burn_limit: CoinSDKType[];
}
function createBaseMintAuthorization(): MintAuthorization {
  return {
    mintLimit: []
  };
}
export const MintAuthorization = {
  typeUrl: "/coreum.asset.ft.v1.MintAuthorization",
  encode(message: MintAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mintLimit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MintAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MintAuthorization>): MintAuthorization {
    const message = createBaseMintAuthorization();
    message.mintLimit = object.mintLimit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MintAuthorizationAmino): MintAuthorization {
    const message = createBaseMintAuthorization();
    message.mintLimit = object.mint_limit?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MintAuthorization): MintAuthorizationAmino {
    const obj: any = {};
    if (message.mintLimit) {
      obj.mint_limit = message.mintLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.mint_limit = [];
    }
    return obj;
  },
  fromAminoMsg(object: MintAuthorizationAminoMsg): MintAuthorization {
    return MintAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: MintAuthorization): MintAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/MintAuthorization",
      value: MintAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: MintAuthorizationProtoMsg): MintAuthorization {
    return MintAuthorization.decode(message.value);
  },
  toProto(message: MintAuthorization): Uint8Array {
    return MintAuthorization.encode(message).finish();
  },
  toProtoMsg(message: MintAuthorization): MintAuthorizationProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MintAuthorization",
      value: MintAuthorization.encode(message).finish()
    };
  }
};
function createBaseBurnAuthorization(): BurnAuthorization {
  return {
    burnLimit: []
  };
}
export const BurnAuthorization = {
  typeUrl: "/coreum.asset.ft.v1.BurnAuthorization",
  encode(message: BurnAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.burnLimit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BurnAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BurnAuthorization>): BurnAuthorization {
    const message = createBaseBurnAuthorization();
    message.burnLimit = object.burnLimit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BurnAuthorizationAmino): BurnAuthorization {
    const message = createBaseBurnAuthorization();
    message.burnLimit = object.burn_limit?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BurnAuthorization): BurnAuthorizationAmino {
    const obj: any = {};
    if (message.burnLimit) {
      obj.burn_limit = message.burnLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.burn_limit = [];
    }
    return obj;
  },
  fromAminoMsg(object: BurnAuthorizationAminoMsg): BurnAuthorization {
    return BurnAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: BurnAuthorization): BurnAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/BurnAuthorization",
      value: BurnAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: BurnAuthorizationProtoMsg): BurnAuthorization {
    return BurnAuthorization.decode(message.value);
  },
  toProto(message: BurnAuthorization): Uint8Array {
    return BurnAuthorization.encode(message).finish();
  },
  toProtoMsg(message: BurnAuthorization): BurnAuthorizationProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.BurnAuthorization",
      value: BurnAuthorization.encode(message).finish()
    };
  }
};