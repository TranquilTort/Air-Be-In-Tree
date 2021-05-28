'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [
      {
      tree_id: 1,
      reviewer: 1,
      title: 'test',
      body: 'helooooooo this is a tesssssttt',
      stars: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ], {});

},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
