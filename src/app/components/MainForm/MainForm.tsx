"use client"
import styles from './MainForm.module.css'
import FamilySituationSection from '../FamilySituationSection/FamilySituationSection';
import { useEffect, useState } from 'react';
import ParentDetailsSection from '../ParentDetailsSection/ParentDetailsSection';
import HouseholdIncome from '../HouseholdIncome/HouseholdIncome';
import EarningDetails from '../EarningDetails/EarningDetails';



const MainForm = () => {

    const [familySituation, setFamilySituation] = useState({
        situation: "",
        annualIncome: ""
    });

    const [parentDetails, setParentDetails] = useState({
        firstGraduate: "Yes",
        fatherName: "",
        motherName: "",
        parentalType: "",
    });

    const [earnerList, setEarnerList] = useState({
        myself: true,
        spouse: false,
        father: false,
        mother: false,
        sibling: false,
    });

    const [primaryEarner, setPrimaryEarner] = useState("")

    const [formType1Fields, setFormType1Fields] = useState({
        natureOfWork: "",
        occupation: "",
        bankStatement: null,
        description: "",
        lastYearITR: null,
        form16: null,
        lastSalarySlip: null
    });

    const initialDetails = {
        aadhaar: "",
        name: "",
        phone: "",
        email: "",
        address: "",
        totalIncome: "",
        education: "",
        occupation: "",
        natureOfWork: "",
        monthlyIncome: "",
        bankStatement: null,
        municipality: null,
        pan: null,
        ration: null,
        lastYearITR: null,
        form16: null,
        salarySlip: null,
    }


    const [othersFormFields, setOthersFormFields] = useState({
        spouse: initialDetails,
        father: initialDetails,
        mother: initialDetails,
        sibling: initialDetails
    });


    return (

        <div className={`${styles.MainForm} ${styles.Shadow} bg-white border border-[#EAEAEA] tracking-tight overflow-hidden`}>
            <div className='flex justify-between items-center'>
                <span className='text-[34px] font-[500] text-[#282828]'>Household Details </span>
                <span className={`${styles.ResetButton} text-[16px] text-[#F36F21] py-[5px] px-[17px] max-h-[76px] border border-[#F36F21] cursor-pointer rounded-[50px]`}
                    onClick={() => window.location.reload()}>Reset</span>
            </div>

            <FamilySituationSection
                familySituation={familySituation}
                setFamilySituation={setFamilySituation}
                setEarnerList={setEarnerList}
            />

            <hr className='-mx-[40px]' />

            <ParentDetailsSection
                parentDetails={parentDetails}
                setParentDetails={setParentDetails}
            />

            <hr className='-mx-[40px]' />

            <HouseholdIncome
                familySituation={familySituation}
                earnerList={earnerList}
                setEarnerList={setEarnerList}
            />

            <hr className='mt-[24px]' />
            <hr className='mt-[24px]' />

            <EarningDetails
                earnerList={earnerList}
                primaryEarner={primaryEarner}
                setPrimaryEarner={setPrimaryEarner}

                othersFormFields={othersFormFields}
                setOthersFormFields={setOthersFormFields}

                formType1Fields={formType1Fields}
                setFormType1Fields={setFormType1Fields}
            />
        </div>
    )
}

export default MainForm
