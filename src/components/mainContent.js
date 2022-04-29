import {Button, Container, Grid, Typography} from "@mui/material";

const MainContent=({classes, handleChange})=>{
    return <div style={classes.mainContent}>
        <Container maxWidth={"md"}>
            <Typography variant={"h2"} align={"center"} color={"textPrimary"} gutterBottom>
                MUI blog
            </Typography>
            <Typography variant={"h5"} align={"center"} color={"textSecondary"} paragraph>
                Lorem ipsun dolorLorem ipsun dolorLorem ipsun dolorLorem ipsun dolorLorem
                ipsun
                dolorLorem ipsun dolor
            </Typography>
            <div style={classes.mainGrids}>
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item>
                        <Button onClick={handleChange} variant={"contained"} color={"primary"}> Start now! </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleChange} variant={"outlined"} color={"primary"}> Learn more </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    </div>
}
export default MainContent;