import { useState, useEffect } from "react";
import {
  CurrencyDollarIcon,
  BanknotesIcon,
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

type MarketItem = {
  symbol?: string;
  price?: number;
};

export default function Dashboard() {
  const [data, setData] = useState<{
    gold: MarketItem[];
    currency: MarketItem[];
    cryptocurrency: MarketItem[];
  }>({
    gold: [],
    currency: [],
    cryptocurrency: [],
  });

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://api.brsapi.ir/Market/Gold_Currency.php?key=BNkJcDDHsPfqApLr6RLJxeuJT7x3gRVU",
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("error");
          }
          return res.json();
        })
        .then((data) => {
          setData({
            gold: data.gold || [],
            currency: data.currency || [],
            cryptocurrency: data.cryptocurrency || [],
          });
        });
    };
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex  justify-between gap-4 ">
        <Link
          to="/Gold"
          className="w-[32%] bg-card-bg rounded-xl p-4 shadow items-center flex item-center  justify-center font-bold text-gold-primary gap-5 hover:shadow-lg transition"
        >
          <BuildingLibraryIcon className="h-6 w-6" />
          <span className="text-text-primary">Gold</span>
          <BuildingLibraryIcon className="h-6 w-6" />
        </Link>
        <Link
          to="/Crypto"
          className="w-[32%] bg-card-bg rounded-xl p-4 shadow items-center flex item-center  justify-center font-bold text-gold-primary gap-5 hover:shadow-lg transition"
        >
          <DevicePhoneMobileIcon className="h-6 w-6" />
          <span className="text-text-primary">Crypto</span>
          <DevicePhoneMobileIcon className="h-6 w-6" />
        </Link>
        <Link
          to="/Currency"
          className="flex w-[32%] bg-card-bg rounded-xl p-4 shadow items-center item-center  justify-center font-bold text-gold-primary gap-5 hover:shadow-lg transition"
        >
          <GlobeAltIcon className="h-6 w-6" />
          <span className="text-text-primary">Currency</span>
          <GlobeAltIcon className="h-6 w-6" />
        </Link>
      </div>

      <div className="rounded-2xl bg-card-bg p-5 shadow-md">
        <h2 className="flex items-center gap-2 mb-4 border-l-4 border-gold-primary pl-3 text-xl font-bold text-gold-primary">
          <CurrencyDollarIcon className="h-7 w-7" />
          GOLD Price (Toman)
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>IR_GOLD_24K</span>
            <span className="font-bold text-gold-primary">
              {data.gold
                ?.find((item) => item.symbol === "IR_GOLD_18K")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>18K Gold</span>
            <span className="font-bold text-gold-primary">
              {data.gold
                ?.find((item) => item.symbol === "IR_GOLD_24K")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>Melted Gold</span>
            <span className="font-bold text-gold-primary">
              {data.gold
                ?.find((item) => item.symbol === "IR_GOLD_MELTED")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>Gold Ounce</span>
            <span className="font-bold text-gold-primary">
              {data.gold
                ?.find((item) => item.symbol === "XAUUSD")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-card-bg p-5 shadow-md">
        <h2 className="flex items-center gap-2 mb-4 border-l-4 border-gold-primary pl-3 text-xl font-bold text-gold-primary">
          <BanknotesIcon className="h-7 w-7" />
          currency Price (Toman)
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>US Dollar</span>
            <span className="font-bold text-gold-primary">
              {data.currency
                ?.find((item) => item.symbol === "USD")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>Tether Dollar</span>
            <span className="font-bold text-gold-primary">
              {data.currency
                ?.find((item) => item.symbol === "USDT_IRT")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>Euro</span>
            <span className="font-bold text-gold-primary">
              {data.currency
                ?.find((item) => item.symbol === "EUR")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>British Pound</span>
            <span className="font-bold text-gold-primary">
              {data.currency
                ?.find((item) => item.symbol === "GBP")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-card-bg p-5 shadow-md">
        <h2 className="flex items-center gap-2 mb-4 border-l-4 border-gold-primary pl-3 text-xl font-bold text-gold-primary">
          <GlobeAltIcon className="h-7 w-7" />
          Currency Price (dolor)
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>Bitcoin</span>
            <span className="font-bold text-gold-primary">
              {data.cryptocurrency
                ?.find((item) => item.symbol === "BTC")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>Ethereum</span>
            <span className="font-bold text-gold-primary">
              {data.cryptocurrency
                ?.find((item) => item.symbol === "ETH")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>Tether</span>
            <span className="font-bold text-gold-primary">
              {data.cryptocurrency
                ?.find((item) => item.symbol === "USDT")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
          <div className="flex justify-between rounded-xl bg-bg-dark p-4">
            <span>Solana</span>
            <span className="font-bold text-gold-primary">
              {data.cryptocurrency
                ?.find((item) => item.symbol === "SOL")
                ?.price?.toLocaleString("fa-IR") || "—"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
