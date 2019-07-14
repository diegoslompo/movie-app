import React from "react"
// vai simular a dom em testes, renderizando componentes usando shallow
import { shallow } from "enzyme"
import App from '../src/App'

// descreve o teste no componente
describe('Testing component App', () => {
    // passa a ação desejada de retorno
    it('should render corretly', () => {

        const wrapper = shallow(
            <App />
        )

        expect(wrapper).toMatchSnapshot()
    })
})