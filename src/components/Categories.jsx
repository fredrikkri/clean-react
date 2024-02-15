import {Link, Outlet} from "react-router-dom"

export default function Categories() {
    const categories = ["Technology", "Food", "Fashion", "Health", "Sports", "Entertainment", "Home & Garden", "Automotive", "Travel", "Books"];
    
    return (
        <>
            <Outlet />
        </>
    )
}