import React from 'react';

import { Layout } from 'antd';
import { Header } from '@components/header/Header';

export const MainPage: React.FC = () => {
    return (
        <Layout className="site-layout">
            <Header />
        </Layout>
    );
};
