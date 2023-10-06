
interface InputLabelProps {
    label: string;
    type: string;
    value?: string;
}

function InputLabel(props: InputLabelProps) {
    return (
        <div>
            <p
                className="text-gray-500 text-sm "
            >{props.label}</p>
            <div className="w-full md:max-w-xs">
                <input
                    className="w-full border border-primary-blue-dark rounded-md p-2 text-base font-normal text-gray-900"
                    type={props.type}
                    defaultValue={props.value}/>
            </div>
        </div>
    )
}

export default InputLabel