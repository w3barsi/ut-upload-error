import Link from "next/link";
import { DefaultUploadButton, UploadButtonForCreate } from "~/components/uploadthing";
import { UploadButton } from "~/utils/uploadthing";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <UploadButtonForCreate for="pic" />

      </div>
    </main>
  );
}
