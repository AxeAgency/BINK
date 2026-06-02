export interface CreatePaymentRequest {
  amount: number;
  currency: string;
  customerEmail?: string;
}

export interface PaymentResponse {
  id: string;
  status: string;
  amount: number;
  currency: string;
}

export class PaymentService {
  async createPayment(
    request: CreatePaymentRequest
  ): Promise<PaymentResponse> {
    return {
      id: `pay_${Date.now()}`,
      status: "pending",
      amount: request.amount,
      currency: request.currency,
    };
  }
}
