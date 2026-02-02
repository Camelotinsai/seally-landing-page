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
});
