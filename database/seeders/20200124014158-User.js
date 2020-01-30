'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    "Users",
    [{
      firstName: 'Joan',
      lastName: 'Mitchell',
      email: 'joanmitchell@fake.com',
      password: 'joansFakePassword1'
     },
     {
      firstName: 'Frida',
      lastName: 'Kahlo',
      email: 'fridakahlo@fake.com',
      password: 'fridasFakePassword1'
     },
     {
      firstName: 'Amy',
      lastName: 'Sherald',
      email: 'amysherald@fake.com',
      password: 'amysFakePassword1'
     },
     {
      firstName: 'Artemisia',
      lastName: 'Gentileschi',
      email: 'artemisiagentileschi@fake.com',
      password: 'artemisiasFakePassword1'
     },
     {
      firstName: 'Mickalene',
      lastName: 'Thomas',
      email: 'mickalenethomas@fake.com',
      password: 'mickalenesFakePassword1'
     }
    ]
  ),

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
