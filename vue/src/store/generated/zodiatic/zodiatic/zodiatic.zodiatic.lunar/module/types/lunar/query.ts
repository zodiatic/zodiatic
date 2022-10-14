/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../lunar/params";
import { Lunar } from "../lunar/lunar";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "zodiatic.zodiatic.lunar";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetLunarRequest {
  yyyymmdd: number;
}

export interface QueryGetLunarResponse {
  lunar: Lunar | undefined;
}

export interface QueryAllLunarRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLunarResponse {
  lunar: Lunar[];
  pagination: PageResponse | undefined;
}

export interface QueryAuspiciousRequest {
  date: number;
  auspicious: string;
  pagination: PageRequest | undefined;
}

export interface QueryAuspiciousResponse {
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetLunarRequest: object = { yyyymmdd: 0 };

export const QueryGetLunarRequest = {
  encode(
    message: QueryGetLunarRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.yyyymmdd !== 0) {
      writer.uint32(8).uint64(message.yyyymmdd);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLunarRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLunarRequest } as QueryGetLunarRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yyyymmdd = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLunarRequest {
    const message = { ...baseQueryGetLunarRequest } as QueryGetLunarRequest;
    if (object.yyyymmdd !== undefined && object.yyyymmdd !== null) {
      message.yyyymmdd = Number(object.yyyymmdd);
    } else {
      message.yyyymmdd = 0;
    }
    return message;
  },

  toJSON(message: QueryGetLunarRequest): unknown {
    const obj: any = {};
    message.yyyymmdd !== undefined && (obj.yyyymmdd = message.yyyymmdd);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetLunarRequest>): QueryGetLunarRequest {
    const message = { ...baseQueryGetLunarRequest } as QueryGetLunarRequest;
    if (object.yyyymmdd !== undefined && object.yyyymmdd !== null) {
      message.yyyymmdd = object.yyyymmdd;
    } else {
      message.yyyymmdd = 0;
    }
    return message;
  },
};

const baseQueryGetLunarResponse: object = {};

export const QueryGetLunarResponse = {
  encode(
    message: QueryGetLunarResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.lunar !== undefined) {
      Lunar.encode(message.lunar, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLunarResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLunarResponse } as QueryGetLunarResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lunar = Lunar.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLunarResponse {
    const message = { ...baseQueryGetLunarResponse } as QueryGetLunarResponse;
    if (object.lunar !== undefined && object.lunar !== null) {
      message.lunar = Lunar.fromJSON(object.lunar);
    } else {
      message.lunar = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLunarResponse): unknown {
    const obj: any = {};
    message.lunar !== undefined &&
      (obj.lunar = message.lunar ? Lunar.toJSON(message.lunar) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLunarResponse>
  ): QueryGetLunarResponse {
    const message = { ...baseQueryGetLunarResponse } as QueryGetLunarResponse;
    if (object.lunar !== undefined && object.lunar !== null) {
      message.lunar = Lunar.fromPartial(object.lunar);
    } else {
      message.lunar = undefined;
    }
    return message;
  },
};

const baseQueryAllLunarRequest: object = {};

export const QueryAllLunarRequest = {
  encode(
    message: QueryAllLunarRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLunarRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLunarRequest } as QueryAllLunarRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLunarRequest {
    const message = { ...baseQueryAllLunarRequest } as QueryAllLunarRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLunarRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllLunarRequest>): QueryAllLunarRequest {
    const message = { ...baseQueryAllLunarRequest } as QueryAllLunarRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllLunarResponse: object = {};

export const QueryAllLunarResponse = {
  encode(
    message: QueryAllLunarResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.lunar) {
      Lunar.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLunarResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLunarResponse } as QueryAllLunarResponse;
    message.lunar = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lunar.push(Lunar.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLunarResponse {
    const message = { ...baseQueryAllLunarResponse } as QueryAllLunarResponse;
    message.lunar = [];
    if (object.lunar !== undefined && object.lunar !== null) {
      for (const e of object.lunar) {
        message.lunar.push(Lunar.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLunarResponse): unknown {
    const obj: any = {};
    if (message.lunar) {
      obj.lunar = message.lunar.map((e) => (e ? Lunar.toJSON(e) : undefined));
    } else {
      obj.lunar = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLunarResponse>
  ): QueryAllLunarResponse {
    const message = { ...baseQueryAllLunarResponse } as QueryAllLunarResponse;
    message.lunar = [];
    if (object.lunar !== undefined && object.lunar !== null) {
      for (const e of object.lunar) {
        message.lunar.push(Lunar.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAuspiciousRequest: object = { date: 0, auspicious: "" };

export const QueryAuspiciousRequest = {
  encode(
    message: QueryAuspiciousRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.date !== 0) {
      writer.uint32(8).uint64(message.date);
    }
    if (message.auspicious !== "") {
      writer.uint32(18).string(message.auspicious);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAuspiciousRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAuspiciousRequest } as QueryAuspiciousRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.auspicious = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuspiciousRequest {
    const message = { ...baseQueryAuspiciousRequest } as QueryAuspiciousRequest;
    if (object.date !== undefined && object.date !== null) {
      message.date = Number(object.date);
    } else {
      message.date = 0;
    }
    if (object.auspicious !== undefined && object.auspicious !== null) {
      message.auspicious = String(object.auspicious);
    } else {
      message.auspicious = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAuspiciousRequest): unknown {
    const obj: any = {};
    message.date !== undefined && (obj.date = message.date);
    message.auspicious !== undefined && (obj.auspicious = message.auspicious);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAuspiciousRequest>
  ): QueryAuspiciousRequest {
    const message = { ...baseQueryAuspiciousRequest } as QueryAuspiciousRequest;
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = 0;
    }
    if (object.auspicious !== undefined && object.auspicious !== null) {
      message.auspicious = object.auspicious;
    } else {
      message.auspicious = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAuspiciousResponse: object = {};

export const QueryAuspiciousResponse = {
  encode(
    message: QueryAuspiciousResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAuspiciousResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAuspiciousResponse,
    } as QueryAuspiciousResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuspiciousResponse {
    const message = {
      ...baseQueryAuspiciousResponse,
    } as QueryAuspiciousResponse;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAuspiciousResponse): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAuspiciousResponse>
  ): QueryAuspiciousResponse {
    const message = {
      ...baseQueryAuspiciousResponse,
    } as QueryAuspiciousResponse;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Lunar by index. */
  Lunar(request: QueryGetLunarRequest): Promise<QueryGetLunarResponse>;
  /** Queries a list of Lunar items. */
  LunarAll(request: QueryAllLunarRequest): Promise<QueryAllLunarResponse>;
  /** Queries a list of Auspicious items. */
  Auspicious(request: QueryAuspiciousRequest): Promise<QueryAuspiciousResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "zodiatic.zodiatic.lunar.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Lunar(request: QueryGetLunarRequest): Promise<QueryGetLunarResponse> {
    const data = QueryGetLunarRequest.encode(request).finish();
    const promise = this.rpc.request(
      "zodiatic.zodiatic.lunar.Query",
      "Lunar",
      data
    );
    return promise.then((data) =>
      QueryGetLunarResponse.decode(new Reader(data))
    );
  }

  LunarAll(request: QueryAllLunarRequest): Promise<QueryAllLunarResponse> {
    const data = QueryAllLunarRequest.encode(request).finish();
    const promise = this.rpc.request(
      "zodiatic.zodiatic.lunar.Query",
      "LunarAll",
      data
    );
    return promise.then((data) =>
      QueryAllLunarResponse.decode(new Reader(data))
    );
  }

  Auspicious(
    request: QueryAuspiciousRequest
  ): Promise<QueryAuspiciousResponse> {
    const data = QueryAuspiciousRequest.encode(request).finish();
    const promise = this.rpc.request(
      "zodiatic.zodiatic.lunar.Query",
      "Auspicious",
      data
    );
    return promise.then((data) =>
      QueryAuspiciousResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
