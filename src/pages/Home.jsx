import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (

    <>
      <div
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550136513-548af4445338?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main Content */}
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Hero Content */}
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-6xl font-bold tracking-tight text-white">
                Vision Got Larger{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-yellow-200 drop-shadow-lg">
                  10x faster
                </span>
                <br />Redefined construction
              </h1>

            </div>
          </div>
        </div>
      </div>

      <section className="lg:py-28 py-10 px-8 container mx-auto">
        <div className="lg:mb-24 mb-10">
          <p className="block antialiased font-sans leading-relaxed text-blue-gray-900 mb-4 !text-2xl font-bold lg:!text-4xl">
            Turn your idea into a startup
          </p>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit w-w-full !text-gray-500 max-w-xl">
            We're constantly trying to express ourselves and actualize our dreams. If
            you have the opportunity to play
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 bg-gray-100/50 py-24 text-center">
            <h1 className="block antialiased tracking-normal font-sans font-semibold text-inherit !text-green-500 !leading-snug text-5xl">
              1,000Kg
            </h1>
            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 mt-2 font-bold">
              CO2 Emissions Offset
            </h5>
            <h4 className="block antialiased tracking-normal font-sans text-2xl leading-snug text-blue-gray-900 mt-10 font-bold">
              Eco Warrior Achievement
            </h4>
            <p className="block antialiased font-sans font-normal leading-relaxed text-inherit mt-1 text-base max-w-lg mx-auto !text-gray-500 lg:w-8/12">
              Congratulations on reaching a new milestone in environmental
              stewardship!
            </p>
          </div>
          <div>
            <div className="grid lg:grid-cols-2 gap-10 gap-x-20">
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <p className="block antialiased font-sans leading-relaxed text-blue-gray-900 text-4xl font-bold">
                  15,000M
                </p>
                <hr className="mt-2 mb-4 max-w-sm" />
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 mt-1 font-bold">
                  Marathon Runner Progress
                </h5>
                <p className="block antialiased font-sans text-inherit text-base font-normal max-w-xs leading-7 !text-gray-500">
                  You're racing ahead in your marathon training goals.
                </p>
              </div>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <p className="block antialiased font-sans leading-relaxed text-blue-gray-900 text-4xl font-bold">
                  $10,000+
                </p>
                <hr className="mt-2 mb-4 max-w-sm" />
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 mt-1 font-bold">
                  Invested
                </h5>
                <p className="block antialiased font-sans text-inherit text-base font-normal max-w-xs leading-7 !text-gray-500">
                  Your financial acumen is paying off—literally.
                </p>
              </div>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <p className="block antialiased font-sans leading-relaxed text-blue-gray-900 text-4xl font-bold">
                  4,500+
                </p>
                <hr className="mt-2 mb-4 max-w-sm" />
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 mt-1 font-bold">
                  Hours of Exercise
                </h5>
                <p className="block antialiased font-sans text-inherit text-base font-normal max-w-xs leading-7 !text-gray-500">
                  Your commitment to health is inspiring and your stats show it.
                </p>
              </div>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <p className="block antialiased font-sans leading-relaxed text-blue-gray-900 text-4xl font-bold">
                  8,200+
                </p>
                <hr className="mt-2 mb-4 max-w-sm" />
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 mt-1 font-bold">
                  Volunteer Hours
                </h5>
                <p className="block antialiased font-sans text-inherit text-base font-normal max-w-xs leading-7 !text-gray-500">
                  Your contributions have made an impact in your community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
          <div className="flex items-center justify-center flex-col gap-5 mb-14">
            <h2 className="font-manrope font-bold text-4xl text-gray-900 text-center">
              Structural Elegance
            </h2>
            <p className="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
              {" "}
              In the world of architecture or organization, structure provides the
              backbone for a purposeful and harmonious existence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
            <div
              className="sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col px-7 py-6"
              style={{
                backgroundImage:
                  "url(https://pagedone.io/asset/uploads/1707712993.png)"
              }}
            >
              <h6 className="font-medium text-xl leading-8 text-white mb-4">
                Architecture Designer
              </h6>
              <p className="text-base font-normal text-white/70">
                where knowledge meets innovation, and success is sculpted through a
                blend of skill and vision.
              </p>
            </div>
            <div className="block">
              <img
                src="https://pagedone.io/asset/uploads/1707713007.png"
                alt="Building structure image"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="block">
              <img
                src="https://pagedone.io/asset/uploads/1707713018.png"
                alt="Building structure image"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="block">
              <img
                src="https://pagedone.io/asset/uploads/1707713032.png"
                alt="Building structure image"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div
              className=" bg-cover rounded-lg max-sm:h-80 flex justify-start flex-col px-7 py-6"
              style={{
                backgroundImage:
                  "url(https://pagedone.io/asset/uploads/1707713043.png)"
              }}
            >
              <h6 className="font-medium text-xl leading-8 text-white mb-4">
                Interior Designer
              </h6>
              <p className="text-base font-normal text-white/70">
                Crafting exceptional interiors, where aesthetics meet functionality
                for spaces that inspire and elevate.
              </p>
            </div>
            <div className="block">
              <img
                src="	https://pagedone.io/asset/uploads/1707713055.png"
                alt="Building structure image"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div
              className=" bg-cover rounded-lg max-sm:h-80 flex justify-end flex-col px-7 py-6"
              style={{
                backgroundImage:
                  "url(https://pagedone.io/asset/uploads/1707713066.png)"
              }}
            >
              <h6 className="font-medium text-xl leading-8 text-white mb-4">
                Business Building
              </h6>
              <p className="text-base font-normal text-white/70">
                Architecting business success through innovation, resilience, and
                strategic leadership.
              </p>
            </div>
          </div>
          <Link to='/projects' className="w-full rounded-lg py-4 px-6 text-center bg-indigo-100 text-lg font-medium text-indigo-600 transition-all duration-300 hover:text-white hover:bg-indigo-600">
            View All
          </Link>
        </div>
      </section>


      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <svg class="h-12 text-gray-500 fill-current dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 100"><path fill="none" d="M0 0h266v100H0z"></path><path d="M140.021 49.597c-1.784 0-3.07.585-4.374 1.181v13.486c1.249.119 1.965.119 3.15.119 4.282 0 4.869-1.961 4.869-4.699v-6.441c0-2.022-.671-3.646-3.645-3.646zm-28.438-.736c-2.971 0-3.649 1.631-3.649 3.651v1.135h7.294v-1.135c0-2.02-.678-3.651-3.645-3.651zm-55.09 14.037c0 1.598.754 2.428 2.418 2.428 1.785 0 2.842-.582 4.145-1.18v-3.199h-3.903c-1.848 0-2.66.344-2.66 1.951zm111.191-13.301c-2.976 0-4.007 1.624-4.007 3.646v7.379c0 2.027 1.031 3.656 4.007 3.656 2.968 0 4.007-1.629 4.007-3.656v-7.379c-.001-2.022-1.04-3.646-4.007-3.646zM41.909 71.172h-8.748V49.998H28.79v-7.296h4.372V38.32c0-5.953 2.467-9.492 9.479-9.492h5.838v7.298H44.83c-2.73 0-2.91 1.02-2.91 2.923l-.011 3.652h6.61l-.773 7.296h-5.837v21.175zm29.897.055h-7.291l-.315-1.844c-3.329 1.844-6.3 2.143-8.26 2.143-5.347 0-8.193-3.572-8.193-8.512 0-5.828 3.321-7.908 9.262-7.908h6.047v-1.26c0-2.975-.341-3.848-4.916-3.848h-7.48l.731-7.296h8.176c10.038 0 12.239 3.171 12.239 11.203v17.322zm24.793-20.694c-4.537-.778-5.84-.949-8.023-.949-3.921 0-5.106.865-5.106 4.195v6.299c0 3.33 1.185 4.199 5.106 4.199 2.183 0 3.486-.174 8.023-.955v7.117c-3.974.891-6.563 1.125-8.751 1.125-9.392 0-13.125-4.939-13.125-12.074v-5.111c0-7.141 3.733-12.089 13.125-12.089 2.188 0 4.777.235 8.751 1.13v7.113zm27.376 8.957h-16.042v.588c0 3.33 1.186 4.199 5.106 4.199 3.524 0 5.675-.174 10.204-.955v7.117c-4.368.891-6.644 1.125-10.929 1.125-9.393 0-13.128-4.939-13.128-12.074v-5.844c0-6.243 2.771-11.356 12.396-11.356s12.393 5.054 12.393 11.356v5.844zm28.437.135c0 6.896-1.971 11.926-13.911 11.926-4.312 0-6.841-.379-11.6-1.111V31.02l8.745-1.459V43.35c1.89-.702 4.336-1.059 6.562-1.059 8.746 0 10.203 3.921 10.203 10.222v7.112zm28.033.15c0 5.949-2.456 11.719-12.732 11.719-10.281 0-12.783-5.77-12.783-11.719v-5.744c0-5.952 2.502-11.723 12.783-11.723 10.276 0 12.732 5.771 12.732 11.723v5.744zm28.014 0c0 5.949-2.459 11.719-12.733 11.719-10.281 0-12.783-5.77-12.783-11.719v-5.744c0-5.952 2.502-11.723 12.783-11.723 10.274 0 12.733 5.771 12.733 11.723v5.744zm28.749 11.397h-9.479l-8.017-13.383v13.383h-8.748V31.019l8.748-1.459v25.849l8.017-12.707h9.479l-8.752 13.867 8.752 14.603zm-41.512-21.575c-2.971 0-4.002 1.624-4.002 3.646v7.379c0 2.027 1.031 3.656 4.002 3.656 2.967 0 4.017-1.629 4.017-3.656v-7.379c0-2.022-1.05-3.646-4.017-3.646zm46.505 16.581c1.473 0 2.646 1.201 2.646 2.701 0 1.523-1.174 2.711-2.657 2.711-1.476 0-2.673-1.188-2.673-2.711 0-1.5 1.197-2.701 2.673-2.701h.011zm-.011.42c-1.187 0-2.158 1.021-2.158 2.281 0 1.283.972 2.291 2.169 2.291 1.198.012 2.155-1.008 2.155-2.279s-.957-2.293-2.155-2.293h-.011zm-.503 3.853h-.48v-3.014c.252-.035.492-.07.852-.07.456 0 .754.096.937.227.177.133.272.336.272.623 0 .398-.262.637-.585.734v.023c.263.049.442.287.503.73.07.469.143.648.19.746h-.503c-.071-.098-.144-.373-.204-.77-.07-.383-.264-.527-.648-.527h-.333v1.298zm0-1.668h.348c.394 0 .729-.145.729-.518 0-.264-.19-.527-.729-.527-.157 0-.266.012-.348.023v1.022z"></path></svg>
        </div>

        <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <svg class="h-10 text-gray-500 fill-current dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 316 60"><g transform="translate(9.259 4.552) scale(.4941)"><path d="M52.1 102.1V82.5c20.8 0 36.8-20.6 28.9-42.4-3-8.1-9.4-14.6-17.5-17.5-21.8-7.9-42.4 8.1-42.4 28.9H1.5c0-33.1 32-58.9 66.7-48.1 15.2 4.7 27.2 16.8 31.9 31.9 10.8 34.8-14.9 66.8-48 66.8z"></path><path d="M32.6 63h19.5v19.5H32.6zm-15 34.5v-15h15v15h-15zM5 70h12.6v12.5H5z" fill-rule="evenodd"></path><path d="M181.5 30.2c-5.8-4-13-6.1-21.4-6.1h-18.3v58.1h18.3c8.4 0 15.6-2.1 21.4-6.4 3.2-2.2 5.7-5.4 7.4-9.3s2.6-8.5 2.6-13.7c0-5.1-.9-9.7-2.6-13.6-1.7-3.8-4.2-6.9-7.4-9zm-29 3.8h5.8c6.4 0 11.7 1.3 15.7 3.7 4.4 2.7 6.7 7.8 6.7 15.1 0 7.6-2.3 12.9-6.7 15.8-3.8 2.5-9.1 3.8-15.6 3.8h-5.8V34z"></path><use xlink:href="#A"></use><path d="M199 41.3h10.3v41H199zm47.8 3.4c-3.1-2.8-6.6-4.4-10.3-4.4-5.7 0-10.4 2-14.1 5.8s-5.5 8.8-5.5 14.7c0 5.8 1.8 10.7 5.5 14.7 3.7 3.8 8.4 5.8 14.1 5.8 4 0 7.4-1.1 10.2-3.3v1c0 3.4-.9 6-2.7 7.9-1.8 1.8-4.3 2.7-7.4 2.7-4.8 0-7.7-1.9-11.4-6.8l-7 6.7.2.3c1.5 2.1 3.8 4.2 6.9 6.2s6.9 3 11.5 3c6.1 0 11.1-1.9 14.7-5.6 3.7-3.7 5.5-8.7 5.5-14.9V41.3h-10.1v3.4zm-2.7 24.2c-1.8 2-4.1 3-7.1 3s-5.3-1-7-3c-1.8-2-2.7-4.7-2.7-8s.9-6.1 2.7-8.1 4.1-3.1 7-3.1c3 0 5.3 1 7.1 3.1 1.8 2 2.7 4.8 2.7 8.1s-1 6-2.7 8zm21.6-27.6H276v41h-10.3z"></path><use xlink:href="#A" x="66.7"></use><path d="M298.6 30.3h-10.1v11.1h-5.9v9.4h5.9v17c0 5.3 1.1 9.1 3.2 11.3s5.8 3.3 11.1 3.3c1.7 0 3.4-.1 5-.2h.5v-9.4l-3.5.2c-2.5 0-4.1-.4-4.9-1.3s-1.2-2.7-1.2-5.4V50.7h9.6v-9.4h-9.6v-11zm57.9-6.2h10.3v58.1h-10.3zm114.4 43.5c-1.8 2.1-3.7 3.9-5.2 4.8-1.4.9-3.2 1.4-5.3 1.4-3 0-5.5-1.1-7.5-3.4s-3-5.2-3-8.7 1-6.4 2.9-8.6c2-2.3 4.4-3.4 7.4-3.4 3.3 0 6.8 2.1 9.8 5.6l6.8-6.5c-4.4-5.8-10.1-8.5-16.9-8.5-5.7 0-10.6 2.1-14.6 6.1s-6 9.2-6 15.3 2 11.2 6 15.3 8.9 6.1 14.6 6.1c7.5 0 13.5-3.2 17.5-9.1l-6.5-6.4zM513.2 47c-1.5-2-3.5-3.7-5.9-4.9-2.5-1.2-5.3-1.8-8.5-1.8-5.8 0-10.5 2.1-14 6.3-3.4 4.2-5.2 9.3-5.2 15.4 0 6.2 1.9 11.3 5.7 15.3 3.7 3.9 8.8 5.9 14.9 5.9 6.9 0 12.7-2.8 16.9-8.4l.2-.3-6.7-6.5c-.6.8-1.5 1.6-2.3 2.4-1 1-2 1.7-3 2.2-1.5.8-3.3 1.1-5.2 1.1-2.9 0-5.2-.8-7-2.5-1.7-1.5-2.7-3.6-2.9-6.2h27.3l.1-3.8c0-2.7-.4-5.2-1.1-7.6-.7-2.3-1.8-4.5-3.3-6.6zm-22.5 9.7c.5-2 1.4-3.6 2.7-4.9 1.4-1.4 3.2-2.1 5.4-2.1 2.5 0 4.4.7 5.7 2.1 1.2 1.3 1.9 2.9 2.1 4.8h-15.9zm62.1-12.3c-3.1-2.7-7.4-4-12.8-4-3.4 0-6.6.8-9.5 2.2-2.7 1.4-5.3 3.6-7 6.6l.1.1 6.6 6.3c2.7-4.3 5.7-5.8 9.7-5.8 2.2 0 3.9.6 5.3 1.7s2 2.6 2 4.4v2c-2.6-.8-5.1-1.2-7.6-1.2-5.1 0-9.3 1.2-12.4 3.6s-4.7 5.9-4.7 10.2c0 3.8 1.3 7 4 9.3 2.7 2.2 6 3.4 9.9 3.4s7.6-1.6 10.9-4.3v3.4h10.1V55.9c.2-4.9-1.4-8.8-4.6-11.5zm-18.3 22.2c1.2-.8 2.8-1.2 4.9-1.2 2.5 0 5.1.5 7.8 1.5v4C545 73 542 74 538.3 74c-1.8 0-3.2-.4-4.1-1.2s-1.4-1.7-1.4-3 .6-2.4 1.7-3.2zm62.7-21.4c-2.9-3.2-6.9-4.8-12-4.8-4.1 0-7.4 1.2-9.9 3.5v-2.5h-10.1v41h10.3V59.7c0-3.1.7-5.6 2.2-7.3 1.5-1.8 3.4-2.6 6.1-2.6 2.3 0 4.1.8 5.4 2.3 1.3 1.6 2 3.7 2 6.4v23.7h10.3V58.5c0-5.6-1.4-10.1-4.3-13.3zm-253.6-.8c-3.1-2.7-7.4-4-12.8-4-3.4 0-6.6.8-9.5 2.2-2.7 1.4-5.3 3.6-7 6.6l.1.1 6.6 6.3c2.7-4.3 5.7-5.8 9.7-5.8 2.2 0 3.9.6 5.3 1.7s2 2.6 2 4.4v2c-2.6-.8-5.1-1.2-7.6-1.2-5.1 0-9.3 1.2-12.4 3.6s-4.7 5.9-4.7 10.2c0 3.8 1.3 7 4 9.3 2.7 2.2 6 3.4 9.9 3.4s7.6-1.6 10.9-4.3v3.4h10.1V55.9c.1-4.9-1.5-8.8-4.6-11.5zm-18.3 22.2c1.2-.8 2.8-1.2 4.9-1.2 2.5 0 5.1.5 7.8 1.5v4c-2.2 2.1-5.2 3.1-8.9 3.1-1.8 0-3.2-.4-4.1-1.2s-1.4-1.7-1.4-3 .5-2.4 1.7-3.2zm78.9 16.5c-16.5 0-30-13.4-30-30s13.4-30 30-30c16.5 0 30 13.4 30 30s-13.5 30-30 30zm0-49.3c-10.7 0-19.4 8.7-19.4 19.4s8.7 19.4 19.4 19.4 19.4-8.7 19.4-19.4-8.7-19.4-19.4-19.4z"></path></g><defs><path d="M204.3 23.4c-1.8 0-3.3.6-4.5 1.8s-1.9 2.7-1.9 4.4c0 1.8.6 3.3 1.9 4.5 1.2 1.2 2.7 1.9 4.5 1.9s3.3-.6 4.5-1.9c1.2-1.2 1.9-2.8 1.9-4.5 0-1.8-.6-3.3-1.9-4.4-1.2-1.2-2.8-1.8-4.5-1.8z"></path></defs></svg>
        </div>

        <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <svg class="h-8 mt-2 text-gray-500 fill-current dark:text-gray-600" viewBox="0 0 398 120" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M247.292 94.106C224.124 111.016 190.526 120 161.608 120c-40.544 0-77.046-14.822-104.673-39.476-2.164-1.936-.235-4.583 2.369-3.082 29.806 17.15 66.66 27.475 104.731 27.475 25.677 0 53.906-5.271 79.884-16.163 3.923-1.646 7.21 2.545 3.373 5.352"></path><path d="M256.533 82.534c-2.965-3.771-19.551-1.787-27.003-.897-2.254.277-2.605-1.692-.57-3.122 13.233-9.265 34.922-6.587 37.447-3.487 2.54 3.13-.666 24.802-13.073 35.147-1.91 1.59-3.718.744-2.877-1.357 2.782-6.952 9.04-22.505 6.076-26.284zM230.05 13.058V4.063c.015-1.378 1.04-2.29 2.291-2.283l40.493-.007c1.295 0 2.335.94 2.335 2.268v7.726c-.015 1.29-1.113 2.983-3.053 5.668l-20.97 29.843c7.78-.182 16.022.985 23.093 4.939 1.596.897 2.027 2.217 2.152 3.516v9.607c0 1.32-1.457 2.86-2.987 2.057-12.458-6.507-29-7.214-42.776.08-1.405.745-2.884-.765-2.884-2.086v-9.133c0-1.459.03-3.961 1.508-6.186l24.302-34.738h-21.162c-1.295 0-2.327-.927-2.342-2.276zM82.354 69.294H70.042c-1.171-.08-2.108-.956-2.203-2.072l.014-63.006c0-1.262 1.062-2.268 2.38-2.268L81.71 1.94c1.2.059 2.159.963 2.232 2.116v8.221h.234C87.163 4.326 92.8.613 100.39.613c7.708 0 12.539 3.713 15.98 11.664C119.361 4.326 126.14.613 133.393.613c5.175 0 10.804 2.123 14.251 6.893 3.916 5.311 3.111 12.993 3.111 19.755l-.015 39.764c0 1.255-1.061 2.262-2.379 2.262h-12.304c-1.23-.08-2.203-1.05-2.203-2.262l-.007-33.41c0-2.648.234-9.28-.344-11.796-.923-4.246-3.675-5.435-7.24-5.435-2.986 0-6.09 1.985-7.356 5.165-1.266 3.188-1.15 8.484-1.15 12.066v33.403c0 1.255-1.06 2.262-2.378 2.262h-12.297c-1.237-.08-2.21-1.051-2.21-2.262l-.015-33.41c0-7.025 1.142-17.362-7.59-17.362-8.858 0-8.506 10.074-8.506 17.362l-.007 33.403c-.022 1.276-1.084 2.283-2.401 2.283zm227.788-55.82c-9.084 0-9.662 12.328-9.662 20.017s-.117 24.131 9.545 24.131c9.545 0 10.006-13.262 10.006-21.345 0-5.303-.234-11.664-1.845-16.705-1.383-4.377-4.143-6.098-8.044-6.098zM310.025.613c18.284 0 28.173 15.647 28.173 35.533 0 19.222-10.92 34.468-28.173 34.468-17.933 0-27.712-15.647-27.712-35.132C282.305 15.86 292.2.612 310.025.612zm51.882 68.681h-12.275c-1.23-.08-2.211-1.05-2.211-2.261l-.015-63.028c.103-1.16 1.12-2.057 2.365-2.057l11.426-.008c1.076.059 1.961.788 2.188 1.766v9.636h.234c3.448-8.622 8.279-12.73 16.785-12.73 5.519 0 10.92 1.992 14.375 7.427C398 13.072 398 21.556 398 27.662v39.64c-.14 1.117-1.142 1.985-2.364 1.985h-12.349c-1.141-.073-2.064-.912-2.188-1.984V33.097c0-6.894.805-16.968-7.708-16.968-2.993 0-5.753 1.984-7.13 5.033-1.72 3.845-1.953 7.69-1.953 11.935v33.928c-.03 1.262-1.091 2.27-2.401 2.27zm-151.715-.16c-.813.73-1.991.78-2.913.284-4.092-3.385-4.824-4.953-7.064-8.177-6.756 6.864-11.543 8.921-20.305 8.921-10.372 0-18.438-6.376-18.438-19.134 0-9.965 5.424-16.742 13.139-20.061 6.683-2.925 16.023-3.458 23.167-4.253v-1.598c0-2.925.234-6.375-1.5-8.9-1.501-2.26-4.378-3.195-6.918-3.195-4.692 0-8.871 2.4-9.904 7.375-.212 1.11-1.024 2.204-2.137 2.262l-11.938-1.291c-1.01-.234-2.13-1.029-1.838-2.568C166.288 4.362 179.37 0 191.087 0c5.995 0 13.827 1.59 18.556 6.113 5.995 5.58 5.416 13.021 5.416 21.126v19.127c0 5.756 2.401 8.28 4.648 11.373.79 1.116.967 2.444-.036 3.26-2.518 2.102-6.983 5.968-9.443 8.15l-.036-.015zm-12.414-29.931v-2.656c-8.908 0-18.322 1.897-18.322 12.35 0 5.319 2.767 8.908 7.488 8.908 3.455 0 6.566-2.123 8.528-5.58 2.423-4.254 2.306-8.237 2.306-13.022zM48.72 69.133c-.813.73-1.991.781-2.913.285-4.092-3.385-4.824-4.953-7.064-8.177-6.763 6.864-11.55 8.921-20.305 8.921C8.06 70.162 0 63.786 0 51.028c0-9.965 5.417-16.742 13.139-20.061 6.683-2.925 16.015-3.458 23.16-4.253v-1.598c0-2.925.233-6.375-1.501-8.9-1.5-2.26-4.377-3.195-6.91-3.195-4.7 0-8.879 2.4-9.904 7.375-.212 1.11-1.024 2.204-2.137 2.262L3.91 21.367c-1.01-.234-2.13-1.029-1.845-2.568C4.81 4.362 17.89.007 29.615.007c5.995 0 13.827 1.59 18.556 6.113 5.995 5.581 5.416 13.022 5.416 21.126v19.128c0 5.755 2.401 8.28 4.648 11.372.79 1.116.967 2.444-.036 3.261-2.518 2.101-6.99 5.967-9.45 8.148l-.03-.021zm-12.422-29.93v-2.656c-8.908 0-18.32 1.897-18.32 12.35 0 5.319 2.766 8.908 7.487 8.908 3.462 0 6.573-2.123 8.528-5.58 2.422-4.254 2.305-8.237 2.305-13.022z"></path></g></svg>
        </div>

        <div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
          <svg class="h-5 mt-1 text-gray-500 fill-current dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.7 36.3"><g><path class="st0" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6m6.2-7.1h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3m-27.5 29c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2m-61.6.1h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.7h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"></path></g></svg>
        </div>

        <div class="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
          <svg class="h-8 text-gray-500 fill-current dark:text-gray-600" viewBox="0 0 2270 546" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M888.413 394.397l-31.127 144.717h-71.593L903.977 14.642h84.81l111.28 524.472h-72.371l-30.35-144.717H888.413zm100.373-58.364l-24.124-125.3c-7.003-35.797-14.007-82.463-19.441-119.828h-3.126c-5.434 38.13-13.242 86.365-20.22 119.827l-24.902 125.301h91.813zM1373.34.648v441.205c0 28.806 1.556 70.828 3.1 97.274h-63.02l-4.67-45.9h-2.334c-12.451 26.445-41.244 52.138-79.362 52.138-70.037 0-112.837-76.275-112.837-193.755 0-133.848 56.794-196.881 116.728-196.881 30.336 0 54.46 14.02 67.689 42.8h1.556V.648h73.15zm-73.163 304.258c0-6.991 0-15.551-.778-23.359-3.89-34.227-23.345-63.798-49.79-63.798-45.927 0-61.477 63.798-61.477 133.848 0 77.818 20.232 132.278 59.142 132.278 16.342 0 38.118-8.56 50.569-53.681 1.556-6.226 2.334-15.577 2.334-24.111V304.906zm247.399 240.446c-75.471 0-129.957-64.59-129.957-194.52 0-137.752 64.576-196.116 133.835-196.116 74.705 0 128.387 66.924 128.387 194.546 0 150.19-73.927 196.09-131.5 196.09h-.765zm2.321-57.573c45.122 0 55.251-80.153 55.251-137.726 0-56.82-10.116-137.739-56.794-137.739-48.26 0-57.586 80.919-57.586 137.74 0 63.02 10.895 137.725 58.364 137.725h.765zM1723.938.648h73.137V203.74h1.556c19.455-34.227 45.913-49.025 79.375-49.025 64.577 0 105.055 73.15 105.055 189.099 0 135.391-55.25 201.537-117.506 201.537-37.353 0-58.364-20.246-74.719-53.708h-3.086l-3.904 47.47h-63.02c1.556-25.668 3.112-68.468 3.112-97.274V.648zm73.137 404.618c0 8.586.778 17.146 3.113 23.358 11.66 45.926 34.24 55.251 49.012 55.251 43.579 0 59.92-57.572 59.92-135.391 0-72.371-17.106-130.735-60.698-130.735-24.124 0-43.578 28.793-49.025 56.03-1.557 7.781-2.335 17.91-2.335 25.68v105.807h.013zm293.92-40.453c.779 97.273 42.788 121.384 87.145 121.384 26.458 0 49.025-6.213 65.367-14.007l10.895 52.916c-22.568 11.673-56.808 17.912-90.27 17.912-94.925 0-144.73-71.594-144.73-188.321 0-123.732 56.795-199.994 135.392-199.994s115.172 75.484 115.172 170.435c0 18.664-.792 30.35-1.557 40.453l-177.413-.778zm109.712-52.126c.778-66.924-22.567-102.707-51.347-102.707-38.144 0-55.264 55.251-57.586 102.707h108.933z" fill-rule="nonzero"></path><path d="M373.462 16.043h218.501v523.07L373.462 16.044zm-153.926 0H.88v523.07l218.657-523.07zm76.976 192.77l139.218 330.3H344.5l-41.633-105.197H200.964l95.548-225.103z"></path></g></svg>
        </div>
      </div>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
            <div className=" md:mb-0 mb-4">
              <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">
                Whether you have a concern or simply want to say hello, We are here to
                facilitate communication with you.
              </p>
              <div className="flex md:items-center md:justify-start justify-center item-centre">
                <Link to='/contactUs' className="w-36 h-12 rounded-full bg-indigo-600 transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6 p-3">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="border-l-2 md:border-indigo-600 border-white px-10 py-6">
              <div className="mb-8">
                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                  Email Address
                </h6>
                <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">
                  pagedone@gmail.com
                </h3>
              </div>
              <div>
                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                  Phone Number
                </h6>
                <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">
                  470-601-1911
                </h3>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50" />
              <img
                src="https://pagedone.io/asset/uploads/1696246502.png"
                alt="United Kingdom image"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                  United Kingdom
                </h5>
                <p className="text-white text-base font-medium leading-6">
                  123 High Street, Westminster, London
                </p>
              </div>
            </div>
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50" />
              <img
                src="https://pagedone.io/asset/uploads/1696246522.png"
                alt="Germany image"
                className="w-full h-full  object-cover"
              />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                  Germany
                </h5>
                <p className="text-white text-base font-medium leading-6">
                  101 Unter den Linden, Mitte <br />
                  District, Berlin
                </p>
              </div>
            </div>
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50" />
              <img
                src="https://pagedone.io/asset/uploads/1696246551.png"
                alt="France image"
                className="w-full h-full  object-cover"
              />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                  France
                </h5>
                <p className="text-white text-base font-medium leading-6">
                  456 Rue de la Paix, 8th Arrondissement, Paris
                </p>
              </div>
            </div>
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50" />
              <img
                src="https://pagedone.io/asset/uploads/1696246565.png"
                alt="Switzerland image"
                className="w-full h-full  object-cover"
              />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                  Switzerland
                </h5>
                <p className="text-white text-base font-medium leading-6">
                  987 Bahnhofstrasse, Zurich <br /> City Center, Zurich
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
            <div className="flex items-center lg:mb-0 mb-10">
              <div className="">
                <h4 className="text-indigo-600 text-base font-medium leading-6 mb-4 lg:text-left text-center">
                  Contact Us
                </h4>
                <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                  Reach Out To Us
                </h2>
                <form action="">
                  <input
                    type="text"
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                    placeholder="Email"
                  />
                  <textarea
                    name=""
                    id="text"
                    className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8"
                    placeholder="Phone"
                    defaultValue={""}
                  />
                  <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center  bg-cover bg-no-repeat bg-[url('https://pagedone.io/asset/uploads/1696245837.png')] ">
              <div className="">
                <div className="lg:w-96 w-auto h-auto bg-white shadow-xl lg:p-6 p-4">
                  <svg
                    width={164}
                    height={33}
                    viewBox="0 0 164 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-6 mx-auto"
                  >
                    <path
                      d="M47 24.7231V7H54.4171C54.5916 7 54.816 7.00821 55.0903 7.02462C55.3645 7.03282 55.618 7.05744 55.8507 7.09846C56.8895 7.25436 57.7455 7.59487 58.4186 8.12C59.1001 8.64513 59.6029 9.30974 59.927 10.1138C60.2594 10.9097 60.4256 11.7959 60.4256 12.7723C60.4256 13.7405 60.2594 14.6267 59.927 15.4308C59.5945 16.2267 59.0876 16.8872 58.4061 17.4123C57.733 17.9374 56.8812 18.2779 55.8507 18.4338C55.618 18.4667 55.3604 18.4913 55.0778 18.5077C54.8035 18.5241 54.5833 18.5323 54.4171 18.5323H50.0042V24.7231H47ZM50.0042 15.7631H54.2925C54.4587 15.7631 54.6457 15.7549 54.8534 15.7385C55.0612 15.7221 55.2523 15.6892 55.4268 15.64C55.9255 15.5169 56.3161 15.2995 56.5986 14.9877C56.8895 14.6759 57.0931 14.3231 57.2094 13.9292C57.3341 13.5354 57.3964 13.1497 57.3964 12.7723C57.3964 12.3949 57.3341 12.0092 57.2094 11.6154C57.0931 11.2133 56.8895 10.8564 56.5986 10.5446C56.3161 10.2328 55.9255 10.0154 55.4268 9.89231C55.2523 9.84308 55.0612 9.81436 54.8534 9.80615C54.6457 9.78974 54.4587 9.78154 54.2925 9.78154H50.0042V15.7631Z"
                      fill="#101828"
                    />
                    <path
                      d="M66.0975 25.0923C65.1252 25.0923 64.3024 24.9118 63.6293 24.5508C62.9561 24.1815 62.445 23.6933 62.096 23.0862C61.7553 22.479 61.5849 21.8103 61.5849 21.08C61.5849 20.44 61.6929 19.8656 61.909 19.3569C62.1251 18.84 62.4575 18.3969 62.9063 18.0277C63.355 17.6503 63.9368 17.3426 64.6515 17.1046C65.1917 16.9323 65.8233 16.7764 66.5463 16.6369C67.2776 16.4974 68.0671 16.3703 68.9148 16.2554C69.7707 16.1323 70.6641 16.001 71.5949 15.8615L70.5228 16.4646C70.5311 15.5456 70.3234 14.8687 69.8995 14.4338C69.4757 13.999 68.761 13.7815 67.7554 13.7815C67.1488 13.7815 66.5629 13.921 65.9978 14.2C65.4327 14.479 65.0379 14.959 64.8135 15.64L62.0711 14.7908C62.4035 13.6667 63.0351 12.7641 63.9659 12.0831C64.9049 11.4021 66.1681 11.0615 67.7554 11.0615C68.9522 11.0615 70.0034 11.2544 70.9093 11.64C71.8234 12.0256 72.5007 12.6574 72.9412 13.5354C73.1822 14.0031 73.3276 14.4831 73.3775 14.9754C73.4274 15.4595 73.4523 15.9887 73.4523 16.5631V24.7231H70.822V21.8431L71.2583 22.3108C70.6517 23.2708 69.9411 23.9764 69.1267 24.4277C68.3206 24.8708 67.3108 25.0923 66.0975 25.0923ZM66.6959 22.7292C67.3773 22.7292 67.9591 22.6103 68.4411 22.3723C68.9231 22.1344 69.3054 21.8431 69.5879 21.4985C69.8788 21.1538 70.0741 20.8297 70.1738 20.5262C70.3317 20.1487 70.419 19.7179 70.4356 19.2338C70.4605 18.7415 70.473 18.3436 70.473 18.04L71.3954 18.3108C70.4896 18.4503 69.7126 18.5733 69.0643 18.68C68.4161 18.7867 67.8593 18.8892 67.3939 18.9877C66.9286 19.0779 66.5172 19.1805 66.1598 19.2954C65.8108 19.4185 65.5158 19.5621 65.2748 19.7262C65.0338 19.8903 64.8468 20.079 64.7138 20.2923C64.5891 20.5056 64.5268 20.7559 64.5268 21.0431C64.5268 21.3713 64.6099 21.6626 64.7761 21.9169C64.9423 22.1631 65.1833 22.36 65.4991 22.5077C65.8233 22.6554 66.2222 22.7292 66.6959 22.7292Z"
                      fill="#101828"
                    />
                    <path
                      d="M82.1078 31C81.3598 31 80.641 30.8851 79.9512 30.6554C79.2698 30.4256 78.6548 30.0933 78.1063 29.6585C77.5578 29.2318 77.109 28.7149 76.76 28.1077L79.5274 26.7538C79.785 27.2379 80.1465 27.5949 80.6119 27.8246C81.0856 28.0626 81.5884 28.1815 82.1203 28.1815C82.7435 28.1815 83.3003 28.0708 83.7907 27.8492C84.281 27.6359 84.6591 27.3159 84.925 26.8892C85.1993 26.4708 85.3281 25.9456 85.3115 25.3138V21.5354H85.6855V11.4308H88.3157V25.3631C88.3157 25.6995 88.2991 26.0195 88.2659 26.3231C88.2409 26.6349 88.1952 26.9385 88.1287 27.2338C87.9293 28.0954 87.547 28.801 86.9819 29.3508C86.4168 29.9087 85.7145 30.3231 84.8752 30.5938C84.0441 30.8646 83.1217 31 82.1078 31ZM81.846 25.0923C80.6077 25.0923 79.5274 24.7846 78.6049 24.1692C77.6825 23.5538 76.9678 22.7169 76.4608 21.6585C75.9539 20.6 75.7004 19.4062 75.7004 18.0769C75.7004 16.7313 75.9539 15.5333 76.4608 14.4831C76.9761 13.4246 77.7032 12.5918 78.6423 11.9846C79.5814 11.3692 80.6867 11.0615 81.9582 11.0615C83.238 11.0615 84.3101 11.3692 85.1744 11.9846C86.047 12.5918 86.7076 13.4246 87.1564 14.4831C87.6052 15.5415 87.8296 16.7395 87.8296 18.0769C87.8296 19.3979 87.6052 20.5918 87.1564 21.6585C86.7076 22.7169 86.0387 23.5538 85.1494 24.1692C84.2602 24.7846 83.1591 25.0923 81.846 25.0923ZM82.3072 22.4338C83.1134 22.4338 83.7616 22.2533 84.2519 21.8923C84.7505 21.5231 85.112 21.0103 85.3364 20.3538C85.5691 19.6974 85.6855 18.9385 85.6855 18.0769C85.6855 17.2072 85.5691 16.4482 85.3364 15.8C85.112 15.1436 84.7588 14.6349 84.2768 14.2738C83.7948 13.9046 83.1715 13.72 82.407 13.72C81.6008 13.72 80.936 13.9169 80.4124 14.3108C79.8889 14.6964 79.5024 15.2215 79.2531 15.8862C79.0038 16.5426 78.8792 17.2728 78.8792 18.0769C78.8792 18.8892 78.9997 19.6277 79.2407 20.2923C79.49 20.9487 79.8681 21.4697 80.375 21.8554C80.882 22.241 81.5261 22.4338 82.3072 22.4338Z"
                      fill="#101828"
                    />
                    <path
                      d="M97.6827 25.0923C96.3198 25.0923 95.1231 24.801 94.0926 24.2185C93.0621 23.6359 92.256 22.8277 91.6743 21.7938C91.1008 20.76 90.8141 19.5703 90.8141 18.2246C90.8141 16.7723 91.0967 15.5128 91.6618 14.4462C92.2269 13.3713 93.0122 12.5385 94.0178 11.9477C95.0234 11.3569 96.1869 11.0615 97.5082 11.0615C98.9044 11.0615 100.089 11.3856 101.061 12.0338C102.042 12.6738 102.769 13.5805 103.242 14.7538C103.716 15.9272 103.895 17.3097 103.778 18.9015H100.799V17.8185C100.791 16.3744 100.533 15.32 100.026 14.6554C99.5194 13.9908 98.7216 13.6585 97.6329 13.6585C96.4029 13.6585 95.4888 14.0359 94.8904 14.7908C94.2921 15.5374 93.9929 16.6328 93.9929 18.0769C93.9929 19.4226 94.2921 20.4646 94.8904 21.2031C95.4888 21.9415 96.3614 22.3108 97.5082 22.3108C98.2479 22.3108 98.8836 22.1508 99.4155 21.8308C99.9557 21.5026 100.371 21.0308 100.662 20.4154L103.629 21.3015C103.114 22.4995 102.316 23.4308 101.235 24.0954C100.163 24.76 98.9792 25.0923 97.6827 25.0923ZM93.0455 18.9015V16.6615H102.308V18.9015H93.0455Z"
                      fill="#101828"
                    />
                    <path
                      d="M111.708 25.0923C110.47 25.0923 109.39 24.7846 108.467 24.1692C107.545 23.5538 106.83 22.7169 106.323 21.6585C105.816 20.6 105.563 19.4062 105.563 18.0769C105.563 16.7313 105.816 15.5333 106.323 14.4831C106.838 13.4246 107.565 12.5918 108.505 11.9846C109.444 11.3692 110.549 11.0615 111.82 11.0615C113.1 11.0615 114.172 11.3692 115.037 11.9846C115.909 12.5918 116.57 13.4246 117.019 14.4831C117.467 15.5415 117.692 16.7395 117.692 18.0769C117.692 19.3979 117.467 20.5918 117.019 21.6585C116.57 22.7169 115.901 23.5538 115.012 24.1692C114.122 24.7846 113.021 25.0923 111.708 25.0923ZM112.169 22.4338C112.976 22.4338 113.624 22.2533 114.114 21.8923C114.613 21.5231 114.974 21.0103 115.199 20.3538C115.431 19.6974 115.548 18.9385 115.548 18.0769C115.548 17.2072 115.431 16.4482 115.199 15.8C114.974 15.1436 114.621 14.6349 114.139 14.2738C113.657 13.9046 113.034 13.72 112.269 13.72C111.463 13.72 110.798 13.9169 110.275 14.3108C109.751 14.6964 109.365 15.2215 109.115 15.8862C108.866 16.5426 108.741 17.2728 108.741 18.0769C108.741 18.8892 108.862 19.6277 109.103 20.2923C109.352 20.9487 109.73 21.4697 110.237 21.8554C110.744 22.241 111.388 22.4338 112.169 22.4338ZM115.548 24.7231V15.3938H115.174V7H118.203V24.7231H115.548Z"
                      fill="#101828"
                    />
                    <path
                      d="M127.395 25.0923C126.049 25.0923 124.873 24.7928 123.867 24.1938C122.861 23.5949 122.08 22.7703 121.523 21.72C120.975 20.6615 120.701 19.4472 120.701 18.0769C120.701 16.6821 120.983 15.4595 121.548 14.4092C122.113 13.359 122.899 12.5385 123.904 11.9477C124.91 11.3569 126.073 11.0615 127.395 11.0615C128.749 11.0615 129.93 11.361 130.935 11.96C131.941 12.559 132.722 13.3877 133.279 14.4462C133.835 15.4964 134.114 16.7067 134.114 18.0769C134.114 19.4554 133.831 20.6738 133.266 21.7323C132.709 22.7826 131.928 23.6072 130.923 24.2062C129.917 24.7969 128.741 25.0923 127.395 25.0923ZM127.395 22.3108C128.592 22.3108 129.481 21.9169 130.062 21.1292C130.644 20.3415 130.935 19.3241 130.935 18.0769C130.935 16.7887 130.64 15.7631 130.05 15C129.46 14.2287 128.575 13.8431 127.395 13.8431C126.589 13.8431 125.924 14.0236 125.4 14.3846C124.885 14.7374 124.503 15.2338 124.253 15.8738C124.004 16.5056 123.879 17.24 123.879 18.0769C123.879 19.3651 124.174 20.3949 124.765 21.1662C125.363 21.9292 126.24 22.3108 127.395 22.3108Z"
                      fill="#101828"
                    />
                    <path
                      d="M145.923 24.7231V18.3231C145.923 17.9046 145.894 17.441 145.836 16.9323C145.778 16.4236 145.64 15.9354 145.424 15.4677C145.217 14.9918 144.901 14.6021 144.477 14.2985C144.061 13.9949 143.496 13.8431 142.782 13.8431C142.399 13.8431 142.021 13.9046 141.647 14.0277C141.273 14.1508 140.933 14.3641 140.625 14.6677C140.326 14.9631 140.085 15.3733 139.902 15.8985C139.719 16.4154 139.628 17.08 139.628 17.8923L137.845 17.1415C137.845 16.0092 138.065 14.9836 138.506 14.0646C138.955 13.1456 139.611 12.4154 140.475 11.8738C141.34 11.3241 142.403 11.0492 143.667 11.0492C144.664 11.0492 145.487 11.2133 146.135 11.5415C146.783 11.8697 147.298 12.2882 147.681 12.7969C148.063 13.3056 148.345 13.8472 148.528 14.4215C148.711 14.9959 148.827 15.5415 148.877 16.0585C148.936 16.5672 148.965 16.9815 148.965 17.3015V24.7231H145.923ZM136.586 24.7231V11.4308H139.266V15.5538H139.628V24.7231H136.586Z"
                      fill="#101828"
                    />
                    <path
                      d="M157.87 25.0923C156.507 25.0923 155.31 24.801 154.28 24.2185C153.249 23.6359 152.443 22.8277 151.861 21.7938C151.288 20.76 151.001 19.5703 151.001 18.2246C151.001 16.7723 151.284 15.5128 151.849 14.4462C152.414 13.3713 153.199 12.5385 154.205 11.9477C155.21 11.3569 156.374 11.0615 157.695 11.0615C159.091 11.0615 160.276 11.3856 161.248 12.0338C162.229 12.6738 162.956 13.5805 163.43 14.7538C163.903 15.9272 164.082 17.3097 163.966 18.9015H160.986V17.8185C160.978 16.3744 160.72 15.32 160.213 14.6554C159.706 13.9908 158.909 13.6585 157.82 13.6585C156.59 13.6585 155.676 14.0359 155.078 14.7908C154.479 15.5374 154.18 16.6328 154.18 18.0769C154.18 19.4226 154.479 20.4646 155.078 21.2031C155.676 21.9415 156.548 22.3108 157.695 22.3108C158.435 22.3108 159.071 22.1508 159.603 21.8308C160.143 21.5026 160.558 21.0308 160.849 20.4154L163.816 21.3015C163.301 22.4995 162.503 23.4308 161.423 24.0954C160.351 24.76 159.166 25.0923 157.87 25.0923ZM153.233 18.9015V16.6615H162.495V18.9015H153.233Z"
                      fill="#101828"
                    />
                    <path
                      d="M24.5473 11.8941C25.1905 12.5063 25.2068 13.5149 24.5837 14.1468L18.7585 20.054C18.1354 20.686 17.1087 20.702 16.4654 20.0898C15.8222 19.4776 15.8059 18.469 16.429 17.8371L22.2542 11.9299C22.8773 11.2979 23.904 11.2819 24.5473 11.8941Z"
                      fill="url(#paint0_linear_6727_44729-1)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 4.54673C0 2.03564 2.07211 0 4.62819 0H21.5399V0.00124069C28.9908 0.0998525 35 6.06429 35 13.4075C35 20.8123 28.8897 26.8151 21.3523 26.8151C18.6648 26.8151 16.1587 26.052 14.0463 24.7342L6.58815 31.9057C4.13431 34.2652 0 32.5573 0 29.1841V4.54673ZM11.5194 22.7055C9.15709 20.295 7.70452 17.0179 7.70452 13.4075C7.70452 12.5277 8.43056 11.8144 9.32619 11.8144C10.2218 11.8144 10.9479 12.5277 10.9479 13.4075C10.9479 19.0526 15.6061 23.6288 21.3523 23.6288C27.0985 23.6288 31.7567 19.0526 31.7567 13.4075C31.7567 7.76248 27.0985 3.18626 21.3523 3.18626H4.62819C3.86336 3.18626 3.24334 3.79536 3.24334 4.54673V29.1841C3.24334 29.7351 3.91866 30.014 4.31948 29.6286L11.5194 22.7055Z"
                      fill="url(#paint1_linear_6727_44729-1)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_6727_44729-1"
                        x1="31.5325"
                        y1="2.21268"
                        x2="1.00231"
                        y2="33.2898"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9038FF" />
                        <stop offset="0.993738" stopColor="#5551FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_6727_44729-1"
                        x1="31.5325"
                        y1="2.21268"
                        x2="1.00231"
                        y2="33.2898"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9038FF" />
                        <stop offset="0.993738" stopColor="#5551FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <a href="javascript:;" className="flex items-center mb-6">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                        stroke="#000000"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      470-601-1911
                    </h5>
                  </a>
                  <a href="javascript:;" className="flex items-center mb-6">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                        stroke="#000000"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      Pagedone1234@gmail.com
                    </h5>
                  </a>
                  <a href="javascript:;" className="flex items-center mb-6">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                        stroke="#000000"
                        strokeWidth={2}
                      />
                      <path
                        d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
                        stroke="#000000"
                        strokeWidth={2}
                      />
                    </svg>
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      789 Oak Lane, Lakeside, TX 54321
                    </h5>
                  </a>
                  <div className="flex items-center justify-center border-t border-gray-100 pt-6">
                    <a href="javascript:;" className="mr-6">
                      <svg
                        width={31}
                        height={30}
                        viewBox="0 0 31 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.0683594"
                          width={30}
                          height={30}
                          rx={15}
                          fill="#337FFF"
                        />
                        <path
                          d="M18.5094 15.937L18.9369 13.2236H16.3038V11.4599C16.3038 10.7179 16.6714 9.99293 17.8469 9.99293H19.0608V7.68231C18.3539 7.56968 17.6396 7.50874 16.9236 7.5C14.7565 7.5 13.3417 8.80158 13.3417 11.1546V13.2236H10.9395V15.937H13.3417V22.5H16.3038V15.937H18.5094Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a href="javascript:;" className="mr-6">
                      <svg
                        width={31}
                        height={30}
                        viewBox="0 0 31 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.0683594"
                          width={30}
                          height={30}
                          rx={15}
                          fill="url(#paint0_linear_11773_24443)"
                        />
                        <path
                          d="M12.2692 14.9998C12.2692 13.4919 13.492 12.2692 15.0008 12.2692C16.5096 12.2692 17.733 13.4919 17.733 14.9998C17.733 16.5077 16.5096 17.7304 15.0008 17.7304C13.492 17.7304 12.2692 16.5077 12.2692 14.9998ZM10.7922 14.9998C10.7922 17.3228 12.6764 19.2059 15.0008 19.2059C17.3252 19.2059 19.2094 17.3228 19.2094 14.9998C19.2094 12.6768 17.3252 10.7937 15.0008 10.7937C12.6764 10.7937 10.7922 12.6768 10.7922 14.9998ZM18.3925 10.6269C18.3924 10.8213 18.45 11.0114 18.558 11.1731C18.666 11.3348 18.8196 11.4608 18.9993 11.5353C19.1789 11.6098 19.3767 11.6293 19.5675 11.5915C19.7583 11.5536 19.9336 11.4601 20.0712 11.3226C20.2088 11.1852 20.3025 11.0101 20.3406 10.8195C20.3786 10.6288 20.3592 10.4312 20.2848 10.2515C20.2104 10.0719 20.0844 9.91833 19.9227 9.81026C19.7611 9.70219 19.5709 9.64446 19.3764 9.64438H19.376C19.1153 9.6445 18.8652 9.74805 18.6808 9.93228C18.4964 10.1165 18.3927 10.3663 18.3925 10.6269ZM11.6896 21.6672C10.8905 21.6308 10.4561 21.4978 10.1675 21.3854C9.78486 21.2366 9.51183 21.0592 9.22477 20.7727C8.93771 20.4862 8.76002 20.2136 8.6117 19.8312C8.49918 19.5429 8.36608 19.1087 8.32975 18.3101C8.29002 17.4467 8.28208 17.1873 8.28208 14.9998C8.28208 12.8124 8.29067 12.5538 8.32975 11.6896C8.36614 10.891 8.50023 10.4577 8.6117 10.1685C8.76067 9.78606 8.9381 9.51319 9.22477 9.22631C9.51143 8.93942 9.7842 8.76183 10.1675 8.6136C10.456 8.50116 10.8905 8.36813 11.6896 8.33183C12.5535 8.29212 12.813 8.28419 15.0008 8.28419C17.1886 8.28419 17.4483 8.29277 18.313 8.33183C19.1121 8.3682 19.5457 8.5022 19.835 8.6136C20.2177 8.76183 20.4907 8.93981 20.7778 9.22631C21.0649 9.5128 21.2419 9.78606 21.3909 10.1685C21.5034 10.4568 21.6365 10.891 21.6728 11.6896C21.7125 12.5538 21.7205 12.8124 21.7205 14.9998C21.7205 17.1873 21.7125 17.4459 21.6728 18.3101C21.6364 19.1087 21.5027 19.5427 21.3909 19.8312C21.2419 20.2136 21.0645 20.4865 20.7778 20.7727C20.4911 21.059 20.2177 21.2366 19.835 21.3854C19.5465 21.4979 19.1121 21.6309 18.313 21.6672C17.4491 21.7069 17.1895 21.7149 15.0008 21.7149C12.812 21.7149 12.5532 21.7069 11.6896 21.6672ZM11.6217 6.8582C10.7492 6.89791 10.153 7.03618 9.63228 7.23866C9.09304 7.44777 8.63655 7.7283 8.18039 8.18347C7.72422 8.63864 7.44425 9.09557 7.23502 9.63449C7.03241 10.1552 6.89406 10.7507 6.85432 11.6227C6.81393 12.4961 6.80469 12.7753 6.80469 14.9998C6.80469 17.2242 6.81393 17.5035 6.85432 18.3768C6.89406 19.2489 7.03241 19.8444 7.23502 20.3651C7.44425 20.9037 7.72429 21.3611 8.18039 21.8161C8.63648 22.2711 9.09304 22.5512 9.63228 22.7609C10.1539 22.9634 10.7492 23.1017 11.6217 23.1414C12.4961 23.1811 12.775 23.191 15.0008 23.191C17.2266 23.191 17.506 23.1817 18.3799 23.1414C19.2525 23.1017 19.8483 22.9634 20.3693 22.7609C20.9082 22.5512 21.365 22.2713 21.8212 21.8161C22.2774 21.3609 22.5567 20.9037 22.7666 20.3651C22.9692 19.8444 23.1082 19.2488 23.1473 18.3768C23.187 17.5028 23.1962 17.2242 23.1962 14.9998C23.1962 12.7753 23.187 12.4961 23.1473 11.6227C23.1075 10.7507 22.9692 10.1549 22.7666 9.63449C22.5567 9.0959 22.2766 8.63936 21.8212 8.18347C21.3658 7.72758 20.9082 7.44777 20.37 7.23866C19.8483 7.03618 19.2524 6.89726 18.3805 6.8582C17.5066 6.81849 17.2272 6.80859 15.0014 6.80859C12.7756 6.80859 12.4961 6.81783 11.6217 6.8582Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_11773_24443"
                            x1="29.4918"
                            y1={30}
                            x2="-0.50824"
                            y2="-8.07516e-07"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FBE18A" />
                            <stop offset="0.21" stopColor="#FCBB45" />
                            <stop offset="0.38" stopColor="#F75274" />
                            <stop offset="0.52" stopColor="#D53692" />
                            <stop offset="0.74" stopColor="#8F39CE" />
                            <stop offset={1} stopColor="#5B4FE9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                    <a href="javascript:;" className="mr-6">
                      <svg
                        width={31}
                        height={30}
                        viewBox="0 0 31 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.884766"
                          width={30}
                          height={30}
                          rx={15}
                          fill="#33CCFF"
                        />
                        <path
                          d="M23.5888 10.2039C23.0935 10.4171 22.5727 10.5655 22.0394 10.6456C22.2888 10.6028 22.6556 10.154 22.8017 9.97236C23.0235 9.69835 23.1926 9.38555 23.3003 9.04985C23.3003 9.02491 23.3253 8.9893 23.3003 8.97149C23.2878 8.96463 23.2737 8.96103 23.2594 8.96103C23.2451 8.96103 23.231 8.96463 23.2184 8.97149C22.6393 9.28508 22.023 9.52442 21.3841 9.68385C21.3618 9.69066 21.3381 9.69127 21.3155 9.68562C21.2929 9.67997 21.2723 9.66828 21.2558 9.6518C21.2061 9.59257 21.1526 9.53665 21.0956 9.48439C20.8349 9.25089 20.5393 9.05979 20.2193 8.91806C19.7875 8.74088 19.321 8.66415 18.8552 8.69366C18.4031 8.72221 17.9618 8.84345 17.5586 9.04985C17.1616 9.26745 16.8127 9.56306 16.5328 9.91894C16.2384 10.2852 16.0259 10.7103 15.9095 11.1656C15.8135 11.5986 15.8027 12.0462 15.8775 12.4835C15.8775 12.5583 15.8775 12.5689 15.8133 12.5583C13.2738 12.1843 11.1901 11.2831 9.48752 9.34904C9.41272 9.26356 9.37354 9.26356 9.31299 9.34904C8.57213 10.4746 8.93187 12.2555 9.85795 13.1353C9.98261 13.2528 10.1108 13.3668 10.2462 13.4737C9.82159 13.4435 9.40736 13.3284 9.02804 13.1353C8.9568 13.089 8.91762 13.1139 8.91406 13.1994C8.90397 13.3179 8.90397 13.4371 8.91406 13.5556C8.98838 14.1235 9.21222 14.6616 9.56267 15.1147C9.91313 15.5678 10.3776 15.9197 10.9087 16.1343C11.0381 16.1898 11.173 16.2316 11.3112 16.259C10.9181 16.3364 10.515 16.3484 10.118 16.2946C10.0325 16.2768 10.0004 16.3231 10.0325 16.405C10.5561 17.8298 11.6923 18.2643 12.5258 18.5065C12.6397 18.5243 12.7537 18.5243 12.882 18.5528C12.882 18.5528 12.882 18.5528 12.8606 18.5742C12.6148 19.023 11.6211 19.3258 11.1651 19.4825C10.333 19.7814 9.44574 19.8956 8.565 19.8173C8.42609 19.7959 8.39403 19.7995 8.35842 19.8173C8.3228 19.8351 8.35842 19.8743 8.3976 19.9099C8.57569 20.0274 8.75378 20.1307 8.939 20.2305C9.49038 20.5312 10.0733 20.7701 10.6772 20.9428C13.8045 21.8048 17.3236 21.1708 19.6708 18.8378C21.5158 17.007 22.1641 14.4817 22.1641 11.9527C22.1641 11.8566 22.2816 11.7996 22.3493 11.7497C22.8161 11.386 23.2276 10.9565 23.571 10.4746C23.6305 10.4027 23.661 10.3113 23.6565 10.2181C23.6565 10.1647 23.6565 10.1754 23.5888 10.2039Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 rounded-xl p-4 md:p-7"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-green-600 rounded-xl">
              <svg
                className="shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width={10} height={14} x={3} y={8} rx={2} />
                <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                <path d="M8 18h.01" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
                Responsive
              </h3>
              <p className="mt-1 text-gray-600">
                Responsive, and mobile-first project on the web
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                Learn more
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 rounded-xl p-4 md:p-7"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-green-600 rounded-xl">
              <svg
                className="shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx={17} cy={17} r={3} />
                <circle cx={7} cy={7} r={3} />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
                Customizable
              </h3>
              <p className="mt-1 text-gray-600">
                Components are easily customized and extendable
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                Learn more
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 rounded-xl p-4 md:p-7"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-green-600 rounded-xl">
              <svg
                className="shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
                Documentation
              </h3>
              <p className="mt-1 text-gray-600">
                Every component and plugin is well documented
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                Learn more
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 rounded-xl p-4 md:p-7"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-green-600 rounded-xl">
              <svg
                className="shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
                24/7 Support
              </h3>
              <p className="mt-1 text-gray-600">
                Contact us 24 hours a day, 7 days a week
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                Learn more
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
          {/* End Icon Block */}
        </div>
      </div>

    </>
  );
}

export default Home;