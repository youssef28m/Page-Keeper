import { useState } from "react";
import { useCollections } from "../api/useCollection";

export default function CreateCollection({ setCreatingCollection }) {
  
  const [collectionTitle, setCollectionTitle] = useState('')  
  const {addCollection, fetchCollections} = useCollections()

  const handleChange = (event) => {
    setCollectionTitle(event.target.value); 
  };

  const handleKeyDown = (event) => {
        if (event.key === "Enter" && event.target.value.trim() !== "") {
          event.preventDefault(); 
          setCreatingCollection(false);
          addCollection({title: event.target.value})
          fetchCollections();
        }
      };
    
  return (
    <label>
      <input
        id="name"
        type="text"
        value={collectionTitle}
        autoFocus
        autoComplete="off"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Create collection"
        className="pl-2 text-gray-50 focus:outline-none border border-gray-600 rounded-lg p-0.5"
      />
    </label>
  );
}
