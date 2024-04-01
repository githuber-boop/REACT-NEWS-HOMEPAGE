import React from 'react'
import Article from './Article'

const Articles = () => {
  return (
    <section className="articles">
      <Article title='Reviving Retro PCs' id='01' desc='What happens when old PCs are given modern upgrades?' img='src/assets/images/image-retro-pcs.jpg'/>
      <Article title='Top 10 Laptops of 2022' id='02' desc='Our best picks for various needs and budgets.?' img='src/assets/images/image-top-laptops.jpg'/>
      <Article title='The Growth of Gaming' id='03' desc='How the pandemic has sparked fresh opportunities.' img='src/assets/images/image-gaming-growth.jpg'/>
</section>

  )
}

export default Articles