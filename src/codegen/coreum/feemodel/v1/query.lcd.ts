import { LCDClient } from "@cosmology/lcd";
import { QueryMinGasPriceRequest, QueryMinGasPriceResponseSDKType, QueryRecommendedGasPriceRequest, QueryRecommendedGasPriceResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.minGasPrice = this.minGasPrice.bind(this);
    this.recommendedGasPrice = this.recommendedGasPrice.bind(this);
    this.params = this.params.bind(this);
  }
  /* MinGasPrice queries the current minimum gas price required by the network. */
  async minGasPrice(_params: QueryMinGasPriceRequest = {}): Promise<QueryMinGasPriceResponseSDKType> {
    const endpoint = `coreum/feemodel/v1/min_gas_price`;
    return await this.req.get<QueryMinGasPriceResponseSDKType>(endpoint);
  }
  /* RecommendedGasPrice queries the recommended gas price for the next n blocks. */
  async recommendedGasPrice(params: QueryRecommendedGasPriceRequest): Promise<QueryRecommendedGasPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.afterBlocks !== "undefined") {
      options.params.after_blocks = params.afterBlocks;
    }
    const endpoint = `coreum/feemodel/v1/recommended_gas_price`;
    return await this.req.get<QueryRecommendedGasPriceResponseSDKType>(endpoint, options);
  }
  /* Params queries the parameters of x/feemodel module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `coreum/feemodel/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}