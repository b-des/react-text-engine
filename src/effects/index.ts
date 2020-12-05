import * as echo from './echo'
import * as circle from './circle'
import * as rainbow from './rainbow'
interface IEffects{
    echo: (element: React.RefObject<HTMLElement>, params?: any) => React.CSSProperties,
    circle: Function,
    rainbow: Function,
}

export const Effects: IEffects = {
    echo: echo.getApplyEffect,
    circle: circle.getApplyEffect,
    rainbow: rainbow.getApplyEffect,
}