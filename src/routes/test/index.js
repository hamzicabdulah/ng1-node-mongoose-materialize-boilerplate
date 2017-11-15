module.exports = (req, res) => {
    console.log('Received test http request');
    return res.send('Test sent from server');
}
