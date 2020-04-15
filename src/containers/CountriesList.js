import React,{useState, useEffect} from 'react'
import Auxiliary from '../hoc/Auxiliary'
import { Country } from './Country';
import { Modal } from '../Modal/Modal';

export const CountriesList = () => {
    const [countries, setcountries] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setModal] = useState(false);
    const [info, setInfo] = useState([]);

     useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://restcountries.eu/rest/v2/all") 
            const data = await response.json();
            setcountries(data);
            setLoading(false) ;
        }  
        fetchData(); 
        
    }, [countries]);

    const handleSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    const handleFilter = e => {
        setSearch(e);
    };

    
    const handleModal = (name) => {
        const country = countries.filter(item =>item.name.includes(name) === true)
        setInfo(country[0]);
        setModal(true);
        console.log(info);
    };

    let items = countries.filter(item => {return ((item.region.toLowerCase().includes(search)) || item.name.toLowerCase().includes(search)) === true})
        .map(item => {return (<Country key={item.name} country={item} handleModal={handleModal}/>)});

    let display = isLoading ? "loading..." : items;
    return (
        <Auxiliary>
            <section className="container">
                <div className="row filter-bar">
                    <div className="ten columns"> 
                        <input className="search" id="search" type="text" placeholder="Search for a country" name="search" value={search} onChange={handleSearch}/>
                    </div>
                    <div className="two columns dropdown" id="dropdown" onClick={()=>{setIsOpen(!isOpen)}}>
                        <p>Filter by Region</p>
					<i className="fas fa-chevron-down region"></i>
                        <ul className={isOpen ? "open" : "hide"}>
                            <li onClick={() => handleFilter("")}>All</li>
                            <li onClick={() => handleFilter("africa")}>Africa</li>
                            <li onClick={() => handleFilter("america")}>America</li>
                            <li onClick={() => handleFilter("asia")}>Asia</li>
                            <li onClick={() => handleFilter("europe")}>Europe</li>
                            <li onClick={() => handleFilter("oceania")}>Oceania</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="container">
                <Modal showModal={showModal}>
                    <div className="modal">
                        <button className="button-primary" onClick={(e)=>{e.preventDefault(); setModal(false)}}>Back</button>
                        <div className="row">
                            <div className="six columns modal-flag">
                                <img src={info.flag} alt={info.name} className='modalflag'/>
                                kii
                            </div>
                            <div className="six columns modal-content">
                                <h3>{info.name}</h3>
                                <div className="info-content">
                                    <div className="info1">
                                        <p><strong>Native Name:</strong> <span>{info.nativeName}</span></p>
                                        <p><strong>Population:</strong> <span>{info.population}</span></p>
                                        <p><strong>Region:</strong> <span>{info.region}</span></p>
                                        <p><strong>Sub Region</strong>: <span>{info.subregion}</span></p>
                                        <p><strong>Capital:</strong> <span>{info.capital}</span></p>
                                    </div>
                                    <div className="info2">
                                        <p><strong>Top Level Domain:</strong> <span>{info.topLevelDomain}</span></p>
                                        <p><strong>Currencies: </strong> {info.currencies ? info.currencies.map((currency, index) => (<span>{currency.name + (index ? ', ' : '')}</span>)) : ""}</p>
                                        <p><strong>Languages: </strong><span>{info.capital}</span></p>
                                    </div>
                                </div>
                                <div><p><strong>Border Countries:</strong></p>{info.borders ? 
                                    countries.map((country) => {
                                              for (const item of info.borders){
                                            if(item===country.alpha3Code){
                                               return (<a class="button" href="#">{country.name }</a>)                       
                                            }
                                        }
                                    }) : ""
                                }         
                                </div>
                            </div>
                        </div>
                    </div></Modal>
                <div className="row">{display}</div>
            </section>
            
        </Auxiliary>
    )
}
