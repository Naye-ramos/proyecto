import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';
import SliderImages from './SliderImages';

const useStyles = makeStyles((theme) => ({
    paper: {
    flexGrow: 1,
    padding: theme.spacing(3),
    texAlign: 'center',
    color: theme.palette.text.secondary,
    },
}));

const HomePageSlider = () => {
const classes = useStyles();

const [imagenes, setImagenes] = useState([]);
const [productos, setProductos] = useState([]);

useEffect(() => {

setImagenes([
   {
     id: 1,
     imagen: 'https://sneakernews.com/wp-content/uploads/2020/10/air-jordan-1-retro-high-og-co-jp-midnight-navy-kids-gs-575441-141-8.jpg?w=1140',
     titulu: 'Precio Cálidad y Confianza',
   },
    {
     id: 2,
     imagen: 'https://sneakernews.com/wp-content/uploads/2020/06/dior-jordan-raffle.jpg',
     titulu: 'Precio Cálidad y Confianza',
   },
   {
     id: 3,
     imagen: 'https://cdn.weartesters.com/wp-content/uploads/2014/11/Air-Jordan-1-Retro-High-OG-BlackWhite-Release-Information-7.jpeg',
     titulu: 'Precio Cálidad y Confianza',
   },

]);

}, []);

useEffect(() => {
//traer los datos y actualizar es estado de las tarjetas
  setProductos([
    {
     id: 1,
     titulo: 'Logintech MX Keys',
     precio: 1863.74,
     descripcion: 'Logintech MX Keys Inalambrico Español Negro 920-009295',
     rating: 4.8,
     imagen: 'https://kickz.akamaized.net/es/media/images/p/1200/AIR_JORDAN_1_RETRO_HIGH_OG_GS-BLACK_CRIMSON_TINT_WHITE_HYPER_PINK-1.jpg',
    },
    {
     id: 2,
     titulo: 'Logintech MX Keys',
     precio: 1863.74,
     descripcion: 'Logintech MX Keys Inalambrico Español Negro 920-009295',
     rating: 4.8,
     imagen: 'https://http2.mlstatic.com/D_NQ_NP_718202-MPE31061619228_062019-W.jpg',
    },
     {
     id: 3,
     titulo: 'Logintech MX Keys',
     precio: 1863.74,
     descripcion: 'Logintech MX Keys Inalambrico Español Negro 920-009295',
     rating: 4.8,
     imagen: 'https://www.manelsanchez.com/uploads/media/images/554725-083-GIF.gif.pagespeed.ce.rWg8Yx367p.gif',
    },
     {
     id: 4,
     titulo: 'Logintech MX Keys',
     precio: 1863.74,
     descripcion: 'Logintech MX Keys Inalambrico Español Negro 920-009295',
     rating: 4.8,
     imagen: 'https://dailyzapas.es/wp-content/uploads/2017/04/air-jordan-1-mid-new-love-554724-035-2.jpg',
    },
  ]);
}, []);


return(
    <Paper className={classes.paper}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <SliderImages elementos={imagenes}/>
            </Grid>

            <Grid item xs={12}>
            <SliderCards
              elementos = {productos}
              numberOfCards = {5}
            />
            </Grid>

        </Grid>
    </Paper>
  );
};
export default HomePageSlider;
