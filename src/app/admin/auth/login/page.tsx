"use client";
import { InputIcon } from "@/components/custom";
import Button from "@/components/ui";
import { authClient } from "@/lib/auth-client";
import { LoginSchema } from "@/lib/schema/AuthSchema";
import { Mail, Lock } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import z from "zod";
import { useRouter } from "next/navigation";
import { CheckAccountIsAdmin } from "@/lib/functions/CheckAccountIsAdmin";

const Login = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      admin_email: formData.get("admin_email")?.toString() || "",
      admin_password: formData.get("admin_password")?.toString() || "",
    };

    const result = LoginSchema.safeParse(data);
    if (!result.success) {
      const tree = z.treeifyError(result.error);
      setErrors(tree.properties);
      setLoading(false);
      return;
    }

    if (result.success) {
      setErrors({});
      const admin_status = await CheckAccountIsAdmin(result.data.admin_email);
      if (!admin_status.exists) {
        toast.error("Invalid Email or Password", {
          position: "top-center",
          richColors: true,
        });
        setLoading(false);
        return;
      } else if (!admin_status.isAdmin) {
        toast.error("Restricted Account Access", {
          position: "top-center",
          richColors: true,
        });
        setLoading(false);
        return;
      } else {
        const { data } = await authClient.signIn.email(
          {
            email: result.data.admin_email,
            password: result.data.admin_password,
            callbackURL: "/admin/dashboard",
            rememberMe: false,
          },
          {
            onSuccess: () => {
              toast.success(
                `Welcome Back! Redirecting....`,
                {
                  position: "top-center",
                  richColors: true,
                },
              );
            },
            onError: (ctx) => {
              toast.error(ctx.error.message, {
                position: "top-center",
                richColors: true,
                duration: 5000,
                dismissible: true,
              });
              setLoading(false);
            },
          },
        );
      }
    }
  };

  return (
    <div className="grid w-full h-[70vh] place-content-center place-items-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-surface-elevated flex flex-col gap-3 rounded-lg p-8">
          <h1 className="text-xl font-bold tracking-widest text-center">
            Admin Login
          </h1>
          <div className="flex flex-col gap-1.5">
            <InputIcon
              type="email"
              name="admin_email"
              placeholder="Email Address"
              icon={Mail}
              invalid={errors.admin_email?.errors[0]}
            />
            {errors.admin_email?.errors[0] && (
              <span className="input-control-invalid-helper">
                {errors.admin_email.errors[0]}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <InputIcon
              type="password"
              name="admin_password"
              placeholder="Enter Password"
              icon={Lock}
              invalid={errors.admin_password?.errors[0]}
            />
            {errors.admin_password?.errors[0] && (
              <span className="input-control-invalid-helper">
                {errors.admin_password.errors[0]}
              </span>
            )}
          </div>
          <Button type="submit" disabled={loading} className="w-1/2 mx-auto">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
