/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "zodiatic.zodiatic.lunar";

export interface Lunar {
  yyyymmdd: number;
  date: string;
  year: number;
  month: number;
  day: number;
  lunar: string;
  eightCharacters: string;
  lunarYear: number;
  lunarMonth: number;
  lunarDay: number;
  lunarLeapMonth: boolean;
  sexagenaryYear: string;
  sexagenaryMonth: string;
  sexagenaryDay: string;
  zodiac: string;
  zodiacEnglish: string;
  dayOfWeek: number;
  auspiciousDirections: string;
  auspicious: string;
  inauspicious: string;
  auspiciousTime: string;
  inauspiciousTime: string;
  version: number;
  remarks: string;
}

const baseLunar: object = {
  yyyymmdd: 0,
  date: "",
  year: 0,
  month: 0,
  day: 0,
  lunar: "",
  eightCharacters: "",
  lunarYear: 0,
  lunarMonth: 0,
  lunarDay: 0,
  lunarLeapMonth: false,
  sexagenaryYear: "",
  sexagenaryMonth: "",
  sexagenaryDay: "",
  zodiac: "",
  zodiacEnglish: "",
  dayOfWeek: 0,
  auspiciousDirections: "",
  auspicious: "",
  inauspicious: "",
  auspiciousTime: "",
  inauspiciousTime: "",
  version: 0,
  remarks: "",
};

