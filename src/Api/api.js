import axios from 'axios';

const baseUrl = 'https://node-test-fu37.onrender.com/api';

export const getCompetitions = async () => {
    try {
        const response = await axios.get(`${baseUrl}/competitions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching competitions:', error);
        throw error;
    }
};

export const getEventsByLevel = async (level) => {
    try{
        const response = await axios.get(`${baseUrl}/events/level/${level}`);
        return response.data;
    }
    catch(error){
        console.error('error in fetching events', error);
        throw error;
    }
};

export const getCompetitionByEvent = async (id) => {
    try{
        const response = await axios.get(`${baseUrl}/competitions/?event_id=${id}`);
        return response.data;
    }
    catch(error){
        console.error('error in fetching events', error);
        throw error;
    }
};

