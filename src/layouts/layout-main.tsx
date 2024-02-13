import { Outlet } from 'react-router-dom';
import styles from './layout-main.module.css';
import { Layout } from 'antd';

export const LayoutMain = () => (
  <Layout className={styles.layout_main}>
      <Outlet />
  </Layout>
);
