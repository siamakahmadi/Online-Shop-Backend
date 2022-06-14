import * as mongoose from 'mongoose'

mongoose.connect(`moongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`)

mongoose.connection.on('open',()=>{
    console.log('moongo connection is on...')
})

mongoose.connection.on('error',(err)=>{
    console.log(`mongoose connection error ${err}`)
})