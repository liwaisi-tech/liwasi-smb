"use client"
import Link from 'next/link'
import React, { useState } from 'react'

interface ButtonLinkIconProps {
    href: string;
    icon: React.ReactNode;
    tooltip?: string;
}
function ButtonLinkIcon(props: ButtonLinkIconProps) {
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <div
            onMouseOver={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="flex items-center px-2">
            <Link href={props.href}>
                {props.icon}
            </Link>
            {
                showTooltip &&
                <div className="p-1 fixed flex  right-0 bottom-0 bg-opacity-90 bg-black text-white">
                    <p className="text-xs font-light ">{props.tooltip}</p>
                </div>
            }
        </div>
    )
}

export default ButtonLinkIcon