function AddStudents({ show, hide }) {
  if (!show) {
    return null; // Return null if show is false to hide the modal
  }

  return (
    <div
      class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div class="">
          <div class="text-center p-5 flex-auto justify-center ">
            <h2 className="text-xl font-bold py-4 mb-3">Add Student</h2>

            <div className="flex justify-between">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  className="border py-2 px-2 rounded-lg "
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="border py-2 px-2 rounded-lg"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  className="border py-2 px-2 rounded-lg"
                  placeholder="Phone Number"
                />
                <input type="text" className="border py-2 px-2 rounded-lg" />
              </div>
            </div>
          </div>

          <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button
              class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              onClick={hide}
            >
              Cancel
            </button>
            <button class="mb-2 md:mb-0 bg-dark-purple border border-dark-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-dark-blue">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudents;