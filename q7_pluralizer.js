'use strict';

function pluralize(noun,num) {
    if(num > 1){
        switch(noun){
            case 'man':
                return num + " " + 'men';
            case 'person':
                return num + " " + 'people';
            case 'mouse':
                return num + " " + 'mice';
            case 'child':
                return num + " " + 'children';
            case 'foot':
                return num + " " + 'feet';
            case 'goose':
                return num + " " + 'geese';
            case 'woman':
                return num + " " + 'women';
            case 'tooth':
                return num + " " + 'teeth';
            case 'louse':
                return num + " " + 'lice';
            case 'fish':
                return num + " " + 'fish';
            case 'sheep':
                return num + " " + 'sheep';
            default:
                return num + " " + noun +"s";
        }
    }
    else{
        return num + " " + noun;
    }
}

console.log(pluralize('fish',2));