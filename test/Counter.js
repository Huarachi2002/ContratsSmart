const { ethers } = require("hardhat")
const {expect} = require("chai");


describe("Counter", function() { 
  it("should init the contract with the initial value", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(123);
    
    expect(await counter.value()).to.equal(123);
    
    console.log(await counter.value());
  });

  describe("increase", function() {
    it("should add 1 to the value", async function () {
      const Counter = await ethers.getContractFactory("Counter");
      const counter = await Counter.deploy(1);
      await counter.increase();
      expect(await counter.value()).to.equal(2);
    });
  });

  it("should emit Increase", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(1);

    await expect(counter.increase()).to.emit(counter, "Increased")
      .withArgs(2);
  })
})