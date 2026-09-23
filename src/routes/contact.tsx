import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";

const sendEmailFn = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; brief: string }) => data)
  .handler(async ({ data }) => {
    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "ruhaankh674@gmail.com",
        pass: process.env.SMTP_PASS || "your_app_password_here", // Add your app password in .env
      },
    });

    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: "ruhaankh674@gmail.com",
      subject: `New Project Brief from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\nBrief:\n${data.brief}`,
    });

    return { success: true };
  });

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact R2 DreamForge | Start a Project" },
      {
        name: "description",
        content:
          "Contact R2 DreamForge about marketing, web and app development, custom software or AI agent projects.",
      },
      { property: "og:title", content: "Contact R2 DreamForge" },
      {
        property: "og:description",
        content:
          "Share your goals and start a conversation about your next digital project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      brief: formData.get("brief") as string,
    };

    setStatus("loading");
    try {
      await sendEmailFn({ data });
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main>
      <section className="blueprint">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 gap-8 px-5 py-12 sm:gap-10 sm:px-8 sm:py-20 lg:py-28">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-orange">
              Contact — Project brief
            </p>
            <h1 className="mt-5 text-4xl leading-[1.1] sm:mt-7 sm:text-5xl sm:leading-[1.05]">Tell us what needs to move.</h1>
            <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-brand-paper/65 sm:mt-6 sm:text-lg">
              Share your business goal, the current challenge and the outcome you want.
            </p>
          </div>
          <form
            className="grid gap-4 border border-brand-line/50 bg-brand-ink-2/50 p-5 sm:gap-5 sm:p-6 lg:col-span-7"
            onSubmit={handleSubmit}
          >
            <label className="text-sm text-brand-paper/65">
              Name
              <input
                required
                name="name"
                className="mt-2 w-full border border-brand-line/50 bg-brand-ink px-4 py-3 text-brand-paper outline-none focus:border-brand-orange disabled:opacity-50"
                disabled={status === "loading"}
              />
            </label>
            <label className="text-sm text-brand-paper/65">
              Work email
              <input
                required
                name="email"
                type="email"
                className="mt-2 w-full border border-brand-line/50 bg-brand-ink px-4 py-3 text-brand-paper outline-none focus:border-brand-orange disabled:opacity-50"
                disabled={status === "loading"}
              />
            </label>
            <label className="text-sm text-brand-paper/65">
              What can we help you build?
              <textarea
                required
                name="brief"
                rows={6}
                className="mt-2 w-full resize-y border border-brand-line/50 bg-brand-ink px-4 py-3 text-brand-paper outline-none focus:border-brand-orange disabled:opacity-50"
                disabled={status === "loading"}
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-between bg-brand-orange px-6 py-4 text-left font-semibold text-brand-ink disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"} <span>→</span>
            </button>
            {status === "success" && (
              <p className="text-green-500 text-sm mt-2 font-medium">
                Your message has been sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm mt-2 font-medium">
                Failed to send message. Please try again or ensure SMTP credentials are correct.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}