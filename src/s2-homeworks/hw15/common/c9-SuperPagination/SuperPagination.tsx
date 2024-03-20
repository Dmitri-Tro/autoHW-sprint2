import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil((totalCount / itemsCountForPage)) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {

        // пишет студент
        let newPage = page;
        let newCount = itemsCountForPage;
        if (event.type === 'change') {
            newCount = Number((event as ChangeEvent<HTMLSelectElement>).currentTarget.value)
        }
        onChange(newPage, newCount)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        // пишет студент
        onChangeCallback(event, page)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                    marginRight: '12px',
                    width: '270px',

                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
                className={s.superSelect}
            />

            <span className={s.text2}>
                {itemsCountForPage === 4 ? 'строки в таблице' : 'строк в таблице'}
            </span>
        </div>
    )
}

export default SuperPagination
