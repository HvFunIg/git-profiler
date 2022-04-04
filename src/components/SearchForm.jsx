import React, {useRef} from "react";



function SearchForm({value, onSearch}) {
    const search = useRef();
    const submit = e =>{
        e.preventDefault();
        onSearch(search.current.value);
    }
    return (
        <form onSubmit={submit}>
            <label > Enter username:</label>
            <div>
                <input ref={search} type="search"  placeholder={value}/>
                <input className="form-search" type="submit" value="Search"/>
            </div>

        </form>
    )
}

export default SearchForm;
