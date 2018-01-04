const fetchHouseData = async () => {
  const fetchApi = await fetch('http://localhost:3001/api/v1/houses', {
  })
  const jsonResponse = await fetchApi.json();
  return jsonResponse;
}

export default fetchHouseData;