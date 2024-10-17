import { useState } from "react";
import CardWrapper from "../UI/CardWrapper";
import arrowImg from "../../assets/icons/down-arrow.png";

const dataFAQ = [
  {
    question: "What game modes are available in the Flag Quiz?",
    answer:
      "Currently, the only available game mode in the Flag Quiz is the 'Guess Mode'. In this mode, players are presented with flags, and their task is to correctly identify the corresponding countries. We are continuously working on introducing new and exciting game modes to enhance your quiz experience. Stay tuned for updates!",
  },
  {
    question: "Can I compete with my friends in Flag Guess Mode?",
    answer:
      "Currently, simultaneous multiplayer gameplay in Flag Guess Mode is not available. However, you and your friends can individually play the quiz on your respective browsers and then compare your scores afterward. We are actively working on implementing a feature that will allow friends to play together in real-time. Stay tuned for future updates!",
  },
  {
    question: "Is there a time limit for answering in Flag Guess Mode?",
    answer:
      "Yes, in Flag Guess Mode, there is a total time limit of 1 minute and 30 seconds for both attempts combined. You have this duration to make two attempts at guessing the country associated with the presented flag. Manage your time wisely and enjoy the challenge!",
  },
  {
    question: "What factors determine the scoring in the Flag Quiz?",
    answer:
      "The scoring in the Flag Quiz depends on two main factors: the number of attempts and the time remaining. Players receive points based on how quickly and accurately they identify the country corresponding to the displayed flag. The maximum score for a correct answer is 10 points. So, the quicker and more accurate your responses, the higher your score will be!",
  },
  {
    question: "How do I use the interactive map on the 'Flags' page?",
    answer:
      "To use the interactive map, simply click the button labeled 'Interactive Map'. Wait for the map to load; this typically takes a few milliseconds. Once loaded, you can click on specific regions, and the country's name will be displayed along with the flag. The selected country will also be shaded and highlighted, indicating that you have clicked on it.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <CardWrapper>
      {dataFAQ.map((item, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => handleAccordionClick(index)}
            className="w-full flex justify-between p-5 font-semibold"
          >
            {item.question}
            <span>
              <img
                src={arrowImg}
                alt=""
                className={`w-6 ${openIndex === index ? "rotate-180" : ""}`}
              />
            </span>
          </button>
          <div className={openIndex === index ? "border-t p-5" : "hidden"}>
            {item.answer}
          </div>
        </div>
      ))}
    </CardWrapper>
  );
};

export default Accordion;
