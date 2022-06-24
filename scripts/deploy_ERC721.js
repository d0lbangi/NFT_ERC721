async function main() {
    const NFT = await hre.ethers.getContractFactory("NFT");
    const NFTDeployed = await NFT.deploy("NFTName", "NFTS");

    await NFTDeployed.deployed();
    console.log("Deployed NFT to: ", NFTDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });