const ProjectTab = ({ handleFilter, filterId, filterText, filterActive }) => {
  return (
    <div
      onClick={() => handleFilter(filterId, filterText)}
      className={`py-2 px-4 m-2 mx-3 transition text-sm rounded-md text-semibold cursor-pointer ${
        filterActive ? "bg-red-500 text-teal-50" : "bg-gray-200"
      } hover:scale-110`}
    >
      {filterText}
    </div>
  );
};

export default ProjectTab;
