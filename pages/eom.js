import React from 'react'
import { Toolbar } from '../components/toolbar';


function EOM({data}) {
    console.log(data);
    return (


        <div className='page-container'>
<Toolbar />
            <div>
                <h1>EOM of MOnth</h1>
                <h3>{data.name}</h3>
                <h3>{data.description}</h3>
                <img src={data.image} alt="" />
                <h3>{data.position}</h3>

            </div>
        </div>
    )
}

export default EOM




// export const getServerSideProps =  async pageContext => {    // Fat Arrow Function

// export  async function getServerSideProps(pageContext) { // Regular Function


export const getStaticProps = async (pageContext) => {

// this "pageContext" argument is provided by the Next.js Automatically

const apiresponse = await fetch(
    `https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth`,
    // `https://github.com/aleem-ehsan/API/find/main`,
)
    const data = await apiresponse.json();

    return{
        props:{
            data
        }
    }
   

} 