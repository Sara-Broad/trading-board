module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    "Posts", 
    [{
        userId: '1',
        title: 'Candles',
        description: 'Giving away four vanilla scented candles',
        city: 'Philadelphia',
        state: 'PA',
        neighborhood: 'East Falls',
        contactName: 'Joan Mitchell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '1',
        title: 'Grey Wool',
        description: 'Bought too much grey wool and want to give some away',
        city: 'Philadelphia',
        state: 'PA',
        neighborhood: 'East Falls',
        contactName: 'Joan Mitchell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '3',
        title: 'Tubes of Paint',
        description: 'Cleaning out my studio and giving awat some partially used tubes of paint',
        city: 'Philadelphia',
        state: 'PA',
        neighborhood: 'South Philadelphia',
        contactName: 'Amy Sherald',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '2',
        title: '9X9 Picture Frame',
        description: 'I bought this by accident and don\'t need it',
        city: 'Philadelphia',
        state: 'PA',
        neighborhood: 'Center City',
        contactName: 'Frida Kahlo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  ),

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Posts', null, {});
  }
};

