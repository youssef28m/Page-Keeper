import express from "express";
import { validateObjectId } from "../middleware/validationMiddleware.js";

const bookmarksRouter = express.Router()

bookmarksRouter.get("/", (req, res) => {
    res.send("get all bookmarks")
})

bookmarksRouter.get("/:id", (req, res) => {
    res.send("get one bookmark")
})

bookmarksRouter.post("/", (req, res) => {
    res.send("create bookmark")
})

bookmarksRouter.put("/", (req, res) => {
    res.send("update bookmark")
})

bookmarksRouter.delete("/", (req, res) => {
    res.send("delete bookmark")
})
