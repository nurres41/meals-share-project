import sql from 'better-sqlite3'

const db = sql('meals.db')

 // .run() data change or add, just get data with all(), just for one row get()

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve,1000))
    return db.prepare("SELECT * FROM meals").all()
}

export async function getMeal(slug){
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}