import React from 'react';

import styles from './app-card.module.scss'
import { Button, Card } from 'antd';
import Link from 'antd/lib/typography/Link';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const AppCard: React.FC = () => (
    <Card className={styles.card} title={
        <>
            <Link href="#" target="_blank">Скачать на телефон</Link>
            <p className={styles.subtitle}>Доступно в PRO-тарифе</p>
        </>
        } bordered={false}>
        <div className={styles.card__buttons}>
            <Button className={styles.card__button} type="link"><AndroidFilled />Android OS</Button>
            <Button className={styles.card__button} type="link"><AppleFilled />Apple iOS</Button>
        </div>
    </Card>
);
