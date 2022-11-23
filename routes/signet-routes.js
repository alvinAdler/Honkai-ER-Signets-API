import { Router } from "express";

const router = Router()

import SignetModel from '../models/SignetModel.js'

router.get("/list", async (req, res) => {

    const { category, wielder } = req.body

    console.log(category)
    console.log(wielder)

    let signets

    try{
        if(category.length === 0){
            signets = await SignetModel.find()
        }
        else if(category.includes("EGO") && wielder?.length > 0){
            signets = await SignetModel.find({$or: [{category: "EGO", wielder: {$in: wielder}}, {category: {$ne: "EGO", $in: category}}]})
        }
        else{
            signets = await SignetModel.find({category})
        }
    }
    catch(err){
        console.error(err)
        return res.status(500).json({
            message: "Failed to fetch data",
            err: `${err}`
        })
    }

    return res.status(200).json({
        message: "Successfull created an endpoint",
        signets
    })
})

export default router