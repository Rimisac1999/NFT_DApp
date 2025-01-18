import WalletBalance from './WalletBalance';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import FiredGuys from '../artifacts/contracts/MyNFT.sol/FiredGuys.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, FiredGuys.abi, signer);

function NFTImage({ tokenId, getCount }) {
    const contentId = 'QmYueiuRNmL4MiA2GwtVMm6ZagknXnSpQnB3z2gWbz36hP';
    const metadataURI = `${contentId}/${tokenId}.json`;
    const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;
    
    const [isMinted, setIsMinted] = useState(false);
    
    useEffect(() => {
        getMintedStatus();
    }, [isMinted]);

    const getMintedStatus = async () => {
        const result = await contract.isContentOwned(metadataURI);
        console.log(result);
        setIsMinted(result);
    };

    const mintToken = async () => {
        const connection = contract.connect(signer);
        const addr = connection.address;
        const result = await contract.payToMint(addr, metadataURI, {
            value: ethers.utils.parseEther('0.05'),
        });

        await result.wait();
        getMintedStatus();
        getCount();
    };

    async function getURI() {
        const uri = await contract.tokenURI(tokenId);
        alert(uri);
    }

    return (
        <div className="card">
            <img src={isMinted ? imageURI : 'img/placeholder.png'} alt={`NFT ${tokenId}`} />
            <h5>ID #{tokenId}</h5>
            {!isMinted ? (
                <button onClick={mintToken} className="btn">Mint</button>
            ) : (
                <button onClick={getURI} className="btn">Show URI</button>
            )}
        </div>
    );
}

function Home() {
    const [totalMinted, setTotalMinted] = useState(0);
    
    useEffect(() => {
        getCount();
    }, []);

    const getCount = async () => {
        const count = await contract._tokenIdCounter();
        console.log(parseInt(count));
        setTotalMinted(parseInt(count));
    };

    return (
        <div>
            <WalletBalance />

            <div className="container">
                <h1>NFT Collection</h1>
                <div className="nft-grid">
                    {Array(totalMinted + 1)
                        .fill(0)
                        .map((_, i) => (
                            <div key={i}>
                                <NFTImage tokenId={i} getCount={getCount} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Home; 