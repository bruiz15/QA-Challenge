var faker = require('faker');
var randomDescription = faker.lorem.words()
var randomTitle = faker.lorem.words()

export const INFO = {
    VALID_NOTE : {
        title : randomTitle,
        description : randomDescription
    }
}