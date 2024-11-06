import styles from './HouseholdDetails.module.css'
import AppTracker from '../components/AppTracker/AppTracker'
import MainForm from '../components/MainForm/MainForm'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'

const page = () => {
    return (
        <div className='bg-[#fafafa] flex'>
            <AppTracker />
            <div className={`${styles.FormContainer} flex-1 min-h-screen flex flex-col items-center`}>
                <MainForm />
                <div className={`${styles.Shadow} w-full h-[75px] mt-[35px] bg-white flex items-center xs:justify-center sm:justify-end gap-x-[12px] xs:px-[22px] md:px-[27px] border`}>
                    <Link href="/">
                        <span className='xs:text-[15px] xs:pr-[15px] xs:pl-[10px] sm:text-[16px] sm:pr-[15px] sm:pl-[10px] text-[#F36F21] font-[500] py-[5px]  h-[35px] border border-[#F36F21] cursor-pointer rounded-[50px] flex items-center justify-between sm:gap-x-1.5'>
                            <MdKeyboardArrowLeft className=' text-2xl' />Back
                        </span>
                    </Link>
                    <Link href="/">
                        <span className='xs:text-[14px] xs:py-[5px] xs:pl-[15px] xs:pr-[5px]    sm:text-[16px] sm:py-[5px] sm:px-[10px] sm:gap-x-1 text-white bg-[#F36F21] font-[500]  h-[35px] border border-[#F36F21] cursor-pointer rounded-[50px] flex items-center justify-between '>
                            Next Step: Academic Details <MdKeyboardArrowRight className='text-white text-2xl' />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page
