function verificar() {
  var vel = document.getElementById('vel')
  var res = document.getElementById('res')
  if (vel.value <= 60) {
    res.innerHTML = `Voce passou a ${vel.value} Km/h, dentro do permitido, siga viagem`
    imagem.src = 'motohappy.jpg'
  }else  {
    res.innerHTML = `Voce passou a ${vel.value} Km/h, acima do permitido, MULTADO!`
    imagem.src = 'motobad.jpg'
  }
}