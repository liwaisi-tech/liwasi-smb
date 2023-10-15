import Link from "next/link";
import { AiFillDollarCircle, AiFillMinusCircle } from "react-icons/ai";

interface BusinessListProps {
  businessList: Business[];
}

function BusinessList(props: BusinessListProps) {
  if (!props.businessList || props.businessList.length === 0) {
    return null
  }
  return (
    <div>
      {
        props.businessList.map((business, index) => (
          <div key={index} className="w-full flex justify-between border-b border-b-black py-1">
            <Link className="w-full" href={`/business/view/${business.id}`}>
              <div className="w-full flex flex-col font-light text-black hover:cursor-pointer hover:bg-black hover:text-white">
                <p className="text-sm font-normal">{business.name}</p>
                <p className="font-extralight text-xs">{business.id}</p>
              </div>
            </Link>
            <div className="flex flex-start items-center bg-opacity-80 text-white bg-black rounded-lg px-2">
              <AiFillDollarCircle size={20} />
              <p className="px-2">|</p>
              <AiFillMinusCircle size={20} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default BusinessList