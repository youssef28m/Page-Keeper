import { useState } from "react";
import Collection from "./Collection";
import CreateCollection from "./CreateCollection";

<<<<<<< HEAD
export default function Navbar({ collections = [], creatingCollection, setCreatingCollection }) {
=======
export default function Navbar({
  collections = [],
  creatingCollection,
  setCreatingCollection,
  setSelectedCollection,
}) {

  const [selectedCollectionId, setSelectedCollectionId] = useState("All bookmarks");

>>>>>>> aafc782 (2)
  return (
    <nav className="fixed top-0 left-0 w-70 h-full border-b dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="pb-6 w-full my-5 border-b-gray-950/40 border-b-2">
          <h2 className="pl-3 text-green-50 text-2xl font-semibold pt-2">
<<<<<<< HEAD
            PageKeeper
=======
            Page Keeper
>>>>>>> aafc782 (2)
          </h2>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <p className="pl-3 text-green-50/50 font-semibold">Collections</p>
            <button
              className="mr-5 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setCreatingCollection(true);
              }}
            >
              <img src="./add.png" alt="" className="w-5 h-5 " />
            </button>
          </div>

          <div>
            {creatingCollection && (
              <div className="ml-3 mb-3" onClick={(e) => e.stopPropagation()}>
                <CreateCollection
                  setCreatingCollection={setCreatingCollection}
                />
              </div>
            )}

<<<<<<< HEAD
            <Collection title="All bookmarks" />

            {collections.map((collection) => (
              <Collection title={collection} />
=======
            <Collection
              title="All bookmarks"
              isSelected={selectedCollectionId === "All bookmarks"}
              setSelectedCollection={() => {
                setSelectedCollectionId("All bookmarks");
                setSelectedCollection("All bookmarks");
              }}
            />

            {collections.map((collection) => (
              <Collection
                key={collection}
                title={collection}
                isSelected={selectedCollectionId === collection}
                setSelectedCollection={() => {
                  setSelectedCollectionId(collection);
                  setSelectedCollection(collection);
                }}
              />
>>>>>>> aafc782 (2)
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
