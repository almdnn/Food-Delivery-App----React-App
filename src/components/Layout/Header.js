import React, {Fragment} from 'react';
import mealImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>RISE-N-SHINE</h1>
                
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt="A table full of delicious food" />
            </div>
        </Fragment>
    )
}

export default Header;