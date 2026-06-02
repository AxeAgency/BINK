import { MerchantService } from "../src/merchant";

const merchantService = new MerchantService();

merchantService
  .createMerchant(
    "BINKPAY LTD",
    "contact@binkpay.net"
  )
  .then(console.log);
