import { AminoMsg } from "@cosmjs/amino";
import type { AminoConverters } from "@cosmjs/stargate";
import type { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

import type {
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
import { typeUrls } from "../typeurls";

export interface AminoMsgMintBySwap extends AminoMsg {
  readonly type: "blackfury/MsgMintBySwap";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly full_backing: boolean;
    readonly backing_in_max: Coin;
    readonly fury_in_max: Coin;
    readonly mint_out_min: Coin;
  };
}

export function isAminoMsgMintBySwap(msg: AminoMsg): msg is AminoMsgMintBySwap {
  return msg.type === "blackfury/MsgMintBySwap";
}

export interface AminoMsgBurnBySwap extends AminoMsg {
  readonly type: "blackfury/MsgBurnBySwap";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly burn_in: Coin;
    readonly backing_out_min: Coin;
    readonly fury_out_min: Coin;
  };
}

export function isAminoMsgBurnBySwap(msg: AminoMsg): msg is AminoMsgBurnBySwap {
  return msg.type === "blackfury/MsgBurnBySwap";
}

export interface AminoMsgBuyBacking extends AminoMsg {
  readonly type: "blackfury/MsgBuyBacking";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly fury_in: Coin;
    readonly backing_out_min: Coin;
  };
}

export function isAminoMsgBuyBacking(msg: AminoMsg): msg is AminoMsgBuyBacking {
  return msg.type === "blackfury/MsgBuyBacking";
}

export interface AminoMsgSellBacking extends AminoMsg {
  readonly type: "blackfury/MsgSellBacking";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly backing_in: Coin;
    readonly fury_out_min: Coin;
  };
}

export function isAminoMsgSellBacking(msg: AminoMsg): msg is AminoMsgSellBacking {
  return msg.type === "blackfury/MsgSellBacking";
}

export interface AminoMsgMintByCollateral extends AminoMsg {
  readonly type: "blackfury/MsgMintByCollateral";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly collateral_denom: string;
    readonly mint_out: Coin;
    readonly fury_in_max: Coin;
  };
}

export function isAminoMsgMintByCollateral(msg: AminoMsg): msg is AminoMsgMintByCollateral {
  return msg.type === "blackfury/MsgMintByCollateral";
}

export interface AminoMsgBurnByCollateral extends AminoMsg {
  readonly type: "blackfury/MsgBurnByCollateral";
  readonly value: {
    readonly sender: string;
    readonly collateral_denom: string;
    readonly repay_in_max: Coin;
  };
}

export function isAminoMsgBurnByCollateral(msg: AminoMsg): msg is AminoMsgBurnByCollateral {
  return msg.type === "blackfury/MsgBurnByCollateral";
}

export interface AminoMsgDepositCollateral extends AminoMsg {
  readonly type: "blackfury/MsgDepositCollateral";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly collateral: Coin;
  };
}

export function isAminoMsgDepositCollateral(msg: AminoMsg): msg is AminoMsgDepositCollateral {
  return msg.type === "blackfury/MsgDepositCollateral";
}

export interface AminoMsgRedeemCollateral extends AminoMsg {
  readonly type: "blackfury/MsgRedeemCollateral";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly collateral: Coin;
  };
}

export function isAminoMsgRedeemCollateral(msg: AminoMsg): msg is AminoMsgRedeemCollateral {
  return msg.type === "blackfury/MsgRedeemCollateral";
}

export interface AminoMsgLiquidateCollateral extends AminoMsg {
  readonly type: "blackfury/MsgLiquidateCollateral";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly debtor: string;
    readonly collateral: Coin;
  };
}

export function isAminoMsgLiquidateCollateral(msg: AminoMsg): msg is AminoMsgLiquidateCollateral {
  return msg.type === "blackfury/MsgLiquidateCollateral";
}

