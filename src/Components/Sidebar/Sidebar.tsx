import { Link } from "react-router-dom";
import {
  Squares2X2Icon,
  BanknotesIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ open, onClose }: { open?: boolean; onClose?: () => void }) {
  const baseClasses = "fixed left-0 top-0 h-screen w-[280px] sidebar shadow-xl p-6 transform transition-transform duration-300 ease-in-out";
  const mobileHidden = open ? "-translate-x-0" : "-translate-x-full";
  return (
    <>
      {/* overlay for mobile when open */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => onClose && onClose()}
        />
      )}

      <div className={`${baseClasses} ${mobileHidden} md:translate-x-0 z-40`}>
        <div className="flex items-center justify-between">
          <h1 className="p-2 text-center text-xl font-bold mt-4 pb-4 border-b border-gold-dim text-gold-primary">
            Coin Dashboard
          </h1>
          <button
            className="md:hidden ml-2 flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-gold-primary"
            onClick={() => onClose && onClose()}
            aria-label="Close sidebar"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <ul className="mt-6 space-y-2">
          <li>
            <Link to="/Dashboard" className="sidebar-link">
              <span>Dashboard</span>
              <Squares2X2Icon className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/Gold" className="sidebar-link">
              <span>Gold</span>
              <CurrencyDollarIcon className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/Crypto" className="sidebar-link">
              <span>Crypto</span>
              <BanknotesIcon className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/Currency" className="sidebar-link">
              <span>Currency</span>
              <GlobeAltIcon className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
