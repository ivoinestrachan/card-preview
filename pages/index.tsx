import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import chip from "../public/assets/chip.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Home: NextPage = () => {
  const addNoti = () => toast("💳 Card Added");

  const [cardNumber, setCardNum] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpiration, setCardExp] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Card Preview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-20 con">
        <div>
          <div>
            <label>Card Number</label>
            <div>
              <input
                maxLength={19}
                type="text"
                className="outline-none rounded-md border input2"
                value={cardNumber}
                onChange={(e) =>
                  setCardNum(
                    e.target.value
                      .replace(/[^\dA-Z]/g, "")
                      .replace(/(.{4})/g, "$1 ")
                      .trim()
                  )
                }
                placeholder="💳 1234 5678 1011 1213"
              />
            </div>
          </div>
          <div>
            <label>Holder Name</label>
            <div>
              <input
                type="text"
                className="outline-none rounded-md border input2"
                placeholder="👤 John Doe"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <label>Exp Date</label>
              <div>
                <input
                  type="text"
                  className="outline-none rounded-md border input2"
                  maxLength={5}
                  id="exp"
                  value={cardExpiration}
                  onChange={(e) =>
                    setCardExp(
                      e.target.value.replace(/^(\d{2})(\d{2})/, "$1/$2")
                    )
                  }
                  placeholder="01/25"
                />
              </div>
            </div>
            <div>
              <label>CVV</label>
              <div>
                <input
                  type="text"
                  className="outline-none rounded-md border input2"
                  maxLength={4}
                  id="cvv"
                  placeholder="123"
                  value={cardCVV}
                  onChange={(e) => setCardCVV(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              className="w-[90%] bg-blue-500 p-[10px] rounded-[5px] text-white"
              onClick={addNoti}
            >
              Add Card
            </button>
          </div>
          <ToastContainer />
        </div>
        <div className="card w-[390px] lg:h-[230px]  gold rounded-[15px]  p-[20px] ">
          <input
            className="text-[1.5rem] font-[700] text-white bg-transparent outline-none caret-transparent"
            disabled
            value={cardNumber}
            onChange={(e) =>
              setCardNum(
                e.target.value
                  .replace(/[^\dA-Z]/g, "")
                  .replace(/(.{4})/g, "$1 ")
                  .trim()
              )
            }
            placeholder="1234 5678 1011 1213"
          />
          <div>
            <label className="text-[.8rem]">CardHolder Name</label>
            <div>
              <input
                className="text-white bg-transparent outline-none caret-transparent"
                placeholder="John Doe"
                disabled
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </div>
          </div>

          <div className="flex">
            <div>
              <label className=" text-[.8rem]">Exp Date</label>
              <div>
                <input
                  className="text-white bg-transparent outline-none caret-transparent"
                  placeholder="01/25"
                  disabled
                  value={cardExpiration}
                  onChange={(e) =>
                    setCardExp(
                      e.target.value.replace(/^(\d{2})(\d{2})/, "$1/$2")
                    )
                  }
                />
              </div>
            </div>
            <div>
              <label className="text-[.8rem]">CVV</label>
              <div className="text-white">
                <input
                  className="text-white bg-transparent outline-none caret-transparent"
                  placeholder="123"
                  disabled
                  value={cardCVV}
                  onChange={(e) => setCardCVV(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src={chip}
              alt="chip"
              draggable="false"
              className="relative left-[270px]"
            />
          </div>
        </div>
      </div>
      <div className="mobile text-center">
        This Project is only functionality purposes not styling
      </div>
    </div>
  );
};

export default Home;
