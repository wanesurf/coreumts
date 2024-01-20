import * as _32 from "./app/v1alpha1/config";
import * as _33 from "./app/v1alpha1/module";
import * as _34 from "./app/v1alpha1/query";
import * as _35 from "./auth/v1beta1/auth";
import * as _36 from "./auth/v1beta1/genesis";
import * as _37 from "./auth/v1beta1/query";
import * as _38 from "./authz/v1beta1/authz";
import * as _39 from "./authz/v1beta1/event";
import * as _40 from "./authz/v1beta1/genesis";
import * as _41 from "./authz/v1beta1/query";
import * as _42 from "./authz/v1beta1/tx";
import * as _43 from "./bank/v1beta1/authz";
import * as _44 from "./bank/v1beta1/bank";
import * as _45 from "./bank/v1beta1/genesis";
import * as _46 from "./bank/v1beta1/query";
import * as _47 from "./bank/v1beta1/tx";
import * as _48 from "./base/abci/v1beta1/abci";
import * as _49 from "./base/kv/v1beta1/kv";
import * as _50 from "./base/query/v1beta1/pagination";
import * as _51 from "./base/reflection/v1beta1/reflection";
import * as _52 from "./base/reflection/v2alpha1/reflection";
import * as _53 from "./base/snapshots/v1beta1/snapshot";
import * as _54 from "./base/store/v1beta1/commit_info";
import * as _55 from "./base/store/v1beta1/listening";
import * as _56 from "./base/tendermint/v1beta1/query";
import * as _57 from "./base/v1beta1/coin";
import * as _58 from "./capability/v1beta1/capability";
import * as _59 from "./capability/v1beta1/genesis";
import * as _60 from "./crisis/v1beta1/genesis";
import * as _61 from "./crisis/v1beta1/tx";
import * as _62 from "./crypto/ed25519/keys";
import * as _63 from "./crypto/hd/v1/hd";
import * as _64 from "./crypto/keyring/v1/record";
import * as _65 from "./crypto/multisig/keys";
import * as _66 from "./crypto/secp256k1/keys";
import * as _67 from "./crypto/secp256r1/keys";
import * as _68 from "./distribution/v1beta1/distribution";
import * as _69 from "./distribution/v1beta1/genesis";
import * as _70 from "./distribution/v1beta1/query";
import * as _71 from "./distribution/v1beta1/tx";
import * as _72 from "./evidence/v1beta1/evidence";
import * as _73 from "./evidence/v1beta1/genesis";
import * as _74 from "./evidence/v1beta1/query";
import * as _75 from "./evidence/v1beta1/tx";
import * as _76 from "./feegrant/v1beta1/feegrant";
import * as _77 from "./feegrant/v1beta1/genesis";
import * as _78 from "./feegrant/v1beta1/query";
import * as _79 from "./feegrant/v1beta1/tx";
import * as _80 from "./genutil/v1beta1/genesis";
import * as _81 from "./gov/v1/genesis";
import * as _82 from "./gov/v1/gov";
import * as _83 from "./gov/v1/query";
import * as _84 from "./gov/v1/tx";
import * as _85 from "./gov/v1beta1/genesis";
import * as _86 from "./gov/v1beta1/gov";
import * as _87 from "./gov/v1beta1/query";
import * as _88 from "./gov/v1beta1/tx";
import * as _89 from "./group/v1/events";
import * as _90 from "./group/v1/genesis";
import * as _91 from "./group/v1/query";
import * as _92 from "./group/v1/tx";
import * as _93 from "./group/v1/types";
import * as _94 from "./mint/v1beta1/genesis";
import * as _95 from "./mint/v1beta1/mint";
import * as _96 from "./mint/v1beta1/query";
import * as _97 from "./msg/v1/msg";
import * as _98 from "./nft/v1beta1/event";
import * as _99 from "./nft/v1beta1/genesis";
import * as _100 from "./nft/v1beta1/nft";
import * as _101 from "./nft/v1beta1/query";
import * as _102 from "./nft/v1beta1/tx";
import * as _103 from "./orm/v1/orm";
import * as _104 from "./orm/v1alpha1/schema";
import * as _105 from "./params/v1beta1/params";
import * as _106 from "./params/v1beta1/query";
import * as _107 from "./slashing/v1beta1/genesis";
import * as _108 from "./slashing/v1beta1/query";
import * as _109 from "./slashing/v1beta1/slashing";
import * as _110 from "./slashing/v1beta1/tx";
import * as _111 from "./staking/v1beta1/authz";
import * as _112 from "./staking/v1beta1/genesis";
import * as _113 from "./staking/v1beta1/query";
import * as _114 from "./staking/v1beta1/staking";
import * as _115 from "./staking/v1beta1/tx";
import * as _116 from "./tx/signing/v1beta1/signing";
import * as _117 from "./tx/v1beta1/service";
import * as _118 from "./tx/v1beta1/tx";
import * as _119 from "./upgrade/v1beta1/query";
import * as _120 from "./upgrade/v1beta1/tx";
import * as _121 from "./upgrade/v1beta1/upgrade";
import * as _122 from "./vesting/v1beta1/tx";
import * as _123 from "./vesting/v1beta1/vesting";
import * as _168 from "./authz/v1beta1/tx.amino";
import * as _169 from "./bank/v1beta1/tx.amino";
import * as _170 from "./crisis/v1beta1/tx.amino";
import * as _171 from "./distribution/v1beta1/tx.amino";
import * as _172 from "./evidence/v1beta1/tx.amino";
import * as _173 from "./feegrant/v1beta1/tx.amino";
import * as _174 from "./gov/v1/tx.amino";
import * as _175 from "./gov/v1beta1/tx.amino";
import * as _176 from "./group/v1/tx.amino";
import * as _177 from "./nft/v1beta1/tx.amino";
import * as _178 from "./slashing/v1beta1/tx.amino";
import * as _179 from "./staking/v1beta1/tx.amino";
import * as _180 from "./upgrade/v1beta1/tx.amino";
import * as _181 from "./vesting/v1beta1/tx.amino";
import * as _182 from "./authz/v1beta1/tx.registry";
import * as _183 from "./bank/v1beta1/tx.registry";
import * as _184 from "./crisis/v1beta1/tx.registry";
import * as _185 from "./distribution/v1beta1/tx.registry";
import * as _186 from "./evidence/v1beta1/tx.registry";
import * as _187 from "./feegrant/v1beta1/tx.registry";
import * as _188 from "./gov/v1/tx.registry";
import * as _189 from "./gov/v1beta1/tx.registry";
import * as _190 from "./group/v1/tx.registry";
import * as _191 from "./nft/v1beta1/tx.registry";
import * as _192 from "./slashing/v1beta1/tx.registry";
import * as _193 from "./staking/v1beta1/tx.registry";
import * as _194 from "./upgrade/v1beta1/tx.registry";
import * as _195 from "./vesting/v1beta1/tx.registry";
import * as _196 from "./auth/v1beta1/query.lcd";
import * as _197 from "./authz/v1beta1/query.lcd";
import * as _198 from "./bank/v1beta1/query.lcd";
import * as _199 from "./base/tendermint/v1beta1/query.lcd";
import * as _200 from "./distribution/v1beta1/query.lcd";
import * as _201 from "./evidence/v1beta1/query.lcd";
import * as _202 from "./feegrant/v1beta1/query.lcd";
import * as _203 from "./gov/v1/query.lcd";
import * as _204 from "./gov/v1beta1/query.lcd";
import * as _205 from "./group/v1/query.lcd";
import * as _206 from "./mint/v1beta1/query.lcd";
import * as _207 from "./nft/v1beta1/query.lcd";
import * as _208 from "./params/v1beta1/query.lcd";
import * as _209 from "./slashing/v1beta1/query.lcd";
import * as _210 from "./staking/v1beta1/query.lcd";
import * as _211 from "./tx/v1beta1/service.lcd";
import * as _212 from "./upgrade/v1beta1/query.lcd";
import * as _213 from "./app/v1alpha1/query.rpc.Query";
import * as _214 from "./auth/v1beta1/query.rpc.Query";
import * as _215 from "./authz/v1beta1/query.rpc.Query";
import * as _216 from "./bank/v1beta1/query.rpc.Query";
import * as _217 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _218 from "./distribution/v1beta1/query.rpc.Query";
import * as _219 from "./evidence/v1beta1/query.rpc.Query";
import * as _220 from "./feegrant/v1beta1/query.rpc.Query";
import * as _221 from "./gov/v1/query.rpc.Query";
import * as _222 from "./gov/v1beta1/query.rpc.Query";
import * as _223 from "./group/v1/query.rpc.Query";
import * as _224 from "./mint/v1beta1/query.rpc.Query";
import * as _225 from "./nft/v1beta1/query.rpc.Query";
import * as _226 from "./params/v1beta1/query.rpc.Query";
import * as _227 from "./slashing/v1beta1/query.rpc.Query";
import * as _228 from "./staking/v1beta1/query.rpc.Query";
import * as _229 from "./tx/v1beta1/service.rpc.Service";
import * as _230 from "./upgrade/v1beta1/query.rpc.Query";
import * as _231 from "./authz/v1beta1/tx.rpc.msg";
import * as _232 from "./bank/v1beta1/tx.rpc.msg";
import * as _233 from "./crisis/v1beta1/tx.rpc.msg";
import * as _234 from "./distribution/v1beta1/tx.rpc.msg";
import * as _235 from "./evidence/v1beta1/tx.rpc.msg";
import * as _236 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _237 from "./gov/v1/tx.rpc.msg";
import * as _238 from "./gov/v1beta1/tx.rpc.msg";
import * as _239 from "./group/v1/tx.rpc.msg";
import * as _240 from "./nft/v1beta1/tx.rpc.msg";
import * as _241 from "./slashing/v1beta1/tx.rpc.msg";
import * as _242 from "./staking/v1beta1/tx.rpc.msg";
import * as _243 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _244 from "./vesting/v1beta1/tx.rpc.msg";
import * as _248 from "./lcd";
import * as _249 from "./rpc.query";
import * as _250 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._213
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._196,
      ..._214
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._168,
      ..._182,
      ..._197,
      ..._215,
      ..._231
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._169,
      ..._183,
      ..._198,
      ..._216,
      ..._232
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._48
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._49
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._50
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._51
      };
      export const v2alpha1 = {
        ..._52
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._53
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._54,
        ..._55
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._56,
        ..._199,
        ..._217
      };
    }
    export const v1beta1 = {
      ..._57
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._58,
      ..._59
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._170,
      ..._184,
      ..._233
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._62
    };
    export namespace hd {
      export const v1 = {
        ..._63
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._64
      };
    }
    export const multisig = {
      ..._65
    };
    export const secp256k1 = {
      ..._66
    };
    export const secp256r1 = {
      ..._67
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._171,
      ..._185,
      ..._200,
      ..._218,
      ..._234
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._172,
      ..._186,
      ..._201,
      ..._219,
      ..._235
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._173,
      ..._187,
      ..._202,
      ..._220,
      ..._236
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._80
    };
  }
  export namespace gov {
    export const v1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._174,
      ..._188,
      ..._203,
      ..._221,
      ..._237
    };
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._175,
      ..._189,
      ..._204,
      ..._222,
      ..._238
    };
  }
  export namespace group {
    export const v1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._176,
      ..._190,
      ..._205,
      ..._223,
      ..._239
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._206,
      ..._224
    };
  }
  export namespace msg {
    export const v1 = {
      ..._97
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._177,
      ..._191,
      ..._207,
      ..._225,
      ..._240
    };
  }
  export namespace orm {
    export const v1 = {
      ..._103
    };
    export const v1alpha1 = {
      ..._104
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._208,
      ..._226
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._178,
      ..._192,
      ..._209,
      ..._227,
      ..._241
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._179,
      ..._193,
      ..._210,
      ..._228,
      ..._242
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._116
      };
    }
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._211,
      ..._229
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._180,
      ..._194,
      ..._212,
      ..._230,
      ..._243
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._122,
      ..._123,
      ..._181,
      ..._195,
      ..._244
    };
  }
  export const ClientFactory = {
    ..._248,
    ..._249,
    ..._250
  };
}