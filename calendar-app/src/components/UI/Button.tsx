

interface ButtonProps{
    content:string
    className:string
    func?: () => void
}

const Button = ({func = undefined, content = '', className = 'button'}:ButtonProps)=>{
    return(
        <button onClick={func!} className={`button ${className}`}>
            {content}
        </button>
    )
}

export default Button