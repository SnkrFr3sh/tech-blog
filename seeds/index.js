const sequelize = require('../config/connection');
const { Blog, Comments } = require('../models');
const { User } = require('../models')


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Blogpost.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  await Comments.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();
