import { BinaryReader, BinaryWriter } from "../../../../binary";
/** SendAuthorization allows the grantee to send specific NFTs from the granter's account. */
export interface SendAuthorization {
  nfts: NFTIdentifier[];
}
export interface SendAuthorizationProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.SendAuthorization";
  value: Uint8Array;
}
/** SendAuthorization allows the grantee to send specific NFTs from the granter's account. */
export interface SendAuthorizationAmino {
  nfts: NFTIdentifierAmino[];
}
export interface SendAuthorizationAminoMsg {
  type: "cosmos-sdk/nft/SendAuthorization";
  value: SendAuthorizationAmino;
}
/** SendAuthorization allows the grantee to send specific NFTs from the granter's account. */
export interface SendAuthorizationSDKType {
  nfts: NFTIdentifierSDKType[];
}
export interface NFTIdentifier {
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  classId: string;
  /** id defines the unique identification of nft */
  id: string;
}
export interface NFTIdentifierProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.NFTIdentifier";
  value: Uint8Array;
}
export interface NFTIdentifierAmino {
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  class_id?: string;
  /** id defines the unique identification of nft */
  id?: string;
}
export interface NFTIdentifierAminoMsg {
  type: "/coreum.asset.nft.v1.NFTIdentifier";
  value: NFTIdentifierAmino;
}
export interface NFTIdentifierSDKType {
  class_id: string;
  id: string;
}
function createBaseSendAuthorization(): SendAuthorization {
  return {
    nfts: []
  };
}
export const SendAuthorization = {
  typeUrl: "/coreum.asset.nft.v1.SendAuthorization",
  encode(message: SendAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nfts) {
      NFTIdentifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SendAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFTIdentifier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SendAuthorization>): SendAuthorization {
    const message = createBaseSendAuthorization();
    message.nfts = object.nfts?.map(e => NFTIdentifier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SendAuthorizationAmino): SendAuthorization {
    const message = createBaseSendAuthorization();
    message.nfts = object.nfts?.map(e => NFTIdentifier.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SendAuthorization): SendAuthorizationAmino {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFTIdentifier.toAmino(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },
  fromAminoMsg(object: SendAuthorizationAminoMsg): SendAuthorization {
    return SendAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: SendAuthorization): SendAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/nft/SendAuthorization",
      value: SendAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: SendAuthorizationProtoMsg): SendAuthorization {
    return SendAuthorization.decode(message.value);
  },
  toProto(message: SendAuthorization): Uint8Array {
    return SendAuthorization.encode(message).finish();
  },
  toProtoMsg(message: SendAuthorization): SendAuthorizationProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.SendAuthorization",
      value: SendAuthorization.encode(message).finish()
    };
  }
};
function createBaseNFTIdentifier(): NFTIdentifier {
  return {
    classId: "",
    id: ""
  };
}
export const NFTIdentifier = {
  typeUrl: "/coreum.asset.nft.v1.NFTIdentifier",
  encode(message: NFTIdentifier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NFTIdentifier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NFTIdentifier>): NFTIdentifier {
    const message = createBaseNFTIdentifier();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: NFTIdentifierAmino): NFTIdentifier {
    const message = createBaseNFTIdentifier();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: NFTIdentifier): NFTIdentifierAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: NFTIdentifierAminoMsg): NFTIdentifier {
    return NFTIdentifier.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTIdentifierProtoMsg): NFTIdentifier {
    return NFTIdentifier.decode(message.value);
  },
  toProto(message: NFTIdentifier): Uint8Array {
    return NFTIdentifier.encode(message).finish();
  },
  toProtoMsg(message: NFTIdentifier): NFTIdentifierProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.NFTIdentifier",
      value: NFTIdentifier.encode(message).finish()
    };
  }
};