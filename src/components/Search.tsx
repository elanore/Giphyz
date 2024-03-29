import React, { useState } from "react";

interface Props {
  searchData: Function;
}

const Search: React.FC<Props> = ({ searchData }) => {
  const [searchtext, setSearchText] = useState<string | number>("");

  return (
    <div className="p-6 m-6 text-center relative" data-testid="search">
      <input
        className="text-wrap text-lg rounded-lg p-4 m-2 w-80 outline outline-offset-2 outline-stone-500 dark:bg-stone-500 dark:text-white"
        data-testid="searchbox"
        type="text"
        placeholder="Enter keyword"
        value={searchtext}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="px-3 mx-2 absolute inset-y-0 right-10 w-16 dark:text-white"
        data-testid="searchBtn"
        type="submit"
        onClick={(e) => {
          setSearchText("");
          searchData(searchtext);
        }}
      >
        GO
      </button>
    </div>
  );
};
export default Search;
