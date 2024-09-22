"use client";
import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        {markdownify(title, "h1", "text-center font-semibold text-3xl lg:text-4xl mb-12")}
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <form
              className="contact-form bg-white shadow-md rounded-lg p-8"
              method="POST"
              action={contact_form_action}
              onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());

                try {
                  const response = await fetch(contact_form_action, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });

                  const result = await response.json();
                  if (response.ok) {
                    alert('Your message has been sent!');
                  } else {
                    alert('Failed to send message. Please try again.');
                  }
                } catch (error) {
                  console.error('Error:', error);
                  alert('An error occurred. Please try again.');
                }
              }}
            >
              <div className="mb-6">
                <input
                  className="form-input w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  className="form-input w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  className="form-input w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="form-textarea w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="5"
                  name="message"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-200"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 flex flex-col justify-center bg-white shadow-md rounded-lg p-8">
            {markdownify(info.title, "h4", "text-xl font-semibold mb-6 text-gray-800")}
            {markdownify(info.description, "p", "mb-4 text-gray-600")}
            <ul className="contact-list space-y-4">
              {info.contacts.map((contact, index) => (
                <li key={index} className="text-gray-700">
                  {markdownify(contact, "strong", "block text-lg")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
