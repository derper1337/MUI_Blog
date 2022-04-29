import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import {LayersRounded, PlayCircle} from "@mui/icons-material";

const GridBlog=({classes, cards})=>{
    return <Container sx={classes.cardGrid} maxWidth={"md"}>
        <Grid container spacing={4}>
            {cards.map(card=>{
                return <Grid item key={card} xs={"12"} sm={"6"} md={"4"}>
                    <Card sx={classes.card}>
                        <CardMedia
                            sx={classes.cardMedia}
                            image={`https://source.unsplash.com/random`}
                            title={"image title"}
                        />
                        <CardContent sx={classes.cardContent}>
                            <Typography variant={"h5"}>
                                Blog post
                            </Typography>
                            <Typography variant={"h5"}>
                                some text some text some text some text some text
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size={"small"} color={"primary"}>
                                View
                            </Button>
                            <Button size={"small"} color={"primary"}>
                                Edit
                            </Button>
                            <LayersRounded/>
                            <PlayCircle/>
                        </CardActions>
                    </Card>
                </Grid>
            })}
        </Grid>
    </Container>
}
export default GridBlog;