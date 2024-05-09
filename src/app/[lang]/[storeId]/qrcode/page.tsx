import qrCodeImg from "@/assets/qr-code.svg";
import Image from "next/image";
export default function QrCodePage() {
  return (
    <>
      <header className="mt-40 flex flex-col items-center gap-3 text-center">
        <h1 className="animate-slideUp text-5xl font-bold">
          QR code:{" "}
          <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text text-transparent">
            Here
          </span>
        </h1>
        <p className="text-lg font-light">
          Scan the QR code and share it with your friends
        </p>
      </header>
      <section className="my-20 flex justify-center">
        <Image
          src={qrCodeImg}
          alt="QR code"
          className="h-40 w-40 md:h-64 md:w-64 md:p-1"
          priority
        />
      </section>
    </>
  );
}
