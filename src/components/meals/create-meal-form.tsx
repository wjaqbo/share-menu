"use client";

import { useFormState } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { shareMeal } from "@/lib/actions";
import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "User name must be at least 2 characters.",
  }),
  email: z.string().min(4, {
    message: "Email must be at least 4 characters.",
  }),
  title: z.string().min(4, {
    message: "Title must be at least 4 characters.",
  }),
  summary: z.string().min(4, {
    message: "Title must be at least 4 characters.",
  }),
  instructions: z.string().min(4, {
    message: "Title must be at least 4 characters.",
  }),
  image: z
    .any()
    .refine((file) => file?.length == 1, "File is required.")
    .refine((file) => file[0]?.size <= 3000000, `Max file size is 3MB.`),
});

export default function CreateMealForm() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      name: "",
      email: "",
      title: "",
      summary: "",
      instructions: "",
      image: undefined,
    },
    mode: "onChange",
    resolver: zodResolver(FormSchema),
  });

  const imageRef = form.register("image", { required: true });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("title", data.title);
    formData.append("summary", data.summary);
    formData.append("instructions", data.instructions);
    formData.append("image", data.image[0]);

    formAction(formData);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-[40rem] flex-col gap-8"
      >
        <div className="gap-4 md:flex">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} autoComplete="Name" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} autoComplete="Email" />
                </FormControl>
                <FormDescription>This is your public email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} autoComplete="Title" />
              </FormControl>
              <FormDescription>This is your meal title.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Summary"
                  autoComplete="Summary"
                  {...field}
                  rows={2}
                  maxLength={200}
                />
              </FormControl>
              <FormDescription>This is your summary.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Instructions"
                  autoComplete="Instructions"
                  {...field}
                  rows={2}
                  maxLength={200}
                />
              </FormControl>
              <FormDescription>
                This is your meal recepie instructions.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ImagePicker
          label="Image"
          name="image"
          control={form.control}
          imageRef={imageRef}
        />
        {state.message && <p>{state.message}</p>}
        <p className="text-right">
          <MealsFormSubmit />
        </p>
      </form>
    </Form>
  );
}
