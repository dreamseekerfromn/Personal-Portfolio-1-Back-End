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

const searchOneUser = async (user_email) => {
    try{
        const user = await db.one(`SELECT * FROM users WHERE user_email = ${user_email}`);
        return user;
    } catch(err){
        return err;
    }
}

const createNewUser = async (item) => {
    console.log("======================")
    console.log("received item is ...")
    console.log(item)
    console.log("======================")
    const { user_email, user_password, user_name } = item;
    if(!user_email || !user_password || !user_name){
        return {error: "something is missing"};
    }
    try {
        const message = await db.one(`INSERT INTO users (user_email, user_password, user_name) VALUES ($1, $2, $3) RETURNING *`, [user_email, user_password, user_name]);
        return message;
    } catch(err){
        return err;
    }
}

const updateOneUser = async(id, item) => {
    const { user_email, user_password, user_name } = item;
    try {
        const message = await db.one(`UPDATE users SET user_name=$3 user_password=$2 user_email=$1 WHERE user_id = ${id} RETURNING *`,[user_email, user_password, user_name]);
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
    createNewUser,
    updateOneUser,
    deleteOneUser,
    searchOneUser,
}