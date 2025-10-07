Para testar a aplicação poder fazer o sign up com o email a password ou tambem pode fazer login com um user de teste com os seguintes valores, 
email : ab@gmail.com    password: 123456

Esta aplicação serve para ver as receitas de diferentes refeições. Tem a possiblidade de fazer login y sign up. Se o utilizador estiver logado, tem a possiblidade de guardar numa coleção em firebase chamada favorites as receitas que quiser, depois tambem tera accesso as mesmas receitas para apaga-las da coleção de firebase ou simlpesmente para ve-las.

Na rota de recipes o utilizador pode ver 4 recipes que são carregados com uma chamada a um metodo definido como get4randomRecipes, este usa um ciclo para fazer 4 chamadas a api que disponibiliza um url para ver um random recipe, logo esta função adiciona a um array os 4 random recipes. O utilizador tem a opção de ver mais random recipes se carregar no botão "mais", este botão faz mais uma chamada a função get4RandomRecipes.

Na rota de recipes tambem há uma opção de fazer filter ao carregar no botão, o filter pode ser feito por categorias ou por paises.

na landing page o utilizador pode ver as categorias pelas quais pode fazer o filter, estas categorias são obtidas com uma chamada a api com o axios.

Na barra de navegação existe a opção de mudar o tema para light mode.

O projeto foi dividido em 3 componentes: login, footer, recipes. Foram definidas desta forma porque vão ser chamadas em views diferentes.



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
