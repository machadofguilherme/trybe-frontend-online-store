export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';

  const request = await fetch(url);
  const json = await request.json();

  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Com a ajuda do aluno Felipe pinto, turma 24, tribo A, utilizamos um endpoint diferente e eliminamos o If Else que potencialmente estava causando problemas na seleção dos produtos
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const request = await fetch(url);
    const json = await request.json();
    return json;
  } catch (e) {
    return e.message;
  }
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
