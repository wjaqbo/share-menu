"use client";

import { useFormState } from "react-dom";

import { shareMeal } from "@/lib/actions";
import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

// export const metadata = {
//   title: "Share",
//   description: "Share Page",
// };
export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className="my-20 space-y-8">
        <h1 className="text-5xl font-bold">
          Share your{" "}
          <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="text-lg font-light">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <section className="my-8 text-lg">
        <form action={formAction} className="flex max-w-[40rem] flex-col gap-8">
          <div className="flex gap-4">
            <p className="flex w-full flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                className="rounded-md bg-slate-900 px-4 py-2 font-medium"
              />
            </p>
            <p className="flex w-full flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="rounded-md border border-slate-800 bg-slate-900 px-4 py-2 font-medium"
              />
            </p>
          </div>
          <p className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              className="rounded-md border border-slate-800 bg-slate-900 px-4 py-2 font-medium"
            />
          </p>
          <p className="flex flex-col gap-2">
            <label htmlFor="summary">Summary</label>
            <textarea
              id="summary"
              name="summary"
              placeholder="Summary"
              required
              rows={2}
              maxLength={200}
              className="rounded-md border border-slate-800 bg-slate-900 px-4 py-2 font-medium"
            />
          </p>
          <p className="flex flex-col gap-2">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              placeholder="Instructions"
              required
              rows={6}
              className="rounded-md border border-slate-800 bg-slate-900 px-4 py-2 font-medium"
            />
          </p>
          <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className="text-right">
            <MealsFormSubmit />
          </p>
        </form>
      </section>
    </>
  );
}
