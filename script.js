 function perfil(nome, idade, cidade){
     var tabela = document.getElementById('tabela');
     var quantasLinhas = tabela.rows.length;
     var linha = tabela.insertRow(quantasLinhas);

     var cellNome = linha.insertCell(0);
     var cellIdade = linha.insertCell(1);
     var cellCidade = linha.insertCell(2);

     cellNome.innerHTML = nome;
     cellIdade.innerHTML = idade;
     cellCidade.innerHTML = cidade;
     
     alert('Perfil Cadastrado com sucesso!')
 }
