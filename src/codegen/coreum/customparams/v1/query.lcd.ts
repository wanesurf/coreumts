import { LCDClient } from "@cosmology/lcd";
import { QueryStakingParamsRequest, QueryStakingParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.stakingParams = this.stakingParams.bind(this);
  }
  /* StakingParams queries the staking parameters of the module. */
  async stakingParams(_params: QueryStakingParamsRequest = {}): Promise<QueryStakingParamsResponseSDKType> {
    const endpoint = `coreum/customparams/v1/stakingparams`;
    return await this.req.get<QueryStakingParamsResponseSDKType>(endpoint);
  }
}