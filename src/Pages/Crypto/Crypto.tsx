import PriceCard from "../../Components/PriceCard/PriceCard";
import { useState, useEffect } from "react";
import type { PriceItem } from "../../Types/Types";


export default function Crypto() {
  const [Crypto, setCrypto] = useState<PriceItem[]>([]);

  useEffect(() => {
    const fetchData = () => {
    fetch(
      "https://api.brsapi.ir/Market/Gold_Currency.php?key=BNkJcDDHsPfqApLr6RLJxeuJT7x3gRVU",
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("خطا در دریافت اطلاعات");
        }
        return res.json();
      })
      .then((data) => {
        setCrypto(data.cryptocurrency);
      });
    };
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {Crypto.map((item , index) => (
        <PriceCard
          key={item.id || index}
          title={item.name_en}
          price={item.price}
          change={item.change_percent}
          unit={item.unit}
        />
      ))}
      
    </section>
  );
}
