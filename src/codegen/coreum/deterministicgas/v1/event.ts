import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventGas is emitted by deterministic gas module to report gas information. */
export interface EventGas {
  msgURL: string;
  realGas: bigint;
  deterministicGas: bigint;
}
export interface EventGasProtoMsg {
  typeUrl: "/coreum.deterministicgas.v1.EventGas";
  value: Uint8Array;
}
/** EventGas is emitted by deterministic gas module to report gas information. */
export interface EventGasAmino {
  msgURL?: string;
  realGas?: string;
  deterministicGas?: string;
}
export interface EventGasAminoMsg {
  type: "/coreum.deterministicgas.v1.EventGas";
  value: EventGasAmino;
}
/** EventGas is emitted by deterministic gas module to report gas information. */
export interface EventGasSDKType {
  msgURL: string;
  realGas: bigint;
  deterministicGas: bigint;
}
function createBaseEventGas(): EventGas {
  return {
    msgURL: "",
    realGas: BigInt(0),
    deterministicGas: BigInt(0)
  };
}
export const EventGas = {
  typeUrl: "/coreum.deterministicgas.v1.EventGas",
  encode(message: EventGas, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgURL !== "") {
      writer.uint32(10).string(message.msgURL);
    }
    if (message.realGas !== BigInt(0)) {
      writer.uint32(16).uint64(message.realGas);
    }
    if (message.deterministicGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.deterministicGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGas {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgURL = reader.string();
          break;
        case 2:
          message.realGas = reader.uint64();
          break;
        case 3:
          message.deterministicGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventGas>): EventGas {
    const message = createBaseEventGas();
    message.msgURL = object.msgURL ?? "";
    message.realGas = object.realGas !== undefined && object.realGas !== null ? BigInt(object.realGas.toString()) : BigInt(0);
    message.deterministicGas = object.deterministicGas !== undefined && object.deterministicGas !== null ? BigInt(object.deterministicGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventGasAmino): EventGas {
    const message = createBaseEventGas();
    if (object.msgURL !== undefined && object.msgURL !== null) {
      message.msgURL = object.msgURL;
    }
    if (object.realGas !== undefined && object.realGas !== null) {
      message.realGas = BigInt(object.realGas);
    }
    if (object.deterministicGas !== undefined && object.deterministicGas !== null) {
      message.deterministicGas = BigInt(object.deterministicGas);
    }
    return message;
  },
  toAmino(message: EventGas): EventGasAmino {
    const obj: any = {};
    obj.msgURL = message.msgURL;
    obj.realGas = message.realGas ? message.realGas.toString() : undefined;
    obj.deterministicGas = message.deterministicGas ? message.deterministicGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventGasAminoMsg): EventGas {
    return EventGas.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGasProtoMsg): EventGas {
    return EventGas.decode(message.value);
  },
  toProto(message: EventGas): Uint8Array {
    return EventGas.encode(message).finish();
  },
  toProtoMsg(message: EventGas): EventGasProtoMsg {
    return {
      typeUrl: "/coreum.deterministicgas.v1.EventGas",
      value: EventGas.encode(message).finish()
    };
  }
};