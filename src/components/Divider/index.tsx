import './index.scss'

type Props = {
    divider?: boolean
}
const Divider = (props : Props) => {
    return (
        <div className="divider">
            {props.divider && (
            <img src="../../../assets/svg/divider.svg" alt="" />
            )}
        </div>
    )
}

export default Divider