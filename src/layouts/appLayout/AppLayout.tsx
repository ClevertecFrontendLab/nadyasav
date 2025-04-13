import { Outlet } from 'react-router';

const AppLayout = () => (
    <div>
        <div>header</div>
        <Outlet />
        <div>footer</div>
    </div>
);

export default AppLayout;
