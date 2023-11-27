const db = require("../db/dbConfig.js");

const getAllRooms = async () => {
    try {
        const rooms = await db.any("SELECT * FROM rooms");
        return rooms;
    } catch(err) {
        return err;
    }
}

const getOneRoom = async (item) => {
    try {
        const room = await db.one("SELECT * FROM rooms WHERE room_id = $1", [item.id]);
        return room;
    } catch(err) {
        return err;
    }
}

const deleteOneRoom = async(id) => {
    try {
        const room = await db.one(`DELETE FROM rooms WHERE room_id = ${id} RETURNING *`);
        return room;
    } catch(err){
        return err;
    }
}

const createNewRoom = async (item) => {
    console.log("======================")
    console.log("received item is ...")
    console.log(item)
    console.log("======================")
    const { room_name } = item;
    if(!room_name){
        return {error: "something is missing"};
    }
    try {
        const room = await db.one(`INSERT INTO rooms (room_name) VALUES ($1) RETURNING *`, [room_name]);
        return room;
    } catch(err){
        return err;
    }
}

module.exports = {
    getAllRooms,
    deleteOneRoom,
    createNewRoom,
    getOneRoom,
}