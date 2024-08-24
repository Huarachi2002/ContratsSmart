// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

contract Counter {
    
    uint public value;

    event Increased(uint newValue);
    
    constructor(uint _initialValue){
        value = _initialValue;
    }

    function increase() public{
        value += 1;
        emit Increased(value);
    }
}