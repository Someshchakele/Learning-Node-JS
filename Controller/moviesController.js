const fs = require('fs');
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

// exports.validateBody = (req,res,next)=>{
//     if(!req.body.title){
//         return res.status(400).json({
//             status:"error",
//             message:" Not a valid movie data " 
//         });
//     }
//     next();
// }



exports.getAllMovies = async (req, res) => {
    try {
        console.log(req.query);

        let queryObj = { ...req.query };
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        queryObj = JSON.parse(queryStr);

        let query = Movie.find(queryObj); // Querying database

        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.sort('-createdAt');
        }

        const movies = await query; // Awaiting database response

        res.status(200).json({
            status: 'success',
            length: movies.length,
            data: {
                movies
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};


exports.getMoviesStats = async(req , res)=>{
try{
    const stats = await Movie.aggregate([
        {$match:{ratings: {$gte:1}}},
        {$group:{_id : null,
            avgRating: {$avg:'$ratings'},
            avgDuration: {$avg:'$duration'},
        }}
    ])
    res.status(200).json({
        status:"success",
        data:{
           stats
        }
    });
}
catch(err){
    res.status(400).json({
        status: 'fail' ,
        message: err.message
    })
}
    
}
exports.getMovie = async (req , res)=>{
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

    try{
        const movies = await Movie.findById(req.params.id);
    
            res.status(200).json({
                status: 'success' ,
                data: {
                    movies
                }
            })
        }
        catch(err){
            res.status(400).json({
                status: 'fail' ,
                message: err.message
            })
        }
}

exports.updateMovie = async (req,res)=>{
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
    try{
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true});

        res.status(201).json({
            status: '' ,
            data: {
                updateMovie
            }
        })
    }
    catch(err){
        res.status(400).json({
            status: 'fail' ,
            message: err.message
        })
    }
}

exports.createMovie = async (req , res)=>{
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
    try{
        const movie = await Movie.create(req.body);

        res.status(201).json({
            status: '' ,
            data: {
                movie
            }
        })
    }
    catch(err){
        res.status(400).json({
            status: 'fail' ,
            message: err.message
        })
    }
   
}