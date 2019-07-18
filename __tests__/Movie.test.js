import React from "react"
import ShallowRenderer from 'react-test-renderer/shallow';
import Movie from '../src/components/Movie'

describe('Testing component Movie', () => { 
    it('should render corretly', () => {
        const renderer = new ShallowRenderer()
        const wrapper = renderer.render(
            <Movie movieItem={[]} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})