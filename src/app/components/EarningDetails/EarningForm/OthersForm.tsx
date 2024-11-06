import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, styled, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Arrow from '../../../../../public/assets/svg/arrow.svg';
import Validate from '../../../../../public/assets/svg/validate.svg';
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

const OthersForm = ({ primaryEarner, setPrimaryEarner, title, othersFormFields, setOthersFormFields }) => {

    const [toggleOptional, setToggleOptional] = useState(false)
    const [toggleSection, setToggleSection] = useState(false)

    const handleCheckboxChange = (event) => {
        setPrimaryEarner(event.target.checked ? title : '');
    };

    const capitalName = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()


    return (
        <div>
            {/* section heading */}
            <div className='my-[36px] flex flex-wrap items-baseline justify-between'>
                <div className="flex gap-x-[8px] items-center cursor-pointer select-none" onClick={() => setToggleSection(!toggleSection)} >
                    <div className={`${toggleSection ? "duration-100" : "rotate-180 duration-100"}`}><Arrow /></div>
                    <span className='text-[24px] font-[500]'>{capitalName}&rsquo;s Earning Details</span>
                </div>
                <FormControlLabel
                    label="Set as primary earner"
                    control={<CustomCheckbox checked={primaryEarner === title} onChange={handleCheckboxChange} />}
                />
            </div>


            {toggleSection &&
                <>
                    <div className='flex flex-wrap gap-x-[24px] gap-y-[32px] mb-[24px]'>
                        <TextField
                            fullWidth
                            sx={{ width: "347px", height: "50px" }}
                            InputProps={{ sx: { fontFamily: 'Poppins, sans-serif', letterSpacing: '0.05em' }, }}
                            InputLabelProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            id="aadhaar"
                            label="Aadhaar number"
                            variant="outlined"
                            value={othersFormFields[title]?.aadhaar || ""}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d{0,12}$/.test(value)) {
                                    setOthersFormFields((prev) => ({ ...prev, [title]: { ...prev[title], aadhaar: value } }));
                                }
                            }}
                            inputProps={{
                                maxLength: 12,
                                inputMode: 'numeric',
                                pattern: "[0-9]*"
                            }}
                        />

                        {othersFormFields[title]?.aadhaar.length === 12 &&
                            < div className='flex items-center gap-x-1'>
                                <Validate />
                                <span className='text-[16px] font-[500] text-[#1DA867]'>Validated</span>
                            </div>}
                    </div>

                    <div className='flex flex-wrap gap-x-[24px] gap-y-[32px] mb-[35px]'>

                        <TextField fullWidth
                            sx={{ height: "50px" }}
                            InputProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            InputLabelProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            id={`${title}-name`}
                            label={`${capitalName} name`}
                            variant="outlined"
                            value={othersFormFields[title]?.name || ""}
                            onChange={(e) => setOthersFormFields((prev) => ({
                                ...prev,
                                [title]: {
                                    ...prev[title],
                                    name: e.target.value
                                }
                            }))}
                        />
                        <div className='relative'>
                            <span className='font-[500] absolute top-4 left-3 tracking-wider'>+91 &nbsp;|</span>
                            <TextField
                                fullWidth
                                sx={{ width: "347px", height: "50px" }}
                                InputProps={{ sx: { fontFamily: 'Poppins, sans-serif', paddingLeft: '50px', letterSpacing: '0.03em' } }}
                                InputLabelProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, shrink: true }}
                                id="phone"
                                label="Phone number"
                                variant="outlined"
                                value={othersFormFields[title]?.phone || ""}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d{0,10}$/.test(value)) {
                                        setOthersFormFields((prev) => ({ ...prev, [title]: { ...prev[title], phone: value } }))
                                    }
                                }}
                                inputProps={{
                                    maxLength: 10,
                                    inputMode: 'numeric',
                                    pattern: "[0-9]*"
                                }}
                            />
                        </div>
                        <TextField fullWidth
                            sx={{ width: "347px", height: "50px" }}
                            InputProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            InputLabelProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            id="email"
                            label="Email Address"
                            variant="outlined"
                            value={othersFormFields[title]?.email || ""}
                            onChange={(e) => setOthersFormFields((prev) => ({
                                ...prev,
                                [title]: {
                                    ...prev[title],
                                    email: e.target.value
                                }
                            }))}
                        />
                        <TextField fullWidth
                            sx={{ height: "50px" }}
                            InputProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            InputLabelProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            id="address"
                            label="Address"
                            variant="outlined"
                            value={othersFormFields[title]?.address || ""}
                            onChange={(e) => setOthersFormFields((prev) => ({
                                ...prev,
                                [title]: {
                                    ...prev[title],
                                    address: e.target.value
                                }
                            }))}
                        />
                        <div className="relative w-full">
                            <span className='font-[500] absolute top-4 left-4 tracking-wider'>₹ &nbsp;|</span>
                            <TextField fullWidth
                                sx={{ height: "50px" }}
                                InputProps={{ sx: { fontFamily: 'Poppins, sans-serif', paddingLeft: '40px', letterSpacing: '0.03em' } }}
                                InputLabelProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, shrink: true }}
                                id="Total annual Income"
                                label="Total annual Income"
                                variant="outlined"
                                placeholder='6,60,000'
                                value={othersFormFields[title]?.totalIncome || ""}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d{0,10}$/.test(value)) {
                                        setOthersFormFields((prev) => ({ ...prev, [title]: { ...prev[title], totalIncome: value } }))
                                    }
                                }}
                                inputProps={{
                                    maxLength: 10,
                                    inputMode: 'numeric',
                                    pattern: "[0-9]*"
                                }}
                            />
                        </div>
                        <FormControl sx={{ minWidth: "347px", height: "50px" }}>
                            <InputLabel id="education-label" className='text-[16px]' sx={{ fontFamily: 'Poppins, sans-serif' }}>
                                Education
                            </InputLabel>
                            <Select
                                labelId="education-label"
                                id="education"
                                value={othersFormFields[title]?.education || ""}
                                label="education"
                                onChange={(e) => setOthersFormFields((prev) => ({
                                    ...prev,
                                    [title]: {
                                        ...prev[title],
                                        education: e.target.value
                                    }
                                }))}
                                IconComponent={MdOutlineKeyboardArrowDown}
                                sx={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                <StyledMenuItem value="Graduate">Graduate</StyledMenuItem>
                                <StyledMenuItem value="Post Graduate">Post Graduate</StyledMenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: "347px", height: "50px" }}>
                            <InputLabel id="occupation-label" className='text-[16px]' sx={{ fontFamily: 'Poppins, sans-serif' }}>
                                Occupation type
                            </InputLabel>
                            <Select
                                labelId="occupation-label"
                                id="occupation"
                                value={othersFormFields[title]?.occupation || ""}
                                label="occupation type"
                                onChange={(e) => setOthersFormFields((prev) => ({
                                    ...prev,
                                    [title]: {
                                        ...prev[title],
                                        occupation: e.target.value
                                    }
                                }))}
                                IconComponent={MdOutlineKeyboardArrowDown}
                                sx={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                <StyledMenuItem value="Salaried">Salaried</StyledMenuItem>
                                <StyledMenuItem value="Unpaid">Unpaid</StyledMenuItem>
                            </Select>
                        </FormControl>
                        <TextField fullWidth
                            sx={{ width: "347px", height: "50px" }}
                            InputProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            InputLabelProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, }}
                            id="natureOfWork"
                            label="Nature of work"
                            variant="outlined"
                            placeholder='Ex. Web Development'
                            value={othersFormFields[title]?.natureOfWork || ""}
                            onChange={(e) => setOthersFormFields((prev) => ({
                                ...prev,
                                [title]: {
                                    ...prev[title],
                                    natureOfWork: e.target.value
                                }
                            }))}
                        />
                        <div className="relative">
                            <span className='font-[500] absolute top-4 left-4 tracking-wider'>₹ &nbsp;|</span>
                            <TextField
                                sx={{ width: "347px", height: "50px" }}
                                InputProps={{ sx: { fontFamily: 'Poppins, sans-serif', paddingLeft: '40px', letterSpacing: '0.03em' } }}
                                InputLabelProps={{ sx: { fontFamily: 'Poppins, sans-serif' }, shrink: true }}
                                id="monthlyIncome"
                                label="monthlyIncome"
                                variant="outlined"
                                placeholder='60,000'
                                value={othersFormFields[title]?.monthlyIncome || ""}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d{0,10}$/.test(value)) {
                                        setOthersFormFields((prev) => ({ ...prev, [title]: { ...prev[title], monthlyIncome: value } }))
                                    }
                                }}
                                inputProps={{
                                    maxLength: 10,
                                    inputMode: 'numeric',
                                    pattern: "[0-9]*"
                                }}
                            />
                        </div>

                        <p className='w-full text-[22px] font-[500]'>Document</p>

                        <UploadField id="bank" title="Bank Statement" placeholder="Last 6 Month Bank statement" optional={false} />

                        <span className='text-[#F36F21] w-full text-[18px] font-[500] cursor-pointer select-none'
                            onClick={() => setToggleOptional(!toggleOptional)}>
                            {toggleOptional ? "hide" : "show"} 6 optional Fields
                        </span>

                    </div>

                    {/* optional fields */}
                    {toggleOptional && toggleSection &&
                        <>
                            <UploadField id="municipality" title="Municipality Income" placeholder="Upload Document" optional={true} />
                            <div className='flex flex-wrap gap-x-[24px] gap-y-[32px] my-[30px]'>
                                <UploadField id="pan" title="Pan Card" placeholder="Upload Document" optional={true} />
                                <UploadField id="ration" title="Ration Card" placeholder="Upload Document" optional={true} />
                                <UploadField id="itr" title="Last 1 year ITR" placeholder="Upload Last 1 year ITR" optional={true} />
                                <UploadField id="form16" title="Form 16" placeholder="Upload Document" optional={true} />
                                <UploadField id="salaryslip" title="Salary slip" placeholder="Upload Document" optional={true} />
                            </div>
                        </>
                    }



                </>



            }




        </div >
    )
}

export default OthersForm
