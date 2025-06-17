import { Slide, Fade } from "react-awesome-reveal";

const Accordion = ({ Q, A }) => {
  return (
    <Slide direction="left">
      <Fade duration={1000}>
        <div className="collapse collapse-arrow bg-[#f5f5f5]  border border-base-300 ">
          <input className="" type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">{Q}</div>
          <div className="collapse-content text-sm">{A}</div>
        </div>
      </Fade>
    </Slide>
  );
};

export default Accordion;
