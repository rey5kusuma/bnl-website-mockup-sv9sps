import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Section1 from '../components/section1';

export default function Home() {
  return (
    <MainLayout title="Channel Manager No. 1| Perangkat Lunak">
      <div className="h-[100vh] mt-2">
        <Section1></Section1>
      </div>

      {/* <div
        className="w-full place-items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://web.bookandlink.com/wp-content/uploads/2020/04/banner-image-bookandlink3.jpg)',
        }}
       >
        <div className="bg-slate-900 bg-opacity-50 min-h-[652px] w-full py-8 px-14 text-center lg:py-16">
          <h1 className="mb-14 mx-12 mt-32 text-xl font-bold tracking-tight leading-none text-gray-50 md:text-4xl lg:text-5xl dark:text-blue">
            SATU-SATUNYA CHANNEL MANAGER YANG BERBASIS DI INDONESIA
          </h1>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="#"
              className="border rounded-xl border-gray-50 border-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
            >
              Menonton Video Kami
            </Link>
          </div>
        </div>
      </div> */}
      <div className="min-h-[680px] bg-gray-200 p-4 z-20">
        <h1 className="text-4xl font-semibold text-center mt-8 mb-4 text-gray-700">
          BookandLink
        </h1>
        <p className="text-center text-xl mx-12 mt-10 text-gray-700">
          BookandLink Hospitality Software adalah perangkat untuk hospitality
          berbasis cloud based. Kami mengutamakan kecepatan dan kelengkapan
          fitur sistem kami untuk mengelola properti Anda; hotel, hostel,
          vacation rental, hingga manajemen perhotelan di mana saja dan kapan
          saja. Tingkatkan pendapatan Anda dengan menggunakan akses platform
          yang sederhana dan komprehensif.
        </p>
        <div className="flex flex-row mt-4 justify-center p-4 mt-10">
          <div className="rounded-full w-64 h-64 bg-blue-600 mx-4 p-6 text-center">
            <h1 className="text-5xl text-white font-semibold mt-14">3,000</h1>
            <p className="text-lg font-semibold text-white mt-2">
              Di Asia Tenggara
            </p>
          </div>
          <div className="rounded-full w-64 h-64 bg-orange-500 mx-4 p-6 text-center">
            <h1 className="text-5xl text-white font-semibold mt-14">20,000</h1>
            <p className="text-lg font-semibold text-white mt-2">
              Reservasi/hari
            </p>
          </div>
          <div className="rounded-full w-64 h-64 bg-lime-700 mx-4 p-6 text-center">
            <h1 className="text-5xl text-white font-semibold mt-14">80</h1>
            <p className="text-lg font-semibold text-white mt-2">
              Mitra Terhubung
            </p>
          </div>
        </div>
        <div className="flex flex-row place-items-center justify-center">
          <div className="border-2 border-gray-800 mt-10 flex flex-row place-items-center justify-center rounded-3xl h-10 w-44 cursor-pointer">
            <Link href="#">Lihat lebih banyak</Link>
          </div>
        </div>
      </div>
      <div className="min-h-[600px] bg-gray-100 flex flex-row place-items-center">
        <div
          className="bg-blue-200 items-center p-6 min-h-[600px] text-center"
          style={{ width: '449px' }}
        >
          <div className="flex flex-row place-items-center justify-center">
            <img
              src="https://web.bookandlink.com/wp-content/uploads/2020/04/logo-channelku-1.png"
              className="h-8 mt-10"
              alt="bookandlink Logo"
              style={{ height: '140px' }}
            />
          </div>
          <p className="mt-14 text-lg text-gray-500">
            Taut dan Sinkronkan tarif dan ketersediaan kamar Anda
          </p>
          <p className="text-lg text-blue-800">
            dengan semua OTA internasional dan OTA lokal
          </p>
          <p className="mt-6 text-lg text-gray-500">
            Sistem yang sederhana dan cepat untuk memperbarui inventaris dan
            tarif
          </p>
          <p className="text-lg text-blue-800">
            dari seluruh perangkat dan pembaharuan dengan semua agen
          </p>
          <div className="flex flex-row place-items-center justify-center">
            <div className="bg-blue-900 mt-8 flex flex-row place-items-center justify-center rounded-3xl h-10 w-56 cursor-pointer">
              <Link href="#" className="text-sm text-white">
                Klik disini untuk detail
              </Link>
              <div className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="white"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-orange-200 items-center p-6 min-h-[600px] text-center"
          style={{ width: '450px' }}
        >
          <div className="flex flex-row place-items-center justify-center">
            <img
              src="https://web.bookandlink.com/wp-content/uploads/2020/04/logo-bookingku-1.png"
              className="h-8 mt-10"
              alt="bookandlink Logo"
              style={{ height: '140px' }}
            />
          </div>
          <p className="mt-14 text-lg text-gray-500">Cepat, mudah, dan</p>
          <p className="text-lg text-blue-800">mobile-friendly</p>
          <p className="mt-6 text-lg text-gray-500">
            Mengarahkan dan meningkatkan pemesanan
          </p>
          <p className="text-lg mb-2 text-blue-800">langsung tanpa komisi</p>
          <div className="flex flex-row place-items-center justify-center">
            <div className="bg-orange-600 mt-28 flex flex-row place-items-center justify-center rounded-3xl h-10 w-56 cursor-pointer">
              <Link href="#" className="text-sm text-white">
                Klik disini untuk detail
              </Link>
              <div className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="white"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-green-200 items-center p-6 min-h-[600px] text-center"
          style={{ width: '450px' }}
        >
          <div className="flex flex-row place-items-center justify-center">
            <img
              src="https://web.bookandlink.com/wp-content/uploads/2020/04/logo-hotelku-home.png"
              className="h-8 mt-10"
              alt="bookandlink Logo"
              style={{ height: '140px' }}
            />
          </div>
          <p className="mt-14 text-lg text-gray-500">
            Membuat, mengelola, dan mengubah reservasi
          </p>
          <p className="text-lg text-blue-800">
            semua sumber pada satu halaman
          </p>
          <p className="mt-6 text-lg text-gray-500">
            Penjelasan yang detail terhadap
          </p>
          <p className="text-lg text-blue-800 mb-5">
            transaksi harian properti Anda
          </p>
          <div className="flex flex-row place-items-center justify-center">
            <div className="bg-lime-700 mt-24 flex flex-row place-items-center justify-center rounded-3xl h-10 w-56 cursor-pointer">
              <Link href="#" className="text-sm text-white">
                Klik disini untuk detail
              </Link>
              <div className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="white"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[400px] bg-yellow-400 flex flex-row ">
        <div className="mr-16 ml-6 mt-14" style={{ width: '600px' }}>
          <div className="text-5xl font-semibold ml-20 flex flex-row ">
            <p className="text-white">BERITA</p>{' '}
            <p className="text-gray-700 mx-3">&</p>{' '}
            <p className="text-white">ACARA</p>
          </div>
          <p className="ml-20 mt-10 text-xl text-gray-700">
            Find in this page all news and events happening for BOOKANDLINK but
            also useful information on hospitality business.
          </p>
          <div className="flex flex-row ml-20">
            <div className="bg-neutral-50 mt-16 flex flex-row place-items-center justify-center rounded-3xl h-10 w-56 cursor-pointer">
              <Link href="#" className="text-sm text-black">
                Klik disini untuk detail
              </Link>
              <div className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="gray"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row ml-16">
            <img
              src="https://itp.live/cloud/2021/12/13/Ga0uMuOw-selfie-takers-2.jpg"
              className=""
              alt="image"
              style={{ height: '400px' }}
            />
          </div>
        </div>
      </div>
      <div className="min-h-[900px] bg-gray-50 mt-14">
        <div className="mx-4 flex flex-row">
          <div className="mt-14 ml-8 flex flex-row" style={{ width: '600px' }}>
            <div className="" style={{ width: '900px' }}>
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/legreen-hotel-suite.jpg"
                className=""
                alt="image"
                style={{ height: '210px' }}
              />
            </div>
            <div className="ml-6">
              <img src="https://web.bookandlink.com/wp-content/themes/bookandlink/images/testimoni-kutip.png" />
              <h1 className="text-lg text-gray-600 mt-6">
                LeGreen Hotel & Suite
              </h1>
              <h1 className="text-4xl font-medium text-gray-700 mt-6">
                Ajie Fahrezy - Manajer Pemasaran
              </h1>
              <p className="mt-4 text-gray-700">
                BookandLink memberi kita kemudahan mengelola OTA, fitur-fiturnya
                terus berkembang mulai dari front office dan sistem
                pembayarannya. Proses integrasi dengan klien cepat dan didukung
                oleh tim yang kompeten.
              </p>
            </div>
          </div>
          <div className="mt-14 ml-8 flex flex-row" style={{ width: '600px' }}>
            <div className="" style={{ width: '900px' }}>
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/the-daha-management.jpg"
                className="rounded-full"
                alt="image"
                style={{ height: '210px' }}
              />
            </div>
            <div className="ml-6">
              <img src="https://web.bookandlink.com/wp-content/themes/bookandlink/images/testimoni-kutip.png" />
              <h1 className="text-lg text-gray-600 mt-6">
                The Daha, A Luxury Resort and Spa
              </h1>
              <h1 className="text-4xl font-medium text-gray-700 mt-6">
                The Daha, A Luxury Resort and Spa Team Management
              </h1>
              <p className="mt-4 text-gray-700">
                Secara keseluruhan sistem BookandLink sederhana, mudah digunakan
                dan sangat membantu. Selalu memberikan pembaruan dan dapat terus
                mengembangkan sistem.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-4 flex flex-row">
          <div className="mt-14 ml-8 flex flex-row" style={{ width: '600px' }}>
            <div className="" style={{ width: '1100px' }}>
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/bread-jam-management.jpg"
                className="rounded-full"
                alt="image"
                style={{ height: '210px' }}
              />
            </div>
            <div className="ml-6">
              <img src="https://web.bookandlink.com/wp-content/themes/bookandlink/images/testimoni-kutip.png" />
              <h1 className="text-lg text-gray-600 mt-6">Bread and Jam</h1>
              <h1 className="text-4xl font-medium text-gray-700 mt-6">
                Bread and Jam Management
              </h1>
              <p className="mt-4 text-gray-700">
                BookandLink sangat membantu dengan Channel Manager & Booking
                Enginenya, platformnya sangat sederhana dan fleksibel sehingga
                dapat disesuaikan dengan kebutuhan hostel kami serta
                anggarannya. Sistem pendukungnya juga sangat bagus dan
                responsif.
              </p>
            </div>
          </div>
          <div className="mt-14 ml-8 flex flex-row" style={{ width: '600px' }}>
            <div className="" style={{ width: '900px' }}>
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/madhava-hospitality.jpg"
                className="rounded-full"
                alt="image"
                style={{ height: '210px' }}
              />
            </div>
            <div className="ml-6">
              <img src="https://web.bookandlink.com/wp-content/themes/bookandlink/images/testimoni-kutip.png" />
              <h1 className="text-lg text-gray-600 mt-6">
                Madhava Hospitality
              </h1>
              <h1 className="text-4xl font-medium text-gray-700 mt-6">
                Putu Arya - Marketing Executive
              </h1>
              <p className="mt-4 text-gray-700">
                BookandLink selalu memahami kebutuhan properti dan responsif.
                Sistem selalu berjalan dengan lancar dan membantu memfasilitasi
                properti yang kami tangani.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
