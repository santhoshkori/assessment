import {Component} from 'react'

import {CiSearch} from 'react-icons/ci'
import {MdFormatLineSpacing} from 'react-icons/md'
import {SiWindows} from 'react-icons/si'
import ProductCardui from '../ProductCard'
import './index.css'

class SimplePrpducts extends Component {
  state = {productitemsList: []}

  componentDidMount() {
    this.getProductsList()
  }

  getSeaprateProducts = product => {
    console.log(product)
    this.setState({productitemsList: product})
  }

  getProductsList = async () => {
    const response = await fetch(
      'https://products-api-2ttf.onrender.com/api/products',
    )
    const data = await response.json()
    this.getSeaprateProducts(data.data)
  }

  render() {
    const {productitemsList} = this.state
    return (
      <div className="bgcontainer">
        <div className="Searchcontainer">
          <input type="search" className="searchele margining" />

          <CiSearch className="margining" />
          <MdFormatLineSpacing className="margining" />
          <SiWindows className="margining" />
        </div>
        <div className="productitemscontainer">
          {productitemsList.map(eachproduct => (
            <ProductCardui eachproduct={eachproduct} />
          ))}
        </div>
      </div>
    )
  }
}

export default SimplePrpducts
