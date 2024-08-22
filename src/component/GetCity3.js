import React,{useState} from 'react'

const CityGeocoder = () => {
    const [city,setCity] = useState('');

    return(
        <div className='container'>
            <input type="text" placeholder='Enter city name' value={city}/>

        </div>
    )
}
export default CityGeocoder;