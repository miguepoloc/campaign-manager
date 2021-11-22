import { useRouter } from 'next/router'
import React from 'react'

export default function campaign() {
    const { query: { slug } } = useRouter()

    console.log(`slug`, slug)
    return (
        <div>
            <h1>Campaña</h1>
        </div>
    )
}
