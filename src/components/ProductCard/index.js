import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CustomCard } from './styles'
import './styles.css'
export default function ProductCard() {
    return (
        <CustomCard>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image="https://http2.mlstatic.com/D_NQ_NP_992654-MLU50516117526_062022-O.webp"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography
                        variant="h5"
                        component="div"
                        color='#575757'
                    >
                        Quincas Borba
                        Machado de Assis
                    </Typography>
                    <Typography variant="body2" color="#222222">
                        Quincas Borba é um romance escrito por Machado de Assis, desenvolvido em princípio como folhetim na revista A Estação, entre os anos de 1886 e 1891 para, em 1892, ser publicado definitivamente pela Livraria Garnier.
                    </Typography>
                </CardContent>
                <CardContent className='flex justify-between info'>
                    <Typography
                        variant="subtitle2"
                        color='#656565'
                    >
                        15 unidades
                    </Typography>
                    <Typography
                        variant="subtitle2">
                        R$ 99.99
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CustomCard>
    );
}
