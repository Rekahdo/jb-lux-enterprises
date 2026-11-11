'use client'

import { toast } from "sonner";
import z from "zod";
import { ButtonImplProps } from "@/components/shared/button-impl";
import { loginSchema, signUpSchema } from "@/schemas/zod-schemas";
import { somethingWentWrong } from "@/convex/errors";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { UseFormReturn } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { AppForm, fieldType } from "./form";
import { LogIn, UserRoundPlus } from "lucide-react";
import { cn } from "cn";

// ==========================================
// SHARED CONFIGURATIONS
// ==========================================

const loginDefaults: z.infer<typeof loginSchema> = {
    email: "",
    password: "",
};

const loginFields: fieldType<z.infer<typeof loginSchema>>[] = [
    {
        name: "email",
        label: "Email",
        placeholder: "jane@example.com",
        type: "email",
    },
    {
        name: "password",
        label: "Password",
        placeholder: "************",
        type: "password",
    },
];

const signUpDefaults: z.infer<typeof signUpSchema> = {
    name: "",
    email: "",
    password: "",
};

const signUpFields: fieldType<z.infer<typeof signUpSchema>>[] = [
    { name: "name", label: "Full Name", placeholder: "Joe Doe" },
    {
        name: "email",
        label: "Email",
        placeholder: "jane@example.com",
        type: "email",
    },
    {
        name: "password",
        label: "Password",
        placeholder: "************",
        type: "password",
    },
];

// ==========================================
// EXTERNAL SUBMIT FUNCTIONS
// ==========================================

export async function handleSignUpSubmit({ parsed, form, onSuccessAction }: {
    parsed: z.infer<typeof signUpSchema>,
    form?: UseFormReturn<z.infer<typeof signUpSchema>>,
    onSuccessAction?: () => void
}) {
    const parsedData = signUpSchema.safeParse(parsed);
    if (!parsedData.success) throw somethingWentWrong();

    await authClient.signUp.email({
        name: parsedData.data.name,
        email: parsedData.data.email,
        password: parsedData.data.password,
        fetchOptions: {
            onSuccess: () => {
                toast.success("Signed up successfully");
                onSuccessAction?.();
            },
            onError: (error: any) => {
                toast.error(error.error.message);
            },
        },
    });
}

export async function handleLoginSubmit({ parsed, form, onSuccessAction }: {
    parsed: z.infer<typeof loginSchema>,
    form?: UseFormReturn<z.infer<typeof loginSchema>>,
    onSuccessAction?: () => void
}) {
    const parsedData = loginSchema.safeParse(parsed);
    if (!parsedData.success) {
        toast.error(somethingWentWrong().message);
        return;
    }

    try {
        const { error } = await authClient.signIn.email({
            ...parsedData.data,
        });

        if (error) {
            toast.error(error.message || "Failed to login");
            return;
        }

        toast.success("Logged in successfully");
        onSuccessAction?.();
    } catch {
        toast.error("An unexpected error occurred");
    }
}

// ==========================================
// CARD FORMS (INLINE)
// ==========================================

interface FormProps {
    onSuccessAction?: () => void;
    className?: string;
}

export function CardSignUpForm({ onSuccessAction, className }: FormProps) {
    return (
        <AppForm<z.infer<typeof signUpSchema>>
            title="Sign Up"
            size="lg"
            submitText="Sign Up"
            schema={signUpSchema}
            defaultValues={signUpDefaults}
            fields={signUpFields}
            onSubmit={(parsed, form) => handleSignUpSubmit({ parsed, form, onSuccessAction })}
            className={cn(" animate-into-view", className)}
        />
    );
}

export function CardLoginForm({ onSuccessAction, className }: FormProps) {
    return (
        <AppForm<z.infer<typeof loginSchema>>
            title="Login"
            size="md"
            submitText="Login"
            schema={loginSchema}
            defaultValues={loginDefaults}
            fields={loginFields}
            onSubmit={(parsed, form) => handleLoginSubmit({ parsed, form, onSuccessAction })}
            className={cn(" animate-into-view", className)}
        />
    );
}

// ==========================================
// DIALOG FORMS
// ==========================================

interface DialogFormProps extends FormProps {
    buttonProps?: ButtonImplProps;
}

export function DialogSignUpForm({ buttonProps, className, onSuccessAction }: DialogFormProps) {
    return (
        <AppForm<z.infer<typeof signUpSchema>>
            render={{
                type: "dialog",
                triggerText: "Sign Up",
                triggerIcon: <UserRoundPlus />,
                triggerVariant: "outline",
                triggerProps: buttonProps,
            }}
            title="Sign Up"
            size="lg"
            submitText="Sign Up"
            schema={signUpSchema}
            defaultValues={signUpDefaults}
            fields={signUpFields}
            onSubmit={(parsed, form) => handleSignUpSubmit({ parsed, form, onSuccessAction })}
            className={cn("animate-into-view", className)}
        />
    );
}

export function DialogLoginForm({ buttonProps, className, onSuccessAction }: DialogFormProps) {
    return (
        <AppForm<z.infer<typeof loginSchema>>
            render={{
                type: "dialog",
                triggerText: "Login",
                triggerIcon: <LogIn />,
                triggerProps: buttonProps,
            }}
            title="Login"
            size="sm"
            submitText="Login"
            schema={loginSchema}
            defaultValues={loginDefaults}
            fields={loginFields}
            onSubmit={(parsed, form) => handleLoginSubmit({ parsed, form, onSuccessAction })}
            className={cn("animate-into-view", className)}
        />
    );
}