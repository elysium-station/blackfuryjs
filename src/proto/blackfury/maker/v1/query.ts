/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

import { Params } from "../../../blackfury/maker/v1/genesis";
import {
  AccountCollateral,
  BackingRiskParams,
  CollateralRiskParams,
  PoolBacking,
  PoolCollateral,
  TotalBacking,
  TotalCollateral,
} from "../../../blackfury/maker/v1/maker";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "blackfury.maker.v1";

export interface QueryAllBackingRiskParamsRequest {}

export interface QueryAllBackingRiskParamsResponse {
  riskParams: BackingRiskParams[];
}

export interface QueryAllCollateralRiskParamsRequest {}

export interface QueryAllCollateralRiskParamsResponse {
  riskParams: CollateralRiskParams[];
}

export interface QueryAllBackingPoolsRequest {}

export interface QueryAllBackingPoolsResponse {
  backingPools: PoolBacking[];
}

export interface QueryAllCollateralPoolsRequest {}

export interface QueryAllCollateralPoolsResponse {
  collateralPools: PoolCollateral[];
}

export interface QueryBackingPoolRequest {
  backingDenom: string;
}

export interface QueryBackingPoolResponse {
  backingPool?: PoolBacking;
}

export interface QueryCollateralPoolRequest {
  collateralDenom: string;
}

export interface QueryCollateralPoolResponse {
  collateralPool?: PoolCollateral;
}

export interface QueryCollateralOfAccountRequest {
  account: string;
  collateralDenom: string;
}

export interface QueryCollateralOfAccountResponse {
  accountCollateral?: AccountCollateral;
}

export interface QueryTotalBackingRequest {}

export interface QueryTotalBackingResponse {
  totalBacking?: TotalBacking;
}

export interface QueryTotalCollateralRequest {}

export interface QueryTotalCollateralResponse {
  totalCollateral?: TotalCollateral;
}

export interface QueryBackingRatioRequest {}

