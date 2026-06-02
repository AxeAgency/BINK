export class BinkPayClient {
  constructor(private apiKey: string) {}

  async createPayment(amount: number) {
    return {
      success: true,
      amount,
      currency: "USD"
    };
  }
}
