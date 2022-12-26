import connection from '../../config/connection.js';
import queryBuilder from '../../config/queryBuilder.js';


const getCategoriesQuery = async(archive, place, pagination = { page: 1 }) => {

  const conditions = place
    ? {'categories.archived':archive, place,}
    : {'categories.archived':archive,};

  const rows =  await queryBuilder.select('categories.*')
    .from('categories')
    .leftJoin('products','categories.id', '=', 'products.category_id')
    .count({'total_products':'products.id'})
    .where(conditions)
    .groupBy('categories.id')
    .paginate({
      perPage:12,
      currentPage:pagination.page
    })

return rows
};
export default getCategoriesQuery;
