import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryTokensRequest, QueryTokensResponseSDKType, QueryTokenRequest, QueryTokenResponseSDKType, QueryTokenUpgradeStatusesRequest, QueryTokenUpgradeStatusesResponseSDKType, QueryBalanceRequest, QueryBalanceResponseSDKType, QueryFrozenBalancesRequest, QueryFrozenBalancesResponseSDKType, QueryFrozenBalanceRequest, QueryFrozenBalanceResponseSDKType, QueryWhitelistedBalancesRequest, QueryWhitelistedBalancesResponseSDKType, QueryWhitelistedBalanceRequest, QueryWhitelistedBalanceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.tokens = this.tokens.bind(this);
    this.token = this.token.bind(this);
    this.tokenUpgradeStatuses = this.tokenUpgradeStatuses.bind(this);
    this.balance = this.balance.bind(this);
    this.frozenBalances = this.frozenBalances.bind(this);
    this.frozenBalance = this.frozenBalance.bind(this);
    this.whitelistedBalances = this.whitelistedBalances.bind(this);
    this.whitelistedBalance = this.whitelistedBalance.bind(this);
  }
  /* Params queries the parameters of x/asset/ft module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `coreum/asset/ft/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Tokens queries the fungible tokens of the module. */
  async tokens(params: QueryTokensRequest): Promise<QueryTokensResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.issuer !== "undefined") {
      options.params.issuer = params.issuer;
    }
    const endpoint = `coreum/asset/ft/v1/tokens`;
    return await this.req.get<QueryTokensResponseSDKType>(endpoint, options);
  }
  /* Token queries the fungible token of the module. */
  async token(params: QueryTokenRequest): Promise<QueryTokenResponseSDKType> {
    const endpoint = `coreum/asset/ft/v1/tokens/${params.denom}`;
    return await this.req.get<QueryTokenResponseSDKType>(endpoint);
  }
  /* TokenUpgradeStatuses returns token upgrades info. */
  async tokenUpgradeStatuses(params: QueryTokenUpgradeStatusesRequest): Promise<QueryTokenUpgradeStatusesResponseSDKType> {
    const endpoint = `coreum/asset/ft/v1/tokens/${params.denom}/upgrade-statuses`;
    return await this.req.get<QueryTokenUpgradeStatusesResponseSDKType>(endpoint);
  }
  /* Balance returns balance of the denom for the account. */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
    const endpoint = `coreum/asset/ft/v1/accounts/${params.account}/balances/summary/${params.denom}`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint);
  }
  /* FrozenBalances returns all the frozen balances for the account. */
  async frozenBalances(params: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `coreum/asset/ft/v1/accounts/${params.account}/balances/frozen`;
    return await this.req.get<QueryFrozenBalancesResponseSDKType>(endpoint, options);
  }
  /* FrozenBalance returns frozen balance of the denom for the account. */
  async frozenBalance(params: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponseSDKType> {
    const endpoint = `coreum/asset/ft/v1/accounts/${params.account}/balances/frozen/${params.denom}`;
    return await this.req.get<QueryFrozenBalanceResponseSDKType>(endpoint);
  }
  /* WhitelistedBalances returns all the whitelisted balances for the account. */
  async whitelistedBalances(params: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `coreum/asset/ft/v1/accounts/${params.account}/balances/whitelisted`;
    return await this.req.get<QueryWhitelistedBalancesResponseSDKType>(endpoint, options);
  }
  /* WhitelistedBalance returns whitelisted balance of the denom for the account. */
  async whitelistedBalance(params: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponseSDKType> {
    const endpoint = `coreum/asset/ft/v1/accounts/${params.account}/balances/whitelisted/${params.denom}`;
    return await this.req.get<QueryWhitelistedBalanceResponseSDKType>(endpoint);
  }
}