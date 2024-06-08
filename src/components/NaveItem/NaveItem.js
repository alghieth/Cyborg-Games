import './NaveItem.css'

function NaveItem(props) {
  return (
    <li className='nav-item'>
        {props.children}
    </li>
  )
}

function NaveItemDropDown(props) {
    return (
      <li className='nav-item dropdown'>
          {props.children}
      </li>
    )
  }

export default NaveItem
export {NaveItemDropDown}