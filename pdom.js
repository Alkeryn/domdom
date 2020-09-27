#!/usr/bin/env node

const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;

var data = fs.readFileSync(0,'utf-8')

const dom = new JSDOM(data);
const document = dom.window.document

var args = process.argv.slice(2)

result = eval(args[0])

if(result !== null) {
    console.log(result);
}
else {
    console.log("no result found");
}
