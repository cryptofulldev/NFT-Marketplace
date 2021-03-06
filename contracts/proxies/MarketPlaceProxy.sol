//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./BaseProxy.sol";

contract MarketPlaceProxy is BaseProxy {

    constructor(address logic, address admin, bytes memory data) BaseProxy(logic, admin, data) {

    }
}
