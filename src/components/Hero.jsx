import NewArticle from "./NewArticle";

const Hero = () => {
  return (
    <>
<main className="hero">
  <section className="hero_description">
    <img src="src/assets/images/image-web-3-desktop.jpg" alt="Image web 3 desktop" />
    <div className="hero_text">
      <h1>The Bright Future of
         Web 3.0?</h1>
      <div className="call_out">
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?</p>
        <a className="button" href="#">Read more</a>
      </div>
    </div>
  </section>
  
  <aside className="new_articles">
    <h1 className="heading">New</h1>
    <NewArticle/>
    <hr />
    <NewArticle/>
    <hr />
    <NewArticle/>
  </aside>
</main>

    </>
  )
}

export default Hero;