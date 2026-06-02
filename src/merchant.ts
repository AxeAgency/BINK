export interface Merchant {
  id: string;
  businessName: string;
  email: string;
}

export class MerchantService {
  async createMerchant(
    businessName: string,
    email: string
  ): Promise<Merchant> {
    return {
      id: `merchant_${Date.now()}`,
      businessName,
      email,
    };
  }
}
