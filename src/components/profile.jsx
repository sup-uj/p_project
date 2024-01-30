// import React from 'react'
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    async function PfUpdatefunc() {
        navigate("/profileupdate");
    }

    async function Sidebarfunc() {
        navigate("/sidebar");
    }

    return (

        <>
            {/* <div className="flex justify-center m-5">
          <button id="ProfileBtn" data-modal-target="PfBtn" data-modal-toggle="PfBtn"  className="block text-black bg-primary-0 hover:bg-primary-0 font-medium rounded-lg text-sm px-12 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">User Profile</button>
      </div> */}
            <div id="PfBtn" aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 ">
                        <div className="flex justify-center items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <div className="text-lg text-gray-900 md:text-xl dark:text-white">

                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Profile
                                </h2>

                            </div>
                            {/* <div>
                                <button onClick={Sidebarfunc} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div> */}
                        </div>

                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                    <div className="relative">
                                        <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"></img>
                                    </div>
                                    <div><h3 className="font-semibold ">
                                        Name
                                    </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <div className="w-fit mb-2 relative right-0 font-semibold leading-none text-gray-900 dark:text-white">Course</div>
                                <div className="w-fit mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">B.Tech</div>
                                <div className="w-fit mb-2 right-0 font-semibold leading-none text-gray-900 dark:text-white">Email Address</div>
                                <div className="w-fit mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">xdfghgfdz@gmail.com</div>
                                <div className="w-fit mb-2 right-0 font-semibold leading-none text-gray-900 dark:text-white">Hostel</div>
                                <div className="w-fit mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">PD Tandon</div>
                            </div>
                            <div >
                                <div className="w-fit mb-2 relative right-0 font-semibold leading-none text-gray-900 dark:text-white">Branch</div>
                                <div className="w-fit mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">CSE</div>
                                <dt className="w-fit mb-2 font-semibold leading-none text-gray-900 dark:text-white">Contact Number</dt>
                                <dd className="w-fit mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">1234567890</dd>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <button onClick={PfUpdatefunc} id="ProfileUpdate" className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile
