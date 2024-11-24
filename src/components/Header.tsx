const Header = () => {
    return (
        <header className='grid place-items-center grid-cols-3'>
            <div className='col-span-1 flex justify-start w-full'>
              <button className='text-left ml-4'>
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <h1 className='col-span-1 text-xl font-bold uppercase'>Techno-Objectivist Store</h1>
            <div className='col-span-1 flex justify-end w-full'>
                <button className='mr-4'>Cart</button>
            </div>
        </header>
    )
}

export default Header;