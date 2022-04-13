# TerraDux Virtual Land MarketPlace SmartContract

The first fully integrated & user-friendly marketplace to represent all Metaverses.

Providing users direct acess with unique search capabilities, statistical analysis, heat maps, and location identification via our 2D fully interactive maps.

## Project installation

Clone down this repository. You will need `node` and `yarn`(or You can use `npm` instead of) installed globally on your machine.

### Get the code and dependencies:

    git clone https://github.com/terradux-io/terradux-blockchain
    cd terradux-blockchain
    yarn

### Compile with:

    yarn compile

### Deploy the Contract to MainNet or TestNets with:

    yarn mainnet:deploy

The network prefix `mainnet` must match the hardhat configuration network settings (see `hardhat.config.ts`, `package.json`).

Just replace network prefix with your preferred network config name (for example `yarn rinkeby:deploy`)


### Verify the Contract with:

    yarn mainnet:verify

## Under the hood

- Solidity
- Hardhat
- TypeChain
- ethers
