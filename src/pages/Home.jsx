import React from "react";
import Header from "../components/header/header";
import Board from "../components/board/Board";
import SearchUserResult from "../components/searchUser/SearchUserResult";

function Home() {
  return (
    <div
      className="no-scroll"
      style={{ backgroundColor: "black", height: "100vh", overflow: "auto" , scrollbarWidth: "none" }}
    >
      <Header />
      <Board />

      <SearchUserResult/>
    </div>
  );
}

export default Home;
