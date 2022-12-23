import React, { useMemo } from "react";
import { useQuery } from "react-query";

import "./newsBlock.css";

const NewsBlock = () => {
  const { isLoading, error, data, isSuccess } = useQuery("news", () =>
    fetch(
      "https://newsapi.org/v2/top-headlines?q=Apple&from=2022-12-22&sortBy=popularity&apiKey=bfc62e46309b4c228bc9fe1b290f0790"
    ).then((res) => res.json())
  );

  const ticker = useMemo(
    () =>
      data?.articles?.map(({ description }) => description).join("    ") || "",
    [data]
  );

  return (
    <div>
      {isSuccess && (
        <div className="newsContainer">
          <div className="newsItem">{ticker}</div>
        </div>
      )}
      {isLoading && <p>Loading..</p>}
      {error && <p>Error occurred!</p>}
    </div>
  );
};

export default NewsBlock;
