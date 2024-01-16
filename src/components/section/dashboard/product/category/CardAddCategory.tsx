"use client";
import { toast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Button from "@/components/button/Button";
import { Textarea } from "@/components/ui/textarea";
import { PhotoIcon } from "@heroicons/react/24/outline";

const CardAddCategory = () => {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (value: { email: string; password: string }) => {
    try {
      console.log(value.email, "VALUE");
      console.log(value.password, "VALUE");
      //   const res = await signIn("login-credentials", {
      //     redirect: false,
      //     email: value.email,
      //     password: value.password,
      //     callbackUrl: "/dashboard",
      //   });

      //   console.log(res);

      //   if (!res?.error) {
      //     router.push("/dashboard");
      //   } else {
      //     toast({
      //       title: "Failed to sign in",
      //       description: "Please check your email and password",
      //       variant: "destructive",
      //     });
      //   }
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
    <div className="mx-2">
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
              <FormLabel>Category Name</FormLabel>
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                />
                {/* <Input
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  type="password"
                  size={100}
                  placeholder="Enter your password"
                /> */}
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
                  {errors.password && touched.password && errors.password}
                </FormMessage>
              </div>
            </FormItem>
            <div className="">
              <h2 className="text-sm">Photo</h2>
              <div className="flex w-[60px] items-center justify-center rounded-md bg-slate-100 aspect-square border border-slate-200">
                <PhotoIcon className="w-5 h-5  text-slate-500" />
              </div>
            </div>
            <Button
              className="w-full mt-8 bg-[#4DACE0] text-white flex-1 rounded-md py-1"
              disabled={isSubmitting}
              // isLoading={isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CardAddCategory;
