import axios from "axios";
import React, { useState, useEffect } from 'react';

const DEV_URL = "http://localhost:8000/"

export default function ProtestsPage() {
        const [data, setData] = useState([]);

        const getProtestList = async () => {
            try {
                const response = await axios.get(DEV_URL + "api/protests/");
                const  protestData = response.data.slice(0, 10)
                for (let protest of protestData) {
                    let { event_date, district, categories, description } = protest  
                }
                setData(protestData)
                console.log(protestData)            
            } 
            catch (err) {
                console.log(err.message);
            }
        };

        getProtestList();

        useEffect(() => {
            getProtestList()
        }, []); 

      return (
        <div>
            <h1>Protests in 2024 </h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index[0]}>
                        Date: {item.event_date}<br/>
                        District: {item.district}<br/>
                        Theme: {item.categories}<br/>
                        Description: {item.description}<br/><br/>
                    </li>
                ))}
            </ul> 
        </div>
          )
    }