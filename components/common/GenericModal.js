const GenericModal = (props) => {
  return (
    <div role={"modal"}>
      <div className="opacity-80 w-full h-[100vh] overflow-hidden bg-blackShade-50 z-10 absolute top-0 left-0 font-display" ></div>
      <div className="rounded-md bg-tertiarywhite-100 z-50 absolute top-[15%] left-[27.5%] w-[45%] max-h-[70%]  shadow-inner overflow-y-auto" >
        <div className="flex flex-col mb-2 rounded-md">
          <div className="flex  w-full justify-between items-baseline bg-tertiaryblue-50 rounded-t-md">
            <h1 className="text-tertiarywhite-100 font-bold text-xl px-4 py-3 ">{props.title}</h1>
            <span className="font-semibold text-lg mx-3 px-3 py-[3px]  rounded-full border bg-tertiarywhite-100 cursor-pointer" onClick={props.closeHandler}>
              X
            </span>
          </div>

          <div className="my-5">{props.children}</div>
          {!props.isStepModal && (
            <div className="flex w-full justify-end space-x-3 px-5 mt-5 mb-2">
              <button
                className={props.disabled?"bg-tertiarygrey-400 text-tertiarywhite-100 px-6 py-1 rounded-full":"bg-tertiaryblue-50 text-tertiarywhite-100 px-6 py-1 rounded-full"}
                onClick={props.posHandler}
              >
                {props.posText}
              </button>
              <button
                className="bg-slate-300 text-tertiarywhite-100 px-6 py-1 rounded-full"
                onClick={props.negHandler}
              >
                {props.negText}
              </button>
              
            </div>
          )}
            <div className="flex w-full justify-end space-x-3 px-5 mt-5 mb-5">
          {props.isStepModal && props.isPos ? (
             props.step == 1 || props.step == 2 ? (
                  <button
                    className="bg-tertiaryblue-50 text-tertiarywhite-100 px-6 py-1 rounded-full"
                    onClick={props.posHandler}
                  >
                    {props.posText}
                  </button>
                ):props.step == 3 && (
                <button
                  className="bg-tertiaryblue-50 text-tertiarywhite-100 px-6 py-1 rounded-full"
                  onClick={props.saveHandler}
                >
                  {props.posText}
                </button>
              )):<></>}
               {props.isStepModal && props.isNeg ? (
             props.step == 2 || props.step == 3 ? (
                  <button
                    className="bg-tertiarygrey-300 text-tertiarywhite-100 px-6 py-1 rounded-full"
                    onClick={props.negHandler}
                  >
                    {props.negText}
                  </button>
                ):props.step == 1 && (
                <button
                  className="bg-tertiarygrey-300 text-tertiarywhite-100 px-6 py-1 rounded-full"
                  onClick={props.closeHandler}
                >
                  {props.negText}
                </button>
              )):<></>}
              
            </div>
              
        </div>

      </div>
    </div>
  );
};
export default GenericModal;
