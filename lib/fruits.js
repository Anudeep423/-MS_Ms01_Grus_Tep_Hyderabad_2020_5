/**
 *
 * @namespace faker.database
 */
var Fruits = function (faker) {
    var self = this;
    /**
     * column
     *
     * @method faker.database.column
     */
    self.color = function () {
        return faker.random.arrayElement(faker.definitions.fruits.color);
    };
  
//     self.column.schema = {
//       "description": "Generates a column name.",
//       "sampleResults": ["id", "title", "createdAt"]
//     };
  
//     /**
//      * type
//      *
//      * @method faker.database.type
//      */
//     self.type = function () {
//         return faker.random.arrayElement(faker.definitions.database.type);
//     };
  
//     self.type.schema = {
//       "description": "Generates a column type.",
//       "sampleResults": ["byte", "int", "varchar", "timestamp"]
//     };
  
//     /**
//      * collation
//      *
//      * @method faker.database.collation
//      */
//     self.collation = function () {
//         return faker.random.arrayElement(faker.definitions.database.collation);
//     };
  
//     self.collation.schema = {
//       "description": "Generates a collation.",
//       "sampleResults": ["utf8_unicode_ci", "utf8_bin"]
//     };
  
//     /**
//      * engine
//      *
//      * @method faker.database.engine
//      */
//     self.engine = function () {
//         return faker.random.arrayElement(faker.definitions.database.engine);
//     };
  
//     self.engine.schema = {
//       "description": "Generates a storage engine.",
//       "sampleResults": ["MyISAM", "InnoDB"]
//     };
   };
  
  module["exports"] = Fruits;