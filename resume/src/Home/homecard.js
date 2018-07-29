import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
        position: "flex"
    },
    media: {
        height: "300px",
        width: "100%",
    },
};

function HomeCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="https://media.licdn.com/dms/image/C5603AQHhyKQau4SwMw/profile-displayphoto-shrink_200_200/0?e=1538611200&v=beta&t=4npNA4Kmh6eQCodwGoqOHsMM_5O37S-DzAOSFd29tEE"
                    title="Loren Horowitz Headshot"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        About Me
          </Typography>
                    <Typography component="p">
                        Passionate and self-motivated leader who is goal driven with nine years of hospitality experience, five of which were spent in the hotel industry. Experienced in public speaking and motivating teams toward a common goal through consistent positive reinforcement and coaching.
          </Typography>
                    <Typography>
                        <br />Rapidly growing experience in Computer Science through an internship with Home Depot QuoteCenter, the completion of an Associate of Science in Computer Science with Highest Honors, and the pursuit of a Bachelor of Science in Computer Science with a minor in Mathematics. Proficient in C, Java, JavaScript, Python, and Bash programming, with research experience as a Research Assistant for Washington State University.
          </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

HomeCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeCard);
