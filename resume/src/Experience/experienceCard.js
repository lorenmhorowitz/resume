import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ExperienceCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title="Home Depot QuoteCenter"
            subheader="Software Engineer Intern"
          />
          <CardMedia
            className={classes.media}
            image="https://media.licdn.com/dms/image/C4E0BAQH0TBPriYgdDg/company-logo_200_200/0?e=2159024400&v=beta&t=PPVhTC4WQYkC5MHAvtL2t0jP0FJaEyQh18uhih17CCM"
            title="QuoteCenter Logo"
            alt="Whoops!"
          />
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
            <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
              Developed the client and server for a JavaScript application that interfaced between an external application programming interface and internal database structures
              </Typography>
              <Typography paragraph>
              Utilized ReactJS and Material-UI to create a client-facing application that implemented and managed OAuth2 authentication protocols
              </Typography>
              <Typography paragraph>
              Implemented a server using Node.js and the Express framework to interface with client requests
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ExperienceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExperienceCard);
