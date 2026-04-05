import './BlockDate.css'

interface blockDateProps{
    day: number
    classNameStatus:string
}

const BlockDate = ({ day = 1, classNameStatus = 'inactive'}:blockDateProps)=>{
    return(
        <div className={`block ${classNameStatus}`}>
            <p>{day == 0 ? '' : day}</p>
        </div>
    )
}

export default BlockDate