"use client"
import { countries, destinations } from '@/_data'
import DiscoverDest from '@/components/main/DiscoverDest'
import React, { useState } from 'react'
import {motion} from 'framer-motion'

export default function Destination() {

  const countriesData = countries.map((country) => country.name)
  const TravelTypes = Array.from(
    destinations.reduce((acc, destination) => {
      destination.travelType.forEach(type => acc.add(type));
      return acc;
    }, new Set())
  );

  const [show , setShow] = useState(false)
  const [country , setCountry] = useState("")
  const [travel , setTravel] = useState("")
  const [suggestions , setSuggestions] = useState([])
  const [filteredCards , setFilteredCards] = useState(destinations)


  const [priceRange, setPriceRange] = useState(100);

  const handleRangeChange = (event) => {
    setPriceRange(parseInt(event.target.value, 10));
  };

  const handleReset = () => {
   setPriceRange(100)
   setCountry("")
   setTravel("")
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

      if(country == "" && travel == ""){
        setFilteredCards(destinations)
      }else{
        const filteredData = destinations.filter((destination) => {
          const matchesCountry = country === "" || destination.country.toLowerCase() === country.toLowerCase();
          const matchesTravelType = travel === "" || destination.travelType.includes(travel);
          const matchesPriceRange = priceRange === "" || Number(priceRange) <= Number(destination.cost);
      
          return matchesCountry && matchesTravelType && matchesPriceRange;
        });
      
        setFilteredCards(filteredData);
      }
   
  };

  const handleCountryInput = (e) => {
    const value = e.target.value 
    setCountry(value)

    if(value.trim() == ""){
      setShow(false)
      setSuggestions([])
    }
    else{
      setSuggestions(countriesData.filter(suggestion => suggestion.toLowerCase().includes(value.toLowerCase())))
      setShow(true)
    }

  }
  const handleSuggestionClick = (suggestion) => {
    setCountry(suggestion);
    setShow(false);
  };


  return (
    <div

    >
      <div className='bg-violet-500 py-10 px-10 text-center font-semibold text-4xl md:text-6xl text-white'>
        <h1>Destinations</h1>
      </div>
      <div className='grid grid-cols-1 px-5 lg:grid-cols-4 lg:gap-16 lg:px-10 py-10'>
        <div className='col-span-1 pb-10'>
        <div className='border rounded-lg p-5'>
      <form action="" className='flex flex-col gap-4'>

        <div className="relative">
          <input
            onChange={handleCountryInput}
            value={country} 
            type="text" 
            name="country"
            placeholder='Country' 
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            // Adjust the "pl-10" class for left padding based on your design
          />
          {show && (
              <div className='bg-gray-50 absolute border z-10 w-full mt-1 rounded-md'>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className='p-2 cursor-pointer hover:bg-gray-200'
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
          )}
        </div>

        <div className="relative">
            <select  
              value={travel}
              onChange={(e) => setTravel(e.target.value)}
              name="travel-type"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="" disabled>Travel type</option>
            {
              
                TravelTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))
            }
            </select>
        </div>
        
        <div className='gap-1'>
        <label htmlFor="priceRange" className="text-lg">Price Range</label>
        <input 
          type="range" 
          name='price'
          id="priceRange"
          min="100"
          max="10000"
          step="100"
          defaultValue="100"
          onChange={handleRangeChange}
          className="w-full p-2 border rounded-lg border-purple-500 focus:outline-none"
        />
        <span  id='rangeValue' className="text-start text-[#8a8989]">{`$${priceRange}`}</span>
        </div>
        <div className='flex flex-col gap-2'>
        <input 
        type="submit" 
        value="Filter"
        onClick={handleSubmit}
        className='bg-violet-500 rounded-full cursor-pointer text-white py-2'
        />
        <input 
        type="reset" 
        value="Reset"
        onClick={handleReset}
        className='bg-violet-500 rounded-full cursor-pointer text-white py-2'
        />
        </div>

      </form>
    </div>
        </div>
        <div className='col-span-3 h-full flex justify-center items-center'>
          
            {
              filteredCards.length > 0 ? (
              <motion.div 
              className='grid overflow-hidden grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 overflow-x-hidden'
              >
                {filteredCards.map((place) => (
                  <DiscoverDest key={place.id} place={place}/>
              ))}
              </motion.div>
              ):(
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-center'>No Destination found 😢</h1>
                </div>
              )
              
            }
        </div>
      </div>
    </div>
  )
}
