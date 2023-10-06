interface SingleButtonProps {
    text: string;
    textColor?: string;
    onClick?: () => void;
  }
function SingleButton(props: SingleButtonProps) {
  return (
    <button className={`${props.textColor ? props.textColor : "text-primary-blue-dark"} px-4 py-2 rounded-md shadow-sm font-semibold`}>
      {props.text}
    </button>
  )
}

export default SingleButton