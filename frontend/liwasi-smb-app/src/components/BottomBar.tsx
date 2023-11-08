import Link from "next/link"
import { AiFillDollarCircle, AiFillHome, AiFillMinusCircle } from "react-icons/ai"


interface BottomBarProps {
    onClick?: () => void;

}
function BottomBar(props: BottomBarProps) {
    return (
        <div className="fixed flex bg-opacity-80 px-8 py-3 w-full md:hidden items-center justify-around bg-black text-white bottom-0 z-[50]">
            <Link href="/" onClick={props.onClick}>
                <AiFillHome size={20} />
            </Link>
            <AiFillDollarCircle size={20} />
            <AiFillMinusCircle size={20} />
        </div>
    )
}

export default BottomBar