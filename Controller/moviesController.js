// const fs = require('fs');
const Movie = require('./../Models/movieModel')

// let movies = JSON.parse(fs.readFileSync('./Data/products.json'))

// exports.checkId = (req,res,next,value)=>{
//     let movie = movies.find(el => el.id === value * 1);

//     if(!movie){
//        return res.status(404).json({
//             status:"error",
//             message:" Movies with " + value + " is not found "
//         });
//     }
//     next();
// }

exports.validateBody = (req,res,next)=>{
    if(!req.body.title){
        return res.status(400).json({
            status:"error",
            message:" Not a valid movie data " 
        });
    }
    next();
}

exports.getAllMovies = (req , res)=>{
    // res.status(200).json(
    //     {
    //         status:"success",
    //         count:movies.length,
    //         data:{
    //             movies:movies
    //         }
    //     }
    // );
}

exports.getMovie = (req , res)=>{
    // console.log(req.params);

    // const id = req.params.id * 1;

    // let movie = movies.find(el => el.id === id);

    // if(!movie){
    //    return res.status(404).json({
    //         status:"error",
    //         message:"failed"
    //     });
    // }

    // res.status(200).json({
    //     status:"success",
    //     data:{
    //         movie:movie
    //     }
    // });
}

exports.updateMovie = (req,res)=>{
    // let id = req.params.id * 1;
    // let moviesUpdate = movies.find(el=> el.id === id);
    // let index = movies.indexOf(moviesUpdate);

    // if(!moviesUpdate){
    //     return res.status(404).json({
    //          status:"error",
    //          message:"cannot find item"
    //      });
    //  }

    // Object.assign(moviesUpdate, req.body);
    // movies[index] = moviesUpdate;

    // fs.writeFile('./Data/products.json', JSON.stringify(movies), (err)=>{
    //             res.status(201).json({
    //                 status: "success",
    //                 data: {
    //                     movie:moviesUpdate
    //                 }
    //             })
    //         })
    
}

exports.createMovie = (req , res)=>{
    // console.log(req.body)
    // const newId = movies[movies.length - 1].id + 1
    // const newMovie = Object.assign({id: newId}, req.body)

    // movies.push(newMovie);
    // fs.writeFile('./Data/products.json', JSON.stringify(movies), (err)=>{
    //     res.status(201).json({
    //         status: "status",
    //         data: {
    //             movie:newMovie
    //         }
    //     })
    // })
   
}