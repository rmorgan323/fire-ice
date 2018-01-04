const fetchHouseData = async () => {
  const fetchApi = await fetch('http://localhost:3001/api/v1/houses', {
  })
  const jsonResponse = await fetchApi.json();

  console.log(jsonResponse)

  // const swornMembers = jsonResponse.map( async (character) => {
  //   const getSwornMembers = await fetch('http://localhost:3001/api')
  // })

  return jsonResponse;
}

export default fetchHouseData;