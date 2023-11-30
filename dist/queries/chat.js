const db = require("../db/dbConfig.js");

const getAllChatMessages = async () => {
    try {
        const messages = await db.any("SELECT * FROM messages2");
        return messages;
    } catch(err) {
        return err;
    }
};

const getMessagesFromOneRoom = async (id) => {
    try {
        const messages = await db.any("SELECT * FROM messages2 WHERE room_id = $1", [id]);
        return messages;
    } catch(err) {
        return err;
    }
};

const createNewMessage = async (item) => {
    const {room_id, message, user_name} = item;
    try{
        const chatMessage = await db.one("INSERT INTO messages2 (room_id, chat_message, user_name) VALUES ($1, $2, $3) RETURNING *", [room_id, message, user_name]);
        return chatMessage;
    } catch(err) {
        return err;
    }
};

module.exports = {
    getAllChatMessages,
    getMessagesFromOneRoom,
    createNewMessage,
}