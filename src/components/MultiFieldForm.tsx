import {useState} from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
}

const initialValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldForm = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittedData(values)
        setValues(initialValues)
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleClear = () => {
        setValues(initialValues);
    }

    return (
        <>
            <div className="flex max-w-sm mx-auto mt-8">
                <form onSubmit={handleSubmit} className="mx-auto max-w-md text-center mt-8 space-y-4">
                    <input
                        type="text"
                        name="name"
                        minLength={3}
                        value={values.name}
                        placeholder="name"
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border"
                        required
                    />
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder="email"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"
                            required
                        />
                    </div>
                    <div>
                    <textarea
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Type your message"
                        className="w-full px-4 py-2 rounded border"
                        required
                    ></textarea>
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="bg-cf-dark-red text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleClear}
                            className="bg-gray-200 text-cf-gray px-4 py-2 rounded"
                        >
                            Clear
                        </button>
                    </div>
                    { submittedData && (
                        <div className="mt-6 border-t pt-4 space-y-2">
                            <h2 className="font-semibold">Submitted Data</h2>
                            <p><strong>Name:</strong> {submittedData?.name}</p>
                            <p><strong>Email:</strong> {submittedData?.email}</p>
                            <p><strong>Message:</strong> {submittedData?.message}</p>
                        </div>
                    )}
                </form>
            </div>

        </>
    )
}
export default MultiFieldForm;