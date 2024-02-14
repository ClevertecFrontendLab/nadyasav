import React, { ReactNode } from 'react';

import styles from './main-card.module.scss'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';

interface IMainCard {
    title: string;
    linkText: string;
    link: string;
    icon: ReactNode;
}

export const MainCard: React.FC<IMainCard> = (props: IMainCard) => {
    const {title, linkText, link, icon} = props;
    return (
        <Card className={styles.card} title={title} bordered={false}>
            <NavLink className={styles.card__link} to={link}>
                <span className={styles.card__icon}>
                    {icon}
                </span>
                {linkText}
            </NavLink>
        </Card>
    );
};
