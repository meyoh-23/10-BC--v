
const ContactUs = () => {
  const inputStyle = `border-2 border-primary rounded-md text-secondary font-raleway text-h3 font-medium px-2`
  return (
    <section className="h-[100vh] w-full mt-20 grid content-center">
      <div className="pt-12 w-5/6  mx-auto flex flex-col items-center mb-8">
        <h1 className="font-bold font-raleway text-h2">Reach Out to Us</h1>
        <form action="" className="py-3 flex flex-col items-start gap-4 my-10 shadow-xl w-full p-3 rounded-md">
          <div className="flex flex-col ss:flex-row gap-3">
            <label htmlFor="name"> Your Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name" 
              className={`${inputStyle} min-w-[200px] ss:w-300px`} 
              required
              />
          </div>
          <div className="flex flex-col ss:flex-row gap-3">
            <label htmlFor="email">Your Email:</label>
            <input 
            type="text" 
            placeholder="Enter Your Email" 
            className={`${inputStyle} min-w-[200px] ss:w-300px`}
            required
            />
          </div>
          <div className="flex flex-col ss:flex-row gap-3">
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" placeholder="0712345678" className={`${inputStyle}`}/>
          </div>
          <div className="flex flex-col ss:flex-row gap-3">
            <label htmlFor="message">Your Message:</label>
            <textarea 
            type="text" 
            placeholder="Your Message" 
            className={`${inputStyle} w-[250px] ss:min-w-[350px]`}
            rows={4}
            required
            />
          </div>
          <button type="submit" className="bg-primary rounded-md text-center p-2 mx-auto">
            submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs;