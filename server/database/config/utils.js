const build_query = (sql, options) => { 
    const {where} = options
    const whereString = build_where_clause(where)
    return sql.replace('{WHERE}', whereString);
}

const build_where_clause = (whereObj) => {
    let whereString = "WHERE"
    Object.entries(whereObj).forEach((key, value) => {
        whereString += ` AND ${key} ${value.op} ${value.value}`;  
    })
    whereString = whereString.replace('WHERE AND','WHERE')
    return whereString
}

const build_select_clause = (selectObj) =>{

}