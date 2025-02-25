import { use } from "react";
import { useState, useEffect } from "react";

export function useCollections() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [addError, setAddError] = useState(null);


  async function fetchCollections() {
    try {
      console.log("Fetching collections...");
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/v1/collections");
      if (!response.ok) {
        throw new Error("Error fetching collections");
      }
      const result = await response.json();
      setCollections(result.data);
    } catch (err) {
      setFetchError(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  async function addCollection(collection) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/collections`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(collection),
        }
      );
      
      if (!response.ok) {
        throw new Error(`Error creating collection: ${response.status}`);
      }
      
      const result = await response.json();
      console.log("Item added:", result);

    } catch (error) {
      console.error("Network error:", error);
      setAddError(error.message);
    }
  }

  return {fetchCollections, addCollection, collections, loading, fetchError };
}
