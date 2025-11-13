import { useState } from 'react';
import Navbar from './Navbar';
import ModelsList from './ModelsList';
import MetricsChart from './MetricsChart';
import './Dashboard.css';

const Dashboard = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [models, setModels] = useState([]);

  const handleRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const handleModelsUpdate = (updatedModels) => {
    setModels(updatedModels);
  };

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>Machine Learning Models</h2>
          <p className="dashboard-subtitle">
            CICIDS-2017 Dataset Evaluation Metrics
          </p>
        </div>
        <MetricsChart models={models} />
        <ModelsList 
          refreshTrigger={refreshTrigger} 
          onRefresh={handleRefresh}
          onModelsUpdate={handleModelsUpdate}
        />
      </div>
    </div>
  );
};

export default Dashboard;
