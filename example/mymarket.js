const { Market } = require('../index');

class MyMarket extends Market {

  onFrontConnected() {
    // super.onFrontConnected(...arguments);
    let { md, user } = this.ctp;
    console.log('ReqUserLogin : %s', md.reqUserLogin(user, this.ctp.nReqId()));
  }

  onRspUserLogin(data, rsp, nReqId, bIsLast) {
    // super.onRspUserLogin(...arguments);
    console.log("SubscribeMarketData:", this.ctp.md.subscribeMarketData(['sc1911']));
  }

  onRspSubMarketData(data, rsp, nReqId, bIsLast) {
    // super.onRspSubMarketData(...arguments);
  }

  onRspUnSubMarketData(data, rsp, nReqId, bIsLast) {
    // super.onRspUnSubMarketData(...arguments);
  }

  onRtnDepthMarketData(data) {
    // super.onRtnDepthMarketData(...arguments);
  }

}

module.exports = MyMarket;


