import React from 'react'

export const Country = ({country, handleModal}) => {    
    return (
            <div className="three columns country">
                <div className='card' onClick={() => handleModal(country.name)}>
                    <div className="country-flag u-full-width">
                        <img className="country.img" src={country.flag} alt={country.name}/>
                    </div>
                    <div class="info-card">
                        <h5 class="country-name">{country.name}</h5>
                        <p><strong>Population: </strong><span>{country.population}</span></p>
                        <p class="region"><strong>Region: </strong><span>{country.region}</span></p>
                        <p><strong>Capital: </strong><span>{country.capital}</span></p>
                    </div>
                </div>
            </div>
    )
}
