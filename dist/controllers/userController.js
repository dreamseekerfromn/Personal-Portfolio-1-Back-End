const express = require("express");
const { getAllUsers, getOneUser, createNewUser, deleteOneUser, searchOneUser, updateOneUser } = require("../queries/user");
const users = express.Router();

/** get */
users.get("/", async (req, res) => {
    const userQuery = await getAllUsers();
    console.log(userQuery);
    if(userQuery[0]){
        //no query, show everything
        res.status(200).json({ success: true, data: { payload: [...userQuery] } });
    }
    else{
        //do something for queries
        res.status(200).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

users.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log("id is ..." + id)
    const user = await getOneUser(id);
    console.log(user)
    if(user[0] && user.length >= 1){
        //no query, show everything
        res.status(200).json({ success: true, data: { payload: user[0] } });
    }
    else{
        //do something for queries
        res.status(404).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

users.post("/login", async (req,res) => {
    try{
        const user = await searchOneUser(req.body.user_email);
        console.log(user)
        if(user){
            if(user["user_password"] == req.body.user_password){
                //return something
                console.log(user)
                res.status(200).json({ success: true, data: { payload: user } });
            }
        }
        else{
            res.status(400).json({error: "something missing"});
        }
    } catch(error){
        res.status(400).json({error: "something missing"});
    }
});

users.post("/", async (req, res) => {
    //const {name, artist, album, time, is_favorite} = req.body;
    try{
        const user = await createNewUser(req.body);
        console.log(user)
        res.json(user);
    } catch(error) {
        res.status(400).json({error: "something missing in your header"});
    }
});

users.put("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    try{
        const user = await updateOneUser(id, req.body);
        console.log("hello")
        console.log(user)
        res.status(200).json({success: true, data: { payload: user } })
    } catch(err){
        res.status(400).json({error: "something missing in your header"});
    }
})


/** delete */
users.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await deleteOneUser(id);
    if(user){
        res.status(200).json(user);
    }
    else{
        res.status(404).json("wrong");
    }
});

users.put("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await updateOneUser(id, req.body);
    if(user){
        res.status(200).json({ success: true, data: { payload: user } });
    }else{
        res.status(400).json({error: "cannot update"});
    }
})
/** page 404 */
users.get("*", (req, res) => {
    res.status(404).send("with incorrect id - sets status to 404 and returns error key");
});

module.exports = users;