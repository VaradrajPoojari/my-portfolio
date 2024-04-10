import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Bookstore Chatbot",
    description:
      "This project aims to create a user-friendly chatbot designed specifically for a bookstore environment. The chatbot is equipped to assist customers in various ways, such as helping with recommendations based on genres, and facilitating the book buying process.",
    image: "/book_store_chat.png",
    github: "https://github.com/VaradrajPoojari/RAG_Bookstore_Chatbot",
    link: "",
  },
  {
    name: "Goodreads Corpus",
    description: "This is a corpus that we have built using the book reviews from Goodreads.We have annotated this data using mechanical turks and each review is labelled as one of the following emotions: enthusiastic, sad, bored, disappointed, content, love, neutral.The results can be used by other people to train their models to recognize certain emotions. It would be interesting to see if certain genres will have reviews with different associated emotions.",
    image: "/Goodreads.jpeg",
    github: "https://github.com/VaradrajPoojari/Goodreads_corpus",
    link: "",
  },
  {
    name: "Airbnb Regression",
    description:
      "A regression problem of predicting reviews_per_month, as a proxy for the popularity of the listing with New York City Airbnb listings from 2019 dataset. Airbnb could use this sort of model to predict how popular future listings might be before they are posted, perhaps to help guide hosts create more appealing listings.",
    image: "/Airbnb.png",
    github: "https://github.com/VaradrajPoojari/Airbnb_regression",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
