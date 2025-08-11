
    const form=document.getElementsById('reg-form');
    const success=document.getElementById('success')

    form.addEventListener('submit',function(event){
        event.preventDefault();
        success.style.display='block';
        form.reset();
    });
