import SectionIntro from "../../../Components/SectionIntro";
import { useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/mock_data.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data.faqs));
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full section">
      <SectionIntro
        title="frequently asked questions"
        name="view all FAQ's"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      />

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5 mt-16 items-center justify-between">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-white/5 rounded-xl overflow-hidden"
          >
            <button
              className="w-full p-6 flex justify-between items-center bg-black/20 hover:bg-black/30 transition-all"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h3 className="text-2xl font-semibold text-left">
                {faq.question}
              </h3>
              {activeIndex === faq.id ? (
                <Remove className="!text-4xl" />
              ) : (
                <Add className="!text-4xl" />
              )}
            </button>

            {activeIndex === faq.id && (
              <div className="p-6 bg-black/10">
                <p className="text-xl normal-case text-white/70">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
