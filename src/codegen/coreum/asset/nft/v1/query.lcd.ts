import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryClassRequest, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesResponseSDKType, QueryFrozenRequest, QueryFrozenResponseSDKType, QueryClassFrozenRequest, QueryClassFrozenResponseSDKType, QueryClassFrozenAccountsRequest, QueryClassFrozenAccountsResponseSDKType, QueryWhitelistedRequest, QueryWhitelistedResponseSDKType, QueryWhitelistedAccountsForNFTRequest, QueryWhitelistedAccountsForNFTResponseSDKType, QueryClassWhitelistedAccountsRequest, QueryClassWhitelistedAccountsResponseSDKType, QueryBurntNFTRequest, QueryBurntNFTResponseSDKType, QueryBurntNFTsInClassRequest, QueryBurntNFTsInClassResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.class = this.class.bind(this);
    this.classes = this.classes.bind(this);
    this.frozen = this.frozen.bind(this);
    this.classFrozen = this.classFrozen.bind(this);
    this.classFrozenAccounts = this.classFrozenAccounts.bind(this);
    this.whitelisted = this.whitelisted.bind(this);
    this.whitelistedAccountsForNFT = this.whitelistedAccountsForNFT.bind(this);
    this.classWhitelistedAccounts = this.classWhitelistedAccounts.bind(this);
    this.burntNFT = this.burntNFT.bind(this);
    this.burntNFTsInClass = this.burntNFTsInClass.bind(this);
  }
  /* Params queries the parameters of x/asset/nft module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `coreum/asset/nft/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Class queries the non-fungible token class of the module. */
  async class(params: QueryClassRequest): Promise<QueryClassResponseSDKType> {
    const endpoint = `coreum/asset/nft/v1/classes/${params.id}`;
    return await this.req.get<QueryClassResponseSDKType>(endpoint);
  }
  /* Classes queries the non-fungible token classes of the module. */
  async classes(params: QueryClassesRequest): Promise<QueryClassesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.issuer !== "undefined") {
      options.params.issuer = params.issuer;
    }
    const endpoint = `coreum/asset/nft/v1/classes`;
    return await this.req.get<QueryClassesResponseSDKType>(endpoint, options);
  }
  /* Frozen queries to check if an NFT is frozen or not. */
  async frozen(params: QueryFrozenRequest): Promise<QueryFrozenResponseSDKType> {
    const endpoint = `coreum/asset/nft/v1/classes/${params.classId}/nfts/${params.id}/frozen`;
    return await this.req.get<QueryFrozenResponseSDKType>(endpoint);
  }
  /* ClassFrozen queries to check if an account if frozen for an NFT class. */
  async classFrozen(params: QueryClassFrozenRequest): Promise<QueryClassFrozenResponseSDKType> {
    const endpoint = `coreum/asset/nft/v1/classes/${params.classId}/frozen/${params.account}`;
    return await this.req.get<QueryClassFrozenResponseSDKType>(endpoint);
  }
  /* QueryClassFrozenAccountsRequest returns the list of accounts which are frozen to hold NFTs in this class. */
  async classFrozenAccounts(params: QueryClassFrozenAccountsRequest): Promise<QueryClassFrozenAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `coreum/asset/nft/v1/classes/${params.classId}/frozen`;
    return await this.req.get<QueryClassFrozenAccountsResponseSDKType>(endpoint, options);
  }
  /* Whitelisted queries to check if an account is whitelited to hold an NFT or not. */
  async whitelisted(params: QueryWhitelistedRequest): Promise<QueryWhitelistedResponseSDKType> {
    const endpoint = `coreum/asset/nft/v1/classes/${params.classId}/nfts/${params.id}/whitelisted/${params.account}`;
    return await this.req.get<QueryWhitelistedResponseSDKType>(endpoint);
  }
  /* WhitelistedAccountsForNFT returns the list of accounts which are whitelisted to hold this NFT. */
  async whitelistedAccountsForNFT(params: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `coreum/asset/nft/v1/classes/${params.classId}/nfts/${params.id}/whitelisted`;
    return await this.req.get<QueryWhitelistedAccountsForNFTResponseSDKType>(endpoint, options);
  }
  /* ClassWhitelistedAccounts returns the list of accounts which are whitelisted to hold NFTs in this class. */
  async classWhitelistedAccounts(params: QueryClassWhitelistedAccountsRequest): Promise<QueryClassWhitelistedAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `coreum/asset/nft/v1/classes/${params.classId}/whitelisted`;
    return await this.req.get<QueryClassWhitelistedAccountsResponseSDKType>(endpoint, options);
  }
  /* BurntNFTsInClass checks if an nft if is in burnt NFTs list. */
  async burntNFT(params: QueryBurntNFTRequest): Promise<QueryBurntNFTResponseSDKType> {
    const endpoint = `coreum/asset/nft/v1/classes/${params.classId}/burnt/${params.nftId}`;
    return await this.req.get<QueryBurntNFTResponseSDKType>(endpoint);
  }
  /* BurntNFTsInClass returns the list of burnt nfts in a class. */
  async burntNFTsInClass(params: QueryBurntNFTsInClassRequest): Promise<QueryBurntNFTsInClassResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `coreum/asset/nft/v1/classes/${params.classId}/burnt`;
    return await this.req.get<QueryBurntNFTsInClassResponseSDKType>(endpoint, options);
  }
}