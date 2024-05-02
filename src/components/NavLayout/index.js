import './styles.css'
import { Toolbar, Typography } from '@mui/material';
import { CustomAppBar } from './styles';
import logo from '../../assets/logo.svg'
import { Link, Outlet } from 'react-router-dom'


function NavLayout() {
    return (
        <div className='container'>
            <div className='container-header'>
                <CustomAppBar>
                    <Toolbar>
                        <Link to="/">
                            <img src={logo} alt='sacola' />
                        </Link>
                    </Toolbar>
                </CustomAppBar>
                <Typography
                    variant="h4"
                    align='left'
                    width='100%'
                    className='NomeLoja'
                >
                    Livraria Bem-Ti-Vi
                </Typography>
            </div>
            <div className='container-pag'>
                <Outlet />
            </div>
        </div>

    )
}

export default NavLayout