import styles from './AppTracker.module.css'
import Tick from '../../../../public/assets/svg/AppTracker/tick.svg'
import Orange3 from '../../../../public/assets/svg/AppTracker/orange3.svg'
import Gray4 from '../../../../public/assets/svg/AppTracker/gray4.svg'
import Gray5 from '../../../../public/assets/svg/AppTracker/gray5.svg'
import Gray6 from '../../../../public/assets/svg/AppTracker/gray6.svg'

const AppTracker = () => {
    return (
        <div className={`${styles.AppTracker} border bg-white w-[357px] h-full fixed px-[24px] py-[30px] tracking-tight`}>
            <span className='w-[197px] text-[24px] font-[500] '>Your scholarship application</span>
            <div className="flex items-center mt-[32px] gap-x-3">
                <Tick />
                <span className='text-[20px] font-[500] mt-1'>Personal details & KYC</span>
            </div>
            <div className='border-[2px] border-[#1DA867] h-[32px] w-0 ml-[15px] my-[10px]'></div>
            <div className="flex items-center gap-x-3">
                <Tick />
                <span className='text-[20px] font-[500] mt-1'>Scholarship Details</span>
            </div>
            <div className='border-[2px] border-[#1DA867] h-[32px] w-0 ml-[15px] my-[10px]'></div>
            <div className="flex items-start gap-x-3">
                <div className="flex flex-col">
                    <Orange3 />
                    <div className='border-[2px] border-[#F36F21] h-[38px] w-0 ml-[15px] mt-[10px]'></div>
                    <div className='border-[2px] border-[#A3A3A3] h-[38px] w-0 ml-[15px] mb-[10px]'></div>
                </div>
                <div className="flex flex-col">
                    <span className='text-[20px] font-[500] mt-1'>Household Details</span>
                    <span className='text-[14px] font-[400] text-[#49454F] mt-[6px] '>Provide information about your family and household income to help us assess your financial needs.</span>
                </div>
            </div>
            <div className="flex items-center gap-x-3">
                <Gray4 />
                <span className='text-[20px] font-[500] mt-1'>Personal Essay</span>
            </div>
            <div className='border-[2px] border-[#A3A3A3] h-[32px] w-0 ml-[15px] my-[10px]'></div>
            <div className="flex items-center gap-x-3">
                <Gray5 />
                <span className='text-[20px] font-[500] mt-1'>Personal Essay</span>
            </div>
            <div className='border-[2px] border-[#A3A3A3] h-[32px] w-0 ml-[15px] my-[10px]'></div>
            <div className="flex items-center gap-x-3">
                <Gray6 />
                <span className='text-[20px] font-[500] mt-1'>Signature</span>
            </div>
        </div>
    )
}

export default AppTracker
