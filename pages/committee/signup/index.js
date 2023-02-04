const { useState, useEffect } = require("react");
import DropFileUpload from "../../../components/common/DropFileUpload";
const Index = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImageArray] = useState([]);
  const [Uploaded, setIsUploaded] = useState(false);
  const types = ["National level", "College Level", "Departmental"];
  const submitHandler = (e) => {
    let logo = URL.createObjectURL(image[image.length]);
    e.preventDefault();
    let signupInfo = {
      type: type,
      name,
      description: des,
      user_type: "Committee",
      logo,
    };
    console.log(signupInfo);
  };
  const upload = (accepted, rejected) => {
    setImageArray([...accepted]);
    setIsUploaded(true);
  };

  return (
    <div className="flex flex-col px-28 py-10 h-[100vh] bg">
      <h1 className="text-4xl my-5 text-white font-Heading">
        Committee Registeration Form
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex  justify-center w-[70%]  h-[80%] py-9 px-10 bg-tertiaryblue-100 text-white  font-medium font-display rounded-md opacity-95 "
      >
        <div className="flex flex-col w-[70%]">
          <label htmlFor="email" className="my-2 ">
            Committe Email<span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            onChange={(event) => setName(event.target.value)}
            className="py-2 bg-slate-100 w-[80%] mb-4 border-2 text-black border-tertiarygrey-400 px-1"
            placeholder="Enter committee name"
          ></input>
          <label htmlFor="des">
            Committe Description<span className="text-red-600">*</span>
          </label>
          <textarea
            id="des"
            onChange={(event) => setDes(event.target.value)}
            rows={5}
            placeholder="Enter committee description"
            className="w-[90%] text-black my-5 bg-slate-100  mb-4 border-2 border-tertiarygrey-400 px-1"
          ></textarea>
          <label htmlFor="type">
            Committe Type<span className="text-red-600">*</span>
          </label>
          <select
            id="type"
            onChange={(event) => setType(event.target.value)}
            className="bg-slate-100 w-[80%] mb-4 border-2 border-tertiarygrey-400 py-2 my-2 px-1 text-black"
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
        <div className="flex flex-col  w-[40%]">
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
        </div>
      </form>
    </div>
  );
};
export default Index;
