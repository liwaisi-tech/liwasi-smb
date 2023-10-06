
interface InputLabelProps {
    label: string;
    type: string;
    id: string;
    value?: string;
}

function InputLabel(props: InputLabelProps) {
    return (
        <div>
            <label
                htmlFor={props.id}
                className="text-gray-500 text-sm "
            >
                {props.label}
            </label>
            <div className="w-full">
                <input
                    id={props.id}
                    className="w-full border border-primary-blue-dark rounded-md p-2 text-base font-normal text-gray-900"
                    type={props.type}
                    defaultValue={props.value} />
            </div>
        </div>
    )
}

export default InputLabel