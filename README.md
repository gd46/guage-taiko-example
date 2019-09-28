# Taiko

An automated test framework that is meant to eliminate flaky tests by treating the browser as a blackbox. Write tests without opening the develoer console or coming up with selectors. Focus, Click, Write, elements based on their text and location near other elements. However, selectors are still supported. 

# Taiko vs Cucumber

## Terminology

specification(spec) -> feature
specification defined by #
scenario defind by ##
steps defined by *

Taiko is based off writing specs in markdown that links to implementation steps similar to Cucumber.

## Test Runner

Taiko can use a few different test runners but it is recommended to use [Gauge](https://gauge.org/getting-started-guide/create-specification/) The only requirement is node. You no longer need to worry about java versions, or updating webdriver manager.

# Notes

It is recommended to use visual studio with Gauge as it has a plugin that makes it easy to debug, run single tests, navigate to implemented steps, and more. 

