import {
  MenuItem, ListItemIcon, ListItemText, Menu,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from 'react-router-dom';

interface MainMenuProps {
  anchorEl: Element;
  handleClose: () => void;
  open: boolean;
}

function MainMenu({ anchorEl, handleClose, open }: MainMenuProps) {
  const navigate = useNavigate();

  const openProfile = () => {
    navigate('/profile');
    handleClose();
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={openProfile}>
        <ListItemIcon>
          <AccountBoxIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
    </Menu>
  );
}

export default MainMenu;
