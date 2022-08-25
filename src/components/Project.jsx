const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <a href={item.href} target='_blank' rel="noreferrer">
        <div className="mb-8 hover:text-gray-500 transition-all duration-300">
          <img className="w-[325px] h-[325px] md:w-[375px] md:h-[375px] lg:w-[425px] lg:h-[425px]" src={item.image} alt="" />
          <h2 className="text-2xl font-semibold">{item.name}</h2>
          <h3>{item.tech}</h3>
        </div>
      </a>
    </div>
  )
}

export default Project