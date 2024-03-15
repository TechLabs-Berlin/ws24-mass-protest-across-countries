import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropDowns from './components/protest/DropDowns';
import ProtestList from './components/protest/ProtestList';
import YearSelector from './components/protest/YearSelector';

const DEV_URL = "http://localhost:8000/";
const list_year = [2023, 2024];
const list_categories = [""];
const district = [""];

export default function ProtestPage() {
    const [data, setData] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const getProtestList = async () => {
        try {
            const queryParams = [
                ...(selectedYear ? [`year=${selectedYear}`] : []),
                ...(selectedCategory ? [`categories=${selectedCategory}`] : []),
                ...(selectedDistrict ? [`district=${selectedDistrict}`] : [])
            ];
            
            const url_param = queryParams.length > 0 ? '?' + queryParams.join('&') : '';

            const response = await axios.get(DEV_URL + "api/protest" + url_param);
            const protestData = response.data.slice(0, 10);
            setData(protestData);
            console.log(protestData);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getProtestList();
    }, [selectedYear, selectedCategory, selectedDistrict]); // Add selected values as dependencies to trigger the effect when they change
    
    const handleYearSelect = async (year) => {
        setSelectedYear(year);
    };

    return (
        <div>
            <DropDowns
                selectedDistrict={selectedDistrict}
                selectedCategory={selectedCategory}
                setSelectedDistrict={setSelectedDistrict}
                setSelectedCategory={setSelectedCategory}
            />
            <YearSelector years={list_year} onYearSelect={handleYearSelect} />
            <ProtestList data={data} />
        </div>
    );
}