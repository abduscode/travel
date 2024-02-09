'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { countries, destinations } from '@/_data';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchDes() {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [travel, setTravel] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [filteredCards, setFilteredCards] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmited , setIsSubmited] = useState(false)
  // Dummy data for autocomplete suggestions
  const dummySuggestions = countries.reduce((acc, country) => {
    return acc.concat(country.cities);
  }, []);

  const TravelTypes = Array.from(
    destinations.reduce((acc, destination) => {
      destination.travelType.forEach((type) => acc.add(type));
      return acc;
    }, new Set())
  );

  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputValue(value);

    if (value.trim() === '') {
      setShow(false);
      setSuggestions([]);
    } else {
      setSuggestions(
        dummySuggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        )
      );
      setShow(true);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (inputValue === '' && travel === '') {
      setFilteredCards(null);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmited(true)
      }, 1000); // Adjust the timeout duration as needed
    } else {
      const filteredData = destinations.filter((destination) => {
        const matchesCountry =
          inputValue === '' ||
          destination.name.toLowerCase() === inputValue.toLowerCase();
        const matchesTravelType = travel === '' || destination.travelType.includes(travel);

        return matchesCountry && matchesTravelType;
      });
      
      setFilteredCards(filteredData);

      setTimeout(() => {
        setIsLoading(false);
        setIsSubmited(true)
      }, 1000); // Adjust the timeout duration as needed
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-5 md:px-16">
      <div className='px-2 py-10 rounded-lg bg-white lg:px-10'>
        <div className='text-center pb-6'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-xl font-semibold'
          >
            <span className='text-slate-400 font-bold'>F</span>ind the Adventure of a lifetime
          </motion.h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 px-2 items-center justify-center lg:flex-row"
        >
          <div className="w-full md:w-96 mt-4 relative">
            <input
              onChange={handleInputChange}
              type="text"
              name="destination"
              value={inputValue}
              placeholder="Where to go?"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
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
          <div className="w-full md:w-96 mt-4">
            <input
              type="date"
              name="date"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-96 mt-4">
            <select
              value={travel}
              onChange={(e) => setTravel(e.target.value)}
              name="travel-type"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="" disabled>Travel type</option>
              {TravelTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </form>

        <div className='pt-5 flex flex-col justify-center items-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-full font-semibold hover:shadow-md transition duration-300 ease-in-out"
          >
            Search
          </motion.button>
        </div>

        <AnimatePresence>
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className='py-8 font-semibold text-center'
            >
              Wait...
            </motion.div>
          ):(
            isSubmited && (
              filteredCards != null && filteredCards.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="mt-5 px-5"
                >
                  <h2 className="text-2xl font-semibold mb-2">Destinations :</h2>
                  {filteredCards.map((card) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                      className='flex my-2 border rounded-md border-gray-200 h-24'
                    >
                      <div className='relative h-full w-48 '>
                        <Image src={card.image} loading='lazy' layout="fill" objectFit="cover" alt='' />
                      </div>
                      <div className='flex flex-col justify-between w-full'>
                        <Link href="/"><h1 className='py-4 px-5 text-lg font-semibold hover:text-slate-600'>{card.name}</h1></Link>
                        <h3 className='pb-4 px-5 text-sm font-mono'>{card.country}</h3>
                      </div>
                      <span className='flex px-10 text-slate-600 font-semibold justify-center items-center'>
                        {card.cost}$
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              ):(
                <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="mt-5 text-center px-5"
              >
                No Destination Found 😢
              </motion.div>
              )
            )
          )}
        </AnimatePresence>

      


      </div>
    </div>
  );
}
