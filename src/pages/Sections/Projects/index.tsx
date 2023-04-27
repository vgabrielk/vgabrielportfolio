import { Fragment, useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import client from "../../../services/contentful";
import useWindowDimension from 'use-window-dimensions';

import './index.scss'
import ProjectDetails from "./ProjectsDetails";

const Projects = () => {
    const { width } = useWindowDimension();

    const [data, setData] = useState([])
    const [modalDetails, setModalDetails] = useState(false)
    const [item, setItem] = useState({})


    const toogleModal = (item: object) => {
        setModalDetails(prev => !prev)
        setItem(item)
    }
    console.log(data)

    useEffect(() => {
        client.getEntries({
            content_type: "projects"
        })
            .then((res: any) => setData(res.items));
    }, [])

    return (
        <div className="projects container">
            <ProjectDetails
                itemData={item}
                opened={modalDetails}
                toogleModal={toogleModal}
            />
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={60}
                totalSlides={data.length}
                visibleSlides={width >= 700 ? 2 : 1}
                infinite={true}
                dragEnabled={modalDetails ? false : true}
                lockOnWindowScroll
            >
                <Slider>
                    {data.length && data.map((item: any, index) => (
                        <Fragment key={item.fields.title}>
                            <Slide onClick={() => toogleModal(item)} key={index} index={index + 1}>
                                <div className="background">
                                    <img src="/src/assets/img/tela.png" alt="" />
                                    <img className="img-project" src={item?.fields?.capaProjeto?.fields?.file?.url} alt="" />
                                </div>
                            </Slide>
                        </Fragment>
                    ))}
                </Slider>
                <Fragment>
                    <ButtonBack style={modalDetails ? { opacity: 0 } : { opacity: 1 }}>
                        <img className="arrow arrow-left" src="/src/assets/svg/arrow.svg" alt="" />
                    </ButtonBack>
                    <ButtonNext style={modalDetails ? { opacity: 0 } : { opacity: 1 }}>
                        <img className="arrow" src="/src/assets/svg/arrow.svg" alt="" />
                    </ButtonNext>
                </Fragment>
            </CarouselProvider>
        </div>
    )
}

export default Projects