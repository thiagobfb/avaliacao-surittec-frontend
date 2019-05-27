import { hideModal } from '../common/modal/modalActions'
import { remove } from './clienteActions'

const DeleteClienteModal = ({ cliente, dispatch }) => (
    <div>
        <p>Delete Cliente {cliente.nome}?</p>
        <button onClick={() => {
            dispatch(remove(cliente)).then(() => {
                dispatch(hideModal())
            })
        }}>
            Sim
    </button>
        <button onClick={() => dispatch(hideModal())}>
            Não
    </button>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({remove}, dispatch)
export default connect(null, mapDispatchToProps)(DeleteClienteModal)

// export default connect(
//     (state, ownProps) => ({
//         post: state.postsById[ownProps.postId]   
//     })
// )(DeletePostModal)