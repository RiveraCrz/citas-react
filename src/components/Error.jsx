const Error = ({children}) => {
  return (
    
        <div className="bg-red-700 text-white text-center p-2 uppercase font-bold mb-1 rounded">
          <p>{children}</p>
        </div>
  )
}

export default Error