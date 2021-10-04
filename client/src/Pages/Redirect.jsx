import React , {useEffect} from 'react'
import { useHistory,useParams } from 'react-router'


import OrderOnline from '../components/Restaurant tabs/OrderOnline';
import Overview from '../components/Restaurant tabs/Overview';
import Photos from '../components/Restaurant tabs/Photos';
import Reviews from '../components/Restaurant tabs/Reviews';
import MenuPart from '../components/Restaurant tabs/MenuPart';

const Redirect = () => {
    const history = useHistory();
    const {id} = useParams();
    useEffect(()=>{
        history.push(`/restaurant/42354/overView`)
    },[])
    const {tab} = useParams();
    return (
        <>
       {tab=="overView" && <Overview/>}
       {tab=="orderOnline" && <OrderOnline/>}
       {tab=="reviews" && <Reviews/>}
       {tab=="menu" && <MenuPart/>}
       {tab=="photos" && <Photos/>}
            
        </>
    )
}

export default Redirect
