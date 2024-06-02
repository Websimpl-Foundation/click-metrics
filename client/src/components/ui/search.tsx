const Search = () => {
    return (
        <div className="border-[1.5px] border-[#2a5bd7] rounded-md py-2 px-4 flex gap-2 items-center w-[24rem]">
            <i className="fa-solid fa-magnifying-glass text-[#71809f]"></i>
            <input type="text" className='bg-[#f4f6fa] outline-none rounded-md w-full' placeholder='Search' />
        </div>
    )
};

export default Search;