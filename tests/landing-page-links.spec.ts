import { test, expect } from "@playwright/test";

test("app links point to swap/lending/agent", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open App" }).first().click();

  await expect(
    page.getByRole("link", { name: /Seally DEX/i })
  ).toHaveAttribute("href", "https://swap.seally.app");

  await expect(
    page.getByRole("link", { name: /Seally Lending/i })
  ).toHaveAttribute("href", "https://lending.seally.app");

  await expect(
    page.getByRole("link", { name: /Seally Agent/i })
  ).toHaveAttribute("href", "https://agent.seally.app");

  await expect(
    page.getByRole("link", { name: /Open DEX/i })
  ).toHaveAttribute("href", "https://swap.seally.app");

  await expect(page.getByRole("button", { name: "DEX" })).toHaveClass(
    /cursor-pointer/
  );

  await expect(
    page.getByRole("button", { name: "Open App" }).first()
  ).toHaveClass(/cursor-pointer/);

  const frame = page.getByTestId("helmet-frame");
  const beforeStyle = await frame.getAttribute("style");

  await frame.getByRole("button", { name: "Sealed" }).click();

  const image = frame.getByRole("img", { name: "Seally" });
  const toSealedVideo = frame.getByTestId("helmet-transition");
  await expect(toSealedVideo).toHaveAttribute(
    "src",
    /switch_to_skimask\.mp4/
  );
  await expect(image).toHaveAttribute("style", /filter:\s*none/);
  await expect(frame.locator(".sticker-badge")).toHaveCount(0);
  await toSealedVideo.evaluate((video) => {
    video.dispatchEvent(new Event("ended"));
  });

  const afterStyle = await frame.getAttribute("style");
  expect(afterStyle).toBe(beforeStyle);

  await expect(image).toHaveAttribute("src", /ski_mask\.png/);

  await expect(page.getByTestId("helmet-wrapper")).not.toHaveClass(
    /animate-float-bob/
  );

  await frame.getByRole("button", { name: "Fast" }).click();
  await expect(image).toHaveAttribute("src", /seal_wif_hat\.png/);
  const toFastVideo = frame.getByTestId("helmet-transition");
  await expect(toFastVideo).toHaveAttribute("src", /switch_to_hat\.mp4/);
  await toFastVideo.evaluate((video) => {
    video.dispatchEvent(new Event("ended"));
  });
  await expect(image).toHaveAttribute("src", /seal_wif_hat\.png/);

  await page.getByRole("button", { name: "Open App" }).nth(1).click();
  await expect(
    page.getByRole("img", { name: "Seal of approval" })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "One App. Two Modes." })
  ).toBeVisible();

  const fastCard = page.getByRole("heading", { name: "FAST" }).first();
  await expect(fastCard).toBeVisible();
  await expect(page.getByText("STANDARD EXECUTION")).toBeVisible();
  await expect(page.getByText("Direct Routing (Raydium)")).toBeVisible();
  await expect(page.getByText("Max Speed (400ms)")).toBeVisible();
  await expect(page.getByText("Public Visibility")).toBeVisible();

  const sealedCard = page.getByRole("heading", { name: "SEALED" }).first();
  await expect(sealedCard).toBeVisible();
  await expect(page.getByText("PRIVACY-PRESERVING")).toBeVisible();
  await expect(page.getByText("Agentic TEE Routing")).toBeVisible();
  await expect(page.getByText("MagicBlock Ephemeral Rollup")).toBeVisible();
  await expect(page.getByText("Reduced Linkability")).toBeVisible();
  await expect(page.getByText("Verified by Seal")).toBeVisible();
  await expect(page.getByText("Powered by Inco + Arcium")).toBeVisible();
});
