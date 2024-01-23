// import React from 'react'

import Dropzone from './dropzone'
import { useNavigate } from 'react-router-dom';


function ProfileUpdate() {
    const navigate = useNavigate();
    async function Pffunc() {
        navigate("/profile");
    }
  return (
    <div>
        {/* <div className="flex justify-center m-5">
            <button id="ProfileUpdate" data-modal-target="PfUpdateBtn" data-modal-toggle="PfUpdateBtn" className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
            Profile Update
            </button>
        </div> */}
        <div id="PfUpdateBtn" tabIndex="-1"  className="overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Profile Update
                        </h3>
                        <button onClick={Pffunc} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="PfUpdateBtn">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                        <div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="User name" required=""/>
                            </div>

                                <div>
                                    <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
                                    <select id="course" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select category</option>
                                        <option value="B.Tech">B.Tech</option>
                                        <option value="M.Tech">M.Tech</option>
                                        <option value="MCA">MCA</option>
                                        <option value="PHD">PHD</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="branch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch</label>
                                    <select id="branch" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select category</option>
                                        <option value="cse">Computer Science</option>
                                        <option value="ece">Electronics & Communication</option>
                                        <option value="ee">Electrical</option>
                                        <option value="mech">Mechnical</option>
                                        <option value="civil">Civil</option>
                                        <option value="pie">Production & Industrial</option>
                                        <option value="che">Chemical</option>
                                    </select>
                                </div>
                            
                                <div>
                                <label htmlFor="mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="E-mail ID" required=""/>
                            </div>

                                <div>
                                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                                    <input type="text" name="duration" id="duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Phone Number" required=""/>
                                </div>
                                
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Photo</label>
                                    <Dropzone/>
                                </div>
                            
                                <div>
                                    <label htmlFor="hostel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hostel</label>
                                    <select id="hostel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select category</option>
                                        <option value="SVBH">SVBH</option>
                                        <option value="Tandon">Tandon</option>
                                        <option value="Malviya">Malviya</option>
                                        <option value="Tilak">Tilak</option>
                                        <option value="Patel">Patel</option>
                                        <option value="DJ">DJ</option>
                                        <option value="KNGH">KNGH</option>
                                    </select>
                                </div> 
                            </div>
                        </div>
                        <button type="submit" className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileUpdate
