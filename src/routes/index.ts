import { Application } from 'express';

export default async (app: Application) => {
    app.get("/user", (req, res) => {
        res.send('Got a GET request at /user')
    });

    app.post('/user', (req, res) => {
        res.send('Got a POST request at /user')
    })

    app.put('/user', (req, res) => {
        res.send('Got a PUT request at /user')
    })

    app.delete('/user', (req, res) => {
        res.send('Got a DELETE request at /user')
    })
}