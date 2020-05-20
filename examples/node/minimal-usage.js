#!/usr/bin/env node

var faker = require('../../index');
faker.locale = "en";
debugger;
//console.log(faker.lorem.sentences())
console.log(faker.cosmetics.hair_care_products())
console.log(faker.cosmetics.skin_care_products())
console.log(faker.cosmetics.fragrances())
/*console.log(faker.name.findName());
console.log(faker.internet.email())*/
return;
console.log(faker.date.recent())

console.log(faker.helpers.contextualCard());

faker.locale = "en";
console.log(faker.helpers.contextualCard());