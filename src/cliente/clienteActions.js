import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showModal } from '../common/modal/modalActions'

const BASE_URL = 'http://localhost:8080'


export function getList() {
  console.log('Executando Listagem de Clientes')
  const request = axios.get(`${BASE_URL}/clientes`)
  return {
    type: 'CLIENTES_FETCHED',
    payload: request
  }
}

export function create(values) {
  return submit(values, 'post')
}

export function update(values) {
  return submit(values, 'put')
}

export function remove(values) {
  return submit(values, 'delete')
}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : ''
    axios[method](`${BASE_URL}/clientes/${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        dispatch(init())
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro',
          error))
      })
  }
}

export function showUpdate(cliente) {
  return [
    initialize('clienteForm', cliente)
  ]
}

export function showDelete(cliente) {
  return [
    showModal(),
    initialize('clienteForm', cliente)
  ]
}

export function init() {
  return [
    getList(),
    initialize('clienteForm', INITIAL_VALUES)
  ]
}