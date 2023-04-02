let rand = Math.floor(Math.random() * 16) + 1
console.log(rand)
let count = 4;
let image = `/Users/nikolas/Desktop/images/pirat 2.png`
$(`button`).click(
    function () {
        let num = $(`input`).val();
        if (num == rand)
            $(`#out`).text(`Красава!!!`) + $(`#image1`).attr(`src`, image);
        else if (num > rand)
            $(`#out`).text(`Многовато!`);
        else if (num < rand)
            $(`#out`).text(`Маловато!`);
        count--
        if (count == 0)
            $(`#out`).text(`Всё фигня,Давай по новой!!!`) + $(input).hide();
               
    }
    
)  