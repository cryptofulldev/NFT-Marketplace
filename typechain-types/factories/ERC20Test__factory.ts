/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Test, ERC20TestInterface } from "../ERC20Test";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d8f38038062000d8f8339810160408190526200003491620001bf565b8151829082906200004d9060039060208501906200006e565b508051620000639060049060208401906200006e565b505050505062000279565b8280546200007c9062000226565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b600082601f83011262000125578081fd5b81516001600160401b038082111562000142576200014262000263565b6040516020601f8401601f19168201810183811183821017156200016a576200016a62000263565b604052838252858401810187101562000181578485fd5b8492505b83831015620001a4578583018101518284018201529182019162000185565b83831115620001b557848185840101525b5095945050505050565b60008060408385031215620001d2578182fd5b82516001600160401b0380821115620001e9578384fd5b620001f78683870162000114565b935060208501519150808211156200020d578283fd5b506200021c8582860162000114565b9150509250929050565b6002810460018216806200023b57607f821691505b602082108114156200025d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610b0680620002896000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806370a0823111610081578063a9059cbb1161005b578063a9059cbb14610195578063dd62ed3e146101a8578063e30443bc146101bb576100d4565b806370a082311461016757806395d89b411461017a578063a457c2d714610182576100d4565b806323b872dd116100b257806323b872dd1461012c578063313ce5671461013f5780633950935114610154576100d4565b806306fdde03146100d9578063095ea7b3146100f757806318160ddd14610117575b600080fd5b6100e16101d0565b6040516100ee91906107ef565b60405180910390f35b61010a6101053660046107bb565b610262565b6040516100ee91906107e4565b61011f61027f565b6040516100ee9190610a5a565b61010a61013a366004610780565b610285565b61014761031e565b6040516100ee9190610a63565b61010a6101623660046107bb565b610323565b61011f61017536600461072d565b610377565b6100e1610396565b61010a6101903660046107bb565b6103a5565b61010a6101a33660046107bb565b61041e565b61011f6101b636600461074e565b610432565b6101ce6101c93660046107bb565b61045d565b005b6060600380546101df90610a95565b80601f016020809104026020016040519081016040528092919081815260200182805461020b90610a95565b80156102585780601f1061022d57610100808354040283529160200191610258565b820191906000526020600020905b81548152906001019060200180831161023b57829003601f168201915b5050505050905090565b600061027661026f61046b565b848461046f565b50600192915050565b60025490565b6000610292848484610523565b6001600160a01b0384166000908152600160205260408120816102b361046b565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156102ff5760405162461bcd60e51b81526004016102f69061090d565b60405180910390fd5b6103138561030b61046b565b85840361046f565b506001949350505050565b601290565b600061027661033061046b565b84846001600061033e61046b565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103729190610a71565b61046f565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101df90610a95565b600080600160006103b461046b565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156104005760405162461bcd60e51b81526004016102f6906109de565b61041461040b61046b565b8585840361046f565b5060019392505050565b600061027661042b61046b565b8484610523565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610467828261064d565b5050565b3390565b6001600160a01b0383166104955760405162461bcd60e51b81526004016102f69061099a565b6001600160a01b0382166104bb5760405162461bcd60e51b81526004016102f690610885565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610516908590610a5a565b60405180910390a3505050565b6001600160a01b0383166105495760405162461bcd60e51b81526004016102f690610955565b6001600160a01b03821661056f5760405162461bcd60e51b81526004016102f690610842565b61057a838383610711565b6001600160a01b038316600090815260208190526040902054818110156105b35760405162461bcd60e51b81526004016102f6906108c7565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906105ea908490610a71565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106349190610a5a565b60405180910390a3610647848484610711565b50505050565b6001600160a01b0382166106735760405162461bcd60e51b81526004016102f690610a23565b61067f60008383610711565b80600260008282546106919190610a71565b90915550506001600160a01b038216600090815260208190526040812080548392906106be908490610a71565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610701908590610a5a565b60405180910390a3610467600083835b505050565b80356001600160a01b038116811461039157600080fd5b60006020828403121561073e578081fd5b61074782610716565b9392505050565b60008060408385031215610760578081fd5b61076983610716565b915061077760208401610716565b90509250929050565b600080600060608486031215610794578081fd5b61079d84610716565b92506107ab60208501610716565b9150604084013590509250925092565b600080604083850312156107cd578182fd5b6107d683610716565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b8181101561081b578581018301518582016040015282016107ff565b8181111561082c5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b60008219821115610a9057634e487b7160e01b81526011600452602481fd5b500190565b600281046001821680610aa957607f821691505b60208210811415610aca57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220bccea6f5ed557f4197e2816c079116975898bae0a431ccf2076fab24467f0fad64736f6c63430008000033";

type ERC20TestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20TestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Test__factory extends ContractFactory {
  constructor(...args: ERC20TestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Test";
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Test> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC20Test>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC20Test {
    return super.attach(address) as ERC20Test;
  }
  connect(signer: Signer): ERC20Test__factory {
    return super.connect(signer) as ERC20Test__factory;
  }
  static readonly contractName: "ERC20Test";
  public readonly contractName: "ERC20Test";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20TestInterface {
    return new utils.Interface(_abi) as ERC20TestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Test {
    return new Contract(address, _abi, signerOrProvider) as ERC20Test;
  }
}
