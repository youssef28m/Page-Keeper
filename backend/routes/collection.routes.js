
import express from "express";
import { createCollection, getCollections } from "../controllers/collection.controllers.js";


const collectionRouter = express.Router();

collectionRouter.get("/", getCollections);

//collectionRouter.get("/:id", )

collectionRouter.post("/", createCollection);

collectionRouter.put("/:id", (req, res) => {
    res.send("update collection");
})

collectionRouter.delete("/:id", (req, res) => {   
    res.send("delete collection");  
});

export default collectionRouter;

