import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySelector from "../components/Protest/CategorySelector";
import DistrictSelector from "../components/Protest/DistrictSelector";
import ProtestList from "../components/Protest/ProtestList";
import YearSelector from "../components/Protest/YearSelector";
import PeriodSelector from "../components/Protest/PeriodSelector";
import SearchBar from '../components/SearchBar';
import {Container, Row, Col, Button } from "react-bootstrap";
import '../index.css';


const DEV_URL = "http://localhost:8000/";
const list_year = [2021, 2022, 2023, 2024];
const protestsPerPage = 12;

function ProtestPage() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [initialYear, setInitialYear] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [searchActive, setSearchActive] = useState(false); 
  const [searchResultsCount, setSearchResultsCount] = useState(0); 
  const [searchBarResultsCount, setSearchBarResultsCount] = useState(0);
  const [displayedProtests, setDisplayedProtests] = useState([]);

  const getProtestList = async () => {
    try {
      const queryParams = [
        ...(selectedYear ? [`year=${selectedYear}`] : []),
        ...(selectedPeriod ? [`event_date=${selectedPeriod}`] : []),
        ...(selectedCategory ? [`category=${selectedCategory}`] : []),
        ...(selectedDistrict ? [`district=${selectedDistrict}`] : [])
      ];
      
      const url_param = queryParams.length > 0 ? '?' + queryParams.join('&') : '';

      const response = await axios.get(DEV_URL + "api/protest" + url_param);
      const protestData = response.data;
      setData(protestData);
      setOriginalData(protestData);
      setSearchResultsCount(protestData.length);
      setDisplayedProtests(protestData.slice(0, protestsPerPage));
    } catch (err) {
        console.log(err.message);
    }
  };

    useEffect(() => {
      getProtestList();
    }, [selectedYear, selectedPeriod, selectedCategory, selectedDistrict]);
    
    useEffect(() => {
      setInitialYear(selectedYear);
    }, [selectedYear]);
    
    //state function to filter by year:
    const handleYearSelect = async (year) => {
      setSelectedYear(year); 
    };
    
    //state function to trigger data search:
    const handleSearchSubmit = async (searchData) => {
      setData(searchData);
      setSearchActive(true); 
      setSearchResultsCount(searchData.length);
      setSearchBarResultsCount(searchData.length); 
      setDisplayedProtests(searchData.slice(0, protestsPerPage)); 
    };

    //statte function to clear search:
    const handleResetFilters = () => {
      setSelectedYear("");
      setSelectedPeriod("");
      setSelectedCategory("");
      setSelectedDistrict("");
      setSearchActive(false);
      setData(originalData); 
      setSearchResultsCount(originalData.length); 
      setSearchBarResultsCount(0);
      setDisplayedProtests(originalData.slice(0, protestsPerPage));
    };    

    // Function to load more protests
    const loadMoreProtests = () => {
      const nextPageProtests = data.slice(displayedProtests.length, displayedProtests.length + protestsPerPage);
      setDisplayedProtests([...displayedProtests, ...nextPageProtests]);
    };

    return (
      <Container fluid className="my-5 justify-content-center align-items-center h-100" style={{ fontFamily: 'Playfair Display, serif'}}>
        <Row className="py-3 my-4 mx-1" >
          <Col className="d-grid">
            <SearchBar onSubmit={handleSearchSubmit} />
          </Col>
          <Col xs={12} md={6} lg={2} className="d-grid">
            <CategorySelector
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Col>
          <Col xs={12} md={6} lg={2} className="d-grid">
            <DistrictSelector
              selectedDistrict={selectedDistrict}
              setSelectedDistrict={setSelectedDistrict}
            />
          </Col>
          <Col xs={12} md={6} lg={2} className="d-grid">
            <YearSelector
              years={list_year}
              selectedYear={selectedYear}
              onYearSelect={handleYearSelect}
            />
          </Col>
          <Col xs={12} md={6} lg={2} className="d-grid">
            <PeriodSelector
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
            />
          </Col>
          <Col className="d-grid">
            <Button variant="dark" size="lg" onClick={handleResetFilters}>Clear search</Button>
          </Col>
        </Row>
        <Row className="d-grid mx-1">
          <div className="d-grid mb-5">
            <Button variant="white" className="d-grid text-center fs-3 center-text" onClick={loadMoreProtests} disabled>
                  {searchResultsCount} protests found:
            </Button> 
          </div>  
       </Row>
        <Row>
          <Col>
            <ProtestList data={displayedProtests} />
              {displayedProtests.length < data.length && (
                <div className="d-grid px-5 mx-5 pt-5">
                  <Button variant="outline-danger" size="lg" onClick={loadMoreProtests}>
                    Load more protests
                  </Button>
                </div>                       
                )}
          </Col>
        </Row>
      </Container>
    );
}

export default ProtestPage;