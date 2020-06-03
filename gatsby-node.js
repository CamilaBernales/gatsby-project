exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsLook {
        nodes {
          slug
        }
      }
    }
  `);
//   console.log(resultado.data.allDatoCmsLook.nodes)
  if (resultado.errors) {
    reporter.panic("No hubo resultado", resultado.errors)
  }
  //si hay paginas crear archivos
  const looks = resultado.data.allDatoCmsLook.nodes;
  looks.forEach(look => {
      actions.createPage({
          path : look.slug,
          component: require.resolve('./src/components/Looks.js'),
          context: {
              slug: look.slug
          }
      })
  });
}
