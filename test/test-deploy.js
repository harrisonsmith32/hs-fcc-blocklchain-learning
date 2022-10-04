const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// describe("SimpleStorage", () = {}), slight variations, best practice is to have a named function here
describe("SimpleStorage", function () {
    // let simpleStorageFactory
    // let simpleStorage
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })
    // it says what we want this test to do, describe the code to do that
    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // expect
        // assert
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString().expectedValue)
    })
})
