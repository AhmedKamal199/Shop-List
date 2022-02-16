import PropTypes from 'prop-types'

const Header = ({title,number}) => {
  return (
    <>
        <h1>Hello {title} and {number}</h1>      
    </>
  )
}
// Header.defaultProps = {
//     title : 'task tracer',
//     number : 1
// }

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header
