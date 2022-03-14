import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const ActiveResource = () =>{

   const [resource, setResource] = useState({});
   const [seconds,setSeconds] = useState();


   useEffect(()=>{

    async function fetchResource() {

        const res = await axios.get("/api/activeresource");
        const resource = res.data;
        console.log("MY RES")
        console.log(resource)
        const timeToFinish = parseInt(resource.timeToFinish,10);
        const elapsedTime = moment().diff(moment(resource.activationTime),"seconds");
        const  remainingTime =  (timeToFinish *60) - elapsedTime;

        if(remainingTime >=0){

            resource.timeToFinish = remainingTime;
            setSeconds(remainingTime);
        }

        setResource(resource);
    }
    fetchResource();

   },[])


   useEffect(() => {
    const interval = setInterval(() => {
        setSeconds(seconds -1);
    }, 1000);

    if( seconds <0) {

        clearInterval(interval);
    }
    return () => clearInterval(interval);
    },[seconds])


    const completeResource = () =>{

        axios.patch("/api/resources", {...resource, status:"complete"})
        .then(_ => location.reload())
        .catch(_ => alert("Failed to complete the resource"))
    }


    const hasResource = resource && resource.id;


    return(

        <div className="active-resource">
            <h1 className="resource-name">

                { hasResource ? resource.title :"No Active Resource"}

            </h1>
            <div className="time-wrapper">

                {hasResource && 
                    (
                        seconds > 0 ?
                        <h2 className="elapsed-time">
                            {seconds}
                        </h2> : 
                        
                        <h2 className="elapsed-time">
                          <button 
                          onClick={completeResource}
                          className="button is-success">
                              Done!
                          </button>
                        </h2>

                    )
                
                }
            </div>
                {
                    hasResource ?
                    <Link href={`/resources/${resource.id}`}>
                    <a className="button">
                        Back to Resource
                    </a>
                    </Link> :
                    <Link href="/">
                        <a className="button">
                            Go to ResourceList
                        </a>
                    </Link>

                }
    
        </div>
    )
}


export default ActiveResource;