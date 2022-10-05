import requests from "../utils/requests"
import {useRouter} from "next/router"

const Navbar = () => {
  const router = useRouter()
  return (
    <nav className="relative">
      {/* to implement the clean scroll effect install tailwind-scrollbar-hide then set the plugin in tailwind.config.js and finally, after "overflow-x-scroll", put "scrollbar-hide" */}
      <div className="flex flex-row px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        { // turn the object into an array (with Object.entries), and then map it returning only the title
          Object.entries(requests).map(([key, {title, url}]) => (
            <h2 key={key} className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            onClick={() => router.push(`/?genre=${key}`)}>{title}</h2>
          ))
          }
      </div>
      {/* applying the gradient effect in the extreme part of the navbar, basically an absolute div with a specific size and background-color of gradient*/}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
    </nav>
  )
}

export default Navbar