import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo_gmap from '../assets/logo_gmap.png'
import logo_dunia from '../assets/logo_dunia.png'

export default function Footer() {
    const navLinks = [
        { name: 'Home', href: '/#hero-section' },
        { name: 'About Us', href: '/#about' },
        { name: 'Licensing', href: '/#licensing' },
        { name: 'Vision and Mission', href: '/#vision' },
        { name: 'Services', href: '/#services' },
        { name: 'Gallery', href: '/#gallery' },
    ]

    return (
        <footer className="bg-[#1C1C1E] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-14" id="contact">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                        <img src={logo_gmap} alt="GMAP Logo" className="h-10 sm:h-14 md:h-16 w-auto object-contain" />
                        <img src={logo_dunia} alt="Dunia Logo" className='h-10 sm:h-14 md:h-16 w-auto object-contain'/>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide">
                            PT Guna Mitra Abadi Perkasa
                        </h1>
                        
                    </div>
                    <p className="text-sm sm:text-base text-neutral-300 font-light">
                        Advanced Defense and Tactical Solutions
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-2">


                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white">Navigate</h2>
                        <ul className="flex flex-col gap-2.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm sm:text-base text-neutral-300 underline hover:text-white transition-colors inline-block cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-wider uppercase">CONTACT US</h2>

                        <div className="flex flex-col gap-1 text-sm sm:text-base text-neutral-300">
                            <span className="text-white font-medium">Address:</span>
                            <p className="leading-relaxed max-w-sm">
                                Jl. Bojong Loa No. 25, Kelurahan Panjunan, Kecamatan Astanaanyar, Kota Bandung 40242
                            </p>
                        </div>

                        <div className="flex flex-col gap-1 text-sm sm:text-base text-neutral-300 pt-2">
                            <span className="text-white font-medium">Get in Touch:</span>
                            <p>+6287770141029</p>
                            <p>ptgunamitraabadiperkasa@gmail.com</p>
                        </div>
                    </div>

                </div>


                <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
                    <span className="text-sm sm:text-base font-semibold tracking-wider text-white uppercase">FOLLOW US</span>
                    <div className="flex items-center gap-3">

                        <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                <path fill="#0866ff" d="M213.8 509.4C92.2 487.7 0 382.7 0 256C0 115.2 115.2 0 256 0s256 115.2 256 256c0 126.7-92.2 231.7-213.8 253.4l-14.1-11.5h-56.3z"></path>
                                <path fill="#fff" d="m355.8 327.7l11.5-71.7h-67.8v-49.9c0-20.5 7.7-35.8 38.4-35.8h33.3V105c-17.9-2.6-38.4-5.1-56.3-5.1c-58.9 0-99.8 35.8-99.8 99.8V256h-64v71.7h64v180.5c14.1 2.6 28.2 3.8 42.2 3.8c14.1 0 28.2-1.3 42.2-3.8V327.7z"></path>
                            </svg>
                        </a>


                        <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 264.583 264.583">
                                <defs>
                                    <radialGradient id="SVG8bDSUbTK" cx={158.429} cy={578.088} r={52.352} fx={158.429} fy={578.088} gradientTransform="matrix(0 -4.03418 4.28018 0 -2332.227 942.236)" gradientUnits="userSpaceOnUse" href="#SVGyEXqFe2C"></radialGradient>
                                    <radialGradient id="SVGHt3n4cxA" cx={172.615} cy={600.692} r={65} fx={172.615} fy={600.692} gradientTransform="rotate(-59.87 -448.718 683.191)scale(1.34356 1.74916)" gradientUnits="userSpaceOnUse" href="#SVGdDw0LeWO"></radialGradient>
                                    <radialGradient id="SVGHvxlGeKS" cx={144.012} cy={51.337} r={67.081} fx={144.012} fy={51.337} gradientTransform="matrix(-2.3989 .67549 -.23008 -.81732 464.996 -26.404)" gradientUnits="userSpaceOnUse" href="#SVGTCOYweHu"></radialGradient>
                                    <radialGradient id="SVG8E51ndLw" cx={199.788} cy={628.438} r={52.352} fx={199.788} fy={628.438} gradientTransform="rotate(164.25 577.79 780.16)scale(3.2292 2.32649)" gradientUnits="userSpaceOnUse" href="#SVGm1g5feOd"></radialGradient>
                                    <linearGradient id="SVGm1g5feOd">
                                        <stop offset={0} stopColor="#ff005f"></stop>
                                        <stop offset={1} stopColor="#fc01d8"></stop>
                                    </linearGradient>
                                    <linearGradient id="SVGTCOYweHu">
                                        <stop offset={0} stopColor="#780cff"></stop>
                                        <stop offset={1} stopColor="#820bff" stopOpacity={0}></stop>
                                    </linearGradient>
                                    <linearGradient id="SVGdDw0LeWO">
                                        <stop offset={0} stopColor="#fc0"></stop>
                                        <stop offset={1} stopColor="#fc0" stopOpacity={0}></stop>
                                    </linearGradient>
                                    <linearGradient id="SVGyEXqFe2C">
                                        <stop offset={0} stopColor="#fc0"></stop>
                                        <stop offset={0.124} stopColor="#fc0"></stop>
                                        <stop offset={0.567} stopColor="#fe4a05"></stop>
                                        <stop offset={0.694} stopColor="#ff0f3f"></stop>
                                        <stop offset={1} stopColor="#fe0657" stopOpacity={0}></stop>
                                    </linearGradient>
                                </defs>
                                <path fill="url(#SVG8E51ndLw)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317c-11.334.943-18.387 2.728-26.07 6.554c-5.922 2.942-10.592 6.351-15.201 11.13c-8.394 8.716-13.481 19.439-15.323 32.184c-.895 6.188-1.156 7.45-1.209 39.056c-.02 10.536 0 24.4 0 42.999c0 55.2.062 71.341.326 74.476c.916 11.032 2.645 17.973 6.308 25.565c7 14.533 20.37 25.443 36.12 29.514c5.453 1.404 11.476 2.178 19.208 2.544c3.277.142 36.669.244 70.081.244s66.826-.04 70.02-.203c8.954-.422 14.153-1.12 19.901-2.606c15.852-4.09 28.977-14.838 36.12-29.575c3.591-7.409 5.412-14.614 6.236-25.07c.18-2.28.255-38.626.255-74.924c0-36.304-.082-72.583-.26-74.863c-.835-10.625-2.656-17.77-6.364-25.32c-3.042-6.182-6.42-10.799-11.324-15.519c-8.752-8.361-19.455-13.45-32.21-15.29c-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"></path>
                                <path fill="url(#SVG8bDSUbTK)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317c-11.334.943-18.387 2.728-26.07 6.554c-5.922 2.942-10.592 6.351-15.201 11.13c-8.394 8.716-13.481 19.439-15.323 32.184c-.895 6.188-1.156 7.45-1.209 39.056c-.02 10.536 0 24.4 0 42.999c0 55.2.062 71.341.326 74.476c.916 11.032 2.645 17.973 6.308 25.565c7 14.533 20.37 25.443 36.12 29.514c5.453 1.404 11.476 2.178 19.208 2.544c3.277.142 36.669.244 70.081.244s66.826-.04 70.02-.203c8.954-.422 14.153-1.12 19.901-2.606c15.852-4.09 28.977-14.838 36.12-29.575c3.591-7.409 5.412-14.614 6.236-25.07c.18-2.28.255-38.626.255-74.924c0-36.304-.082-72.583-.26-74.863c-.835-10.625-2.656-17.77-6.364-25.32c-3.042-6.182-6.42-10.799-11.324-15.519c-8.752-8.361-19.455-13.45-32.21-15.29c-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"></path>
                                <path fill="url(#SVGHt3n4cxA)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317c-11.334.943-18.387 2.728-26.07 6.554c-5.922 2.942-10.592 6.351-15.201 11.13c-8.394 8.716-13.481 19.439-15.323 32.184c-.895 6.188-1.156 7.45-1.209 39.056c-.02 10.536 0 24.4 0 42.999c0 55.2.062 71.341.326 74.476c.916 11.032 2.645 17.973 6.308 25.565c7 14.533 20.37 25.443 36.12 29.514c5.453 1.404 11.476 2.178 19.208 2.544c3.277.142 36.669.244 70.081.244s66.826-.04 70.02-.203c8.954-.422 14.153-1.12 19.901-2.606c15.852-4.09 28.977-14.838 36.12-29.575c3.591-7.409 5.412-14.614 6.236-25.07c.18-2.28.255-38.626.255-74.924c0-36.304-.082-72.583-.26-74.863c-.835-10.625-2.656-17.77-6.364-25.32c-3.042-6.182-6.42-10.799-11.324-15.519c-8.752-8.361-19.455-13.45-32.21-15.29c-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"></path>
                                <path fill="url(#SVGHvxlGeKS)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317c-11.334.943-18.387 2.728-26.07 6.554c-5.922 2.942-10.592 6.351-15.201 11.13c-8.394 8.716-13.481 19.439-15.323 32.184c-.895 6.188-1.156 7.45-1.209 39.056c-.02 10.536 0 24.4 0 42.999c0 55.2.062 71.341.326 74.476c.916 11.032 2.645 17.973 6.308 25.565c7 14.533 20.37 25.443 36.12 29.514c5.453 1.404 11.476 2.178 19.208 2.544c3.277.142 36.669.244 70.081.244s66.826-.04 70.02-.203c8.954-.422 14.153-1.12 19.901-2.606c15.852-4.09 28.977-14.838 36.12-29.575c3.591-7.409 5.412-14.614 6.236-25.07c.18-2.28.255-38.626.255-74.924c0-36.304-.082-72.583-.26-74.863c-.835-10.625-2.656-17.77-6.364-25.32c-3.042-6.182-6.42-10.799-11.324-15.519c-8.752-8.361-19.455-13.45-32.21-15.29c-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"></path>
                                <path fill="#fff" d="M132.345 33.973c-26.716 0-30.07.117-40.563.594c-10.472.48-17.62 2.136-23.876 4.567c-6.47 2.51-11.958 5.87-17.426 11.335c-5.472 5.464-8.834 10.948-11.354 17.412c-2.44 6.252-4.1 13.397-4.57 23.858c-.47 10.486-.593 13.838-.593 40.535s.119 30.037.594 40.522c.482 10.465 2.14 17.609 4.57 23.859c2.515 6.465 5.876 11.95 11.346 17.414c5.466 5.468 10.955 8.834 17.42 11.345c6.26 2.431 13.41 4.088 23.881 4.567c10.493.477 13.844.594 40.559.594c26.719 0 30.061-.117 40.555-.594c10.472-.48 17.63-2.136 23.888-4.567c6.468-2.51 11.948-5.877 17.414-11.345c5.472-5.464 8.834-10.949 11.354-17.412c2.419-6.252 4.079-13.398 4.57-23.858c.472-10.486.595-13.828.595-40.525s-.123-30.047-.594-40.533c-.492-10.465-2.152-17.608-4.57-23.858c-2.521-6.466-5.883-11.95-11.355-17.414c-5.472-5.468-10.944-8.827-17.42-11.335c-6.271-2.431-13.424-4.088-23.897-4.567c-10.493-.477-13.834-.594-40.558-.594zm-8.825 17.715c2.62-.004 5.542 0 8.825 0c26.266 0 29.38.094 39.752.565c9.591.438 14.797 2.04 18.264 3.385c4.591 1.782 7.864 3.912 11.305 7.352c3.443 3.44 5.575 6.717 7.362 11.305c1.346 3.46 2.951 8.663 3.388 18.247c.47 10.363.573 13.475.573 39.71c0 26.233-.102 29.346-.573 39.709c-.44 9.584-2.042 14.786-3.388 18.247c-1.783 4.587-3.919 7.854-7.362 11.292c-3.443 3.441-6.712 5.57-11.305 7.352c-3.463 1.352-8.673 2.95-18.264 3.388c-10.37.47-13.486.573-39.752.573c-26.268 0-29.38-.102-39.751-.573c-9.592-.443-14.797-2.044-18.267-3.39c-4.59-1.781-7.87-3.911-11.313-7.352c-3.443-3.44-5.574-6.709-7.362-11.298c-1.346-3.461-2.95-8.663-3.387-18.247c-.472-10.363-.566-13.476-.566-39.726s.094-29.347.566-39.71c.438-9.584 2.04-14.786 3.387-18.25c1.783-4.588 3.919-7.865 7.362-11.305c3.443-3.441 6.722-5.57 11.313-7.357c3.468-1.351 8.675-2.949 18.267-3.389c9.075-.41 12.592-.532 30.926-.553zm61.337 16.322c-6.518 0-11.805 5.277-11.805 11.792c0 6.512 5.287 11.796 11.805 11.796s11.804-5.284 11.804-11.796c0-6.513-5.287-11.796-11.805-11.796zm-52.512 13.782c-27.9 0-50.519 22.603-50.519 50.482s22.62 50.471 50.52 50.471s50.51-22.592 50.51-50.471s-22.613-50.482-50.513-50.482zm0 17.715c18.11 0 32.792 14.67 32.792 32.767c0 18.096-14.683 32.767-32.792 32.767s-32.791-14.671-32.791-32.767c0-18.098 14.68-32.767 32.791-32.767"></path>
                            </svg>
                        </a>


                        <a href="#" aria-label="X (Twitter)" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                <path fill="#fff" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}
