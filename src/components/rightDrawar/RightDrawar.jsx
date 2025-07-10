import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../../context/GlobalContext';

export default function RightDrawar() {
  const { isRightDrawar, setIsRightDrawar } = React.useContext(GlobalContext);
  const [msg,setMsg] = React.useState([{
    sender:"",
    receiver:"",
    message:""
  }]);
  const inputRef = React.useRef("");

  const handleSendMessage = (e)=>{
    console.log(inputRef?.current?.value);
  }
  const DrawerContent = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#24201f',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
      }}
      role="presentation"
    >
      {/* Top Section: Close Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={() => setIsRightDrawar(false)} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Middle Section: Chat Area */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          my: 2,
          px: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {/* Replace below with dynamic chat messages */}
        <Typography
          sx={{
            color: 'white',
            alignSelf: 'flex-start',
            backgroundColor: '#333',
            p: 1,
            borderRadius: 1,
          }}
        >
          Hello!
        </Typography>
        <Typography
          sx={{
            color: 'white',
            alignSelf: 'flex-end',
            backgroundColor: '#1976d2',
            p: 1,
            borderRadius: 1,
          }}
        >
          Hi, how are you?
        </Typography>
        <Typography
          sx={{
            color: 'white',
            alignSelf: 'flex-start',
            backgroundColor: '#333',
            p: 1,
            borderRadius: 1,
          }}
        >
          I'm good, thanks!
        </Typography>
      </Box>

      {/* Bottom Section: Input Field */}
      <Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          inputRef={inputRef}
          InputProps={{
            sx: { backgroundColor: 'white', borderRadius: 1 },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" color="primary">
                  <SendIcon onClick={(e)=>handleSendMessage(e)}/>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Drawer anchor="right" open={isRightDrawar} onClose={() => setIsRightDrawar(false)}>
      {DrawerContent}
    </Drawer>
  );
}
