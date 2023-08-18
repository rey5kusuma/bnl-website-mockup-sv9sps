import MainLayout from '@/components/layouts/mainLayout';
import Image from 'next/image';

export default function Home() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="grid min-h-[100vh] w-full place-items-center bg-light">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                className="d-block w-100"
                src="https://akcdn.detik.net.id/visual/2020/08/10/we-bare-bears-the-movie_169.jpeg?w=650"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <Image
                className="d-block w-100"
                src="https://mmc.tirto.id/image/otf/500x0/2020/07/03/webarebear_ratio-16x9.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <Image
                className="d-block w-100"
                src="https://imgx.sonora.id/crop/0x0:0x0/700x465/photo/2020/06/29/2562685388.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            classclassName="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              classclassName="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span classclassName="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="min-h-[400px] dark:bg-gray-500 text-white">section 2</div>
    </MainLayout>
  );
}
