function validar() {
	var estado = document.getElementById('estado').value;
	var empresa = document.getElementById('nomeEmpresa').value;
	var cidade = document.getElementById('cidade').value;
	var pessoa = document.form.pessoa;
	var email = document.getElementById('email').value;
	var mensagem = document.getElementById('mensagem').value;
	
	if(estado == '') {
		alert('Selecione algum estado');
		return false;
	}else if(empresa == '') {
		alert('Prencha o campo da empresa');
		return false;
	}else if(cidade == ''){
		alert('Preencha o campo cidade');
		return false;
	}else if(!pessoa[0].checked && !pessoa[1].checked){
		alert('Selecione o tipo de pessoa');
		return false;
	}else if(email == ''){
		alert('Preencha o campo de email');
		return false;
	}else if(mensagem == ''){
		alert('O campo de imagem está vazio, preencha-o');
		return false;
	}else{
		alert('Mensagem enviada com sucesso');
		return true;
	}
}