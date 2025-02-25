import express from "express";
import mongoose from "mongoose";
import Collection from "../models/collections.model.js";

export const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find();

    if (collections.length === 0) {
      return res.status(200).json({
        message: "No collections found",
        data: [],
      });
    }

    res.status(200).json({
      message: "Collections retrieved successfully",
      count: collections.length,
      data: collections,
    });
  } catch (error) {
    console.error("Error fetching collections:", error);
    res.status(500).json({
      message: "Server error occurred while fetching collections",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const createCollection = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
        field: "title",
      });
    }

    const newCollection = await Collection.create({ title: title.trim() });
    newCollection.save();

    if (!newCollection) {
      return res.status(400).json({
        message: "Failed to create collection",
        data: [],
      });
    }
    res.status(201).json({
      message: "Collection created successfully",
      data: newCollection,
    });
  } catch (error) {
    console.error("Error creating collection:", error);
    res.status(500).json({
      message: "Server error occurred while creating collection",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const getCollectionById = async (req, res) => {
  try {
    const { id } = req.params;

    const collection = await Collection.findById(id);

    if (!collection) {
      return res.status(404).json({
        message: "collection not found",
        data: null,
      });
    }

    res.status(200).json({
      message: "Collection retrieved successfully",
      data: collection,
    });
  } catch (error) {
    console.error("Error getting collection:", error);
    res.status(500).json({
      message: "Server error occurred while fetching collection",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const updateCollection = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCollection = await Collection.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCollection) {
        return res.status(404).json({
            success: false,
            message: "collection not found"
        })
    }
    return res.status(200).json({
        success: true,
        data: updatedCollection
      });

  } catch (error) {
    console.error("Error updating collection:", error);
    res.status(500).json({
      message: "Server error occurred while updating collection",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

export const deleteCollection = async (req, res) => {
  try {
    const {id} = req.params;

    const result = await Collection.deleteOne({ _id: id }); // Rename variable for clarity

    if (result.deletedCount === 0) { 
      return res.status(404).json({ 
        success: false,
        message: "Collection not found",
      });
    }

    res.status(200).json({
      success :true,
      message: "collection deleted succesfully"
    })

  } catch(error) {
    console.error("Error deleting collection:", error);
    res.status(500).json({
      success: false,
      message: "Server error occurred while deleting collection",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
