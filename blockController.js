/* ===== SHA256 with Crypto-js ===============================
|  Learn more: Crypto-js: https://github.com/brix/crypto-js  |
|  =========================================================*/
const BlockClass = require("./Block.js");
const BlockchainClass = require("./Blockchain.js");
/* ===== Blockchain Class ==========================
|  Class with a constructor for new blockchain    |
|  ================================================*/
class BlockchainController {
  /**
   * Constructor to create a new BlockController, you need to initialize here all your endpoints
   * @param {*} app
   */
  constructor(app) {
    this.app = app;
    this.chain = new BlockchainClass.Blockchain();
    this.getBlockByIndex();
    this.postNewBlock();
    this.initializeMockData();
  }

  getBlockByIndex() {
    this.app.get("/block/:index", (req, res) => {
      this.chain.getBlockHeight().then(height => {
        let count = JSON.parse(height);
        let index = req.params.index;
        if (count >= index) {
          this.chain.getBlock(index).then(block => {
            res.set(200);
            res.set("Content-Type", "text/plain");
            res.set("Data", block);
            res.set("Connection", "close");
            res.status(200).send(block);
          });
        } else {
          res.status(404).send("Block Not Found!");
        }
      });
    });
  }
  postNewBlock() {
    let self = this;
    return this.app.post("/block/:data", (req, res) => {
      // Add your code here
      let body = req.params.data;
      if (body === "") {
        res.status(415).send("Block Body is empty");
      } else {
        let newblock = new BlockClass.Block(body);
        self.chain
          .addBlock(newblock)
          .then(block => {
            res.set(200);
            res.set("Content-Type", "text/plain");
            res.set("Data", JSON.stringify(block));
            res.set("Connection", "close");
            res.status(200).send(JSON.stringify(block));
          })
          .catch(err => {
            res.status(415).send("Something went wrong");
            console.log(err);
          });
      }
    });
  }
  initializeMockData() {
    let self = this;
    return this.chain.getBlockHeight().then(height => {
      if (height === 0) {
        (function theLoop(i) {
          setTimeout(function() {
            let blockAux = new BlockClass.Block(`Test Data #${i}`);
            self.chain.addBlock(blockAux);
            i++;
            if (i < 10) theLoop(i);
          }, 10000);
        })(0);
      }
    });
  }
}
/**
 * Exporting the BlockController class
 * @param {*} app
 */
module.exports = app => {
  return new BlockchainController(app);
};
