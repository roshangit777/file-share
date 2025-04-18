"use client";
import Constant from "@/app/_utils/Constant";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname(); // used to force re-render on path change

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <Image src="/logo.svg" width={100} height={100} alt="logo" />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to FileShare
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              {Constant.desc}
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <Image src="/logo.svg" width={100} height={100} alt="logo" />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to DriftShare
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                {Constant.desc}
              </p>
            </div>

            {/* 👇 Force SignIn to re-render when path changes */}
            <SignIn
              key={pathname}
              signUpUrl="/sign-up"
              redirectUrl="/dashboard"
            />
          </div>
        </main>
      </div>
    </section>
  );
}
