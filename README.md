# NFT Minting dApp

A decentralized application (dApp) for minting NFTs using Hardhat, React, and Ethers.js.

## Project Status

### ✅ Completed
1. Initial Setup
   - React app created with Vite
   - Hardhat development environment configured
   - Smart contract deployment to local network
   - Basic frontend components implemented

2. Smart Contract
   - ERC721 contract implemented with OpenZeppelin
   - Minting functionality with payment
   - URI storage for NFT metadata
   - Contract deployed to local Hardhat network at: `0x5FbDB2315678afecb367f032d93F642f64180aa3`

3. Frontend Components
   - MetaMask connection handling
   - Wallet balance display
   - Basic NFT grid layout
   - Minting interface

### 🚧 To Do
1. NFT Assets
   - Create/generate NFT artwork
   - Create metadata JSON files
   - Upload assets to IPFS using Pinata
   - Update frontend with IPFS content IDs

2. Testing
   - Write unit tests for smart contract
   - Add frontend testing
   - Perform end-to-end testing

3. Deployment
   - Deploy to testnet (Sepolia/Goerli)
   - Deploy frontend to hosting service
   - Final production deployment

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   cd myapp
   npm install
   ```

3. Start local Hardhat node:
   ```bash
   npx hardhat node
   ```

4. Deploy contract (in new terminal):
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

5. Start frontend development server:
   ```bash
   npm run dev
   ```

## MetaMask Configuration

1. Add Hardhat Network to MetaMask:
   - Network Name: `Hardhat Local`
   - RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `31337`
   - Currency Symbol: `ETH`

2. Import test account:
   - Private Key: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`
   - This account has 10,000 test ETH

## Tech Stack
- React + Vite
- Hardhat
- Ethers.js
- OpenZeppelin Contracts
- MetaMask

## License
MIT
