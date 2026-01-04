import { useState, useEffect } from 'react';
import { 
  FaUsers, 
  FaChartLine, 
  FaDollarSign, 
  FaShoppingCart,
  FaCog,
  FaBell,
  FaCalendar,
  FaFileAlt
} from 'react-icons/fa';

const Dashboard = ({ user }) => {
  const [stats, setStats] = useState({
    totalUsers: 1243,
    revenue: 45678,
    growth: 23.5,
    orders: 289
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'New user registration', time: '2 minutes ago' },
    { id: 2, action: 'Order #1234 completed', time: '5 minutes ago' },
    { id: 3, action: 'Profile updated', time: '10 minutes ago' },
    { id: 4, action: 'Payment received', time: '1 hour ago' }
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          Welcome back, {user?.name}!
        </h1>
        <p className="dashboard-subtitle">
          Here's what's happening with your account today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <div className="stat-value">{stats.totalUsers}</div>
          <div className="stat-label">Total Users</div>
        </div>
        
        <div className="stat-card">
          <FaDollarSign className="stat-icon" />
          <div className="stat-value">${stats.revenue.toLocaleString()}</div>
          <div className="stat-label">Revenue</div>
        </div>
        
        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <div className="stat-value">+{stats.growth}%</div>
          <div className="stat-label">Growth</div>
        </div>
        
        <div className="stat-card">
          <FaShoppingCart className="stat-icon" />
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-label">Orders</div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        <div className="feature-card">
          <h3 className="feature-title">
            <FaBell /> Recent Activity
          </h3>
          <div className="feature-description">
            {recentActivity.map(activity => (
              <div key={activity.id} style={{ 
                padding: '0.5rem 0', 
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>{activity.action}</span>
                <small style={{ color: '#999' }}>{activity.time}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-card">
          <h3 className="feature-title">
            <FaCalendar /> Quick Actions
          </h3>
          <div className="feature-description">
            <button className="submit-btn" style={{ marginBottom: '1rem' }}>
              Create New Project
            </button>
            <button className="submit-btn" style={{ 
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #2ed573, #1e90ff)'
            }}>
              Generate Report
            </button>
            <button className="submit-btn" style={{
              background: 'linear-gradient(135deg, #ffa502, #ff6348)'
            }}>
              Settings
            </button>
          </div>
        </div>

        <div className="feature-card">
          <h3 className="feature-title">
            <FaFileAlt /> User Information
          </h3>
          <div className="feature-description">
            <div style={{ marginBottom: '1rem' }}>
              <strong>Name:</strong> {user?.name}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Email:</strong> {user?.email}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>User ID:</strong> {user?.id}
            </div>
            <div>
              <strong>Status:</strong> <span style={{ color: '#2ed573' }}>Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;