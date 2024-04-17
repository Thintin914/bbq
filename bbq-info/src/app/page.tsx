import Link from "next/link";

export const dynamic = "force-dynamic";

export default function page() {
  return (
    <div className=" w-full min-h-screen h-fit bg-[#9DCDF1] text-white p-2 flex flex-col justify-center items-center">
      <p className=" font-semibold mb-5 text-lg">Yeaaa BBQ!</p>
      <p>Location:</p>
      <iframe src="https://www.google.com/maps/embed?pb=!4v1713359632930!6m8!1m7!1ssJkDLcP9cT3bZraeIWj14g!2m2!1d22.50099518653798!2d114.1670033918322!3f213.57240664844863!4f-21.0897225242678!5f0.7820865974627469" width="600" height="450"  loading="lazy"></iframe>
      <Link className=" underline cursor-pointer" href={"https://www.google.com/maps/@22.5010071,114.1669033,3a,75y,233.86h,69.98t/data=!3m6!1e1!3m4!1sdUX0hSz8zfj8nIndf8TYig!2e0!7i16384!8i8192"}>Link Here!</Link>
      <p className=" mt-5">Traffic:</p>
      <div className=" inline-flex justify-center items-center gap-2">
        <p>You can take</p>
        <Link href={"https://hkbus.fandom.com/wiki/%E5%9F%8E%E5%B7%B479X%E7%B7%9A"} className=" underline cursor-pointer">Bus 79X</Link>
        <p>to go to the last station - 皇后山邨總站 Queen Hill Estate B/T,</p>
        <p>and then walk to my bbq place within 10 minutes!</p>
      </div>
      <p className=" mt-10">Yeaaaaaaaaa!</p>
    </div>
  );
}
