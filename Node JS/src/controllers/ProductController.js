// importa o mongoose
const mongoose = require ('mongoose');

// importa o model de Product
const Product = mongoose.model('Product');

// exportacao de um objeto com funcoes
module.exports = 
{
    // faz uma listagem de todos os registroa que estao na base de dados
    async index(req, res)
    {
        // cria uma variavel products
        // busca todos os registros
        // await: a proxima linha so executa depois que essa funcao for executada
        // paginate é um plugin do mongoose que permite paginar os dados do banco de dados
        // nos parametros definimos a pagina atual e o limite de dados por pagina
        // no primeiro parametro colocariamos algum filtro caso necessario, como where, entre outros
        // nesse caso o parametro é vazio pois nao utilizamos nenhum filtro
        // no docs, visivel pelo insomnia, temos o total de dados, o limite de dados por pagina, a pagina tual e o numero de paginas
        
        // desestruturacao, query é para parametros get
        // desse modo podemos mostrar a pagina que queremos da paginacap do mongoose
        const {page =1} = req.query;
        
        const products = await Product.paginate({},{page, limit:10});
        // retorna os produtos em uma estrutura JSON
        return res.json(products);
    },

    async show (req, res)
    {
        // req.params.id pega o id dos parametros da rota
        // pegamos o id da requisicao
        const products = await Product.findById(req.params.id);
        // retorna o produto buscado pelo id
        return res.json(products);
    },

    async store (req, res)
    {
        // criamos um produto
        const product = await Product.create(req.body);
        // retornamos o produto criado
        return res.json(product);
    },

    async update (req, res)
    {
        // o mongoose nos fornece essa estrutura findByIdAndUpdate
        // buscamos um unico produto por id e atualizamos com o conteudo que vem do req.body
        // unimos as funcionalidades de show com body
        // new:true diz para o mongoose que queremos retorna o produto ja atualizado
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    },

    async delete (req, res)
    {
        // pega o id do produto nos parametros da requisicao
        // o mongoose nos da a estrutura findByIdAndRemove
        await Product.findByIdAndDelete(req.params.id);
        // da um retorno de sucesso sem nenhum conteudo
        return res.send();
    }
};