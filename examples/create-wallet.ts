import { WalletService } from "../src/wallet";

const walletService = new WalletService();

walletService
  .createWallet("USD")
  .then(console.log);
