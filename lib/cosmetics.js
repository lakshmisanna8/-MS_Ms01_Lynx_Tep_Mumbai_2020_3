/**
 *
 * @namespace faker.cosmetics
 */
var Cosmetics = function (faker) {
    var self = this;
    var fake = faker.fake;
    /**
  * skin_care_products
  *
  * @method faker.cosmetics.skin_care_products
  */
    self.skin_care_products = function () {
      return faker.random.arrayElement(faker.definitions.cosmetics.skin_care_products);
    };
   
    
  /*  self.skin_care_products.schema = {
      "description": "Generates a cosmetics beverages.",
      "sampleResults": ["cleanser", "Eye Cream", "Spot Treatment"]
    };*/
  /** 
    fragrances
    *
    * @method faker.cosmetics.fragrances
    */
      self.fragrances = function () {
        return faker.random.arrayElement(faker.definitions.cosmetics.fragrances);
      };
     
      
      
    /*  self.fragrances.schema = {
        "description": "Generates a cosmetics fragrances",
        "sampleResults": ["Wild stone", "Yarderly london", "Envy luxure"]
      };*/
    /**
       * hair_care_products
       *
       * @method faker.cosmetics.hair_care_products
       */
    self.hair_care_products = function () {
      return faker.random.arrayElement(faker.definitions.cosmetics.hair_care_products);
    };

   /* self.hair_care_products.schema = {
      "description": "Generates a cosmetics hair_care_products.",
      "sampleResults": ["Himalaya herbals", "Aroma magic castor oil", "Newgen hair oil"]
    }; */
  };

  module["exports"] = Cosmetics;  