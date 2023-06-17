"use client";

import { checkout } from "@/checkout";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <h1 className="text-4xl font-bold text-center mt-20">By My Staffs</h1>

      <div className="container mx-auto w-full h-full flex items-center justify-center mt-10">
        <div className="w-1/2 shadow-md rounded-md m-5 max-w-[500px] p-5">
          <Image src="/images/img1.png" width={500} height={500} alt="img1" />
          <p>Very Expensive Art work 1</p>
          <button
            className="px-5 bg-green-600 text-white rounded-sm mt-3"
            onClick={() =>
              checkout({
                lineItems: [
                  {
                    price: "price_1NK3tiKS72YCaCwXuigznphs",
                    quantity: 1,
                  },
                ],
              })
            }
          >
            Buy
          </button>
        </div>
        <div className="w-1/2 shadow-md rounded-md m-5 max-w-[500px] p-5">
          <Image src="/images/img2.png" width={500} height={500} alt="img2" />
          <p>Very Expensive Art work 2</p>
          <button
            className="px-5 bg-green-600 text-white rounded-sm mt-3"
            onClick={() =>
              checkout({
                lineItems: [
                  {
                    price: "price_1NK3utKS72YCaCwXxFIZpkBR",
                    quantity: 1,
                  },
                ],
              })
            }
          >
            Buy
          </button>
        </div>
      </div>
    </main>
  );
}
