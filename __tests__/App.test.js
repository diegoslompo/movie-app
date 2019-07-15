import React from "react"
// vai simular a dom em testes, renderizando componentes usando shallow
// import { shallow } from "enzyme" DEPRECATED
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../src/App'



// descreve o teste no componente
describe('Testing component App', () => { 
    // passa a ação desejada de retorno
    it('should render corretly', () => {

        const renderer = new ShallowRenderer()
        const wrapper = renderer.render(
            <App />
        )

        expect(wrapper).toMatchSnapshot()
    })
})