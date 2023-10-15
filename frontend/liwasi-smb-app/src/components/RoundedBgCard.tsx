
interface RoundedBgCardProps {
    className?: string;
    children?: React.ReactNode;
}

function RoundedBgCard(props: RoundedBgCardProps) {
    return (
        <div
            className={
                props.className ?
                    props.className
                    :
                    "rounded-lg bg-slate-100 p-4"
            }
        >
            {props.children}
        </div>
    )
}

export default RoundedBgCard