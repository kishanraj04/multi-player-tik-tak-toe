import * as React from 'react';
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Avatar,
  Typography,
  Button,
  Stack,
  Divider
} from '@mui/material';
import { GlobalContext } from '../../context/GlobalContext';
import { color } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  maxHeight: 500,
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  color:"white",
  backgroundColor:"#1a1716",
  p: 3,
};

export default function Notification() {
  const { isNotification, setIsNotification } = React.useContext(GlobalContext);

  // Simulated multiple user requests
  const friendRequests = [
    { id: 1, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 2, name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Michael Lee', avatar: 'https://i.pravatar.cc/150?img=6' },
  ];

  const handleClose = () => {
    setIsNotification(false);
  };

  const handleAccept = (name) => {
    console.log(`Accepted ${name}`);
  };

  const handleReject = (name) => {
    console.log(`Rejected ${name}`);
  };

  return (
    <Modal
      aria-labelledby="notification-modal-title"
      aria-describedby="notification-modal-description"
      open={isNotification}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    //   sx={{backgroundColor:"'#24201f'"}}
    >
      <Fade in={isNotification}>
        <Box sx={style}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Friend Requests
          </Typography>

          {friendRequests.map((user, index) => (
            <Box key={user.id}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar alt={user.name} src={user.avatar} />
                  <Typography>{user.name}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleAccept(user.name)}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleReject(user.name)}
                  >
                    Reject
                  </Button>
                </Stack>
              </Stack>
              {index < friendRequests.length - 1 && <Divider />}
            </Box>
          ))}
        </Box>
      </Fade>
    </Modal>
  );
}
