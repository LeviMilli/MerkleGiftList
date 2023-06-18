const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

let merklin = new MerkleTree(niceList)

const root = merklin.getRoot();

const name = 'Anna Stehr';
const index = niceList.findIndex(n => n === name);
const proof = merklin.getProof(index);
console.log(index, root, proof)




async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: name,
    proof: proof,
    root: root
  });
  

  console.log({ gift });
}

main();