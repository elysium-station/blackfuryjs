import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";
import Long from "long";

import type { Params } from "../../proto/blackfury/ve/v1/genesis";
import { QueryClientImpl } from "../../proto/blackfury/ve/v1/query";

export interface VeExtension {
  readonly ve: {
    readonly totalVotingPower: (atTime: number, atBlock: number) => Promise<string>;
    readonly votingPower: (veId: string, atTime: number, atBlock: number) => Promise<string>;
    readonly params: () => Promise<Params>;
  };
}

export function setupVeExtension(base: QueryClient): VeExtension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryClientImpl(rpc);

  return {
    ve: {
      totalVotingPower: async (atTime: number, atBlock: number) => {
        const { power } = await queryService.TotalVotingPower({
          atTime: Long.fromNumber(atTime),
          atBlock: Long.fromNumber(atBlock),
        });
        return power;
      },
      votingPower: async (veId: string, atTime: number, atBlock: number) => {
        const { power } = await queryService.VotingPower({
          veId,
          atTime: Long.fromNumber(atTime, true),
          atBlock: Long.fromNumber(atBlock, true),
        });
        return power;
      },
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
    },
  };
}
