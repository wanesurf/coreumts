import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse, QueryFrozenRequest, QueryFrozenResponse, QueryClassFrozenRequest, QueryClassFrozenResponse, QueryClassFrozenAccountsRequest, QueryClassFrozenAccountsResponse, QueryWhitelistedRequest, QueryWhitelistedResponse, QueryWhitelistedAccountsForNFTRequest, QueryWhitelistedAccountsForNFTResponse, QueryClassWhitelistedAccountsRequest, QueryClassWhitelistedAccountsResponse, QueryBurntNFTRequest, QueryBurntNFTResponse, QueryBurntNFTsInClassRequest, QueryBurntNFTsInClassResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/asset/nft module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Class queries the non-fungible token class of the module. */
  class(request: QueryClassRequest): Promise<QueryClassResponse>;
  /** Classes queries the non-fungible token classes of the module. */
  classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
  /** Frozen queries to check if an NFT is frozen or not. */
  frozen(request: QueryFrozenRequest): Promise<QueryFrozenResponse>;
  /** ClassFrozen queries to check if an account if frozen for an NFT class. */
  classFrozen(request: QueryClassFrozenRequest): Promise<QueryClassFrozenResponse>;
  /** QueryClassFrozenAccountsRequest returns the list of accounts which are frozen to hold NFTs in this class. */
  classFrozenAccounts(request: QueryClassFrozenAccountsRequest): Promise<QueryClassFrozenAccountsResponse>;
  /** Whitelisted queries to check if an account is whitelited to hold an NFT or not. */
  whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
  /** WhitelistedAccountsForNFT returns the list of accounts which are whitelisted to hold this NFT. */
  whitelistedAccountsForNFT(request: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponse>;
  /** ClassWhitelistedAccounts returns the list of accounts which are whitelisted to hold NFTs in this class. */
  classWhitelistedAccounts(request: QueryClassWhitelistedAccountsRequest): Promise<QueryClassWhitelistedAccountsResponse>;
  /** BurntNFTsInClass checks if an nft if is in burnt NFTs list. */
  burntNFT(request: QueryBurntNFTRequest): Promise<QueryBurntNFTResponse>;
  /** BurntNFTsInClass returns the list of burnt nfts in a class. */
  burntNFTsInClass(request: QueryBurntNFTsInClassRequest): Promise<QueryBurntNFTsInClassResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  class(request: QueryClassRequest): Promise<QueryClassResponse> {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "Class", data);
    return promise.then(data => QueryClassResponse.decode(new BinaryReader(data)));
  }
  classes(request: QueryClassesRequest): Promise<QueryClassesResponse> {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
  }
  frozen(request: QueryFrozenRequest): Promise<QueryFrozenResponse> {
    const data = QueryFrozenRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "Frozen", data);
    return promise.then(data => QueryFrozenResponse.decode(new BinaryReader(data)));
  }
  classFrozen(request: QueryClassFrozenRequest): Promise<QueryClassFrozenResponse> {
    const data = QueryClassFrozenRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "ClassFrozen", data);
    return promise.then(data => QueryClassFrozenResponse.decode(new BinaryReader(data)));
  }
  classFrozenAccounts(request: QueryClassFrozenAccountsRequest): Promise<QueryClassFrozenAccountsResponse> {
    const data = QueryClassFrozenAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "ClassFrozenAccounts", data);
    return promise.then(data => QueryClassFrozenAccountsResponse.decode(new BinaryReader(data)));
  }
  whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse> {
    const data = QueryWhitelistedRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "Whitelisted", data);
    return promise.then(data => QueryWhitelistedResponse.decode(new BinaryReader(data)));
  }
  whitelistedAccountsForNFT(request: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponse> {
    const data = QueryWhitelistedAccountsForNFTRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "WhitelistedAccountsForNFT", data);
    return promise.then(data => QueryWhitelistedAccountsForNFTResponse.decode(new BinaryReader(data)));
  }
  classWhitelistedAccounts(request: QueryClassWhitelistedAccountsRequest): Promise<QueryClassWhitelistedAccountsResponse> {
    const data = QueryClassWhitelistedAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "ClassWhitelistedAccounts", data);
    return promise.then(data => QueryClassWhitelistedAccountsResponse.decode(new BinaryReader(data)));
  }
  burntNFT(request: QueryBurntNFTRequest): Promise<QueryBurntNFTResponse> {
    const data = QueryBurntNFTRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "BurntNFT", data);
    return promise.then(data => QueryBurntNFTResponse.decode(new BinaryReader(data)));
  }
  burntNFTsInClass(request: QueryBurntNFTsInClassRequest): Promise<QueryBurntNFTsInClassResponse> {
    const data = QueryBurntNFTsInClassRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "BurntNFTsInClass", data);
    return promise.then(data => QueryBurntNFTsInClassResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    class(request: QueryClassRequest): Promise<QueryClassResponse> {
      return queryService.class(request);
    },
    classes(request: QueryClassesRequest): Promise<QueryClassesResponse> {
      return queryService.classes(request);
    },
    frozen(request: QueryFrozenRequest): Promise<QueryFrozenResponse> {
      return queryService.frozen(request);
    },
    classFrozen(request: QueryClassFrozenRequest): Promise<QueryClassFrozenResponse> {
      return queryService.classFrozen(request);
    },
    classFrozenAccounts(request: QueryClassFrozenAccountsRequest): Promise<QueryClassFrozenAccountsResponse> {
      return queryService.classFrozenAccounts(request);
    },
    whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse> {
      return queryService.whitelisted(request);
    },
    whitelistedAccountsForNFT(request: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponse> {
      return queryService.whitelistedAccountsForNFT(request);
    },
    classWhitelistedAccounts(request: QueryClassWhitelistedAccountsRequest): Promise<QueryClassWhitelistedAccountsResponse> {
      return queryService.classWhitelistedAccounts(request);
    },
    burntNFT(request: QueryBurntNFTRequest): Promise<QueryBurntNFTResponse> {
      return queryService.burntNFT(request);
    },
    burntNFTsInClass(request: QueryBurntNFTsInClassRequest): Promise<QueryBurntNFTsInClassResponse> {
      return queryService.burntNFTsInClass(request);
    }
  };
};