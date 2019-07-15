import React from "react"
import ShallowRenderer from 'react-test-renderer/shallow';
import Counter from '../src/Counter'

// descreve o teste no componente
describe('Testing component Counter', () => { 
    it('should render corretly', () => {

        const renderer = new ShallowRenderer()
        const wrapper = renderer.render(
            <Counter count={6} />
        )

        expect(wrapper).toMatchSnapshot();

    })
})