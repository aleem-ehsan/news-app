import { useRouter } from "next/router" // it is a Hook for Routing between pages and sending data like we did in REACT.js using useParams

import styles from "../styles/Toolbar.module.css"


export const  Toolbar=()=> {    
                                

const router = useRouter(); // first we need to create an object of useRouter
                                
    return (
        <div className={styles.main}>
            <div onClick={()=> router.push('/')}>Home</div>
            <div onClick={()=> router.push('/feed/1')}>Feed</div>
            <div onClick={()=> router.push('/eom')}>EOM</div>
            <div onClick={()=> window.location.href ="https://github.com/aleem-ehsan/API/blob/main/README.md" }>Twiiter</div>
        </div>
    )
}
