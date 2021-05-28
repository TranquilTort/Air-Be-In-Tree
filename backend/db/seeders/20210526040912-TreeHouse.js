'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Treehouses', [
      {
        title: 'Treehouse With Wrap-Around Deck',
        image:'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/4/17/0/HUHH2019-Escape_Fall-City-WA_19.jpg.rend.hgtvcom.966.725.suffix/1555507098172.jpeg',
        owner:1,
        tree_type:3,
        description: `This "Aprese Ski-House Treehouse" was featured on season 6 of Animal Planet show "Treehouse Masters." The sprawling, 10-acre property also features a wealth of other outdoor amenities, including an outdoor kitchen, hot tub, fireplace and sport court.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Treehouse v Brdech',
        owner:1,
        image:"https://cf.bstatic.com/images/hotel/max1024x768/263/263835412.jpg?hp=1",
        tree_type:4,
        description: `Treehouse v Brdech is located in Bohutín and offers a bar, a garden and water sports facilities. Featuring river and garden views, this lodge features 1 bedroom and opens to a terrace. Cycling can be enjoyed nearby. `,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'A Cabin in The Woods',
        owner:1,
        image:'https://www.thespruce.com/thmb/wAXiil7qjCeRc8R6YhqefOjYgEo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-166345736-58b87c223df78c353cbcec16.jpg',
        tree_type:6,
        description: `If you really want your treehouse to be one with nature, make it fit in! This rustic treehouse taken by sophiegardner gives us major fairy tale feels. The log cabin look is a great way to design a space that doesn't feel out of place against the trees and leaves. Have the interior reflect what you see outdoors by incorporating deep shades of green, natural wood, and wicker textures.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Simple But Sophisticated',
        owner:1,
        image:'https://www.thespruce.com/thmb/-TSJC1Eax2Jj43-M2GbYgqpelBA=/1080x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/treehousepete_52719314_2303158656396034_7383260223333311720_n-0996fba3604e44d9951fa6031738073f.jpg',
        tree_type:5,
        description: `This treehouse proves that sometimes simple is best. It has everything you need to create the perfect treetop getaway while being incredibly modern and mature. Iron accents and touches of white in the interior make this space a serene escape, perfect for those who are inspired by minimalism and Scandinavian style. `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Stacks On Stacks',
        owner:1,
        image:`https://www.thespruce.com/thmb/sReKvv3BRjq3ubxOEU_AxLclR74=/966x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chrisvhphoto_18646330_308560486262316_8141798468839538688_n-008443cafddc4110a1a0d7267becbf8a.jpg`,
        tree_type:4,
        description: `This picturesque dual-story treehouse is like something out of a picture book. Though it may be a little too elaborate for your standard backyard hideout, it's a stunning inspiration for your next getaway. Why stay in a hotel when you can spend the night with the birds, high above the trees?`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'A Backyard Paradise',
        owner:1,
        image:`https://www.thespruce.com/thmb/AscQyzhxi0GTzSQD65BH005stA8=/1080x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/stonecityvermont_61872912_2514947978526562_8056356120795600736_n-e1174aa31d9344e6902ddbcae9506fd7.jpg`,
        tree_type:2,
        description: `This adorable treehouse is the perfect home away from home. It's just large enough to hold a few overnight guests but quaint enough to feel wonderfully cozy. The little details like the cafe lights around the deck and the tree that comes up through the balcony make this treehouse the perfect tiny house. `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Stunning View',
        owner:1,
        image:'https://www.thespruce.com/thmb/kzzoedRGAGryMlGy1v1QAxpMPP8=/1080x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/nelsontreehouse_61234597_824768181211870_8550137160998732658_n-4f3830a3764240b09ea758c53d95a18b.jpg',
        tree_type:1,
        description: `An inside peek at this treehouse is the only proof we need that it's time to build a treehouse ASAP. Sure, oceanfront views are nice, but nothing compares to looking out from bed and seeing endless foliage without ever setting foot outside. We love the use of cool-toned neutral colors that still manage to make the space feel cozy. The nature-inspired textures within the space are also a perfect added touch.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },

  ], {});

},

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Treehouses', null, {});

}
};
