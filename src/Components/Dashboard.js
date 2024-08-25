import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import Topbar from './Topbar';
import DashboardContent from './Dashboard/DashboardContent';
import Customers from './Customers/Customers';
import Orders from './Orders/Orders';
import Payments from './PaymentDetails/Payments';
function Dashboard() {
    const navigate = useNavigate();
    const [selectedContent, setSelectedContent] = useState('Dashboard');

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        if (!username) {
            navigate('/');
        }
    }, [navigate]);

    const renderContent = () => {
        switch (selectedContent) {
            case 'Dashboard':
                return <DashboardContent/>;
            case 'Orders':
                return <Orders/>;
            case 'Customers':
                return <Customers/>;
            case 'PaymentDetails':
                return <Payments/>;
            default:
                return <DashboardContent/>;
        }
    };

    return (
        <>
            
            <div className="container-fluid p-0">
                <Topbar/>
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <Sidebar setSelectedContent={setSelectedContent} />
                    </div>
                    <div className="col py-3 pe-4 bg-light">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
