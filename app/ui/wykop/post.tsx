import Image from 'next/image';
import { PostType } from '@/app/lib/definitions';

export default function Post({ post }: { post: PostType }) {
  return (
    <div key={post.id} className="mb-5 rounded bg-gray-100 p-2">
      <div className="flex">
        <Image
          src={post.author.avatarUrl}
          alt="user avatar"
          width={50}
          height={50}
        />
        <div className={'ml-2'}>
          <div>{post.author.name}</div>
          <div className="text-xs">{post.createdAt}</div>
        </div>
        <div className="ml-auto">{post.upVoteCount}</div>
      </div>
      <p className="text mt-2.5">{post.content}</p>
    </div>
  );
}
