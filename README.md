<h1 align="center">Project Playground Functions</h1>

## :memo: Descrição
Este projeto foi criado com o objetivo de testar e aprimorar os conhecimentos iniciais em JavaScript durante os primeiros módulos da Trybe. Durante sua elaboração, foram praticadas habilidades essenciais, tais como:

* Declaração de variáveis e tipos primitivos;
* Uso de tipagem dinâmica e operadores lógicos, aritméticos e de atribuição;
* Criação de estruturas condicionais, como o if/else;
* Manipulação de arrays;
* Quebra de grandes problemas em problemas menores;
* Aplicação de lógica de programação para a resolução de problemas;
* Manipulação de objetos;
* Utilização de for/in e for/of;
* Organização e estruturação do código por meio de funções.

Com a realização desse projeto, foi possível consolidar os conceitos fundamentais de JavaScript e obter uma base sólida para o aprendizado contínuo na área de programação.

## :books: Requisitos 
1. Criar uma função `compareTrue` que compare dois valores utilizando o operador `&&`.
  - Deve retornar `false` quando um dos parâmetros for falso.
  - Deve retornar `true` quando os dois parâmetros forem verdadeiros.

2. Criar uma função `calcArea` que calcula a área de um triângulo, que irá receber os valores de base (chamado `base`), altura (chamado `height`) como parâmetros e retornar o cálculo da sua área. 
  - O cálculo da área de um triângulo é calculado atráves da seguinte fórmula: (base * altura) / 2 .

3. Criar uma função `splitSetence` que divida a frase, a função deve receber uma string e retornar um array de strings separadas por cada espaço da string original.
  - Se a funçao recebe `"Lucas Lima"` deve retornar `['Lucas', 'Lima']`.

4. Criar uma função `concatName` que use concatenação de strings, ao receber um array de strings, a função deve retornar uma string no formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho do array.
  - Se a função recebe `['Lucas', 'João', 'Amanda']` deve retornar `Amanda, Lucas` .

5. Criar uma função `fotballPoints` que calcule a quantidade de pontos em uma partida de futebol, esta função irá receber o número de vitórias ( o parâmetro se chamará `wins`) e o número de empates (o parâmetro se chamará `ties`) e retornar a quantidade de pontos que o time marcou.
  - Deve-se considerar que cada vitória vale 3 pontos e cada empate vale 1 ponto.

6. Criar uma função `highestCount` que calcula a repetição do maior número em um array.
  - Caso o parâmetro seja `[2, 3, 4, 6, 4, 2, 6, 3, 6]` deve-se retornar `3`, que é a quantidade de vezes que o número 6 se repete.

7. Criar uma função `catAndMouse` que simule uma Caça ao Rato, supondo que que existem dois gatos (`cat1` e `cat2`) e ambos estão caçando um mesmo rato (`mouse`). A função deve calcular a distância que os gatos estão do rato e retornar qual gato irá alcançar o rato primeiro. Deve-se usar o princípio de que os gatos  e o rato estão em uma reta.
  - Caso o gato (`cat1`) esteja a 3 unidades de distância do rato e o gato 2 (`cat2`) esteja a 4 unidades, a função deverá retornar `"cat1"`.
  - Caso os gatos estejam na mesma distância do rato, a função deverá retornar `"os gatos trombam e o rato foge"`.

8. Criar a função `fizzByzz` que deve receber um array de números e retornar um array formado por essas condições:
  - Para cada número do Array que for divísivel apenas por 3, apresente uma string `"fizz"`;
  - Para cada número do Array que seja divisível apenas por 5, apresente uma string `"buzz"`;
  - Para cada número que seja divísivel por 3 e 5, apresente uma string `"fizzBuzz"`;
  - Para cada número que não seja divísivel por 3 nem por 5, apresente a string "bug!".

9. Criar a função `encode` e a função `decode`, a função `encode` deve receber uma string e retornar a string com as vogais minúsculas trocadas por números, já a função `decode` deve fazer o inverso da função `encode` trocar a ocorrência dos números pelas vogais, a função encode seguirá o seguinte padrão:
  - a => 1
  - e => 2
  - i => 3
  - o => 4
  - u => 5

10. Criar a função de lista de tecnologias `techList` que deve receber dois parâmetros, um deve ser um array contendo nomes de tecnologias, o outro deve ser o parâmetro (`name`) que irá conter um nome.
  - Para cada tenologia no array, a função deve criar um objeto no formato `{ tech: "nomeDaTecnologia", name: nome }`;
  - A função deverá retornar um array contendo os objetos formados e ordem crecente a partir do campo `tech` .

### Requisitos bônus

11. Criar uma função para criar um número de telefone `generatePhoneNumber` que receba um array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.
  - Caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], a função deve retornar `(12) 34567-8901` .
  - Caso algum dos números do array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, a função deve retornar `"não é possível gerar um número de telefone com esses valores"`.

12. Criar uma função de Condição de existência de um triângulo (`triangleCheck`) que deverá receber as três linhas (`linaA`, `lineB` e `lineC`) e retonar se é possível formar um triângulo com os valores apresentados de cada linha.
  - Para se formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e menor que o valor absoluto da diferença entre essas medidas.
  - O retorno da função deve ser um booleano.

13. Crie uma função de boas vindas ao Bar da Trybe (`hydrate`), a função irá receber uma string com um pedido ("1 cerveja") ou ("1 cerveja 2 cachaças e 1 copo de vinho"), para cada bebida a função deve retornar a sugestão de ingestão da mesma quantidade em copos de água.
  - Se a função recebe como parâmetro (`"1 copo de cerveja"`) deve retornar (`"1 copo de água"`).
  - Se a função recebe como parâmetro (`"1 cerveja, 2 cachaças e 1 copo de vinho"`) deve retornar (`"4 copos de água"`).

## :wrench: Tecnologias utilizadas
* JavaScript

## :computer: Arquivos modificados/criados
Os arquivos estão dentro da pasta src:
* /src/challenges.js
* /src/challenges2.js

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/LucasLimaPE">
        <img src="https://avatars.githubusercontent.com/u/94488633?s=400&u=c0fc6e9a64565b85fc249c1b7a302c7b674ff785&v=4" width="100px;" alt="Foto de Lucas Lima no GitHub"/><br>
        <sub>
          <b>LucasLimaPE</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto

Finalizado com 100% de aprovação incluindo requisitos bônus.
