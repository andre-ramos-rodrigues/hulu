
const HeaderItem = ({Icon, title}) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      {/* using "group" in the mother div we can activate some effects in the children, like increasing opacity on hover */}
      {/* using "sm, md, xl, etc" we can activate the screen size breakpoints */}
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      {/* with the tag "animate" we can use special css animations, like "-bounce" */}
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}

export default HeaderItem