import axios from 'axios';

export const getData = async (setData, setFilterData) => {
  const url = 'https://api.spacexdata.com/v3/capsules';
  try {
    const res = await axios.get(url);
    setData(res.data);
    setFilterData(res.data);
  } catch (error) {
    console.log(error);
  }
};
