import React from 'react';
import {render, screen, } from '@testing-library/react';
import App from './App';


test('render App without errors', () => {
    render(<App />)
})

test('when app mounts, Add New Animal header exists on the screen', () => {
    //Arrange - rendering something to the screen
    render(<App />)
    //Act - find the header
//screen is similar to document but has alternate testing methods to get elements on screen 
//document.getElementById('header') == screen.getBy
   const header = screen.getByText('Add New Animal');
//Assert - what to expect 
//expect(header).toBeTruthy();
expect(header).toBeInTheDocument();
expect(header).toHaveTextContent(/add new animal/i);
})

// test('', () => {
//     render('')
// })