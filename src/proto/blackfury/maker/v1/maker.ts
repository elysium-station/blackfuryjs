/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "blackfury.maker.v1";

/** BackingRiskParams represents an object of backing coin risk parameters. */
export interface BackingRiskParams {
  /** backing coin denom */
  backingDenom: string;
  /** whether enabled */
  enabled: boolean;
  /** maximum total backing amount */
  maxBacking: string;
  /** maximum mintable Black amount */
  maxBlackMint: string;
  /** mint fee rate */
  mintFee: string;
  /** burn fee rate */
  burnFee: string;
  /** buyback fee rate */
  buybackFee: string;
  /** reback fee rate */
  rebackFee: string;
}

/** CollateralRiskParams represents an object of collateral risk parameters. */
export interface CollateralRiskParams {
  /** collateral coin denom */
  collateralDenom: string;
  /** whether enabled */
  enabled: boolean;
  /** maximum total collateral amount; empty means no limit */
  maxCollateral: string;
  /** maximum total mintable Black amount; empty means no limit */
  maxBlackMint: string;
  /** ratio at which a position is defined as undercollateralized */
  liquidationThreshold: string;
  /**
   * maximum ratio of maximum amount of currency that can be borrowed with a
   * specific collateral
   */
  loanToValue: string;
  /**
   * basic ratio of maximum amount of currency that can be borrowed with a
   * specific collateral
   */
  basicLoanToValue: string;
  /**
   * catalytic ratio of collateralized Fury to asset, to maximize the LTV
   * in [basic-LTV, LTV]
   */
  catalyticFuryRatio: string;
  /**
   * liquidation fee rate, i.e., the discount a liquidator gets when buying
   * collateral flagged for a liquidation
   */
  liquidationFee: string;
  /** mint fee rate, i.e., extra fee debt */
  mintFee: string;
  /** annual interest fee rate (APR) */
  interestFee: string;
}

/**
 * RegisterBackingProposal is a gov Content type to register eligible
 * strong-backing asset with backing risk parameters.
 */
export interface RegisterBackingProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** backing risk params */
  riskParams?: BackingRiskParams;
}

/**
 * RegisterCollateralProposal is a gov Content type to register eligible
 * collateral with collateral risk parameters.
 */
export interface RegisterCollateralProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** collateral risk params */
  riskParams?: CollateralRiskParams;
}

/**
 * SetBackingRiskParamsProposal is a gov Content type to set backing coin risk
 * parameters.
 */
export interface SetBackingRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** backing risk params */
  riskParams?: BackingRiskParams;
}

/**
 * SetCollateralRiskParamsProposal is a gov Content type to set collateral risk
 * parameters.
 */
export interface SetCollateralRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** collateral risk params */
  riskParams?: CollateralRiskParams;
}

export interface BatchBackingRiskParams {
  /** batch of collateral risk params */
  riskParams: BackingRiskParams[];
}

/**
 * BatchSetBackingRiskParamsProposal is a gov Content type to batch set backing
 * coin risk parameters.
 */
export interface BatchSetBackingRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** batch of collateral risk params */
  riskParams: BackingRiskParams[];
}

export interface BatchCollateralRiskParams {
  /** batch of collateral risk params */
  riskParams: CollateralRiskParams[];
}

/**
 * BatchSetCollateralRiskParamsProposal is a gov Content type to batch set
 * collateral risk parameters.
 */
export interface BatchSetCollateralRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** batch of collateral risk params */
  riskParams: CollateralRiskParams[];
}

export interface TotalBacking {
  /** total backing value in uUSD */
  backingValue: string;
  /** total minted black; negative value means burned black */
  blackMinted?: Coin;
  /** total burned fury; negative value means minted fury */
  furyBurned?: Coin;
}

export interface PoolBacking {
  /** total minted black; negative value means burned black */
  blackMinted?: Coin;
  /** total backing */
  backing?: Coin;
  /** total burned fury; negative value means minted fury */
  furyBurned?: Coin;
}

