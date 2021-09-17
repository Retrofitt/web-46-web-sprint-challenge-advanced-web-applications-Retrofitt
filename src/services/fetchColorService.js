import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {

    const promise =  axiosWithAuth().get('/colors')
    const promiseData = promise.then((res)=> res.data)

    return console.log(promiseData)
}

export default fetchColorService;