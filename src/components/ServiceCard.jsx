const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 w-full sm:w-[350px] sm:min-w-[350px] shadow-3xl rounded-[20px] px-8 py-16">
      <div className="bg-coral-red w-10 h-10 flex justify-center items-center rounded-full">
        <img src={imgURL} alt={label} width={25} height={25} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
