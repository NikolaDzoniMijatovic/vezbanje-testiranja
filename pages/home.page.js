"use strict";

const { expect } = require("chai");
const { By, Key, until } = require("selenium-webdriver");

module.exports = class HomePage {
    #driver;

    constructor(webdriver) {
        this.#driver = webdriver;
    }

    goToPage() {
        this.#driver.get("https://automationexercise.com/");
    }
}