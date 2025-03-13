import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import hangBoardRepeatersImage from '../../../public/images/hangboard-repeaters.jpg';
import openBetaImage from '../../../public/images/open-beta.jpg';
import schartsImage from '../../../public/images/scharts.jpg';

export default function Projects() {
  const items = [
    {
      id: 1,
      title: 'Hangboard Repeaters',
      image: hangBoardRepeatersImage,
      description: 'Android app for rock climbing training',
			link: "https://play.google.com/store/apps/details?id=com.mikeschen.www.hangboardrepeaters"
    },
    {
      id: 2,
      title: 'OpenBeta',
      image: openBetaImage,
      description: 'A web app to discover rock climbing routes, photos, and guides',
			link: "https://openbeta.io"
    },
    {
      id: 3,
      title: 'Scharts',
      image: schartsImage,
      description: 'Visual charts for Strava data',
			link: "https://scharts.vercel.app"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <Head>
				<title>Projects</title>
        <meta name="description" content="Michael Schennum's Projects" />
      </Head>

      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-gray-200">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
						<Link key={item.id} href={item.link}>
            <div key={item.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="w-full h-64 bg-gray-200 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
						</Link>
          ))}
        </div>
      </main>
    </div>
  );
}