import { PostType } from '@/app/lib/definitions';
import Post from '@/app/ui/wykop/post';

export default function Page() {
  const post: PostType = {
    id: '1',
    author: {
      name: 'John Doe',
      avatarUrl: 'https://wykop.pl/cdn/c3397992/Emirito_ujIqSxcnEk,q80.jpg',
    },
    content: 'Lorem ipsum dolor sit ament sup',
    upVoteCount: 100,
    createdAt: new Date(2024, 6, 11, 10, 0).toDateString(),
  };

  const post2: PostType = {
    id: '2',
    author: {
      name: 'jan-kukulka',
      avatarUrl:
        'https://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?size=50px',
    },
    content: 'Wruci',
    upVoteCount: 1,
    createdAt: new Date(2024, 6, 11, 10, 0).toDateString(),
  };

  const posts: PostType[] = [post, post2];

  return (
    <div className="w-100">
      {posts.map((post: PostType) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
