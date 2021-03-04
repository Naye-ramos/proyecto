import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    minWidth: 200,
    minHeight: 275,
    marguin: '8px 0',
  },
  title: {
    color: "#094069",
    fontSize: 15,
  },
  media: {
    height: 120,
  },
  footer: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'space-between',
  },
});

export default function SlideItem({ titulo, precio, imagen,  descripcion, rating}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
         component ="img"
          className={classes.media}
          image={imagen}
          title={titulo}
        />
        <CardContent>
          <Typography className={classes.title} variant="subtitle2" component="h6">
             {titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descripcion}
          </Typography>

        <div className={classes.footer}>
            <Typography variant="subtitle2" color="textPrimary" component="p">
                {'$${parseFloat(precio).toFixed(2)}'}
            </Typography>
            <div>
              <Rating name="read-only" value={rating} precision={0.5} readOnly />
           </div>
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}