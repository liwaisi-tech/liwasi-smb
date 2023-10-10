
interface RoundedBgButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}


function RoundedBgButton(props: RoundedBgButtonProps) {
  let bgTextColor = "bg-primary-blue-dark text-white"
  if (props.bgColor) {
    bgTextColor = `${props.bgColor} ${props.textColor}`
  }
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${bgTextColor} px-4 py-2 ml-1 rounded-md shadow-sm font-semibold`}>
      {props.text}
    </button>
  )
}

export default RoundedBgButton