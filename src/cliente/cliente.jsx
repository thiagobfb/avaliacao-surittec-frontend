import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import List from './clienteList'


class Cliente extends Component {
    render() {

        return (
            <div>
                <ContentHeader title='Lista de Clientes' small='Versão 1.0' />
                <Content>
                    <a href="#/novo" className="btn btn-success btn-lg active" role="button" aria-pressed="true">Novo Cliente</a>
                    <List />
                </Content>
            </div>
        )
    }
}

export default Cliente