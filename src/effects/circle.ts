import {map} from '../utils';
import ArcText from 'arc-text';
const CircleType = require('circletype');



export function getApplyEffect(element?: React.RefObject<HTMLDivElement>, params: Object) {
    const circleType = new ArcText(element?.current as HTMLElement);
    let radius = map(params.radius, 0, 100, circleType.arc(), 580)
    console.log(radius);
    circleType.arc(1000);
    //circleType.forceWidth(true);
    //circleType.destroy();
    return {}
}