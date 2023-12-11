const Button = ({name} : {name : string}) => {
  return (
    <button className='py-2 px-5 bg-green-100 rounded-md'>{name}</button>
  )
}

export default Button