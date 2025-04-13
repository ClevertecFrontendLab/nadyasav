import { Outlet } from 'react-router';

import Header from '~/components/header/Header';

const AppLayout = () => (
    <div>
        <Header />
        <Outlet />
        <div>footer</div>
    </div>
);

export default AppLayout;
