import React from 'react'
import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'
import PhotosliderComponent from '../components/HomeComponents/PhotosliderComponent'


export default function HomePage() {
    return (
        <div>
            <NavbarComponent />
            <PhotosliderComponent />
            <FooterComponent />
        </div>
    )
}
