
export default function Collection({ title , setSelectedCollection, isSelected}) {

  const liClass = isSelected 
  ? "pl-3 flex items-center space-x-2  bg-gray-800"
  : "pl-3 flex items-center space-x-2 ";

  return (
    <ul className="mb-2">
      <li className={liClass}>
        <img src="./open-folder.png" alt="" className="w-3 h-3 " />
        <button
          className= "cursor-pointer text-[17px] font-semibold text-gray-50"
          onClick={setSelectedCollection}
        >
          {title}
        </button>
      </li>
    </ul>
  );
}
