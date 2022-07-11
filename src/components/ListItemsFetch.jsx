import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ListItems from "./ListItems";
import "./ListItemsFetch.css";

const PAGE_NUMBER = 1;

function ListItemsFetch() {
  const [state, setState] = useState([]);
  const [number, setNumber] = useState(PAGE_NUMBER);
  const [isLoading, setIsloading] = useState(true);
  const [dataLength, setDataLength] = useState(1);

  useEffect(() => {
    if (dataLength !== 0) {
      async function getData() {
        const data = await axios.get(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${number}/20`
        );

        setState([...state, ...data.data.list]);

        setDataLength(data.headers["content-length"]);
        setIsloading(false);
      }
      getData();
    }
  }, [number]);

  const scrollToEnd = () => {
    setNumber(number + 1);
  };

  window.onscroll = function () {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop <=
      document.documentElement.clientHeight
    ) {
      scrollToEnd();
      setIsloading(true);
    }
  };

  return (
    <div className="users">
      <div className="list">
        {state.map((item) => {
          return (
            <ListItems
              key={item.id}
              image={item.imageUrl}
              name={item.name}
              prefix={item.prefix}
              lastName={item.lastName}
              title={item.title}
              id={item.id}
            />
          );
        })}
      </div>
      {isLoading && (
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default ListItemsFetch;
