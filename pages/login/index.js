import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function Index(props){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [type,setType] = useState('')
    const [index, setIndex] = useState(0)
    const imgArr = [""]
    const [isLogin, setLogin] = useState(true)
    const types = ["Committee", "Student", "Faculty"];
    const router = useRouter()
    async function submitHandlerLogin(e){
        e.preventDefault()
        const response = await axios.post('http://localhost:5000/api/auth/login',{
            email: email,
            password: password
        },{})
        console.log(response.data)
       
        localStorage.setItem("user_type", response.data.user.user_type)
        
        if(response.data.user.user_type==="Committee"){
            localStorage.setItem("id", response.data.user.committeeID)
            router.push('/committee')
        }
        if(response.data.user.user_type==="Student"){
            localStorage.setItem("id", response.data.studentID)
            router.push('/students')
        }
        if(response.data.user.user_type==="Faculty"){
            localStorage.setItem("id", response.data.user.facultyID)
            const res=await axios.get(`http://localhost:5000/api/faculty?id=${response.data.user.facultyID}`)
            console.log(res.data)
            router.push(`/authorities/${res.data[0].designation}`)

        }
    }
    async function submitHandlerSignup(e){
        e.preventDefault()
        const response = await axios.post('http://localhost:5000/api/auth/signup',{
            email: email,
            password: password,
            name: name,
            user_type: type
        },{})
        console.log(response.data)
       
        localStorage.setItem("user_type", response.data.user.user_type)
        if(response.data.user.user_type==="Student"){
            localStorage.setItem("id", response.data.user.studentID)
            router.push('/students')
        }
        if(response.data.user.user_type==="Committee"){
            localStorage.setItem("id", response.data.user.committeeID)
            router.push('/committee/signup')
        }
        if(response.data.user.user_type==="Faculty"){
            localStorage.setItem("id", response.data.user.facultyID)
            router.push('/authorities/signup')
        }
    }
    return(
        <div className="flex w-full">
            {/* <div className="bg-tertiaryblue-200 w-[50%]"></div>
            <div className="bg-[#2657eb] "></div> */}
            <div className="w-full text-white min-h-screen flex dual-background flex-row">
                {/* <div className={`flex justify-center w-full text-3xl ${!isLogin?"mt-[70px]":"mt-[125px]"}`}>
                    Welcome to our site
                </div> */}
                <div className="carousel">

                </div>
                <div className={`w-[30%] h-[350px] ${!isLogin?"h-[460px]":"h-[330px]"} bg-tertiaryblue-200 rounded-md items-center ml-[35%] px-5 py-5 ${!isLogin?"mt-[120px]":"mt-[175px]"} shadow-md`}>
                    {isLogin && <div>
                        <div className="flex justify-center text-2xl font-semibold pb-5">
                            Login
                        </div>
                        <form onSubmit={submitHandlerLogin} className="items-center flex flex-col">
                            <div className="flex rounded-md px-3 py-3 w-full justify-center">
                                <div className="w-10 px-3 py-3 bg-tertiaryblue-200 rounded-l-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="#db2777" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                </div>
                                <input id="email" placeholder="Email" className="bg-tertiaryblue-100 bg-opacity-40 border-b-2 border-y-tertiaryblue-200 px-2 rounded-r-md focus:outline-none w-[60%]" value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }}></input>
                            </div>
                            <div className="flex rounded-md px-3 py-3 w-full justify-center">
                                <div className="w-10 px-3 py-3 bg-tertiaryblue-200 rounded-l-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#db2777" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                                </div>
                                <input id="password" placeholder="Password" type="password" className="bg-tertiaryblue-100 bg-opacity-40 border-b-2 border-y-tertiaryblue-200 px-2 rounded-r-md focus:outline-none w-[60%]" value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }}></input>
                            </div>
                            <button type="submit" className="px-5 py-2 rounded-lg my-5 transition-all duration-300 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white ease-in-out" onClick={submitHandlerLogin}>LOGIN</button>
                            <div className="hover:cursor-pointer" onClick={() =>{setLogin(false)}}>
                                Don't Have an account?
                            </div>
                        </form>    
                    </div>}
                    {!isLogin && <div>
                        <div className="flex justify-center text-2xl font-semibold pb-5">
                            Signup
                        </div>
                        <form onSubmit={submitHandlerSignup} className="items-center flex flex-col">
                            <div className="flex rounded-md px-3 py-3 w-full justify-center">
                                <div className="w-10 px-3 py-3 bg-tertiaryblue-200  rounded-l-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#db2777" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                                </div>
                                <input id="name" placeholder="Name" className="bg-tertiaryblue-100 bg-opacity-40 border-b-2 border-y-tertiaryblue-200 px-2 rounded-r-md focus:outline-none w-[60%]" value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }}></input>
                            </div>
                            <div className="flex rounded-md px-3 py-3 w-full justify-center">
                                <div className="w-10 px-3 py-3 bg-tertiaryblue-200 rounded-l-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#db2777" d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"/></svg>
                                </div>
                                <select
                                    id="type"
                                    value={type}
                                    onChange={(event) => setType(event.target.value)}
                                    className=" bg-tertiaryblue-100 bg-opacity-40  border-b-2 w-[60%] border-y-tertiaryblue-200  focus:outline-none py-2 px-1"
                                >
                                    <option value="">Select user type</option>
                                    {types.map((type, i) => (
                                    <option className="bg-tertiaryblue-100" value={type} id={i}>
                                        {type}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex rounded-md px-3 py-3 w-full justify-center">
                                <div className="w-10 px-3 py-3 bg-tertiaryblue-200 rounded-l-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="#db2777" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                </div>
                                <input id="email" placeholder="Email" className="bg-tertiaryblue-100 bg-opacity-40 border-b-2 border-y-tertiaryblue-200 px-2 rounded-r-md focus:outline-none w-[60%]" value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }}></input>
                            </div>
                            <div className="flex rounded-md px-3 py-3 w-full justify-center">
                                <div className="w-10 px-3 py-3 bg-tertiaryblue-200 rounded-l-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#db2777" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                                </div>
                                <input id="password" placeholder="Password" type="password" className="bg-tertiaryblue-100 bg-opacity-40 border-b-2 border-y-tertiaryblue-200 px-2 rounded-r-md focus:outline-none w-[60%]" value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }}></input>
                            </div>
                            <button type="submit" className=" px-5 py-2 rounded-lg my-5 transition-all duration-300 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white ease-in-out" onClick={submitHandlerSignup}>SIGNUP</button>
                            <div className="hover:cursor-pointer" onClick={() =>{setLogin(true)}}>
                                Have an account?
                            </div>
                        </form>    
                    </div>}
                </div>
            </div>
        </div>
    )
}
export default Index;