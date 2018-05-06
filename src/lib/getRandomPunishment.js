let getRandomPunishment = (punishmentsArr) => {
    let randomNum = Math.round( Math.random()* (punishmentsArr.length - 1));
    return punishmentsArr[randomNum];
}


export default getRandomPunishment;