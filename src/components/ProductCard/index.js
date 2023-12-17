import './index.css'

const ProductCardui = props => {
  const {eachproduct} = props
  console.log(eachproduct)
  return (
    <div className="productcard">
      <p className="bandgestyling marginingright">
        {eachproduct.product_badge}
      </p>
      <img
        className="marginingright"
        src={eachproduct.product_image}
        alt={eachproduct.product_title}
      />
      <div>
        <p>{eachproduct.product_variants[0].v1}</p>
        <p>{eachproduct.product_variants[1].v2}</p>
        <p>{eachproduct.product_variants[2].v3}</p>
      </div>
    </div>
  )
}

export default ProductCardui
