import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygZMPOdHR5PdI5ep1PWCERYy59Lxsu6EBUg&usqp=CAU"
                alt="logo"/>
        </header>
    );
};

