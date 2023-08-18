import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Post() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="grid min-h-[100vh] w-full place-items-center">
        <div className="">
          <h1 className="text-2xl font-bold mb-16 text-center justify-center">
            POST
          </h1>
          <div class="flex flex-col gap-3">
            <Link
              href="/post/Test SLug 2"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Test SLug 2
            </Link>
            <Link
              href="/post/Test SLug 3"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Test SLug 3
            </Link>
            <Link
              href="/post/Test SLug 4"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Test SLug 4
            </Link>
            <Link
              href="/post/Test SLug 5"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Test SLug 5
            </Link>
            <Link
              href="/post/Test SLug 6"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Test SLug 6
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
