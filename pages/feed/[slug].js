import { useRouter } from 'next/router';
import React from 'react'
import styles from "../../styles/Feed.module.css"
import {Toolbar} from "../../components/toolbar"

function Feed({ pageNumber, articles }) {

    // console.log(process.env.NEXT_PUBLIC_NEWS_KEY);
    // to access the Environment Variable


    // Agr me Apne JSX function se bahir kuch console.log karu ga to me usy Google k console pr nahi dekh saku ga phir wo mujhe TERMINAL me show hon ge
    console.log(articles);

    const router = useRouter();

    return (
        <div className='page-container'>

    <Toolbar />

            <div className={styles.main}>
                {
                    articles.map((article, index) => {
                        return <div className={styles.post} key={index} >

                            <h1 onClick={() => window.location.href = article.url}>{article.title}</h1>

                            <p>{article.description}</p>
                            {article.urlToImage && <img src={article.urlToImage} alt="" />}
                        </div>
                    })
                }
            </div>


            <div className={styles.paginator}>

                <div 
                        
                    onClick={  ()=> {
                            pageNumber > 1?   router.push(`/feed/${pageNumber - 1}`) : alert("No Previous Page")
                        }}
                className={ pageNumber === 1? styles.disabled : styles.active } 
                 > Previous Page</div>

                 <div>#{pageNumber}</div>

                 <div 
                        
                    onClick={  ()=> {
                            pageNumber < 5 ?   router.push(`/feed/${pageNumber + 1}`) : alert("No Next Page")
                        }}
                className={ pageNumber === 5? styles.disabled : styles.active } 
                 > Next Page</div>

            </div>
        </div>
    );
}

export default Feed



/* agr me yaha direct feed likhu or aagy forward slash likh kr koi value na likhu to mera page render nahi ho ga ERROR-404 will occur 

// Q ki mene jaha router.push kiya he waha "/feed/1" likha he is tarha route match nahi kiya to ERROR aya he

// lekin agr me  url me "/feed/" feed k baad koi b value du to mera page render ho jata he 

// it is because NEXT.js does not care about the second(2nd) param written in Routing

*/


export const getServerSideProps = async pageContext => {
    // jb mujhe Params chahye the pageContext se to "GetServerSideProps" sahi kaam kr rhy thy but "getStaticProps" gives an Error
    // export const getStaticProps = async pageContext =>{ 
    const pageNumber = pageContext.query.slug; // here pageContext.query. k saath "slug" is liye likha he Q k meri is file ka name slug he agr name koi or hota to me slug na likhta

    // here "query" is an Object that will contain the "slug" PROPERTY


    console.log("pageNumber = " + pageNumber);




    // console.log("im that param you want = " + pageNumber)
    // ye condition is liye lagae he k agr user 5 se bara koi page bheje to ham API hit hi na karn Q k hamri API PAGES 5 tak hi hn 
    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        // `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=5&page=${pageNumber}`

        // agr ap ki API jis se DATA fetch kr rhy hn us me koi PERSONAL-KEY ho ya kuch PRIVATE ho jisy reveal na krna chaah rahy ho to the user k jb wo Google pr hamari website ko Visit kary to neeche wala Authorization Method ka use kr sakte hn

        `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
            },
        },
    )




    const apiJson = await apiResponse.json();

    const { articles } = apiJson; // Destructuring

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
} 