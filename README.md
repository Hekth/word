<h1>
  Word
</h1>

<p>
  Word é um jogo baseado no famoso jogo <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a> em que consiste adivinhar a palavra de 5 letras em 6 tentativas.
  Nele, há um teclado virtual que permite que você adicione ou delete letras na tabela. Há também indicativos de cores para informar ao usuário se a letra existe na palavra ou se está na posição correta. 
</p>

<img src="https://github.com/Hekth/word/assets/151862970/1fc61bd7-1523-4910-9790-3bccedc6c446" alt="Imagem do site Word" width="500px" />

<h2>
  Tecnologias utilizadas
</h2>

<ul>
  <li>Javascript</li>
  <li>Manipulação do DOM</li>
  <li>Assincronicidade</li>
  <li>LocalSotorage</li>
  <li>HTML 5 Semântico</li>
  <li>CSS3</li>
</ul>

<h2>
  Componentes
</h2>

<ul>
  <li>Um breve tutorial pop-up do jogo, ele só aparece na primeira vez de jogo.</li>
  <li>Cabeçalho simples, contendo apenas a logo da página e uma borda em baixo</li>
  <li>Tabela 5x6 onde as letras serão armazenadas</li>
  <li>Teclado virutal para digitar, deletar ou adivinhar a palavra</li>
  <li>Rodapé contendo links para as minhas redes sociais</li>
</ul>

<h2>
  Funcionalidades
</h2>

<h3>
  Teclado e tabela
</h3>

<p>
  Como já mencionado anteriormente, o teclado permite adicionar e manipular as letras dentro das células da tabela.<br>
  A tecla ENTER, em especial faz algumas verificações. Ela serve para submeter a palavra de 5 letras do usuário e passar para a próxima linha da tabela.<br>
  Se o usuário não digitou todas as letras, uma mensagem de erro aparecerá em cima da tabela.<br>
  Se a palavra não existir dentro da lista de palavras, também mostrará um aviso.<br>
  Caso o usuário acerte a palavra, aparecerá uma mensagem de parabéns e um botão de jogar novamente.<br>
  Caso erre todas as tentativas, mostrará uma mensagem de derrota e a revelação da palavra secreta.<br>
  O teclado, assim como a tabela, também é colorido para indicar ao usuário se a letra está na posição correta e se existe ou não na palavra secreta.
</p>

<img src="https://github.com/Hekth/word/assets/151862970/c31343c0-ae54-46ad-a427-c832a45126fa" alt="imagem exemplo das cores" width="500px" />

<h2>
  Cores
</h2>

<ul>
  <li>Cinza escuro - indica que aquela letra não existe na palavra secreta</li>
  <li>Amarelo - indica que a letra existe, mas em outra posição</li>
  <li>Verde - indica que você acertou a posição da letra</li>
</ul>

<p>
  O jogo tem responsividade para telas menores também!
</p>

<a href="https://word-hekth.vercel.app">
  LINK para jogar
</a>
