"use strict";

require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By, Key, until } = require("selenium-webdriver");
const chai = require("chai");
const { assert, expect } = require("chai");

const HomePage = require("../pages/home.page");

describe("shop.QA.rs tests", function() {
    let driver;
    let pageHomepage;

    before(function() {
        driver = new webdriver.Builder().forBrowser("chrome").build();
        pageHomepage = new HomePage(driver);
    });

    after(async function() {
        await driver.quit();
    });

    it("Verify home page is open", async function() {
        await pageHomepage.goToPage();
    })
});
    
