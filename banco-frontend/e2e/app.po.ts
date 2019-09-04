import { browser, element, by } from 'protractor';

export class BancoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bc-root h1')).getText();
  }
}
