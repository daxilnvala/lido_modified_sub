// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DepositsPaused extends ethereum.Event {
  get params(): DepositsPaused__Params {
    return new DepositsPaused__Params(this);
  }
}

export class DepositsPaused__Params {
  _event: DepositsPaused;

  constructor(event: DepositsPaused) {
    this._event = event;
  }

  get guardian(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DepositsUnpaused extends ethereum.Event {
  get params(): DepositsUnpaused__Params {
    return new DepositsUnpaused__Params(this);
  }
}

export class DepositsUnpaused__Params {
  _event: DepositsUnpaused;

  constructor(event: DepositsUnpaused) {
    this._event = event;
  }
}

export class GuardianAdded extends ethereum.Event {
  get params(): GuardianAdded__Params {
    return new GuardianAdded__Params(this);
  }
}

export class GuardianAdded__Params {
  _event: GuardianAdded;

  constructor(event: GuardianAdded) {
    this._event = event;
  }

  get guardian(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class GuardianQuorumChanged extends ethereum.Event {
  get params(): GuardianQuorumChanged__Params {
    return new GuardianQuorumChanged__Params(this);
  }
}

export class GuardianQuorumChanged__Params {
  _event: GuardianQuorumChanged;

  constructor(event: GuardianQuorumChanged) {
    this._event = event;
  }

  get newValue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class GuardianRemoved extends ethereum.Event {
  get params(): GuardianRemoved__Params {
    return new GuardianRemoved__Params(this);
  }
}

export class GuardianRemoved__Params {
  _event: GuardianRemoved;

  constructor(event: GuardianRemoved) {
    this._event = event;
  }

  get guardian(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MaxDepositsChanged extends ethereum.Event {
  get params(): MaxDepositsChanged__Params {
    return new MaxDepositsChanged__Params(this);
  }
}

export class MaxDepositsChanged__Params {
  _event: MaxDepositsChanged;

  constructor(event: MaxDepositsChanged) {
    this._event = event;
  }

  get newValue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class MinDepositBlockDistanceChanged extends ethereum.Event {
  get params(): MinDepositBlockDistanceChanged__Params {
    return new MinDepositBlockDistanceChanged__Params(this);
  }
}

export class MinDepositBlockDistanceChanged__Params {
  _event: MinDepositBlockDistanceChanged;

  constructor(event: MinDepositBlockDistanceChanged) {
    this._event = event;
  }

  get newValue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class NodeOperatorsRegistryChanged extends ethereum.Event {
  get params(): NodeOperatorsRegistryChanged__Params {
    return new NodeOperatorsRegistryChanged__Params(this);
  }
}

export class NodeOperatorsRegistryChanged__Params {
  _event: NodeOperatorsRegistryChanged;

  constructor(event: NodeOperatorsRegistryChanged) {
    this._event = event;
  }

  get newValue(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnerChanged extends ethereum.Event {
  get params(): OwnerChanged__Params {
    return new OwnerChanged__Params(this);
  }
}

export class OwnerChanged__Params {
  _event: OwnerChanged;

  constructor(event: OwnerChanged) {
    this._event = event;
  }

  get newValue(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PauseIntentValidityPeriodBlocksChanged extends ethereum.Event {
  get params(): PauseIntentValidityPeriodBlocksChanged__Params {
    return new PauseIntentValidityPeriodBlocksChanged__Params(this);
  }
}

export class PauseIntentValidityPeriodBlocksChanged__Params {
  _event: PauseIntentValidityPeriodBlocksChanged;

  constructor(event: PauseIntentValidityPeriodBlocksChanged) {
    this._event = event;
  }

  get newValue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DepositSecurityModule extends ethereum.SmartContract {
  static bind(address: Address): DepositSecurityModule {
    return new DepositSecurityModule("DepositSecurityModule", address);
  }

  ATTEST_MESSAGE_PREFIX(): Bytes {
    let result = super.call(
      "ATTEST_MESSAGE_PREFIX",
      "ATTEST_MESSAGE_PREFIX():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_ATTEST_MESSAGE_PREFIX(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "ATTEST_MESSAGE_PREFIX",
      "ATTEST_MESSAGE_PREFIX():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEPOSIT_CONTRACT(): Address {
    let result = super.call(
      "DEPOSIT_CONTRACT",
      "DEPOSIT_CONTRACT():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_DEPOSIT_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "DEPOSIT_CONTRACT",
      "DEPOSIT_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  LIDO(): Address {
    let result = super.call("LIDO", "LIDO():(address)", []);

    return result[0].toAddress();
  }

  try_LIDO(): ethereum.CallResult<Address> {
    let result = super.tryCall("LIDO", "LIDO():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  PAUSE_MESSAGE_PREFIX(): Bytes {
    let result = super.call(
      "PAUSE_MESSAGE_PREFIX",
      "PAUSE_MESSAGE_PREFIX():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_PAUSE_MESSAGE_PREFIX(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "PAUSE_MESSAGE_PREFIX",
      "PAUSE_MESSAGE_PREFIX():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  canDeposit(): boolean {
    let result = super.call("canDeposit", "canDeposit():(bool)", []);

    return result[0].toBoolean();
  }

  try_canDeposit(): ethereum.CallResult<boolean> {
    let result = super.tryCall("canDeposit", "canDeposit():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getGuardianIndex(addr: Address): BigInt {
    let result = super.call(
      "getGuardianIndex",
      "getGuardianIndex(address):(int256)",
      [ethereum.Value.fromAddress(addr)]
    );

    return result[0].toBigInt();
  }

  try_getGuardianIndex(addr: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getGuardianIndex",
      "getGuardianIndex(address):(int256)",
      [ethereum.Value.fromAddress(addr)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGuardianQuorum(): BigInt {
    let result = super.call(
      "getGuardianQuorum",
      "getGuardianQuorum():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getGuardianQuorum(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getGuardianQuorum",
      "getGuardianQuorum():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGuardians(): Array<Address> {
    let result = super.call("getGuardians", "getGuardians():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getGuardians(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getGuardians",
      "getGuardians():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getLastDepositBlock(): BigInt {
    let result = super.call(
      "getLastDepositBlock",
      "getLastDepositBlock():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getLastDepositBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLastDepositBlock",
      "getLastDepositBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMaxDeposits(): BigInt {
    let result = super.call("getMaxDeposits", "getMaxDeposits():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getMaxDeposits(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMaxDeposits",
      "getMaxDeposits():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMinDepositBlockDistance(): BigInt {
    let result = super.call(
      "getMinDepositBlockDistance",
      "getMinDepositBlockDistance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getMinDepositBlockDistance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMinDepositBlockDistance",
      "getMinDepositBlockDistance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNodeOperatorsRegistry(): Address {
    let result = super.call(
      "getNodeOperatorsRegistry",
      "getNodeOperatorsRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getNodeOperatorsRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getNodeOperatorsRegistry",
      "getNodeOperatorsRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getOwner(): Address {
    let result = super.call("getOwner", "getOwner():(address)", []);

    return result[0].toAddress();
  }

  try_getOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("getOwner", "getOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPauseIntentValidityPeriodBlocks(): BigInt {
    let result = super.call(
      "getPauseIntentValidityPeriodBlocks",
      "getPauseIntentValidityPeriodBlocks():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPauseIntentValidityPeriodBlocks(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPauseIntentValidityPeriodBlocks",
      "getPauseIntentValidityPeriodBlocks():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isGuardian(addr: Address): boolean {
    let result = super.call("isGuardian", "isGuardian(address):(bool)", [
      ethereum.Value.fromAddress(addr)
    ]);

    return result[0].toBoolean();
  }

  try_isGuardian(addr: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isGuardian", "isGuardian(address):(bool)", [
      ethereum.Value.fromAddress(addr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPaused(): boolean {
    let result = super.call("isPaused", "isPaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_isPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaused", "isPaused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _lido(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _depositContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _nodeOperatorsRegistry(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _networkId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _maxDepositsPerBlock(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _minDepositBlockDistance(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _pauseIntentValidityPeriodBlocks(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddGuardianCall extends ethereum.Call {
  get inputs(): AddGuardianCall__Inputs {
    return new AddGuardianCall__Inputs(this);
  }

  get outputs(): AddGuardianCall__Outputs {
    return new AddGuardianCall__Outputs(this);
  }
}

export class AddGuardianCall__Inputs {
  _call: AddGuardianCall;

  constructor(call: AddGuardianCall) {
    this._call = call;
  }

  get addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newQuorum(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddGuardianCall__Outputs {
  _call: AddGuardianCall;

  constructor(call: AddGuardianCall) {
    this._call = call;
  }
}

export class AddGuardiansCall extends ethereum.Call {
  get inputs(): AddGuardiansCall__Inputs {
    return new AddGuardiansCall__Inputs(this);
  }

  get outputs(): AddGuardiansCall__Outputs {
    return new AddGuardiansCall__Outputs(this);
  }
}

export class AddGuardiansCall__Inputs {
  _call: AddGuardiansCall;

  constructor(call: AddGuardiansCall) {
    this._call = call;
  }

  get addresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get newQuorum(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddGuardiansCall__Outputs {
  _call: AddGuardiansCall;

  constructor(call: AddGuardiansCall) {
    this._call = call;
  }
}

export class DepositBufferedEtherCall extends ethereum.Call {
  get inputs(): DepositBufferedEtherCall__Inputs {
    return new DepositBufferedEtherCall__Inputs(this);
  }

  get outputs(): DepositBufferedEtherCall__Outputs {
    return new DepositBufferedEtherCall__Outputs(this);
  }
}

export class DepositBufferedEtherCall__Inputs {
  _call: DepositBufferedEtherCall;

  constructor(call: DepositBufferedEtherCall) {
    this._call = call;
  }

  get depositRoot(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get keysOpIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get blockNumber(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get blockHash(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get sortedGuardianSignatures(): Array<
    DepositBufferedEtherCallSortedGuardianSignaturesStruct
  > {
    return this._call.inputValues[4].value.toTupleArray<
      DepositBufferedEtherCallSortedGuardianSignaturesStruct
    >();
  }
}

export class DepositBufferedEtherCall__Outputs {
  _call: DepositBufferedEtherCall;

  constructor(call: DepositBufferedEtherCall) {
    this._call = call;
  }
}

export class DepositBufferedEtherCallSortedGuardianSignaturesStruct extends ethereum.Tuple {
  get r(): Bytes {
    return this[0].toBytes();
  }

  get vs(): Bytes {
    return this[1].toBytes();
  }
}

export class PauseDepositsCall extends ethereum.Call {
  get inputs(): PauseDepositsCall__Inputs {
    return new PauseDepositsCall__Inputs(this);
  }

  get outputs(): PauseDepositsCall__Outputs {
    return new PauseDepositsCall__Outputs(this);
  }
}

export class PauseDepositsCall__Inputs {
  _call: PauseDepositsCall;

  constructor(call: PauseDepositsCall) {
    this._call = call;
  }

  get blockNumber(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get sig(): PauseDepositsCallSigStruct {
    return changetype<PauseDepositsCallSigStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class PauseDepositsCall__Outputs {
  _call: PauseDepositsCall;

  constructor(call: PauseDepositsCall) {
    this._call = call;
  }
}

export class PauseDepositsCallSigStruct extends ethereum.Tuple {
  get r(): Bytes {
    return this[0].toBytes();
  }

  get vs(): Bytes {
    return this[1].toBytes();
  }
}

export class RemoveGuardianCall extends ethereum.Call {
  get inputs(): RemoveGuardianCall__Inputs {
    return new RemoveGuardianCall__Inputs(this);
  }

  get outputs(): RemoveGuardianCall__Outputs {
    return new RemoveGuardianCall__Outputs(this);
  }
}

export class RemoveGuardianCall__Inputs {
  _call: RemoveGuardianCall;

  constructor(call: RemoveGuardianCall) {
    this._call = call;
  }

  get addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newQuorum(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RemoveGuardianCall__Outputs {
  _call: RemoveGuardianCall;

  constructor(call: RemoveGuardianCall) {
    this._call = call;
  }
}

export class SetGuardianQuorumCall extends ethereum.Call {
  get inputs(): SetGuardianQuorumCall__Inputs {
    return new SetGuardianQuorumCall__Inputs(this);
  }

  get outputs(): SetGuardianQuorumCall__Outputs {
    return new SetGuardianQuorumCall__Outputs(this);
  }
}

export class SetGuardianQuorumCall__Inputs {
  _call: SetGuardianQuorumCall;

  constructor(call: SetGuardianQuorumCall) {
    this._call = call;
  }

  get newValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetGuardianQuorumCall__Outputs {
  _call: SetGuardianQuorumCall;

  constructor(call: SetGuardianQuorumCall) {
    this._call = call;
  }
}

export class SetMaxDepositsCall extends ethereum.Call {
  get inputs(): SetMaxDepositsCall__Inputs {
    return new SetMaxDepositsCall__Inputs(this);
  }

  get outputs(): SetMaxDepositsCall__Outputs {
    return new SetMaxDepositsCall__Outputs(this);
  }
}

export class SetMaxDepositsCall__Inputs {
  _call: SetMaxDepositsCall;

  constructor(call: SetMaxDepositsCall) {
    this._call = call;
  }

  get newValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxDepositsCall__Outputs {
  _call: SetMaxDepositsCall;

  constructor(call: SetMaxDepositsCall) {
    this._call = call;
  }
}

export class SetMinDepositBlockDistanceCall extends ethereum.Call {
  get inputs(): SetMinDepositBlockDistanceCall__Inputs {
    return new SetMinDepositBlockDistanceCall__Inputs(this);
  }

  get outputs(): SetMinDepositBlockDistanceCall__Outputs {
    return new SetMinDepositBlockDistanceCall__Outputs(this);
  }
}

export class SetMinDepositBlockDistanceCall__Inputs {
  _call: SetMinDepositBlockDistanceCall;

  constructor(call: SetMinDepositBlockDistanceCall) {
    this._call = call;
  }

  get newValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinDepositBlockDistanceCall__Outputs {
  _call: SetMinDepositBlockDistanceCall;

  constructor(call: SetMinDepositBlockDistanceCall) {
    this._call = call;
  }
}

export class SetNodeOperatorsRegistryCall extends ethereum.Call {
  get inputs(): SetNodeOperatorsRegistryCall__Inputs {
    return new SetNodeOperatorsRegistryCall__Inputs(this);
  }

  get outputs(): SetNodeOperatorsRegistryCall__Outputs {
    return new SetNodeOperatorsRegistryCall__Outputs(this);
  }
}

export class SetNodeOperatorsRegistryCall__Inputs {
  _call: SetNodeOperatorsRegistryCall;

  constructor(call: SetNodeOperatorsRegistryCall) {
    this._call = call;
  }

  get newValue(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetNodeOperatorsRegistryCall__Outputs {
  _call: SetNodeOperatorsRegistryCall;

  constructor(call: SetNodeOperatorsRegistryCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get newValue(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class SetPauseIntentValidityPeriodBlocksCall extends ethereum.Call {
  get inputs(): SetPauseIntentValidityPeriodBlocksCall__Inputs {
    return new SetPauseIntentValidityPeriodBlocksCall__Inputs(this);
  }

  get outputs(): SetPauseIntentValidityPeriodBlocksCall__Outputs {
    return new SetPauseIntentValidityPeriodBlocksCall__Outputs(this);
  }
}

export class SetPauseIntentValidityPeriodBlocksCall__Inputs {
  _call: SetPauseIntentValidityPeriodBlocksCall;

  constructor(call: SetPauseIntentValidityPeriodBlocksCall) {
    this._call = call;
  }

  get newValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPauseIntentValidityPeriodBlocksCall__Outputs {
  _call: SetPauseIntentValidityPeriodBlocksCall;

  constructor(call: SetPauseIntentValidityPeriodBlocksCall) {
    this._call = call;
  }
}

export class UnpauseDepositsCall extends ethereum.Call {
  get inputs(): UnpauseDepositsCall__Inputs {
    return new UnpauseDepositsCall__Inputs(this);
  }

  get outputs(): UnpauseDepositsCall__Outputs {
    return new UnpauseDepositsCall__Outputs(this);
  }
}

export class UnpauseDepositsCall__Inputs {
  _call: UnpauseDepositsCall;

  constructor(call: UnpauseDepositsCall) {
    this._call = call;
  }
}

export class UnpauseDepositsCall__Outputs {
  _call: UnpauseDepositsCall;

  constructor(call: UnpauseDepositsCall) {
    this._call = call;
  }
}
