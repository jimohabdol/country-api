import React from 'react'

export const Country = ({country}) => {
    return (
        <div className="row">
            <div className="three columns">
                <div>
                    <img src={country.flag} alt={country.name}/>
                </div>
                <div class="country-card-body">
                    <h2 class="country-name">{country.name}</h2>
                    <p><strong>Population: </strong><span>{country.population}</span></p>
                    <p class="region"><strong>Region: </strong><span>{country.region}</span></p>
                    <p><strong>Capital: </strong><span>{country.capital}</span></p>
                </div>
            </div>
        </div>
    )
}
