//import data from "./data"
const data = [
    {
        titulo: "Narvana - TCC ETEC",
        ano: "2025",
        competencias:["GdScript","Trabalho em equipe","Logica de programação","Blender"] ,
        subtitulo:"Contribuição",
        subtexto:"Trabalhei principalmente na programação dos inimigos, bosses e as mecânicas do player do jogo, também fui responsavel por pensar em boa parte da história e como algumas mecanicas funcionariam",
        descricao:"Projeto de jogo sobre apegos materiais e de relacionamento para TCC técnico, desenvolvido com Godot.",
        imagem: "./imgs/narvana.jpeg"
    },
    {
        titulo: "Sprint Master - ABP FATEC",
        ano: "2026",
        competencias:["JavaScript","HTML","CSS","PostgreSQL","Metodologia Scrum","Trabalho em equipe","Logica de programação"] ,
        subtitulo:"Contribuição",
        subtexto:"Trabalhei principalmente na area de back-end com requisições HTTP, mas também fui reponsavel pela integração do back e o front de algumas telas como a de dashboard",
        descricao:"Sprint Master foi o projeto do primeiro semestre da FATEC de Jacareí, o objetivo do projeto era fazer um site que testaria os conhecimentos do usuário sobre a metodologia Scrum. O banco de dados já era disponibilizados pelos professores então boa parte do projeto era focado no front e integração com o back",
        imagem: "./imgs/sm-logo.png"
    },
    {
        titulo: "Pikpik likes TV! - Pessoal",
        ano: "2026",
        competencias:["GdScript","Trabalho em equipe","Logica de programação"] ,
        subtitulo:"Contribuição",
        subtexto:"Trabalhei principalmente na programação de minigames",
        descricao:"Esse projeto foi feito como jogo para a GMTK game jam 2026, essa game jam teve como tema: countdown e o jogo foi feito em 4 dias, após o fim do periodo da game jam eu e a minha parceira continuamos a melhorar e consertar bug dentro dele",
        imagem: "./imgs/pikpik-logo.jpeg"
    },
    {
        titulo: "Ensino médio completo - ETEC ",
        ano: "2025",
        competencias:["Grade curricular do ensino médio","Trabalho em equipe"] ,
        subtitulo:"Experiência",
        subtexto:"Tive umas experiencia normal de ensino medio na ETEC, quase falta de professores e estrutura boa",
        imagem: "./imgs/etec_ilza.png"
    },
    {
        titulo: "Técnico em Desenvolvimento de Sistemas - ETEC",
        ano: "2025",
        competencias:["PHP","CSS","Java","C#","React Native","MySQL","HTML","Trabalho em equipe","Logica de programação"] ,
        subtitulo:"Experiência",
        subtexto:"No técnico pude aprender o básico de diversas linguagens e tive diversas experiencias práticas durantes os 3 anos",
        imagem: "./imgs/etec_ilza.png"
    },
]

const dialogBox = document.getElementById("info-dialog");




function callDialog(id){
    console.log(data[0])
    const info = data[id]
    const list = listCreator(info.competencias)
    console.log(list)
    dialogBox.showModal()
    if(info.descricao){
        dialogBox.innerHTML = `
        <div class="upper-things">
                    <div class="infos">
                        <h1>
                            ${info.titulo}
                        </h1>
                        <h5>Feito em: ${info.ano}</h5>
                        <h3>
                            Competências trabalhadas:
                        </h3>
                        <ul>
                            ${list}
                        </ul>
                        <h3>${info.subtitulo}</h3>
                        <h4>${info.subtexto}</h4>
                        <h3>Descrição</h3>
                        <h4>
                        ${info.descricao}
                    </h4>
                    </div>
                    <div class="info-img">
                        <img src="${info.imagem}" >
                    </div>
                </div>
            
                <button id="close-btn" class="btn-close" onclick="hideDialog()">X</button>
        `
    } else{
        dialogBox.innerHTML = `
        <div class="upper-things">
                    <div class="infos">
                        <h1>
                            ${info.titulo}
                        </h1>
                        <h5>Feito em: ${info.ano}</h5>
                        <h3>
                            Competencias trabalhadas:
                        </h3>
                        <ul>
                            ${list}
                        </ul>
                        <h3>${info.subtitulo}</h3>
                        <h4>${info.subtexto}</h4>

                    </div>
                    <div class="info-img">
                        <img src="${info.imagem}" >
                    </div>
                </div>
            
                <button id="close-btn" class="btn-close" onclick="hideDialog()">X</button>
        `
    }
    
}

function listCreator(list){
    let lista = ""
    for(let i =0; i<list.length;i++){
        lista += `<li>${list[i]}</li>`
    }
    return lista
}

function hideDialog(){
    dialogBox.close()
}
