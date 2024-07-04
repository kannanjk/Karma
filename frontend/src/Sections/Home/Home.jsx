import Left from "../../Components/Home/Left"
import Right from "../../Components/Home/Right"
import Post from "../../Components/Home/post"

function Home() {
  return (
    <div className='container-fluid flex justify-center items-center'>
      <div className='w-[98%] grid grid-cols-12'>
        <Left />
        <Post />
        <Right />
      </div>
    </div>
  )
}

export default Home