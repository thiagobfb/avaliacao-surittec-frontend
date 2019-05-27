import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './authActions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import Messages from '../common/msg/messages'
import Input from '../common/form/inputAuth'

class Auth extends Component {

    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }

    onSubmit(values) {
        const { login } = this.props
        login(values)
    }

    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props

        return (
            <div className="login-box">
                <div className="login-logo"><b> Avaliação</b> Surittec</div>
                <div className="login-box-body">
                    <p className="login-box-msg">Bem vindo!</p>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field component={Input} type="input" name="login" placeholder="Nome" icon='user' />
                        <Field component={Input} type="password" name="senha" placeholder="Senha" icon='lock' />
                        <Row>
                            <Grid cols="4">
                                <button type="submit"
                                    className="btn btn-primary btn-block btn-flat">
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </button>
                            </Grid>
                        </Row>
                    </form>
                    <br />
                </div>
                <Messages />
            </div>
        )
    }
}
Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login },
    dispatch)
export default connect(null, mapDispatchToProps)(Auth)