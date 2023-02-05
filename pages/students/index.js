import { async } from "@firebase/util"
import axios from "axios"
import { useState } from "react"

const Index=()=>{
    const [relevant,setRelevant]=useState([])
    const [name,setName]=useState("")
    const submitHandler=async(e)=>{
        e.preventDefault();
        if(e.keyDown=="Enter")
       {
        const response=await axios.get(`http://localhost:5000/api/committee?name=${name}`)
        setRelevant(response.data)
       }
    }
    return(
    <div>
       <h1 className="text-whote text-2xl my-5 px-10">Search For Committees</h1>
       <form className="px-10" onSubmit={submitHandler} >
        <input  className="bg-white w-[50%] py-2 rounded-sm text-black shadow-md" onChange={(e)=>setName(e.target.value)}>
        </input>
       </form>
       <div>
        {relevant.length>0 && relevant.map((rel)=>
            <div>

                <img src={rel.logo}></img>

        </div>  )}
       </div>
    </div>
    )
  
}
export default Index