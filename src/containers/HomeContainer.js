import {connect} from 'react-redux'
import {addToCart} from '../services/actions/action'
import Home from '../components/Home';


const mapStateToProps=state=>({
})


const mapDispatchToProps=dispatch=>({
addToCartHandler:data=>data(addToCart(data))
})

export default connect(mapDispatchToProps,mapStateToProps)(Home)







// export default Home