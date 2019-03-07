'use strict';

export default function(props, state){
    var selected = props.selected == null?
                        state.defaultSelected
                        :
                        props.selected

    return selected
}