'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('TreeTypes', [
        {
        name: 'Oak',
        image: "https://i.redd.it/gs6etjlh4evy.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pine',
        image: 'https://cff2.earth.com/uploads/2018/08/20180118/Here%E2%80%99s-what-gives-pine-trees-that-fresh-scent-.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Red Wood',
        image: 'https://i.guim.co.uk/img/media/14a1e387112fde10cf3805ba05cc1eac77ce78f0/0_166_5000_3002/master/5000.jpg?width=1200&quality=85&auto=format&fit=max&s=e5585e37a788a91a9a694f5afb102ebd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maple',
        image: 'https://www.gardeningknowhow.com/wp-content/uploads/2013/08/red-maple-tree-picture-id1168312073.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Aspen',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Snowbowlaspens.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sycamore',
        image: 'https://www.jawhm.or.jp/blog/workingholiday-infocenter/wp-content/uploads/sites/26/2021/03/%E3%83%AF%E3%83%BC%E3%83%9B%E3%83%AA-%E8%8A%B1%E7%B2%89%E7%97%872ork.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },


    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('TreeTypes', null, {});

  }
};