export const Lunar = {
  encode(message: Lunar, writer: Writer = Writer.create()): Writer {
    if (message.yyyymmdd !== 0) {
      writer.uint32(8).uint64(message.yyyymmdd);
    }
    if (message.date !== "") {
      writer.uint32(18).string(message.date);
    }
    if (message.year !== 0) {
      writer.uint32(24).uint64(message.year);
    }
    if (message.month !== 0) {
      writer.uint32(32).uint64(message.month);
    }
    if (message.day !== 0) {
      writer.uint32(40).uint64(message.day);
    }
    if (message.lunar !== "") {
      writer.uint32(50).string(message.lunar);
    }
    if (message.eightCharacters !== "") {
      writer.uint32(58).string(message.eightCharacters);
    }
    if (message.lunarYear !== 0) {
      writer.uint32(64).uint64(message.lunarYear);
    }
    if (message.lunarMonth !== 0) {
      writer.uint32(72).uint64(message.lunarMonth);
    }
    if (message.lunarDay !== 0) {
      writer.uint32(80).uint64(message.lunarDay);
    }
    if (message.lunarLeapMonth === true) {
      writer.uint32(88).bool(message.lunarLeapMonth);
    }
    if (message.sexagenaryYear !== "") {
      writer.uint32(98).string(message.sexagenaryYear);
    }
    if (message.sexagenaryMonth !== "") {
      writer.uint32(106).string(message.sexagenaryMonth);
    }
    if (message.sexagenaryDay !== "") {
      writer.uint32(114).string(message.sexagenaryDay);
    }
    if (message.zodiac !== "") {
      writer.uint32(122).string(message.zodiac);
    }
    if (message.zodiacEnglish !== "") {
      writer.uint32(130).string(message.zodiacEnglish);
    }
    if (message.dayOfWeek !== 0) {
      writer.uint32(136).uint64(message.dayOfWeek);
    }
    if (message.auspiciousDirections !== "") {
      writer.uint32(146).string(message.auspiciousDirections);
    }
    if (message.auspicious !== "") {
      writer.uint32(154).string(message.auspicious);
    }
    if (message.inauspicious !== "") {
      writer.uint32(162).string(message.inauspicious);
    }
    if (message.auspiciousTime !== "") {
      writer.uint32(170).string(message.auspiciousTime);
    }
    if (message.inauspiciousTime !== "") {
      writer.uint32(178).string(message.inauspiciousTime);
    }
    if (message.version !== 0) {
      writer.uint32(184).uint64(message.version);
    }
    if (message.remarks !== "") {
      writer.uint32(194).string(message.remarks);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Lunar {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLunar } as Lunar;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yyyymmdd = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.date = reader.string();
          break;
        case 3:
          message.year = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.month = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.day = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.lunar = reader.string();
          break;
        case 7:
          message.eightCharacters = reader.string();
          break;
        case 8:
          message.lunarYear = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.lunarMonth = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.lunarDay = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.lunarLeapMonth = reader.bool();
          break;
        case 12:
          message.sexagenaryYear = reader.string();
          break;
        case 13:
          message.sexagenaryMonth = reader.string();
          break;
        case 14:
          message.sexagenaryDay = reader.string();
          break;
        case 15:
          message.zodiac = reader.string();
          break;
        case 16:
          message.zodiacEnglish = reader.string();
          break;
        case 17:
          message.dayOfWeek = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.auspiciousDirections = reader.string();
          break;
        case 19:
          message.auspicious = reader.string();
          break;
        case 20:
          message.inauspicious = reader.string();
          break;
        case 21:
          message.auspiciousTime = reader.string();
          break;
        case 22:
          message.inauspiciousTime = reader.string();
          break;
        case 23:
          message.version = longToNumber(reader.uint64() as Long);
          break;
        case 24:
          message.remarks = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Lunar {
    const message = { ...baseLunar } as Lunar;
    if (object.yyyymmdd !== undefined && object.yyyymmdd !== null) {
      message.yyyymmdd = Number(object.yyyymmdd);
    } else {
      message.yyyymmdd = 0;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = String(object.date);
    } else {
      message.date = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = Number(object.year);
    } else {
      message.year = 0;
    }
    if (object.month !== undefined && object.month !== null) {
      message.month = Number(object.month);
    } else {
      message.month = 0;
    }
    if (object.day !== undefined && object.day !== null) {
      message.day = Number(object.day);
    } else {
      message.day = 0;
    }
    if (object.lunar !== undefined && object.lunar !== null) {
      message.lunar = String(object.lunar);
    } else {
      message.lunar = "";
    }
    if (
      object.eightCharacters !== undefined &&
      object.eightCharacters !== null
    ) {
      message.eightCharacters = String(object.eightCharacters);
    } else {
      message.eightCharacters = "";
    }
    if (object.lunarYear !== undefined && object.lunarYear !== null) {
      message.lunarYear = Number(object.lunarYear);
    } else {
      message.lunarYear = 0;
    }
    if (object.lunarMonth !== undefined && object.lunarMonth !== null) {
      message.lunarMonth = Number(object.lunarMonth);
    } else {
      message.lunarMonth = 0;
    }
    if (object.lunarDay !== undefined && object.lunarDay !== null) {
      message.lunarDay = Number(object.lunarDay);
    } else {
      message.lunarDay = 0;
    }
    if (object.lunarLeapMonth !== undefined && object.lunarLeapMonth !== null) {
      message.lunarLeapMonth = Boolean(object.lunarLeapMonth);
    } else {
      message.lunarLeapMonth = false;
    }
    if (object.sexagenaryYear !== undefined && object.sexagenaryYear !== null) {
      message.sexagenaryYear = String(object.sexagenaryYear);
    } else {
      message.sexagenaryYear = "";
    }
    if (
      object.sexagenaryMonth !== undefined &&
      object.sexagenaryMonth !== null
    ) {
      message.sexagenaryMonth = String(object.sexagenaryMonth);
    } else {
      message.sexagenaryMonth = "";
    }
    if (object.sexagenaryDay !== undefined && object.sexagenaryDay !== null) {
      message.sexagenaryDay = String(object.sexagenaryDay);
    } else {
      message.sexagenaryDay = "";
    }
    if (object.zodiac !== undefined && object.zodiac !== null) {
      message.zodiac = String(object.zodiac);
    } else {
      message.zodiac = "";
    }
    if (object.zodiacEnglish !== undefined && object.zodiacEnglish !== null) {
      message.zodiacEnglish = String(object.zodiacEnglish);
    } else {
      message.zodiacEnglish = "";
    }
    if (object.dayOfWeek !== undefined && object.dayOfWeek !== null) {
      message.dayOfWeek = Number(object.dayOfWeek);
    } else {
      message.dayOfWeek = 0;
    }
    if (
      object.auspiciousDirections !== undefined &&
      object.auspiciousDirections !== null
    ) {
      message.auspiciousDirections = String(object.auspiciousDirections);
    } else {
      message.auspiciousDirections = "";
    }
    if (object.auspicious !== undefined && object.auspicious !== null) {
      message.auspicious = String(object.auspicious);
    } else {
      message.auspicious = "";
    }
    if (object.inauspicious !== undefined && object.inauspicious !== null) {
      message.inauspicious = String(object.inauspicious);
    } else {
      message.inauspicious = "";
    }
    if (object.auspiciousTime !== undefined && object.auspiciousTime !== null) {
      message.auspiciousTime = String(object.auspiciousTime);
    } else {
      message.auspiciousTime = "";
    }
    if (
      object.inauspiciousTime !== undefined &&
      object.inauspiciousTime !== null
    ) {
      message.inauspiciousTime = String(object.inauspiciousTime);
    } else {
      message.inauspiciousTime = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Number(object.version);
    } else {
      message.version = 0;
    }
    if (object.remarks !== undefined && object.remarks !== null) {
      message.remarks = String(object.remarks);
    } else {
      message.remarks = "";
    }
    return message;
  },

  toJSON(message: Lunar): unknown {
    const obj: any = {};
    message.yyyymmdd !== undefined && (obj.yyyymmdd = message.yyyymmdd);
    message.date !== undefined && (obj.date = message.date);
    message.year !== undefined && (obj.year = message.year);
    message.month !== undefined && (obj.month = message.month);
    message.day !== undefined && (obj.day = message.day);
    message.lunar !== undefined && (obj.lunar = message.lunar);
    message.eightCharacters !== undefined &&
      (obj.eightCharacters = message.eightCharacters);
    message.lunarYear !== undefined && (obj.lunarYear = message.lunarYear);
    message.lunarMonth !== undefined && (obj.lunarMonth = message.lunarMonth);
    message.lunarDay !== undefined && (obj.lunarDay = message.lunarDay);
    message.lunarLeapMonth !== undefined &&
      (obj.lunarLeapMonth = message.lunarLeapMonth);
    message.sexagenaryYear !== undefined &&
      (obj.sexagenaryYear = message.sexagenaryYear);
    message.sexagenaryMonth !== undefined &&
      (obj.sexagenaryMonth = message.sexagenaryMonth);
    message.sexagenaryDay !== undefined &&
      (obj.sexagenaryDay = message.sexagenaryDay);
    message.zodiac !== undefined && (obj.zodiac = message.zodiac);
    message.zodiacEnglish !== undefined &&
      (obj.zodiacEnglish = message.zodiacEnglish);
    message.dayOfWeek !== undefined && (obj.dayOfWeek = message.dayOfWeek);
    message.auspiciousDirections !== undefined &&
      (obj.auspiciousDirections = message.auspiciousDirections);
    message.auspicious !== undefined && (obj.auspicious = message.auspicious);
    message.inauspicious !== undefined &&
      (obj.inauspicious = message.inauspicious);
    message.auspiciousTime !== undefined &&
      (obj.auspiciousTime = message.auspiciousTime);
    message.inauspiciousTime !== undefined &&
      (obj.inauspiciousTime = message.inauspiciousTime);
    message.version !== undefined && (obj.version = message.version);
    message.remarks !== undefined && (obj.remarks = message.remarks);
    return obj;
  },

  fromPartial(object: DeepPartial<Lunar>): Lunar {
    const message = { ...baseLunar } as Lunar;
    if (object.yyyymmdd !== undefined && object.yyyymmdd !== null) {
      message.yyyymmdd = object.yyyymmdd;
    } else {
      message.yyyymmdd = 0;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    } else {
      message.year = 0;
    }
    if (object.month !== undefined && object.month !== null) {
      message.month = object.month;
    } else {
      message.month = 0;
    }
    if (object.day !== undefined && object.day !== null) {
      message.day = object.day;
    } else {
      message.day = 0;
    }
    if (object.lunar !== undefined && object.lunar !== null) {
      message.lunar = object.lunar;
    } else {
      message.lunar = "";
    }
    if (
      object.eightCharacters !== undefined &&
      object.eightCharacters !== null
    ) {
      message.eightCharacters = object.eightCharacters;
    } else {
      message.eightCharacters = "";
    }
    if (object.lunarYear !== undefined && object.lunarYear !== null) {
      message.lunarYear = object.lunarYear;
    } else {
      message.lunarYear = 0;
    }
    if (object.lunarMonth !== undefined && object.lunarMonth !== null) {
      message.lunarMonth = object.lunarMonth;
    } else {
      message.lunarMonth = 0;
    }
    if (object.lunarDay !== undefined && object.lunarDay !== null) {
      message.lunarDay = object.lunarDay;
    } else {
      message.lunarDay = 0;
    }
    if (object.lunarLeapMonth !== undefined && object.lunarLeapMonth !== null) {
      message.lunarLeapMonth = object.lunarLeapMonth;
    } else {
      message.lunarLeapMonth = false;
    }
    if (object.sexagenaryYear !== undefined && object.sexagenaryYear !== null) {
      message.sexagenaryYear = object.sexagenaryYear;
    } else {
      message.sexagenaryYear = "";
    }
    if (
      object.sexagenaryMonth !== undefined &&
      object.sexagenaryMonth !== null
    ) {
      message.sexagenaryMonth = object.sexagenaryMonth;
    } else {
      message.sexagenaryMonth = "";
    }
    if (object.sexagenaryDay !== undefined && object.sexagenaryDay !== null) {
      message.sexagenaryDay = object.sexagenaryDay;
    } else {
      message.sexagenaryDay = "";
    }
    if (object.zodiac !== undefined && object.zodiac !== null) {
      message.zodiac = object.zodiac;
    } else {
      message.zodiac = "";
    }
    if (object.zodiacEnglish !== undefined && object.zodiacEnglish !== null) {
      message.zodiacEnglish = object.zodiacEnglish;
    } else {
      message.zodiacEnglish = "";
    }
    if (object.dayOfWeek !== undefined && object.dayOfWeek !== null) {
      message.dayOfWeek = object.dayOfWeek;
    } else {
      message.dayOfWeek = 0;
    }
    if (
      object.auspiciousDirections !== undefined &&
      object.auspiciousDirections !== null
    ) {
      message.auspiciousDirections = object.auspiciousDirections;
    } else {
      message.auspiciousDirections = "";
    }
    if (object.auspicious !== undefined && object.auspicious !== null) {
      message.auspicious = object.auspicious;
    } else {
      message.auspicious = "";
    }
    if (object.inauspicious !== undefined && object.inauspicious !== null) {
      message.inauspicious = object.inauspicious;
    } else {
      message.inauspicious = "";
    }
    if (object.auspiciousTime !== undefined && object.auspiciousTime !== null) {
      message.auspiciousTime = object.auspiciousTime;
    } else {
      message.auspiciousTime = "";
    }
    if (
      object.inauspiciousTime !== undefined &&
      object.inauspiciousTime !== null
    ) {
      message.inauspiciousTime = object.inauspiciousTime;
    } else {
      message.inauspiciousTime = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = 0;
    }
    if (object.remarks !== undefined && object.remarks !== null) {
      message.remarks = object.remarks;
    } else {
      message.remarks = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
