
interface RoundedBgButtonProps {
  text: string;
  bgColor?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}


function RoundedBgButton(props: RoundedBgButtonProps) {
  let className = "bg-black text-white"
  if (props.bgColor) {
    className = `${props.bgColor} ${props.className}`
  }
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${className} mx-1 text-sm px-1 py-1 md:px-4 md:py-2 hover:text-white rounded-md shadow-sm font-normal md:font-semibold`}>
      {props.text}
    </button>
  )
}

export default RoundedBgButton