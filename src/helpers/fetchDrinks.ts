import axios from 'axios'
export interface DataFetched {
    drinks: { [key: string]: null | string }[];
}


export const fetchDrinks=async()=>{
    
try {
    
    const {data} = await axios.get<DataFetched>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
return data.drinks

} catch (error) {

if(axios.isAxiosError(error)){

    console.log('error', error.message)
    return error.message

}

 
    
}

}