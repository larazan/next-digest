import React from "react";
import Link from "next/link";

import AvaArtist from "./AvaArtist";

const AuthorList = () => {
  const authorData = [
    {
      id: "6110d4a89c759c204c253c1d",
      name: "Rodney Alexander",
      bio: "Politician",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-alexander",
    },
    {
      id: "6110d4a89c759c204c253c1e",
      name: "Rodney Atkins",
      bio: "Musician",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-atkins",
    },
    {
      id: "6110d4a89c759c204c253c1f",
      name: "Rodney Brooks",
      bio: "Scientist",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-brooks",
    },
    {
      id: "6110d4a89c759c204c253c20",
      name: "Rodney Carrington",
      bio: "Comedian",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-carrington",
    },
    {
      id: "6110d4a89c759c204c253c21",
      name: "Rodney Crowell",
      bio: "Musician",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-crowell",
    },
    {
      id: "6110d4a89c759c204c253c22",
      name: "Rodney Dangerfield",
      bio: "Comedian",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-dangerfield",
    },
    {
      id: "6110d4a89c759c204c253c23",
      name: "Rodney Frelinghuysen",
      bio: "Politician",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-frelinghuysen",
    },
    {
      id: "6110d4a89c759c204c253c24",
      name: "Rodney Hood",
      bio: "Basketball Player",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-hood",
    },
    {
      id: "6110d4a89c759c204c253c25",
      name: "Rodney King",
      bio: "Celebrity",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-king",
    },
    {
      id: "6110d4a89c759c204c253c26",
      name: "Rodney Mullen",
      bio: "Athlete",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-mullen",
    },
    {
      id: "6110d4a89c759c204c253c27",
      name: "Rodney Stark",
      bio: "Theologian",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodney-stark",
    },
    {
      id: "6110d4a89c759c204c253c28",
      name: "Rodrigo Duterte",
      bio: "Statesman",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodrigo-duterte",
    },
    {
      id: "6110d4a89c759c204c253c29",
      name: "Rodrigo Rato",
      bio: "Politician",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodrigo-rato",
    },
    {
      id: "6110d4a89c759c204c253c2a",
      name: "Rodrigo Santoro",
      bio: "Actor",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "rodrigo-santoro",
    },
    {
      id: "6110d4a89c759c204c253c2b",
      name: "Roelof Botha",
      bio: "Businessman",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roelof-botha",
    },
    {
      id: "6110d4a89c759c204c253c2c",
      name: "Roger Ailes",
      bio: "Businessman",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-ailes",
    },
    {
      id: "6110d4a89c759c204c253c2d",
      name: "Roger Allam",
      bio: "Actor",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-allam",
    },
    {
      id: "6110d4a89c759c204c253c2e",
      name: "Roger Altman",
      bio: "Businessman",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-altman",
    },
    {
      id: "6110d4a89c759c204c253c2f",
      name: "Roger Andrew Taylor",
      bio: "Musician",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-andrew-taylor",
    },
    {
      id: "6110d4a89c759c204c253c30",
      name: "Roger Angell",
      bio: "Writer",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-angell",
    },
    {
      id: "6110d4a89c759c204c253c31",
      name: "Roger Ascham",
      bio: "Writer",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-ascham",
    },
    {
      id: "6110d4a89c759c204c253c32",
      name: "Roger Avary",
      bio: "Producer",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-avary",
    },
    {
      id: "6110d4a89c759c204c253c33",
      name: "Roger B. Chaffee",
      bio: "Astronaut",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-b.-chaffee",
    },
    {
      id: "6110d4a89c759c204c253c34",
      name: "Roger B. Taney",
      bio: "Judge",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-b.-taney",
    },
    {
      id: "6110d4a89c759c204c253c35",
      name: "Roger Babson",
      bio: "Educator",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-babson",
    },
    {
      id: "6110d4a89c759c204c253c36",
      name: "Roger Bacon",
      bio: "Philosopher",
      createdAt: "2021-08-09T07:09:30.384Z",
      updatedAt: "2021-08-09T07:09:30.384Z",
      slug: "roger-bacon",
    },
    {
      id: "6110d4a89c759c204c253c37",
      name: "Roger Bannister",
      bio: "Athlete",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-bannister",
    },
    {
      id: "6110d4a89c759c204c253c38",
      name: "Roger Bart",
      bio: "Actor",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-bart",
    },
    {
      id: "6110d4a89c759c204c253c39",
      name: "Roger Caras",
      bio: "Activist",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-caras",
    },
    {
      id: "6110d4a89c759c204c253c3a",
      name: "Roger Clemens",
      bio: "Athlete",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-clemens",
    },
    {
      id: "6110d4a89c759c204c253c3b",
      name: "Roger Corman",
      bio: "Producer",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-corman",
    },
    {
      id: "6110d4a89c759c204c253c3c",
      name: "Roger Craig",
      bio: "Athlete",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-craig",
    },
    {
      id: "6110d4a89c759c204c253c3d",
      name: "Roger Craig Smith",
      bio: "Actor",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-craig-smith",
    },
    {
      id: "6110d4a89c759c204c253c3e",
      name: "Roger Daltrey",
      bio: "Musician",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-daltrey",
    },
    {
      id: "6110d4a89c759c204c253c3f",
      name: "Roger Deakins",
      bio: "Director",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-deakins",
    },
    {
      id: "6110d4a89c759c204c253c40",
      name: "Roger Ebert",
      bio: "Critic",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-ebert",
    },
    {
      id: "6110d4a89c759c204c253c41",
      name: "Roger Federer",
      bio: "Athlete",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-federer",
    },
    {
      id: "6110d4a89c759c204c253c42",
      name: "Roger Fry",
      bio: "Artist",
      createdAt: "2021-08-09T07:09:30.385Z",
      updatedAt: "2021-08-09T07:09:30.385Z",
      slug: "roger-fry",
    },
  ];

  return (
    <>
      <section className="grid w-full grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 xl:grid-cols-4 xl:gap-4">
        {authorData.map((data, index) => (
          <div className="transition-all duration-150 flex mr-[1em] mb-[1em] hover:scale-110" key={index}>
            <div className="flex  w-[90px] md:w-[130px]">
              <div className=" flex flex-col items-center2 mx-auto w-full transition duration-500 ease-in-out">
                <Link
                  href="/author/kim-ji-won"
                  className="flex px-1 w-[90px] h-[90px] md:w-[130px] md:h-[130px]"
                >
                  <AvaArtist username={data.name} />
                </Link>
                <div className="px-3 py-0 flex flex-col justify-center text-center leading-tight">
                  <h3 className="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm md:text-md text-black leading-tight md:leading-tight font-semibold capitalize">
                    <Link href="/author/kim-ji-won">{data.name}</Link>
                  </h3>{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AuthorList;
