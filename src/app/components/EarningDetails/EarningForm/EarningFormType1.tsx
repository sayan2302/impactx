import React, { useState } from 'react';
import Arrow from '../../../../../public/assets/svg/arrow.svg';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, styled, TextField } from '@mui/material';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import UploadField from '../UploadField/UploadField';

const CustomCheckbox = styled(Checkbox)({
    '&.Mui-checked': {
        color: '#F36F21',
    },
    marginRight: "-5px"
});

const StyledMenuItem = styled(MenuItem)({
    fontFamily: 'Poppins, sans-serif'
})

const EarningFormType1 = ({ primaryEarner, setPrimaryEarner, formType1Fields, setFormType1Fields }) => {

    const [toggleOptional, setToggleOptional] = useState(false)
    const [toggleSection, setToggleSection] = useState(true)


    const handleCheckboxChange = (event) => {
        setPrimaryEarner(event.target.checked ? 'myself' : '');
    };

    const handleWorkChange = (event) => {
        setFormType1Fields((prevDetails) => ({
            ...prevDetails,
            natureOfWork: event.target.value,
        }));
    };



    return (
        <div>
            {/* section heading */}
            <div className='my-[36px] flex flex-wrap items-baseline justify-between'>
                <div className="flex gap-x-[8px] items-center cursor-pointer select-none" onClick={() => setToggleSection(!toggleSection)} >
                    <div className={`${toggleSection ? "duration-100" : "rotate-180 duration-100"}`}><Arrow /></div>
                    <span className='text-[24px] font-[500]'>Student Earning Details</span>
                </div>
                <FormControlLabel
                    label="Set as primary earner"
                    control={<CustomCheckbox checked={primaryEarner === 'myself'} onChange={handleCheckboxChange} />}
                />
            </div>

            {/* section main */}
            {
                toggleSection &&
                <div className=''>
                    <div className='mb-[24px]'>
                        <div className='flex flex-wrap gap-x-[24px] gap-y-[32px] mb-[24px]'>
                            <FormControl sx={{ minWidth: "347px", height: "50px" }}>
                                <InputLabel id="nature-of-work-label" className='text-[16px]' sx={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Nature of work
                                </InputLabel>
                                <Select
                                    labelId="nature-of-work-label"
                                    id="nature-of-work"
                                    value={formType1Fields.natureOfWork}
                                    label="Nature of work"
                                    onChange={handleWorkChange}
                                    IconComponent={MdOutlineKeyboardArrowDown}
                                    sx={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    <StyledMenuItem value="Fulltime">Fulltime</StyledMenuItem>
                                    <StyledMenuItem value="Contract">Contract</StyledMenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                sx={{ width: "347px", height: "50px" }}
                                id="occupation"
                                label="Occupation"
                                variant="outlined"
                                value={formType1Fields.occupation}
                                onChange={(e) => setFormType1Fields((prev) => ({ ...prev, occupation: e.target.value }))}
                                InputProps={{
                                    sx: { fontFamily: 'Poppins, sans-serif' },
                                }}
                                InputLabelProps={{
                                    sx: { fontFamily: 'Poppins, sans-serif' },
                                }}
                            />
                            <UploadField id="bank" title="Bank Statement" placeholder="Last 6 Month Bank statement" optional={false} />
                        </div>

                        <span className='text-[16px] font-[500]'>Why do you work, what has work taught you and how has it impacted your education or life?</span>
                        <br />
                        <TextField fullWidth
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            InputProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            InputLabelProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            sx={{ marginTop: "10px", marginBottom: "24px" }}
                        />
                        <span className='text-[#F36F21] text-[18px] font-[500] cursor-pointer select-none'
                            onClick={() => setToggleOptional(!toggleOptional)}>
                            {toggleOptional ? "hide" : "show"} 3 optional Fields
                        </span>
                    </div>
                    {/* optional fields */}
                    {toggleOptional && toggleSection &&
                        <div className='flex flex-wrap gap-x-[24px] gap-y-[32px] mb-[24px]'>
                            <UploadField id="itr" title="Last 1 year ITR" placeholder="Upload Last 1 year ITR" optional={true} />
                            <UploadField id="form16" title="Form 16" placeholder="Upload Document" optional={true} />
                            <UploadField id="salaryslip" title="Last Salary slip" placeholder="Upload Document" optional={true} />
                        </div>
                    }
                </div>
            }



        </div >
    );
};

export default EarningFormType1;
