import niceColors from 'nice-color-palettes/500.json';

export function getApplyEffect(element: React.RefObject<HTMLDivElement>, params?: Object) {

    
    let text = params.text || element?.current?.innerText || "";
    let chunks = [];
    let result = '';
    let paletteIndex = Math.floor(Math.random()  * ((niceColors.length - 1) - 0) + 0);
    let palette = niceColors[paletteIndex];

    let colorIndex = 0;

    for(let char of text){

        //colorIndex = Math.floor(Math.random()  * ((palette.length - 1) - 0) + 0);

        chunks.push(`<span style="color: ${palette[colorIndex++]}">${char}</span>`);

        if(colorIndex > palette.length - 1){
            colorIndex = 0;
        }

    }

    result = chunks.join('');
    console.log(result);
    element.current!.children[0].innerHTML = result;
    return {}
}