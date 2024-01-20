import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
export interface DataBytes {
  Data: Uint8Array;
}
export interface DataBytesProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.DataBytes";
  value: Uint8Array;
}
export interface DataBytesAmino {
  Data?: string;
}
export interface DataBytesAminoMsg {
  type: "/coreum.asset.nft.v1.DataBytes";
  value: DataBytesAmino;
}
export interface DataBytesSDKType {
  Data: Uint8Array;
}
function createBaseDataBytes(): DataBytes {
  return {
    Data: new Uint8Array()
  };
}
export const DataBytes = {
  typeUrl: "/coreum.asset.nft.v1.DataBytes",
  encode(message: DataBytes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Data.length !== 0) {
      writer.uint32(10).bytes(message.Data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DataBytes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DataBytes>): DataBytes {
    const message = createBaseDataBytes();
    message.Data = object.Data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DataBytesAmino): DataBytes {
    const message = createBaseDataBytes();
    if (object.Data !== undefined && object.Data !== null) {
      message.Data = bytesFromBase64(object.Data);
    }
    return message;
  },
  toAmino(message: DataBytes): DataBytesAmino {
    const obj: any = {};
    obj.Data = message.Data ? base64FromBytes(message.Data) : undefined;
    return obj;
  },
  fromAminoMsg(object: DataBytesAminoMsg): DataBytes {
    return DataBytes.fromAmino(object.value);
  },
  fromProtoMsg(message: DataBytesProtoMsg): DataBytes {
    return DataBytes.decode(message.value);
  },
  toProto(message: DataBytes): Uint8Array {
    return DataBytes.encode(message).finish();
  },
  toProtoMsg(message: DataBytes): DataBytesProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.DataBytes",
      value: DataBytes.encode(message).finish()
    };
  }
};