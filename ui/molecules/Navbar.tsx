'use client'

import { useParams } from 'next/navigation'
import {Navbar, NavbarBrand} from 'flowbite-react'

const Header = () =>  {
    return (
        <Navbar className='py-4 px-4 border-b print:hidden'>
            <NavbarBrand href="">
                {"</>"}
            </NavbarBrand>
        </Navbar>
    )
}

export default Header