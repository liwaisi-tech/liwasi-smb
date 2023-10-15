import { AiFillDollarCircle, AiFillHome, AiFillMinusCircle } from "react-icons/ai"

function BottomBar() {
    return (
        <div className="fixed flex bg-opacity-80 px-8 py-3 w-full md:hidden items-center justify-around bg-black text-white bottom-0">
            <AiFillHome size={20} />
            <AiFillDollarCircle size={20} />
            <AiFillMinusCircle size={20} />
        </div>
    )
}

export default BottomBar