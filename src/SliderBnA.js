import React, { PureComponent } from 'react';
import './style.css';
import ImageControls from './Components/ImageControls';
import WidthText from './Components/WidthText';
import Image from './Components/Image';
import { vetProps } from './Utils/utility_methods';
import { intial_state } from './Utils/intial_state';

class SliderBnA extends PureComponent {

    constructor() {
        super();

        this.state = intial_state;

        this.setWidth = this.setWidth.bind(this);
        this.moveDivisor = this.moveDivisor.bind(this);
        this.internal_error_handler = this.internal_error_handler.bind(this)
    }

    moveDivisor({ target: { value } }) { this.setState({ width: value }) };

    setWidth(width) { this.setState({ width }) };

    handleImageLoaded(e) { 
    
        const {target:{name}} = e;

        this.setState({  image_status: "loaded", [`${name}_loaded`]: true }); 

        if(name === 'before'){  this.state._onLoadedBefore(); } else if(name === 'after'){this.state._onLoadedAfter();  }

    }

    internal_error_handler (e){

        const {target:{name}} = e;

        console.log('interal')

        this.setState({   image_status: "failed to load",  [`${name}_loaded`]: false,  [`${name}_error`]: true}); 

    }

    
    handleImageErrored(e) { 
    
        const {target:{name}} = e;


        console.log('interal')

        this.setState({   image_status: "failed to load",  [`${name}_loaded`]: false,  [`${name}_error`]: true}); 

        if(name === 'before'){  this.state._onError_Before(e); } else if(name === 'after'){this.state._onError_After(e);  }
    
    }

    componentDidMount() {  //Perform prop checking (Developer changes)

        const [_showControls, _showWidth, _divisorBorder, _imageHeight, _before, _after, _alt, _errorImage,_onErrorBefore,_onErrorAfter,_onLoadedBefore,_onLoadedAfter] = vetProps(this.props);

        let _onError_Before = _onErrorBefore;
        let _onError_After = _onErrorAfter;
        

        if(_onError_Before === false){

            _onError_Before = this.internal_error_handler
        }

        if(_onError_After === false){

            _onError_After = this.internal_error_handler
        }




        this.setState({
          
            _showControls, _showWidth, _imageHeight, _divisorBorder, _before, _after, _alt, _errorImage,_onError_Before,_onError_After,_onLoadedBefore,_onLoadedAfter,
            image_status: "Loading started",
            loaded:false,
            before_error: false,
            after_error: false,
            
        })

    }

    /*------------- For Variable Props (through end user input ) ----------------*/


    componentDidUpdate(prevProps) {
        //For runtime changes (User changes): No prop checks needed because they've been made in cdm
        const { showControls, showWidth, imageHeight, divisorBorder, maxRange,before, after } = this.props;

        if (prevProps.divisorBorder !== this.props.divisorBorder) {

            this.setState({ _divisorBorder: divisorBorder })

        }

        if (prevProps.showControls !== this.props.showControls) {

            this.setState({ _showControls: showControls })

        }

        if (prevProps.showWidth !== this.props.showWidth) {

            this.setState({ _showWidth: showWidth })

        }

        if (prevProps.imageHeight !== this.props.imageHeight) {

            this.setState({ _imageHeight: imageHeight })

        }

        if (prevProps.maxRange !== this.props.maxRange) {

            this.setState({ _maxRange: maxRange })

        }

        if (prevProps.before !== this.props.before) {


            this.setState({ _before: before , before_error:false})

        }

        
        if (prevProps.after !== this.props.after) {

            this.setState({ _after: after , after_error:false})

        }

    }

    render() {
        const { width, _showWidth, _showControls, _divisorBorder, _before, _after, _imageHeight, _alt, _errorImage, //props
                before_error, after_error //flags

        } = this.state;


        console.log(before_error)
       
        const before_src = before_error? _errorImage : _before;

        const after_src = after_error ? _errorImage : _after;





        return (

            <div id="container">


                <figure style={{ backgroundImage: `url(${before_src})` }}>



                    {_showWidth && <WidthText width={width} />}

                    {_showControls && <ImageControls chosen={width} setWidth={this.setWidth} />} {/*Keeps re-rendering with each slider move*/}

                    <Image after={after_src} before={before_src} alt={_alt} height={`${_imageHeight}vh`}

                        onLoad={this.handleImageLoaded.bind(this)}
                        onError={this.handleImageErrored.bind(this)}

                    />

                    <figure style={{ width: `${this.state.width}%`, backgroundImage: `url(${after_src})`, borderRight: _divisorBorder && "1px solid rgba(255, 255, 255, 0.274)" }}></figure>

                </figure>

                <input value={this.state.width} type="range" min={this.state.min} max={this.state.max} id="slider" onChange={this.moveDivisor} />

            </div>

        );
    }

}

export default SliderBnA;