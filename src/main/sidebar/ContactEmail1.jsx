import React from 'react'

function ContactEmail1() {
  return (
    <div class="form-container px-10 py-5">
    <form class="form">
      <div class="form-group text-sm sm:text-md lg:text-lg">
        <label for="email">Full Name</label>
        <input required="" name="email" id="email" type="text"/>
      </div>
      <div class="form-group text-sm sm:text-md lg:text-lg">
        <label for="email">Email</label>
        <input required="" name="email" id="email" type="text"/>
      </div>
      <div class="form-group text-sm sm:text-md lg:text-lg">
        <label for="textarea">How Can We Help You?</label>
        <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
      </div>
      <div className=' flex justify-center'>
      <button type="submit" class="form-submit-btn text-sm sm:text-lg lg:text-xl">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default ContactEmail1
