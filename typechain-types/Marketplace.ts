/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MarketplaceInterface extends utils.Interface {
  contractName: "Marketplace";
  functions: {
    "ERC721_Interface()": FunctionFragment;
    "InterfaceId_ValidateFingerprint()": FunctionFragment;
    "acceptedToken()": FunctionFragment;
    "cancelOrder(address,uint256)": FunctionFragment;
    "createOrder(address,uint256,uint256,uint256)": FunctionFragment;
    "domainSeparator()": FunctionFragment;
    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)": FunctionFragment;
    "executeOrder(address,uint256,uint256)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getNonce(address)": FunctionFragment;
    "orderByAssetId(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerCutPerMillion()": FunctionFragment;
    "paused()": FunctionFragment;
    "publicationFeeInWei()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeExecuteOrder(address,uint256,uint256,bytes)": FunctionFragment;
    "setOwnerCutPerMillion(uint256)": FunctionFragment;
    "setPublicationFee(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ERC721_Interface",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "InterfaceId_ValidateFingerprint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptedToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "domainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeMetaTransaction",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeOrder",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values: [string]): string;
  encodeFunctionData(
    functionFragment: "orderByAssetId",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerCutPerMillion",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "publicationFeeInWei",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeExecuteOrder",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwnerCutPerMillion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPublicationFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ERC721_Interface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "InterfaceId_ValidateFingerprint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "domainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMetaTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "orderByAssetId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerCutPerMillion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publicationFeeInWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeExecuteOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOwnerCutPerMillion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPublicationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ChangedOwnerCutPerMillion(uint256)": EventFragment;
    "ChangedPublicationFee(uint256)": EventFragment;
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
    "OrderCancelled(bytes32,uint256,address,address)": EventFragment;
    "OrderCreated(bytes32,uint256,address,address,uint256,uint256)": EventFragment;
    "OrderSuccessful(bytes32,uint256,address,address,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedOwnerCutPerMillion"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedPublicationFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderSuccessful"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type ChangedOwnerCutPerMillionEvent = TypedEvent<
  [BigNumber],
  { ownerCutPerMillion: BigNumber }
>;

export type ChangedOwnerCutPerMillionEventFilter =
  TypedEventFilter<ChangedOwnerCutPerMillionEvent>;

export type ChangedPublicationFeeEvent = TypedEvent<
  [BigNumber],
  { publicationFee: BigNumber }
>;

export type ChangedPublicationFeeEventFilter =
  TypedEventFilter<ChangedPublicationFeeEvent>;

export type MetaTransactionExecutedEvent = TypedEvent<
  [string, string, string],
  { userAddress: string; relayerAddress: string; functionSignature: string }
>;

export type MetaTransactionExecutedEventFilter =
  TypedEventFilter<MetaTransactionExecutedEvent>;

export type OrderCancelledEvent = TypedEvent<
  [string, BigNumber, string, string],
  { id: string; assetId: BigNumber; seller: string; nftAddress: string }
>;

export type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;

export type OrderCreatedEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber, BigNumber],
  {
    id: string;
    assetId: BigNumber;
    seller: string;
    nftAddress: string;
    priceInWei: BigNumber;
    expiresAt: BigNumber;
  }
>;

export type OrderCreatedEventFilter = TypedEventFilter<OrderCreatedEvent>;

export type OrderSuccessfulEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber, string],
  {
    id: string;
    assetId: BigNumber;
    seller: string;
    nftAddress: string;
    totalPrice: BigNumber;
    buyer: string;
  }
>;

