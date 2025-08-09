import {useRef} from "react";

const UnControlledInput = () => {
    // const [name, setName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     // setName(e.target.value);
    // }

    const handleClick = () =>{
        alert(`Value: ${inputRef.current?.value}`);
    }

    return (
        <>
            <div className="text-center mt-8 space-x-4">
                <input
                    // value={name}
                    ref={inputRef}
                    // onChange={handleChange}
                    type="text"
                    className="border rounded px-4 py-2 mt-4"
                />
                <button
                    onClick={handleClick}
                    className="bg-cf-dark-red text-white px-4 py-2 rounded ml-4">
                    Show Value
                </button>
                {/*<p>Value: {inputRef.current?.value}</p>*/}
            </div>
        </>
    )
}

export default UnControlledInput;