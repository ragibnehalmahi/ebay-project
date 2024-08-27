import React, { useState } from 'react';

const FAQs = [
  {
    id: 1,
    question: "What services does this company provide?",
    answer: "We provide web development, mobile app development, and digital marketing services."
  },
  {
    id: 2,
    question: "What are the business hours?",
    answer: "Our business hours are from 9 AM to 5 PM, Monday to Friday."
  },
  {
    id: 3,
    question: "How can I contact customer support?",
    answer: "You can contact customer support via email at support@company.com or call us at (123) 456-7890."
  }
];

const FAQ = () => {
  // State to track which FAQ item is toggled
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle toggle
  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already open
    } else {
      setActiveIndex(index); // Open the selected one
    }
  };

  return (
    <div className=" container w-full max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {FAQs.map((faq, index) => (
          <div key={faq.id} className="border-b border-gray-300 pb-4">
            <button
              className="w-full text-left font-semibold text-gray-700 hover:text-blue-500 focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
