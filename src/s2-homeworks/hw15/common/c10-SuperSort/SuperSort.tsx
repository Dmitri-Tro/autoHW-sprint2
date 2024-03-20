import React from 'react'
import noneIcon from './assets/Polygon 2.svg';
import upIcon from './assets/up.svg'
import downIcon from './assets/down.svg'

// добавить в проект иконки и импортировать

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
        if (sort === '') {
            return down
        } else if (sort === down) {
            return up
        } else if (sort !== down && sort.includes('1')){
            return down
        }  else if (sort === up) {
            return ''
        } else if (sort !== up && sort.includes('0')){
            return up
        } else {
            return down
        }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={sort === down ? 'down icon' : 'up icon'}
            />
            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
