import React,{useState, useEffect} from 'react'
import Auxiliary from '../hoc/Auxiliary'
import { Country } from './Country';

export const CountriesList = () => {
    const [countries, setcountries] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://restcountries.eu/rest/v2/all") 
            const data = await response.json();
            setcountries(data)
        }  
        fetchData(); 
        setLoading(false) 
    }, [])

    const items = countries.map(item => {
        return (<Country key={item.id} country={item}/>)
    })

    let display = isLoading ? "loading..." : items
    return (
        <Auxiliary>
            <section className="container">
                <div className="row">
                    <div className="six columns"> 
                        <input className="search" id="search" type="text" placeholder="Search for a country" name="" value="" />
                    </div>
                    <div className="dropdown" id="dropdown">
                        Filter by Region
					<i className="fas fa-chevron-down" class="region"></i>
                        <ul>
                            <li>Africa</li>
                            <li>America</li>
                            <li>Asia</li>
                            <li>Europe</li>
                            <li>Oceania</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>{display}</section>
        </Auxiliary>
    )
}
