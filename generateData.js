// execute: yarn json-server generateData.js
// verifique em localhost:3000 os dados gerados automaticamente
module.exports = function () {
    var faker = require('faker');
    var lodash = require('lodash');
    return {
        foods: lodash.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                image: faker.image.image(),
                available: faker.datatype.boolean()
            }
        })
    }
}