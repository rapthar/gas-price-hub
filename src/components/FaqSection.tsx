
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How Can You Find Costco Gas Prices and Working Hours on Costco's Website",
      answer: "You can find Costco gas prices and working hours by visiting your local Costco's webpage or using the Costco app.",
    },
    {
      question: "How Can You Check Gas Prices on the Mobile Application?",
      answer: "Download the Costco mobile app, sign in with your membership, and check current gas prices at your nearest location.",
    },
    {
      question: "Is Costco gas really cheaper?",
      answer: "Yes, Costco typically offers gas at lower prices compared to nearby stations due to their bulk purchasing power.",
    },
    {
      question: "How Much is Costco Gas Price Today?",
      answer: "Gas prices vary by location. Check your local Costco gas station or use the Costco app for current prices.",
    },
    {
      question: "What is the benefit of buying gas at Costco?",
      answer: "Benefits include lower prices, high-quality fuel, and convenient locations for members.",
    },
    {
      question: "Can I get gas at Costco without my card?",
      answer: "No, a valid Costco membership card is required to purchase gas at Costco gas stations.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          COSTCO GAS PRICES FAQ's
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
