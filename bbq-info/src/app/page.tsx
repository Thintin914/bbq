import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full min-h-screen h-fit bg-[#9DCDF1] text-white p-2 flex flex-col justify-center items-center">
      <p className=" font-semibold mb-5 text-lg">Yeaaa BBQ!</p>
      <p>Location:</p>
      <iframe src="https://www.google.com/maps/embed?pb=!4v1713358438439!6m8!1m7!1shREAn5wpGTq1DEXrKIf8eg!2m2!1d22.50099069488498!2d114.1671546107569!3f189.9881867028298!4f-8.677111205758791!5f0.7820865974627469" width="600" height="450" loading="lazy"></iframe>
      <Link className=" underline cursor-pointer" href={'https://www.google.com/maps/@22.5009907,114.1671546,3a,75y,189.99h,81.32t/data=!3m9!1e1!3m7!1shREAn5wpGTq1DEXrKIf8eg!2e0!7i16384!8i8192!9m2!1b1!2i46?entry=ttu'}>Link Here!</Link>
      <p className=" mt-5">Traffic:</p>
      <div className=" inline-flex justify-center items-center gap-2">
        <p>You can take</p>
        <Link href={'https://hkbus.fandom.com/wiki/%E5%9F%8E%E5%B7%B479X%E7%B7%9A'} className=" underline cursor-pointer">Bus 79X</Link>
        <p>to go to the last station - 皇后山邨總站 Queen's Hill Estate B/T,</p>
        <p>and then walk to my bbq place within 10 minutes!</p>
      </div>
      <p className=" mt-10">Yeaaaaaaaaa!</p>
    </div>
  );
}
