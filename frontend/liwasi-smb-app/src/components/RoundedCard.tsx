import Image from "next/image";
import RoundedBgButton from "./RoundedBgButton";
import SingleButton from "./SingleButton";
import Link from "next/link";

interface RoundedCardProps {
  id: string;
  title: string;
  subTitle?: string;
  key?: string;
  alt1?: string;
  alt2?: string;
}
function RoundedCard(props: RoundedCardProps) {
  return (
    <div className="max-w-xs w-full mx-1 pb-3" key={props.key}>
      <div className="bg-white shadow-lg rounded-lg py-4 border">
        <h3 className="text-primary-blue-dark text-lg font-light px-1">
          {props.title}
        </h3>
        {
          props.subTitle &&
          <p className="text-gray-600 font-light text-sm px-1">
            {props.subTitle}
          </p>
        }
        <div className="w-full overflow-hidden relative" style={{ height: '30vh' }}>
          <Image
            src="/images/pizzeria.png"
            alt="Pizza Artesanal Llanera"
            fill={true}
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </div>
        {
          props.alt1 &&
          <p className="text-gray-700 text-xs px-1">
            {props.alt1}
          </p>
        }
        {
          props.alt2 &&
          <p className="text-gray-700 text-xs px-1">
            Santa Helena de Cusiva, Maní, Casanare.
          </p>
        }
        <div className="w-full flex items-end justify-end px-2 py-4">
          <Link href={`/business/edit/${props.id}`}>
            <SingleButton text="Editar" />
          </Link>
          <Link href={`/business/view/${props.id}`}>
            <RoundedBgButton text="Abrir" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoundedCard