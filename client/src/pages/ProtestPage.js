import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdowns from "../components/protest/Dropdowns";
import ProtestList from "../components/protest/ProtestList";
import YearSelector from "../components/protest/YearSelector";
import SearchBar from '../components/SearchBar';

const DEV_URL = "http://localhost:8000/";
const list_year = [2023, 2024];
const list_categories = [""];
const district = [""];

function ProtestPage() {
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]); // Store original data
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [searchActive, setSearchActive] = useState(false); // Track if search is active

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
            setOriginalData(protestData); // Update original data when fetching
            console.log(protestData);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getProtestList();
    }, [selectedYear, selectedCategory, selectedDistrict]); // Add selected values as dependencies to trigger the effect when they change
    
    //state function to filter by year:
    const handleYearSelect = async (year) => {
        setSelectedYear(year);
    };
    //state function to trigger data search:
    const handleSearchSubmit = async (searchData) => {
        setData(searchData);
        setSearchActive(true); // Set search as active
    };

    //state function to reset filters:
    const handleResetFilters = () => {
        setSelectedYear("");
        setSelectedCategory("");
        setSelectedDistrict("");
        setSearchActive(false); // Clear search and set as inactive
        setData(originalData); // Restore original data when resetting filters
    };

    return (
        <div>
            <SearchBar onSubmit={handleSearchSubmit}/>
            <Dropdowns
                selectedDistrict={selectedDistrict}
                selectedCategory={selectedCategory}
                setSelectedDistrict={setSelectedDistrict}
                setSelectedCategory={setSelectedCategory}
            />
            <YearSelector years={list_year} onYearSelect={handleYearSelect} />
            <div> 
                <button onClick={handleResetFilters}>Clear</button>
            </div>
            <ProtestList data={searchActive ? data : originalData} /> {/* Conditionally render based on searchActive state */}
        </div>
    );
}

export default ProtestPage;