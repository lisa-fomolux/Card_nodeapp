const mongoose = require('mongoose');
const {Schema}=mongoose;

const remarkSchema=new Schema({
    anesthesia: {
        type: String,
        default: 'yes'
    },
    vip: {
        type: String,
        default: 'yes'
    },
    tmrout: {
        type: String,
        default: 'yes'
    },
    nurse: {
        type: String,
        default: 'yes'
    },
    quarantine: {
        type: String,
        default: 'yes'
    }
})

const CardSchema=new Schema({
    pw: {
        type: String,
        default: '123'
    },
    name: {
        type: String,
        default: '陳小明'
    },
    no: {
        type: String,
        default: '1000-1'
    },
    gender: {
        type: Number,
        default: 1
    },
    remark: remarkSchema
    // remark: [remarkSchema],
    // remark: [
    //     {anesthesia: {
    //         type: Boolean,
    //         default: true
    //     }},
    //     {vip: Boolean}
    // ]
    // remark: {
    //     type: Array,
    //     default: [
    //            { anesthesia: {
    //                 type: Boolean,
    //                 default: true
    //             }},
    //             {vip: {
    //                 type: Boolean,
    //                 default: true
    //             }}
    //     ]
    // }
})

module.exports=Card=mongoose.model('new-cards', CardSchema)