export interface QueryBackingRatioResponse {
  backingRatio: string;
  lastUpdateBlock: Long;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface EstimateMintBySwapInRequest {
  mintOut?: Coin;
  backingDenom: string;
  fullBacking: boolean;
}

export interface EstimateMintBySwapInResponse {
  backingIn?: Coin;
  furyIn?: Coin;
  mintFee?: Coin;
}

export interface EstimateMintBySwapOutRequest {
  backingInMax?: Coin;
  furyInMax?: Coin;
  fullBacking: boolean;
}

export interface EstimateMintBySwapOutResponse {
  backingIn?: Coin;
  furyIn?: Coin;
  mintOut?: Coin;
  mintFee?: Coin;
}

export interface EstimateBurnBySwapInRequest {
  backingOutMax?: Coin;
  furyOutMax?: Coin;
}

export interface EstimateBurnBySwapInResponse {
  burnIn?: Coin;
  backingOut?: Coin;
  furyOut?: Coin;
  burnFee?: Coin;
}

export interface EstimateBurnBySwapOutRequest {
  burnIn?: Coin;
  backingDenom: string;
}

export interface EstimateBurnBySwapOutResponse {
  backingOut?: Coin;
  furyOut?: Coin;
  burnFee?: Coin;
}

export interface EstimateBuyBackingInRequest {
  backingOut?: Coin;
}

export interface EstimateBuyBackingInResponse {
  furyIn?: Coin;
  buybackFee?: Coin;
}

export interface EstimateBuyBackingOutRequest {
  furyIn?: Coin;
  backingDenom: string;
}

export interface EstimateBuyBackingOutResponse {
  backingOut?: Coin;
  buybackFee?: Coin;
}

export interface EstimateSellBackingInRequest {
  furyOut?: Coin;
  backingDenom: string;
}

export interface EstimateSellBackingInResponse {
  backingIn?: Coin;
  sellbackFee?: Coin;
}

export interface EstimateSellBackingOutRequest {
  backingIn?: Coin;
}

export interface EstimateSellBackingOutResponse {
  furyOut?: Coin;
  sellbackFee?: Coin;
}

function createBaseQueryAllBackingRiskParamsRequest(): QueryAllBackingRiskParamsRequest {
  return {};
}

export const QueryAllBackingRiskParamsRequest = {
  encode(_: QueryAllBackingRiskParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBackingRiskParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBackingRiskParamsRequest();
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

  fromJSON(_: any): QueryAllBackingRiskParamsRequest {
    return {};
  },

  toJSON(_: QueryAllBackingRiskParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBackingRiskParamsRequest>, I>>(
    _: I,
  ): QueryAllBackingRiskParamsRequest {
    const message = createBaseQueryAllBackingRiskParamsRequest();
    return message;
  },
};

function createBaseQueryAllBackingRiskParamsResponse(): QueryAllBackingRiskParamsResponse {
  return { riskParams: [] };
}

export const QueryAllBackingRiskParamsResponse = {
  encode(message: QueryAllBackingRiskParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.riskParams) {
      BackingRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBackingRiskParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBackingRiskParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.riskParams.push(BackingRiskParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBackingRiskParamsResponse {
    return {
      riskParams: Array.isArray(object?.riskParams)
        ? object.riskParams.map((e: any) => BackingRiskParams.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllBackingRiskParamsResponse): unknown {
    const obj: any = {};
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) => (e ? BackingRiskParams.toJSON(e) : undefined));
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBackingRiskParamsResponse>, I>>(
    object: I,
  ): QueryAllBackingRiskParamsResponse {
    const message = createBaseQueryAllBackingRiskParamsResponse();
    message.riskParams = object.riskParams?.map((e) => BackingRiskParams.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllCollateralRiskParamsRequest(): QueryAllCollateralRiskParamsRequest {
  return {};
}

export const QueryAllCollateralRiskParamsRequest = {
  encode(_: QueryAllCollateralRiskParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCollateralRiskParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollateralRiskParamsRequest();
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

  fromJSON(_: any): QueryAllCollateralRiskParamsRequest {
    return {};
  },

  toJSON(_: QueryAllCollateralRiskParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCollateralRiskParamsRequest>, I>>(
    _: I,
  ): QueryAllCollateralRiskParamsRequest {
    const message = createBaseQueryAllCollateralRiskParamsRequest();
    return message;
  },
};

function createBaseQueryAllCollateralRiskParamsResponse(): QueryAllCollateralRiskParamsResponse {
  return { riskParams: [] };
}

export const QueryAllCollateralRiskParamsResponse = {
  encode(
    message: QueryAllCollateralRiskParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.riskParams) {
      CollateralRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCollateralRiskParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollateralRiskParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.riskParams.push(CollateralRiskParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCollateralRiskParamsResponse {
    return {
      riskParams: Array.isArray(object?.riskParams)
        ? object.riskParams.map((e: any) => CollateralRiskParams.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllCollateralRiskParamsResponse): unknown {
    const obj: any = {};
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) => (e ? CollateralRiskParams.toJSON(e) : undefined));
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCollateralRiskParamsResponse>, I>>(
    object: I,
  ): QueryAllCollateralRiskParamsResponse {
    const message = createBaseQueryAllCollateralRiskParamsResponse();
    message.riskParams = object.riskParams?.map((e) => CollateralRiskParams.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllBackingPoolsRequest(): QueryAllBackingPoolsRequest {
  return {};
}

export const QueryAllBackingPoolsRequest = {
  encode(_: QueryAllBackingPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBackingPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBackingPoolsRequest();
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

  fromJSON(_: any): QueryAllBackingPoolsRequest {
    return {};
  },

  toJSON(_: QueryAllBackingPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBackingPoolsRequest>, I>>(
    _: I,
  ): QueryAllBackingPoolsRequest {
    const message = createBaseQueryAllBackingPoolsRequest();
    return message;
  },
};

function createBaseQueryAllBackingPoolsResponse(): QueryAllBackingPoolsResponse {
  return { backingPools: [] };
}

export const QueryAllBackingPoolsResponse = {
  encode(message: QueryAllBackingPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.backingPools) {
      PoolBacking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBackingPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBackingPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingPools.push(PoolBacking.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBackingPoolsResponse {
    return {
      backingPools: Array.isArray(object?.backingPools)
        ? object.backingPools.map((e: any) => PoolBacking.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllBackingPoolsResponse): unknown {
    const obj: any = {};
    if (message.backingPools) {
      obj.backingPools = message.backingPools.map((e) => (e ? PoolBacking.toJSON(e) : undefined));
    } else {
      obj.backingPools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBackingPoolsResponse>, I>>(
    object: I,
  ): QueryAllBackingPoolsResponse {
    const message = createBaseQueryAllBackingPoolsResponse();
    message.backingPools = object.backingPools?.map((e) => PoolBacking.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllCollateralPoolsRequest(): QueryAllCollateralPoolsRequest {
  return {};
}

export const QueryAllCollateralPoolsRequest = {
  encode(_: QueryAllCollateralPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCollateralPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollateralPoolsRequest();
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

  fromJSON(_: any): QueryAllCollateralPoolsRequest {
    return {};
  },

  toJSON(_: QueryAllCollateralPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCollateralPoolsRequest>, I>>(
    _: I,
  ): QueryAllCollateralPoolsRequest {
    const message = createBaseQueryAllCollateralPoolsRequest();
    return message;
  },
};

function createBaseQueryAllCollateralPoolsResponse(): QueryAllCollateralPoolsResponse {
  return { collateralPools: [] };
}

export const QueryAllCollateralPoolsResponse = {
  encode(message: QueryAllCollateralPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collateralPools) {
      PoolCollateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCollateralPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollateralPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralPools.push(PoolCollateral.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCollateralPoolsResponse {
    return {
      collateralPools: Array.isArray(object?.collateralPools)
        ? object.collateralPools.map((e: any) => PoolCollateral.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllCollateralPoolsResponse): unknown {
    const obj: any = {};
    if (message.collateralPools) {
      obj.collateralPools = message.collateralPools.map((e) => (e ? PoolCollateral.toJSON(e) : undefined));
    } else {
      obj.collateralPools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCollateralPoolsResponse>, I>>(
    object: I,
  ): QueryAllCollateralPoolsResponse {
    const message = createBaseQueryAllCollateralPoolsResponse();
    message.collateralPools = object.collateralPools?.map((e) => PoolCollateral.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBackingPoolRequest(): QueryBackingPoolRequest {
  return { backingDenom: "" };
}

export const QueryBackingPoolRequest = {
  encode(message: QueryBackingPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingDenom !== "") {
      writer.uint32(10).string(message.backingDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBackingPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBackingPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingPoolRequest {
    return {
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
    };
  },

  toJSON(message: QueryBackingPoolRequest): unknown {
    const obj: any = {};
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBackingPoolRequest>, I>>(object: I): QueryBackingPoolRequest {
    const message = createBaseQueryBackingPoolRequest();
    message.backingDenom = object.backingDenom ?? "";
    return message;
  },
};

function createBaseQueryBackingPoolResponse(): QueryBackingPoolResponse {
  return { backingPool: undefined };
}

export const QueryBackingPoolResponse = {
  encode(message: QueryBackingPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingPool !== undefined) {
      PoolBacking.encode(message.backingPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBackingPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBackingPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingPool = PoolBacking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingPoolResponse {
    return {
      backingPool: isSet(object.backingPool) ? PoolBacking.fromJSON(object.backingPool) : undefined,
    };
  },

  toJSON(message: QueryBackingPoolResponse): unknown {
    const obj: any = {};
    message.backingPool !== undefined &&
      (obj.backingPool = message.backingPool ? PoolBacking.toJSON(message.backingPool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBackingPoolResponse>, I>>(
    object: I,
  ): QueryBackingPoolResponse {
    const message = createBaseQueryBackingPoolResponse();
    message.backingPool =
      object.backingPool !== undefined && object.backingPool !== null
        ? PoolBacking.fromPartial(object.backingPool)
        : undefined;
    return message;
  },
};

function createBaseQueryCollateralPoolRequest(): QueryCollateralPoolRequest {
  return { collateralDenom: "" };
}

export const QueryCollateralPoolRequest = {
  encode(message: QueryCollateralPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralDenom !== "") {
      writer.uint32(10).string(message.collateralDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollateralPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollateralPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralPoolRequest {
    return {
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
    };
  },

  toJSON(message: QueryCollateralPoolRequest): unknown {
    const obj: any = {};
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollateralPoolRequest>, I>>(
    object: I,
  ): QueryCollateralPoolRequest {
    const message = createBaseQueryCollateralPoolRequest();
    message.collateralDenom = object.collateralDenom ?? "";
    return message;
  },
};

function createBaseQueryCollateralPoolResponse(): QueryCollateralPoolResponse {
  return { collateralPool: undefined };
}

export const QueryCollateralPoolResponse = {
  encode(message: QueryCollateralPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralPool !== undefined) {
      PoolCollateral.encode(message.collateralPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollateralPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollateralPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralPool = PoolCollateral.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralPoolResponse {
    return {
      collateralPool: isSet(object.collateralPool)
        ? PoolCollateral.fromJSON(object.collateralPool)
        : undefined,
    };
  },

  toJSON(message: QueryCollateralPoolResponse): unknown {
    const obj: any = {};
    message.collateralPool !== undefined &&
      (obj.collateralPool = message.collateralPool
        ? PoolCollateral.toJSON(message.collateralPool)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollateralPoolResponse>, I>>(
    object: I,
  ): QueryCollateralPoolResponse {
    const message = createBaseQueryCollateralPoolResponse();
    message.collateralPool =
      object.collateralPool !== undefined && object.collateralPool !== null
        ? PoolCollateral.fromPartial(object.collateralPool)
        : undefined;
    return message;
  },
};

function createBaseQueryCollateralOfAccountRequest(): QueryCollateralOfAccountRequest {
  return { account: "", collateralDenom: "" };
}

export const QueryCollateralOfAccountRequest = {
  encode(message: QueryCollateralOfAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(18).string(message.collateralDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollateralOfAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollateralOfAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.collateralDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralOfAccountRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
    };
  },

  toJSON(message: QueryCollateralOfAccountRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollateralOfAccountRequest>, I>>(
    object: I,
  ): QueryCollateralOfAccountRequest {
    const message = createBaseQueryCollateralOfAccountRequest();
    message.account = object.account ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    return message;
  },
};

function createBaseQueryCollateralOfAccountResponse(): QueryCollateralOfAccountResponse {
  return { accountCollateral: undefined };
}

export const QueryCollateralOfAccountResponse = {
  encode(message: QueryCollateralOfAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountCollateral !== undefined) {
      AccountCollateral.encode(message.accountCollateral, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollateralOfAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollateralOfAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountCollateral = AccountCollateral.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralOfAccountResponse {
    return {
      accountCollateral: isSet(object.accountCollateral)
        ? AccountCollateral.fromJSON(object.accountCollateral)
        : undefined,
    };
  },

  toJSON(message: QueryCollateralOfAccountResponse): unknown {
    const obj: any = {};
    message.accountCollateral !== undefined &&
      (obj.accountCollateral = message.accountCollateral
        ? AccountCollateral.toJSON(message.accountCollateral)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollateralOfAccountResponse>, I>>(
    object: I,
  ): QueryCollateralOfAccountResponse {
    const message = createBaseQueryCollateralOfAccountResponse();
    message.accountCollateral =
      object.accountCollateral !== undefined && object.accountCollateral !== null
        ? AccountCollateral.fromPartial(object.accountCollateral)
        : undefined;
    return message;
  },
};

function createBaseQueryTotalBackingRequest(): QueryTotalBackingRequest {
  return {};
}

export const QueryTotalBackingRequest = {
  encode(_: QueryTotalBackingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBackingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBackingRequest();
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

  fromJSON(_: any): QueryTotalBackingRequest {
    return {};
  },

  toJSON(_: QueryTotalBackingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalBackingRequest>, I>>(_: I): QueryTotalBackingRequest {
    const message = createBaseQueryTotalBackingRequest();
    return message;
  },
};

function createBaseQueryTotalBackingResponse(): QueryTotalBackingResponse {
  return { totalBacking: undefined };
}

export const QueryTotalBackingResponse = {
  encode(message: QueryTotalBackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalBacking !== undefined) {
      TotalBacking.encode(message.totalBacking, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBackingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBacking = TotalBacking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalBackingResponse {
    return {
      totalBacking: isSet(object.totalBacking) ? TotalBacking.fromJSON(object.totalBacking) : undefined,
    };
  },

  toJSON(message: QueryTotalBackingResponse): unknown {
    const obj: any = {};
    message.totalBacking !== undefined &&
      (obj.totalBacking = message.totalBacking ? TotalBacking.toJSON(message.totalBacking) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalBackingResponse>, I>>(
    object: I,
  ): QueryTotalBackingResponse {
    const message = createBaseQueryTotalBackingResponse();
    message.totalBacking =
      object.totalBacking !== undefined && object.totalBacking !== null
        ? TotalBacking.fromPartial(object.totalBacking)
        : undefined;
    return message;
  },
};

function createBaseQueryTotalCollateralRequest(): QueryTotalCollateralRequest {
  return {};
}

export const QueryTotalCollateralRequest = {
  encode(_: QueryTotalCollateralRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCollateralRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalCollateralRequest();
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

  fromJSON(_: any): QueryTotalCollateralRequest {
    return {};
  },

  toJSON(_: QueryTotalCollateralRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalCollateralRequest>, I>>(
    _: I,
  ): QueryTotalCollateralRequest {
    const message = createBaseQueryTotalCollateralRequest();
    return message;
  },
};

function createBaseQueryTotalCollateralResponse(): QueryTotalCollateralResponse {
  return { totalCollateral: undefined };
}

export const QueryTotalCollateralResponse = {
  encode(message: QueryTotalCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalCollateral !== undefined) {
      TotalCollateral.encode(message.totalCollateral, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCollateral = TotalCollateral.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalCollateralResponse {
    return {
      totalCollateral: isSet(object.totalCollateral)
        ? TotalCollateral.fromJSON(object.totalCollateral)
        : undefined,
    };
  },

  toJSON(message: QueryTotalCollateralResponse): unknown {
    const obj: any = {};
    message.totalCollateral !== undefined &&
      (obj.totalCollateral = message.totalCollateral
        ? TotalCollateral.toJSON(message.totalCollateral)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalCollateralResponse>, I>>(
    object: I,
  ): QueryTotalCollateralResponse {
    const message = createBaseQueryTotalCollateralResponse();
    message.totalCollateral =
      object.totalCollateral !== undefined && object.totalCollateral !== null
        ? TotalCollateral.fromPartial(object.totalCollateral)
        : undefined;
    return message;
  },
};

function createBaseQueryBackingRatioRequest(): QueryBackingRatioRequest {
  return {};
}

export const QueryBackingRatioRequest = {
  encode(_: QueryBackingRatioRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBackingRatioRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBackingRatioRequest();
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

  fromJSON(_: any): QueryBackingRatioRequest {
    return {};
  },

  toJSON(_: QueryBackingRatioRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBackingRatioRequest>, I>>(_: I): QueryBackingRatioRequest {
    const message = createBaseQueryBackingRatioRequest();
    return message;
  },
};

function createBaseQueryBackingRatioResponse(): QueryBackingRatioResponse {
  return { backingRatio: "", lastUpdateBlock: Long.ZERO };
}

export const QueryBackingRatioResponse = {
  encode(message: QueryBackingRatioResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingRatio !== "") {
      writer.uint32(10).string(message.backingRatio);
    }
    if (!message.lastUpdateBlock.isZero()) {
      writer.uint32(16).int64(message.lastUpdateBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBackingRatioResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBackingRatioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingRatio = reader.string();
          break;
        case 2:
          message.lastUpdateBlock = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingRatioResponse {
    return {
      backingRatio: isSet(object.backingRatio) ? String(object.backingRatio) : "",
      lastUpdateBlock: isSet(object.lastUpdateBlock) ? Long.fromValue(object.lastUpdateBlock) : Long.ZERO,
    };
  },

  toJSON(message: QueryBackingRatioResponse): unknown {
    const obj: any = {};
    message.backingRatio !== undefined && (obj.backingRatio = message.backingRatio);
    message.lastUpdateBlock !== undefined &&
      (obj.lastUpdateBlock = (message.lastUpdateBlock || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBackingRatioResponse>, I>>(
    object: I,
  ): QueryBackingRatioResponse {
    const message = createBaseQueryBackingRatioResponse();
    message.backingRatio = object.backingRatio ?? "";
    message.lastUpdateBlock =
      object.lastUpdateBlock !== undefined && object.lastUpdateBlock !== null
        ? Long.fromValue(object.lastUpdateBlock)
        : Long.ZERO;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

function createBaseEstimateMintBySwapInRequest(): EstimateMintBySwapInRequest {
  return { mintOut: undefined, backingDenom: "", fullBacking: false };
}

export const EstimateMintBySwapInRequest = {
  encode(message: EstimateMintBySwapInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintOut !== undefined) {
      Coin.encode(message.mintOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    if (message.fullBacking === true) {
      writer.uint32(24).bool(message.fullBacking);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateMintBySwapInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateMintBySwapInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        case 3:
          message.fullBacking = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMintBySwapInRequest {
    return {
      mintOut: isSet(object.mintOut) ? Coin.fromJSON(object.mintOut) : undefined,
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
      fullBacking: isSet(object.fullBacking) ? Boolean(object.fullBacking) : false,
    };
  },

  toJSON(message: EstimateMintBySwapInRequest): unknown {
    const obj: any = {};
    message.mintOut !== undefined &&
      (obj.mintOut = message.mintOut ? Coin.toJSON(message.mintOut) : undefined);
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    message.fullBacking !== undefined && (obj.fullBacking = message.fullBacking);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateMintBySwapInRequest>, I>>(
    object: I,
  ): EstimateMintBySwapInRequest {
    const message = createBaseEstimateMintBySwapInRequest();
    message.mintOut =
      object.mintOut !== undefined && object.mintOut !== null ? Coin.fromPartial(object.mintOut) : undefined;
    message.backingDenom = object.backingDenom ?? "";
    message.fullBacking = object.fullBacking ?? false;
    return message;
  },
};

function createBaseEstimateMintBySwapInResponse(): EstimateMintBySwapInResponse {
  return { backingIn: undefined, furyIn: undefined, mintFee: undefined };
}

export const EstimateMintBySwapInResponse = {
  encode(message: EstimateMintBySwapInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.furyIn !== undefined) {
      Coin.encode(message.furyIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateMintBySwapInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateMintBySwapInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.furyIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMintBySwapInResponse {
    return {
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
      furyIn: isSet(object.furyIn) ? Coin.fromJSON(object.furyIn) : undefined,
      mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined,
    };
  },

  toJSON(message: EstimateMintBySwapInResponse): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn ? Coin.toJSON(message.backingIn) : undefined);
    message.furyIn !== undefined && (obj.furyIn = message.furyIn ? Coin.toJSON(message.furyIn) : undefined);
    message.mintFee !== undefined &&
      (obj.mintFee = message.mintFee ? Coin.toJSON(message.mintFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateMintBySwapInResponse>, I>>(
    object: I,
  ): EstimateMintBySwapInResponse {
    const message = createBaseEstimateMintBySwapInResponse();
    message.backingIn =
      object.backingIn !== undefined && object.backingIn !== null
        ? Coin.fromPartial(object.backingIn)
        : undefined;
    message.furyIn =
      object.furyIn !== undefined && object.furyIn !== null ? Coin.fromPartial(object.furyIn) : undefined;
    message.mintFee =
      object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    return message;
  },
};

function createBaseEstimateMintBySwapOutRequest(): EstimateMintBySwapOutRequest {
  return { backingInMax: undefined, furyInMax: undefined, fullBacking: false };
}

export const EstimateMintBySwapOutRequest = {
  encode(message: EstimateMintBySwapOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingInMax !== undefined) {
      Coin.encode(message.backingInMax, writer.uint32(10).fork()).ldelim();
    }
    if (message.furyInMax !== undefined) {
      Coin.encode(message.furyInMax, writer.uint32(18).fork()).ldelim();
    }
    if (message.fullBacking === true) {
      writer.uint32(24).bool(message.fullBacking);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateMintBySwapOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateMintBySwapOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingInMax = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.furyInMax = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.fullBacking = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMintBySwapOutRequest {
    return {
      backingInMax: isSet(object.backingInMax) ? Coin.fromJSON(object.backingInMax) : undefined,
      furyInMax: isSet(object.furyInMax) ? Coin.fromJSON(object.furyInMax) : undefined,
      fullBacking: isSet(object.fullBacking) ? Boolean(object.fullBacking) : false,
    };
  },

  toJSON(message: EstimateMintBySwapOutRequest): unknown {
    const obj: any = {};
    message.backingInMax !== undefined &&
      (obj.backingInMax = message.backingInMax ? Coin.toJSON(message.backingInMax) : undefined);
    message.furyInMax !== undefined &&
      (obj.furyInMax = message.furyInMax ? Coin.toJSON(message.furyInMax) : undefined);
    message.fullBacking !== undefined && (obj.fullBacking = message.fullBacking);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateMintBySwapOutRequest>, I>>(
    object: I,
  ): EstimateMintBySwapOutRequest {
    const message = createBaseEstimateMintBySwapOutRequest();
    message.backingInMax =
      object.backingInMax !== undefined && object.backingInMax !== null
        ? Coin.fromPartial(object.backingInMax)
        : undefined;
    message.furyInMax =
      object.furyInMax !== undefined && object.furyInMax !== null
        ? Coin.fromPartial(object.furyInMax)
        : undefined;
    message.fullBacking = object.fullBacking ?? false;
    return message;
  },
};

function createBaseEstimateMintBySwapOutResponse(): EstimateMintBySwapOutResponse {
  return { backingIn: undefined, furyIn: undefined, mintOut: undefined, mintFee: undefined };
}

export const EstimateMintBySwapOutResponse = {
  encode(message: EstimateMintBySwapOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.furyIn !== undefined) {
      Coin.encode(message.furyIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintOut !== undefined) {
      Coin.encode(message.mintOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateMintBySwapOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateMintBySwapOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.furyIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMintBySwapOutResponse {
    return {
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
      furyIn: isSet(object.furyIn) ? Coin.fromJSON(object.furyIn) : undefined,
      mintOut: isSet(object.mintOut) ? Coin.fromJSON(object.mintOut) : undefined,
      mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined,
    };
  },

  toJSON(message: EstimateMintBySwapOutResponse): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn ? Coin.toJSON(message.backingIn) : undefined);
    message.furyIn !== undefined && (obj.furyIn = message.furyIn ? Coin.toJSON(message.furyIn) : undefined);
    message.mintOut !== undefined &&
      (obj.mintOut = message.mintOut ? Coin.toJSON(message.mintOut) : undefined);
    message.mintFee !== undefined &&
      (obj.mintFee = message.mintFee ? Coin.toJSON(message.mintFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateMintBySwapOutResponse>, I>>(
    object: I,
  ): EstimateMintBySwapOutResponse {
    const message = createBaseEstimateMintBySwapOutResponse();
    message.backingIn =
      object.backingIn !== undefined && object.backingIn !== null
        ? Coin.fromPartial(object.backingIn)
        : undefined;
    message.furyIn =
      object.furyIn !== undefined && object.furyIn !== null ? Coin.fromPartial(object.furyIn) : undefined;
    message.mintOut =
      object.mintOut !== undefined && object.mintOut !== null ? Coin.fromPartial(object.mintOut) : undefined;
    message.mintFee =
      object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    return message;
  },
};

function createBaseEstimateBurnBySwapInRequest(): EstimateBurnBySwapInRequest {
  return { backingOutMax: undefined, furyOutMax: undefined };
}

export const EstimateBurnBySwapInRequest = {
  encode(message: EstimateBurnBySwapInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingOutMax !== undefined) {
      Coin.encode(message.backingOutMax, writer.uint32(10).fork()).ldelim();
    }
    if (message.furyOutMax !== undefined) {
      Coin.encode(message.furyOutMax, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateBurnBySwapInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateBurnBySwapInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOutMax = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.furyOutMax = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBurnBySwapInRequest {
    return {
      backingOutMax: isSet(object.backingOutMax) ? Coin.fromJSON(object.backingOutMax) : undefined,
      furyOutMax: isSet(object.furyOutMax) ? Coin.fromJSON(object.furyOutMax) : undefined,
    };
  },

  toJSON(message: EstimateBurnBySwapInRequest): unknown {
    const obj: any = {};
    message.backingOutMax !== undefined &&
      (obj.backingOutMax = message.backingOutMax ? Coin.toJSON(message.backingOutMax) : undefined);
    message.furyOutMax !== undefined &&
      (obj.furyOutMax = message.furyOutMax ? Coin.toJSON(message.furyOutMax) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateBurnBySwapInRequest>, I>>(
    object: I,
  ): EstimateBurnBySwapInRequest {
    const message = createBaseEstimateBurnBySwapInRequest();
    message.backingOutMax =
      object.backingOutMax !== undefined && object.backingOutMax !== null
        ? Coin.fromPartial(object.backingOutMax)
        : undefined;
    message.furyOutMax =
      object.furyOutMax !== undefined && object.furyOutMax !== null
        ? Coin.fromPartial(object.furyOutMax)
        : undefined;
    return message;
  },
};

function createBaseEstimateBurnBySwapInResponse(): EstimateBurnBySwapInResponse {
  return { burnIn: undefined, backingOut: undefined, furyOut: undefined, burnFee: undefined };
}

export const EstimateBurnBySwapInResponse = {
  encode(message: EstimateBurnBySwapInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burnIn !== undefined) {
      Coin.encode(message.burnIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.furyOut !== undefined) {
      Coin.encode(message.furyOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.burnFee !== undefined) {
      Coin.encode(message.burnFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateBurnBySwapInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateBurnBySwapInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.furyOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.burnFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBurnBySwapInResponse {
    return {
      burnIn: isSet(object.burnIn) ? Coin.fromJSON(object.burnIn) : undefined,
      backingOut: isSet(object.backingOut) ? Coin.fromJSON(object.backingOut) : undefined,
      furyOut: isSet(object.furyOut) ? Coin.fromJSON(object.furyOut) : undefined,
      burnFee: isSet(object.burnFee) ? Coin.fromJSON(object.burnFee) : undefined,
    };
  },

  toJSON(message: EstimateBurnBySwapInResponse): unknown {
    const obj: any = {};
    message.burnIn !== undefined && (obj.burnIn = message.burnIn ? Coin.toJSON(message.burnIn) : undefined);
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut ? Coin.toJSON(message.backingOut) : undefined);
    message.furyOut !== undefined &&
      (obj.furyOut = message.furyOut ? Coin.toJSON(message.furyOut) : undefined);
    message.burnFee !== undefined &&
      (obj.burnFee = message.burnFee ? Coin.toJSON(message.burnFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateBurnBySwapInResponse>, I>>(
    object: I,
  ): EstimateBurnBySwapInResponse {
    const message = createBaseEstimateBurnBySwapInResponse();
    message.burnIn =
      object.burnIn !== undefined && object.burnIn !== null ? Coin.fromPartial(object.burnIn) : undefined;
    message.backingOut =
      object.backingOut !== undefined && object.backingOut !== null
        ? Coin.fromPartial(object.backingOut)
        : undefined;
    message.furyOut =
      object.furyOut !== undefined && object.furyOut !== null ? Coin.fromPartial(object.furyOut) : undefined;
    message.burnFee =
      object.burnFee !== undefined && object.burnFee !== null ? Coin.fromPartial(object.burnFee) : undefined;
    return message;
  },
};

function createBaseEstimateBurnBySwapOutRequest(): EstimateBurnBySwapOutRequest {
  return { burnIn: undefined, backingDenom: "" };
}

export const EstimateBurnBySwapOutRequest = {
  encode(message: EstimateBurnBySwapOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burnIn !== undefined) {
      Coin.encode(message.burnIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateBurnBySwapOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateBurnBySwapOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBurnBySwapOutRequest {
    return {
      burnIn: isSet(object.burnIn) ? Coin.fromJSON(object.burnIn) : undefined,
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
    };
  },

  toJSON(message: EstimateBurnBySwapOutRequest): unknown {
    const obj: any = {};
    message.burnIn !== undefined && (obj.burnIn = message.burnIn ? Coin.toJSON(message.burnIn) : undefined);
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateBurnBySwapOutRequest>, I>>(
    object: I,
  ): EstimateBurnBySwapOutRequest {
    const message = createBaseEstimateBurnBySwapOutRequest();
    message.burnIn =
      object.burnIn !== undefined && object.burnIn !== null ? Coin.fromPartial(object.burnIn) : undefined;
    message.backingDenom = object.backingDenom ?? "";
    return message;
  },
};

function createBaseEstimateBurnBySwapOutResponse(): EstimateBurnBySwapOutResponse {
  return { backingOut: undefined, furyOut: undefined, burnFee: undefined };
}

export const EstimateBurnBySwapOutResponse = {
  encode(message: EstimateBurnBySwapOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.furyOut !== undefined) {
      Coin.encode(message.furyOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.burnFee !== undefined) {
      Coin.encode(message.burnFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateBurnBySwapOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateBurnBySwapOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.furyOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.burnFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBurnBySwapOutResponse {
    return {
      backingOut: isSet(object.backingOut) ? Coin.fromJSON(object.backingOut) : undefined,
      furyOut: isSet(object.furyOut) ? Coin.fromJSON(object.furyOut) : undefined,
      burnFee: isSet(object.burnFee) ? Coin.fromJSON(object.burnFee) : undefined,
    };
  },

  toJSON(message: EstimateBurnBySwapOutResponse): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut ? Coin.toJSON(message.backingOut) : undefined);
    message.furyOut !== undefined &&
      (obj.furyOut = message.furyOut ? Coin.toJSON(message.furyOut) : undefined);
    message.burnFee !== undefined &&
      (obj.burnFee = message.burnFee ? Coin.toJSON(message.burnFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateBurnBySwapOutResponse>, I>>(
    object: I,
  ): EstimateBurnBySwapOutResponse {
    const message = createBaseEstimateBurnBySwapOutResponse();
    message.backingOut =
      object.backingOut !== undefined && object.backingOut !== null
        ? Coin.fromPartial(object.backingOut)
        : undefined;
    message.furyOut =
      object.furyOut !== undefined && object.furyOut !== null ? Coin.fromPartial(object.furyOut) : undefined;
    message.burnFee =
      object.burnFee !== undefined && object.burnFee !== null ? Coin.fromPartial(object.burnFee) : undefined;
    return message;
  },
};

function createBaseEstimateBuyBackingInRequest(): EstimateBuyBackingInRequest {
  return { backingOut: undefined };
}

export const EstimateBuyBackingInRequest = {
  encode(message: EstimateBuyBackingInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateBuyBackingInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateBuyBackingInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBuyBackingInRequest {
    return {
      backingOut: isSet(object.backingOut) ? Coin.fromJSON(object.backingOut) : undefined,
    };
  },

  toJSON(message: EstimateBuyBackingInRequest): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut ? Coin.toJSON(message.backingOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateBuyBackingInRequest>, I>>(
    object: I,
  ): EstimateBuyBackingInRequest {
    const message = createBaseEstimateBuyBackingInRequest();
    message.backingOut =
      object.backingOut !== undefined && object.backingOut !== null
        ? Coin.fromPartial(object.backingOut)
        : undefined;
    return message;
  },
};

function createBaseEstimateBuyBackingInResponse(): EstimateBuyBackingInResponse {
  return { furyIn: undefined, buybackFee: undefined };
}

export const EstimateBuyBackingInResponse = {
  encode(message: EstimateBuyBackingInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.furyIn !== undefined) {
      Coin.encode(message.furyIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.buybackFee !== undefined) {
      Coin.encode(message.buybackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateBuyBackingInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateBuyBackingInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.furyIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.buybackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBuyBackingInResponse {
    return {
      furyIn: isSet(object.furyIn) ? Coin.fromJSON(object.furyIn) : undefined,
      buybackFee: isSet(object.buybackFee) ? Coin.fromJSON(object.buybackFee) : undefined,
    };
  },

  toJSON(message: EstimateBuyBackingInResponse): unknown {
    const obj: any = {};
    message.furyIn !== undefined && (obj.furyIn = message.furyIn ? Coin.toJSON(message.furyIn) : undefined);
    message.buybackFee !== undefined &&
      (obj.buybackFee = message.buybackFee ? Coin.toJSON(message.buybackFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateBuyBackingInResponse>, I>>(
    object: I,
  ): EstimateBuyBackingInResponse {
    const message = createBaseEstimateBuyBackingInResponse();
    message.furyIn =
      object.furyIn !== undefined && object.furyIn !== null ? Coin.fromPartial(object.furyIn) : undefined;
    message.buybackFee =
      object.buybackFee !== undefined && object.buybackFee !== null
        ? Coin.fromPartial(object.buybackFee)
        : undefined;
    return message;
  },
};

function createBaseEstimateBuyBackingOutRequest(): EstimateBuyBackingOutRequest {
  return { furyIn: undefined, backingDenom: "" };
}

export const EstimateBuyBackingOutRequest = {
  encode(message: EstimateBuyBackingOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.furyIn !== undefined) {
      Coin.encode(message.furyIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateBuyBackingOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateBuyBackingOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.furyIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBuyBackingOutRequest {
    return {
      furyIn: isSet(object.furyIn) ? Coin.fromJSON(object.furyIn) : undefined,
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
    };
  },

  toJSON(message: EstimateBuyBackingOutRequest): unknown {
    const obj: any = {};
    message.furyIn !== undefined && (obj.furyIn = message.furyIn ? Coin.toJSON(message.furyIn) : undefined);
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateBuyBackingOutRequest>, I>>(
    object: I,
  ): EstimateBuyBackingOutRequest {
    const message = createBaseEstimateBuyBackingOutRequest();
    message.furyIn =
      object.furyIn !== undefined && object.furyIn !== null ? Coin.fromPartial(object.furyIn) : undefined;
    message.backingDenom = object.backingDenom ?? "";
    return message;
  },
};

function createBaseEstimateBuyBackingOutResponse(): EstimateBuyBackingOutResponse {
  return { backingOut: undefined, buybackFee: undefined };
}

export const EstimateBuyBackingOutResponse = {
  encode(message: EstimateBuyBackingOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.buybackFee !== undefined) {
      Coin.encode(message.buybackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateBuyBackingOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateBuyBackingOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.buybackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBuyBackingOutResponse {
    return {
      backingOut: isSet(object.backingOut) ? Coin.fromJSON(object.backingOut) : undefined,
      buybackFee: isSet(object.buybackFee) ? Coin.fromJSON(object.buybackFee) : undefined,
    };
  },

  toJSON(message: EstimateBuyBackingOutResponse): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut ? Coin.toJSON(message.backingOut) : undefined);
    message.buybackFee !== undefined &&
      (obj.buybackFee = message.buybackFee ? Coin.toJSON(message.buybackFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateBuyBackingOutResponse>, I>>(
    object: I,
  ): EstimateBuyBackingOutResponse {
    const message = createBaseEstimateBuyBackingOutResponse();
    message.backingOut =
      object.backingOut !== undefined && object.backingOut !== null
        ? Coin.fromPartial(object.backingOut)
        : undefined;
    message.buybackFee =
      object.buybackFee !== undefined && object.buybackFee !== null
        ? Coin.fromPartial(object.buybackFee)
        : undefined;
    return message;
  },
};

function createBaseEstimateSellBackingInRequest(): EstimateSellBackingInRequest {
  return { furyOut: undefined, backingDenom: "" };
}

export const EstimateSellBackingInRequest = {
  encode(message: EstimateSellBackingInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.furyOut !== undefined) {
      Coin.encode(message.furyOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSellBackingInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSellBackingInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.furyOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingInRequest {
    return {
      furyOut: isSet(object.furyOut) ? Coin.fromJSON(object.furyOut) : undefined,
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
    };
  },

  toJSON(message: EstimateSellBackingInRequest): unknown {
    const obj: any = {};
    message.furyOut !== undefined &&
      (obj.furyOut = message.furyOut ? Coin.toJSON(message.furyOut) : undefined);
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateSellBackingInRequest>, I>>(
    object: I,
  ): EstimateSellBackingInRequest {
    const message = createBaseEstimateSellBackingInRequest();
    message.furyOut =
      object.furyOut !== undefined && object.furyOut !== null ? Coin.fromPartial(object.furyOut) : undefined;
    message.backingDenom = object.backingDenom ?? "";
    return message;
  },
};

function createBaseEstimateSellBackingInResponse(): EstimateSellBackingInResponse {
  return { backingIn: undefined, sellbackFee: undefined };
}

export const EstimateSellBackingInResponse = {
  encode(message: EstimateSellBackingInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.sellbackFee !== undefined) {
      Coin.encode(message.sellbackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSellBackingInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSellBackingInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.sellbackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingInResponse {
    return {
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
      sellbackFee: isSet(object.sellbackFee) ? Coin.fromJSON(object.sellbackFee) : undefined,
    };
  },

  toJSON(message: EstimateSellBackingInResponse): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn ? Coin.toJSON(message.backingIn) : undefined);
    message.sellbackFee !== undefined &&
      (obj.sellbackFee = message.sellbackFee ? Coin.toJSON(message.sellbackFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateSellBackingInResponse>, I>>(
    object: I,
  ): EstimateSellBackingInResponse {
    const message = createBaseEstimateSellBackingInResponse();
    message.backingIn =
      object.backingIn !== undefined && object.backingIn !== null
        ? Coin.fromPartial(object.backingIn)
        : undefined;
    message.sellbackFee =
      object.sellbackFee !== undefined && object.sellbackFee !== null
        ? Coin.fromPartial(object.sellbackFee)
        : undefined;
    return message;
  },
};

function createBaseEstimateSellBackingOutRequest(): EstimateSellBackingOutRequest {
  return { backingIn: undefined };
}

export const EstimateSellBackingOutRequest = {
  encode(message: EstimateSellBackingOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSellBackingOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSellBackingOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingOutRequest {
    return {
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
    };
  },

  toJSON(message: EstimateSellBackingOutRequest): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn ? Coin.toJSON(message.backingIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateSellBackingOutRequest>, I>>(
    object: I,
  ): EstimateSellBackingOutRequest {
    const message = createBaseEstimateSellBackingOutRequest();
    message.backingIn =
      object.backingIn !== undefined && object.backingIn !== null
        ? Coin.fromPartial(object.backingIn)
        : undefined;
    return message;
  },
};

function createBaseEstimateSellBackingOutResponse(): EstimateSellBackingOutResponse {
  return { furyOut: undefined, sellbackFee: undefined };
}

export const EstimateSellBackingOutResponse = {
  encode(message: EstimateSellBackingOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.furyOut !== undefined) {
      Coin.encode(message.furyOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.sellbackFee !== undefined) {
      Coin.encode(message.sellbackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSellBackingOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSellBackingOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.furyOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.sellbackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingOutResponse {
    return {
      furyOut: isSet(object.furyOut) ? Coin.fromJSON(object.furyOut) : undefined,
      sellbackFee: isSet(object.sellbackFee) ? Coin.fromJSON(object.sellbackFee) : undefined,
    };
  },

  toJSON(message: EstimateSellBackingOutResponse): unknown {
    const obj: any = {};
    message.furyOut !== undefined &&
      (obj.furyOut = message.furyOut ? Coin.toJSON(message.furyOut) : undefined);
    message.sellbackFee !== undefined &&
      (obj.sellbackFee = message.sellbackFee ? Coin.toJSON(message.sellbackFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateSellBackingOutResponse>, I>>(
    object: I,
  ): EstimateSellBackingOutResponse {
    const message = createBaseEstimateSellBackingOutResponse();
    message.furyOut =
      object.furyOut !== undefined && object.furyOut !== null ? Coin.fromPartial(object.furyOut) : undefined;
    message.sellbackFee =
      object.sellbackFee !== undefined && object.sellbackFee !== null
        ? Coin.fromPartial(object.sellbackFee)
        : undefined;
    return message;
  },
};

/** Query defines the maker gRPC querier service. */
export interface Query {
  /** AllBackingRiskParams queries risk params of all the backing pools. */
  AllBackingRiskParams(request: QueryAllBackingRiskParamsRequest): Promise<QueryAllBackingRiskParamsResponse>;
  /** AllCollateralRiskParams queries risk params of all the collateral pools. */
  AllCollateralRiskParams(
    request: QueryAllCollateralRiskParamsRequest,
  ): Promise<QueryAllCollateralRiskParamsResponse>;
  /** AllBackingPools queries all the backing pools. */
  AllBackingPools(request: QueryAllBackingPoolsRequest): Promise<QueryAllBackingPoolsResponse>;
  /** AllCollateralPools queries all the collateral pools. */
  AllCollateralPools(request: QueryAllCollateralPoolsRequest): Promise<QueryAllCollateralPoolsResponse>;
  /** BackingPool queries a backing pool. */
  BackingPool(request: QueryBackingPoolRequest): Promise<QueryBackingPoolResponse>;
  /** CollateralPool queries a collateral pool. */
  CollateralPool(request: QueryCollateralPoolRequest): Promise<QueryCollateralPoolResponse>;
  /** CollateralOfAccount queries the collateral of an account. */
  CollateralOfAccount(request: QueryCollateralOfAccountRequest): Promise<QueryCollateralOfAccountResponse>;
  /** TotalBacking queries the total backing. */
  TotalBacking(request: QueryTotalBackingRequest): Promise<QueryTotalBackingResponse>;
  /** TotalCollateral queries the total collateral. */
  TotalCollateral(request: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponse>;
  /** BackingRatio queries the backing ratio. */
  BackingRatio(request: QueryBackingRatioRequest): Promise<QueryBackingRatioResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EstimateMintBySwapIn estimates input of minting by swap. */
  EstimateMintBySwapIn(request: EstimateMintBySwapInRequest): Promise<EstimateMintBySwapInResponse>;
  /** EstimateMintBySwapOut estimates output of minting by swap. */
  EstimateMintBySwapOut(request: EstimateMintBySwapOutRequest): Promise<EstimateMintBySwapOutResponse>;
  /** EstimateBurnBySwapIn estimates input of burning by swap. */
  EstimateBurnBySwapIn(request: EstimateBurnBySwapInRequest): Promise<EstimateBurnBySwapInResponse>;
  /** EstimateBurnBySwapOut estimates output of burning by swap. */
  EstimateBurnBySwapOut(request: EstimateBurnBySwapOutRequest): Promise<EstimateBurnBySwapOutResponse>;
  /** EstimateBuyBackingIn estimates inpput of buying backing assets. */
  EstimateBuyBackingIn(request: EstimateBuyBackingInRequest): Promise<EstimateBuyBackingInResponse>;
  /** EstimateBuyBackingOut estimates output of buying backing assets. */
  EstimateBuyBackingOut(request: EstimateBuyBackingOutRequest): Promise<EstimateBuyBackingOutResponse>;
  /** EstimateSellBackingIn estimates input of selling backing assets. */
  EstimateSellBackingIn(request: EstimateSellBackingInRequest): Promise<EstimateSellBackingInResponse>;
  /** EstimateSellBackingOut estimates output of selling backing assets. */
  EstimateSellBackingOut(request: EstimateSellBackingOutRequest): Promise<EstimateSellBackingOutResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AllBackingRiskParams = this.AllBackingRiskParams.bind(this);
    this.AllCollateralRiskParams = this.AllCollateralRiskParams.bind(this);
    this.AllBackingPools = this.AllBackingPools.bind(this);
    this.AllCollateralPools = this.AllCollateralPools.bind(this);
    this.BackingPool = this.BackingPool.bind(this);
    this.CollateralPool = this.CollateralPool.bind(this);
    this.CollateralOfAccount = this.CollateralOfAccount.bind(this);
    this.TotalBacking = this.TotalBacking.bind(this);
    this.TotalCollateral = this.TotalCollateral.bind(this);
    this.BackingRatio = this.BackingRatio.bind(this);
    this.Params = this.Params.bind(this);
    this.EstimateMintBySwapIn = this.EstimateMintBySwapIn.bind(this);
    this.EstimateMintBySwapOut = this.EstimateMintBySwapOut.bind(this);
    this.EstimateBurnBySwapIn = this.EstimateBurnBySwapIn.bind(this);
    this.EstimateBurnBySwapOut = this.EstimateBurnBySwapOut.bind(this);
    this.EstimateBuyBackingIn = this.EstimateBuyBackingIn.bind(this);
    this.EstimateBuyBackingOut = this.EstimateBuyBackingOut.bind(this);
    this.EstimateSellBackingIn = this.EstimateSellBackingIn.bind(this);
    this.EstimateSellBackingOut = this.EstimateSellBackingOut.bind(this);
  }
  AllBackingRiskParams(
    request: QueryAllBackingRiskParamsRequest,
  ): Promise<QueryAllBackingRiskParamsResponse> {
    const data = QueryAllBackingRiskParamsRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "AllBackingRiskParams", data);
    return promise.then((data) => QueryAllBackingRiskParamsResponse.decode(new _m0.Reader(data)));
  }

  AllCollateralRiskParams(
    request: QueryAllCollateralRiskParamsRequest,
  ): Promise<QueryAllCollateralRiskParamsResponse> {
    const data = QueryAllCollateralRiskParamsRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "AllCollateralRiskParams", data);
    return promise.then((data) => QueryAllCollateralRiskParamsResponse.decode(new _m0.Reader(data)));
  }

  AllBackingPools(request: QueryAllBackingPoolsRequest): Promise<QueryAllBackingPoolsResponse> {
    const data = QueryAllBackingPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "AllBackingPools", data);
    return promise.then((data) => QueryAllBackingPoolsResponse.decode(new _m0.Reader(data)));
  }

  AllCollateralPools(request: QueryAllCollateralPoolsRequest): Promise<QueryAllCollateralPoolsResponse> {
    const data = QueryAllCollateralPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "AllCollateralPools", data);
    return promise.then((data) => QueryAllCollateralPoolsResponse.decode(new _m0.Reader(data)));
  }

  BackingPool(request: QueryBackingPoolRequest): Promise<QueryBackingPoolResponse> {
    const data = QueryBackingPoolRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "BackingPool", data);
    return promise.then((data) => QueryBackingPoolResponse.decode(new _m0.Reader(data)));
  }

  CollateralPool(request: QueryCollateralPoolRequest): Promise<QueryCollateralPoolResponse> {
    const data = QueryCollateralPoolRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "CollateralPool", data);
    return promise.then((data) => QueryCollateralPoolResponse.decode(new _m0.Reader(data)));
  }

  CollateralOfAccount(request: QueryCollateralOfAccountRequest): Promise<QueryCollateralOfAccountResponse> {
    const data = QueryCollateralOfAccountRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "CollateralOfAccount", data);
    return promise.then((data) => QueryCollateralOfAccountResponse.decode(new _m0.Reader(data)));
  }

  TotalBacking(request: QueryTotalBackingRequest): Promise<QueryTotalBackingResponse> {
    const data = QueryTotalBackingRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "TotalBacking", data);
    return promise.then((data) => QueryTotalBackingResponse.decode(new _m0.Reader(data)));
  }

  TotalCollateral(request: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponse> {
    const data = QueryTotalCollateralRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "TotalCollateral", data);
    return promise.then((data) => QueryTotalCollateralResponse.decode(new _m0.Reader(data)));
  }

  BackingRatio(request: QueryBackingRatioRequest): Promise<QueryBackingRatioResponse> {
    const data = QueryBackingRatioRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "BackingRatio", data);
    return promise.then((data) => QueryBackingRatioResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  EstimateMintBySwapIn(request: EstimateMintBySwapInRequest): Promise<EstimateMintBySwapInResponse> {
    const data = EstimateMintBySwapInRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "EstimateMintBySwapIn", data);
    return promise.then((data) => EstimateMintBySwapInResponse.decode(new _m0.Reader(data)));
  }

  EstimateMintBySwapOut(request: EstimateMintBySwapOutRequest): Promise<EstimateMintBySwapOutResponse> {
    const data = EstimateMintBySwapOutRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "EstimateMintBySwapOut", data);
    return promise.then((data) => EstimateMintBySwapOutResponse.decode(new _m0.Reader(data)));
  }

  EstimateBurnBySwapIn(request: EstimateBurnBySwapInRequest): Promise<EstimateBurnBySwapInResponse> {
    const data = EstimateBurnBySwapInRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "EstimateBurnBySwapIn", data);
    return promise.then((data) => EstimateBurnBySwapInResponse.decode(new _m0.Reader(data)));
  }

  EstimateBurnBySwapOut(request: EstimateBurnBySwapOutRequest): Promise<EstimateBurnBySwapOutResponse> {
    const data = EstimateBurnBySwapOutRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "EstimateBurnBySwapOut", data);
    return promise.then((data) => EstimateBurnBySwapOutResponse.decode(new _m0.Reader(data)));
  }

  EstimateBuyBackingIn(request: EstimateBuyBackingInRequest): Promise<EstimateBuyBackingInResponse> {
    const data = EstimateBuyBackingInRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "EstimateBuyBackingIn", data);
    return promise.then((data) => EstimateBuyBackingInResponse.decode(new _m0.Reader(data)));
  }

  EstimateBuyBackingOut(request: EstimateBuyBackingOutRequest): Promise<EstimateBuyBackingOutResponse> {
    const data = EstimateBuyBackingOutRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "EstimateBuyBackingOut", data);
    return promise.then((data) => EstimateBuyBackingOutResponse.decode(new _m0.Reader(data)));
  }

  EstimateSellBackingIn(request: EstimateSellBackingInRequest): Promise<EstimateSellBackingInResponse> {
    const data = EstimateSellBackingInRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "EstimateSellBackingIn", data);
    return promise.then((data) => EstimateSellBackingInResponse.decode(new _m0.Reader(data)));
  }

  EstimateSellBackingOut(request: EstimateSellBackingOutRequest): Promise<EstimateSellBackingOutResponse> {
    const data = EstimateSellBackingOutRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Query", "EstimateSellBackingOut", data);
    return promise.then((data) => EstimateSellBackingOutResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
