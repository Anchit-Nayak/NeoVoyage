import React from 'react'

const Form = () => {
  return (
    <section class="border-solid border-gray-400">
  <div class="px-4 mx-auto max-w-screen-md">
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm  border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium  text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm  rounded-lg border shadow-sm  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm  rounded-lg shadow-sm border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit  focus:ring-4 focus:outline-none  bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
  )
}

export default Form