import React, { PureComponent } from 'react';
import { ITextOptions } from '../../utils/declarations';
import { Effects } from '../../effects';
import ContentEditable from 'react-contenteditable'


export interface ITextContainerdProps extends ITextOptions {
}

export interface ITextContainerdState {
    styles: {},
    text: string
}

type ITextStyles = Exclude<ITextContainerdProps, 'text'>;


class TextContainer extends PureComponent<ITextContainerdProps, ITextContainerdState> {
    element: React.RefObject<HTMLDivElement>;
    contentEditable: React.RefObject<HTMLElement>;

    constructor(props: ITextContainerdProps | Readonly<ITextContainerdProps>) {
        super(props);
        this.element = React.createRef();
        this.contentEditable = React.createRef();
        this.state = {
            styles: {},
            text: this.props.text
        };



    }

    componentDidMount() {
        this.setState({
            styles: Effects.echo(this.element, this.props.effectParams)
        })
    }

    componentDidUpdate(prevProps: ITextContainerdProps, prevState: ITextContainerdState): void {

        if (prevProps.effectParams !== this.props.effectParams) {
            this.setState({
                styles: Effects.echo(this.element, this.props.effectParams)
            })
        }

        //console.log(this.element.current?.children[0].innerHTML);
    }

    handleChange = (evt: any) => {
        console.log(evt.target.value);
        this.setState({
            text: evt.target.value,
            styles: Effects.rainbow(this.element, {
                text: evt.target.value
            })
        })
    };


    render() {
        return (
            <div style={{ ...this.props, ...this.state.styles }} ref={this.element}>

                <ContentEditable
                    innerRef={this.contentEditable}
                    html={this.state.text} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={this.handleChange} // handle innerHTML change
                    tagName='article'
                    suppressContentEditableWarning={true}
                />


            </div>
        );
    }
}

export default TextContainer;
