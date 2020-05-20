#!/usr/bin/env node

var faker = require('../../index');
faker.locale = "en";
debugger;
//console.log(faker.lorem.sentences())
console.log(faker.cosmetics)
return;
console.log(faker.name.findName())

//console.log(faker.address)
console.log(faker.internet.email())

console.log(faker.date.recent())

console.log(faker.helpers.contextualCard());

faker.locale = "en";
console.log(faker.helpers.contextualCard());
