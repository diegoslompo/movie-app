import React from "react"
import ShallowRenderer from 'react-test-renderer/shallow';
import Notification from '../src/components/Notification'

describe('Testing component Notification', () => { 
    it('should render corretly', () => {
        const renderer = new ShallowRenderer()
        const wrapper = renderer.render(
            <Notification data={{}} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})