export interface AccountBacking {}

export interface TotalCollateral {
  /**
   * total existing black debt, including minted by collateral, mint fee, last
   * interest
   */
  blackDebt?: Coin;
  /** total collateralized fury */
  furyCollateralized?: Coin;
}

export interface PoolCollateral {
  /** total collateral */
  collateral?: Coin;
  /**
   * total existing black debt, including minted by collateral, mint fee, last
   * interest
   */
  blackDebt?: Coin;
  /** total collateralized fury */
  furyCollateralized?: Coin;
}

export interface AccountCollateral {
  /** account who owns collateral */
  account: string;
  /** existing collateral */
  collateral?: Coin;
  /** remaining black debt, including minted by collateral, mint fee, last interest */
  blackDebt?: Coin;
  /** total collateralized fury */
  furyCollateralized?: Coin;
  /** remaining interest debt at last settlement */
  lastInterest?: Coin;
  /** the block of last settlement */
  lastSettlementBlock: Long;
}

function createBaseBackingRiskParams(): BackingRiskParams {
  return {
    backingDenom: "",
    enabled: false,
    maxBacking: "",
    maxBlackMint: "",
    mintFee: "",
    burnFee: "",
    buybackFee: "",
    rebackFee: "",
  };
}

export const BackingRiskParams = {
  encode(message: BackingRiskParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingDenom !== "") {
      writer.uint32(10).string(message.backingDenom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.maxBacking !== "") {
      writer.uint32(26).string(message.maxBacking);
    }
    if (message.maxBlackMint !== "") {
      writer.uint32(34).string(message.maxBlackMint);
    }
    if (message.mintFee !== "") {
      writer.uint32(42).string(message.mintFee);
    }
    if (message.burnFee !== "") {
      writer.uint32(50).string(message.burnFee);
    }
    if (message.buybackFee !== "") {
      writer.uint32(58).string(message.buybackFee);
    }
    if (message.rebackFee !== "") {
      writer.uint32(66).string(message.rebackFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackingRiskParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackingRiskParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingDenom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.maxBacking = reader.string();
          break;
        case 4:
          message.maxBlackMint = reader.string();
          break;
        case 5:
          message.mintFee = reader.string();
          break;
        case 6:
          message.burnFee = reader.string();
          break;
        case 7:
          message.buybackFee = reader.string();
          break;
        case 8:
          message.rebackFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BackingRiskParams {
    return {
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      maxBacking: isSet(object.maxBacking) ? String(object.maxBacking) : "",
      maxBlackMint: isSet(object.maxBlackMint) ? String(object.maxBlackMint) : "",
      mintFee: isSet(object.mintFee) ? String(object.mintFee) : "",
      burnFee: isSet(object.burnFee) ? String(object.burnFee) : "",
      buybackFee: isSet(object.buybackFee) ? String(object.buybackFee) : "",
      rebackFee: isSet(object.rebackFee) ? String(object.rebackFee) : "",
    };
  },

  toJSON(message: BackingRiskParams): unknown {
    const obj: any = {};
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.maxBacking !== undefined && (obj.maxBacking = message.maxBacking);
    message.maxBlackMint !== undefined && (obj.maxBlackMint = message.maxBlackMint);
    message.mintFee !== undefined && (obj.mintFee = message.mintFee);
    message.burnFee !== undefined && (obj.burnFee = message.burnFee);
    message.buybackFee !== undefined && (obj.buybackFee = message.buybackFee);
    message.rebackFee !== undefined && (obj.rebackFee = message.rebackFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BackingRiskParams>, I>>(object: I): BackingRiskParams {
    const message = createBaseBackingRiskParams();
    message.backingDenom = object.backingDenom ?? "";
    message.enabled = object.enabled ?? false;
    message.maxBacking = object.maxBacking ?? "";
    message.maxBlackMint = object.maxBlackMint ?? "";
    message.mintFee = object.mintFee ?? "";
    message.burnFee = object.burnFee ?? "";
    message.buybackFee = object.buybackFee ?? "";
    message.rebackFee = object.rebackFee ?? "";
    return message;
  },
};

function createBaseCollateralRiskParams(): CollateralRiskParams {
  return {
    collateralDenom: "",
    enabled: false,
    maxCollateral: "",
    maxBlackMint: "",
    liquidationThreshold: "",
    loanToValue: "",
    basicLoanToValue: "",
    catalyticFuryRatio: "",
    liquidationFee: "",
    mintFee: "",
    interestFee: "",
  };
}

export const CollateralRiskParams = {
  encode(message: CollateralRiskParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralDenom !== "") {
      writer.uint32(10).string(message.collateralDenom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.maxCollateral !== "") {
      writer.uint32(26).string(message.maxCollateral);
    }
    if (message.maxBlackMint !== "") {
      writer.uint32(34).string(message.maxBlackMint);
    }
    if (message.liquidationThreshold !== "") {
      writer.uint32(42).string(message.liquidationThreshold);
    }
    if (message.loanToValue !== "") {
      writer.uint32(50).string(message.loanToValue);
    }
    if (message.basicLoanToValue !== "") {
      writer.uint32(58).string(message.basicLoanToValue);
    }
    if (message.catalyticFuryRatio !== "") {
      writer.uint32(66).string(message.catalyticFuryRatio);
    }
    if (message.liquidationFee !== "") {
      writer.uint32(74).string(message.liquidationFee);
    }
    if (message.mintFee !== "") {
      writer.uint32(82).string(message.mintFee);
    }
    if (message.interestFee !== "") {
      writer.uint32(90).string(message.interestFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollateralRiskParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateralRiskParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralDenom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.maxCollateral = reader.string();
          break;
        case 4:
          message.maxBlackMint = reader.string();
          break;
        case 5:
          message.liquidationThreshold = reader.string();
          break;
        case 6:
          message.loanToValue = reader.string();
          break;
        case 7:
          message.basicLoanToValue = reader.string();
          break;
        case 8:
          message.catalyticFuryRatio = reader.string();
          break;
        case 9:
          message.liquidationFee = reader.string();
          break;
        case 10:
          message.mintFee = reader.string();
          break;
        case 11:
          message.interestFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollateralRiskParams {
    return {
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      maxCollateral: isSet(object.maxCollateral) ? String(object.maxCollateral) : "",
      maxBlackMint: isSet(object.maxBlackMint) ? String(object.maxBlackMint) : "",
      liquidationThreshold: isSet(object.liquidationThreshold) ? String(object.liquidationThreshold) : "",
      loanToValue: isSet(object.loanToValue) ? String(object.loanToValue) : "",
      basicLoanToValue: isSet(object.basicLoanToValue) ? String(object.basicLoanToValue) : "",
      catalyticFuryRatio: isSet(object.catalyticFuryRatio) ? String(object.catalyticFuryRatio) : "",
      liquidationFee: isSet(object.liquidationFee) ? String(object.liquidationFee) : "",
      mintFee: isSet(object.mintFee) ? String(object.mintFee) : "",
      interestFee: isSet(object.interestFee) ? String(object.interestFee) : "",
    };
  },

  toJSON(message: CollateralRiskParams): unknown {
    const obj: any = {};
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.maxCollateral !== undefined && (obj.maxCollateral = message.maxCollateral);
    message.maxBlackMint !== undefined && (obj.maxBlackMint = message.maxBlackMint);
    message.liquidationThreshold !== undefined && (obj.liquidationThreshold = message.liquidationThreshold);
    message.loanToValue !== undefined && (obj.loanToValue = message.loanToValue);
    message.basicLoanToValue !== undefined && (obj.basicLoanToValue = message.basicLoanToValue);
    message.catalyticFuryRatio !== undefined && (obj.catalyticFuryRatio = message.catalyticFuryRatio);
    message.liquidationFee !== undefined && (obj.liquidationFee = message.liquidationFee);
    message.mintFee !== undefined && (obj.mintFee = message.mintFee);
    message.interestFee !== undefined && (obj.interestFee = message.interestFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollateralRiskParams>, I>>(object: I): CollateralRiskParams {
    const message = createBaseCollateralRiskParams();
    message.collateralDenom = object.collateralDenom ?? "";
    message.enabled = object.enabled ?? false;
    message.maxCollateral = object.maxCollateral ?? "";
    message.maxBlackMint = object.maxBlackMint ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.loanToValue = object.loanToValue ?? "";
    message.basicLoanToValue = object.basicLoanToValue ?? "";
    message.catalyticFuryRatio = object.catalyticFuryRatio ?? "";
    message.liquidationFee = object.liquidationFee ?? "";
    message.mintFee = object.mintFee ?? "";
    message.interestFee = object.interestFee ?? "";
    return message;
  },
};

function createBaseRegisterBackingProposal(): RegisterBackingProposal {
  return { title: "", description: "", riskParams: undefined };
}

export const RegisterBackingProposal = {
  encode(message: RegisterBackingProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.riskParams !== undefined) {
      BackingRiskParams.encode(message.riskParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterBackingProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterBackingProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.riskParams = BackingRiskParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterBackingProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      riskParams: isSet(object.riskParams) ? BackingRiskParams.fromJSON(object.riskParams) : undefined,
    };
  },

  toJSON(message: RegisterBackingProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.riskParams !== undefined &&
      (obj.riskParams = message.riskParams ? BackingRiskParams.toJSON(message.riskParams) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterBackingProposal>, I>>(object: I): RegisterBackingProposal {
    const message = createBaseRegisterBackingProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.riskParams =
      object.riskParams !== undefined && object.riskParams !== null
        ? BackingRiskParams.fromPartial(object.riskParams)
        : undefined;
    return message;
  },
};

function createBaseRegisterCollateralProposal(): RegisterCollateralProposal {
  return { title: "", description: "", riskParams: undefined };
}

export const RegisterCollateralProposal = {
  encode(message: RegisterCollateralProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.riskParams !== undefined) {
      CollateralRiskParams.encode(message.riskParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterCollateralProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterCollateralProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.riskParams = CollateralRiskParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterCollateralProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      riskParams: isSet(object.riskParams) ? CollateralRiskParams.fromJSON(object.riskParams) : undefined,
    };
  },

  toJSON(message: RegisterCollateralProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.riskParams !== undefined &&
      (obj.riskParams = message.riskParams ? CollateralRiskParams.toJSON(message.riskParams) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterCollateralProposal>, I>>(
    object: I,
  ): RegisterCollateralProposal {
    const message = createBaseRegisterCollateralProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.riskParams =
      object.riskParams !== undefined && object.riskParams !== null
        ? CollateralRiskParams.fromPartial(object.riskParams)
        : undefined;
    return message;
  },
};

function createBaseSetBackingRiskParamsProposal(): SetBackingRiskParamsProposal {
  return { title: "", description: "", riskParams: undefined };
}

export const SetBackingRiskParamsProposal = {
  encode(message: SetBackingRiskParamsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.riskParams !== undefined) {
      BackingRiskParams.encode(message.riskParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetBackingRiskParamsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetBackingRiskParamsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.riskParams = BackingRiskParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetBackingRiskParamsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      riskParams: isSet(object.riskParams) ? BackingRiskParams.fromJSON(object.riskParams) : undefined,
    };
  },

  toJSON(message: SetBackingRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.riskParams !== undefined &&
      (obj.riskParams = message.riskParams ? BackingRiskParams.toJSON(message.riskParams) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetBackingRiskParamsProposal>, I>>(
    object: I,
  ): SetBackingRiskParamsProposal {
    const message = createBaseSetBackingRiskParamsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.riskParams =
      object.riskParams !== undefined && object.riskParams !== null
        ? BackingRiskParams.fromPartial(object.riskParams)
        : undefined;
    return message;
  },
};

function createBaseSetCollateralRiskParamsProposal(): SetCollateralRiskParamsProposal {
  return { title: "", description: "", riskParams: undefined };
}

export const SetCollateralRiskParamsProposal = {
  encode(message: SetCollateralRiskParamsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.riskParams !== undefined) {
      CollateralRiskParams.encode(message.riskParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCollateralRiskParamsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCollateralRiskParamsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.riskParams = CollateralRiskParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetCollateralRiskParamsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      riskParams: isSet(object.riskParams) ? CollateralRiskParams.fromJSON(object.riskParams) : undefined,
    };
  },

  toJSON(message: SetCollateralRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.riskParams !== undefined &&
      (obj.riskParams = message.riskParams ? CollateralRiskParams.toJSON(message.riskParams) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetCollateralRiskParamsProposal>, I>>(
    object: I,
  ): SetCollateralRiskParamsProposal {
    const message = createBaseSetCollateralRiskParamsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.riskParams =
      object.riskParams !== undefined && object.riskParams !== null
        ? CollateralRiskParams.fromPartial(object.riskParams)
        : undefined;
    return message;
  },
};

function createBaseBatchBackingRiskParams(): BatchBackingRiskParams {
  return { riskParams: [] };
}

export const BatchBackingRiskParams = {
  encode(message: BatchBackingRiskParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.riskParams) {
      BackingRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchBackingRiskParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchBackingRiskParams();
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

  fromJSON(object: any): BatchBackingRiskParams {
    return {
      riskParams: Array.isArray(object?.riskParams)
        ? object.riskParams.map((e: any) => BackingRiskParams.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchBackingRiskParams): unknown {
    const obj: any = {};
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) => (e ? BackingRiskParams.toJSON(e) : undefined));
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchBackingRiskParams>, I>>(object: I): BatchBackingRiskParams {
    const message = createBaseBatchBackingRiskParams();
    message.riskParams = object.riskParams?.map((e) => BackingRiskParams.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchSetBackingRiskParamsProposal(): BatchSetBackingRiskParamsProposal {
  return { title: "", description: "", riskParams: [] };
}

export const BatchSetBackingRiskParamsProposal = {
  encode(message: BatchSetBackingRiskParamsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.riskParams) {
      BackingRiskParams.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSetBackingRiskParamsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSetBackingRiskParamsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.riskParams.push(BackingRiskParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchSetBackingRiskParamsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      riskParams: Array.isArray(object?.riskParams)
        ? object.riskParams.map((e: any) => BackingRiskParams.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchSetBackingRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) => (e ? BackingRiskParams.toJSON(e) : undefined));
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchSetBackingRiskParamsProposal>, I>>(
    object: I,
  ): BatchSetBackingRiskParamsProposal {
    const message = createBaseBatchSetBackingRiskParamsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.riskParams = object.riskParams?.map((e) => BackingRiskParams.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchCollateralRiskParams(): BatchCollateralRiskParams {
  return { riskParams: [] };
}

export const BatchCollateralRiskParams = {
  encode(message: BatchCollateralRiskParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.riskParams) {
      CollateralRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchCollateralRiskParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCollateralRiskParams();
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

  fromJSON(object: any): BatchCollateralRiskParams {
    return {
      riskParams: Array.isArray(object?.riskParams)
        ? object.riskParams.map((e: any) => CollateralRiskParams.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchCollateralRiskParams): unknown {
    const obj: any = {};
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) => (e ? CollateralRiskParams.toJSON(e) : undefined));
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchCollateralRiskParams>, I>>(
    object: I,
  ): BatchCollateralRiskParams {
    const message = createBaseBatchCollateralRiskParams();
    message.riskParams = object.riskParams?.map((e) => CollateralRiskParams.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchSetCollateralRiskParamsProposal(): BatchSetCollateralRiskParamsProposal {
  return { title: "", description: "", riskParams: [] };
}

export const BatchSetCollateralRiskParamsProposal = {
  encode(
    message: BatchSetCollateralRiskParamsProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.riskParams) {
      CollateralRiskParams.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSetCollateralRiskParamsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSetCollateralRiskParamsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.riskParams.push(CollateralRiskParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchSetCollateralRiskParamsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      riskParams: Array.isArray(object?.riskParams)
        ? object.riskParams.map((e: any) => CollateralRiskParams.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchSetCollateralRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) => (e ? CollateralRiskParams.toJSON(e) : undefined));
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchSetCollateralRiskParamsProposal>, I>>(
    object: I,
  ): BatchSetCollateralRiskParamsProposal {
    const message = createBaseBatchSetCollateralRiskParamsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.riskParams = object.riskParams?.map((e) => CollateralRiskParams.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTotalBacking(): TotalBacking {
  return { backingValue: "", blackMinted: undefined, furyBurned: undefined };
}

export const TotalBacking = {
  encode(message: TotalBacking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingValue !== "") {
      writer.uint32(10).string(message.backingValue);
    }
    if (message.blackMinted !== undefined) {
      Coin.encode(message.blackMinted, writer.uint32(18).fork()).ldelim();
    }
    if (message.furyBurned !== undefined) {
      Coin.encode(message.furyBurned, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalBacking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalBacking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingValue = reader.string();
          break;
        case 2:
          message.blackMinted = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.furyBurned = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalBacking {
    return {
      backingValue: isSet(object.backingValue) ? String(object.backingValue) : "",
      blackMinted: isSet(object.blackMinted) ? Coin.fromJSON(object.blackMinted) : undefined,
      furyBurned: isSet(object.furyBurned) ? Coin.fromJSON(object.furyBurned) : undefined,
    };
  },

  toJSON(message: TotalBacking): unknown {
    const obj: any = {};
    message.backingValue !== undefined && (obj.backingValue = message.backingValue);
    message.blackMinted !== undefined &&
      (obj.blackMinted = message.blackMinted ? Coin.toJSON(message.blackMinted) : undefined);
    message.furyBurned !== undefined &&
      (obj.furyBurned = message.furyBurned ? Coin.toJSON(message.furyBurned) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TotalBacking>, I>>(object: I): TotalBacking {
    const message = createBaseTotalBacking();
    message.backingValue = object.backingValue ?? "";
    message.blackMinted =
      object.blackMinted !== undefined && object.blackMinted !== null
        ? Coin.fromPartial(object.blackMinted)
        : undefined;
    message.furyBurned =
      object.furyBurned !== undefined && object.furyBurned !== null
        ? Coin.fromPartial(object.furyBurned)
        : undefined;
    return message;
  },
};

function createBasePoolBacking(): PoolBacking {
  return { blackMinted: undefined, backing: undefined, furyBurned: undefined };
}

export const PoolBacking = {
  encode(message: PoolBacking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blackMinted !== undefined) {
      Coin.encode(message.blackMinted, writer.uint32(10).fork()).ldelim();
    }
    if (message.backing !== undefined) {
      Coin.encode(message.backing, writer.uint32(18).fork()).ldelim();
    }
    if (message.furyBurned !== undefined) {
      Coin.encode(message.furyBurned, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolBacking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolBacking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blackMinted = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backing = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.furyBurned = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolBacking {
    return {
      blackMinted: isSet(object.blackMinted) ? Coin.fromJSON(object.blackMinted) : undefined,
      backing: isSet(object.backing) ? Coin.fromJSON(object.backing) : undefined,
      furyBurned: isSet(object.furyBurned) ? Coin.fromJSON(object.furyBurned) : undefined,
    };
  },

  toJSON(message: PoolBacking): unknown {
    const obj: any = {};
    message.blackMinted !== undefined &&
      (obj.blackMinted = message.blackMinted ? Coin.toJSON(message.blackMinted) : undefined);
    message.backing !== undefined &&
      (obj.backing = message.backing ? Coin.toJSON(message.backing) : undefined);
    message.furyBurned !== undefined &&
      (obj.furyBurned = message.furyBurned ? Coin.toJSON(message.furyBurned) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolBacking>, I>>(object: I): PoolBacking {
    const message = createBasePoolBacking();
    message.blackMinted =
      object.blackMinted !== undefined && object.blackMinted !== null
        ? Coin.fromPartial(object.blackMinted)
        : undefined;
    message.backing =
      object.backing !== undefined && object.backing !== null ? Coin.fromPartial(object.backing) : undefined;
    message.furyBurned =
      object.furyBurned !== undefined && object.furyBurned !== null
        ? Coin.fromPartial(object.furyBurned)
        : undefined;
    return message;
  },
};

function createBaseAccountBacking(): AccountBacking {
  return {};
}

export const AccountBacking = {
  encode(_: AccountBacking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountBacking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountBacking();
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

  fromJSON(_: any): AccountBacking {
    return {};
  },

  toJSON(_: AccountBacking): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountBacking>, I>>(_: I): AccountBacking {
    const message = createBaseAccountBacking();
    return message;
  },
};

function createBaseTotalCollateral(): TotalCollateral {
  return { blackDebt: undefined, furyCollateralized: undefined };
}

export const TotalCollateral = {
  encode(message: TotalCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blackDebt !== undefined) {
      Coin.encode(message.blackDebt, writer.uint32(10).fork()).ldelim();
    }
    if (message.furyCollateralized !== undefined) {
      Coin.encode(message.furyCollateralized, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blackDebt = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.furyCollateralized = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalCollateral {
    return {
      blackDebt: isSet(object.blackDebt) ? Coin.fromJSON(object.blackDebt) : undefined,
      furyCollateralized: isSet(object.furyCollateralized)
        ? Coin.fromJSON(object.furyCollateralized)
        : undefined,
    };
  },

  toJSON(message: TotalCollateral): unknown {
    const obj: any = {};
    message.blackDebt !== undefined &&
      (obj.blackDebt = message.blackDebt ? Coin.toJSON(message.blackDebt) : undefined);
    message.furyCollateralized !== undefined &&
      (obj.furyCollateralized = message.furyCollateralized
        ? Coin.toJSON(message.furyCollateralized)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TotalCollateral>, I>>(object: I): TotalCollateral {
    const message = createBaseTotalCollateral();
    message.blackDebt =
      object.blackDebt !== undefined && object.blackDebt !== null
        ? Coin.fromPartial(object.blackDebt)
        : undefined;
    message.furyCollateralized =
      object.furyCollateralized !== undefined && object.furyCollateralized !== null
        ? Coin.fromPartial(object.furyCollateralized)
        : undefined;
    return message;
  },
};

function createBasePoolCollateral(): PoolCollateral {
  return { collateral: undefined, blackDebt: undefined, furyCollateralized: undefined };
}

export const PoolCollateral = {
  encode(message: PoolCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(10).fork()).ldelim();
    }
    if (message.blackDebt !== undefined) {
      Coin.encode(message.blackDebt, writer.uint32(18).fork()).ldelim();
    }
    if (message.furyCollateralized !== undefined) {
      Coin.encode(message.furyCollateralized, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.blackDebt = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.furyCollateralized = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolCollateral {
    return {
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      blackDebt: isSet(object.blackDebt) ? Coin.fromJSON(object.blackDebt) : undefined,
      furyCollateralized: isSet(object.furyCollateralized)
        ? Coin.fromJSON(object.furyCollateralized)
        : undefined,
    };
  },

  toJSON(message: PoolCollateral): unknown {
    const obj: any = {};
    message.collateral !== undefined &&
      (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    message.blackDebt !== undefined &&
      (obj.blackDebt = message.blackDebt ? Coin.toJSON(message.blackDebt) : undefined);
    message.furyCollateralized !== undefined &&
      (obj.furyCollateralized = message.furyCollateralized
        ? Coin.toJSON(message.furyCollateralized)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolCollateral>, I>>(object: I): PoolCollateral {
    const message = createBasePoolCollateral();
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Coin.fromPartial(object.collateral)
        : undefined;
    message.blackDebt =
      object.blackDebt !== undefined && object.blackDebt !== null
        ? Coin.fromPartial(object.blackDebt)
        : undefined;
    message.furyCollateralized =
      object.furyCollateralized !== undefined && object.furyCollateralized !== null
        ? Coin.fromPartial(object.furyCollateralized)
        : undefined;
    return message;
  },
};

function createBaseAccountCollateral(): AccountCollateral {
  return {
    account: "",
    collateral: undefined,
    blackDebt: undefined,
    furyCollateralized: undefined,
    lastInterest: undefined,
    lastSettlementBlock: Long.ZERO,
  };
}

export const AccountCollateral = {
  encode(message: AccountCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.blackDebt !== undefined) {
      Coin.encode(message.blackDebt, writer.uint32(26).fork()).ldelim();
    }
    if (message.furyCollateralized !== undefined) {
      Coin.encode(message.furyCollateralized, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastInterest !== undefined) {
      Coin.encode(message.lastInterest, writer.uint32(42).fork()).ldelim();
    }
    if (!message.lastSettlementBlock.isZero()) {
      writer.uint32(48).int64(message.lastSettlementBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.blackDebt = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.furyCollateralized = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.lastInterest = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.lastSettlementBlock = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountCollateral {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      blackDebt: isSet(object.blackDebt) ? Coin.fromJSON(object.blackDebt) : undefined,
      furyCollateralized: isSet(object.furyCollateralized)
        ? Coin.fromJSON(object.furyCollateralized)
        : undefined,
      lastInterest: isSet(object.lastInterest) ? Coin.fromJSON(object.lastInterest) : undefined,
      lastSettlementBlock: isSet(object.lastSettlementBlock)
        ? Long.fromValue(object.lastSettlementBlock)
        : Long.ZERO,
    };
  },

  toJSON(message: AccountCollateral): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    message.blackDebt !== undefined &&
      (obj.blackDebt = message.blackDebt ? Coin.toJSON(message.blackDebt) : undefined);
    message.furyCollateralized !== undefined &&
      (obj.furyCollateralized = message.furyCollateralized
        ? Coin.toJSON(message.furyCollateralized)
        : undefined);
    message.lastInterest !== undefined &&
      (obj.lastInterest = message.lastInterest ? Coin.toJSON(message.lastInterest) : undefined);
    message.lastSettlementBlock !== undefined &&
      (obj.lastSettlementBlock = (message.lastSettlementBlock || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountCollateral>, I>>(object: I): AccountCollateral {
    const message = createBaseAccountCollateral();
    message.account = object.account ?? "";
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Coin.fromPartial(object.collateral)
        : undefined;
    message.blackDebt =
      object.blackDebt !== undefined && object.blackDebt !== null
        ? Coin.fromPartial(object.blackDebt)
        : undefined;
    message.furyCollateralized =
      object.furyCollateralized !== undefined && object.furyCollateralized !== null
        ? Coin.fromPartial(object.furyCollateralized)
        : undefined;
    message.lastInterest =
      object.lastInterest !== undefined && object.lastInterest !== null
        ? Coin.fromPartial(object.lastInterest)
        : undefined;
    message.lastSettlementBlock =
      object.lastSettlementBlock !== undefined && object.lastSettlementBlock !== null
        ? Long.fromValue(object.lastSettlementBlock)
        : Long.ZERO;
    return message;
  },
};

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
