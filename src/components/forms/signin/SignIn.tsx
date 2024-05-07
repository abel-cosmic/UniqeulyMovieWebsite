"use client"
import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import z from "zod";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import TextInput from "@/components/inputs/TextInput";
import PasswordInput from "@/components/inputs/PasswordInput";

const schemaValidation = z.object({
  username: z.string(),
  password: z.string().min(8),
});

export function Signin() {
  //   const { mutate, data, isLoading, error, isSuccess } = useLoginAdminMutation();
  const methods = useForm<z.infer<typeof schemaValidation>>({
    resolver: zodResolver(schemaValidation),
    defaultValues: {
      username: "",
      password: "",
    },
  });

const navigate = useRouter();

const onSubmit = async (data: z.infer<typeof schemaValidation>) => {
    console.log(data);
    // mutate({
    //   email_or_phone: data.email_or_phone,
    //   password: data.password,
    // });
    toast({
        title: "Signing in ...",
        description: <p> You are successfully logged in </p>,
    });
    navigate.push("/account");
    // setIsLoading(true);
};

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-md:gap-2"
      >
        <div className="space-y-2">
          <Label className="text-slate-800">UserName</Label>
          <TextInput
            placeholder="dev@ttree.com"
            name="username"
            className="w-96 max-md:w-72"
          />
          <p className="text-red-500">
            {methods.formState.errors.username?.message}
          </p>
        </div>
        <div className="space-y-2">
          <Label className="text-slate-800">Password</Label>
          <PasswordInput
            placeholder="*******"
            name="password"
            className="w-96 max-md:w-72"
          />
        </div>
        <p className="text-red-500">
          {methods.formState.errors.password?.message}
        </p>
        <Link href={"/auth/reset"} className="font-medium text-primary">
          Forgot Password?
        </Link>
        <Button type="submit" className="w-full font-semibold drop-shadow-xl">
          Signin
        </Button>
      </form>
    </FormProvider>
  );
}
