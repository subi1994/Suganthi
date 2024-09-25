import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com'; // Ensure you have emailjs installed

function Contact() {
  // State to manage form fields
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedbackMessage, setFeedbackMessage] = useState(null); // To track feedback messages (success or failure)
  const form = useRef();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS submission
    emailjs
      .sendForm('service_xz1odgs', 'template_w4optpe', form.current, 'eTG2VGRSGMkx3wjvK')
      .then(
        (result) => {
          console.log(result.text);
          setFeedbackMessage('Message sent successfully!'); // Show success message
          setFormData({ name: '', email: '', message: '' }); // Reset form data
          clearFeedbackMessage(); // Clear feedback message after 3 seconds
        },
        (error) => {
          console.log(error.text);
          setFeedbackMessage('Message not sent. Try again.'); // Show failure message
          clearFeedbackMessage(); // Clear feedback message after 3 seconds
        }
      );
  };

  // Clear the feedback message after 3 seconds
  const clearFeedbackMessage = () => {
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 2000); // Disappear after 3 seconds
  };

  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center items-center"
    style={{
      backgroundImage: "url('https://thumbs.dreamstime.com/z/vet-call-center-contact-us-cute-little-dog-sitting-bow-tie-white-collar-near-office-phone-white-background-studio-shot-34834500.jpg')",
    }}>
    <div className="min-h-container bg-base-100 flex flex-col justify-center items-center p-5">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      {/* Contact Form */}
      <form ref={form} onSubmit={handleSubmit} className="bg-base-200 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </form>

      {/* Feedback Message (Success or Failure) */}
      {feedbackMessage && (
        <p className={`mt-4 text-lg ${feedbackMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {feedbackMessage}
        </p>
      )}
    </div>
  </div>
  );
}

export default Contact;