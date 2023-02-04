const { useState, useEffect } = require("react");
import DropFileUpload from "../../../components/common/DropFileUpload";
import { storage } from "../../../firebase/firebase";
import {toast,ToastContainer} from "react-toastify"
import {
  getDownloadURL,
  ref,
  deleteObject,
  uploadBytes,
  getMetadata,
} from "firebase/storage";
const Index = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [type, setType] = useState("");
  const [banner, setBanner] = useState("");
  const [faculty, setFaculty] = useState("");
  const [image, setImageArray] = useState([]);
  const [Uploaded, setIsUploaded] = useState(false);
  const types = ["National level", "College Level", "Departmental"];

  const getImageURL = async (image) => {
    try {
      console.log(image);
      console.log(storage);
      const imageRef = ref(storage, `logo/${name}/${image.name}`);
      const imageUploadResponse = await uploadBytes(imageRef, image);
      console.log(imageUploadResponse);
      const imageDownloadResponse = await getDownloadURL(imageRef);
      console.log(imageDownloadResponse);
      return imageDownloadResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let signupInfo = {
      type: type,
      name,
      description: des,
      user_type: "Committee",
      banner,
      faculty,
    };
    console.log(signupInfo);
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
        Committee Registeration Form
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex  justify-center w-[70%] text-sm  h-[80%] py-9 px-10 bg-tertiaryblue-100 text-white  font-medium font-display rounded-md opacity-95 "
      >
        <div className="flex flex-col w-[70%]">
          <label htmlFor="email" className="my-2 ">
            Committe Name<span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            onChange={(event) => setName(event.target.value)}
            className="py-2  w-[80%] mb-4 border-b-2 text-white focus:outline-none border-white bg-tertiaryblue-100 px-1"
            placeholder="Enter committee name"
          ></input>
          <label htmlFor="des">
            Committe Description<span className="text-red-600">*</span>
          </label>
          <textarea
            id="des"
            onChange={(event) => setDes(event.target.value)}
            rows={1}
            placeholder="Enter committee description"
            className="w-[80%] text-white  my-5 py-2 bg-tertiaryblue-100 focus:outline-none  mb-4 border-b-2 border-white px-1"
          ></textarea>
          <label htmlFor="type">
            Committe Type<span className="text-red-600">*</span>
          </label>
          <select
            id="type"
            onChange={(event) => setType(event.target.value)}
            className="bg-tertiaryblue-100 w-[80%] mb-4 border-white focus:outline-none border-b-2 py-2 my-2 px-1 text-white"
          >
            <option value="">Select committee type</option>
            {types.map((type, i) => (
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
            Committe Logo<span className="text-red-600">*</span>
          </p>
          <DropFileUpload
            msg={"Drag files to upload or"}
            extension="browse"
            uploadFiles={upload}
          ></DropFileUpload>
          {Uploaded && (
            <img src={URL.createObjectURL(image[image.length - 1])}></img>
          )}
          <label htmlFor="email" className="my-2 ">
            Faculty-in-charge<span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            onChange={(event) => setFaculty(event.target.value)}
            className="py-2  w-[80%] mb-4 border-b-2 text-white focus:outline-none border-white bg-tertiaryblue-100 px-1"
            placeholder="Enter faculty name"
          ></input>
        </div>
      </form>
    </div>
  );
};
export default Index;
