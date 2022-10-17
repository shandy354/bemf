const express = require("express");
const plant = require("../models").tb_tanaman;
const func = require ('../libs/function');
// const plant = require("../models/plant");
module.exports = {
    // get all plant
  getAll: async (req, res) => {
    try {
    const data = await plant.findAll()
        if (data.length > 0) {
          res.status(200).json({
            message: "get data",
            data: data,
          })
        } else {
          res.status(200).json({
            message: "tidak ada data",
            data: [],
          })
      }
    } catch (error) {
      res.status(402).json({
        message: error,
      })
    }
  },

  getId : async (req, res) =>{
      try {
          const data = await plant.findAll({
              where:{
                  id : req.params.id
              }
          })
          if(data.length > 0) {
            res.status(200).json({
              message: "get data",
              data: data,
            })
      }else {
        res.status(200).json({
          message: "tidak ada data",
          data: []
        })
      }
    }catch (error) {
        res.status(402).json({
          message: error.message
        })
      }
    },

    create: async (req, res) => {

      try {
        const data = await plant.create({
          nama: req.body.nama,
          kategori: req.body.kategori,
          lokasi: req.body.lokasi,
          deskripsi:req.body.deskripsi,
          img: req.file.filename,
          url : func.convertToSlug(req.body.nama + " " + Math.random(1000))
        });
        res.status(201).json({
          message: "create data berhasil",
          data: data,
        });
      } catch (error) {
        res.status(402).json({
          message: error.message,
        });
      }
    },
    getDetil : async (req, res) =>{
       const url = req.params.url;
       plant.findOne({
        where:{url:url},
        attributes:['nama','kategori','lokasi','deskripsi','img']
       }).then(data => {
        if(data){
            res.status(200).json({
                message: "get data",
                data: data,
              })

        }else{
            res.status(404).json({
                message: "tidak ada data",
              })
        }
       }).catch(err =>{
        res.status(402).json({
            message: err.message,
          });
       })
         
      
      },
    // getDetil : async(req, res) =>{
    //     const id = req.params.id;
    // },

  updateId : async (req, res) =>{
    try{
        let data = await plant.update({
          nama: req.body.nama,
          kategori: req.body.kategori,
          lokasi: req.body.lokasi,
          deskripsi:req.body.deskripsi,
          img: req.file.filename,
        },{
            where :{
                id : req.params.id
            }
        })
      
        res.status(200).json({
            message:"berhasil update data",
            data : data
        })
    }catch(error){
        res.status(404).json({
            message :error.message
        })
    }
  },

  deleteId: async (req, res) => {
    try {
      let data = await plant.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "data berhasil dihapus",
      });
    } catch (error) {
      res.status(404)({
        message: error.message,
      });
    }
  },
};
