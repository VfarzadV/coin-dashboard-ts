import { SparklesIcon } from "@heroicons/react/24/outline";

interface PriceCardProps {
  title?: string;
  price: number;
  change?: number;
  unit?: string;
}

export default function PriceCard({ title, price, change, unit }: PriceCardProps) {
  const displayPrice = typeof price === "number" ? price : 0;
  return (
    <div className="card py-6 text-center">
      <div className="flex items-center justify-center gap-2 font-bold text-gold-primary">
        <SparklesIcon className="h-6 w-6" />
        <span className="text-text-primary">{title}</span>
        <SparklesIcon className="h-6 w-6" />
      </div>

      <div className="mt-4 flex items-center justify-center gap-1">
        <span className="text-text-primary">{displayPrice.toLocaleString("fa-IR")}</span>
        <span className="text-text-secondary">{unit}</span>
      </div>

      {change !== undefined && (
        <div className="mt-3 flex items-center justify-center gap-1">
          <span className={`text-sm ${change >= 0 ? "text-green-600" : "text-red-500"}`}>
            {change >= 0 ? `+${change}%` : `${change}%`}
          </span>
        </div>
      )}
    </div>
  );
}