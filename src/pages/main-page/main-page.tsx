import React from 'react';

import { Card, Layout } from 'antd';
import { Header } from '@components/header/header';
import { Content } from 'antd/lib/layout/layout';

import styles from './main-page.module.scss';
import Title from 'antd/lib/typography/Title';
import { HeartFilled } from '@ant-design/icons';
import { MainCard } from '@components/main-card/main-card';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';
import { AppCard } from '@components/app-card/app-card';
import { IconCalendar } from '@components/icons/calendar';
import { IconProfile } from '@components/icons/icon-profile';

export const MainPage: React.FC = () => {
    const mainCards = [
        {
            title: 'Расписать тренировки',
            linkText: 'Тренировки',
            link: ROUTES.trainings,
            icon: <HeartFilled />
        },
        {
            title: 'Назначить календарь',
            linkText: 'Календарь',
            link: ROUTES.calendar,
            icon: <IconCalendar />
        },
        {
            title: 'Заполнить профиль',
            linkText: 'Профиль',
            link: ROUTES.profile,
            icon: <IconProfile />
        }
    ];

    return (
        <Layout className="site-layout">
            <Header />
            <Content className={styles.main}>
                <div className={styles.main__bg}>
                    <picture>
                        <source
                            className={styles.main__bg_img}
                            type="image/webp"
                            srcSet='/public/mainbgwebp.webp'
                        />
                        <img className={styles.main__bg_img} src='/public/mainbg.jpg' alt="" />
                    </picture>
                </div>
                <div className={styles.main__inner}>
                    <div className={styles.main__content}>
                        <div className={styles.main__description}>
                            <Card className={styles.main__description_card} bordered={false}>
                                <ul className={styles.main__description_list}>
                                    С CleverFit ты сможешь:<br/>
                                    <li>— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</li>
                                    <li>— отслеживать свои достижения в разделе статистики, сравнивая свои результаты<br/>с нормами и рекордами;</li>
                                    <li>— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы<br/>о тренировках;</li>
                                    <li>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</li>
                                </ul>
                            </Card>
                        </div>
                        <Card className={styles.main__content_description} bordered={false}>
                            <Title level={4}>
                                CleverFit — это не просто приложение, а твой личный помощник <br/>в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                            </Title>
                        </Card>
                        <div className={styles.main__content_cards}>
                            {mainCards.map((item) => (
                                <MainCard {...item} key={item.linkText} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.main__bottom}>
                        <Link className={styles.main__bottom_reviews} to={ROUTES.reviews}>Смотреть отзывы</Link>
                        <AppCard />
                    </div>
                </div>
            </Content>
        </Layout>
    );
};
