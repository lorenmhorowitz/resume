import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import { home } from "../Home/home";
import { experience } from "../Experience/experience";
import { projects } from "../Projects/projects";
import { education } from "../Education/education";
import { Route, NavLink } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        height: "90vh"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        color: "white",
        backgroundColor: "green",
        height: "1%"
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar />
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <NavLink to="/home" style={{ textDecoration: "none", color: "green" }} activeStyle={{ color: "white", backgroundColor: "green" }}><p>Home</p></NavLink>
                <Divider />
                <NavLink to="/education" style={{ textDecoration: "none", color: "green" }} activeStyle={{ color: "white", backgroundColor: "green" }}><p>Education</p></NavLink>
                <Divider />
                <NavLink to="/experience" style={{ textDecoration: "none", color: "green" }} activeStyle={{ color: "white", backgroundColor: "green" }}><p>Experience</p></NavLink>
                <Divider />
                <NavLink to="/projects" style={{ textDecoration: "none", color: "green" }} activeStyle={{ color: "white", backgroundColor: "green" }}><p>Projects</p></NavLink>

            </Drawer>
            <main className={classes.content}>
                <Route path="/home" component={home} />
                <Route path="/experience" component={experience} />
                <Route path="/education" component={education} />
                <Route path="/projects" component={projects} />
            </main>
        </div>
    );
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
