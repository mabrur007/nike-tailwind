
const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center text-white text-lg font-montserrat bg-coral-red border-coral-red px-6 py-4 rounded-full">
        {label}

        {iconURL && <img src={iconURL} alt="rightArrow" 
             className="ml-2 rounded-full" 
        />}
    </button>
  )
}

export default Button
