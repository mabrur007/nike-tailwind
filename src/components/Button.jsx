
const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center text-lg font-montserrat leading-none
      ${
        backgroundColor ?
        `${backgroundColor} ${textColor} ${borderColor}` 
        : "bg-coral-red text-white border-coral-red"
      }
     px-6 py-4 rounded-full ${fullWidth && 'w-full'}`}>
        {label}

        {iconURL && <img src={iconURL} alt="rightArrow" 
             className="ml-2 rounded-full" 
        />}
    </button>
  )
}

export default Button
