const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");

// associations

User.hasMany(Conversation);
Conversation.belongsTo(User, {as: 'user1'})
Conversation.belongsTo(User, { as: "user2" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);

// new proposed associations
// Conversation.belongsToMany(User, { as: 'groupUser', through: 'groupChat' });
// User.belongsToMany(Conversation, {as: 'groupUser', through: 'groupChat'})

module.exports = {
  User,
  Conversation,
  Message
};
