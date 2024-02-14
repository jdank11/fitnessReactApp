export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'a7557c2befmshab0008dd29bc63bp1ba4b5jsn16b68d262e46',
    }
  }
  
  export const getData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
  
    return data
  }