import styles from './ParentDetailsSection.module.css';
import { FormControl, InputLabel, MenuItem, Select, styled, TextField } from '@mui/material';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';


const StyledMenuItem = styled(MenuItem)({
    fontFamily: 'Poppins, sans-serif'
})

const ParentDetailsSection = ({ parentDetails, setParentDetails }) => {
    const handleToggle = (option) => {
        setParentDetails((prevDetails) => ({
            ...prevDetails,
            firstGraduate: option,
        }));
    };

    const handleSituationChange = (event) => {
        setParentDetails((prevDetails) => ({
            ...prevDetails,
            parentalType: event.target.value,
        }));
    };

    return (
        <div className=''>
            <div className={`${styles.Que} my-[24px]`}>
                <span className='text-[18px] font-[500]'>Are you the first to graduate/PG in your family</span>
                <div className="flex space-x-3 mt-[8px] ">
                    <button
                        onClick={() => handleToggle('Yes')}
                        className={`px-5 py-[5px] rounded-full border ${parentDetails.firstGraduate === 'Yes' ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => handleToggle('No')}
                        className={`px-5 py-[5px] rounded-full border ${parentDetails.firstGraduate === 'No' ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}
                    >
                        No
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap gap-x-[24px] gap-y-[31px] mb-[24px]'>
                <TextField
                    sx={{ width: "347px", height: "50px" }}
                    id="father-name"
                    label="Father Name"
                    variant="outlined"
                    value={parentDetails.fatherName}
                    onChange={(e) => setParentDetails((prev) => ({ ...prev, fatherName: e.target.value }))}
                    InputProps={{
                        sx: { fontFamily: 'Poppins, sans-serif' },
                    }}
                    InputLabelProps={{
                        sx: { fontFamily: 'Poppins, sans-serif' },
                    }}
                />
                <TextField
                    sx={{ width: "347px", height: "50px" }}
                    id="mother-name"
                    label="Mother Name"
                    variant="outlined"
                    value={parentDetails.motherName}
                    onChange={(e) => setParentDetails((prev) => ({ ...prev, motherName: e.target.value }))}
                    InputProps={{
                        sx: { fontFamily: 'Poppins, sans-serif' },
                    }}
                    InputLabelProps={{
                        sx: { fontFamily: 'Poppins, sans-serif' },
                    }}
                />
                <FormControl fullWidth>
                    <InputLabel id="parental-type-label" className='text-[16px]' sx={{ fontFamily: 'Poppins, sans-serif' }}>
                        Parental type
                    </InputLabel>
                    <Select
                        labelId="parental-type-label"
                        id="parental-type"
                        value={parentDetails.parentalType}
                        label="Parental type"
                        onChange={handleSituationChange}
                        IconComponent={MdOutlineKeyboardArrowDown}
                        sx={{ width: "347px", height: "50px", fontFamily: 'Poppins, sans-serif' }}
                    >
                        <StyledMenuItem value="Biological">Biological Parents</StyledMenuItem>
                        <StyledMenuItem value="Adoptive">Adoptive Parents</StyledMenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default ParentDetailsSection;
