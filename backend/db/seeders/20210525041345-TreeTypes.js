'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('TreeTypes', [
        {
        name: 'Oak',
        image: "https://chopmytree.com/wp-content/uploads/2018/09/oak.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pine',
        image: 'https://leafyplace.com/wp-content/uploads/2019/11/post1646.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Red Wood',
        image: 'https://i.guim.co.uk/img/media/14a1e387112fde10cf3805ba05cc1eac77ce78f0/0_166_5000_3002/master/5000.jpg?width=1200&quality=85&auto=format&fit=max&s=e5585e37a788a91a9a694f5afb102ebd',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('TreeTypes', null, {});

  }
};
