interface SingleButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
function SingleButton(props: SingleButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${props.className ? props.className : "text-white"} text-sm px-1 py-1 md:px-4 md:py-2 rounded-md shadow-lg ml-1 font-normal md:font-semibold`}>
      {props.text}
    </button>
  )
}

export default SingleButton