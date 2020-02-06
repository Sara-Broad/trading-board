module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    "Posts",
    [
      {
        title: 'Candles',
        description: 'Giving away four vanilla scented candles',
        city: 'Philadelphia',
        state: 'PA',
        neighborhood: 'East Falls',
        contactName: 'Joan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Grey Wool',
        description: 'Bought too much grey wool and want to give some away',
        city: 'Philadelphia',
        state: 'PA',
        neighborhood: 'East Falls',
        contactName: 'Joan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Tubes of Paint',
        description: 'Cleaning out my studio and giving awat some partially used tubes of paint',
        city: 'Philadelphia',
        state: 'PA',
        neighborhood: 'South Philadelphia',
        contactName: 'Amy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '9X9 Picture Frame',
        description: 'I bought this by accident and don\'t need it',
        city: 'Philadelphia',
        state: 'PA',
        neighborhood: 'Center City',
        contactName: 'Frida',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  ),

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Posts', null, {});
  }
};

