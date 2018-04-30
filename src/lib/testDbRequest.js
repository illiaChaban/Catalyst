
let testRequest = (request) => {
    fetch('http://localhost:5000/users', {
        method: 'POST',
        body: `INSERT INTO users VALUES('1111', '', 'illia', '1111');`
    })
    .then( res => res.json())
    .then( console.log)
}

export default testRequest;
