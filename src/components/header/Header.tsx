import React from 'react';

import styles from './header.module.scss'
import { Breadcrumb, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import { SettingOutlined } from '@ant-design/icons';

export const Header: React.FC = () => (
    <header className={styles.header}>
        <Breadcrumb className={styles.header__breadcrumb}>
            <Breadcrumb.Item>
                <NavLink to='/'>
                    Главная
                </NavLink>
            </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.header__bottom}>
            <Title>Приветствуем тебя в CleverFit — приложении,<br/> которое поможет тебе добиться своей мечты!</Title>
            <div>
                <Menu mode="horizontal" triggerSubMenuAction="click">
                    <Menu.SubMenu className={styles.header__submenu} key="SubMenu" title="Настройки" icon={<SettingOutlined />}>
                        <Menu.Item>item 1</Menu.Item>
                        <Menu.Item>item 2</Menu.Item>
                        <Menu.Item>item 3</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </div>
        </div>
    </header>
);
