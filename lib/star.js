//@namespace faker.star

var Star = function (faker) {
var self = this;
var fake = faker.fake;


//@method faker.star.type

self.type = function () {
return faker.random.arrayElement(faker.definitions.star.type);
};

//@method faker.star.name

self.galaxy = function() {
return faker.random.arrayElement(faker.definitions.star.galaxy);
};
};

module["exports"] = Star;
