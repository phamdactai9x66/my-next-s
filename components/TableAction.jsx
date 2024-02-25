"use client"
import React from 'react'
import { mutate, useSWRConfig } from 'swr'
import { LIKE } from './Table'


const TableAction = (props) => {

    const onRecall = React.useCallback(() => {
        mutate(LIKE, [{ id: 4, title: 'Post 4' }], { revalidate: false })
    }, [])

    return (
        <td>
            <button onClick={onRecall}>recall</button>
        </td>
    )
}

export default TableAction