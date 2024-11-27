export default function ItemListContainer({greeting, color}) {
    return (
    <>
    <div className="title-point">
        <h2 style={{color: color}}>{greeting}</h2>
    </div>
    </>
    )
}
