export interface Wallet {
  id: string;
  currency: string;
  balance: number;
}

export class WalletService {
  async createWallet(currency: string): Promise<Wallet> {
    return {
      id: `wallet_${Date.now()}`,
      currency,
      balance: 0,
    };
  }
}
