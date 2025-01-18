import pkg from 'hardhat';
const { ethers } = pkg;

async function main() {
  const FiredGuys = await ethers.getContractFactory("FiredGuys");
  const firedGuys = await FiredGuys.deploy();

  await firedGuys.waitForDeployment();
  console.log("FiredGuys deployed to:", await firedGuys.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 