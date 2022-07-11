import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./PreviousUsers.css";

function Previoususers() {
  const users = useSelector((state) => state);

  return (
    <div className="users-history">
      {users.map((item, i) => {
        return (
          <div key={uuidv4()} className="users-history-each">
            <Link to={`/user/${item.id}`}>
              <p>
                {item.prefix} {item.name} {item.lastName}
              </p>
            </Link>
            {i < users.length - 1 && <span>&gt;</span>}
          </div>
        );
      })}
    </div>
  );
}

export default Previoususers;
