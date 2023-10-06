interface LargeTitleProps {
  title: string;
  className?: string;
}

function LargeTitle(props: LargeTitleProps) {
  const styles = props.className ? `${props.className}` : ""
  return (
    <div
      className={`${styles} py-1 font-extralight text-3xl text-primary-blue-dark`}>
      <p>
        {props.title}
      </p>
    </div>
  )
}

export default LargeTitle