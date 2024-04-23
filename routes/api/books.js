const express = require ('express');

const router = express.Router();

// carrega o Book model
const Book = require('../../models/Book');

// GET api/books
//Pegar todos os livros
router.get('/', (req,res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json({nobooksfound: 'Nenhum livro encontrado'}));
});


//GET api/books/:id
//Pegar unico livro por id

router.get('/:id', (req,res) =>  {
    Book.findById(req.params.id)
    .then (book => res.json(book))
    .catch(err => res.status(400).json({bonooksfound: 'Nenhum livro encontrado'}));
});

//POST api/books
//adicionar / salvar livros

router.post('/', (req,res) =>  {
    Book.create(req.body)
    .then (book => res.json({msg:'Livro adiciona com sucesso'}))
    .catch(err => res.status(400).json({error: 'Nao foi possivel adicionar este livro'}));
});

//PUT api/books/:id
//atualizar livros

router.put('/:id', (req,res) =>  {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then (book => res.json({msg:'Atualizado com sucesso'}))
    .catch(err => res.status(400).json({error: 'Nao foi possivel atualizar a base de dados'}));
});



//DELETE api/books/:id
//Deletar livro por Id

router.delete('/:id', (req,res) =>  {
    Book.findByIdAndDelete(req.params.id, req.body)
    .then (book => res.json({msg:'Livro deletado com sucesso'}))
    .catch(err => res.status(400).json({error: 'Nao existe este livro'}));
});

module.exports = router;
