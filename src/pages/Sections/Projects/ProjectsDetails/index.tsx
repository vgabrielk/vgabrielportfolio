import './index.scss'
type ProjectProps = {
  opened: boolean,
  toogleModal: any,
  itemData: any
}

const ProjectDetails = (props: ProjectProps) => {
  console.log(props.itemData)
  return (
    <div className={props.opened ? 'details active' : 'details'}>
        <img src="../../../../assets/svg/yellow-blur.svg" alt="" className="light-details" />
      <h2>{props.itemData.fields?.title}</h2>
      <div className='details-image'>
        <img src={props.itemData.fields?.capaProjeto?.fields?.file?.url} alt="" />
        <div className='links'>
          {props?.itemData?.fields?.link_preview ? (
            <a target='_blank' href={props.itemData.fields?.link_preview}>Visitar site</a>
          ): <p>Esse site não tem link para visita</p>}
        </div>
      </div>
      <div onClick={props.toogleModal} className="close-details">
        <img src="../../../../assets/svg/arrow.svg" alt="" />
      </div>
    </div>
  )
}

export default ProjectDetails