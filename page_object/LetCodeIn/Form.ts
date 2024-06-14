import { Page, expect } from "@playwright/test";
import _ from "lodash";

export class Form {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get dropDownCountryCode (){
    return ('div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div > select')
  }
  get dropDownCountry (){
    return ('div > div > form > div:nth-child(5) > div:nth-child(2) > div > div > div > select')
  }
  get DOB (){
    return ('#Date')
  }
  get gender (){
    return '[name="gender"]'
  }
  get submitButton (){
    return ('div > div > form > div.field.is-grouped > div')
  }

    async interactWithDropDown(){
        await this.page.locator('#firstname').fill('Tania');
        await this.page.locator('#lasttname').fill('Krasnova');
        await this.page.locator('#email').fill('TK@yahoo.com');
        await this.page.locator(this.dropDownCountryCode).click();
        await this.page.locator(this.dropDownCountryCode).selectOption({label: 'Ukraine (+380)'});
        await this.page.locator('#Phno').fill('123456789')
        await this.page.locator('#Addl1').fill('123 Adams str')
        await this.page.locator('#Addl2').fill('456 Adams str')
        await this.page.locator('#state').fill('NY');
        await this.page.locator('#postalcode').fill('00000');
        await this.page.locator(this.dropDownCountry).click();
        await this.page.locator(this.dropDownCountry).selectOption({value: 'Ukraine'});
        await this.page.locator(this.DOB).click()
        let randomGender = _.random(0, 2)
        await this.page.locator(this.gender).nth(randomGender).check()
        // await this.page.locator('[href="#"]').click() //terms and conditions
        // await this.page.reload()
        await this.page.locator('[type="checkbox"]').check()
        await this.page.locator(this.submitButton).click()
       
    }
}
