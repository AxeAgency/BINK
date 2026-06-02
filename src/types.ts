export type Currency =
  | "USD"
  | "EUR"
  | "GBP"
  | "AED"
  | "EGP";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}
