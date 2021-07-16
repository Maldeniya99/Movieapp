import React, { useState, useEffect } from "react";
import Movieitem from "./Movieitem";
import axios from "axios";

const MovieList = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    const key = "aee1ba88c1daf694a31e659ba9ed4a2e";

    const getmoviedata = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/550?api_key=aee1ba88c1daf694a31e659ba9ed4a2e"
      );
      setitems(res.data.results);
    };

    getmoviedata();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <Movieitem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
