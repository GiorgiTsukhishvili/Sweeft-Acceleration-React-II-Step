import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import FriendsList from "./FriendsList";
import { useParams } from "react-router-dom";
import "../components/ListItemsFetch.css";

const PAGE_NUMBER = 1;

function Friends() {
  const params = useParams();

  const [state, setState] = useState([]);
  const [number, setNumber] = useState(PAGE_NUMBER);
  const [isLoading, setIsloading] = useState(true);
  const [dataLength, setDataLength] = useState(1);

  useEffect(() => {
    if (dataLength !== 0) {
      async function getData() {
        const data = await axios.get(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${params.userId}/friends/${number}/20`
        );
        setDataLength(data.headers["content-length"]);
        setState([...state, ...data.data.list]);

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
    <Fragment>
      <div style={{ margin: "24px 0", marginLeft: "10px" }}>
        <h2>Friends: </h2>
      </div>

      <div className="users">
        <div className="list">
          {state.map((item) => {
            return (
              <FriendsList
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
    </Fragment>
  );
}

export default Friends;
