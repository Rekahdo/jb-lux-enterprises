'use client'

import { FieldGroup } from "@/components/ui/field";
import { Controller, useForm, FieldValues, Path, UseFormReturn, DefaultValues, FieldValue } from "react-hook-form";
import { ReactNode, useTransition } from "react";
import { H2 } from "@/components/shared/headings";
import { ButtonImpl, ButtonImplProps, ButtonVariantProps } from "@/components/shared/button-impl";
import AppField, { AppFieldProps } from "./field";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { cn } from "cn";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "../ui/dialog";

type CardType = {
    type: "card";
}

type DialogType = {
    type: "dialog";
    triggerText: string;
    triggerIcon?: ReactNode;
    triggerVariant?: ButtonImplProps["variant"];
    triggerProps?: Omit<ButtonImplProps, "variant">;
}

export type fieldType<TValues extends FieldValues> = Omit<AppFieldProps<TValues, Path<TValues>>, "field" | "fieldState"> & {
    name: Path<TValues>
}

export interface AppFormProps<TValues extends FieldValues> {
    title: string;
    submitText: string;
    fields: fieldType<TValues>[];
    render?: CardType | DialogType;
    size: "sm" | "md" | "lg";
    schema: ZodType<TValues, any, any>;
    defaultValues: DefaultValues<TValues>;
    onSubmit: (values: TValues, form: UseFormReturn<TValues>) => void | Promise<void>;
    className?: string;
}

export function AppForm<TValues extends FieldValues>({
    render = { type: "card" },
    size,
    schema,
    defaultValues,
    onSubmit,
    className,
    title,
    submitText,
    fields,
}: AppFormProps<TValues>) {
    const [isPending, startTransition] = useTransition();

    const form = useForm<TValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const { handleSubmit, reset, control } = form;

    const sizeClass = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
    }[size];

    function submit(values: TValues) {
        startTransition(async () => {
            await onSubmit(values, form);
        });
    }

    const paddingStyle = "p-6! md:p-8!";
    const gapStyle = "gap-6! md:gap-8!";
    const footerStyle = cn(
        "bg-transparent! border-0! p-0! m-0! gap-4! flex! flex-col-reverse!",
        "rounded-b-xl! sm:flex-row! sm:justify-end!",
    );

    const Title = () => {
        return (<H2 title={title} />)
    }

    const Content = () => {
        return (
            <FieldGroup className={gapStyle}>
                {fields.map((f) => (
                    <Controller
                        key={f.name}
                        name={f.name}
                        control={control}
                        render={({ field, fieldState }) => (
                            <AppField<TValues, Path<TValues>>
                                field={field}
                                fieldState={fieldState}
                                label={f.label}
                                placeholder={f.placeholder}
                                type={f.type}
                                important={f.important}
                                as={f.as}
                                startIcon={f.startIcon}
                                endIcon={f.endIcon}
                                clearable={f.clearable}
                                accept={f.accept}
                                multiple={f.multiple}
                                autoComplete={f.autoComplete}
                                rows={f.rows}
                            />
                        )}
                    />
                ))}
            </FieldGroup>
        )
    }

    const FooterButtons = () => {
        return (
            <>
                <ButtonImpl
                    variant={'destructive'}
                    isDisabled={isPending}
                    type="reset"
                    onClick={() => reset()}
                    text={"reset"}
                    height="md"
                />

                <ButtonImpl
                    isPending={isPending}
                    type="submit"
                    text={submitText}
                    height="md"
                />
            </>
        );
    }

    return (
        <>{render.type === "card" ?
            (
                <Card className={cn("w-full shadow-lg rounded-2xl flex flex-col",
                    paddingStyle, gapStyle, sizeClass, className)}>
                    <CardHeader className="p-0!">
                        <Title />
                    </CardHeader>

                    <form onSubmit={handleSubmit(submit)} className={cn("flex flex-col", gapStyle)}>
                        <Content />

                        <CardFooter className={footerStyle}>
                            <FooterButtons />
                        </CardFooter>
                    </form>
                </Card>
            ) : (
                <Dialog>
                    <DialogTrigger
                        className={className}
                        render={
                            <ButtonImpl
                                text={render.triggerText}
                                icon={render.triggerIcon}
                                variant={render.triggerVariant}
                                {...render.triggerProps}
                            />
                        }
                    />

                    <DialogContent className={cn("shadow-2xl p-0! max-sm:w-9/10", paddingStyle, sizeClass)}>
                        <DialogHeader className="p-0!">
                            <DialogTitle>
                                <Title />
                            </DialogTitle>
                        </DialogHeader>

                        <form onSubmit={handleSubmit(submit)} className={cn("flex flex-col", gapStyle)}>
                            <Content />

                            <DialogFooter className={cn(footerStyle)}>
                                <DialogClose
                                    onClick={() => reset()}
                                    render={
                                        <ButtonImpl
                                            variant="outline"
                                            text={"Cancel"}
                                            height="md"
                                        />
                                    }
                                />

                                <FooterButtons />
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            )
        }</>
    );
}