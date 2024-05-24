"use client";

import { Button } from "./ui/button";
import { toast } from "sonner";
import { useTransition } from "react";
import { useLanguage } from "@/lib/providers";
import { contactSection, formDetails, buttonLabels } from "@/lib/data";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import Github from "@/assets/github";
import Instagram from "@/assets/instagram";
import LinkedIn from "@/assets/linkedin";
import Gmail from "@/assets/mail";
import WhatsApp from "@/assets/whatsapp";
import X from "@/assets/x";

export default function ContactSection() {
  const { language } = useLanguage();
  const [pending, startTransition] = useTransition();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      await fetch("/api/contact", {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (!response.ok) {
          if (!response.ok) {
            toast(
              `${
                language === "EN"
                  ? formDetails.error.title.en
                  : formDetails.error.title.fr
              }`,
              {
                description: `${
                  language === "EN"
                    ? formDetails.error.description.en
                    : formDetails.error.description.fr
                }`,
              }
            );
          } else {
            toast(
              `${
                language === "EN"
                  ? formDetails.success.title.en
                  : formDetails.success.title.fr
              }`,
              {
                description: `${
                  language === "EN"
                    ? formDetails.success.description.en
                    : formDetails.success.description.fr
                }`,
              }
            );
            form.reset();
          }
        }
      });
    });
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-300 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid items-center justify-center gap-4 text-center md:gap-8 lg:grid-cols-2 lg:text-left">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
              {language === "EN"
                ? contactSection.subtitle.en
                : contactSection.subtitle.fr}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {language === "EN"
                ? contactSection.title.en
                : contactSection.title.fr}
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl?text-xl/relaxed dark:text-gray-400">
              {language === "EN"
                ? contactSection.description.en
                : contactSection.description.fr}
            </p>
          </div>
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  {language === "EN"
                    ? formDetails.name.en
                    : formDetails.name.fr}
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Lee Robinson"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">
                  {language === "EN"
                    ? formDetails.email.en
                    : formDetails.email.fr}
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="leerob@vercel.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">
                  {language === "EN"
                    ? formDetails.message.en
                    : formDetails.message.fr}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button className="w-full" type="submit" disabled={pending}>
                {pending ? (
                  <div className="flex items-center justify-center h-5 w-5 animate-spin rounded-full border-2 border-current border-r-transparent mr-3" />
                ) : (
                  <span>
                    {language === "EN"
                      ? buttonLabels.message.en
                      : buttonLabels.message.fr}
                  </span>
                )}
              </Button>
            </form>
            <br />
            <div className="flex items-center justify-center gap-4">
              <Link aria-label="github" href="https://github.com/owentack">
                <Github className="h-8 w-8" />
              </Link>
              <Link
                aria-label="instagram"
                href="https://instagram.com/ilu_owen"
              >
                <Instagram className="h-8 w-8" />
              </Link>
              <Link aria-label="linkedin" href="https://linkedin.com/j1d30f0r">
                <LinkedIn className="h-8 w-8" />
              </Link>
              <Link aria-label="mail" href="mailto:jenukohaefobi@gmail.com">
                <Gmail className="h-8 w-8" />
              </Link>
              <Link aria-label="whatsapp" href="tel:+2348097633252">
                <WhatsApp className="h-8 w-8" />
              </Link>
              <Link aria-label="x" href="https://twitter.com/oweneefobi">
                <X className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
