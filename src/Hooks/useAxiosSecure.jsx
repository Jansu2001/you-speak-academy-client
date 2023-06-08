import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000' // Replace with your base URL
});
const useAxiosSecure = () => {
    const {signInOutUser} = useAuth()
    const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
     async (error) => {
        if(error.response&&(error.response.status=== 401 || error.response.status === 403)){
            await signInOutUser()
            navigate('/login'); // Use navigate to redirect to the login page
        }
        return Promise.reject(error);
      }
    );
  }, [signInOutUser, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
