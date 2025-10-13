import { BrowserRouter } from "react-router-dom";

import { AnimatedRoutes } from "./routes/AnimatedRoutes";

export const App = () => (
  <BrowserRouter>
    <div className="w-full bg-black text-white">
      <AnimatedRoutes />
    </div>
  </BrowserRouter>
);
