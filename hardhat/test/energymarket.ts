import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei } from "viem";
import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";

describe("energyMarket", function () {
  async function BaseDeploy(energy: number) {
    let energy_price = energy;

    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const energyMarket = await hre.viem.deployContract(
      "energymarket",
      [energy_price],
      {}
    );

    return {
      energyMarket,
      energy_price,
      owner,
      otherAccount,
    };
  }

  describe("Deploy", function () {
    it("Energy cost should be equal to the input", async function () {
      const { energyMarket, energy_price } = await BaseDeploy(10);

      expect(await energyMarket.read.energyCost()).to.equal(energy_price);
    });
  });
});
