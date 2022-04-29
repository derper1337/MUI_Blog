import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";

const Banner = ({classes, handleOpen}) => {
    return <Paper sx={classes.post} style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
        <Container fixed>
            <Grid container>
                <Grid item md={6}>
                    <div sx={classes.postContent}>
                        <Typography component={"h1"} variant={"h3"} color={"inherit"} gutterBottom>
                            Just another pet project blog
                        </Typography>
                        <Typography variant={"h5"} color={"inherit"} paragraph>
                            Lorem ipsun dolorLorem ipsun dolorLorem ipsun dolorLorem ipsun dolorLorem
                            ipsun
                            dolorLorem ipsun dolor
                        </Typography>
                        <Box>
                            <Button onClick={handleOpen} variant={"contained"} color={"secondary"}>
                                Learn more...
                            </Button>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </Paper>
}

export default Banner;