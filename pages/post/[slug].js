import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostSlug() {
  const router = useRouter();

  return (
    <MainLayout title="Welcome Homepage">
      <div className="grid min-h-[100vh] w-full place-items-center">
        <div className="text-2xl font-bold mb-16 text-center justify-center">
          POST Slug : {router.query.slug}
          <div class="flex flex-col gap-3 mt-8">
            {/* <Link href="/post/Test SLug 2">Test SLug 2</Link>
            <Link href="/post/Test SLug 3">Test SLug 3</Link>
            <Link href="/post/Test SLug 4">Test SLug 4</Link>
            <Link href="/post/Test SLug 5">Test SLug 5</Link>
            <Link href="/post/Test SLug 6">Test SLug 6</Link> */}
          </div>
        </div>
        <div>
          <Link
            href="/post"
            className="inline-flex justify-center py-3 px-5 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Back to Post
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
