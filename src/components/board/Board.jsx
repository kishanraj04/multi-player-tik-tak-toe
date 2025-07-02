import React, { useContext } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GlobalContext } from "../../context/GlobalContext";

// Styled individual cell
const Cell = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "100px",
  border: "2px solid #000",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  boxSizing: "border-box",
  backgroundColor: "#fff",
}));

export default function Board() {
  const { board } = useContext(GlobalContext); // should be a 3x3 matrix
  
  const handleBoardClick = (i,j)=>{
    console.log(i,j);
  }

  return (
    <Box
      sx={{
        width: "full",
        height: "93vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#24201f",
      }}
    >
      <Box>
        {board.map((row, i) => (
          <Box key={i} sx={{ display: "flex", gap: "3px", rowGap: "3px" }}>
            {row.map((val, j) => (
              <Cell key={`${i}-${j}`} sx={{backgroundColor:"#463b39"}}
              onClick={()=>handleBoardClick(i,j)}
              >{val}</Cell>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
