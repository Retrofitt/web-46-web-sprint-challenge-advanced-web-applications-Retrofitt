
import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {

    const colors = []
     axiosWithAuth().get('/colors')
        .then(res=>{
            res.data.map(color=>{
                return colors.push(color)
            })
        })
        .catch(err=>{
            console.error(err)
        })

    return colors
}

export default fetchColorService;




// I'm not sure how to return the res.data from the promise here but i was able to do it without it