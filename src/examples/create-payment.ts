import { BinkPayClient } from "../src/client";

const client = new BinkPayClient("demo-key");

client.createPayment(100).then(console.log);
