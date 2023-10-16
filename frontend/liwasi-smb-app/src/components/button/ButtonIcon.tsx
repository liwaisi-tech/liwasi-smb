interface ButtonIconProps {
    children: React.ReactNode;
    onClick?: () => void;
}
function ButtonIcon(props: ButtonIconProps) {
    return (
        <div onClick={props.onClick} className="hover:cursor-pointer">
            {props.children}
        </div>
    )
}

export default ButtonIcon