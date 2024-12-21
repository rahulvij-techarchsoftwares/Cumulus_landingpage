import React, { useState } from 'react';
import { Upload, UserPlus, Users, Share2, BadgeCheckIcon, ChevronRight } from 'lucide-react';
import worksimg from "../Assets/work.png"
import asistance from "../Assets/asistance-right.png"
import nominee from "../Assets/Nominee.png"

const Work = () => {
    const [activeTab, setActiveTab] = useState('upload');

    const tabs = [
        { id: 'signup', label: 'Sign Up', icon: <UserPlus />, content: { heading: 'Join Us Today!', text: 'Create your account to start. Create your account to start.Create your account to start.Create your account to start.Create your account to start.Create your account to start.', button: 'Get Started', image: nominee } },
        { id: 'upload', label: 'Upload Document', icon: <Upload />, content: { heading: 'Upload Files Securely', text: 'Upload your important documents Upload your important documentsUpload your important documentsUpload your important documentsUpload your important documentsUpload your important documentsUpload your important documents.', button: 'Upload Now', image: nominee } },
        { id: 'nominee', label: 'Assign Nominee', icon: <Users />, content: { heading: 'Assign Nominees', text: 'Manage your account nominees.Manage your account nomineesManage your account nomineesManage your account nomineesManage your account nomineesManage your account nomineesManage your account nomineesManage your account nominees', button: 'Assign Now', image: nominee } },
        { id: 'transfer', label: 'Transfer Access', icon: <Share2 />, content: { heading: 'Transfer Account Access', text: 'Easily transfer access rights.', button: 'Transfer Now', image: nominee } },
    ];

    const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

    return (

        <>
            <div className='w-full max-w-9xl bg-[#F5F5F5] py-4'>
                <div className="flex flex-col max-w-7xl w-full mx-auto p-4 items-center justify-center">

                    <div className='p-2 bg-blue-100 rounded-xl '>
                        <span className='flex text-blue-700 gap-x-1'>  <BadgeCheckIcon /> How Cumulus Work! </span>
                    </div>

                    <div className='space-y-3 mt-2 py-3'>
                        <h2 className=' text-3xl text-center md:text-5xl font-serif '>Customer journey, from start to finish</h2>
                    </div>


                    <div className="w-full flex flex-row  items-center justify-center">
                        <ul className=" flex gap-x-4">
                            {tabs.map(tab => (
                                <li
                                    key={tab.id}
                                    className={`flex items-center space-x-1 sm:space-x-2 cursor-pointer p-0 sm:p-2 text-xs sm:text-sm rounded-md ${activeTab === tab.id
                                        ? 'relative text-gray-900 after:content-[""] after:absolute after:w-full  after:h-[2px] after:bg-blue-600 after:bottom-[-2px] after:left-0'
                                        : 'text-gray-800'
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.icon}
                                    <span>{tab.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col sm:flex-row  py-4   items-center w-[99%]  md:justify-around mt-2 md:mt-6'>
                        <div className=" max-w-7xl text-center md:text-left sm:w-[35vw]">
                            <h2 className="text-2xl font-bold mb-4">{activeContent.heading}</h2>
                            <p className="text-gray-600 mb-6 ">{activeContent.text}</p>
                            <button className="px-3 py-2 mb-4 md:mb-0 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 flex justify-center md:justify-between items-center">
                                {activeContent.button}

                                <ChevronRight className='h-5' />
                            </button>
                        </div>
                        {/* Right Content */}
                        <div className=''>
                            <div className="w-full">
                                <img
                                    src={activeContent.image}
                                    alt={activeContent.heading}
                                    className="rounded-lg shadow-lg object-contain h-40 md:h-52 lg:h-80 w-full"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Text and Button */}


                </div>
            </div>

        </>

    );
};

export default Work;
