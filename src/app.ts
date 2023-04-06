import express from "express";
import routes from "./routes";

import mongoose from 'mongoose'

class App {
    
    public express: express.Application    

    public constructor() {
        this.express = express()    
        this.middleware()
        this.routes()
        this.database()
    }

    public middleware() {
        this.express.use(express.json())
    }

    public routes() {
        this.express.use(routes)
    }

    public async database() {
        try {
            mongoose.set('strictQuery', true)
            await mongoose.connect('mongodb://0.0.0.0:27017')
            console.log('Connect database sucess')
        } catch (error) {
            console.error('Connect database fail, error', error)
        }
    }

}

export default new App().express