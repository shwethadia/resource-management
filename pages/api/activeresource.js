import axios from "axios"





export default  async function activeResource(req,res) {

    const axiosRes =await axios.get(`${process.env.API_URL}/activeresource`);
    const resource = axiosRes.data;
    console.log(resource);
    return res.send(resource);
}