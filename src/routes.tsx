import Dashboard from "./Pages/Dashboard/Dashboard";
import Gold from "./Pages/Gold/Gold";
import Crypto from "./Pages/Crypto/Crypto";
import Currency from "./Pages/Currency/Currency";

const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/Dashboard", element: <Dashboard /> },
  { path: "/Gold", element: <Gold /> },
  { path: "/Crypto", element: <Crypto /> },
  { path: "/Currency", element: <Currency /> },
];

export default routes;