function cadEstudante(){

    estudante = new Estudante();

    nome = document.getElementById('nome').value;
    idade = document.getElementById('idade').value;
    email = document.getElementById('email').value;
    turma = document.getElementById('turma').value;
    telefone = document.getElementById('telefone').value;

    estudante.setNome(nome);
    estudante.setIdade(idade);
    estudante.setEmail(email);
    estudante.setTurma(turma);
    estudante.setTelefone(telefone);

    console.log(estudante);

}

function cadTurma(){
    turma = new Turma();

    serie = document.getElementById('serie').value;
    nome = document.getElementById('nome').value;
    qtdAlunos = document.getElementById('qtdAlunos').value;
    periodo = document.getElementById('periodo').value;

    turma.setSerie(serie);
    turma.setNome(nome);
    turma.setQtdAlunos(qtdAlunos);
    turma.setPeriodo(periodo);

    console.log(turma);

}