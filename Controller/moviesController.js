const fs = require('fs');

let movies = JSON.parse(fs.readFileSync('./Data/products.json'))

exports.getAllMovies = (req , res)=>{
    res.status(200).json(
        {
            status:"success",
            count:movies.length,
            data:{
                movies:movies
            }
        }
    );
}

exports.getMovie = (req , res)=>{
    // console.log(req.params);

    const id = req.params.id * 1;

    let movie = movies.find(el => el.id === id);

    if(!movie){
       return res.status(404).json({
            status:"error",
            message:"failed"
        });
    }

    res.status(200).json({
        status:"success",
        data:{
            movie:movie
        }
    });
}

exports.updateMovie = (req,res)=>{
    let id = req.params.id * 1;
    let moviesUpdate = movies.find(el=> el.id === id);
    let index = movies.indexOf(moviesUpdate);

    if(!moviesUpdate){
        return res.status(404).json({
             status:"error",
             message:"cannot find item"
         });
     }

    Object.assign(moviesUpdate, req.body);
    movies[index] = moviesUpdate;

    fs.writeFile('./Data/products.json', JSON.stringify(movies), (err)=>{
                res.status(201).json({
                    status: "success",
                    data: {
                        movie:moviesUpdate
                    }
                })
            })
    
}

exports.createMovie = (req , res)=>{
    // console.log(req.body)
    const newId = movies[movies.length - 1].id + 1
    const newMovie = Object.assign({id: newId}, req.body)

    movies.push(newMovie);
    fs.writeFile('./Data/products.json', JSON.stringify(movies), (err)=>{
        res.status(201).json({
            status: "status",
            data: {
                movie:newMovie
            }
        })
    })
   
}