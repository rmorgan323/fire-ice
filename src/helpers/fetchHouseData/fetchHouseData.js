const fetchHouseData = async () => {
  const fetchApi = await fetch('http://localhost:3001/api/v1/houses', {
  })
  const jsonResponse = await fetchApi.json();

  const url = jsonResponse[0].swornMembers[0]

  const x = getSwornMember(url);



  // const swornMembers = jsonResponse.map( async (character) => {
  //   const obj = await character.swornMembers.map( async (swornMember) => {
  //     const memberObj = await getSwornMember(swornMember);
  //     return memberObj;
  //   })

  //   console.log('obj', obj)
  //   return obj;
  // })

  // console.log(swornMembers)

  return jsonResponse;
}

const getSwornMember = async (memberURL) => {
  console.log(memberURL)
  const member = await fetch('http://localhost:3001/api/v1/character', {
    method: 'POST',
    headers: {
      'CONTENT-TYPE': 'application/json'
    },
    // body: `{ url: ${JSON.stringify(memberURL)} }`
    body: JSON.stringify(`{ url: '${memberURL}' }`)
  })
  console.log('member', member)
}


export default fetchHouseData;

