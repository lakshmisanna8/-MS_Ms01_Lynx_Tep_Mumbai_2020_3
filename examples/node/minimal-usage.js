#!/usr/bin/env node

var faker = require('../../index');
faker.locale = "en";
debugger;
//console.log(faker.lorem.sentences())

console.log(faker.name.findName())
console.log(faker.internet.email())
return;
console.log(faker.date.recent())

console.log(faker.helpers.contextualCard());

faker.locale = "en";
console.log(faker.helpers.contextualCard());
