import { FC } from "react"
import { Redirect } from "react-router-dom"

import "./styles.scss"

type PostProps = {
  title: string
  image: string
  tags: string[]
}

export const Post: FC<PostProps> = ({ title, image, tags }) => {
  /** Removes glyphs, put dash between the spaces, lowercase */
  const titleURL = title.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  
  const handleRedirect = () => window.location.href = `/${titleURL}`
  return (
    <section onClick={() => handleRedirect()} className="postContainer">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <hr />
      <figure>
        <img src={image} alt={title} />
        <figcaption>
          {tags.map(tag => {
            return (
              <span key={tag}>
                {`#${tag}`}
              </span>
            )
          })}
        </figcaption>
      </figure>
    </section>
  )
}