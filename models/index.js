const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.hasMany(Post)

Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
Comments.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Post.hasMany(Comments);

User.hasMany(Comments);


module.exports = { User, Post, Comments };
