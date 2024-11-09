import React from "react";
import Tab from "./Tab";

const data = [
  {
    id: 1,
    question: "What services does D-Cribs offer?",
    answer:
      "D-Cribs provides property buying, selling, rental, and property management services across the UK. We help you find, secure, and maintain your ideal home or investment property.",
  },
  {
    id: 2,
    question: "Where are D-Cribs properties located?",
    answer:
      "Our properties are located across the UK, with a focus on prime cities such as London, Manchester, and Birmingham. We offer a wide range of residential and commercial properties to suit your needs.",
  },
  {
    id: 3,
    question: "Can D-Cribs help with financing a property?",
    answer:
      "Yes, we work with trusted mortgage and financing experts to help you secure funding for your property purchase. Our team can guide you through every step of the process.",
  },
  {
    id: 4,
    question: "Do you offer virtual tours?",
    answer:
      "Absolutely. D-Cribs offers high-quality virtual tours for most of our properties, allowing you to explore listings from the comfort of your home before scheduling an in-person viewing.",
  },
  {
    id: 5,
    question: "How does D-Cribs screen rental applicants?",
    answer:
      "We perform thorough background checks, including credit, employment, and reference verifications, to ensure reliable tenants for every rental property we manage.",
  },
  {
    id: 6,
    question: "How does D-Cribs assist first-time home buyers?",
    answer:
      "Our team provides tailored guidance for first-time buyers, from mortgage pre-approval to understanding the buying process. We aim to make your home-buying journey as smooth and stress-free as possible.",
  },
  {
    id: 7,
    question: "What are D-Cribs’ fees for property management?",
    answer:
      "Our property management fees vary based on the property type and services required. Contact us for a personalized quote to learn more about how we can take care of your property.",
  },
  {
    id: 8,
    question: "How can I schedule a viewing?",
    answer:
      "Simply contact us via phone, email, or our website, and our team will arrange a convenient viewing time for you. We offer flexible viewing schedules to accommodate our clients.",
  },
  {
    id: 9,
    question: "Does D-Cribs handle property maintenance?",
    answer:
      "Yes, for managed properties, we coordinate all maintenance and repair requests to ensure properties remain in top condition and our tenants' needs are met.",
  },
  {
    id: 10,
    question: "How do I get started with D-Cribs?",
    answer:
      "Get in touch with us through our website, call, or visit our office to discuss your needs. Whether you’re buying, renting, or investing, we’re here to help you find the perfect property solution.",
  },
];

const Accordian = () => {
  return (
    <div>
      <div>
        <Tab data={data} />
      </div>
    </div>
  );
};

export default Accordian;
