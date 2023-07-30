import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, Outlet, ScrollRestoration } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import bookingList from '../assets/icons/booking_list.png';
import review from '../assets/icons/review.png';
import add from '../assets/icons/plus.jpg';
import admin from '../assets/icons/make-admin.png';
import manage from '../assets/icons/manage-service.jpg';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <ScrollRestoration />
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#F4F7FC]">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">



                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/orderlist"><img className="w-5" src={bookingList} alt="booking list" />Order List</Link></li>
                                <li><Link to="/dashboard/addservice"><img className="w-5" src={add} alt="booking list" />Add service</Link></li>
                                <li><Link to="/dashboard/makeadmin"><img className="w-5" src={admin} alt="booking list" />Make Admin</Link></li>
                                <li><Link to="/dashboard/manageservice"><img className="w-5" src={manage} alt="booking list" />Manage Services</Link></li>
                            </>
                        }
                        {
                            !isAdmin &&
                            <>
                                <li><Link to="/dashboard/bookinglist"><img className="w-5" src={bookingList} alt="booking list" />Booking List</Link></li>
                                <li><Link to="/dashboard/review"><img className="w-5" src={review} alt="booking list" />Review</Link></li>

                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;