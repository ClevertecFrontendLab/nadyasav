import { Outlet } from 'react-router';

const MainLayout = () => (
    <div>
        <div>menu</div>
        <Outlet />
        <div>right sidebar</div>
    </div>
);

export default MainLayout;
