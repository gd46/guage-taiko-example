/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, textBox, toRightOf, click, below } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step("Goto getgauge github page", async () => {
    await goto('https://github.com/getgauge');
});

step("Search for <query>", async (query) => {
    await focus(textBox(toRightOf('Pricing')))
    await write(query);
    await press('Enter');
});

step("Page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});

step("Click <repoName> repo link", async(repoName) => {
    await click("taiko");
});

step("Page should have title", async() => {
    assert.ok(await text("getgauge/taiko").exists());
});

step("Click sign up in banner", async() => {
    await click("Sign up", below("Grow your team on GitHub"));
});

step("Should be on the sign up page", async() => {
    assert.ok(await text("Join GitHub").exists());
});