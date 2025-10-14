export const Button = ({onClick, title}:{onClick: () => void, title: string}) =>{
    return(
        <button 
        className="py-2 px-4 bg-gray-100 rounded-md cursor-pointer" 
        onClick={onClick}>{title}
        </button>
    )
}