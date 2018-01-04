const fetchHouseData = async () => {
  const fetchApi = await fetch('http://localhost:3001/api/v1/houses')
  const jsonResponse = await fetchApi.json();
  const swornMembers = await jsonResponse.map( async (character) => {
    const obj = await character.swornMembers.map( async (swornMember) => {
      const member = await getSwornMember(swornMember);
      return member;
    })
    const promises = await Promise.all(obj);
    return promises;
  })


  
}

const getSwornMember = async (memberURL) => {
  const member = await fetch('http://localhost:3001/api/v1/character', {
    method: 'POST',
    headers: {
      'CONTENT-TYPE': 'application/json'
    },
    body: JSON.stringify({url: memberURL})
  })
  const json = await member.json();
  return json;
}


export default fetchHouseData;

