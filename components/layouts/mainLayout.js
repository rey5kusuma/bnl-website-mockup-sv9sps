import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function MainLayout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main className="">
        <div>
          <Header></Header>
          <main>{props.children}</main>
        </div>
      </main>

      <Footer />
    </div>
  );
}
