import React from 'react'

const RiddleList = () => {
    const riddleData = [
        {
            words:"What time is it when an elephant sits on a fence?",
            answer:"Time to fix the fence."
         },
         {
            words:"What gets wet while drying?",
            answer:"A towel"
         },
         {
            words:"What is the difference between a jeweler and a jailer?",
            answer:"A jeweler sells watches and a jailer watches cells."
         },
         {
            words:"What can go up a chimney down, but can’t go down a chimney up?",
            answer:"An umbrella"
         },
         {
            words:"What can you hold in your right hand, but never in your left hand?",
            answer:"Your left hand"
         },
         {
            words:"What can you catch, but not throw?",
            answer:"A cold"
         },
         {
            words:"What kind of band never plays music?",
            answer:"A rubber band"
         },
         {
            words:"What has many teeth, but cannot bite?",
            answer:"A comb"
         },
         {
            words:"What has lots of eyes, but can’t see?",
            answer:"A potato"
         },
         {
            words:"What has one eye, but can’t see?",
            answer:"A needle"
         },
         {
            words:"What can travel all around the world without leaving its corner?",
            answer:"A stamp"
         },
         {
            words:"What two things can you never eat for breakfast?",
            answer:"Lunch and dinner"
         },
         {
            words:"What kind of room has no doors or windows?",
            answer:"A mushroom"
         },
         {
            words:"What do Alexander the Great and Winnie the Pooh have in common?",
            answer:"Their middle names."
         },
         {
            words:"Before Mt. Everest was discovered, what was the highest mountain in the world?",
            answer:"Mt. Everest, it just wasn’t discovered yet."
         },
         {
            words:"What is the end of everything?",
            answer:"The letter “G”"
         },
         {
            words:"What part of the chicken has the most feathers?",
            answer:"The outside"
         },
         {
            words:"What has a bottom at the top?",
            answer:"Your legs"
         },
         {
            words:"How far can you walk into the woods?",
            answer:"Halfway — after that, you’re walking out."
         },
         {
            words:"What is red and smells like blue paint?",
            answer:"Red paint"
         },
    ]

  return (
    <>
        <div className="py-10  columns-2 md:columns-2 lg:columns-3 ">
                
                {riddleData.map((data, index) => (
                  <div className="mb-4 rounded bg-[#4799eb] border group flex flex-col overflow-hidden justify-center shadow-md items-center cursor-zoom-in" key={index}>
                  <div className="flex-grow py-2 lg:py-4 md:py-4 px-4">
                    <span className="flex justify-center py-1">
                      <span className="rounded-full p-1.5 border-2 border-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white  icon icon-tabler icon-tabler-question-mark"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
                          <path d="M12 19l0 .01"></path>
                        </svg>
                      </span>
                    </span>
                    <p className="leading-tight md:leading-snug  text-white text-left text-base md:text-xl font-medium">
                      {data.words}
                    </p>
                  </div>
                </div>
                ))}
              </div>
    </>
  )
}

export default RiddleList