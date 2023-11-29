const express = require("express");
const { getAllChatMessages, getMessagesFromOneRoom, createNewMessage } = require("../queries/chat");
const chat = express.Router();

chat.get("/", async (req,res) => {
    const chatMessage = await getAllChatMessages();
    
    if(chatMessage[0]){
        //no query, show everything
        res.status(200).json({ success: true, data: { payload: [...chatMessage] } });
    }
    else{
        //do something for queries
        res.status(200).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

chat.get("/:id", async (req,res) => {
    const { id } = req.params;
    const chatMessage = await getMessagesFromOneRoom(id);

    if(chatMessage[0]){
        //no query, show everything
        res.status(200).json({ success: true, data: { payload: [...chatMessage] } });
    }
    else{
        //do something for queries
        res.status(404).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

chat.post("/", async (req, res) => {
    try{
        const message = await createNewMessage(req.body);
        console.log(message);
        //res.json(posts);
    } catch(error) {
        res.status(400).json({error: "something missing in your header"});
    }
})

module.exports = chat;