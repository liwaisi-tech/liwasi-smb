import Image from "next/image";
import RoundedBgButton from "./RoundedBgButton";
import SingleButton from "./SingleButton";
import Link from "next/link";

interface RoundedCardProps {
  title: string;
}
function RoundedCard(props: RoundedCardProps) {
  return (
    <div className="max-w-xs w-full">
      <div className="bg-white shadow-lg rounded-lg py-4 border">
        <h3 className="text-gray-900 text-lg font-normal px-1">
          {props.title}
        </h3>
        <p className="text-gray-600 font-light text-sm px-1">
          Pizza Artesanal Llanera
        </p>
        <div className="w-full overflow-hidden relative" style={{ height: '30vh' }}>
          <Image
            src="/images/pizzeria.png"
            alt="Pizza Artesanal Llanera"
            fill={true}
            style={{objectFit: "cover"}}
            priority = {true}
          />
        </div>
        <p className="text-gray-700 text-xs px-1">
          Calle 56 #54 -90 Local 201
        </p>
        <p className="text-gray-700 text-xs px-1">
          Santa Helena de Cusiva, Maní, Casanare.
        </p>
        <div className="w-full flex items-end justify-end px-2 py-4">
          <Link href="/business/edit/1121862665">
            <SingleButton text="Editar" />
          </Link>
          <RoundedBgButton text="Abrir" />
        </div>
      </div>
    </div>
  )
}

export default RoundedCard