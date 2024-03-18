import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../componentsp/admin/Header'

const AdminLayout = () => {
    return (
        <div className='ALayout'>
            <Header />
            <Outlet />
        </div>
    );
};

export default AdminLayout;