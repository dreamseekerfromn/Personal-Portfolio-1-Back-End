const express = require("express");
const { getAllRooms, createNewRoom, deleteOneRoom } = require("../queries/rooms");
const rooms = express.Router();

rooms.get("/", async (req, res) => {
    try{
        const roomList = await getAllRooms();
        console.log(roomList)
        if(roomList[0]){
            res.status(200).json({ success: true, data: { payload: [...roomList] } });
        }
        else{
            res.status(200).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
        }
    } catch(err){
        console.log(err);
    }
});

rooms.post("/", async (req, res) => {
    try{
        const room = await createNewRoom(req.body);
        console.log(room);
        //res.json(posts);
    } catch(error) {
        res.status(400).json({error: "something missing in your header"});
    }
})

rooms.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const room = await deleteOneRoom(id);
    if(room){
        res.status(200).json(room);
    }
    else{
        res.status(404).json("wrong");
    }
});

module.exports = rooms;