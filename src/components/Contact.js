import { useState } from "react";
import Snackbar from "./ui/Snackbar";
import { useFormik } from "formik";
import SubmitButton from "./ui/SubmitButton";
const initialValues = { name: "", companyName: "", goal: "", email: "", productDetails: "" };

export default function Contact() {
  const onSubmit = (values, action) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpenSnackbar(true);
      console.log(values);
      action.resetForm();
    }, 2500);
  };
  const { values, handleChange, handleSubmit } = useFormik({ initialValues, onSubmit });
  const [isLoading, setIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  return (
    <>
      <div id="contact" className="bg-teal-900">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 rounded-t-3xl py-16 sm:py-20 px-5 sm:px-10 lg:px-20 font-neue-montreal text-3xl xl:text-4xl"
        >
          <div className="space-y-5">
            <p className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 whitespace-nowrap">
              <span className="flex flex-col lg:flex-row space-y-2.5 lg:space-y-0 items-start lg:items-end">
                <span>Hi! My name is</span>
                <input
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                  type="text"
                  spellCheck="false"
                  placeholder="Enter your name*"
                  className="outline-none bg-transparent border-b border-dashed border-zinc-400 text-start lg:text-center text-lg lg:text-xl pb-1 w-full lg:w-80"
                />
              </span>
              <span className="flex-1 flex flex-col lg:flex-row space-y-2.5 lg:space-y-0 items-start lg:items-end">
                <span>and I work with</span>
                <input
                  id="companyName"
                  value={values.companyName}
                  onChange={handleChange}
                  type="text"
                  spellCheck="false"
                  placeholder="Company name type here"
                  className="outline-none bg-transparent border-b border-dashed border-zinc-400 text-start lg:text-center text-lg lg:text-xl pb-1 flex-auto lg:flex-1 w-full lg:w-auto"
                />
              </span>
            </p>
            <p className="flex flex-col lg:flex-row space-y-2.5 lg:space-y-0 items-start lg:items-end">
              <span>I’m looking for a developer to help me with</span>
              <input
                id="goal"
                value={values.goal}
                onChange={handleChange}
                type="text"
                spellCheck="false"
                placeholder="Your goal type here"
                className="outline-none bg-transparent border-b border-dashed border-zinc-400 text-start lg:text-center text-lg lg:text-xl pb-1 flex-auto lg:flex-1 w-full lg:w-auto"
              />
            </p>
            <p className="flex flex-col lg:flex-row space-y-2.5 lg:space-y-0 items-start lg:items-end">
              <span>You can reach me at</span>
              <input
                id="email"
                value={values.email}
                onChange={handleChange}
                type="text"
                spellCheck="false"
                placeholder="Enter your email*"
                className="outline-none bg-transparent border-b border-dashed border-zinc-400 text-start lg:text-center text-lg lg:text-xl pb-1 flex-auto lg:flex-1 w-full lg:w-auto"
              />
              <span className="hidden lg:inline">to start the conversation.</span>
            </p>
            <p className="flex flex-col lg:flex-row space-y-2.5 lg:space-y-0 items-start lg:items-end">
              <span>Optionally, i’m sharing more:</span>
              <input
                id="productDetails"
                value={values.productDetails}
                onChange={handleChange}
                type="text"
                spellCheck="false"
                placeholder="Product details type here"
                className="outline-none bg-transparent border-b border-dashed border-zinc-400 text-start lg:text-center text-lg lg:text-xl pb-1 flex-auto lg:flex-1 w-full lg:w-auto"
              />
            </p>
          </div>
          <div className="mt-10 flex justify-end">
            <SubmitButton isLoading={isLoading} />
          </div>
        </form>
      </div>
      <Snackbar type="success" openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar}>
        Success! I'll reach out to you soon!
      </Snackbar>
    </>
  );
}
