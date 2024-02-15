import {Link, Outlet} from "react-router-dom"

export default function Categories() {
    const categories = ["Technology", "Food", "Fashion", "Health", "Sports", "Entertainment", "Home & Garden", "Automotive", "Travel", "Books"];
    
    return (
        <>
            <h1>Categories</h1>
            <ul>
                {categories.map((category, index) => <li key={category + index}><Link to={category}>{category}</Link></li>)}
            </ul>
            <Outlet />
        </>
    )
}