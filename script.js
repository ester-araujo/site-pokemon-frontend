// Dicas do professor Carvalho
const dicas = [
    '"Lembre-se: use uma Pokébola quando o Pokémon estiver cansado!"',
    '"Pokémons do tipo Água são ótimos contra o tipo Fogo!"',
    '"Trate seus Pokémon com carinho e eles serão seus melhores amigos."',
    '"Explore cada matinho, você pode encontrar um Pikachu!"'
];

window.onload = function() {
    const elementoDica = document.getElementById("dica-texto");
    if(elementoDica) {
        const sorteio = Math.floor(Math.random() * dicas.length);
        elementoDica.innerText = dicas[sorteio];
    }
}

function sortearPokemon() {
    const iniciais = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Magikarp", "Jigglypuff", "Caterpie", "Weedle"];
    const sorteado = iniciais[Math.floor(Math.random() * iniciais.length)];
    alert("Parabéns! Seu Pokémon inicial será o: " + sorteado + "!");
}

// Evoluções 
let statusEvo = { bulbasaur: 0, piplup: 0, igglybuff: 0 };

function proximaEvolucao(id) {
    // Aumenta o contador e volta ao 0 se passar de 2
    statusEvo[id] = (statusEvo[id] + 1) % 3;
    
    const estagio = statusEvo[id];
    const dados = evolucoes[id][estagio];

    // Atualiza o HTML
    document.getElementById(`img-${id}`).src = dados.img;
    document.getElementById(`nome-${id}`).innerText = dados.nome;
    document.getElementById(`desc-${id}`).innerText = dados.desc;
}

// Função pagina 3
function identificar(nome) {
    alert("Você encontrou o lendário: " + nome + "!");
}

// Conteudo das Evoluções
    const evolucoes = {
    bulbasaur: [
        { nome: "Bulbasaur", desc: "Tipo Grama: Um Pokémon leal com uma semente nas costas.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
        { nome: "Ivysaur", desc: "A semente cresce e se torna um botão de flor.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" },
        { nome: "Venusaur", desc: "A flor desabrochou! Um poder incrível da natureza.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" }
    ],
    piplup: [
        { nome: "Piplup", desc: "Tipo Água: Um pinguim orgulhoso e muito fofo.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png" },
        { nome: "Prinplup", desc: "Ele vive sozinho longe de bandos, achando-se o melhor.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png" },
        { nome: "Empoleon", desc: "As bordas de suas asas cortam como lâminas de gelo.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png" }
    ],
    igglybuff: [
        { nome: "Igglybuff", desc: "Tipo Fada: Tem um corpo macio e pula como uma bola.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png" },
        { nome: "Jigglypuff", desc: "Quando balança seus olhos, canta uma canção de ninar.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png" },
        { nome: "Wigglytuff", desc: "Sua pele é tão fina que é considerada um luxo.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png" }
    ]
};

