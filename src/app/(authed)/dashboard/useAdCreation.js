// Create a new file, e.g., useAdCreation.js
import { useState } from 'react';
import axios from 'axios';

const useAdCreation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const createAd = async (adData, token) => {
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:3000/ads/create", adData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      // Assuming the API response contains a success message or data
      setSuccess(response.data);

      // Optionally, return the response data or success message
      return response.data;
    } catch (error) {
      console.error("Ad creation failed", error);

      // Optionally, set the error state or throw an error
      setError(error);

      // Optionally, rethrow the error
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createAd, loading, error, success };
};

export default useAdCreation;
