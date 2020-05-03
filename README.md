# React before and after slider

A fast, light-weight before and after image slider for React applications.


## Demo

[Here](https://sliderbna.netlify.app/)


### Installation

```
npm i react-bna
```


### API

| Prop | Type | Default |
| :---         |     :---      |          :--- |
| before (Required)   | string : URL or Data URI of the before image     |   |
| after (Required)     | string : URL or Data URI of the after image     |       |
| showControls     | bool : to show or hide the controls board     |  false     |
| showWidth     | bool : to show or hide divisor width   |    false  |
| divisorBorder     | bool : to show or hide the divisor border      |  false     |
| imageHeight     | number : The heigher of the inner image container   |    false   |
| alt     | string : Alternative text for image      |  Genereic alt text     |
| errorImage     | string : Fallback image     |    Genereic fallback image   |
| onErrorBefore     | function : Function to be called if the "before" image triggers an error event   | library internal onError handler      |
| onErrorAfter     | function : Function to be called if the "after" image triggers an error event    | library internal onError handler      |
| onLoadedBefore     | function : Function to be called once the "before" image triggers load event | library internal onLoad handler       |
| onLoadedAfter     | function : Function to be called once the "after" image triggers load event | library internal onLoad handler     |


## Built With

* Webpack 4.x.x
* Babel 6.x.x
* ES6+


## Authors

* **Ammar Halees** - *Initial work* - [AmmarHalees](https://github.com/AmmarHalees)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

