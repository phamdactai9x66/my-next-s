'use client'

import { useRouter } from "next/router";

import React from 'react'

const ButtonBack = ({ title }) => {
    const router = useRouter();


    return (
        <button title={title} onClick={() => {
            router.back()
        }}>{title}</button>
    )
}

export default ButtonBack