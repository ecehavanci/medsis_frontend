import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HelpIcon from '@mui/icons-material/Help';
import Toolbar from '@mui/material/Toolbar';
import AboutSection from './HomeContainer';
import QASection from './QASection';
import BungalowIcon from '@mui/icons-material/Bungalow';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

function ResponsiveDrawer() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [chosenIndex, setIndex] = React.useState(0);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
        console.log("aaas " + isClosing);
    };

    const handleCurrentIndex = (index) => {
        if (chosenIndex !== index) {
            setIndex(index);
        }
    };


    const drawerContentList = ['Home', 'Tutorials', 'Frequently Asked QA', 'Contact Us'];
    const drawerIconList = [<BungalowIcon />, <HelpIcon />, <QuestionAnswerIcon />, <MailIcon />];

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <div>
                <List>
                    {drawerContentList.map((text, index) => (
                        <ListItem key={text} disablePadding onClick={() => handleCurrentIndex(index)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {drawerIconList[index]}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>

                    ))}
                </List>
                <Divider />
            </div>
            <Divider />
        </div>
    );

    const content = () => {
        switch (chosenIndex) {
            case 0:
                return <AboutSection />;
            case 1:
                return <div>Tutorial</div>;
            case 2:
                return <QASection />;
            case 3:
                return <div>Contact</div>;

            default:
                return <div>Contact</div>;
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    }}
                >
                    <Toolbar sx={{ paddingLeft: 3 }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                borderRadius: '10%',
                                border: '2px solid',
                                borderColor: '#002245',
                                mr: 2,
                            }}
                        >
                            <MenuIcon sx={{
                                color: '#002245',
                            }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            {content()}
        </Box>
    );
}

export default ResponsiveDrawer;