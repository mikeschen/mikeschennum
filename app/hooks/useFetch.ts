import { useRef } from "react";
import toast from "react-hot-toast";

function useSubmitForm() {
	const formRef = useRef<HTMLFormElement>(null);

	const submitForm = async (
		url: string,
		formData: Record<string, any>,
		method = "POST"
	) => {
		try {
			const res = await fetch(url, {
				method,
				body: JSON.stringify(formData),
			});

			if (res?.status === 200) {
				toast.success("Message sent!");
				formRef.current?.reset();
			} else {
				toast.error("Failed to send message");
			}
		} catch (e) {
			toast.error("An error occurred while sending the message");
		}
	};

	return { formRef, submitForm };
}

export default useSubmitForm;
