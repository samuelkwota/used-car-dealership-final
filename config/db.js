
import pkg from "pg"
const {Pool}=pkg

const pool=new Pool({
connectionString:"postgresql://postgres:Future1001@localhost:5432/usedcars"
})

export default pool
