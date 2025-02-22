import express from "express";
import Collection from "../models/collections.model.js";

export const getCollections = async (req, res) => {
    try {
        const collections = await Collection.find();

        if (collections.length === 0) {
            return res.status(200).json({ 
                message: "No collections found",
                data: []
            });
        }

        res.status(200).json({
            message: "Collections retrieved successfully",
            count: collections.length,
            data: collections
        });

    } catch (error) {
        console.error("Error fetching collections:", error);
        res.status(500).json({ 
            message: "Server error occurred while fetching collections",
            error: process.env.NODE_ENV === 'development' ? error : undefined
        });
    }
};

export const createCollection = async (req, res) => { 
    try {
        const { title } = req.body;
        
        if (!title) {
            return res.status(400).json({
                message: "Title is required",
                field: "title"
            });
        }
        
        const newCollection = await Collection.create({title: title.trim()});
        newCollection.save();

        if (!newCollection) {
            return res.status(400).json({ 
                message: "Failed to create collection",
                data: []
            });
        }
        res.status(201).json({ 
            message: "Collection created successfully",
            data: newCollection
        });

    } catch(error) {
        console.error("Error creating collection:", error);
        res.status(500).json({
            message: "Server error occurred while creating collection",
            error: process.env.NODE_ENV === 'development' ? error : undefined
        })
    }
};

