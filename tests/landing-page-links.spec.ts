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

  const afterStyle = await frame.getAttribute("style");
  expect(afterStyle).toBe(beforeStyle);

  const image = frame.getByRole("img", { name: "Seally" });
  await expect(image).toHaveAttribute("src", /ski_mask\.png/);

  await expect(page.getByTestId("helmet-wrapper")).not.toHaveClass(
    /animate-float-bob/
  );

  await page.getByRole("button", { name: "Open App" }).nth(1).click();
  await expect(
    page.getByRole("img", { name: "Seal of approval" })
  ).toBeVisible();
});
