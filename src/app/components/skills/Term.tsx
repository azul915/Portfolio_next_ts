import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Card, CardActionArea, CardContent, Grid, Typography } from "@material-ui/core"
import { Skill } from "../../interfaces"

type Props = {
  term: Skill[];
}

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const Term: React.FC<Props> = ({ term }) => {

  const classes = useStyles();

    // TODO: UI実装
    return (
      <>
        {term.map((skill, index) => (
          <Grid item xs={12} md={6} key={index}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h1" variant="body1" align="left">
                        {skill.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {skill.term}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {skill.detail}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                        Continue reading...
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </>
    );

};

export default Term