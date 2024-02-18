import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals(){
    // .run() data change or add, just get data with all(), just for one row get()
    await new Promise((resolve) => setTimeout(resolve,1000))
    return db.prepare("SELECT * FROM meals").all()
}