const express = require("express");
const plant = require("../models").tb_tanaman;

exports.detilTanaman = async (req,res) => {
    const url = req.params.url;
    plant.findOne({
        where : {url:url},
        attributes:['nama','kategori','lokasi','deskripsi','img']
    }).then(result => {
        if(result){
            res.send({
                code:200,
                message:'ok',
                data: result
            })
        }else{
            res.status(404).send({
                code:404,
                message:'tidak ada data'
            })
        }
    }).catch(err => {
        res.status(500).send({
            message:'error retrive data'
        })
    })
}
// module.exports = detilTanaman;