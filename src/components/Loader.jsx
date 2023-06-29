import React from "react";

function Loader() {
  return (
    <div>
      <div
        class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="custom-loader"></div>
      </div>
    </div>
  );
}

export default Loader;
