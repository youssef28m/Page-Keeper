
import express from "express";
import {getCollectionById, createCollection, getCollections ,updateCollection} from "../controllers/collection.controllers.js";
import { validateObjectId } from "../middleware/validationMiddleware.js";


const collectionRouter = express.Router();

collectionRouter.get("/", getCollections);

collectionRouter.get("/:id",validateObjectId, getCollectionById)

collectionRouter.post("/", createCollection);

collectionRouter.put("/:id",validateObjectId, updateCollection)

collectionRouter.delete("/:id", (req, res) => {   
    res.send("delete collection");  
});

export default collectionRouter;

