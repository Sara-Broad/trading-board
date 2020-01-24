'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    "Posts",
    [{

      /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.

        Example:
        return queryInterface.bulkInsert('People', [{
          name: 'John Doe',
          isBetaMember: false
        }], {});
      */
      // Joan Mitchell
      // Frida Kahlo
      // Amy Sherald
      // Artemisia Gentileschi
      // Mickalene Thomas
    }]
  ),

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Posts', null, {});
  }
};
