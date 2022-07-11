import React from "react";
import { Link } from "react-router-dom";
import "./ListItems.css";
import { useDispatch } from "react-redux";
import { userSaver } from "../redux/actions";

function ListItems({ image, name, prefix, lastName, title, id }) {
  const dispatch = useDispatch();

  const addUser = () => {
    dispatch(userSaver({ prefix, name, lastName, id }));
  };

  return (
    <div className="list-item" onClick={addUser}>
      <Link to={`/user/${id}`}>
        <div className="list-item-conent">
          <img src={image} alt={title} />
          <div className="list-item-content-description">
            <strong>
              {prefix} {name} {lastName}
            </strong>
          </div>
          <div className="list-item-content-description">{title}</div>
        </div>
      </Link>
    </div>
  );
}

export default ListItems;
