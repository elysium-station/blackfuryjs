/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "blackfury.maker.v1";

/** MsgMintBySwap represents a message to mint Black stablecoins by swapping. */
export interface MsgMintBySwap {
  sender: string;
  to: string;
  backingInMax?: Coin;
  furyInMax?: Coin;
  mintOutMin?: Coin;
  fullBacking: boolean;
}

/** MsgMintBySwapResponse defines the Msg/MintBySwap response type. */
export interface MsgMintBySwapResponse {
  backingIn?: Coin;
  furyIn?: Coin;
  mintOut?: Coin;
  mintFee?: Coin;
}

/** MsgBurnBySwap represents a message to burn Black stablecoins by swapping. */
export interface MsgBurnBySwap {
  sender: string;
  to: string;
  burnIn?: Coin;
  backingOutMin?: Coin;
  furyOutMin?: Coin;
}

/** MsgBurnBySwapResponse defines the Msg/BurnBySwap response type. */
export interface MsgBurnBySwapResponse {
  backingOut?: Coin;
  furyOut?: Coin;
  burnFee?: Coin;
}

/** MsgBuyBacking represents a message to buy strong-backing assets. */
export interface MsgBuyBacking {
  sender: string;
  to: string;
  furyIn?: Coin;
  backingOutMin?: Coin;
}

/** MsgBuyBackingResponse defines the Msg/BuyBacking response type. */
export interface MsgBuyBackingResponse {
  backingOut?: Coin;
  buybackFee?: Coin;
}

/**
 * MsgSellBacking represents a message to sell strong-backing
 * assets.
 */
export interface MsgSellBacking {
  sender: string;
  to: string;
  backingIn?: Coin;
  furyOutMin?: Coin;
}

/** MsgSellBackingResponse defines the Msg/SellBacking response type. */
export interface MsgSellBackingResponse {
  furyOut?: Coin;
  rebackFee?: Coin;
}

/**
 * MsgMintByCollateral represents a message to mint Black stablecoins by locking
 * collateral.
 */
export interface MsgMintByCollateral {
  sender: string;
  to: string;
  collateralDenom: string;
  mintOut?: Coin;
}

/** MsgMintByCollateralResponse defines the Msg/MintByCollateral response type. */
export interface MsgMintByCollateralResponse {
  mintFee?: Coin;
}

/**
 * MsgBurnByCollateral represents a message to burn Black stablecoins by unlocking
 * collateral.
 */
export interface MsgBurnByCollateral {
  sender: string;
  collateralDenom: string;
  repayInMax?: Coin;
}

/** MsgBurnByCollateralResponse defines the Msg/BurnByCollateral response type. */
export interface MsgBurnByCollateralResponse {
  repayIn?: Coin;
}

/** MsgDepositCollateral represents a message to deposit collateral assets. */
export interface MsgDepositCollateral {
  sender: string;
  to: string;
  collateralIn?: Coin;
  furyIn?: Coin;
}

/** MsgDepositCollateralResponse defines the Msg/DepositCollateral response type. */
export interface MsgDepositCollateralResponse {}

/**
 * MsgRedeemCollateral represents a message to redeem collateral assets and
 * collateralized Fury coins.
 */
export interface MsgRedeemCollateral {
  sender: string;
  to: string;
  collateralOut?: Coin;
  furyOut?: Coin;
}

/** MsgRedeemCollateralResponse defines the Msg/RedeemCollateral response type. */
export interface MsgRedeemCollateralResponse {}

/** MsgLiquidateCollateral represents a message to liquidates collateral assets. */
export interface MsgLiquidateCollateral {
  sender: string;
  to: string;
  debtor: string;
  collateral?: Coin;
  repayInMax?: Coin;
}

/**
 * MsgLiquidateCollateralResponse defines the Msg/LiquidateCollateral response
 * type.
 */
export interface MsgLiquidateCollateralResponse {
  repayIn?: Coin;
  collateralOut?: Coin;
}

