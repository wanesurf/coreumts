import * as _1 from "./asset/ft/v1/authz";
import * as _2 from "./asset/ft/v1/event";
import * as _3 from "./asset/ft/v1/genesis";
import * as _4 from "./asset/ft/v1/params";
import * as _5 from "./asset/ft/v1/query";
import * as _6 from "./asset/ft/v1/token";
import * as _7 from "./asset/ft/v1/tx";
import * as _8 from "./asset/nft/v1/authz";
import * as _9 from "./asset/nft/v1/event";
import * as _10 from "./asset/nft/v1/genesis";
import * as _11 from "./asset/nft/v1/nft";
import * as _12 from "./asset/nft/v1/params";
import * as _13 from "./asset/nft/v1/query";
import * as _14 from "./asset/nft/v1/tx";
import * as _15 from "./asset/nft/v1/types";
import * as _16 from "./customparams/v1/genesis";
import * as _17 from "./customparams/v1/params";
import * as _18 from "./customparams/v1/query";
import * as _19 from "./customparams/v1/tx";
import * as _20 from "./delay/v1/genesis";
import * as _21 from "./deterministicgas/v1/event";
import * as _22 from "./feemodel/v1/genesis";
import * as _23 from "./feemodel/v1/params";
import * as _24 from "./feemodel/v1/query";
import * as _25 from "./feemodel/v1/tx";
import * as _26 from "./nft/v1beta1/event";
import * as _27 from "./nft/v1beta1/genesis";
import * as _28 from "./nft/v1beta1/nft";
import * as _29 from "./nft/v1beta1/query";
import * as _30 from "./nft/v1beta1/tx";
import * as _143 from "./asset/ft/v1/tx.amino";
import * as _144 from "./asset/nft/v1/tx.amino";
import * as _145 from "./customparams/v1/tx.amino";
import * as _146 from "./feemodel/v1/tx.amino";
import * as _147 from "./nft/v1beta1/tx.amino";
import * as _148 from "./asset/ft/v1/tx.registry";
import * as _149 from "./asset/nft/v1/tx.registry";
import * as _150 from "./customparams/v1/tx.registry";
import * as _151 from "./feemodel/v1/tx.registry";
import * as _152 from "./nft/v1beta1/tx.registry";
import * as _153 from "./asset/ft/v1/query.lcd";
import * as _154 from "./asset/nft/v1/query.lcd";
import * as _155 from "./customparams/v1/query.lcd";
import * as _156 from "./feemodel/v1/query.lcd";
import * as _157 from "./nft/v1beta1/query.lcd";
import * as _158 from "./asset/ft/v1/query.rpc.Query";
import * as _159 from "./asset/nft/v1/query.rpc.Query";
import * as _160 from "./customparams/v1/query.rpc.Query";
import * as _161 from "./feemodel/v1/query.rpc.Query";
import * as _162 from "./nft/v1beta1/query.rpc.Query";
import * as _163 from "./asset/ft/v1/tx.rpc.msg";
import * as _164 from "./asset/nft/v1/tx.rpc.msg";
import * as _165 from "./customparams/v1/tx.rpc.msg";
import * as _166 from "./feemodel/v1/tx.rpc.msg";
import * as _167 from "./nft/v1beta1/tx.rpc.msg";
import * as _245 from "./lcd";
import * as _246 from "./rpc.query";
import * as _247 from "./rpc.tx";
export namespace coreum {
  export namespace asset {
    export namespace ft {
      export const v1 = {
        ..._1,
        ..._2,
        ..._3,
        ..._4,
        ..._5,
        ..._6,
        ..._7,
        ..._143,
        ..._148,
        ..._153,
        ..._158,
        ..._163
      };
    }
    export namespace nft {
      export const v1 = {
        ..._8,
        ..._9,
        ..._10,
        ..._11,
        ..._12,
        ..._13,
        ..._14,
        ..._15,
        ..._144,
        ..._149,
        ..._154,
        ..._159,
        ..._164
      };
    }
  }
  export namespace customparams {
    export const v1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._145,
      ..._150,
      ..._155,
      ..._160,
      ..._165
    };
  }
  export namespace delay {
    export const v1 = {
      ..._20
    };
  }
  export namespace deterministicgas {
    export const v1 = {
      ..._21
    };
  }
  export namespace feemodel {
    export const v1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._146,
      ..._151,
      ..._156,
      ..._161,
      ..._166
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._147,
      ..._152,
      ..._157,
      ..._162,
      ..._167
    };
  }
  export const ClientFactory = {
    ..._245,
    ..._246,
    ..._247
  };
}