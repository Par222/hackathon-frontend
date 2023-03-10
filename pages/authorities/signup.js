const { useState, useEffect } = require("react");
import DropFileUpload from "../../components/common/DropFileUpload";
import { storage } from "../../firebase/firebase";
import {toast,ToastContainer} from "react-toastify"
import {
  getDownloadURL,
  ref,
  deleteObject,
  uploadBytes,
  getMetadata,
} from "firebase/storage";
import axios from "axios";
import { useRouter } from "next/router";
import { async } from "@firebase/util";
const Index = () => {
  const [name, setName] = useState("");
  const [com, setcom] = useState([]);
  const [committee, setCommittee] = useState("");
  const [position, setPosition] = useState("");
  const [banner, setBanner] = useState("");
  const fetchComDetails=async()=>{
    const result=await axios.get("http://localhost:5000/api/committee")
    setcom(result.data)
  }
  useEffect(()=>{
   fetchComDetails()
  },[])

  const [image, setImageArray] = useState([]);
  const [id,setId]=useState(localStorage.getItem("id"))


  const [Uploaded, setIsUploaded] = useState(false);
  const designation = ["gs", "Faculty", "Dean"];

  const getImageURL = async (image) => {
    try {
      console.log(image);
      console.log(storage);
      const imageRef = ref(storage, `faculty/${name}/${image.name}`);
      const imageUploadResponse = await uploadBytes(imageRef, image);
      console.log(imageUploadResponse);
      const imageDownloadResponse = await getDownloadURL(imageRef);
      console.log(imageDownloadResponse);
      return imageDownloadResponse;
    } catch (error) {
      console.log(error);
    }
  };
  const router=useRouter()
  const submitHandler = async(e) => {
    e.preventDefault();
    
     
    
    let signupInfo = {
      name,
      designation:position,
      signature:banner,
      committee,
      id
      
    };
    console.log(signupInfo)

    const result=await axios.put(`http://localhost:5000/api/faculty`,signupInfo).then(()=>{
        router.push(`/authorities/${position}`)
    })
    
  };
  const upload = (accepted, rejected) => {
    setImageArray([...accepted]);
    setIsUploaded(true);
  };
  useEffect(() => {
    if (image.length > 0)
      getImageURL(image[image.length - 1]).then((banner) => setBanner(banner));
  }, [image]);

  return (
    <div className="flex flex-col px-28 py-10 h-[100vh] bg">
      <h1 className="text-4xl my-5 text-white font-Heading">
        Authority Registeration Form
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex  justify-center w-[70%] text-sm  h-[80%] py-9 px-10 bg-tertiaryblue-100 text-white  font-medium font-display rounded-md opacity-95 "
      >
        <div className="flex flex-col w-[70%]">
          <label htmlFor="email" className="my-2 ">
            Authority Name<span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            onChange={(event) => setName(event.target.value)}
            className="py-2  w-[80%] mb-4 border-b-2 text-white focus:outline-none border-white bg-tertiaryblue-100 px-1"
            placeholder="Enter authority name"
          ></input>
          <label htmlFor="des">
            Authority Committee
          </label>
          <select
            id="type"
            onChange={(event) => setCommittee(event.target.value)}
            className="bg-tertiaryblue-100 w-[80%] mb-4 border-white focus:outline-none border-b-2 py-2 my-2 px-1 text-white"
          >
            <option value="">Select Committee </option>
            {com.map((type, i) => (
              <option value={type.id} id={i}>
                {type.name}
              </option>
            ))}
          </select>
          
          <label htmlFor="type">
            Authority Designation<span className="text-red-600">*</span>
          </label>
          <select
            id="type"
            onChange={(event) => setPosition(event.target.value)}
            className="bg-tertiaryblue-100 w-[80%] mb-4 border-white focus:outline-none border-b-2 py-2 my-2 px-1 text-white"
          >
            <option value="">Select position </option>
            {designation.map((type, i) => (
              <option value={type} id={i}>
                {type}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="my-5 rounded-md text-white bg-pink-500 w-[25%] py-2 "
          >
            Register
          </button>
        </div>
        <div className="flex flex-col  w-[60%]">
          <p className="my-2">
            Signature<span className="text-red-600">*</span>
          </p>
          <DropFileUpload
            msg={"Drag files to upload or"}
            extension="browse"
            uploadFiles={upload}
          ></DropFileUpload>
          {Uploaded && (
            <img src={URL.createObjectURL(image[image.length - 1])} className="h-[100px] w-[100px]"></img>
          )}
        </div>
      </form>
    </div>
  );
};
export default Index;
