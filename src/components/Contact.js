import React from 'react';
import emailjs from 'emailjs-com';
import{ motion } from 'framer-motion';
import { socialLinks}  from '../data';



const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_y6r80ya", 
      "template_yxut55r", 
      event.target, "60umWMnTXMdGBslTO"
    )
    .then(() => {
      alert("Message sent successfully!")
      window.location.reload(false);
  })
    .catch(error => 
    alert(error.message)
    )
    event.target.reset();
  }
  return (
    <section 
      id="contact" className='flex flex-col items-center justify-center w-full my-24'
    >
      <div className='w-80 mb-10 flex items-center justify-center'>
        <div className='w-[50px] h-[2px] bg-cyan-200 bg-opacity-50'></div>
        <h3 className='text-textBase my-6 text-2xl mx-3'>Send me an email</h3>
        <div className='w-[50px] h-[2px] bg-cyan-200 bg-opacity-50'></div>
      </div>
      <form 
        onSubmit={handleSubmit} 
        className="  w-[95%] md:w-[600px] border border-zinc-800 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" type="text" placeholder="Name" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="user_email" id="email" type="email" placeholder="Email" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 bg-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline resize-none" rows="3" name="message" id="message" type="text" placeholder="Message" />
        </div>
        <div className="flex items-center justify-between">
          <button className="border border-zinc-700 hover:bg-gray-800 text-textBase font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Send
          </button>
        </div>
      </form>
      <div className='flex flex-col items-center justify-end mt-20'>
        {/* <div className='w-[50%] mx-auto border border-zinc-900'></div> */}
        <div className='w-80 flex items-center justify-center'>
          <div className='w-[50px] h-[2px] bg-cyan-200 bg-opacity-50'></div>
          <h3 className='text-textBase my-6 text-2xl mx-3'>Send me an email</h3>
          <div className='w-[50px] h-[2px] bg-cyan-200 bg-opacity-50'></div>
        </div>
        <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
        {socialLinks && (
          socialLinks.map(socialLink => (
          <motion.a 
          whileTap={{scale: "0.7s"}}
          key={socialLink.id} href={socialLink.link} className='w-full md:w-auto px-2 md:px-8 py-3 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out flex items-center justify-center gap-3'
          >
          {socialLink.iconSrc}
          <p className='text-lg text-textBase'>{socialLink.name}</p>
          </motion.a>
          ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact