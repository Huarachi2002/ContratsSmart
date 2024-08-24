const Blockchain = require('./src/blockchain');
const Block = require('./src/block');

async function run() {
    const blockchain =await new Blockchain();
    const bloc1 = new Block({data: "Block #1"});
    const bloc2 = new Block({data: "Block #2"});
    const bloc3 = new Block({data: "Block #3"});

    await blockchain.addBlock(bloc1);
    await blockchain.addBlock(bloc2);
    await blockchain.addBlock(bloc3);

    blockchain.print();
}

run();