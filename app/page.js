import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <h1 className="font mt-7 py-2 text-center font-primary text-4xl leading-relaxed text-white sm:py-4 md:text-6xl lg:mt-10 lg:text-6xl">
          World's Finest Fragnance
        </h1>
        <p className="mx-auto max-w-xl px-2 text-center font-primary text-base text-white">
          Danton Parfums in Chennai, TN, is your destination for all your
          fragrance needs. With a vast selection of perfumes, colognes, and body
          sprays, you can find yoour perfect scent. Shop now to experience the
          best of Indian fragrances!
        </p>
        <div className="flex place-content-center">
          <div></div>
          <div>
            <Image
              width={500}
              height={74}
              src={"/images/perfume 1.png"}
              className="transform animate-pulse duration-500 ease-in-out hover:scale-110"
            ></Image>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
