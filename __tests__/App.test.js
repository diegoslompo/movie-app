import React from "react"
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../src/App'

describe('Testing component App', () => { 
    it('should render corretly', () => {
        const renderer = new ShallowRenderer()
        const wrapper = renderer.render(
            <App  />
        )
        expect(wrapper).toMatchSnapshot()
    })
})