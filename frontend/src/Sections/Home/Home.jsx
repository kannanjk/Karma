import Left from "../../Components/Home/Left"
import Right from "../../Components/Home/Right"
import Post from "../../Components/Home/post"

function Home() {
  return (
    <div className=''>
      <div>
        <Left />
        <Post />
        <Right />
      </div>
    </div>
  )
}

export default Home