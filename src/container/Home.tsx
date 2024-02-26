import React, { useState } from "react";
import { useNavigate } from "react-router";
import Search from "../components/Search";

const Home: React.FC = () => {
  const [giphyList, setGiphyList] = useState([]);
  const navigate = useNavigate();

  const fetchData = async (searchKey: string | number = "") => {
    let APIKEY = "lflyzKL8Q7Nv1MdqW4hmUmPfYKFBgKI9";
    const queryParam = searchKey ? `&q=${searchKey}` : "";
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10${queryParam}`
      );
      const jsonData = await response.json();
      setGiphyList(jsonData.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="bg-black flex flex-wrap justify-center">
        <Search searchData={fetchData} />
        <div className="my-auto">
          <button
            className="rounded-lg bg-gray-300 p-2 m-2"
            data-testid="trendingBtn"
            onClick={() => {
              navigate("/trending");
            }}
          >
            Trending
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {giphyList.map((giphy) => {
          const {
            images: {
              downsized: { url = "" },
            },
            title = "",
            id,
          } = giphy;
          return (
            <div
              key={id}
              data-testid={`search-img`}
              className="m-4 p-4 w-[250px] rounded-lg bg-cyan-200"
            >
              <img src={url} alt={title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
