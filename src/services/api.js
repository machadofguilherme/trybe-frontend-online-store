export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';

  const request = await fetch(url);
  const json = await request.json();

  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let jayson = '';
  let retorno = '';
  const urlQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const urlCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

  if (query !== undefined) {
    const request = await fetch(urlQuery);
    jayson = await request.json();
    retorno = await jayson.results;
  } else if (categoryId !== undefined) {
    const request = await fetch(urlCategory);
    jayson = await request.json();
    retorno = await jayson.results;
  }

  return retorno;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
