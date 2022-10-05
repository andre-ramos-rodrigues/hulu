import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"

// to do the flip effect, npm i react-flip-move then use the FlipMove component intead of the div, and on its
// child component, in this case, the Thumbnail.js, use the fowardRef to specify the reference

const Content = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map(result => (
        <Thumbnail key={result.id} result={result}/>
      ))}
    </FlipMove>
  )
}

export default Content