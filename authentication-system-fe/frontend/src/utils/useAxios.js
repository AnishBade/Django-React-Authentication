import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import {useContext} from 'react';
import AuthContext from '../context/AuthContext';

const baseURL = 'http://localhost:8000/api'

const useAxios = () => {
    const [authTokens, setUser, setAuthToken] = useContext(AuthContext)
}