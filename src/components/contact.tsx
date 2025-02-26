import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

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
import { Textarea } from "./ui/textarea";
import { Container } from "./container";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface MessageEmailProps {
  type: "error" | "success";
  messageSendEmail: string;
}

export const Contact = () => {
  const { t } = useTranslation();
  const [messageEmail, setMessageEmail] = useState<MessageEmailProps>();

  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: t("contactsContent.nameMinMessage") })
      .max(100, { message: t("contactsContent.nameMaxMessage") }),
    email: z
      .string()
      .min(1, { message: t("contactsContent.emailRequiredMessage") })
      .email(t("contactsContent.emailInvalidMessage")),
    message: z
      .string()
      .min(3, { message: t("contactsContent.messageMinMessage") })
      .max(5000, { message: t("contactsContent.messageMaxMessage") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    formState: { isSubmitting, errors },
    reset,
  } = form;

  const sendEmail = async (values: z.infer<typeof formSchema>) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        values,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      );
      setMessageEmail({
        type: "success",
        messageSendEmail: t("contactsContent.messageSuccesSendEmail"),
      });
      reset();
    } catch (error) {
      setMessageEmail({
        type: "error",
        messageSendEmail: t("contactsContent.messageErrorSendEmail"),
      });
    }
  };

  return (
    <Container>
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-5 lg:gap-10 mb-5">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold">
          {t("contactsContent.contactsTitle")}
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(sendEmail)}
            className="space-y-8 bg-white dark:bg-gray-800 p-10 rounded-2xl w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contactsContent.nameLabel")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("contactsContent.namePlaceHolder")}
                      {...field}
                      className="bg-gray-100 dark:bg-gray-900"
                    />
                  </FormControl>
                  <FormDescription>
                    {t("contactsContent.nameDescription")}
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
                    <Input
                      type="email"
                      placeholder={t("contactsContent.emailPlaceHolder")}
                      className="bg-gray-100 dark:bg-gray-900"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {t("contactsContent.emailDescription")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contactsContent.messageLabel")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("contactsContent.messagePlaceHolder")}
                      {...field}
                      className="bg-gray-100 dark:bg-gray-900 resize-none"
                    />
                  </FormControl>
                  <FormDescription>
                    {t("contactsContent.messageDescription")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="text-gray-100 dark:text-gray-900 bg-gray-800 dark:bg-gray-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("contactsContent.submitBtnLoading") : t("contactsContent.submitBtn")}
            </Button>
            {messageEmail && messageEmail.type === "error" && (
              <div className="p-4 rounded-lg bg-red-500 text-white">
                <p>{messageEmail.messageSendEmail}</p>
              </div>
            )}
            {messageEmail && messageEmail.type === "success" && (
              <div className="p-4 rounded-lg bg-green-500 text-white">
                <p>{messageEmail.messageSendEmail}</p>
              </div>
            )}
          </form>
        </Form>
      </div>
    </Container>
  );
};
