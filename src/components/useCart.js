import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";


let baseURL = 'https://route-ecommerce.onrender.com/api/v1'
let token = localStorage.getItem('userToken')

export function addToCart(productId) {
    return axios.post(`${baseURL}/cart`, { productId }, {
        headers: {
            token
        }
    })
}


export function deleteCart(productId) {
    return axios.delete(`${baseURL}/cart/${productId}`, {
        headers: {
            token
        }
    })
}
export function updateCart({id,count}) {
    return axios.put(`${baseURL}/cart/${id}`,{count}, {
        headers: {
            token
        }
    })
}

//paymenr

export function checkout({id,shippingAddress}) {
    return axios.post(`${baseURL}/orders/checkout-session/${id}?url=http://localhost:3000`,{shippingAddress}, {
        headers: {
            token
        }
    })
}





export function getCart() {
    return axios.get(`${baseURL}/cart`, {
        headers: {
            token
        }
    })
}




export function useGetCart(key, fn) {

    return useQuery(key, fn)
}


export function useCrudCart(fn) {
    const queryClient = useQueryClient()
    return useMutation(fn, {
        onSuccess: (data) => {
            toast.success(data?.data?.message);
            queryClient.invalidateQueries('getCart')
        },
        onError: (data) => { toast.error(data?.message) }
    })
}

