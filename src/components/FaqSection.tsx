
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqsLeft = [
    {
      question: "How Can You Find Costco Gas Prices and Working Hours on Costco's Website",
      answer: "You can find Costco gas prices and working hours by visiting your local Costco's webpage or using the Costco app.",
    },
    {
      question: "How Can You Check Gas Prices on the Mobile Application?",
      answer: "Download the Costco mobile app, sign in with your membership, and check current gas prices at your nearest location.",
    },
    {
      question: "How do I find out the price of Gas at Costco?",
      answer: "You can check Costco gas prices through the Costco mobile app, by calling your local warehouse, or visiting the gas station in person.",
    },
    {
      question: "Why is Costco gas cheaper than others?",
      answer: "Costco gas is cheaper due to their bulk purchasing power, membership model, and efficient operations that help reduce overhead costs.",
    },
  ];

  const faqsRight = [
    {
      question: "Is Costco gas really cheaper?",
      answer: "Yes, Costco typically offers gas at lower prices compared to nearby stations due to their bulk purchasing power and membership model.",
    },
    {
      question: "How Much is Costco Gas Price Today?",
      answer: "Gas prices vary by location. Check your local Costco gas station or use the Costco app for current prices.",
    },
    {
      question: "What is the benefit of buying gas at Costco?",
      answer: "Benefits include lower prices, high-quality fuel, and convenient locations for members. Costco's gas meets TOP TIER™ standards for engine cleanliness and performance.",
    },
    {
      question: "Can I get gas at Costco without my card?",
      answer: "No, a valid Costco membership card is required to purchase gas at Costco gas stations. This is one of the ways Costco maintains its competitive pricing.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          COSTCO GAS PRICES FAQ's
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <Accordion type="single" collapsible>
              {faqsLeft.map((faq, index) => (
                <AccordionItem key={index} value={`item-left-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              {faqsRight.map((faq, index) => (
                <AccordionItem key={index} value={`item-right-${index}`}>
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
    </div>
  );
};

export default FaqSection;
