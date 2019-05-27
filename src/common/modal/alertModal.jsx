import React from 'react'
import ClienteDeleteModal from '../../cliente/clienteDeleteModal'

const MODAL_COMPONENTS = {
    'DELETE_CLIENTE': ClienteDeleteModal
    /* other modals */
}

const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
        return <span /> // after React v15 you can return null here
    }

    const SpecificModal = MODAL_COMPONENTS[modalType]
    return <SpecificModal {...modalProps} />
}

export default connect(
    state => state.modal
)(ModalRoot)