

interface Props{
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({search, setSearch})=>{
    return(
        <div className="container mb-3">
            <div className = 'row'>
                <div className='input-group mt-3'>
                    <input 
                        className = 'form-control'
                        type="search" 
                        placeholder= 'Search...'
                        aria-label="Search"
                        value = {search}
                        onChange = {(e)=>setSearch(e.target.value)}
                    />
                    <div className="input-group-prepend">
                        <button className="btn" type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar