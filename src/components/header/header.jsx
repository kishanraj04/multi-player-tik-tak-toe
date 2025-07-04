import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
// Search bar container
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(3),
  width: "auto",
}));

// Search icon wrapper
const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  right: 0, // 👈 Position to the right
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  pointerEvents: "auto",
}));

// Input style
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 2), // top, right, bottom, left
    paddingRight: `calc(1em + ${theme.spacing(4)})`, // 👈 Space for right icon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileAnchorEl);
  const navigate = useNavigate()
  const {
    isSearchUser,
    setIsSearchUser,
    isDrawar,
    setIsDrawar,
    isRightDrawar,
    setIsRightDrawar,
    isNotification,
    setIsNotification,
  } = React.useContext(GlobalContext);
  const [searchUserName, setSearchUserName] = React.useState("");
  
  const {name,avatar} = useSelector((state)=>state.loginUser)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={()=>{
        handleMenuClose()
           navigate("/profile");
      }
      }>Profile</MenuItem>
      <MenuItem onClick={()=>{
        handleMenuClose()
        navigate("/myaccount")
      }}>My Account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon
              onClick={() => {
                handleMobileMenuClose();
                setIsRightDrawar(!isRightDrawar);
              }}
            />
          </Badge>
        </IconButton>
        <p  onClick={() => {
                handleMobileMenuClose();
                setIsRightDrawar(!isRightDrawar);
              }}>Messages</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          setIsNotification(!isNotification);
        }}
      >
        <IconButton size="large" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleSearchUser = (username) => {
    setIsSearchUser(true);
    console.log(username, isSearchUser);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1a1716" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon
              onClick={() => {
                setIsDrawar(!isDrawar);
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Let's Play
          </Typography>

          <Search>
            <StyledInputBase
              placeholder="Search User"
              value={searchUserName}
              onChange={(e) => setSearchUserName(e.target.value)}
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon onClick={() => handleSearchUser(searchUserName)} />
            </SearchIconWrapper>
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => {
                handleMobileMenuClose();
                setIsRightDrawar(!isRightDrawar);
              }}
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit" onClick={()=>{
        setIsNotification(!isNotification)
      }}>
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              <Avatar alt="Remy Sharp" src={avatar} />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
