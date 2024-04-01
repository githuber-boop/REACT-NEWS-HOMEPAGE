import React from 'react'

const Article = ( {id, title , desc, img} ) => {
  return (
    <article className="new_article-1 new_article">
    <img src={img} alt="article image of retro cocmputer"/>
    <div className="content">
      <h3>{id}</h3>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  </article>
  )
}

export default Article