export const typeUrls = {
  // bank
  MsgSend: "/cosmos.bank.v1beta1.MsgSend",
  MsgMultiSend: "/cosmos.bank.v1beta1.MsgMultiSend",
  // authz
  MsgExec: "/cosmos.authz.v1beta1.MsgExec",
  MsgGrant: "/cosmos.authz.v1beta1.MsgGrant",
  MsgRevoke: "/cosmos.authz.v1beta1.MsgRevoke",
  // distribution
  MsgFundCommunityPool: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
  MsgSetWithdrawAddress: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  MsgWithdrawDelegatorReward: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  MsgWithdrawValidatorCommission: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  // feegrant
  MsgGrantAllowance: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  MsgRevokeAllowance: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
  // gov
  MsgDeposit: "/cosmos.gov.v1beta1.MsgDeposit",
  MsgSubmitProposal: "/cosmos.gov.v1beta1.MsgSubmitProposal",
  MsgVote: "/cosmos.gov.v1beta1.MsgVote",
  // oracle
  MsgAggregateExchangeRatePrevote: "/blackfury.oracle.v1.MsgAggregateExchangeRatePrevote",
  MsgAggregateExchangeRateVote: "/blackfury.oracle.v1.MsgAggregateExchangeRateVote",
  MsgDelegateFeedConsent: "/blackfury.oracle.v1.MsgDelegateFeedConsent",
  // maker
  MsgMintBySwap: "/blackfury.maker.v1.MsgMintBySwap",
  MsgBurnBySwap: "/blackfury.maker.v1.MsgBurnBySwap",
  MsgBuyBacking: "/blackfury.maker.v1.MsgBuyBacking",
  MsgSellBacking: "/blackfury.maker.v1.MsgSellBacking",
  MsgMintByCollateral: "/blackfury.maker.v1.MsgMintByCollateral",
  MsgBurnByCollateral: "/blackfury.maker.v1.MsgBurnByCollateral",
  MsgDepositCollateral: "/blackfury.maker.v1.MsgDepositCollateral",
  MsgRedeemCollateral: "/blackfury.maker.v1.MsgRedeemCollateral",
  MsgLiquidateCollateral: "/blackfury.maker.v1.MsgLiquidateCollateral",
  // staking
  MsgBeginRedelegate: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  MsgCreateValidator: "/cosmos.staking.v1beta1.MsgCreateValidator",
  MsgDelegate: "/cosmos.staking.v1beta1.MsgDelegate",
  MsgEditValidator: "/cosmos.staking.v1beta1.MsgEditValidator",
  MsgUndelegate: "/cosmos.staking.v1beta1.MsgUndelegate",
  // vesting
  MsgCreateVestingAccount: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  // ibc
  MsgTransfer: "/ibc.applications.transfer.v1.MsgTransfer",
  MsgAcknowledgement: "/ibc.core.channel.v1.MsgAcknowledgement",
  MsgChannelCloseConfirm: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
  MsgChannelCloseInit: "/ibc.core.channel.v1.MsgChannelCloseInit",
  MsgChannelOpenAck: "/ibc.core.channel.v1.MsgChannelOpenAck",
  MsgChannelOpenConfirm: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
  MsgChannelOpenInit: "/ibc.core.channel.v1.MsgChannelOpenInit",
  MsgChannelOpenTry: "/ibc.core.channel.v1.MsgChannelOpenTry",
  MsgRecvPacket: "/ibc.core.channel.v1.MsgRecvPacket",
  MsgTimeout: "/ibc.core.channel.v1.MsgTimeout",
  MsgTimeoutOnClose: "/ibc.core.channel.v1.MsgTimeoutOnClose",
  MsgCreateClient: "/ibc.core.client.v1.MsgCreateClient",
  MsgSubmitMisbehaviour: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
  MsgUpdateClient: "/ibc.core.client.v1.MsgUpdateClient",
  MsgUpgradeClient: "/ibc.core.client.v1.MsgUpgradeClient",
  MsgConnectionOpenAck: "/ibc.core.connection.v1.MsgConnectionOpenAck",
  MsgConnectionOpenConfirm: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
  MsgConnectionOpenInit: "/ibc.core.connection.v1.MsgConnectionOpenInit",
  MsgConnectionOpenTry: "/ibc.core.connection.v1.MsgConnectionOpenTry",
  // evm
  MsgEthereumTx: "/ethermint.evm.v1.MsgEthereumTx",
  EthereumLegacyTx: "/ethermint.evm.v1.LegacyTx",
  EthereumAccessListTx: "/ethermint.evm.v1.AccessListTx",
  EthereumDynamicFeeTx: "/ethermint.evm.v1.DynamicFeeTx",
  // gravity
  MsgSetOrchestratorAddress: "/gravity.v1.MsgSetOrchestratorAddress",
  MsgSendToEth: "/multigravity.v1.MsgSendToEth",
  MsgCancelSendToEth: "/multigravity.v1.MsgCancelSendToEth",
  MsgRequestBatch: "/multigravity.v1.MsgRequestBatch",
  MsgSubmitBadSignatureEvidence: "/multigravity.v1.MsgSubmitBadSignatureEvidence",
} as const;