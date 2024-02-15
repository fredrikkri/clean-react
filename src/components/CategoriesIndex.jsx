export default function CategoriesIndex() {
    return (
        <>
            <h1>Index</h1>
            <h1>Categories</h1>
            <ul>
                {categories.map((category, index) => <li key={category + index}><Link to={category}>{category}</Link></li>)}
            </ul>
        </>
    )
}