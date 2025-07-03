import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { GlobalContext } from '../../context/GlobalContext';

export default function LeftDrawra() {
  const { isDrawar, setIsDrawar } = React.useContext(GlobalContext);

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#24201f',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
      role="presentation"
    //   onClick={() => setIsDrawar(false)}
    >
      {/* User Info Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#1e1e1e',
          borderRadius: '8px',
          p: 1.5,
        }}
      >
        <Avatar alt="User Name" src="/avatar.png" />
        <Typography sx={{ color: 'white', flexGrow: 1, ml: 2, fontWeight: 500 }}>
          John Doe
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            fontSize: '10px',
            padding: '4px 10px',
            textTransform: 'none',
          }}
        >
          Request
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Drawer open={isDrawar} onClose={() => setIsDrawar(false)} >
        {DrawerList}
      </Drawer>
    </div>
  );
}
