import {map} from '../utils';
const Color = require('color');


export function getApplyEffect(element?: React.RefObject<HTMLElement>): React.CSSProperties {
    let textColor = element?.current?.style.color || '#fff';
    let colorObject = Color(textColor);
    var shadowColor1 = colorObject.alpha(0.5).string();
    var shadowColor2 = colorObject.alpha(0.3).string();
    console.log(map(50, 0, 100, 0, 10));
    let offsetX = map(50, 0, 100, 0, 10)
    let offsetY = map(50, 0, 100, 0, 10)

    return { 
        textShadow: `${shadowColor1} ${offsetX}px ${offsetY}px 0px, ${shadowColor2} ${offsetX * 2}px ${offsetY * 2}px 0px`
    }
}