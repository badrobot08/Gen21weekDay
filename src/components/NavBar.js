import React from "react";

function NavBar(props) {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          background:'grey'
        }}
      >
        <h1>{props.navName}</h1>
        <div
          style={{
            display: "flex",
            alignItems:'center'
          }}
        >
          <a href="kk">contact</a>
          <a href="kk">Home</a>
          <a href="kk">More info</a>
          <a href="kk">About</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
