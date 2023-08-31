import { star } from "../assets/icons"


const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div>
      <div className="flex flex-1 flex-col justify-center items-center">
        <img src={imgURL} alt="customers" className="rounded-full w-[120px] h-[120px]"/>
        <p className="info-text max-w-sm mt-6 text-center">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img 
                src={star} 
                alt="star"
                width={24}
                height={24}
                className="object-contain m-0" />
            <p className="font-montserrat text-xl text-slate-gray">{rating}</p>
        </div>
        <h3 className="mt-1 font-palanquin font-bold text-3xl text-center">{customerName}</h3>
      </div>
    </div>
  )
}

export default ReviewCard
