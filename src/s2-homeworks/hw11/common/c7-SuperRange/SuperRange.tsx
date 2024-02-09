import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                margin: '0 22px 0 12px',
                color: '#00CC22',
                height: 3,
                padding: '13px 0',
                '& .MuiSlider-thumb': {
                    height: 27,
                    width: 27,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '& .MuiSlider-bar': {
                        height: 9,
                        width: 1,
                        backgroundColor: 'currentColor',
                        marginLeft: 1,
                        marginRight: 1,
                    },
                },
                '& .MuiSlider-track': {
                    height: 3,
                },
                '& .MuiSlider-rail': {
                    height: 3,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
