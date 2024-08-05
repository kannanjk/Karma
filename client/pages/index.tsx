import Forms from "@/Components/Forms";
import Header from "@/Components/LayOut/Header";
import PostFeed from "@/Components/post/PostFeed";

export default function Home() {
  return (
    <div>
      <Header label="Home" />
      <Forms placeholder="What's happening" postId={""} />
      <PostFeed />
    </div>
  );
}
