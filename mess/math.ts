let gender: string = 'm'
let iWeight: number = 202
let iUnit: string = 'lbs'
const burnRateHr: number = .015
const burnRate4Min: number = .001


function genderConvert(gender:string){
    return gender=='m' ? 0.68 : 0.55
}
// onChange form, update userState


function weightConvert(weight:number,unit:string){
    if (unit == 'lbs'){
        return weight * 453.59237
    } else {
        return weight * 1000
    }
}
// onChange form, update userState, default lbs

console.log(`Current weight in grams = ${weightConvert(iWeight,iUnit)}`)


function drinkCalc(size:number, abv:number):number{
    const ozToML:number = 29.5735
    const ethanolDensity:number = .789
    let calculated:number = size*(abv/100)*ozToML*ethanolDensity
    return parseFloat(calculated.toFixed(2))
}
// run currentAlcState addition with return value

console.log(`Adding ${drinkCalc(1.5,40)} grams`)


let totalAlc:number=42

function BAC(gender:string,weight:number,unit:string,gramsOfAlcohol:number):number{
    let genderConst=genderConvert(gender)
    let gramWeight=weightConvert(weight,unit)
    let calculated=gramsOfAlcohol/(genderConst*gramWeight)*100
    return calculated
}
// instead of return set the currentAlc state

let bac=BAC('m',200,'lbs',80)


function BACBurn(){
    console.log(bac.toFixed(3))
    bac-=.001
}

setInterval(BACBurn,4000)
// update bacReadState? with depreciation rate





