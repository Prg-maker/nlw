const Database = require('./db');
const saveOrphanage = require('./saveOrphanage') 

Database.then(async  (db) =>{
    
    //inserir dados na tabela 
    await saveOrphanage(db, {
      
        lat: "-27.2206972",
        lng: "-49.6561772",
        name: "Lar dos meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social",
        whatsapp:"454456456",
        images: [
          "https://images.unsplash.com/photo-1567701562484-deab2750d1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
          "https://images.unsplash.com/photo-1562790519-60c4307f025f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        intructions:
          "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours:"Horários de visitas Das 18 até 8h ",
        opening_on_weekends:"0"
      },)
    

    //consultar dados da tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato , pelo id 
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    //deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
    
})