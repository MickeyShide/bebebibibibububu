import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/app";
import "@/app/styles/global.css";
import { initializeViewportHeight } from "@/shared/lib/viewport";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const teardownViewport = initializeViewportHeight();

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    teardownViewport();
  });
}
