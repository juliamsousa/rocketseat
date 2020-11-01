// importacao do mongoose
// importacao do mongoose paginate
const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

// novo esquema do mongoose com as caracteristicas dos nossos dados
const productSchema = new mongoose.Schema
(
    {
        title:
        {
            // tipo do dado
            type: String,
            // significa que é obrigatorio
            required: true,
        },
        description:
        {
            // tipo do dado
            type: String,
            // é obrigatorio
            required: true,
        },
        createdAt:
        {
            // tipo do dado
            type: Date,
            // é preenchido automaticamente
            default: Date.now,
        },
    }
);

// cria um esquema no mongo
// nos diz que existe um model Procut e que possui as caracteristicas do schema acima
// registra um model na nossa aplicacao
productSchema.plugin(mongoosePaginate);
mongoose.model('Product', productSchema);