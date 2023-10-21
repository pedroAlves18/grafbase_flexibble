import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'
import { type } from 'os'

type ColumnProps = {
    title:string,
    links:Array<string>
}

const FooterColumn = ({title, links }:ColumnProps ) => (
    <div className='footer_column'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className='flex flex-col gap-2 font-normal'>
            {links.map(link =>
            <Link href="/" key={link}>{link}</Link>)
            }
        </ul>

    </div>
)

const Footer = () => {
  return (
    <footer className='flexStart footer' >
        <div className='flex flex-col gap-12 w-full'>
            <div className='flex items-start flex-col'>
                <Image 
                src="/logo-purple.svg"
                width={115}
                height={38}
                alt='Flexibble'/>

                <p className='text-start text-sm font-normal mt- max-w-xs'>
                    Flexibble is the world's leading community for creative to share, grow, and get hired.
                </p>
            </div>
            <div className='flex flex-wrap gap-12'>
                {
                footerLinks.map((column, index) =>(
                    <FooterColumn key={index} title={column.title} links={column.links} />
                ))
                }
            </div>
        </div>
        <div className='flexBetween footer_copyright'>
            <p>@2023 Flexibble. All right reserverd</p>
            <p className='text-gray'>
                <span className='text-black font-semibold'>10.214</span> projects submitted
            </p>
        </div>
        </footer  >
  )
}

export default Footer