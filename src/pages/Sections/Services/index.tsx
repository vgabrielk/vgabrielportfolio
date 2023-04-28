import './index.scss'

const Services = () => {
    return (
        <div className='container'>
            <h1>Serviços</h1>
            <div className="services">

                <div className="service">
                    <div className="image">
                        <img src="/assets/svg/build.svg" alt="" />
                    </div>
                    <p>Sites institucionais, landing pages, sistemas e aplicativos.</p>
                </div>
                <div className="service">
                    <div className="image">
                        <img src="/assets/svg/cloud.svg" alt="" />
                    </div>
                    <p>Criação de design, copy, SEO, a combinação perfeita para alavancar o nome da sua empresa.</p>
                </div>
            </div>
        </div>
    )
}

export default Services