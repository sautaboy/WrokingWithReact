import React, { useEffect} from 'react'
import axios from 'axios'

export default function FetchApi() {
    const getNew = () => {
        axios.get("https://static.cdninstagram.com/rsrc.php/v3/yX/r/RBCbzwOClSr.js?_nc_x=Ij3Wp8lg5Kz").then((response) => {
            console.log(response.data);
        })
    }
    useEffect(() => {
        getNew();
    }, [])
    return (
        <div>
            <button onClick>Get New</button>
        </div>
    )
}
