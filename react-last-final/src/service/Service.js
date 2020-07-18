import axios from "axios";
import settings from "../settings"

class Service {    
    async getBreedBeng() {
        return await axios.get( `${settings.API_BASE_URL}images/search?breed_ids=beng` )
    } 
    async getImages() {
        return await axios.get( `${settings.API_BASE_URL}images/search?limit=100` )
    }   
    async getCategories() {
        return await axios.get( `${settings.API_BASE_URL}categories` )
    } 
    async getCategoriesData(category_id) {
        return await axios.get( `${settings.API_BASE_URL}images/search?category_ids=${category_id}` )
    } 
    async getBreeds() {
        return await axios.get( `${settings.API_BASE_URL}breeds` )
    }
    async getFavorite(image_id, firstName) {
        // return await axios.get(`${settings.API_BASE_URL}images/search?breed_ids=beng?api_key=${settings.API_KEY}` )
        return await axios.post( `${settings.API_BASE_URL}favourites`, {
            image_id: image_id,
            sub_id: firstName
        }, 
        {
            headers: {
                "Content-Type" : 'application/json',
                'x-api-key': `${settings.API_KEY}`
            }
        })
    }
    async getMyFavorite(firstName) {
        return await axios.get(`${settings.API_BASE_URL}favourites?`,{
            sub_id: firstName,
        }, 
        {
            headers: {
                "Content-Type" : 'application/json',
                'x-api-key': `${settings.API_KEY}`
            }
        })
    }
  
}

export default Service;

