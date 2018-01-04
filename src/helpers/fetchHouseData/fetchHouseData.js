const fetchHouseData = async () => {
  const fetchApi = await fetch('http://localhost:3001/api/v1/houses', {
  })
  const jsonResponse = await fetchApi.json();

  const swornMembers = jsonResponse.map( async (character) => {
    const obj = await character.swornMembers.reduce( async (accum, swornMember) => {
      const memberObj = await getSwornMember(swornMember);
      await accum.push(memberObj)
      console.log(accum)
      return accum;
    }, [])
    console.log(obj)

    return obj;
  })

  console.log(swornMembers)

  return jsonResponse;
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

