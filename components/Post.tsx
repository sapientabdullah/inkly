import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

interface PostProps {
  title: string;
  description: string;
  category: string;
  image: string;
  id: string;
}

const Post = ({ title, description, category, image, id }: PostProps) => {
  return (
    <div id="posts" className="max-w-[330px] sm:max-w-[350px]">
      <Link href={`/blogs/${id}`}>
        <Image src={image} alt="zebras" width={400} height={400} />
      </Link>

      <div className="mt-4 ">
        <Link href={`/blogs/${id}`}>
          <div className="flex justify-between">
            <h5 className="mb-2 text-lg font-medium tracking-tight text-[#012a4a]">
              {title}
            </h5>
            <MdArrowOutward className="mt-1 text-[#012a4a]" />
          </div>
        </Link>
        <p className="mb-3 text-sm tracking-tight text-[#012a4a] ">
          {description}
        </p>
      </div>
      <p className="mt-4 px-2 py-1 inline-block border border-[#012a4a] text-[#012a4a] text-sm rounded-full">
        {category}
      </p>
    </div>
  );
};
export default Post;
