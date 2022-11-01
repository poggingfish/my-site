import Link from 'next/link'
export function ArticleNoSeperator(title, content){
  return (
    <div>
      <p className="pt-5 text-3xl text-center mb-3">{title}</p>
      <div>
      <div className="m-auto max-w-3xl text-center text-2xl pt-3 pb-3 bg-gray-700">{content}</div>
      </div>
    </div>
  )
}
export function Article(title, date, content){
  return (
    <div>
      <p className="pt-5 text-3xl text-center">{title}</p>
      <p className="pt-1 pb-2 text-1xl text-center text-sky-900">{date}</p>
      <div className='m-auto max-w-3xl border-l-gray-700 border-l-8 border-r-8 border-r-gray-700 bg-gray-700'>
      <div className="text-justify text-2xl pt-3 pb-3 ">{content}</div>
      </div>
      <hr className="mt-4"></hr>
    </div>
  )
}
export default function Home() {
  return (
    <div>
    <title>Articles</title>
    <div className="flex top-0 left-0 h-10 w-screen m-0 justify-center bg-cyan-600 text-center shadow-lg text-cyan-100">
      <Link href="/" legacyBehavior>
        <a className="bg-cyan-100 text-cyan-600 ml-2 mr-2 mt-2 mb-2 pl-2 pr-2">Home</a>
      </Link>
      <p className="self-center text-2xl">Poggingfish</p>
      <Link href="about" legacyBehavior>
        <a className="bg-cyan-100 text-cyan-600 ml-2 mr-2 mt-2 mb-2 pl-2 pr-2">About</a>
      </Link>
    </div>
    <p className="pt-5 text-3xl text-center mb-3">Blog posts</p>
    <hr className="mt-4"></hr>
    {Article("My article!","2022-10-31",(
      <div>
      <p>Hello, this is my first ever blog post on this website. It is just a test blah blah blah blah!</p>
    </div>
    ))}
    </div>
    )
}
