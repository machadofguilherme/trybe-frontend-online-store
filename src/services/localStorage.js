// const addCarrinho = (product) => { // desestruturação de estados!!! // caso ja exista, incremente quantidade
//   // criar uma nova chave quant
//   // criar arquivo novo pra guardar funções
//   const contagem = 1;
//   const { infoProducts } = this.state;
//   if (infoProducts.length === 0) {
//     this.setState({ infoProducts: [product] }, () => {
//       const { infoProducts: infoProducts2 } = this.state;
//       const json = JSON.stringify(infoProducts2 ?? []);
//       localStorage.setItem('produto', json);
//       localStorage.setItem('quantidade', contagem); // qnt
//     });
//   } else {
//     this.setState((prev) => ({
//       infoProducts: [...prev.infoProducts, product],
//     }), () => {
//       let iguais = false;
//       infoProducts.forEach((e) => {
//         // const novos = infoProducts.filter((el) => el.id !== product.id);
//         iguais = infoProducts.some((el) => el.id === product.id);
//         const arrayRepetidos = infoProducts.filter((el) => el.id === product.id);
//         if (iguais) {
//           const jsonRepetidos = JSON.stringify(arrayRepetidos);
//           localStorage.setItem('repetidos', jsonRepetidos);
//         } else {
//           console.log(e);
//         }
//       });
//       // console.log(iguais);
//       // if (iguais) {
//       //   // const jsonNovos = JSON.stringify(novos);
//       //   // localStorage.setItem('novos', jsonNovos);
//       //   // localStorage.setItem('quantidade', novos.length + 1);
//       // } else {
//       //   // const { infoProducts: infoProducts2 } = this.state;
//       //   // this.setState({ infoProducts2: product });
//       //   // const { infoProducts2: infoProducts3 } = this.state;
//       //   // const jsonn = JSON.stringify(novos ?? []);
//       //   // localStorage.setItem('produto', jsonn);
//       // }
//     });
//   }
// };

// export default addCarrinho;
