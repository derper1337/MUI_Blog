import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {Favorite, Folder, Restore} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const Footer=({classes, value, handleChange})=>{
    return <footer>
        <BottomNavigation value={value} onChange={handleChange} sx={classes.root}>
            <BottomNavigationAction label={"Recents"} value={"resents"} icon={<Restore/>}/>
            <BottomNavigationAction label={"Favorites"} value={"favorites"} icon={<Favorite/>}/>
            <BottomNavigationAction label={"Folder"} value={"folder"} icon={<Folder/>}/>
            <BottomNavigationAction label={"Menu"} value={"menu"} icon={<MenuIcon/>}/>
        </BottomNavigation>
    </footer>
}

export default Footer;