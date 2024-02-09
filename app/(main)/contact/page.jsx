"use client"
import Image from 'next/image'


export default function Contact() {

  return (
    <div>
      <div className='bg-red-400 text-center text-white font-semibold text-4xl md:text-6xl px-10 py-10'>
        <h1>Contact Us</h1>
      </div>
      <div>
      <div className="flex flex-col items-center py-10 md:py-20 px-4 sm:px-6 lg:px-10">
          <h1 className="text-4xl font-semibold text-center">
            <span className="font-bold text-red-400">O</span>ur Location
          </h1>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4263.740639795807!2d-74.17364760599528!3d40.917497609740195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fdcb3088f637%3A0xd6a71bd6813b7c40!2sPaterson%20City%20Hall!5e0!3m2!1sen!2sph!4v1597647087983!5m2!1sen!2sph"
            frameBorder="0"
            className="w-full h-96 py-10"
            allowFullScreen
            loading="lazy"
          ></iframe>

      </div>
      <div className='grid grid-cols-1 gap-4 py-10 px-5 md:px-10'>
          <div className=''>
            <h2 className='text-4xl font-semibold text-center'><span className='text-red-400 font-bold'>L</span>{"et's have a talk "}</h2>
            <form className='flex flex-col space-y-4  justify-center py-5'>
              <div >
                <input type="text" name='name' placeholder='Your Name' className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-red-400" />
              </div>
              <div>
                <input type="email" name='email' placeholder='Your Email' className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-red-400" />
              </div>
              <div>
                <input type="text" name='sbuject' placeholder='The Subject' className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-red-400" />
              </div>
              <div>
                <textarea name="message" placeholder='Your Message' id="" cols="30" rows="3" className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-red-400"></textarea>
              </div>
              <div>
                <input type="submit" value="Submit" className='w-full bg-red-400 text-white rounded-lg p-2 hover:bg-red-500 cursor-pointer' />
              </div>
            </form>
          </div>
      </div>

      </div>
    </div>
  )
}
