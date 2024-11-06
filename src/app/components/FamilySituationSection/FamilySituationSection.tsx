"use client"
import { FormControl, InputLabel, MenuItem, Select, styled } from '@mui/material';
import { useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';


const StyledMenuItem = styled(MenuItem)({
    fontFamily: 'Poppins, sans-serif'
})

const FamilySituationSection = ({ familySituation, setFamilySituation, setEarnerList }) => {


    // Helper functions to handle updates for each field
    const handleSituationChange = (e) => {
        setFamilySituation(prev => ({
            ...prev,
            situation: e.target.value
        }));
    };

    const handleAnnualIncomeChange = (e) => {
        setFamilySituation(prev => ({
            ...prev,
            annualIncome: e.target.value
        }));
    };

    useEffect(() => {
        setEarnerList(prev => {
            return {
                ...prev,
                father: false,
                mother: false
            }
        })
    }, [familySituation.situation])


    return (
        <>
            <FormControl fullWidth sx={{ marginTop: "59px" }}>
                <InputLabel id="family-situation-label" className='text-[16px]' sx={{ fontFamily: 'Poppins, sans-serif' }}>Family Situation</InputLabel>
                <Select
                    labelId="family-situation-label"
                    id="family-situation"
                    value={familySituation.situation}
                    label="Family Situation"
                    onChange={handleSituationChange}
                    IconComponent={MdOutlineKeyboardArrowDown}
                    sx={{ height: "50px", width: "351.5px", fontFamily: 'Poppins, sans-serif' }}
                >
                    <StyledMenuItem value={"2"}>Both parents are alive</StyledMenuItem>
                    <StyledMenuItem value={"1"}>Only one parent is alive</StyledMenuItem>
                    <StyledMenuItem value={"0"}>Both parents have passed away</StyledMenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginTop: "31px", marginBottom: "24px" }}>
                <InputLabel id="annual-household-income-label" className='text-[16px]' sx={{ fontFamily: 'Poppins, sans-serif' }}>Total annual household Income</InputLabel>
                <Select
                    labelId="annual-household-income-label"
                    id="annual-household-income"
                    value={familySituation.annualIncome}
                    label="Total annual household Income"
                    onChange={handleAnnualIncomeChange}
                    IconComponent={MdOutlineKeyboardArrowDown}
                    sx={{ height: "50px", width: "351.5px", fontFamily: 'Poppins, sans-serif' }}
                >
                    <StyledMenuItem value={"1.5"} sx={{ fontFamily: 'Poppins, sans-serif' }}>₹ 1.5 Lakh</StyledMenuItem>
                    <StyledMenuItem value={"3"} sx={{ fontFamily: 'Poppins, sans-serif' }}>₹ 3 Lakh</StyledMenuItem>
                    <StyledMenuItem value={"6"} sx={{ fontFamily: 'Poppins, sans-serif' }}>₹ 6 Lakh</StyledMenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default FamilySituationSection;
