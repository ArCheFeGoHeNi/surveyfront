import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

//listat
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

//Ikonit
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ContactsIcon from '@material-ui/icons/Contacts';

function Menubaari() {

//Drawer-valikon tilamuuttujat ja avaus/sulku
const [open, setOpen] = useState(false);
const handleOpen = () => { setOpen(true); }
const handleClose = () => { setOpen(false); }

//Secondary Menun avaus ja sulku
const [personMenu, setPersonOpen] = useState(null); //Null, eli oletuksena menua ei ole käyttöliittymässä
const handlePersonMenu = (event) => { setPersonOpen(event.currentTarget); }
const handlePersonMenuClose = () => { setPersonOpen(null); }

const SecondaryMenu =
    <Menu anchorEl={ personMenu } open={ Boolean(personMenu) } onClose={ handlePersonMenuClose } >
        <MenuItem onClick={ handleClose }>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary='Tietoja Sovelluksesta' />
        </MenuItem>
        <MenuItem onClick= { handleClose }>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary='Ota yhteyttä' />
        </MenuItem>
    </Menu>;

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton onClick={ handleOpen } color='inherit'><MenuIcon /></IconButton>
                    <Typography variant='h5' style={ {textAlign: 'center', flexGrow: '1'} }>Kyselyapplikaatio By: ArCheFeGoHeNi</Typography>
                    <IconButton color='inherit' onClick={ handlePersonMenu }> <AccountCircleIcon /> </IconButton>
                </Toolbar>
                  <Drawer anchor='left' open={ open } onClick={ handleClose }>
                    <List>
                      <ListItem button >
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Etusivu' />
                      </ListItem>
                      <ListItem button >
                        <ListItemIcon><MenuIcon /></ListItemIcon>
                        <ListItemText primary='Kyselyt' />
                      </ListItem>
                      <ListItem button >
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Jotain' />
                      </ListItem>
                      <ListItem button >
                        <ListItemIcon><ContactsIcon /></ListItemIcon>
                        <ListItemText primary='Jotain' />
                      </ListItem>
                    </List>
                  </Drawer>
                  { SecondaryMenu } {/* Menukomponentti */}
            </AppBar>
        </div>
    )

}

export default Menubaari;