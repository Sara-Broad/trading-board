module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    "Users",
    [{
      firstName: 'Joan',
      lastName: 'Mitchell',
      email: 'joanmitchell@fake.com',
      password: 'joansFakePassword1',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      firstName: 'Frida',
      lastName: 'Kahlo',
      email: 'fridakahlo@fake.com',
      password: 'fridasFakePassword1',
      createdAt: new Date(),
      updatedAt: new Date()     
     },
     {
      firstName: 'Amy',
      lastName: 'Sherald',
      email: 'amysherald@fake.com',
      password: 'amysFakePassword1',
      createdAt: new Date(),
      updatedAt: new Date()     
     },
     {
      firstName: 'Artemisia',
      lastName: 'Gentileschi',
      email: 'artemisiagentileschi@fake.com',
      password: 'artemisiasFakePassword1',
      createdAt: new Date(),
      updatedAt: new Date()     
     },
     {
      firstName: 'Mickalene',
      lastName: 'Thomas',
      email: 'mickalenethomas@fake.com',
      password: 'mickalenesFakePassword1',
      createdAt: new Date(),
      updatedAt: new Date()     
    }]
  ),

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
