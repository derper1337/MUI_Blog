import {
    AppBar,
    Box,
    Button,
    Container,
    Dialog, DialogActions,
    DialogContentText,
    DialogTitle,
    IconButton, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header =({classes, open, handleOpen, handleClose})=>{
    return <AppBar position={"fixed"}>
        <Container fixed>
            <Toolbar>
                <IconButton sx={classes.menuButton} edge={"start"} color={"inherit"} aria-label={"menu"}>
                    <MenuIcon/>
                </IconButton>
                <Typography sx={classes.title} variant={"h6"}>
                    Blog using MUI
                </Typography>
                <Box mr={3} ml={3}>
                    <Button color={"inherit"} variant={"outlined"} onClick={handleOpen}> Log In </Button>
                    <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby={"login-in"}>
                        <DialogTitle id={"login-in"}>Log In</DialogTitle>
                        <DialogContentText sx={{ml:3}}> Log in to be able to see more</DialogContentText>
                        <TextField autoFocus margin={"dense"} id={"name"} label={"Email Adress"} type={"email"} sx={{m:2}}/>
                        <TextField margin={"dense"} id={"password"} label={"Password"} type={"password"} sx={{m:2}}/>
                        <DialogActions>
                            <Button onClick={handleClose} color={"primary"}>
                                Cancel
                            </Button>
                            <Button onClick={handleClose} color={"primary"}>
                                Log In
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
                <Button onClick={handleOpen} color={"secondary"} variant={"contained"}> Sign Up </Button>
            </Toolbar>
        </Container>
    </AppBar>
}

export default Header;