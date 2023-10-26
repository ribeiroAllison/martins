const getPrice = (cost, freightRate, margin, taxes, comission) => {


    const price = cost / (1 - (freightRate + taxes + comission + margin) );
    return price;
    

}



export default getPrice

