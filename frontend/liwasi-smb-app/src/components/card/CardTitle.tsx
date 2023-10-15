interface CardTitleProps {
    title: string,
    key?: string,
    children: React.ReactNode
}

function CardTitle(props: CardTitleProps) {
    return (
        <div className="bg-detail rounded-lg w-full p-2 md:w-2/5" key={props.key}>
            <h4 className="text-black font-light mt-[-8px] text-xs">{props.title}</h4>
            {props.children}
        </div>
    )
}

export default CardTitle