module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    "Users",
    [{
      fullName: 'Joan Mitchell',
      email: 'joanmitchell@fake.com',
      password: 'joansFakePassword1',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      fullName: 'Frida Kahlo',
      email: 'fridakahlo@fake.com',
      password: 'fridasFakePassword1',
      createdAt: new Date(),
      updatedAt: new Date()     
     },
     {
      fullName: 'Amy Sherald',
      email: 'amysherald@fake.com',
      password: 'amysFakePassword1',
      createdAt: new Date(),
      updatedAt: new Date()     
     },
     {
      fullName: 'Artemisia Gentileschi',
      email: 'artemisiagentileschi@fake.com',
      password: 'artemisiasFakePassword1',
      createdAt: new Date(),
      updatedAt: new Date()     
     },
     {
      fullName: 'Mickalene Thomas',
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
