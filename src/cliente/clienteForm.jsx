import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './clienteActions'
import LabelAndInput from '../common/form/labelAndInput'

import { create, update } from './clienteActions'

class ClienteForm extends Component {

    render() {
        console.log(this.state)
        const { handleSubmit } = this.state == null ? this.props.create : this.props.update
        return (
            <div>
                <ContentHeader title='Cadastro de Clientes' small='Versão 1.0' />
                <Content>
                    <form role='form' onSubmit={handleSubmit}>
                        <div className='box-body'>
                            <Field name='nome' component={LabelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' />
                            <Field name='cpf' component={LabelAndInput} label='CPF' cols='12 4' placeholder='Informe o CPF' />

                            <Field name='cep' component={LabelAndInput} label='CEP' cols='12 4' placeholder='Informe o CEP' />
                            <Field name='logradouro' component={LabelAndInput} label='Logradouro' cols='12 4' placeholder='Informe o endereço' />
                            <Field name='numero' component={LabelAndInput} label='Nº' cols='12 4' placeholder='Informe o número' />
                            <Field name='complemento' component={LabelAndInput} label='Complemento' cols='12 4' placeholder='Informe o complemento' />
                            <Field name='bairo' component={LabelAndInput} label='Bairro' cols='12 4' placeholder='Informe o bairro' />
                            <Field name='cidade' component={LabelAndInput} label='Cidade' cols='12 4' placeholder='Informe a cidade' />
                            <Field name='uf' component={LabelAndInput} label='UF' cols='12 4' placeholder='Informe o estado' />

                            <Field name='telefone' component={LabelAndInput} label='Telefone' cols='12 4' placeholder='Informe o telefone' />
                            <Field name='email' component={LabelAndInput} label='E-Mail' cols='12 4' placeholder='Informe o email' />
                        </div>
                        <div className='box-footer'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                            <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                        </div>
                    </form>
                </Content>
            </div>
        )
    }
}
ClienteForm = reduxForm({form: 'clienteForm', destroyOnUnmount:
false})(ClienteForm)
const mapDispatchToProps = dispatch => bindActionCreators({init, create, update}, dispatch)
export default connect(null, mapDispatchToProps)(ClienteForm)