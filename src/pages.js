const Database = require('./database/db.js');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

    async index(request, response) {                
        return response.render("index");
    },
    async orphanage(request, response) {   
        const id = request.query.id;
        
        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM TB_ORPHANAGES WHERE id = "${id}"`)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0];

            if(orphanage.open_on_weekends == "0") { 
                orphanage.open_on_weekends = false
            } else {
                orphanage.open_on_weekends = true
            }

            return response.render('orphanage', { orphanage })
        } catch (error) {
            console.log(error)
            return response.send('Erro na base de dados')
        }        
    },
    async orphanages(request, response) {  
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM TB_ORPHANAGES")
            console.log(orphanages)      
            return response.render('orphanages', { orphanages })
        } catch (error) {
            console.log(error)
            return response.send('Erro na base de dados')
        }
    },

    createOrphanage(request, response) {        
        return response.render('create-orphanage')
    },

    async saveOrphanage(request, response) {    
        const fields = request.body
        // validade fields

        if(Object.values(fields).includes('')) {
            return response.send('Todos os campos devem ser preenchidos')
        } 

        try {
            const db = await Database
            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.intructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })

            return response.redirect("/orphanages")
        
        } catch (error) {
            console.log(error)
            return response.send('Erro na base de dados')
        }
        
    }

}