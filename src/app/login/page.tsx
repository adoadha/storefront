"use client";

import { AxiosError } from "axios";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const LoginPage = () => {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (value: { email: string; password: string }) => {
    try {
      console.log(value.email, "VALUE");
      console.log(value.password, "VALUE");
      const res = await signIn("login-credentials", {
        redirect: false,
        email: value.email,
        password: value.password,
        callbackUrl: "/dashboard",
      });

      console.log(res);

      if (!res?.error) {
        router.push("/dashboard");
      } else {
        toast({
          title: "Failed to sign in",
          description: "Please check your email and password",
          variant: "destructive",
        });
      }
    } catch (error) {
      let message = "Unknown error";
      if (error instanceof AxiosError) {
        message = error.message;
      }

      toast({
        title: "Failed to sign in",
        description: message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex w-full h-screen bg-slate-200">
      <div className="flex-1 ">Banner Place</div>
      <div className="flex flex-1 ">
        <div className=" w-[32rem] m-auto items-center">
          <Card>
            <CardContent className="p-10">
              <Formik
                initialValues={initialValues}
                validationSchema={SignInSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit} className="">
                    <FormItem className="space-y-2">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </FormControl>
                      {errors.email && touched.email && (
                        <FormMessage>{errors.email}</FormMessage>
                      )}
                    </FormItem>
                    <FormItem className="mt-4 space-y-2">
                      <FormLabel>Kata Sandi</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          name="password"
                          type="password"
                          size={100}
                          placeholder="Enter your password"
                        />
                      </FormControl>
                      <div
                        className={cn(
                          "flex",
                          errors.password && touched.password
                            ? "justify-between"
                            : "justify-end"
                        )}
                      >
                        <FormMessage>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </FormMessage>
                        <Link
                          href="/"
                          className="text-sm text-right underline text-primary"
                        >
                          Lupa kata sandi
                        </Link>
                      </div>
                    </FormItem>
                    <Button
                      className="w-full mt-8"
                      disabled={isSubmitting}
                      // isLoading={isSubmitting}
                    >
                      Login
                    </Button>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
