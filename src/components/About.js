import React from 'react'
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles({
    root: {
        height: "86vh",
        width: "50%",
        padding: "10px",
        paddingTop: "50px",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    name: {
        color: "black",
    },
    large: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "200px",
        height: "200px",
        border: "blue 4px solid"
    },
})

function About() {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <a className={classes.link} href="" target="_blank">
                <Typography className={classes.name} variant="p"><GitHubIcon  /> </Typography>
                <Avatar alt="DP" src=""
                    className={classes.large} />
                <Typography className={classes.name} variant="h3">Amir Maavia</Typography>
            </a>
        </Container>
    )
}

export default About
