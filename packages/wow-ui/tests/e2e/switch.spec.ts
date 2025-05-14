import { expect, test } from "@playwright/test";

test("switch toggles correctly in storybook", async ({ page }) => {
  await page.goto("/?path=/story/ui-switch--primary");

  const frame = page.frameLocator("#storybook-preview-iframe");

  const switchInput = frame.getByLabel("switch");
  const inputId = await switchInput.getAttribute("id");

  const switchComponent = frame.locator(`label[for="${inputId}"]`);

  await expect(switchComponent).not.toBeChecked();

  await switchComponent.click();
  await expect(switchComponent).toBeChecked();

  await switchComponent.click();
  await expect(switchComponent).not.toBeChecked();
});
