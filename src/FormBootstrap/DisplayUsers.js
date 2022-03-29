import React from "react";

export default function DisplayUsers(props) {
  return (
    <div>
      {props.sendState.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <h3>{item.description}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
