#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

COSMOS_PROTO_DIR="./proto/cosmos/cosmos-sdk/proto"
THIRD_PARTY_PROTO_DIR="./proto/cosmos/cosmos-sdk/third_party/proto"
IBC_PROTO_DIR="./proto/cosmos/ibc-go/proto"
BLACKFURY_PROTO_DIR="./proto/cosmos/blackfury/proto"
BLACKFURY_THIRD_PARTY_PROTO_DIR="./proto/cosmos/blackfury/third_party/proto"
OUT_DIR="./src/proto/"

PLUGIN_PATH="$(realpath ./bin)/protoc-gen-ts_proto_yarn_2"

find ./proto/cosmos/ibc-go/ -name '*.proto' -exec sed -i -e 's/"proofs.proto"/"confio\/proofs.proto"/g' {} \;

mkdir -p "$OUT_DIR"

protoc \
  --plugin="$PLUGIN_PATH" \
  --ts_proto_yarn_2_out="$OUT_DIR" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --proto_path="$THIRD_PARTY_PROTO_DIR" \
  --proto_path="$IBC_PROTO_DIR" \
  --proto_path="$BLACKFURY_PROTO_DIR" \
  --proto_path="$BLACKFURY_THIRD_PARTY_PROTO_DIR" \
  --ts_proto_yarn_2_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "$COSMOS_PROTO_DIR/cosmos/auth/v1beta1/auth.proto" \
  "$COSMOS_PROTO_DIR/cosmos/auth/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/bank.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/abci/v1beta1/abci.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/query/v1beta1/pagination.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/v1beta1/coin.proto" \
  "$COSMOS_PROTO_DIR/cosmos/crypto/multisig/v1beta1/multisig.proto" \
  "$COSMOS_PROTO_DIR/cosmos/crypto/secp256k1/keys.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/distribution.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/staking.proto" \
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/tx/signing/v1beta1/signing.proto" \
  "$COSMOS_PROTO_DIR/cosmos/tx/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/vesting/v1beta1/vesting.proto" \
  "$COSMOS_PROTO_DIR/cosmos/msg/v1/msg.proto" \
  "$COSMOS_PROTO_DIR/cosmos/nft/v1beta1/event.proto" \
  "$COSMOS_PROTO_DIR/cosmos/nft/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/nft/v1beta1/nft.proto" \
  "$COSMOS_PROTO_DIR/cosmos/nft/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/nft/v1beta1/tx.proto" \
  "$IBC_PROTO_DIR/ibc/applications/transfer/v1/query.proto" \
  "$IBC_PROTO_DIR/ibc/applications/transfer/v1/tx.proto" \
  "$IBC_PROTO_DIR/ibc/core/channel/v1/channel.proto" \
  "$IBC_PROTO_DIR/ibc/core/channel/v1/query.proto" \
  "$IBC_PROTO_DIR/ibc/core/channel/v1/tx.proto" \
  "$IBC_PROTO_DIR/ibc/core/client/v1/client.proto" \
  "$IBC_PROTO_DIR/ibc/core/client/v1/query.proto" \
  "$IBC_PROTO_DIR/ibc/core/client/v1/tx.proto" \
  "$IBC_PROTO_DIR/ibc/core/commitment/v1/commitment.proto" \
  "$IBC_PROTO_DIR/ibc/core/connection/v1/connection.proto" \
  "$IBC_PROTO_DIR/ibc/core/connection/v1/query.proto" \
  "$IBC_PROTO_DIR/ibc/core/connection/v1/tx.proto" \
  "$IBC_PROTO_DIR/ibc/lightclients/tendermint/v1/tendermint.proto" \
  "$THIRD_PARTY_PROTO_DIR/confio/proofs.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/abci/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/crypto/keys.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/crypto/proof.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/libs/bits/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/params.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/validator.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/version/types.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/bank/v1beta1/bank.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/erc20/v1/erc20.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/erc20/v1/genesis.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/erc20/v1/query.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/erc20/v1/tx.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/gauge/v1/event.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/gauge/v1/gauge.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/gauge/v1/genesis.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/gauge/v1/query.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/gauge/v1/tx.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/maker/v1/maker.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/maker/v1/genesis.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/maker/v1/query.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/maker/v1/tx.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/oracle/v1/oracle.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/oracle/v1/genesis.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/oracle/v1/query.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/oracle/v1/tx.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/staking/v1/staking.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/staking/v1/query.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/staking/v1/tx.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/ve/v1/event.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/ve/v1/ve.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/ve/v1/genesis.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/ve/v1/query.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/ve/v1/tx.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/vesting/v1/vesting.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/vesting/v1/genesis.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/vesting/v1/query.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/vesting/v1/tx.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/voter/v1/genesis.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/voter/v1/query.proto" \
  "$BLACKFURY_PROTO_DIR/blackfury/voter/v1/tx.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/ethermint/crypto/v1/ethsecp256k1/keys.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/ethermint/evm/v1/evm.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/ethermint/evm/v1/genesis.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/ethermint/evm/v1/query.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/ethermint/evm/v1/tx.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/ethermint/feemarket/v1/feemarket.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/ethermint/feemarket/v1/genesis.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/ethermint/feemarket/v1/query.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/ethermint/types/v1/account.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/ethermint/types/v1/web3.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/gravity/v1/attestation.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/gravity/v1/batch.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/gravity/v1/ethereum_signer.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/gravity/v1/genesis.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/gravity/v1/msgs.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/gravity/v1/pool.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/gravity/v1/query.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/gravity/v1/types.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/multigravity/v1/genesis.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/multigravity/v1/msgs.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/multigravity/v1/query.proto" \
  "$BLACKFURY_THIRD_PARTY_PROTO_DIR/multigravity/v1/types.proto"

# Remove unnecessary files
rm -rf \
  src/proto/cosmos_proto/ \
  src/proto/gogoproto/ \
  src/proto/google/api/ \
  src/proto/google/protobuf/descriptor.ts
