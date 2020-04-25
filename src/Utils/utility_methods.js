

const toType = function (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}


export const vetProps = (props) => {

    const props_keys = Object.keys(props).map(key => String(key));


    let { showControls: S_C, showWidth: S_W, divisorBorder: D_B, imageHeight: I_H, before: B_4, after: A_F, alt: ALT, errorImage:E_I,onErrorBefore:O_E_B ,onErrorAfter:O_E_A ,onLoadedBefore : O_L_B , onLoadedAfter:O_L_A } = props;


    if (toType(S_C) !== 'boolean') {

        if (props_keys.includes('showControls')) console.error(`showControls prop was provided a type ${toType(S_C)}. Type boolean is expected.`);

        S_C = false; //Default
    }

    if (toType(S_W) !== "boolean") {

        if (props_keys.includes('showWidth')) console.error(`showWidth prop was provided a type ${toType(S_W)}. Type boolean is expected.`);

        S_W = false; //Default

    }

    if (toType(D_B) !== "boolean") {

        if (props_keys.includes('divisorBorder')) console.error(`divisorBorder prop was provided a type ${toType(D_B)}. Type boolean is expected.`);

        D_B = false; //Default


    }


    if (toType(B_4) !== 'string') {

        if (props_keys.includes('before')) {  // before prop exists , but it was given an invalid type

            console.error(`before prop was provided a type ${toType(B_4)}. Type string (URL or Data URI) is expected.`);

        } else {  // before prop doesnt even exit in the props object

            console.error(`before prop is required.`);


        }


        B_4 = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"; //Default

    }


    if (toType(A_F) !== 'string') {


        if (props_keys.includes('after')) {  // before prop exists , but it was given an invalid type

            console.error(`after prop was provided a type ${toType(A_F)}. Type string (URL or Data URI) is expected.`);

        } else {  // after prop doesnt even exit in the props object

            console.error(`after prop is required.`);


        }


        A_F = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"; //Default

    }

    

    if (toType(E_I) !== 'string') {

        if (props_keys.includes('errorImage'))console.error(`errorImage prop was provided a type ${toType(E_I)}. Type string (URL or Data URI) is expected.`);

        E_I = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"; //Default

    }



    if (toType(ALT) !== 'string') {
        if (props_keys.includes('alt')){

                    console.error(`alt prop was provided a type ${toType(ALT)}. Type string  is expected.`);

        }else{

                    console.warn(`alt prop is recommended`);

        }
        
    
        ALT = "React Before and after slider"; //Default

    }


    if (toType(I_H) !== 'number') {

        if (props_keys.includes('imageHeight'))console.error(`imageHeight prop was provided a type ${toType(I_H)}. Type number is expected.`);
        I_H = 70; //Default

    }

    if (toType(O_E_B) !== 'function') {

        if (props_keys.includes('onErrorBefore'))console.error(`onErrorBefore prop was provided a type ${toType(O_E_B)}. Type function is expected.`);
        O_E_B = false; //Default

    }
    if (toType(O_E_A) !== 'function') {

        if (props_keys.includes('onErrorAfter'))console.error(`onErrorAfter prop was provided a type ${toType(O_E_A)}. Type function is expected.`);
        O_E_A = false; //Default

    }
    if (toType(O_L_B) !== 'function') {

        if (props_keys.includes('onLoadedBefore'))console.error(`onLoadedBefore prop was provided a type ${toType(O_L_B)}. Type function is expected.`);
        O_L_B = function(){return null;}; //Default

    }

    
    
    if (toType(O_L_A) !== 'function') {

        if (props_keys.includes('onLoadedAfter'))console.error(`onLoadedAfter prop was provided a type ${toType(O_L_A)}. Type function is expected.`);
        O_L_A = function(){return null;}; //Default

    }

    return [S_C, S_W, D_B, I_H, B_4, A_F, ALT,E_I,O_E_B, O_E_A , O_L_B , O_L_A];

}