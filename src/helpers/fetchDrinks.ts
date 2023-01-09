import axios from 'axios'
export interface DataFetched {
     
      idDrink: number;
      strCategory: string;
      strDrink: string;
      strDrinkThumb: string;
      strInstructions: string;
    
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
return data

} catch (error) {

if(axios.isAxiosError(error)){

    console.log('error')
    return error.message

}

    console.log('errorFetch', error);
    
}

}