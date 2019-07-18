import React from "react"
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetails from '../src/components/MovieDetails'

describe('Testing component Movie Details', () => { 
    it('should render corretly', () => {
        const renderer = new ShallowRenderer()
        const wrapper = renderer.render(
            <MovieDetails item={{}} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})