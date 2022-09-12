export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';

  const request = await fetch(url);
  const json = await request.json();

  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Com a ajuda do aluno Felipe pinto, turma 24, tribo A, utilizamos um endpoint diferente e eliminamos o If Else que potencialmente estava causando problemas na seleção dos produtos
  // try {
  //   const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  //   const request = await fetch(url);
  //   const json = await request.json();
  //   return json;
  // } catch (e) {
  //   return e.message;
  // }

  if (!query) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const request = await fetch(url);
    const json = await request.json();
    return json;
  } if (query) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const request = await fetch(url);
    const json = await request.json();
    console.log('pesquisa');
    return json;
  }
}

export async function getProductById(productID) {
  const url = `https://api.mercadolibre.com/items/${productID}`;
  const request = await fetch(url);
  const json = await request.json();
  return json;
}
