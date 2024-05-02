import './styles.css';
import { Typography, Button } from '@mui/material'
import ProductCard from '../../components/ProductCard';

function Main() {
  return (
    <div className="container-main">
      <div className='container-action'>
        <Typography
          variant="h6"
          align='left'
          width='100%'
        >
          Seus produtos
        </Typography>
        <Button
          variant="contained"
          size='small'
          className='btn-add'
        >Adicionar Produto</Button>
      </div>
      <div className='container-produtos'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Main;
