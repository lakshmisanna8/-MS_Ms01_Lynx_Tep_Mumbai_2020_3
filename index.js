// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
debugger;
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;
/*console.log(faker.cosmetics.hair_care_products())
console.log(faker.cosmetics.skin_care_products())*/