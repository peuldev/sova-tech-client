import delivery from "../../../assets/svg_icon/delivery_icon.svg";
import engrave from "../../../assets/svg_icon/engrave_icon.svg";
import question from "../../../assets/svg_icon/question_icon.svg";
import usd from "../../../assets/svg_icon/usd_icon.svg";

const DeliveryAbout = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 font-poppins py-20">
      <div className="text-center space-y-1">
        <div className="flex justify-center">
          <img className="w-14" src={delivery} alt="" />
        </div>
        <h1 className="text-xl font-semibold">Fast, free delivery</h1>
        <p className="text-sm">Or pick up available items at an Apple Store.</p>
        <p className="text-sm cursor-pointer text-custom_blue hover:border-b inline">
          Learn more...
        </p>
      </div>
      <div className="text-center space-y-1">
        <div className="flex justify-center">
          <img className="w-12" src={usd} alt="" />
        </div>
        <h1 className="text-xl font-semibold">Pay monthly at 0% APR</h1>
        <p className="text-sm">
          You can pay over time when you choose to check out with Apple Card
          Monthly Installments.
        </p>
        <p className="text-sm cursor-pointer text-custom_blue hover:border-b inline">
          Learn more...
        </p>
      </div>
      <div className="text-center space-y-1">
        <div className="flex justify-center">
          <img className="w-14" src={question} alt="" />
        </div>
        <h1 className="text-xl font-semibold">Get help buying</h1>
        <p className="text-sm">
          Have a question? Call a Specialist or chat online.
        </p>
        <p className="text-sm">Call 1-800-MY-APPLE.</p>
        <p className="text-sm cursor-pointer text-custom_blue hover:border-b inline">
          Learn more...
        </p>
      </div>
      <div className="text-center space-y-1">
        <div className="flex justify-center">
          <img className="w-12" src={engrave} alt="" />
        </div>
        <h1 className="text-xl font-semibold">Make them yours</h1>
        <p className="text-sm">
          Engrave your AirPods with your initials or favorite emoji — free. Only
          at Apple.
        </p>
        <p className="text-sm cursor-pointer text-custom_blue hover:border-b inline">
          Learn more...
        </p>
      </div>
    </div>
  );
};

export default DeliveryAbout;
