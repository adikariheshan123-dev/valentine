//Elements
const envelope= document.getElementById('envelope-container');
const letter= document.getElementById('letter-container');
const noBtn= document.querySelector('.no-btn');
const yesBtn= document.querySelector('.btn[alt="yes"]');

const title=document.getElementById('letter-title');
const catimg=document.getElementById('letter-cat');
const buttons=document.getElementById('letter-buttons');
const finaltext=document.getElementById('final-text');

//click envelope
envelope.addEventListener('click',()=>{
    envelope.style.display='none'; 
    letter.style.display='block';

    setTimeout(()=>{
        document.querySelector('.letter-window').classList.add('open');

    },50);

})

// logic to make yes btn to grow

let yesscale=1;

yesBtn.style.position='relative';
yesBtn.style.transformOrigin='center center';
yesBtn.style.transition='transform 0.3s ease';

noBtn.addEventListener('click',()=>{
    yesscale+=2;

    if(yesBtn.style.position!=='fixed'){
        yesBtn.style.position='fixed';
        yesBtn.style.top='50%';
        yesBtn.style.left='50%';
        yesBtn.style.transform='translate(-50%, -50%) scale(${yesscale})';
        
    }else{
        yesBtn.style.transform=`translate(-50%, -50%) scale(${yesscale})`;
    }

})

//yes is clicked
yesBtn.addEventListener('click',()=>{
    title.textContent='yepppeeee';

    catimg.src='cat_dance.gif';
    document.querySelector=('.letter-window').classList.add('final');

    buttons.style.display='none';

    finaltext.style.display='block';

});
