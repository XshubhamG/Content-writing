# Building forms in React

## editing tsconfig.json

```json
+
+
// shadcn
"baseurl": " ",
"paths": {
    "@/*": ["./src/*"]
}
+
+
```

## setting up shadcn

```bash
npm install -D @types/node
```

Replace everything in vite.config.ts with the following:

```ts
import path form "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
    plugin: [react()],
    resolve: {
        alias: {
            "@": path.resolve(_dirname, "./src"),
        }
    }
})
```

Setup the project with shadcn

```bash
npx shadcn-ui@latest init

// And ans these questions accordingly
- Would you like to use TypeScript (recommended)? no / yes
- Which style would you like to use? › (Default)
- Which color would you like to use as base color? › (Slate)
- Where is your global CSS file? › › (src/index.css)
- Do you want to use CSS variables for colors? › (no) / (yes)
- Where is your tailwind.config.js located? › (tailwind.config.js)
- Configure the import alias for components: › (@/components)
- Configure the import alias for utils: › (@/lib/utils)
- Are you using React Server Components? › no / yes (no)
```

That's it, we can now start adding components to our project

```bash
npx shadcn-ui@latest add button
```

## Adding form component

we will take a look at building forms with `react-hook-form` and `zod`. We're going to use a `<FormField>`
component to compose accessible forms using Radix UI components.

1. Features

   - Composable components for building forms.
   - A `<FormField />` component for building controlled form fields.
   - Form validation using `zod`.
   - Handles accessibility and error messages.
   - Uses `React.useId()` for generating unique IDs.
   - Applies the correct `aria` attributes to form fields based on states.
   - **You have the full control over the markup and styling**.

2. Installation

```bash
npx shadcn-ui@latest add form
```

3. Create a form schema

- Create a file `./src/libs/validation/index.ts`.

```ts
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});
```

4. Define a form

```ts
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const ProfileForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
};
```

1. Build the form

```ts
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function ProfileForm() {
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField name="username" control={form.control} render={{field} => (
        <FormControl
            id={field.id}
            isInvalid={field.isInvalid}
            isDisabled={field.isDisabled}
          >
            <FormLabel>Username</FormLabel>
            <FormItem>
              <Input
                {...field}
                placeholder="Username"
                aria-describedby={field.id}
              />
            </FormItem>
            <FormMessage>{field.error?.message}</FormMessage>
          </FormControl
        )} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```
