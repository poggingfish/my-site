import { ArticleNoSeperator } from ".";
import Link from "next/link"
import Image from "next/image"
function URL(ref, text){
    return (
        <a href={ref} target="_blank" rel="noreferrer" className="underline text-blue-300 hover:text-blue-200">{text}</a>
    )
}
export default function About(){
    return (
    <div>
    <style>
        {`body{
            background: rgb(40, 39, 39);
        }`}
    </style>
    <title>About</title>
    <div className="flex top-0 left-0 h-10 w-screen m-0 justify-center bg-cyan-600 text-center shadow-lg text-cyan-100">
      <Link href="/" legacyBehavior>
        <a className="bg-cyan-100 text-cyan-600 ml-2 mr-2 mt-2 mb-2 pl-2 pr-2">Home</a>
      </Link>
      <p className="self-center text-2xl">Poggingfish</p>
      <Link href="about" legacyBehavior>
        <a className="bg-cyan-100 text-cyan-600 ml-2 mr-2 mt-2 mb-2 pl-2 pr-2">About</a>
      </Link>
    </div>
    <p className="pt-5 text-3xl text-center mb-3">About me!</p>
    <hr className="mt-4"></hr>
    {ArticleNoSeperator("Intro",`Hello, my name is Luna! I go by she/her pronouns and I am transgender! I am a hobbyist developer and I
    program mostly useless stuff.`)}
    {ArticleNoSeperator("Interests","Programming, Kernel development, Self hosting, Language Development, Linux, Electronics")}
    {ArticleNoSeperator("Socials",(
    <div>
        <ul>
            {URL("https://pogging.fish/@poggingfish","Mastodon")}<br></br>
            {URL("https://github.com/poggingfish","Github")}<br></br>
        </ul>
    </div>
    ))}
    {ArticleNoSeperator("This site is powered by", (
        <div>
            {URL("https://tailwindcss.com/","Tailwind CSS")}<br></br>
            {URL("https://nextjs.org/","Next.js")}<br></br>
            {URL("https://nodejs.org/en/","Node.js")}
        </div>
    ))}
    {ArticleNoSeperator("blinkies n' buttons", (
        <div>
        <div className="flex max-w-xl">
            <Image className="pr-4" src="/88x312.gif" alt=""></Image>
            <Image className="pr-4" src="/computermonitor.gif" alt=""></Image>
            <Image className="pr-4" src="/webdesign.gif" alt=""></Image>
            <Image className="pr-4" src="/nft.gif" alt=""></Image>
            <Image className="pr-4" src="/saynotoweb3.gif" alt=""></Image>
            <Image className="pr-4" src="/nb.png" alt=""></Image>
            <Image className="pr-4" src="/antinft.gif" alt=""></Image>
        </div>
        <div className="flex">
            <Image className="pr-4" src="/queer.png" alt=""></Image>
            <Image className="pr-4" src="/LocalNetwork.gif" alt=""></Image>
        </div>
        <div className="flex">
            <Image className="pr-4" src="/dablinkie.gif" alt=""></Image>
            <Image className="pr-4" src="/herobrine.gif" alt=""></Image>
            <Image className="pr-4" src="/cishets.gif" alt=""></Image>
            <Image className="pr-4" src="/gayfrogs.gif" alt=""></Image>
            <a href="http://english-1667323514.spampoison.com"><img src= "http://pics8.inxhost.com/images/sticker.gif" border="0" width="80" height="15"/></a>
        </div>
        </div>
    ))}
    </div>
    )
}