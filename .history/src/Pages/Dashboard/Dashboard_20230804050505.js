import React from 'react';

const Dashboard = () => {
    return (

        <div>
            <div className='p-7'>
                <h2 className='text-2xl font-bold mb-10'>Make Admin</h2>
                <div className='flex bg-warning p-5 h-72'>

                    <div className="w-full max-w-sm">
                        <label className="label">
                            <span className="label-text text-accent font-bold">Total Buyers</span>
                        </label>
                        <input type="range" min={0} max="100" value="10" className="range range-secondary" />
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Dashboard;