function createBaseMsgMintBySwap(): MsgMintBySwap {
  return {
    sender: "",
    to: "",
    backingInMax: undefined,
    furyInMax: undefined,
    mintOutMin: undefined,
    fullBacking: false,
  };
}

export const MsgMintBySwap = {
  encode(message: MsgMintBySwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.backingInMax !== undefined) {
      Coin.encode(message.backingInMax, writer.uint32(26).fork()).ldelim();
    }
    if (message.furyInMax !== undefined) {
      Coin.encode(message.furyInMax, writer.uint32(34).fork()).ldelim();
    }
    if (message.mintOutMin !== undefined) {
      Coin.encode(message.mintOutMin, writer.uint32(42).fork()).ldelim();
    }
    if (message.fullBacking === true) {
      writer.uint32(48).bool(message.fullBacking);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBySwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBySwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.backingInMax = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.furyInMax = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.mintOutMin = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.fullBacking = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintBySwap {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      backingInMax: isSet(object.backingInMax) ? Coin.fromJSON(object.backingInMax) : undefined,
      furyInMax: isSet(object.furyInMax) ? Coin.fromJSON(object.furyInMax) : undefined,
      mintOutMin: isSet(object.mintOutMin) ? Coin.fromJSON(object.mintOutMin) : undefined,
      fullBacking: isSet(object.fullBacking) ? Boolean(object.fullBacking) : false,
    };
  },

  toJSON(message: MsgMintBySwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.backingInMax !== undefined &&
      (obj.backingInMax = message.backingInMax ? Coin.toJSON(message.backingInMax) : undefined);
    message.furyInMax !== undefined &&
      (obj.furyInMax = message.furyInMax ? Coin.toJSON(message.furyInMax) : undefined);
    message.mintOutMin !== undefined &&
      (obj.mintOutMin = message.mintOutMin ? Coin.toJSON(message.mintOutMin) : undefined);
    message.fullBacking !== undefined && (obj.fullBacking = message.fullBacking);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintBySwap>, I>>(object: I): MsgMintBySwap {
    const message = createBaseMsgMintBySwap();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.backingInMax =
      object.backingInMax !== undefined && object.backingInMax !== null
        ? Coin.fromPartial(object.backingInMax)
        : undefined;
    message.furyInMax =
      object.furyInMax !== undefined && object.furyInMax !== null
        ? Coin.fromPartial(object.furyInMax)
        : undefined;
    message.mintOutMin =
      object.mintOutMin !== undefined && object.mintOutMin !== null
        ? Coin.fromPartial(object.mintOutMin)
        : undefined;
    message.fullBacking = object.fullBacking ?? false;
    return message;
  },
};

function createBaseMsgMintBySwapResponse(): MsgMintBySwapResponse {
  return { backingIn: undefined, furyIn: undefined, mintOut: undefined, mintFee: undefined };
}

export const MsgMintBySwapResponse = {
  encode(message: MsgMintBySwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBySwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBySwapResponse();
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

  fromJSON(object: any): MsgMintBySwapResponse {
    return {
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
      furyIn: isSet(object.furyIn) ? Coin.fromJSON(object.furyIn) : undefined,
      mintOut: isSet(object.mintOut) ? Coin.fromJSON(object.mintOut) : undefined,
      mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined,
    };
  },

  toJSON(message: MsgMintBySwapResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MsgMintBySwapResponse>, I>>(object: I): MsgMintBySwapResponse {
    const message = createBaseMsgMintBySwapResponse();
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

function createBaseMsgBurnBySwap(): MsgBurnBySwap {
  return { sender: "", to: "", burnIn: undefined, backingOutMin: undefined, furyOutMin: undefined };
}

export const MsgBurnBySwap = {
  encode(message: MsgBurnBySwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.burnIn !== undefined) {
      Coin.encode(message.burnIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.backingOutMin !== undefined) {
      Coin.encode(message.backingOutMin, writer.uint32(34).fork()).ldelim();
    }
    if (message.furyOutMin !== undefined) {
      Coin.encode(message.furyOutMin, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnBySwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnBySwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.burnIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.backingOutMin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.furyOutMin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnBySwap {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      burnIn: isSet(object.burnIn) ? Coin.fromJSON(object.burnIn) : undefined,
      backingOutMin: isSet(object.backingOutMin) ? Coin.fromJSON(object.backingOutMin) : undefined,
      furyOutMin: isSet(object.furyOutMin) ? Coin.fromJSON(object.furyOutMin) : undefined,
    };
  },

  toJSON(message: MsgBurnBySwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.burnIn !== undefined && (obj.burnIn = message.burnIn ? Coin.toJSON(message.burnIn) : undefined);
    message.backingOutMin !== undefined &&
      (obj.backingOutMin = message.backingOutMin ? Coin.toJSON(message.backingOutMin) : undefined);
    message.furyOutMin !== undefined &&
      (obj.furyOutMin = message.furyOutMin ? Coin.toJSON(message.furyOutMin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnBySwap>, I>>(object: I): MsgBurnBySwap {
    const message = createBaseMsgBurnBySwap();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.burnIn =
      object.burnIn !== undefined && object.burnIn !== null ? Coin.fromPartial(object.burnIn) : undefined;
    message.backingOutMin =
      object.backingOutMin !== undefined && object.backingOutMin !== null
        ? Coin.fromPartial(object.backingOutMin)
        : undefined;
    message.furyOutMin =
      object.furyOutMin !== undefined && object.furyOutMin !== null
        ? Coin.fromPartial(object.furyOutMin)
        : undefined;
    return message;
  },
};

function createBaseMsgBurnBySwapResponse(): MsgBurnBySwapResponse {
  return { backingOut: undefined, furyOut: undefined, burnFee: undefined };
}

export const MsgBurnBySwapResponse = {
  encode(message: MsgBurnBySwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnBySwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnBySwapResponse();
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

  fromJSON(object: any): MsgBurnBySwapResponse {
    return {
      backingOut: isSet(object.backingOut) ? Coin.fromJSON(object.backingOut) : undefined,
      furyOut: isSet(object.furyOut) ? Coin.fromJSON(object.furyOut) : undefined,
      burnFee: isSet(object.burnFee) ? Coin.fromJSON(object.burnFee) : undefined,
    };
  },

  toJSON(message: MsgBurnBySwapResponse): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut ? Coin.toJSON(message.backingOut) : undefined);
    message.furyOut !== undefined &&
      (obj.furyOut = message.furyOut ? Coin.toJSON(message.furyOut) : undefined);
    message.burnFee !== undefined &&
      (obj.burnFee = message.burnFee ? Coin.toJSON(message.burnFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnBySwapResponse>, I>>(object: I): MsgBurnBySwapResponse {
    const message = createBaseMsgBurnBySwapResponse();
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

function createBaseMsgBuyBacking(): MsgBuyBacking {
  return { sender: "", to: "", furyIn: undefined, backingOutMin: undefined };
}

export const MsgBuyBacking = {
  encode(message: MsgBuyBacking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.furyIn !== undefined) {
      Coin.encode(message.furyIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.backingOutMin !== undefined) {
      Coin.encode(message.backingOutMin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyBacking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyBacking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.furyIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.backingOutMin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyBacking {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      furyIn: isSet(object.furyIn) ? Coin.fromJSON(object.furyIn) : undefined,
      backingOutMin: isSet(object.backingOutMin) ? Coin.fromJSON(object.backingOutMin) : undefined,
    };
  },

  toJSON(message: MsgBuyBacking): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.furyIn !== undefined && (obj.furyIn = message.furyIn ? Coin.toJSON(message.furyIn) : undefined);
    message.backingOutMin !== undefined &&
      (obj.backingOutMin = message.backingOutMin ? Coin.toJSON(message.backingOutMin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyBacking>, I>>(object: I): MsgBuyBacking {
    const message = createBaseMsgBuyBacking();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.furyIn =
      object.furyIn !== undefined && object.furyIn !== null ? Coin.fromPartial(object.furyIn) : undefined;
    message.backingOutMin =
      object.backingOutMin !== undefined && object.backingOutMin !== null
        ? Coin.fromPartial(object.backingOutMin)
        : undefined;
    return message;
  },
};

function createBaseMsgBuyBackingResponse(): MsgBuyBackingResponse {
  return { backingOut: undefined, buybackFee: undefined };
}

export const MsgBuyBackingResponse = {
  encode(message: MsgBuyBackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.buybackFee !== undefined) {
      Coin.encode(message.buybackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyBackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyBackingResponse();
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

  fromJSON(object: any): MsgBuyBackingResponse {
    return {
      backingOut: isSet(object.backingOut) ? Coin.fromJSON(object.backingOut) : undefined,
      buybackFee: isSet(object.buybackFee) ? Coin.fromJSON(object.buybackFee) : undefined,
    };
  },

  toJSON(message: MsgBuyBackingResponse): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut ? Coin.toJSON(message.backingOut) : undefined);
    message.buybackFee !== undefined &&
      (obj.buybackFee = message.buybackFee ? Coin.toJSON(message.buybackFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyBackingResponse>, I>>(object: I): MsgBuyBackingResponse {
    const message = createBaseMsgBuyBackingResponse();
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

function createBaseMsgSellBacking(): MsgSellBacking {
  return { sender: "", to: "", backingIn: undefined, furyOutMin: undefined };
}

export const MsgSellBacking = {
  encode(message: MsgSellBacking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.furyOutMin !== undefined) {
      Coin.encode(message.furyOutMin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellBacking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellBacking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.furyOutMin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellBacking {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
      furyOutMin: isSet(object.furyOutMin) ? Coin.fromJSON(object.furyOutMin) : undefined,
    };
  },

  toJSON(message: MsgSellBacking): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn ? Coin.toJSON(message.backingIn) : undefined);
    message.furyOutMin !== undefined &&
      (obj.furyOutMin = message.furyOutMin ? Coin.toJSON(message.furyOutMin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellBacking>, I>>(object: I): MsgSellBacking {
    const message = createBaseMsgSellBacking();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.backingIn =
      object.backingIn !== undefined && object.backingIn !== null
        ? Coin.fromPartial(object.backingIn)
        : undefined;
    message.furyOutMin =
      object.furyOutMin !== undefined && object.furyOutMin !== null
        ? Coin.fromPartial(object.furyOutMin)
        : undefined;
    return message;
  },
};

function createBaseMsgSellBackingResponse(): MsgSellBackingResponse {
  return { furyOut: undefined, rebackFee: undefined };
}

export const MsgSellBackingResponse = {
  encode(message: MsgSellBackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.furyOut !== undefined) {
      Coin.encode(message.furyOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.rebackFee !== undefined) {
      Coin.encode(message.rebackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellBackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellBackingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.furyOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.rebackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellBackingResponse {
    return {
      furyOut: isSet(object.furyOut) ? Coin.fromJSON(object.furyOut) : undefined,
      rebackFee: isSet(object.rebackFee) ? Coin.fromJSON(object.rebackFee) : undefined,
    };
  },

  toJSON(message: MsgSellBackingResponse): unknown {
    const obj: any = {};
    message.furyOut !== undefined &&
      (obj.furyOut = message.furyOut ? Coin.toJSON(message.furyOut) : undefined);
    message.rebackFee !== undefined &&
      (obj.rebackFee = message.rebackFee ? Coin.toJSON(message.rebackFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellBackingResponse>, I>>(object: I): MsgSellBackingResponse {
    const message = createBaseMsgSellBackingResponse();
    message.furyOut =
      object.furyOut !== undefined && object.furyOut !== null ? Coin.fromPartial(object.furyOut) : undefined;
    message.rebackFee =
      object.rebackFee !== undefined && object.rebackFee !== null
        ? Coin.fromPartial(object.rebackFee)
        : undefined;
    return message;
  },
};

function createBaseMsgMintByCollateral(): MsgMintByCollateral {
  return { sender: "", to: "", collateralDenom: "", mintOut: undefined };
}

export const MsgMintByCollateral = {
  encode(message: MsgMintByCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(26).string(message.collateralDenom);
    }
    if (message.mintOut !== undefined) {
      Coin.encode(message.mintOut, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintByCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintByCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.collateralDenom = reader.string();
          break;
        case 4:
          message.mintOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintByCollateral {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
      mintOut: isSet(object.mintOut) ? Coin.fromJSON(object.mintOut) : undefined,
    };
  },

  toJSON(message: MsgMintByCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    message.mintOut !== undefined &&
      (obj.mintOut = message.mintOut ? Coin.toJSON(message.mintOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintByCollateral>, I>>(object: I): MsgMintByCollateral {
    const message = createBaseMsgMintByCollateral();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.mintOut =
      object.mintOut !== undefined && object.mintOut !== null ? Coin.fromPartial(object.mintOut) : undefined;
    return message;
  },
};

function createBaseMsgMintByCollateralResponse(): MsgMintByCollateralResponse {
  return { mintFee: undefined };
}

export const MsgMintByCollateralResponse = {
  encode(message: MsgMintByCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintByCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintByCollateralResponse();
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

  fromJSON(object: any): MsgMintByCollateralResponse {
    return {
      mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined,
    };
  },

  toJSON(message: MsgMintByCollateralResponse): unknown {
    const obj: any = {};
    message.mintFee !== undefined &&
      (obj.mintFee = message.mintFee ? Coin.toJSON(message.mintFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintByCollateralResponse>, I>>(
    object: I,
  ): MsgMintByCollateralResponse {
    const message = createBaseMsgMintByCollateralResponse();
    message.mintFee =
      object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    return message;
  },
};

function createBaseMsgBurnByCollateral(): MsgBurnByCollateral {
  return { sender: "", collateralDenom: "", repayInMax: undefined };
}

export const MsgBurnByCollateral = {
  encode(message: MsgBurnByCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(18).string(message.collateralDenom);
    }
    if (message.repayInMax !== undefined) {
      Coin.encode(message.repayInMax, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnByCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnByCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collateralDenom = reader.string();
          break;
        case 3:
          message.repayInMax = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnByCollateral {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
      repayInMax: isSet(object.repayInMax) ? Coin.fromJSON(object.repayInMax) : undefined,
    };
  },

  toJSON(message: MsgBurnByCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    message.repayInMax !== undefined &&
      (obj.repayInMax = message.repayInMax ? Coin.toJSON(message.repayInMax) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnByCollateral>, I>>(object: I): MsgBurnByCollateral {
    const message = createBaseMsgBurnByCollateral();
    message.sender = object.sender ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.repayInMax =
      object.repayInMax !== undefined && object.repayInMax !== null
        ? Coin.fromPartial(object.repayInMax)
        : undefined;
    return message;
  },
};

function createBaseMsgBurnByCollateralResponse(): MsgBurnByCollateralResponse {
  return { repayIn: undefined };
}

export const MsgBurnByCollateralResponse = {
  encode(message: MsgBurnByCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repayIn !== undefined) {
      Coin.encode(message.repayIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnByCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnByCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repayIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnByCollateralResponse {
    return {
      repayIn: isSet(object.repayIn) ? Coin.fromJSON(object.repayIn) : undefined,
    };
  },

  toJSON(message: MsgBurnByCollateralResponse): unknown {
    const obj: any = {};
    message.repayIn !== undefined &&
      (obj.repayIn = message.repayIn ? Coin.toJSON(message.repayIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnByCollateralResponse>, I>>(
    object: I,
  ): MsgBurnByCollateralResponse {
    const message = createBaseMsgBurnByCollateralResponse();
    message.repayIn =
      object.repayIn !== undefined && object.repayIn !== null ? Coin.fromPartial(object.repayIn) : undefined;
    return message;
  },
};

function createBaseMsgDepositCollateral(): MsgDepositCollateral {
  return { sender: "", to: "", collateralIn: undefined, furyIn: undefined };
}

export const MsgDepositCollateral = {
  encode(message: MsgDepositCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateralIn !== undefined) {
      Coin.encode(message.collateralIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.furyIn !== undefined) {
      Coin.encode(message.furyIn, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.collateralIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.furyIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositCollateral {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      collateralIn: isSet(object.collateralIn) ? Coin.fromJSON(object.collateralIn) : undefined,
      furyIn: isSet(object.furyIn) ? Coin.fromJSON(object.furyIn) : undefined,
    };
  },

  toJSON(message: MsgDepositCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateralIn !== undefined &&
      (obj.collateralIn = message.collateralIn ? Coin.toJSON(message.collateralIn) : undefined);
    message.furyIn !== undefined && (obj.furyIn = message.furyIn ? Coin.toJSON(message.furyIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositCollateral>, I>>(object: I): MsgDepositCollateral {
    const message = createBaseMsgDepositCollateral();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.collateralIn =
      object.collateralIn !== undefined && object.collateralIn !== null
        ? Coin.fromPartial(object.collateralIn)
        : undefined;
    message.furyIn =
      object.furyIn !== undefined && object.furyIn !== null ? Coin.fromPartial(object.furyIn) : undefined;
    return message;
  },
};

function createBaseMsgDepositCollateralResponse(): MsgDepositCollateralResponse {
  return {};
}

export const MsgDepositCollateralResponse = {
  encode(_: MsgDepositCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositCollateralResponse();
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

  fromJSON(_: any): MsgDepositCollateralResponse {
    return {};
  },

  toJSON(_: MsgDepositCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositCollateralResponse>, I>>(
    _: I,
  ): MsgDepositCollateralResponse {
    const message = createBaseMsgDepositCollateralResponse();
    return message;
  },
};

function createBaseMsgRedeemCollateral(): MsgRedeemCollateral {
  return { sender: "", to: "", collateralOut: undefined, furyOut: undefined };
}

export const MsgRedeemCollateral = {
  encode(message: MsgRedeemCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateralOut !== undefined) {
      Coin.encode(message.collateralOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.furyOut !== undefined) {
      Coin.encode(message.furyOut, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.collateralOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.furyOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemCollateral {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      collateralOut: isSet(object.collateralOut) ? Coin.fromJSON(object.collateralOut) : undefined,
      furyOut: isSet(object.furyOut) ? Coin.fromJSON(object.furyOut) : undefined,
    };
  },

  toJSON(message: MsgRedeemCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateralOut !== undefined &&
      (obj.collateralOut = message.collateralOut ? Coin.toJSON(message.collateralOut) : undefined);
    message.furyOut !== undefined &&
      (obj.furyOut = message.furyOut ? Coin.toJSON(message.furyOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemCollateral>, I>>(object: I): MsgRedeemCollateral {
    const message = createBaseMsgRedeemCollateral();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.collateralOut =
      object.collateralOut !== undefined && object.collateralOut !== null
        ? Coin.fromPartial(object.collateralOut)
        : undefined;
    message.furyOut =
      object.furyOut !== undefined && object.furyOut !== null ? Coin.fromPartial(object.furyOut) : undefined;
    return message;
  },
};

function createBaseMsgRedeemCollateralResponse(): MsgRedeemCollateralResponse {
  return {};
}

export const MsgRedeemCollateralResponse = {
  encode(_: MsgRedeemCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemCollateralResponse();
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

  fromJSON(_: any): MsgRedeemCollateralResponse {
    return {};
  },

  toJSON(_: MsgRedeemCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemCollateralResponse>, I>>(
    _: I,
  ): MsgRedeemCollateralResponse {
    const message = createBaseMsgRedeemCollateralResponse();
    return message;
  },
};

function createBaseMsgLiquidateCollateral(): MsgLiquidateCollateral {
  return { sender: "", to: "", debtor: "", collateral: undefined, repayInMax: undefined };
}

export const MsgLiquidateCollateral = {
  encode(message: MsgLiquidateCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.debtor !== "") {
      writer.uint32(26).string(message.debtor);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.repayInMax !== undefined) {
      Coin.encode(message.repayInMax, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.debtor = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.repayInMax = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateral {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      debtor: isSet(object.debtor) ? String(object.debtor) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      repayInMax: isSet(object.repayInMax) ? Coin.fromJSON(object.repayInMax) : undefined,
    };
  },

  toJSON(message: MsgLiquidateCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    message.repayInMax !== undefined &&
      (obj.repayInMax = message.repayInMax ? Coin.toJSON(message.repayInMax) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateCollateral>, I>>(object: I): MsgLiquidateCollateral {
    const message = createBaseMsgLiquidateCollateral();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.debtor = object.debtor ?? "";
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Coin.fromPartial(object.collateral)
        : undefined;
    message.repayInMax =
      object.repayInMax !== undefined && object.repayInMax !== null
        ? Coin.fromPartial(object.repayInMax)
        : undefined;
    return message;
  },
};

function createBaseMsgLiquidateCollateralResponse(): MsgLiquidateCollateralResponse {
  return { repayIn: undefined, collateralOut: undefined };
}

export const MsgLiquidateCollateralResponse = {
  encode(message: MsgLiquidateCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repayIn !== undefined) {
      Coin.encode(message.repayIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.collateralOut !== undefined) {
      Coin.encode(message.collateralOut, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repayIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.collateralOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateralResponse {
    return {
      repayIn: isSet(object.repayIn) ? Coin.fromJSON(object.repayIn) : undefined,
      collateralOut: isSet(object.collateralOut) ? Coin.fromJSON(object.collateralOut) : undefined,
    };
  },

  toJSON(message: MsgLiquidateCollateralResponse): unknown {
    const obj: any = {};
    message.repayIn !== undefined &&
      (obj.repayIn = message.repayIn ? Coin.toJSON(message.repayIn) : undefined);
    message.collateralOut !== undefined &&
      (obj.collateralOut = message.collateralOut ? Coin.toJSON(message.collateralOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateCollateralResponse>, I>>(
    object: I,
  ): MsgLiquidateCollateralResponse {
    const message = createBaseMsgLiquidateCollateralResponse();
    message.repayIn =
      object.repayIn !== undefined && object.repayIn !== null ? Coin.fromPartial(object.repayIn) : undefined;
    message.collateralOut =
      object.collateralOut !== undefined && object.collateralOut !== null
        ? Coin.fromPartial(object.collateralOut)
        : undefined;
    return message;
  },
};

/** Msg defines the maker Msg service. */
export interface Msg {
  /**
   * MintBySwap mints Black stablecoins by swapping in strong-backing assets and
   * Fury coins.
   */
  MintBySwap(request: MsgMintBySwap): Promise<MsgMintBySwapResponse>;
  /**
   * BurnBySwap burns Black stablecoins by swapping out strong-backing assets and
   * Fury coins.
   */
  BurnBySwap(request: MsgBurnBySwap): Promise<MsgBurnBySwapResponse>;
  /** BuyBacking buys strong-backing assets by spending Fury coins. */
  BuyBacking(request: MsgBuyBacking): Promise<MsgBuyBackingResponse>;
  /**
   * SellBacking sells strong-backing assets by earning Fury
   * coins.
   */
  SellBacking(request: MsgSellBacking): Promise<MsgSellBackingResponse>;
  /**
   * MintByCollateral mints Black stablecoins by locking collateral assets and
   * spending Fury coins.
   */
  MintByCollateral(request: MsgMintByCollateral): Promise<MsgMintByCollateralResponse>;
  /**
   * BurnByCollateral burns Black stablecoins by unlocking collateral assets and
   * earning Fury coins.
   */
  BurnByCollateral(request: MsgBurnByCollateral): Promise<MsgBurnByCollateralResponse>;
  /** DepositCollateral deposits collateral assets. */
  DepositCollateral(request: MsgDepositCollateral): Promise<MsgDepositCollateralResponse>;
  /** RedeemCollateral redeems collateral assets and collateralized Fury coins. */
  RedeemCollateral(request: MsgRedeemCollateral): Promise<MsgRedeemCollateralResponse>;
  /**
   * LiquidateCollateral liquidates collateral assets which is
   * undercollateralized.
   */
  LiquidateCollateral(request: MsgLiquidateCollateral): Promise<MsgLiquidateCollateralResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MintBySwap = this.MintBySwap.bind(this);
    this.BurnBySwap = this.BurnBySwap.bind(this);
    this.BuyBacking = this.BuyBacking.bind(this);
    this.SellBacking = this.SellBacking.bind(this);
    this.MintByCollateral = this.MintByCollateral.bind(this);
    this.BurnByCollateral = this.BurnByCollateral.bind(this);
    this.DepositCollateral = this.DepositCollateral.bind(this);
    this.RedeemCollateral = this.RedeemCollateral.bind(this);
    this.LiquidateCollateral = this.LiquidateCollateral.bind(this);
  }
  MintBySwap(request: MsgMintBySwap): Promise<MsgMintBySwapResponse> {
    const data = MsgMintBySwap.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Msg", "MintBySwap", data);
    return promise.then((data) => MsgMintBySwapResponse.decode(new _m0.Reader(data)));
  }

  BurnBySwap(request: MsgBurnBySwap): Promise<MsgBurnBySwapResponse> {
    const data = MsgBurnBySwap.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Msg", "BurnBySwap", data);
    return promise.then((data) => MsgBurnBySwapResponse.decode(new _m0.Reader(data)));
  }

  BuyBacking(request: MsgBuyBacking): Promise<MsgBuyBackingResponse> {
    const data = MsgBuyBacking.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Msg", "BuyBacking", data);
    return promise.then((data) => MsgBuyBackingResponse.decode(new _m0.Reader(data)));
  }

  SellBacking(request: MsgSellBacking): Promise<MsgSellBackingResponse> {
    const data = MsgSellBacking.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Msg", "SellBacking", data);
    return promise.then((data) => MsgSellBackingResponse.decode(new _m0.Reader(data)));
  }

  MintByCollateral(request: MsgMintByCollateral): Promise<MsgMintByCollateralResponse> {
    const data = MsgMintByCollateral.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Msg", "MintByCollateral", data);
    return promise.then((data) => MsgMintByCollateralResponse.decode(new _m0.Reader(data)));
  }

  BurnByCollateral(request: MsgBurnByCollateral): Promise<MsgBurnByCollateralResponse> {
    const data = MsgBurnByCollateral.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Msg", "BurnByCollateral", data);
    return promise.then((data) => MsgBurnByCollateralResponse.decode(new _m0.Reader(data)));
  }

  DepositCollateral(request: MsgDepositCollateral): Promise<MsgDepositCollateralResponse> {
    const data = MsgDepositCollateral.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Msg", "DepositCollateral", data);
    return promise.then((data) => MsgDepositCollateralResponse.decode(new _m0.Reader(data)));
  }

  RedeemCollateral(request: MsgRedeemCollateral): Promise<MsgRedeemCollateralResponse> {
    const data = MsgRedeemCollateral.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Msg", "RedeemCollateral", data);
    return promise.then((data) => MsgRedeemCollateralResponse.decode(new _m0.Reader(data)));
  }

  LiquidateCollateral(request: MsgLiquidateCollateral): Promise<MsgLiquidateCollateralResponse> {
    const data = MsgLiquidateCollateral.encode(request).finish();
    const promise = this.rpc.request("blackfury.maker.v1.Msg", "LiquidateCollateral", data);
    return promise.then((data) => MsgLiquidateCollateralResponse.decode(new _m0.Reader(data)));
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
