import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";

import {
  MsgBurnByCollateral,
  MsgBurnBySwap,
  MsgBuyBacking,
  MsgDepositCollateral,
  MsgLiquidateCollateral,
  MsgMintByCollateral,
  MsgMintBySwap,
  MsgRedeemCollateral,
  MsgSellBacking,
} from "../../proto/blackfury/maker/v1/tx";

export const makerTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/blackfury.maker.v1.MsgMintBySwap", MsgMintBySwap],
  ["/blackfury.maker.v1.MsgBurnBySwap", MsgBurnBySwap],
  ["/blackfury.maker.v1.MsgBuyBacking", MsgBuyBacking],
  ["/blackfury.maker.v1.MsgSellBacking", MsgSellBacking],
  ["/blackfury.maker.v1.MsgMintByCollateral", MsgMintByCollateral],
  ["/blackfury.maker.v1.MsgBurnByCollateral", MsgBurnByCollateral],
  ["/blackfury.maker.v1.MsgDepositCollateral", MsgDepositCollateral],
  ["/blackfury.maker.v1.MsgRedeemCollateral", MsgRedeemCollateral],
  ["/blackfury.maker.v1.MsgLiquidateCollateral", MsgLiquidateCollateral],
];

export interface MsgMintBySwapEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.maker.v1.MsgMintBySwap";
  readonly value: Partial<MsgMintBySwap>;
}

export function isMsgMintBySwapEncodeObject(object: EncodeObject): object is MsgMintBySwapEncodeObject {
  return (object as MsgMintBySwapEncodeObject).typeUrl === "/blackfury.maker.v1.MsgMintBySwap";
}

export interface MsgBurnBySwapEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.maker.v1.MsgBurnBySwap";
  readonly value: Partial<MsgBurnBySwap>;
}

export function isMsgBurnBySwapEncodeObject(object: EncodeObject): object is MsgBurnBySwapEncodeObject {
  return (object as MsgBurnBySwapEncodeObject).typeUrl === "/blackfury.maker.v1.MsgBurnBySwap";
}

export interface MsgBuyBackingEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.maker.v1.MsgBuyBacking";
  readonly value: Partial<MsgBuyBacking>;
}

export function isMsgBuyBackingEncodeObject(object: EncodeObject): object is MsgBuyBackingEncodeObject {
  return (object as MsgBuyBackingEncodeObject).typeUrl === "/blackfury.maker.v1.MsgBuyBacking";
}

export interface MsgSellBackingEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.maker.v1.MsgSellBacking";
  readonly value: Partial<MsgSellBacking>;
}

export function isMsgSellBackingEncodeObject(object: EncodeObject): object is MsgSellBackingEncodeObject {
  return (object as MsgSellBackingEncodeObject).typeUrl === "/blackfury.maker.v1.MsgSellBacking";
}

export interface MsgMintByCollateralEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.maker.v1.MsgMintByCollateral";
  readonly value: Partial<MsgMintByCollateral>;
}

export function isMsgMintByCollateralEncodeObject(
  object: EncodeObject,
): object is MsgMintByCollateralEncodeObject {
  return (object as MsgMintByCollateralEncodeObject).typeUrl === "/blackfury.maker.v1.MsgMintByCollateral";
}

export interface MsgBurnByCollateralEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.maker.v1.MsgBurnByCollateral";
  readonly value: Partial<MsgBurnByCollateral>;
}

export function isMsgBurnByCollateralEncodeObject(
  object: EncodeObject,
): object is MsgBurnByCollateralEncodeObject {
  return (object as MsgBurnByCollateralEncodeObject).typeUrl === "/blackfury.maker.v1.MsgBurnByCollateral";
}

export interface MsgDepositCollateralEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.maker.v1.MsgDepositCollateral";
  readonly value: Partial<MsgDepositCollateral>;
}

export function isMsgDepositCollateralEncodeObject(
  object: EncodeObject,
): object is MsgDepositCollateralEncodeObject {
  return (object as MsgDepositCollateralEncodeObject).typeUrl === "/blackfury.maker.v1.MsgDepositCollateral";
}

export interface MsgRedeemCollateralEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.maker.v1.MsgRedeemCollateral";
  readonly value: Partial<MsgRedeemCollateral>;
}

export function isMsgRedeemCollateralEncodeObject(
  object: EncodeObject,
): object is MsgRedeemCollateralEncodeObject {
  return (object as MsgRedeemCollateralEncodeObject).typeUrl === "/blackfury.maker.v1.MsgRedeemCollateral";
}

export interface MsgLiquidateCollateralEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.maker.v1.MsgLiquidateCollateral";
  readonly value: Partial<MsgLiquidateCollateral>;
}

export function isMsgLiquidateCollateralEncodeObject(
  object: EncodeObject,
): object is MsgLiquidateCollateralEncodeObject {
  return (
    (object as MsgLiquidateCollateralEncodeObject).typeUrl === "/blackfury.maker.v1.MsgLiquidateCollateral"
  );
}
