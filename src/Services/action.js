import axios from 'axios';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_REQUEST' });
    try {
      const res = await axios.get('https://api.spacexdata.com/v3/capsules');
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', payload: error });
    }
  };
};
