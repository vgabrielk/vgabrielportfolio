import './index.scss'


const Homepage = () => {
  return (
    <main className='home'>
        <div className="logo">
            <img width="100px" src="../../../public/assets/svg/logo.svg" alt="" />
        </div>
        <span className='texts'>
            <h1>Alcance mais clientes</h1>
            <p>Se você precisa de um site de alta performance para aumentar suas vendas, você veio ao lugar certo.</p>
        </span>
        <button className="button">
            <p>Meu contato</p>
            <img src="../../../public/assets/svg/arrow.svg" alt="" />
        </button>
        <img src="../../../public/assets/svg/yellow-blur.svg" alt="" className="light-blur" />
    </main>
  )
}

export default Homepage