import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './MetricsChart.css';

const MetricsChart = ({ models }) => {
  // Transform models data for the chart
  const chartData = models.map(model => ({
    name: model.model_name,
    Accuracy: parseFloat(model.accuracy),
    Precision: parseFloat(model.precision),
    Recall: parseFloat(model.recall),
    F1: parseFloat(model.f1_score)
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {(entry.value * 100).toFixed(2)}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (models.length === 0) {
    return (
      <div className="chart-container">
        <div className="chart-empty">
          <p>No models available to display. Add models to see the comparison chart.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Comparison of Evaluation Metrics Across Models</h3>
        <p className="chart-subtitle">Interactive visualization of model performance</p>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
          />
          <YAxis 
            domain={[0.5, 1]}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            label={{ value: 'Score', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="square"
          />
          <Bar dataKey="Accuracy" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Precision" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Recall" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="F1" fill="#ef4444" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MetricsChart;
