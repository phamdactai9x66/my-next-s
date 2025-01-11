import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return <div className="container">

    <div className="bg-teal-500 text-white sticky">
      <div className="max-w-4xl  mx-auto p-4 flex items-center justify-between">

        <a className="text-2xl" href="/">✅ Header Content</a>

        <button className="text-2xl sm:hidden focus:outline-none">☰</button>

        <nav className=" hidden sm:flex gap-4">
          <a href="#" className="hover:underline text-2xl">Home</a>
          <a href="#" className="hover:underline text-2xl">About</a>
          <a href="#" className="hover:underline text-2xl">Detail Info</a>
        </nav>

      </div>
    </div>

    <main className="max-w-4xl mx-auto p-4 pt-8 sm:py-4 ">
      <section className="flex flex-col-reverse gap-4 items-center justify-between sm:flex-row  ">



        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-3xl font-bold">Hello Next JS</h1>

          <p className="text-lg ">You can create a custom snippet in Visual Studio Code for generating English characters or predefined text. <span className="font-bold text-blue-500 ease-in duration-100 cursor-pointer hover:text-yellow-500">first project</span></p>
        </div>

        <div className="flex justify-center items-center">
          <img src="/next.svg" className="w-1/2" alt="" />
        </div>
      </section>

      <hr className="my-8 bg-gray-500 opacity-25 w-1/2 mx-auto" />

      <section className="text-center  w-1/2 mx-auto flex flex-col gap-4 ">
        <h2 className="text-2xl sm:text-3xl font-bold cursor-pointer hover:underline ">About our scope</h2>

        <div className="flex justify-center bg-white w-fit p-4 rounded-lg">
          <img src="/next.svg" className="w-1/2" alt="" />
        </div>

      </section>
      <hr className="my-8 bg-gray-500 opacity-25 w-1/2 mx-auto" />

      <section className="text-center  w-1/2 mx-auto flex flex-col gap-4 ">
        <h2 className="text-2xl sm:text-3xl font-bold cursor-pointer hover:underline ">About our scope</h2>

        <div className="flex justify-center bg-white w-fit p-4 rounded-lg">
          <img src="/next.svg" className="w-1/2" alt="" />
        </div>

      </section>

      <hr className="my-8 bg-gray-500 opacity-25 w-1/2 mx-auto" />

      <section className="text-center  w-1/2 mx-auto flex flex-col gap-4 ">
        <h2 className="text-2xl sm:text-3xl font-bold cursor-pointer hover:underline ">About our scope</h2>

        <div className="flex justify-center bg-white w-fit p-4 rounded-lg">
          <img src="/next.svg" className="w-1/2" alt="" />
        </div>

      </section>
    </main>

  </div>
}
