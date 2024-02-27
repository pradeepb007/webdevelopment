// frontend/src/components/ExampleComponent.js
import React, { useState, useEffect } from 'react';
import { getExamples, createExample, updateExample, deleteExample } from '../services/api';

const ExampleComponent = () => {
  const [examples, setExamples] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const examplesData = await getExamples();
        setExamples(examplesData);
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, []);

  const handleCreateExample = async () => {
    try {
      const newExample = { name: 'New Example', description: 'Description of new example' };
      const createdExample = await createExample(newExample);
      setExamples([...examples, createdExample]);
    } catch (error) {
      // Handle error
    }
  };

  const handleUpdateExample = async (exampleId, newData) => {
    try {
      await updateExample(exampleId, newData);
      const updatedExamples = examples.map(example =>
        example.id === exampleId ? { ...example, ...newData } : example
      );
      setExamples(updatedExamples);
    } catch (error) {
      // Handle error
    }
  };

  const handleDeleteExample = async (exampleId) => {
    try {
      await deleteExample(exampleId);
      const updatedExamples = examples.filter(example => example.id !== exampleId);
      setExamples(updatedExamples);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h1>Examples</h1>
      <ul>
        {examples.map(example => (
          <li key={example.id}>
            {example.name} - {example.description}
            <button onClick={() => handleUpdateExample(example.id, { name: 'Updated Example' })}>
              Update
            </button>
            <button onClick={() => handleDeleteExample(example.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleCreateExample}>Create Example</button>
    </div>
  );
};

export default ExampleComponent;
