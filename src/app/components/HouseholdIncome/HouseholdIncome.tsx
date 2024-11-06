import { Checkbox, FormControlLabel, FormGroup, styled } from '@mui/material'
import Arrow from '../../../../public/assets/svg/arrow.svg'
import { useState } from 'react';

const CustomCheckbox = styled(Checkbox)({
    '&.Mui-checked': {
        color: '#F36F21',
    },
    marginRight: "-5px"
});

const HouseholdIncome = ({ familySituation, earnerList, setEarnerList }) => {

    const [toggleSection, setToggleSection] = useState(true)

    const handleCheckboxChange = (field) => (event) => {
        setEarnerList((prev) => ({
            ...prev,
            [field]: event.target.checked,
        }));
    };

    return (
        <div className='mt-[36px]'>
            <div className="flex gap-x-[8px] mb-[32px] items-center cursor-pointer select-none" onClick={() => setToggleSection(!toggleSection)}>
                <div className={`${toggleSection ? "duration-100" : "rotate-180 duration-100"}`}><Arrow /></div>
                <span className='text-[24px] font-[500]'>Household Income</span>
            </div>
            {toggleSection &&
                <>
                    <p className='text-[16px] font-[500] mb-[20px]'>Who are earning members of family</p>

                    <FormControlLabel
                        control={<CustomCheckbox checked={earnerList.myself} onChange={handleCheckboxChange('myself')} />}
                        label="Myself"
                    />
                    <FormControlLabel
                        control={<CustomCheckbox checked={earnerList.spouse} onChange={handleCheckboxChange('spouse')} />}
                        label="Spouse"
                    />
                    {familySituation.situation !== '0' && (
                        <FormControlLabel
                            control={<CustomCheckbox checked={earnerList.father} onChange={handleCheckboxChange('father')} />}
                            label="Father"
                        />
                    )}
                    {familySituation.situation !== '0' && (
                        <FormControlLabel
                            control={<CustomCheckbox checked={earnerList.mother} onChange={handleCheckboxChange('mother')} />}
                            label="Mother"
                        />
                    )}
                    <FormControlLabel
                        control={<CustomCheckbox checked={earnerList.sibling} onChange={handleCheckboxChange('sibling')} />}
                        label="Sibling"
                    />
                </>
            }
        </div>
    )
}

export default HouseholdIncome
