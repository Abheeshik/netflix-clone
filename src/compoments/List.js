import { useEffect, useState } from "react";
import { fetchData } from "../api/api";

const List = ({ title, param }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData(param).then(res => setList(res.data.results));
  }, []);

  console.log(list);

  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{title}</h2>
        <div className="col">
          <div className="row__posters">
            {list.map(item => (
              // Add a conditional check for poster_path
              item.poster_path && (
                <img
                  key={item.id} // Add a unique key for each image
                  className="row__poster row__posterLarge"
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
