"use client"

import { Button, Navbar } from 'keep-react'
import Image from 'next/image'

export default function ButtonUi() {
  return (
    <div>
         <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Link linkName="Home" />
          <Navbar.Link linkName="Projects" />
          <Navbar.Link linkName="Blogs" />
        </Navbar.Container>
        <Navbar.Brand>
        
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="Blogs" />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
          <Button size="sm" variant="link">
            <span>
              {/* <MagnifyingGlass size={20} color="#444" /> */}
            </span>
            <span className="ml-2 text-metal-600">Search</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
    </div>
  )
}
