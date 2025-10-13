declare module "jest-axe" {
import type { MatcherState, RawMatcherFn } from "@vitest/expect";

export const toHaveNoViolations: RawMatcherFn<MatcherState, []>;
}

