export default function Collection({ title }) {
  return (
    <ul className="mb-2">
      <li className="pl-3 flex items-center space-x-2 ">
        <img src="./open-folder.png" alt="" className="w-3 h-3 " />
        <button className=" cursor-pointer text-[17px] font-semibold text-green-50">
          {title}
        </button>
      </li>
    </ul>
  );
}
