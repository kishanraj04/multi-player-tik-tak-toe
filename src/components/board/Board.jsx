import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getSocket } from "../../context/SocketProvider";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Cell = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "100px",
  border: "2px solid #000",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  backgroundColor: "#463b39",
  color: "white",
  cursor: "pointer",
}));

export default function Board() {
  const [room, setRoom] = useState({
    board: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    player1: { name: "", avatar: "", symbol: "" },
    player2: { name: "", avatar: "", symbol: "" },
    currentTurn: "",
    winner: "",
  });
  const [playerRole, setPlayerRole] = useState("");

  const { socket } = getSocket();
  const { userName } = useSelector((state) => state?.loginUser);

  useEffect(() => {
    if (!socket) return;

    const handleRoom = (data) => {
      console.log(data);
      setRoom({
        board: data?.board || [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        player1: data?.player1,
        player2: data?.player2,
        currentTurn: data?.currentTurn,
        winner: "",
      });
      // Determine player's role
      if (data?.player1?.name === userName) setPlayerRole("player1");
      else if (data?.player2?.name === userName) setPlayerRole("player2");
    };

    const handlePlayerMove = (data) => {
      setRoom((prev) => ({
        ...prev,
        board: data?.board,
        currentTurn: data?.currentTurn,
      }));
    };

    const getWinnerHandler = (data) => {
      toast?.success(`${data?.winner?.name} wins`);
      console.log(data);
      setRoom({
        board: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        player1: { name: "", avatar: "", symbol: "" },
        player2: { name: "", avatar: "", symbol: "" },
        currentTurn: "",
        winner: "",
      });
    };

    socket.on("ACCEPT_FRIEND_REQUEST", handleRoom);
    socket.on("PLAYER_MOVE", handlePlayerMove);
    socket.on("GET_WINNER", getWinnerHandler);

    return () => {
      socket.off("ACCEPT_FRIEND_REQUEST", handleRoom);
      socket.off("PLAYER_MOVE", handlePlayerMove);
      socket.off("GET_WINNER", getWinnerHandler);
    };
  }, [socket, userName]);

  //   useEffect(() => {
  //   if (!socket) return;

  //   const getWinnerHandler = (data) => {
  //     console.log("🔥 GET_WINNER received:", data);
  //     // handle winner state here if needed
  //   };

  //   socket.on("GET_WINNER", getWinnerHandler);

  //   return () => {
  //     socket.off("GET_WINNER", getWinnerHandler);
  //   };
  // }, [socket?.id]); // ✅ Use socket.id to ensure the hook is stable across renders

  const handleBoardClick = (i, j) => {
    const board = room.board;
    if (board[i][j] !== "" || room.winner !== "") return;
    if (room.currentTurn !== playerRole) {
      toast.error("Not You Chance");
      return;
    }

    const symbol =
      room.currentTurn === "player1"
        ? room.player1.symbol
        : room.player2.symbol;

    const updatedBoard = board.map((row, i1) =>
      row.map((cell, j1) => (i1 === i && j1 === j ? symbol : cell))
    );

    const nextTurn = room.currentTurn === "player1" ? "player2" : "player1";

    setRoom((prev) => ({
      ...prev,
      board: updatedBoard,
      currentTurn: nextTurn,
    }));

    socket.emit("PLAYER_MOVE", {
      board: updatedBoard,
      currentTurn: nextTurn,
      player1: room.player1,
      player2: room.player2,
    });
  };

  console.log(room);
  if (!socket) {
    return (
      <Box
        sx={{
          color: "white",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Connecting to game server...
      </Box>
    );
  }

  return (
    <>
      {room?.currentTurn ? (
        <Box
          sx={{
            width: "100%",
            height: "93vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#24201f",
            flexDirection: "column",
            gap: 3,
            pt: 4,
          }}
        >
          {/* Player Info */}
          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {["player1", "player2"].map((pKey) => {
              const isCurrent = room.currentTurn === pKey;
              return (
                <Box
                  key={pKey}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: isCurrent ? "#fdd835" : "#1e1e1e",
                    px: 2,
                    py: 1,
                    borderRadius: "10px",
                    boxShadow: isCurrent ? "0 0 10px #fdd835" : "none",
                  }}
                >
                  <Avatar src={room[pKey].avatar} alt={room[pKey].name} />
                  <Typography sx={{ color: "white", fontWeight: "bold" }}>
                    {room[pKey].name} ({room[pKey].symbol})
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* Game Board */}
          <Box>
            {room.board.map((row, i) => (
              <Box key={i} sx={{ display: "flex" }}>
                {row.map((val, j) => (
                  <Cell
                    key={`${i}-${j}`}
                    onClick={() => handleBoardClick(i, j)}
                  >
                    {val}
                  </Cell>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "white" }}>Request Player</Typography>
        </Box>
      )}
    </>
  );
}
