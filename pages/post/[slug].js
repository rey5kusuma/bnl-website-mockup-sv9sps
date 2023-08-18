import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostSlug() {
  const router = useRouter();

  return (
    <MainLayout title="Welcome Homepage">
      <div className="grid min-h-[100vh] w-full place-items-center">
        <div>
          POST Slug : {router.query.slug}
          <div class="flex flex-col gap-3 mt-8">
            <Link href="/post/Test SLug 2">Test SLug 2</Link>
            <Link href="/post/Test SLug 3">Test SLug 3</Link>
            <Link href="/post/Test SLug 4">Test SLug 4</Link>
            <Link href="/post/Test SLug 5">Test SLug 5</Link>
            <Link href="/post/Test SLug 6">Test SLug 6</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
