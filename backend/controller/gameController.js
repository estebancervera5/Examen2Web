const asyncHandler = require('express-async-handler')
const Game = require('../models/gameModels')

const getGames = asyncHandler(async (req, res) => {
    const games = await Game.find();
    res.status(200).json(games);
})

const createGame = asyncHandler(async (req, res) => {
    if (!req.body.name || !req.body.year || req.body.platform == null) { 
        res.status(400);
        throw new Error("Por favor completa todos los campos requeridos.");
    }
    const game = await Game.create({
        name: req.body.name,
        year: req.body.year,
        platform: req.body.platform,
     
    }); 
    
    res.status(201).json(game)
})

const updateGame = asyncHandler(async (req, res) => {
    const game = await Game.findById(req.params.id)
    if (!game) {
        res.status(404)
        throw new Error('Juego no encontrado');
    }
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGame)
})

const deleteGame = asyncHandler(async (req, res) => {
    const game = await Game.findById(req.params.id)
    if (!game) {

        res.status(404)
        throw new Error('Juego no encontrado')
    }
    await Game.deleteOne();
    res.status(200).json({message: `Juego eliminado: ${req.params.id}`})
})

module.exports = {
    getGames,
    createGame,
    updateGame,
    deleteGame
};
