import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";

import {
  MsgAggregateExchangeRatePrevote,
  MsgAggregateExchangeRateVote,
  MsgDelegateFeedConsent,
} from "../../proto/blackfury/oracle/v1/tx";

export const oracleTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/blackfury.oracle.v1.MsgAggregateExchangeRatePrevote", MsgAggregateExchangeRatePrevote],
  ["/blackfury.oracle.v1.MsgAggregateExchangeRateVote", MsgAggregateExchangeRateVote],
  ["/blackfury.oracle.v1.MsgDelegateFeedConsent", MsgDelegateFeedConsent],
];

export interface MsgAggregateExchangeRatePrevoteEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.oracle.v1.MsgAggregateExchangeRatePrevote";
  readonly value: Partial<MsgAggregateExchangeRatePrevote>;
}

export function isMsgAggregateExchangeRatePrevoteEncodeObject(
  object: EncodeObject,
): object is MsgAggregateExchangeRatePrevoteEncodeObject {
  return (
    (object as MsgAggregateExchangeRatePrevoteEncodeObject).typeUrl ===
    "/blackfury.oracle.v1.MsgAggregateExchangeRatePrevote"
  );
}

export interface MsgAggregateExchangeRateVoteEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.oracle.v1.MsgAggregateExchangeRateVote";
  readonly value: Partial<MsgAggregateExchangeRateVote>;
}

export function isMsgAggregateExchangeRateVoteEncodeObject(
  object: EncodeObject,
): object is MsgAggregateExchangeRateVoteEncodeObject {
  return (
    (object as MsgAggregateExchangeRateVoteEncodeObject).typeUrl ===
    "/blackfury.oracle.v1.MsgAggregateExchangeRateVote"
  );
}

export interface MsgDelegateFeedConsentEncodeObject extends EncodeObject {
  readonly typeUrl: "/blackfury.oracle.v1.MsgDelegateFeedConsent";
  readonly value: Partial<MsgDelegateFeedConsent>;
}

export function isMsgDelegateFeedConsentEncodeObject(
  object: EncodeObject,
): object is MsgDelegateFeedConsentEncodeObject {
  return (
    (object as MsgDelegateFeedConsentEncodeObject).typeUrl === "/blackfury.oracle.v1.MsgDelegateFeedConsent"
  );
}
