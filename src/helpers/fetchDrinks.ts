import axios from 'axios'
import { Drinks } from '../interface/cocktailsData'



export const fetchDrinks=async(cocktailName:String)=>{
    
try {
    
    const {data} = await axios.get<Drinks>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

const dataDestructured= data?.drinks?.map((c)=>{


const {strDrinkThumb, strDrink}=c

return {
  strDrink, strDrinkThumb
}

})
console.log('dataDestructured',dataDestructured);


return dataDestructured

} catch (error) {

if(axios.isAxiosError(error)){

    console.log('error', error.message)
    return error.message

}

 
    
}

}