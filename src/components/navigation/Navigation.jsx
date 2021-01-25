import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import s from './navigation.module.css';

const Navigation = () => <>
    <div className={s.nav}>
        <div className={s.item}>
            <Link to='/'>
                <Button variant='contained' color='primary'>Главная</Button>
            </Link>
        </div>

        <div className={s.item}>
            <Link to='/leads'>
                <Button variant='contained' color='primary'>Заявки</Button>
            </Link>
        </div>
    </div>
</ >;

export default Navigation;
