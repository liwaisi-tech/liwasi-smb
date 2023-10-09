interface SingleButtonProps {
  text: string;
  textColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
function SingleButton(props: SingleButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${props.textColor ? props.textColor : "text-primary-blue-dark"} px-4 py-2 rounded-md shadow-sm font-semibold`}>
      {props.text}
    </button>
  )
}

export default SingleButton