export function createMakerAminoConverters(): AminoConverters {
  return {
    [typeUrls.MsgMintBySwap]: {
      aminoType: "blackfury/MsgMintBySwap",
      toAmino: ({ sender, to, fullBacking, backingInMax, furyInMax, mintOutMin }: MsgMintBySwap) => ({
        sender,
        to,
        full_backing: fullBacking,
        backing_in_max: backingInMax,
        fury_in_max: furyInMax,
        mint_out_min: mintOutMin,
      }),
      fromAmino: ({
        sender,
        to,
        full_backing,
        backing_in_max,
        fury_in_max,
        mint_out_min,
      }: AminoMsgMintBySwap["value"]) => ({
        sender,
        to,
        fullBacking: full_backing,
        backingInMax: backing_in_max,
        furyInMax: fury_in_max,
        mintOutMin: mint_out_min,
      }),
    },
    [typeUrls.MsgBurnBySwap]: {
      aminoType: "blackfury/MsgBurnBySwap",
      toAmino: ({ sender, to, burnIn, backingOutMin, furyOutMin }: MsgBurnBySwap) => ({
        sender,
        to,
        burn_in: burnIn,
        backing_out_min: backingOutMin,
        fury_out_min: furyOutMin,
      }),
      fromAmino: ({ sender, to, burn_in, backing_out_min, fury_out_min }: AminoMsgBurnBySwap["value"]) => ({
        sender,
        to,
        burnIn: burn_in,
        backingOutMin: backing_out_min,
        furyOutMin: fury_out_min,
      }),
    },
    [typeUrls.MsgBuyBacking]: {
      aminoType: "blackfury/MsgBuyBacking",
      toAmino: ({ sender, to, furyIn, backingOutMin }: MsgBuyBacking) => ({
        sender,
        to,
        fury_in: furyIn,
        backing_out_min: backingOutMin,
      }),
      fromAmino: ({ sender, to, fury_in, backing_out_min }: AminoMsgBuyBacking["value"]) => ({
        sender,
        to,
        furyIn: fury_in,
        backingOutMin: backing_out_min,
      }),
    },
    [typeUrls.MsgSellBacking]: {
      aminoType: "blackfury/MsgSellBacking",
      toAmino: ({ sender, to, backingIn, furyOutMin }: MsgSellBacking) => ({
        sender,
        to,
        backing_in: backingIn,
        fury_out_min: furyOutMin,
      }),
      fromAmino: ({ sender, to, backing_in, fury_out_min }: AminoMsgSellBacking["value"]) => ({
        sender,
        to,
        backingIn: backing_in,
        furyOutMin: fury_out_min,
      }),
    },
    [typeUrls.MsgMintByCollateral]: {
      aminoType: "blackfury/MsgMintByCollateral",
      toAmino: ({ sender, to, collateralDenom, mintOut }: MsgMintByCollateral) => ({
        sender,
        to,
        collateral_denom: collateralDenom,
        mint_out_min: mintOut,
      }),
      fromAmino: ({
        sender,
        to,
        collateral_denom,
        mint_out,
        fury_in_max,
      }: AminoMsgMintByCollateral["value"]) => ({
        sender,
        to,
        collateralDenom: collateral_denom,
        mintOut: mint_out,
        furyInMax: fury_in_max,
      }),
    },
    [typeUrls.MsgBurnByCollateral]: {
      aminoType: "blackfury/MsgBurnByCollateral",
      toAmino: ({ sender, collateralDenom, repayInMax }: MsgBurnByCollateral) => ({
        sender,
        collateral_denom: collateralDenom,
        repay_in_max: repayInMax,
      }),
      fromAmino: ({ sender, collateral_denom, repay_in_max }: AminoMsgBurnByCollateral["value"]) => ({
        sender,
        collateralDenom: collateral_denom,
        repayInMax: repay_in_max,
      }),
    },
    [typeUrls.MsgDepositCollateral]: {
      aminoType: "blackfury/MsgDepositCollateral",
      toAmino: ({ sender, to, collateralIn, furyIn }: MsgDepositCollateral) => ({
        sender,
        to,
        collateralIn,
        furyIn,
      }),
      fromAmino: ({ sender, to, collateral }: AminoMsgDepositCollateral["value"]) => ({
        sender,
        to,
        collateral,
      }),
    },
    [typeUrls.MsgRedeemCollateral]: {
      aminoType: "blackfury/MsgRedeemCollateral",
      toAmino: ({ sender, to, collateralOut, furyOut }: MsgRedeemCollateral) => ({
        sender,
        to,
        collateralOut,
        furyOut,
      }),
      fromAmino: ({ sender, to, collateral }: AminoMsgRedeemCollateral["value"]) => ({
        sender,
        to,
        collateral,
      }),
    },
    [typeUrls.MsgLiquidateCollateral]: {
      aminoType: "blackfury/MsgLiquidateCollateral",
      toAmino: ({ sender, to, debtor, collateral }: MsgLiquidateCollateral) => ({
        sender,
        to,
        debtor,
        collateral,
      }),
      fromAmino: ({ sender, to, debtor, collateral }: AminoMsgLiquidateCollateral["value"]) => ({
        sender,
        to,
        debtor,
        collateral,
      }),
    },
  };
}
