"use client"
import styles from './Header.module.css'
import InfoIcon from '../../../../public/assets/svg/info.svg'
import BrandIcon from '../../../../public/assets/svg/Impactx_logo.svg'
import HamburgerIcon from '../../../../public/assets/svg/Hamburger_Logo.svg'

const Header = () => {
    return (
        <div className="relative mb-[70px] z-50">
            <div className='  h-[70px] w-[100%] bg-white fixed top-0 left-0 flex justify-between px-[24px] border border-[#ECECEC]'>
                {/* brand icon */}
                <div className='flex items-center justify-center' >
                    <HamburgerIcon className={`${styles.Hamburger} mr-[18px]`} />
                    <BrandIcon />
                </div>
                {/* Help section */}
                <div className='flex items-center justify-center gap-x-1'>
                    <InfoIcon />
                    <span className='font-[500] text-[#0453FF]' >Help</span>
                </div>
            </div>
        </div>
    )
}

export default Header
