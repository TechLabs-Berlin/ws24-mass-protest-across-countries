import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySelector from "../components/protest/CategorySelector";
import DistrictSelector from "../components/protest/DistrictSelector";
import ProtestList from "../components/protest/ProtestList";
import YearSelector from "../components/protest/YearSelector";
import PeriodSelector from "../components/protest/PeriodSelector";
import SearchBar from "../components/SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DEV_URL = "http://localhost:8000/";
const list_year = [2021, 2022, 2023, 2024];

function ProtestPage() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]); // Store original data
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [searchActive, setSearchActive] = useState(false); // Track if search is active

  const getProtestList = async () => {
    try {
      const queryParams = [
        ...(selectedYear ? [`year=${selectedYear}`] : []),
        ...(selectedPeriod ? [`event_date=${selectedPeriod}`] : []),
        ...(selectedCategory ? [`category=${selectedCategory}`] : []),
        ...(selectedDistrict ? [`district=${selectedDistrict}`] : []),
      ];

      const url_param =
        queryParams.length > 0 ? "?" + queryParams.join("&") : "";

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
  }, [selectedYear, selectedPeriod, selectedCategory, selectedDistrict]); // Add selected values as dependencies to trigger the effect when they change

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
    setSelectedPeriod("");
    setSelectedCategory("");
    setSelectedDistrict("");
    setSearchActive(false); // Clear search and set as inactive
    setData(originalData); // Restore original data when resetting filters

    // Revert YearSelector to default option
    document.querySelector("#yearSelector").value = "";
  };

  return (
    <div>
      <Container fluid className="protest">
        <Row>
          <Col xs={3}>
            <SearchBar onSubmit={handleSearchSubmit} />
          </Col>
          <Col>
            <CategorySelector
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Col>
          <Col>
            <DistrictSelector
              selectedDistrict={selectedDistrict}
              setSelectedDistrict={setSelectedDistrict}
            />
          </Col>
          <Col>
            <YearSelector
              years={list_year}
              selectedYear={selectedYear}
              onYearSelect={handleYearSelect}
            />
          </Col>
          <Col>
            <PeriodSelector
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
            />
          </Col>
          <Col>
            <div>
              <button onClick={handleResetFilters}>Clear</button>
            </div>
          </Col>
        </Row>
        <Row>
          <ProtestList data={searchActive ? data : originalData} />
          {/* Conditionally render based on searchActive state */}
        </Row>
      </Container>
    </div>
  );
}

export default ProtestPage;
