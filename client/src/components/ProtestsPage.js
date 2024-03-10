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
                    let { date, topic, postcode } = protest          
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
            <h1>Upcoming Protests</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index[0]}>
                        When: {item.date}<br/>
                        Where: {item.postcode}<br/>
                        What: {item.topic}<br/><br/>
                    </li>
                ))}
            </ul> 
        </div>
          )
    }