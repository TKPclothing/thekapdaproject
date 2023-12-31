import { getProduct } from "@/sanity/sanity-utils";
import { SHA256, enc } from "crypto-js";
import axios from "axios";

function uuid() {
  const srr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "Z",
  ];
  return [...new Array(35)]
    .map(() => srr[Math.floor(Math.random() * srr.length)])
    .toString();
}
export async function POST(request: Request) {
  try {
    //const price = (await getProduct(request.url.split("/").at(-1) || "")).price;
    //console.log(price + 0.00);
    const { price, phoneNo, order_id, orderId } = await request.json();

    const payload = {
      merchantId: process.env.NEXT_PRIVATE_MERCHANTID,
      merchantTransactionId: orderId,
      merchantUserId:process.env.NEXT_PRIVATE_MERCHANTID ,
      //amount: parseFloat(`${price}.00`) * 100,
      amount: parseFloat(`${price}`) * 100,
      redirectUrl: `${process.env.NEXT_PHONEPE_REDIRECT}/api/paymentConfrom/${order_id}`,
      redirectMode: "POST",
      callbackUrl: `${process.env.NEXT_PHONEPE_REDIRECT}/thankyou`,
      mobileNumber: "808075160",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    console.log(payload);

    let data = Buffer.from(JSON.stringify(payload), "utf-8");
    // console.log(data.toString("base64"));
    let api_endpoint = "/pg/v1/pay";
    let salt_key = process.env.NEXT_PRIVATE_PHONEPE_SALT_KEY;
    let salt_index = process.env.NEXT_PRIVATE_SALT_INDEX;
    let res = await axios.post(
      "https://api.phonepe.com/apis/hermes/pg/v1/pay",
      {
        request: data.toString("base64"),
      },
      {
        headers: {
          "X-VERIFY":
            SHA256(
              `${data.toString("base64")}${api_endpoint}${salt_key}`
            ).toString() +
            "###" +
            salt_index,
        },
      }
    );
    console.log(res);

    return new Response(JSON.stringify(res.data));
  } catch (e: any) {
    console.log(e);

    return new Response(JSON.stringify({ error: e.toString(), message: e }));
  }
}
