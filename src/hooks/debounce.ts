/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect,useState } from 'react';



export function useDebounce(value:string, delay:number = 500):string {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [debounced, setDebounced]=useState(value)
    useEffect(()=> {
       const handler = setTimeout(()=> setDebounced(value), delay)
       return () => clearTimeout(handler)
    },[value,delay])
    return debounced
}
