import './index.scss'
const Homepage = () => {

  return (
    <main className='home'>
        <div className="logo">
            <img width="100px" src="/assets/svg/logo.svg" alt="" />
        </div>
        <span className='texts'>
            <h1>Vitor Felix</h1>
          <p>Desenvolvedor frontend com sólidos conhecimentos em frontend, buscando oportunidades no mercado.</p>
        </span>
        <a href="https://linktr.ee/vgabriel7k" target='_blank'>
        <button className="button">
            <p>contato</p>
            <img src="/assets/svg/arrow.svg" alt="" />
        </button>
        </a>
        <img src="/assets/svg/yellow-blur.svg" alt="" className="light-blur" />
    </main>
  )
}

export default Homepage
