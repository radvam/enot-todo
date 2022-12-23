import React, { useEffect, useMemo, useState } from "react";

import "./newsBlock.css";

const NewsBlock = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?q=Apple&from=2022-12-22&sortBy=popularity&apiKey=bfc62e46309b4c228bc9fe1b290f0790"
    )
      .then((res) => res.json())
      .then(
        ({ articles }) => {
          setIsLoaded(true);
          setItems(articles);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const ticker = useMemo(
    () => items?.map(({ description }) => description).join("     ") || "",
    [items]
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="newsContainer">
        <div className="newsItem">{ticker}</div>
      </div>
    );
  }
};

export default NewsBlock;
