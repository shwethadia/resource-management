import Footer from "components/footer";
import Layout from "components/layout";
import Navbar from "components/navbar";
import NewsLetter from "components/newsletter";
import ResourceHighlight from "components/resourcehighlight";
import ResourceList from "components/resourcelist";
import { useEffect } from "react";




export default function Home({resources}) {


/*     useEffect(()=>{

        fetch("http://localhost:3000/api/resources")
    },[])

 */

  return (
    
      <Layout>
          <ResourceHighlight
          resources={resources.slice(0,2)}
          />
          <NewsLetter/>
          <ResourceList
           resources={resources.slice(2)}
          />
          <Footer/>
      </Layout>

   )

}



//It is called at the build time and it's called only once.
// export async function getStaticProps() {
//   /*   const resData = await fetch("http://localhost:3000/api/resources");
//     const data = await resData.json(); */
//     console.log("Calling getStaticProps")
//     return {
//         props: {
//             resources : data
//         }
//     }
// }



//Serverside props is called  everytime you visiteed the page
//Funtion is executed on the server 
export async function getServerSideProps() {

    const resData = await fetch(`${process.env.API_URL}/resources`);
    const data = await resData.json();



    return {

        props: {

            resources : data
        }
    }

} 


/* export  async function getStaticProps(){

    const resData = await fetch("http://localhost:3001/api/resources")
    const data = await resData.json();
    const paths = data.map(resource =>{
        return {

            params: {id: resource.id}
        }
    });
    return {

        paths,
        fallback: false
    }
}


export async function getStaticProps({params}){


    const dataRes = await fetch(`https://localhost:3001/api/resources/${params.id}`)
    const data = await dataRes.json();
    return {

        props:{

            resource: data
        },

        revalidate: 1
    }
} */