import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const user = {
    name: "Kishu",
    avatar: "/avatar/kishu.png",
    totalGames: 12,
    wins: 7,
    losses: 5,
    history: [
      { opponent: "Aman", opponentAvatar: "/avatar/aman.png", result: "Win", date: "2025-07-11" },
      { opponent: "Ravi", opponentAvatar: "/avatar/ravi.png", result: "Lose", date: "2025-07-10" },
      { opponent: "Pooja", opponentAvatar: "/avatar/pooja.png", result: "Win", date: "2025-07-09" },
    ],
  };

  const { name, avatar, totalGames, wins, losses, history = [] } = user;

  const filteredHistory = history.filter((match) =>
    match.opponent.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: "#1e1e1e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%",width:"90%", height: "90%" }}>
        <Card
          sx={{
            height: "100%",
            bgcolor: "#1e1e1e",
            color: "white",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              mb: 2,
              mt: 2,
            }}
          >
            <Avatar
              alt={name}
              src={avatar}
              sx={{ width: 80, height: 80, border: "2px solid white" }}
            />
            <Box>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="body2" color="gray">
                Multiplayer Tic Tac Toe Player
              </Typography>
            </Box>
            <IconButton sx={{ color: "white" }} onClick={() => navigate("/")}>
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <Grid container spacing={2} textAlign="center" sx={{ mb: 2 }}>
            <Grid item xs={4}>
              <EmojiEventsIcon fontSize="large" color="success" />
              <Typography variant="h6">{wins}</Typography>
              <Typography variant="body2">Wins</Typography>
            </Grid>
            <Grid item xs={4}>
              <SentimentDissatisfiedIcon fontSize="large" color="error" />
              <Typography variant="h6">{losses}</Typography>
              <Typography variant="body2">Losses</Typography>
            </Grid>
            <Grid item xs={4}>
              <SportsEsportsIcon fontSize="large" color="primary" />
              <Typography variant="h6">{totalGames}</Typography>
              <Typography variant="body2">Games</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ bgcolor: "gray", mb: 3 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 4,
              mb: 2,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search opponent..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                input: { color: "white" },
                bgcolor: "#2b2b2b",
                borderRadius: 1,
                width: "60%",
              }}
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: "gray" }} />,
              }}
            />
            <Typography variant="h6">Match History</Typography>
          </Box>

          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <List dense>
              {filteredHistory.length === 0 ? (
                <Typography variant="body2" color="gray">
                  No matches found.
                </Typography>
              ) : (
                filteredHistory.map((match, idx) => (
                  <ListItem
                    key={idx}
                    sx={{ bgcolor: "#2b2b2b", mb: 1, borderRadius: 1 }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={match.opponentAvatar}
                        alt={match.opponent}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`vs ${match.opponent}`}
                      secondary={`Result: ${match.result} | Date: ${match.date}`}
                      secondaryTypographyProps={{ color: "gray" }}
                    />
                  </ListItem>
                ))
              )}
            </List>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Profile;
