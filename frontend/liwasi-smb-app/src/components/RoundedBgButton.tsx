
interface RoundedBgButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
}


function RoundedBgButton(props: RoundedBgButtonProps) {
  let bgTextColor = "bg-primary-blue-dark text-white"
  if (props.bgColor) {
    bgTextColor = `${props.bgColor} ${props.textColor}`
  }
  return (
    <button className={`${bgTextColor} px-4 py-2 rounded-md shadow-sm font-semibold`}>
      {props.text}
    </button>
  )
}

export default RoundedBgButton