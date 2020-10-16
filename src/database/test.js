const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // Insert table data 
    await saveOrphanage(db, {        
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos Meninos",        
        about: "Presta assistência à crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social",
        whatsapp: "99999-9999",
        images: [            
            "https://images.unsplash.com/photo-1600318857729-b948b592c198?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "Venha como se sente à vontade e traga muito amor e paciência para dar",
        opening_hours: "8h até 18h",
        open_on_weekends: "0"
     })
    
    // Consult table data
    const selectedOrphanages = await db.all("SELECT * FROM TB_ORPHANAGES")
    console.log(selectedOrphanages)

    // Consult only one 
    const orphanage = await db.all('SELECT * FROM TB_ORPHANAGES WHERE id = "3"')
    console.log(orphanage)

    /* How to delete data from tb
    await db.run("DELETE FROM tabela where id= 'id'")

    How to delte all
    await db.run("DELETE * FROM tabela)
    */
})