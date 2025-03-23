import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden w-full h-[400px] flex">
      <div className="flex space-x-10 animate-scroll">
        <img
          src="https://moonpreneur.com/assets/images/Home/newhome/top-banner-girl.webp"
          alt="Banner 1"
          className="w"
        />
      </div>
    </div>
  );
}