export type OrderSuccessfulEventFilter = TypedEventFilter<OrderSuccessfulEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface Marketplace extends BaseContract {
  contractName: "Marketplace";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ERC721_Interface(overrides?: CallOverrides): Promise<[string]>;

    "ERC721_Interface()"(overrides?: CallOverrides): Promise<[string]>;

    InterfaceId_ValidateFingerprint(
      overrides?: CallOverrides
    ): Promise<[string]>;

    "InterfaceId_ValidateFingerprint()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    acceptedToken(overrides?: CallOverrides): Promise<[string]>;

    "acceptedToken()"(overrides?: CallOverrides): Promise<[string]>;

    cancelOrder(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "cancelOrder(address,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createOrder(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createOrder(address,uint256,uint256,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    domainSeparator(overrides?: CallOverrides): Promise<[string]>;

    "domainSeparator()"(overrides?: CallOverrides): Promise<[string]>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "executeOrder(address,uint256,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getChainId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNonce(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    "getNonce(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    orderByAssetId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        id: string;
        seller: string;
        nftAddress: string;
        price: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    "orderByAssetId(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        id: string;
        seller: string;
        nftAddress: string;
        price: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<[BigNumber]>;

    "ownerCutPerMillion()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    "paused()"(overrides?: CallOverrides): Promise<[boolean]>;

    publicationFeeInWei(overrides?: CallOverrides): Promise<[BigNumber]>;

    "publicationFeeInWei()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeExecuteOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      fingerprint: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeExecuteOrder(address,uint256,uint256,bytes)"(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      fingerprint: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwnerCutPerMillion(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setOwnerCutPerMillion(uint256)"(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPublicationFee(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setPublicationFee(uint256)"(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ERC721_Interface(overrides?: CallOverrides): Promise<string>;

  "ERC721_Interface()"(overrides?: CallOverrides): Promise<string>;

  InterfaceId_ValidateFingerprint(overrides?: CallOverrides): Promise<string>;

  "InterfaceId_ValidateFingerprint()"(
    overrides?: CallOverrides
  ): Promise<string>;

  acceptedToken(overrides?: CallOverrides): Promise<string>;

  "acceptedToken()"(overrides?: CallOverrides): Promise<string>;

  cancelOrder(
    nftAddress: string,
    assetId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "cancelOrder(address,uint256)"(
    nftAddress: string,
    assetId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createOrder(
    nftAddress: string,
    assetId: BigNumberish,
    priceInWei: BigNumberish,
    expiresAt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createOrder(address,uint256,uint256,uint256)"(
    nftAddress: string,
    assetId: BigNumberish,
    priceInWei: BigNumberish,
    expiresAt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  domainSeparator(overrides?: CallOverrides): Promise<string>;

  "domainSeparator()"(overrides?: CallOverrides): Promise<string>;

  executeMetaTransaction(
    userAddress: string,
    functionSignature: BytesLike,
    sigR: BytesLike,
    sigS: BytesLike,
    sigV: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
    userAddress: string,
    functionSignature: BytesLike,
    sigR: BytesLike,
    sigS: BytesLike,
    sigV: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeOrder(
    nftAddress: string,
    assetId: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "executeOrder(address,uint256,uint256)"(
    nftAddress: string,
    assetId: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  "getChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

  getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getNonce(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  orderByAssetId(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber] & {
      id: string;
      seller: string;
      nftAddress: string;
      price: BigNumber;
      expiresAt: BigNumber;
    }
  >;

  "orderByAssetId(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber] & {
      id: string;
      seller: string;
      nftAddress: string;
      price: BigNumber;
      expiresAt: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

  "ownerCutPerMillion()"(overrides?: CallOverrides): Promise<BigNumber>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  "paused()"(overrides?: CallOverrides): Promise<boolean>;

  publicationFeeInWei(overrides?: CallOverrides): Promise<BigNumber>;

  "publicationFeeInWei()"(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeExecuteOrder(
    nftAddress: string,
    assetId: BigNumberish,
    price: BigNumberish,
    fingerprint: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeExecuteOrder(address,uint256,uint256,bytes)"(
    nftAddress: string,
    assetId: BigNumberish,
    price: BigNumberish,
    fingerprint: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwnerCutPerMillion(
    _ownerCutPerMillion: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setOwnerCutPerMillion(uint256)"(
    _ownerCutPerMillion: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPublicationFee(
    _publicationFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setPublicationFee(uint256)"(
    _publicationFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ERC721_Interface(overrides?: CallOverrides): Promise<string>;

    "ERC721_Interface()"(overrides?: CallOverrides): Promise<string>;

    InterfaceId_ValidateFingerprint(overrides?: CallOverrides): Promise<string>;

    "InterfaceId_ValidateFingerprint()"(
      overrides?: CallOverrides
    ): Promise<string>;

    acceptedToken(overrides?: CallOverrides): Promise<string>;

    "acceptedToken()"(overrides?: CallOverrides): Promise<string>;

    cancelOrder(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelOrder(address,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createOrder(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createOrder(address,uint256,uint256,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    domainSeparator(overrides?: CallOverrides): Promise<string>;

    "domainSeparator()"(overrides?: CallOverrides): Promise<string>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    executeOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "executeOrder(address,uint256,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "getChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orderByAssetId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        id: string;
        seller: string;
        nftAddress: string;
        price: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    "orderByAssetId(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        id: string;
        seller: string;
        nftAddress: string;
        price: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

    "ownerCutPerMillion()"(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    "paused()"(overrides?: CallOverrides): Promise<boolean>;

    publicationFeeInWei(overrides?: CallOverrides): Promise<BigNumber>;

    "publicationFeeInWei()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    safeExecuteOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      fingerprint: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeExecuteOrder(address,uint256,uint256,bytes)"(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      fingerprint: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwnerCutPerMillion(
      _ownerCutPerMillion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setOwnerCutPerMillion(uint256)"(
      _ownerCutPerMillion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPublicationFee(
      _publicationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPublicationFee(uint256)"(
      _publicationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ChangedOwnerCutPerMillion(uint256)"(
      ownerCutPerMillion?: null
    ): ChangedOwnerCutPerMillionEventFilter;
    ChangedOwnerCutPerMillion(
      ownerCutPerMillion?: null
    ): ChangedOwnerCutPerMillionEventFilter;

    "ChangedPublicationFee(uint256)"(
      publicationFee?: null
    ): ChangedPublicationFeeEventFilter;
    ChangedPublicationFee(
      publicationFee?: null
    ): ChangedPublicationFeeEventFilter;

    "MetaTransactionExecuted(address,address,bytes)"(
      userAddress?: null,
      relayerAddress?: null,
      functionSignature?: null
    ): MetaTransactionExecutedEventFilter;
    MetaTransactionExecuted(
      userAddress?: null,
      relayerAddress?: null,
      functionSignature?: null
    ): MetaTransactionExecutedEventFilter;

    "OrderCancelled(bytes32,uint256,address,address)"(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null
    ): OrderCancelledEventFilter;
    OrderCancelled(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null
    ): OrderCancelledEventFilter;

    "OrderCreated(bytes32,uint256,address,address,uint256,uint256)"(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      priceInWei?: null,
      expiresAt?: null
    ): OrderCreatedEventFilter;
    OrderCreated(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      priceInWei?: null,
      expiresAt?: null
    ): OrderCreatedEventFilter;

    "OrderSuccessful(bytes32,uint256,address,address,uint256,address)"(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      totalPrice?: null,
      buyer?: string | null
    ): OrderSuccessfulEventFilter;
    OrderSuccessful(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      totalPrice?: null,
      buyer?: string | null
    ): OrderSuccessfulEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    ERC721_Interface(overrides?: CallOverrides): Promise<BigNumber>;

    "ERC721_Interface()"(overrides?: CallOverrides): Promise<BigNumber>;

    InterfaceId_ValidateFingerprint(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "InterfaceId_ValidateFingerprint()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    acceptedToken(overrides?: CallOverrides): Promise<BigNumber>;

    "acceptedToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancelOrder(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "cancelOrder(address,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createOrder(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createOrder(address,uint256,uint256,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    "domainSeparator()"(overrides?: CallOverrides): Promise<BigNumber>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "executeOrder(address,uint256,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "getChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orderByAssetId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "orderByAssetId(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

    "ownerCutPerMillion()"(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;

    publicationFeeInWei(overrides?: CallOverrides): Promise<BigNumber>;

    "publicationFeeInWei()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeExecuteOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      fingerprint: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeExecuteOrder(address,uint256,uint256,bytes)"(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      fingerprint: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwnerCutPerMillion(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setOwnerCutPerMillion(uint256)"(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPublicationFee(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setPublicationFee(uint256)"(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC721_Interface(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ERC721_Interface()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    InterfaceId_ValidateFingerprint(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "InterfaceId_ValidateFingerprint()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acceptedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "acceptedToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelOrder(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "cancelOrder(address,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createOrder(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createOrder(address,uint256,uint256,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "domainSeparator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "executeOrder(address,uint256,uint256)"(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getChainId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNonce(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNonce(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orderByAssetId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "orderByAssetId(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerCutPerMillion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ownerCutPerMillion()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    publicationFeeInWei(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "publicationFeeInWei()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeExecuteOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      fingerprint: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeExecuteOrder(address,uint256,uint256,bytes)"(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      fingerprint: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwnerCutPerMillion(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setOwnerCutPerMillion(uint256)"(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPublicationFee(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setPublicationFee(uint256)"(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
