const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
    try {
        const users = await db.any("SELECT * FROM users");
        return users;
    } catch(err) {
        return err;
    }
}

const getOneUser = async (id) => {
    console.log(`received id is ${id}`);
    try{
        const user = await db.any(`SELECT * FROM users WHERE user_id = ${id}`);
        return user;
    } catch(err) {
        return err;
    }
}

const createOneUser = async (item) => {
    console.log("======================")
    console.log("received item is ...")
    console.log(item)
    console.log("======================")
    const { user_name, user_password } = item;
    if(!user_name || !user_password ){
        return {error: "something is missing"};
    }
    try {
        const message = await db.one(`INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *`, [user_name, user_password]);
        return message;
    } catch(err){
        return err;
    }
}


const updateOneUser = async(id, item) => {
    const { user_name, user_password } = item;
    try {
        const message = await db.one(`UPDATE users SET user_name=$1 user_password=$2 WHERE user_id = ${id} RETURNING *`,[user_name, user_password]);
        return message;
    } catch(err){
        return err;
    }
}


const deleteOneUser = async(id) => {
    try {
        const user = await db.one(`DELETE FROM users WHERE user_id = ${id} RETURNING *`);
        return user;
    } catch(err){
        return err;
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createOneUser,
    updateOneUser,
}