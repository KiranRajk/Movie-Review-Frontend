import React, { useEffect, useState } from 'react'
import './AdminDashboard.css'
import axiosInstance from '../../../../config/AxiosInstance'

const AdminDashboard = () => {
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(()=>{
        getDetails()
    },[])
    const getDetails = async ()=>{
        try {
            console.log('HIt 1 ');
            const response = await axiosInstance.get('/api/v1/admin/dashboard');
            console.log(response.data);
            setDashboardData(response.data)
        } catch (error) {
            console.log('Error occured',error);
        }
    } 
  return (
    <div className='dashboard-container'>
        <div className="dashboard-image">
            <div className="dashboard-content">
            <h1>Welcome, Admin!</h1>
                {dashboardData && (
                <h2>Total Users Achieved: {dashboardData.totalUsers}</h2>
                )}  
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard