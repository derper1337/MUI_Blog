import {
    AppBar, BottomNavigation, BottomNavigationAction,
    Box,
    Button,
    Card, CardActions, CardContent,
    CardMedia,
    Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid,
    IconButton,
    Paper, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import {createTheme} from "@mui/material";
import {PlayCircle, LayersRounded, Folder, Favorite, Restore} from "@mui/icons-material";
import {useState} from "react";
import Header from "./components/appBar";
import Banner from "./components/banner";
import MainContent from "./components/mainContent";
import GridBlog from "./components/gridBlog";
import Footer from "./components/footer";

const theme = createTheme();

function App() {
    const classes = {
        html:{
          margin: 0,
          padding:0,
        },
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(1),
        },
        title: {
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-start"
        },
        post: {
            position: "relative",
            color: theme.palette.common.white,
            marginBottom: theme.spacing(4),
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgba(0,0,0,0.3)",
            backgroundBlendMode: "multiply",
            padding: theme.spacing(9),
            marginTop: theme.spacing(5),
        },
        postContent: {
            position: "relative",
            padding: theme.spacing(6),
        },
        overlay: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
        },
        mainGrids: {
            justifyItems: "center",
        },
        cardMedia: {
            paddingTop: "60%",
        },
        cardContent: {
            flexGrow: 1
        },
        cardGrid: {
            marginTop: theme.spacing(4),
        },
        popup: {
            margin: "20px",
        }
    }
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let [value, setValue] = useState("recents");
    let [open, setOpen] = useState(false)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Header classes={classes} open={open} handleOpen={handleOpen} handleClose={handleClose}/>
            <main>
                <Banner classes={classes} handleOpen={handleOpen}/>
                <MainContent classes={classes} handleChange={handleOpen}/>
                <GridBlog classes={classes} cards={cards}/>
            </main>
            <Footer classes={classes} value={value} handleChange={handleChange}/>
        </>
    );
}

export default App;
