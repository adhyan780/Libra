import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import UploadForm from "@/components/UploadForm";

const Page = () => {
  return (
    <main className="wrapper flex flex-col gap-10 pb-20 pt-28">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-fit transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to library</span>
      </Link>

      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-serif font-bold text-foreground">
          Add a New Book
        </h1>
        <p className="text-sm text-muted-foreground">
          Upload a PDF and select an AI voice persona to start a voice conversation.
        </p>
      </section>

      <UploadForm />
    </main>
  );
};

export default Page;