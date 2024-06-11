import { test as it } from "@playwright/test";
import { Drag_and_Drop } from "../../page_object/Drag_and_drop";

it.describe("DRAG AND DROP", () => {
  it("drag and drop", async ({ page }) => {
    let dragAndDrop = new Drag_and_Drop(page);
    // await page.goto(`{process.env.LAMBDA}/selenium-playground/drag-and-drop-demo`)
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/drag-and-drop-demo"
    );
    await dragAndDrop.dragAndDropEl("Draggable 1");
    await dragAndDrop.dragAndDropEl("Draggable 2");
    await page.reload()
    await dragAndDrop.dragAndDropElOpt2("Draggable 1")
    await dragAndDrop.dragAndDropElOpt2("Draggable 2")
  });
});
