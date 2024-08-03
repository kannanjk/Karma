import Forms from "@/Components/Forms";
import Header from "@/Components/LayOut/Header";
import LoadinModal from "@/Components/Modals/LoadingModel";
import PostFeed from "@/Components/post/PostFeed";

export default function Home() {
  return (
    <div>
      <Header label="Home" />
      <Forms placeholder="What's happening" isComment postId={""} />
      <PostFeed />
    </div>
  );
}
