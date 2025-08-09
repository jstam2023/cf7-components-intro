// import {useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

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

const initialValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldFormWithReactHook = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        watch,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
        });

    const onSubmit = (data: FormValues) => {
        console.log(data);
        reset();
    }

    const onClear = () => {
        reset();
    }

    const watchedValues = watch();

    return (
        <>
            <div className="flex max-w-sm mx-auto mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md text-center mt-8 space-y-4">
                    <div>
                        <input
                            {...register("name")}
                            placeholder="name"
                            className="w-full px-4 py-2 rounded border"
                            autoComplete="off"
                        />
                        {errors.name && (
                            <p className="text-cf-dark-red">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register("email")}
                            placeholder="email"
                            className="w-full px-4 py-2 rounded border"
                            autoComplete="off"
                        />
                        {errors.email && (
                            <p className="text-cf-dark-red">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <textarea
                            {...register("message")}
                            placeholder="Type your message max characters: 100"
                            className="w-full px-4 py-2 rounded border"
                            autoComplete="off"
                        ></textarea>
                        {errors.message && (
                            <p className="text-cf-dark-red">{errors.message.message}</p>
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
                            onClick={onClear}
                            className="bg-gray-200 text-cf-gray px-4 py-2 rounded"
                        >
                            Clear
                        </button>
                    </div>
                        <div className="mt-6 border-t pt-4 space-y-2">
                            <h2 className="font-semibold">Live Data</h2>
                            <p><strong>Name:</strong> {watchedValues.name}</p>
                            <p><strong>Email:</strong> {watchedValues.email}</p>
                            <p><strong>Message:</strong> {watchedValues.message}</p>
                        </div>
                </form>
            </div>
        </>
    )
}
export default MultiFieldFormWithReactHook;