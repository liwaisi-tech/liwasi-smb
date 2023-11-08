interface ButtonIconProps {
    children: React.ReactNode;
    onClick?: () => void;
}
function ButtonIcon(props: ButtonIconProps) {
    return (
        <div onClick={props.onClick} className="hover:cursor-pointer group relative">
            {props.children}
            {/* <div className="absolute top-0 left-full mt-2 p-2 bg-black text-white rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                Este es un ejemplo.
            </div> */}
        </div>
    )
}

export default ButtonIcon