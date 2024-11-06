import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaCircleInfo } from "react-icons/fa6";
import Cloud from '../../../../../public/assets/svg/cloud3.svg'

const UploadField = ({ id, title, placeholder, optional }) => {
    const [fileName, setFileName] = useState(placeholder);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <div className="flex items-center border border-[#c4c4c4] rounded-[5px] pl-[15px] w-[348px] h-[55px] ">
            {/* Label Section */}
            <div className="flex flex-col relative w-full bg-white">
                <div className="flex items-center absolute -top-7 -left-1 bg-white px-1 text-gray-800 font-semibold mb-1">
                    <span className='font-[500]'>{title}</span>
                    <span className="ml-1 text-[#49454f]"><FaCircleInfo /></span>
                    {optional && <span className="ml-1 text-[12px] font-[500] text-[#ACACAC]">(optional)</span>}
                </div>
                <span className="text-gray-400 px2">{fileName}</span>
            </div>

            {/* Upload Button */}
            <label
                htmlFor={`${id}-file-upload`}
                className="cursor-pointer flex items-center justify-center bg-orange-500 text-white p-2 rounded-r-md hover:bg-orange-600 transition-colors"
            >
                <Cloud />
            </label>
            <input
                id={`${id}-file-upload`}
                type="file"
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    );
};

export default UploadField;
