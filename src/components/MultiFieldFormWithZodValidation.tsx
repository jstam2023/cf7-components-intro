import {useState} from "react";
import {z} from "zod";

const formSchema = z.object({
    name: z.string().trim().nonempty("Name is required.").min(2, "Name must be more than one character"),
    email: z
        .email("Email is invalid.")
        .trim()
        .nonempty("Email is required."),
    message: z.string()
        .trim()
        .nonempty("Message is required.")
        .min(5, "Message must be more than 5 characters.")
        .max(100, "Message must be less than 100 characters."),
});

type FormValues = z.infer<typeof formSchema>;

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
}

const initialValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldFormWithZodValidation = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
    const [errors, setErrors] = useState<FormErrors | null>({});

    const validateForm = () => {
        const result = formSchema.safeParse(values);
        // {success: true, data: validatedData}
        // {success: false, error: errors}

        if (!result.success) {
            // console.log(result.error.issues)
            const newErrors: FormErrors = {};

            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof FormValues;
                newErrors[fieldName] = issue.message;
            });
            setErrors(newErrors);
            return false;
        }
        setErrors({});
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            setSubmittedData(values);
            setValues(initialValues);
        }
    };

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value,
        }));
        setErrors(prev => ({
            ...prev,
            [name]: undefined,
        }));
    };

    const handleClear = () => {
        setValues(initialValues);
        setErrors(null);
        setSubmittedData(null);
    }

    return (
        <>
            <div className="flex max-w-sm mx-auto mt-8">
                <form onSubmit={handleSubmit} className="mx-auto max-w-md text-center mt-8 space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            // minLength={3}
                            maxLength={30}
                            value={values.name}
                            placeholder="name"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"
                            required
                            autoComplete="off"
                        />
                        {errors?.name && (
                            <p className="text-cf-dark-red">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="email"
                            maxLength={30}
                            value={values.email}
                            placeholder="email"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"
                            autoComplete="off"
                            required
                        />
                        {errors?.email && (
                            <p className="text-cf-dark-red">{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <textarea
                            name="message"
                            maxLength={100}
                            value={values.message}
                            onChange={handleChange}
                            placeholder="Type your message max characters: 100"
                            className="w-full px-4 py-2 rounded border"
                            required
                            autoComplete="off"
                        ></textarea>
                        {errors?.message && (
                            <p className="text-cf-dark-red">{errors.message}</p>
                        )}
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
export default MultiFieldFormWithZodValidation;