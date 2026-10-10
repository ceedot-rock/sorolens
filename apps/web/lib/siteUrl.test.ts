import { afterEach, describe, expect, it, vi } from "vitest";
import { siteUrl } from "./siteUrl";

describe("siteUrl", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns NEXT_PUBLIC_SITE_URL without a trailing slash", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://staging.sorolens.dev/");
    expect(siteUrl()).toBe("https://staging.sorolens.dev");
  });

  it("returns the value unchanged when there is no trailing slash", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://staging.sorolens.dev");
    expect(siteUrl()).toBe("https://staging.sorolens.dev");
  });

  it("falls back to the production origin when the env var is unset", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", undefined);
    expect(siteUrl()).toBe("https://sorolens.dev");
  });
});
