import './index.scss'

const Services = () => {
    return (
        <div className='container'>
            <div className="services">

                <div className="service">
                    <div className="image">
                        <img src="/assets/svg/build.svg" alt="" />
                    </div>
                    <p>Desenvolvimento frontend, desde o design até a integração com o backend.</p>
                </div>
                <div className="service">
                    <div className="image">
                        <img src="/assets/svg/cloud.svg" alt="" />
                    </div>
                    <p>Desenvolvimento backend, criação de API's REST.</p>
                </div>
            </div>
        </div>
    )
}

export default Services