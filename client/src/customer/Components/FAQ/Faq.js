import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How can I create an account on Apala Bajar?',
      answer: 'To create an account, click on the "Register" link at the top right corner of the homepage and fill in your details.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'If you have forgotten your password, click on the "Forgot Password" link on the login page and follow the instructions to reset it.',
    },
    {
      question: 'What is Apala Bajar?',
      answer: 'Apala Bajar is an e-commerce platform offering a wide range of products from daily essentials to unique finds, all in one place.',
    },
    {
      question: 'How do I place an order?',
      answer: 'To place an order, simply browse our products, add them to your cart, and proceed to checkout. You can create an account or checkout as a guest.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, net banking, and popular digital wallets.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. If you are not satisfied with your purchase, please contact our support team for assistance.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support via email at <a href="mailto:aaplabajar@gmail.com" class="text-orange-500 hover:underline">aaplabajar@gmail.com</a> or call us at <a href="tel:+91 9423750349" class="text-orange-500 hover:underline">+91 9423750349</a>.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Frequently Asked Questions</h1>
        <div className="bg-white shadow-md rounded-lg p-5">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-orange-500 transition duration-300">{faq.question}</h2>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
