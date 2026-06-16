import {
  BellAlertIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
export default function Header({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-5  lg:flex-row ">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <button
          onClick={() => onToggleSidebar && onToggleSidebar()}
          className="md:hidden mr-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-primary text-black shadow-md transition hover:bg-gold-dark"
          aria-label="Open sidebar"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
        <div className="flex h-12 w-full items-center justify-between rounded-2xl bg-card-bg px-1 shadow-lg sm:w-96 md:w-[480px] card">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent px-4 py-2 text-base text-text-primary outline-none placeholder:text-gray-400"
          />
          <button className="ml-4 rounded-xl bg-gold-primary px-4 py-2 text-sm font-bold text-black transition hover:bg-gold-dark flex items-center justify-center">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-primary text-black shadow-md transition hover:bg-gold-dark">
          <BellAlertIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center gap-5 text-center">
        <div>
          <h1 className="text-xl font-medium text-text-primary">
            Farzad Vatandoust
          </h1>
          <h3 className="text-sm text-text-secondary">Front-end Developer</h3>
        </div>
        <img
          src="/img/farzad.jpg"
          className="h-14 w-14 rounded-full object-cover ring-2 ring-gold-primary"
        />
      </div>
    </div>
  );
}
