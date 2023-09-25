const container = document.querySelector("#container")
let div_list = [];
let sub_div_list = [];

for (i=1;i<=16;i++) {
    const div = document.createElement('div')
    div.style.backgroundColor = 'orange';
    div.style.border = '1px solid black';
    div.style.height = '28px';
    div.style.width = '469px';
    div.style.display = 'flex';
    div.style.flexDirection = 'row'; 
    div_list.push(div);

    container.appendChild(div);
}


for (let i = 0; i < 16; i++) {
    const div = div_list[i]; // Get the current div
    for (let j = 0; j < 16; j++) {
        const sub_div = document.createElement('div');
        sub_div.style.backgroundColor = 'yellow';
        sub_div.style.border = '1px solid green';
        sub_div.style.height = '27px';
        sub_div.style.width = '28px';
        

        // red > rgb(249, 3, 3)
        // yellow > rgb(247, 247, 5)
        //Hover Effect
        sub_div.addEventListener('mouseover', function () {
            if (sub_div.style.backgroundColor == 'yellow' || sub_div.style.backgroundColor == 'rgb(247, 247, 5)') {
                sub_div.style.backgroundColor = 'red';
            }
        });

        sub_div.addEventListener('mouseout', function () {
            if (sub_div.style.backgroundColor == 'red') {
                sub_div.style.backgroundColor = 'yellow';
            }
        });
        
        //Painting
        sub_div.addEventListener('click', function () {
            if (sub_div.style.backgroundColor == 'yellow' || sub_div.style.backgroundColor == 'rgb(247, 247, 5)') {
                sub_div.style.backgroundColor = 'rgb(247, 247, 5)';
            } else if (sub_div.style.backgroundColor == 'red'){
                sub_div.style.backgroundColor = 'rgb(249, 3, 3)';
            } else if (sub_div.style.backgroundColor == 'rgb(249, 3, 3)') {
                sub_div.style.backgroundColor = 'rgb(247, 247, 5)';
            }
        });
        

        sub_div_list.push(sub_div);
        
        div.appendChild(sub_div); 
    }
}



//Refresh Button
const refreshButton = document.querySelector('#refreshButton');
refreshButton.addEventListener('click', function() {
    location.reload();
});
    
    
    
