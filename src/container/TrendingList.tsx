import React, { useEffect, useState } from "react";
const TrendingList = () => {
  const [giphyList, setGiphyList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let APIKEY = "lflyzKL8Q7Nv1MdqW4hmUmPfYKFBgKI9";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=10`
    );
    const jsonData = await response.json();
    console.log(jsonData.data, "results");
    setGiphyList(jsonData.data);
  };
  return (
    <div>
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
              data-testid="trending-img"
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

export default TrendingList;
