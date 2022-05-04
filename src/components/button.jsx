function Button({label,action}){
    return (
        <button onClick={action} 
                className="border-2 border-blue-800 p-4 rounded-xl bg-green-600 text-blue-300">
                {label}
        </button>
    );
}

export default Button;