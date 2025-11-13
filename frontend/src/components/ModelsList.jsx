import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import ModelCard from './ModelCard';
import ModelForm from './ModelForm';
import './ModelsList.css';

const ModelsList = ({ refreshTrigger, onRefresh, onModelsUpdate }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingModel, setEditingModel] = useState(null);
  const { isAdmin } = useAuth();

  const API_URL = 'http://localhost:3000';

  useEffect(() => {
    fetchModels();
  }, [refreshTrigger]);

  const fetchModels = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/models`, {
        withCredentials: true,
      });
      setModels(response.data);
      onModelsUpdate(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load models');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingModel(null);
    setShowForm(true);
  };

  const handleEdit = (model) => {
    setEditingModel(model);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this model?')) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/models/${id}`, {
        withCredentials: true,
      });
      fetchModels();
    } catch (err) {
      alert('Failed to delete model');
      console.error(err);
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingModel(null);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingModel(null);
    fetchModels();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading models...</p>
      </div>
    );
  }

  return (
    <div className="models-container">
      <div className="models-header">
        <div className="models-count">
          <span className="count-number">{models.length}</span>
          <span className="count-label">Total Models</span>
        </div>
        {isAdmin && (
          <button onClick={handleAdd} className="btn-add">
            + Add New Model
          </button>
        )}
      </div>

      {error && <div className="error-message">{error}</div>}

      {models.length === 0 ? (
        <div className="empty-state">
          <p>No models found. {isAdmin && 'Add your first model to get started!'}</p>
        </div>
      ) : (
        <div className="models-grid">
          {models.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {showForm && (
        <ModelForm
          model={editingModel}
          onClose={handleFormClose}
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  );
};

export default ModelsList;
