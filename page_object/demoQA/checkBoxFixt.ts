import {test as base} from "@playwright/test";
import { CheckBox } from "./CheckBox";

type Fixture = {
    checkBox: CheckBox
}

export const test = base.extend<Fixture> ({
    checkBox: async ({page}, use) => {
        const checkBox= new CheckBox(page);
        await checkBox.goto();
        await checkBox.extandOption();
        await use(checkBox);

    }
})