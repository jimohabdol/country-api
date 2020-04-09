import React,{useState, useEffect} from 'react'
import Auxiliary from '../hoc/Auxiliary'
import { Country } from './Country';

export const CountriesList = () => {
    const [countries, setcountries] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://restcountries.eu/rest/v2/all") 
            const data = await response.json();
            setcountries(data);
            setLoading(false) ;
        }  
        fetchData(); 
        
    }, [countries, isOpen]);

    const handleSearch = e => {
        setSearch(e.target.value);
        console.log(search)
    }

    let items = countries.filter(item => {return item.name.toLowerCase().indexOf(search) !== -1}).map(item => {
        return (<Country key={item.id} country={item}/>)
    });

    let display = isLoading ? "loading..." : items;
    return (
        <Auxiliary>
            <section className="container">
                <div className="row">
                    <div className="ten columns"> 
                        <input className="search" id="search" type="text" placeholder="Search for a country" name="search" value={search} onChange={handleSearch}/>
                    </div>
                    <div className="two columns dropdown" id="dropdown" onClick={()=>{setIsOpen(!isOpen)}}>
                        <p>Filter by Region</p>
					<i className="fas fa-chevron-down" class="region"></i>
                        <ul className={isOpen ? "open" : "hide"}>
                            <li>Africa</li>
                            <li>America</li>
                            <li>Asia</li>
                            <li>Europe</li>
                            <li>Oceania</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">{display}</div>
            </section>
        </Auxiliary>
    )
}
