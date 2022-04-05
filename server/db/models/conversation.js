const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {});

// new methods to find conversation based on an array of user IDs
// array is passed to each potenial userId when selecting

Conversation.formatQuerySelection = function(userArray){
  let selection = {
    where: {}
  },
      count = 1;
  for (let i = 0; i < userArray.length; i++){
    let idString = `user${count}id`;
    selection.where[idString] = {
      '[Op.or]': userArray
    }
    count++
  }
  return selection
}

Conversation.formatCreation = function(sender, recipientArray){
  let selection = {
    user1Id: sender
  },
    count = 2;
  for (let i = 0; i < recipientArray.length; i++){
    let idString = `user${count}id`;
    selection[idString] = recipientArray[i]
    count++
  }
  return selection;
}

Conversation.findConversation = async function (array) {
  const query = formatSelection(array)
  // create a query based on array of users passed in
  const conversation = await Conversation.findOne({
query  });
  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;
