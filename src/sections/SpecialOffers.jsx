import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="max-container flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="lg:max-w-lg info-text mt-4 min-w-full">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart. <br /><br />

          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-8">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="More details"/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
