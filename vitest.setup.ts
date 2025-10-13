import "@testing-library/jest-dom/vitest";

import { cleanup, configure } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";
import { afterEach, expect } from "vitest";

expect.extend(toHaveNoViolations);

configure({ asyncUtilTimeout: 5000 });

afterEach(() => {
  cleanup();
});

