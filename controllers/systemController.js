const ping = (_, res) => {
    res.status(200).send('pong\n')
}

module.exports = { ping }