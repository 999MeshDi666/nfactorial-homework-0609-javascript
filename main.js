function getRandomStory(storyList){
    let random_number = Math.floor(Math.random() * 2);
    return storyList[random_number];  
}
$('.mad-libs__form').submit((e)=>{
    let storyList = [
        `Девушка из Шотландии по имени ${$('#InputPersonName').val()} попыталась ${$('#InputVrb').val()} в ${$('#InputNoun').val()} двоюродного брата и застряла. 
        Она пыталась доказать ${$('#InputCharacter').val()}, что легко может там поместиться. Вскоре ${$('#InputPersonName').val()} поняла, что ошиблась. 
        Для спасения ${$('#InputPersonName').val()} ${$('#InputCharacter').val()} разрезал ножом часть ${$('#InputNoun').val()}.`,

        `${$('#InputPersonName').val()} в инвалидном кресле попытался убить ${$('#InputCharacter').val()} и бросил в него ${$('#InputNoun').val()}. 
        Оказалось, в ${$('#InputNoun').val()} лежал револьвер. Пистолет вывалился и выстрелил ${$('#InputPersonName').val()} в ногу. 
        Однажды, ${$('#InputPersonName').val()} решил ${$('#InputVrb').val()} ${$('#InputCharacter').val()} с заднего двора его дома более нестандартным методом. 
        ${$('#InputPersonName').val()} хотел сжечь ${$('#InputCharacter').val()}, но вместо этого взорвал газон. К счастью, от ${$('#InputCharacter').val()} ему избавиться все же удалось.`,
    
        `${$('#InputPersonName').val()}  ${$('#InputVrb').val()} ${$('#InputCharacter').val()} с мотоцикла. ${$('#InputCharacter').val()} не смогла удержать равновесие, упала и ударилась головой о ${$('#InputNoun').val()}. К счастью, полученные травмы не угрожали жизни. `
    ]

    e.preventDefault();
    $('.mad-text').html(getRandomStory(storyList))
    $('.mad-libs__form').trigger('reset');
});


let bit = 1;
function bitDepth(color){
    for(let i = 0; i < color; i++){
        bit = bit * 2
    }
    return bit;
}
console.log();

$('.tom-thumbs__form').submit((e)=>{
    e.preventDefault();

    bitDepth($('#InputColor').val());
    let resolution = $('#InputWidth').val() * $('#InputHeight').val();
    let totalSize = resolution * bit;
    console.log($('#InputColor').val())
    $('.thumb-text').html(`File size is ${totalSize}`);

    $('.mad-libs__form').trigger('reset');

})