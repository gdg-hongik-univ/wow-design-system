import { expect, test } from "@playwright/test";

test("checkbox toggles correctly in storybook", async ({ page }) => {
  await page.goto("/?path=/story/ui-checkbox--default");

  const frame = page.frameLocator("#storybook-preview-iframe");

  const checkbox = frame.getByLabel("checkbox");

  await expect(checkbox).not.toBeChecked();

  await checkbox.click();
  await expect(checkbox).toBeChecked();

  await checkbox.click();
  await expect(checkbox).not.toBeChecked();
});
